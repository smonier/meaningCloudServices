import React from 'react';
export type DisplayActionProps = {
    /**
     * The key of the action to display
     */
    actionKey: string;
    /**
     * The action context
     */
    context?: object;
    /**
     * The render component
     */
    render: React.FunctionComponent<object>;
    /**
     * The render component
     */
    loading?: React.FunctionComponent<object>;
    [key: string]: unknown;
};
declare class DisplayAction extends React.PureComponent<DisplayActionProps> {
    id: string;
    RenderWrapper: React.FunctionComponent;
    constructor(props: DisplayActionProps);
    render(): React.JSX.Element;
}
export { DisplayAction };
