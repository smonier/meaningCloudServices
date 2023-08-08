import Constants from '../MeaningCloudServices.constants';
import AutomatedInterests from './AutomatedInterests';

export const registerInterestsService = registry => {
    console.log('Register AutomatedInterests selector');
    registry.add('selectorType', Constants.SELECTOR_TYPES.AUTOMATED_INTERESTS, {cmp: AutomatedInterests, supportMultiple: true, service: 'categorisation'});
}