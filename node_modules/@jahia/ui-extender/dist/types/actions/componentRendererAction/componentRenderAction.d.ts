import React from 'react';
import PropTypes from 'prop-types';
type RenderProps = {
    id: string;
    onClick: () => void;
};
type BaseProps = {
    onExited: () => void;
};
export type ComponentRendererActionComponentProps<Type extends BaseProps> = {
    render: React.FunctionComponent<Partial<RenderProps>>;
    componentToRender: React.FunctionComponent<Type>;
} & RenderProps;
export declare const ComponentRendererActionComponent: {
    <Type extends BaseProps>({ render: Render, componentToRender, ...otherProps }: ComponentRendererActionComponentProps<Type>): React.JSX.Element;
    propTypes: {
        context: PropTypes.Validator<object>;
        render: PropTypes.Validator<(...args: any[]) => any>;
        componentToRender: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
};
/**
 * Context properties :
 *
 * menu : name of the target of actions to display in the menu
 * menuRenderer
 * menuItemRenderer
 */
export declare const componentRendererAction: {
    component: {
        <Type extends BaseProps>({ render: Render, componentToRender, ...otherProps }: ComponentRendererActionComponentProps<Type>): React.JSX.Element;
        propTypes: {
            context: PropTypes.Validator<object>;
            render: PropTypes.Validator<(...args: any[]) => any>;
            componentToRender: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        };
    };
};
export {};
