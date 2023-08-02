import {registry} from '@jahia/ui-extender';
import register from './RequestMeaningCloudServices/register';

export default function () {
    registry.add('callback', 'requestMeaningCloudServices', {
        targets: ['jahiaApp-init:60'],
        callback: register
    });
}

console.debug('%c MeaningCloud service is activated', 'color: #3c8cba');