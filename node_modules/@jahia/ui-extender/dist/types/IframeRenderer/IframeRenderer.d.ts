import React from 'react';
import PropTypes from 'prop-types';
declare global {
    interface Window {
        jahia: {
            ui: {
                IframeRenderer: React.FunctionComponent<IframeRendererProps>;
            };
        };
    }
}
export type IframeRendererProps = {
    url: string;
};
export declare const IframeRenderer: {
    (props: IframeRendererProps): React.JSX.Element;
    propTypes: {
        url: PropTypes.Validator<string>;
    };
};
export declare const getIframeRenderer: (url: string) => React.JSX.Element;
