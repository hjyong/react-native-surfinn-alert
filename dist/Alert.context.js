import React, { createContext, useCallback, useContext, useMemo, useReducer, } from 'react';
import { AlertView } from './Alert.view';
import uuid from 'surfinn-uuid';
const initialAlerts = [];
const reducer = (state, action) => {
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
            return state.filter((_alert) => _alert.id !== action.id);
        case 'OPEN':
            alert = state.find((_alert) => _alert.id === action.id);
            if (alert) {
                return [
                    ...state.filter((_alert) => _alert.id !== action.id),
                    {
                        // @ts-ignore
                        ...alert,
                        show: true,
                    },
                ];
            }
            else {
                return state;
            }
        case 'CLOSE':
            alert = state.find((_alert) => _alert.id === action.id);
            if (alert) {
                return [
                    ...state.filter((_alert) => _alert.id !== action.id),
                    {
                        // @ts-ignore
                        ...alert,
                        show: false,
                    },
                ];
            }
            else {
                return state;
            }
        default:
            return state;
    }
};
export const AlertContext = createContext(null);
export const useAlert = () => useContext(AlertContext);
export const AlertProvider = ({ children }) => {
    const [alerts, dispatch] = useReducer(reducer, initialAlerts);
    const add = useCallback((state) => {
        const id = uuid.v4();
        dispatch({ type: 'ADD', ...state, id });
        return id;
    }, []);
    const remove = useCallback((id) => {
        dispatch({ type: 'REMOVE', id });
    }, []);
    const open = useCallback((id) => {
        dispatch({ type: 'OPEN', id });
    }, []);
    const close = useCallback((id) => {
        dispatch({ type: 'CLOSE', id });
    }, []);
    const context = useMemo(() => ({
        add,
        remove,
        open,
        close,
    }), [add, remove, open, close]);
    return (<AlertContext.Provider value={context}>
      {children}
      {alerts
            .filter((alert) => alert.show)
            .map((alert) => {
            return (<AlertView key={alert.id} backdrop={alert.backdrop} backdropOpacity={alert.backdropOpacity}>
              {alert.children}
            </AlertView>);
        })}
    </AlertContext.Provider>);
};
//# sourceMappingURL=Alert.context.js.map