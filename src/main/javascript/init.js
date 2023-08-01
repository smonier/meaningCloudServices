import {registry} from '@jahia/ui-extender';
import register from './RequestChatGPTKeywords/register';

export default function () {
    registry.add('callback', 'requestChatGPTKeywords', {
        targets: ['jahiaApp-init:60'],
        callback: register
    });
}

console.debug('%c chatGPT service is activated', 'color: #3c8cba');
