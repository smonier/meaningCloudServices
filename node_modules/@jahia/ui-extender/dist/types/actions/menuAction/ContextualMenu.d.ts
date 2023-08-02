import React from 'react';
import { MenuProps } from '~/actions';
export type ContextualMenuProps = {
    setOpenRef: React.MutableRefObject<(e: Event, newProps: MenuProps) => void>;
    loading?: React.FunctionComponent<object>;
    actionKey: string;
};
export declare class ContextualMenu extends React.Component<ContextualMenuProps> {
    onClickRef: React.MutableRefObject<(p: MenuProps, e: Event) => void>;
    constructor(props: ContextualMenuProps);
    open(e: Event, newProps: MenuProps): void;
    render(): React.JSX.Element;
}
