import React from 'react';
import PropTypes from 'prop-types';
import { StoredService } from '~/registry/service';
export type DisplayActionsProps = {
    /**
     * The target from which the items will be selected
     */
    target: string;
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
    /**
     * Additional filter function
     */
    filter?: (value: StoredService) => boolean;
    [key: string]: unknown;
};
export declare const DisplayActions: {
    ({ target, filter, ...others }: DisplayActionsProps): React.JSX.Element;
    defaultProps: {
        filter: any;
    };
    propTypes: {
        /**
         * The target from which the items will be selected
         */
        target: PropTypes.Validator<string>;
        /**
         * The render component
         */
        render: PropTypes.Validator<(...args: any[]) => any>;
        /**
         * The loading component
         */
        loading: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * Additional filter function
         */
        filter: PropTypes.Requireable<(...args: any[]) => any>;
    };
};
