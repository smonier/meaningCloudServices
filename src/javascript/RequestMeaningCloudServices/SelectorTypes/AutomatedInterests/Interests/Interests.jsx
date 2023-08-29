import {useTranslation} from 'react-i18next';
import {MultipleInput} from '~/DesignSystem/MultipleInput';
import React from 'react';
import PropTypes from 'prop-types';
import {adaptSelection} from './Interests.utils';
import {FieldPropTypes} from '~/ContentEditor.proptypes';


export const Interests = ({field, value, id, onChange, onBlur}) => {
    const {t} = useTranslation('meaningCloudServices');


    const selectorOption = field.selectorOptions && field.selectorOptions.find(option => option.name === 'separator');
    const separator = selectorOption ? selectorOption.value : ',';

    const adaptOptions = options => (
        options.map(data => ({
            value: data,
            label: data
        }))
    );


    return (
        <MultipleInput
            creatable
            async
            name={id}
            id={id}
            options={field.data && field.data.values && adaptOptions(field.data.values)}
            value={value && adaptOptions(value)}
            readOnly={field.readOnly}
            placeholder={t('meaningCloudServices:automatedInterests.tagsField.placeholder')}
            formatCreateLabel={value => t('meaningCloudServices:automatedInterests.tagsField.help', {tagName: value})}
            onChange={selection => {
                const newSelection = selection && selection.map(data => data.value);
                const adaptedSelection = adaptSelection(newSelection, separator);
                onChange(adaptedSelection);
            }}
            onBlur={onBlur}
        />
    );
};

Interests.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.arrayOf(PropTypes.string),
    field: FieldPropTypes.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired
};
