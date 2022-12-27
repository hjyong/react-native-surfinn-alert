import React, { ReactNode } from 'react';
type TAlertId = string;
export interface IAlertState {
    id?: TAlertId;
    show?: boolean;
    backdrop?: boolean;
    backdropOpacity?: number;
    children: ReactNode;
}
export interface IAlertContext {
    add: (state: IAlertState) => string;
    remove: (id: string) => void;
    open: (id: string) => void;
    close: (id: string) => void;
}
export declare const AlertContext: React.Context<IAlertContext | null>;
export declare const useAlert: () => IAlertContext | null;
export interface IAlertProviderProps {
    children: ReactNode;
}
export declare const AlertProvider: ({ children }: IAlertProviderProps) => JSX.Element;
export {};
//# sourceMappingURL=Alert.context.d.ts.map