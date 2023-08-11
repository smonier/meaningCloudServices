import React from 'react';
import {useTranslation} from 'react-i18next';
import {useSiteInfo, useNodeInfo} from '@jahia/data-helper';
import {useSelector} from 'react-redux';

export const RequestMeaningCloudServicesAction = ({path, render: Render, ...otherProps}) => {

    const {t} = useTranslation('meaningCloudServices');
    const {language, site} = useSelector(state => ({language: state.language, site: state.site}));
    const {siteInfo, loading} = useSiteInfo({siteKey: site, displayLanguage: language});
    const {node, nodeLoading: nodeLoading} = useNodeInfo({path: path, language: language}, {getDisplayName: true});

    if (loading || !siteInfo || nodeLoading || !node) {
        return null;
    }

    if (otherProps.service == "topics") {
        return <Render {...otherProps}
            buttonLabel={t('label.triggerTopicsRequest', {
                languageDisplay: language,
                displayName: node.displayName

            })}
            onClick={async () => {
                const formData = new FormData();
                formData.append('language', language);
                formData.append('service', otherProps.service);
                formData.append('button',false);

                const response = await fetch(`${contextJsParameters.contextPath}/cms/editframe/default/${language}${path}.requestMeaningCloudServices.do`, {
                    method: 'POST',
                    body: formData
                });
            }}/>
    } 
    if (otherProps.service == "classification") {
        return <Render {...otherProps}
            buttonLabel={t('label.triggerClassificationRequest', {
                languageDisplay: language,
                displayName: node.displayName
            })}
            onClick={async () => {
                const formData = new FormData();
                formData.append('language', language);
                formData.append('service', otherProps.service);
                formData.append('button',false);

                const response = await fetch(`${contextJsParameters.contextPath}/cms/editframe/default/${language}${path}.requestMeaningCloudServices.do`, {
                    method: 'POST',
                    body: formData
                });
            }}/>
    } 

    

    if (otherProps.service == "categorisation") {
        return <Render {...otherProps}
            buttonLabel={t('label.triggerCategorisationRequest', {
                languageDisplay: language,
                displayName: node.displayName
            })}
            onClick={async () => {
                const formData = new FormData();
                formData.append('language', language);
                formData.append('service', otherProps.service);
                formData.append('button',false);

                const response = await fetch(`${contextJsParameters.contextPath}/cms/editframe/default/${language}${path}.requestMeaningCloudServices.do`, {
                    method: 'POST',
                    body: formData
                });
            }}/>
    } 
};

