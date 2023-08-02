import React from 'react';
export type ContextType = {
    render?: <Type>(key: string, component: React.FunctionComponent<Type>, props?: React.PropsWithChildren<Type>) => void;
    setProperties?: <Type>(key: string, props: React.PropsWithChildren<Type>) => void;
    destroy?: (key: string) => void;
};
export declare const ComponentRendererContext: React.Context<ContextType>;
export declare const ComponentRendererConsumer: React.Consumer<ContextType>;
