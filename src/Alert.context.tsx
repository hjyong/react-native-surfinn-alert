import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from 'react';
import {AlertView} from './Alert.view';
import uuid from 'surfinn-uuid';

type TAlertId = string;

export interface IAlertState {
  id?: TAlertId;
  show?: boolean;
  backdrop?: boolean;
  backdropOpacity?: number;
  children: ReactNode;
}

const initialAlerts: IAlertState[] = [];

const reducer = (state: any, action: any) => {
  let alert = null;
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: action.id,
          show: false,
          children: action.children,
          backdrop: action.backdrop,
          backdropOpacity: action.backdropOpacity,
        },
      ];

    case 'REMOVE':
      return state.filter((_alert: IAlertState) => _alert.id !== action.id);

    case 'OPEN':
      alert = state.find((_alert: IAlertState) => _alert.id === action.id);
      if (alert) {
        return [
          ...state.filter((_alert: IAlertState) => _alert.id !== action.id),
          {
            // @ts-ignore
            ...alert,
            show: true,
          },
        ];
      } else {
        return state;
      }

    case 'CLOSE':
      alert = state.find((_alert: IAlertState) => _alert.id === action.id);
      if (alert) {
        return [
          ...state.filter((_alert: IAlertState) => _alert.id !== action.id),
          {
            // @ts-ignore
            ...alert,
            show: false,
          },
        ];
      } else {
        return state;
      }

    default:
      return state;
  }
};

export interface IAlertContext {
  add: (state: IAlertState) => string;
  remove: (id: string) => void;
  open: (id: string) => void;
  close: (id: string) => void;
}

export const AlertContext = createContext<IAlertContext | null>(null);

export const useAlert = () => useContext(AlertContext);

export interface IAlertProviderProps {
  children: ReactNode;
}

export const AlertProvider = ({children}: IAlertProviderProps) => {
  const [alerts, dispatch] = useReducer(reducer, initialAlerts);

  const add = useCallback((state: IAlertState) => {
    console.log('Alert.context add', state);
    const id = uuid.v4();
    dispatch({type: 'ADD', ...state, id});
    return id;
  }, []);

  const remove = useCallback((id: string) => {
    dispatch({type: 'REMOVE', id});
  }, []);

  const open = useCallback((id: string) => {
    dispatch({type: 'OPEN', id});
  }, []);

  const close = useCallback((id: string) => {
    dispatch({type: 'CLOSE', id});
  }, []);

  const context: IAlertContext = useMemo(
    () => ({
      add,
      remove,
      open,
      close,
    }),
    [add, remove, open, close],
  );
  return (
    <AlertContext.Provider value={context}>
      {children}
      {alerts
        .filter((alert: IAlertState) => alert.show)
        .map((alert: IAlertState) => {
          return (
            <AlertView
              key={alert.id}
              backdrop={alert.backdrop}
              backdropOpacity={alert.backdropOpacity}>
              {alert.children}
            </AlertView>
          );
        })}
    </AlertContext.Provider>
  );
};
