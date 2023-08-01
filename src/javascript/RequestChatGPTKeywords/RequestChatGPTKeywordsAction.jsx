import React from 'react';
import {useTranslation} from 'react-i18next';
import {useSiteInfo, useNodeInfo} from '@jahia/data-helper';
import {useSelector} from 'react-redux';
import {toIconComponentFunction} from '@jahia/moonstone';

export const RequestChatGPTKeywordsAction = ({path, render: Render, ...otherProps}) => {
    const {t} = useTranslation('chatGPTKeyword');
    const {language, site} = useSelector(state => ({language: state.language, site: state.site}));
    const {siteInfo, loading} = useSiteInfo({siteKey: site, displayLanguage: language});
    const {node, nodeLoading: nodeLoading} = useNodeInfo({path: path, language: language}, {getDisplayName: true});

    if (loading || !siteInfo || nodeLoading || !node) {
        return null;
    }

    return <Render {...otherProps}
                   buttonLabel={t('label.requestKeywords', {
                       languageDisplay: language,
                       displayName: node.displayName
                   })}
                   onClick={async () => {
                       const formData = new FormData();
                       formData.append('language', language);
                       const response = await fetch(`${contextJsParameters.contextPath}/cms/editframe/default/${language}${path}.requestChatGPTKeywords.do`, {
                           method: 'POST',
                           body: formData
                       });
                   }}/>


};

