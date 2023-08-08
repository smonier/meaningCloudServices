import {registry} from '@jahia/ui-extender';
import register from './RequestMeaningCloudServices/register';

export default function () {
    registry.add('callback', 'requestMeaningCloudServices', {
        targets: ['jahiaApp-init:20'],
        callback: register
    });
}

