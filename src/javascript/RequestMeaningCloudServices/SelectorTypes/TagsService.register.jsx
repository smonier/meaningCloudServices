import Constants from '../MeaningCloudServices.constants';

import AutomatedTextTags from './AutomatedTextTags';

export const registerTagsService = registry => {
    console.log('Register AutomatedTextTags selector');
    registry.addOrReplace('selectorType', Constants.SELECTOR_TYPES.AUTOMATED_TEXTTAGS, {cmp: AutomatedTextTags, supportMultiple: true, service: 'classification'});
};