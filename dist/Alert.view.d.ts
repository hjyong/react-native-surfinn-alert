import React from 'react';
export interface IAlertViewProps {
    backdrop?: boolean;
    backdropOpacity?: number;
    children: React.ReactNode;
}
export declare const AlertView: ({ backdrop, backdropOpacity, children, }: IAlertViewProps) => JSX.Element;
