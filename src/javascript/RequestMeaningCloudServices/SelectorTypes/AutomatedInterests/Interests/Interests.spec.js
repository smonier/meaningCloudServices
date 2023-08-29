import React from 'react';
import {shallow} from '@jahia/test-framework';

import {Interests} from './Interests';

jest.mock('@apollo/react-hooks', () => {
    let queryresponsemock = {
        client: {
            query: () => {
                return [];
            }
        }
    };
    return {
        useApolloClient: () => queryresponsemock
    };
});

describe('Interests component', () => {
    let props;

    beforeEach(() => {
        props = {
            id: 'Interests1',
            field: {
                name: 'myOption',
                displayName: 'My option',
                selectorType: 'Interests',
                readOnly: false,
                multiple: true,
                data: {
                    name: 'myOption',
                    values: ['tag1', 'tag2', 'tag3']
                },
                jcrDefinition: {},
                targets: []
            },
            onChange: jest.fn()
        };
    });

    it('should bind id correctly', () => {
        const cmp = shallow(<Interests {...props}/>);

        expect(cmp.props().id).toBe(props.id);
    });

    it('should display each option given', () => {
        const cmp = shallow(<Interests {...props}/>);

        const labels = cmp.props().options.map(o => o.label);
        const values = cmp.props().options.map(o => o.value);
        props.field.data.values.forEach(value => {
            expect(values).toContain(value);
            expect(labels).toContain(value);
        });
    });

    it('should use initial value', () => {
        props.value = ['healthy'];
        const cmp = shallow(<Interests {...props}/>);

        expect(cmp.props().value).toEqual([{label: 'healthy', value: 'healthy'}]);
    });

    it('should call onChange', () => {
        const cmp = shallow(<Interests {...props}/>);
        const selection = [{value: 'tag1', label: 'tag1'}, {value: 'tag2', label: 'tag2'}];
        cmp.simulate('change', selection);

        expect(props.onChange.mock.calls.length).toBe(1);
        expect(props.onChange).toHaveBeenCalledWith(['tag1', 'tag2']);
    });

    it('should set readOnly to true when fromdefinition is readOnly', () => {
        testReadOnly(true);
    });

    it('should set readOnly to false when fromdefinition is not readOnly', () => {
        testReadOnly(false);
    });

    const testReadOnly = function (readOnly) {
        props.field.readOnly = readOnly;
        const cmp = shallow(<Interests {...props}/>);

        expect(cmp.props().readOnly).toEqual(readOnly);
    };
});
