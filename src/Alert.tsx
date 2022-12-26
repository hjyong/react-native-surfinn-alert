import {forwardRef, ReactNode, useEffect} from 'react';
import {useAlert} from './Alert.context';

export interface IAlertProps {
  children: ReactNode;
  backdrop?: boolean;
  backdropOpacity?: number;
}

export const Alert = forwardRef(
  (
    {backdrop = false, backdropOpacity = 0.1, children}: IAlertProps,
    ref: any,
  ) => {
    const {add, remove, open, close} = useAlert()!;

    useEffect(() => {
      const id = add({children, backdrop, backdropOpacity});
      ref.current = {
        remove: () => remove(id),
        open: () => open(id),
        close: () => close(id),
      };

      return () => {
        remove(id);
      };
    }, [children, ref, add, remove, open, close, backdrop, backdropOpacity]);

    return null;
  },
);
