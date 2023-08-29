import {Interests} from './Interests';

export const registerInterests = ceRegistry => {
    ceRegistry.add('selectorType', 'Interests', {
        dataType: ['String'],
        labelKey: 'content-editor:label.contentEditor.selectorTypes.tag.displayValue',
        properties: [
            {name: 'description', value: 'content-editor:label.contentEditor.selectorTypes.tag.description'},
            {name: 'iconStart', value: 'Label'}
        ],
        cmp: Interests, supportMultiple: true
    });
};
