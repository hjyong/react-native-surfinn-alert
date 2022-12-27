import { ReactNode } from 'react';
export interface AlertReturnType {
    open: () => void;
    close: () => void;
    remove: () => void;
}
export interface IAlertProps {
    children: ReactNode;
    backdrop?: boolean;
    backdropOpacity?: number;
}
export declare const Alert: import("react").ForwardRefExoticComponent<IAlertProps & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Alert.d.ts.map