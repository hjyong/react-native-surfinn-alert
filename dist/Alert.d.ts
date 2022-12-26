import { ReactNode } from 'react';
export interface IAlertProps {
    children: ReactNode;
    backdrop?: boolean;
    backdropOpacity?: number;
}
export declare const Alert: import("react").ForwardRefExoticComponent<IAlertProps & import("react").RefAttributes<unknown>>;
