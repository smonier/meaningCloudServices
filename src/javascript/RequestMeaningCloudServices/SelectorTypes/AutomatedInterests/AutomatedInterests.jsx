import React, {Suspense, useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Loading, Typography} from '@jahia/moonstone';
import {withStyles, Grid} from '@material-ui/core';
import {useTranslation} from 'react-i18next';
import {useSiteInfo, useNodeInfo} from '@jahia/data-helper';
import {useSelector} from 'react-redux';
import {registry} from '@jahia/ui-extender';
import {weakrefContentPropsQuery} from "../Components";
import {useQuery} from "@apollo/react-hooks";

const styles = () => ({
    button: {
        position: 'relative',
        top: -20
    },
    errorMessage: {
        color: '#E8B606',
        fontSize: 12,
        fontFamily: 'Nunito Sans, sans-serif',
        fontWeight: 600,
        marginTop: 10
    },
    // TODO remove, make sure native style works
    typography: {
        color: 'rgba(19, 28, 33, 0.6)',
        fontSize: 12,
        fontFamily: 'Nunito Sans, sans-serif',
        fontWeight: 600
    }
});

const mergeArrayValues = (a = [], b = []) => {
    return [...new Set([...a, ...b])];
};

const AutomatedInterests = ({path, render: Render, ...props}) => {
    const {t} = useTranslation('meaningCloudServices');
    const [error, setError,updateLoading] = useState(null);
    const {editorContext, onChange, value, classes, inputContext} = props;
    const {language, site} = useSelector(state => ({language: state.language, site: state.site}));
    const {siteInfo,loading} = useSiteInfo({siteKey: site, displayLanguage: language});
    const {node, nodeLoading: nodeLoading} = useNodeInfo({path: path, language: language}, {getDisplayName: true});    
    const managedValue = React.useMemo(() => (value || []), [value]);

    node;
    siteInfo;
    nodeLoading;

    const weakNodeInfo = useQuery(weakrefContentPropsQuery, {
        variables:{
            uuid : editorContext.nodeData.displayableNode.uuid
        },
        skip: !editorContext.nodeData.displayableNode.uuid
    });

    const weakNode = weakNodeInfo?.data?.jcr?.result;
    const superTypes = weakNode?.primaryNodeType.supertypes?.map(({name}) => name) || [];
    const mixinTypes = weakNode?.mixinTypes.map(({name}) => name) || [];
    const primaryNodeType = weakNode?.primaryNodeType?.name;
    const valueNodeTypes = [primaryNodeType,...superTypes,...mixinTypes];
    const isContent = (editorContext && valueNodeTypes.includes("jnt:content")) || (editorContext && valueNodeTypes.includes("jnt:page"));

    const formData = new FormData();
    formData.append('language', language);
    formData.append('service', inputContext.selectorType.service);
    formData.append('button',true);

    const Interests = registry.get('selectorType', 'Text').cmp
    const Tag = registry.get('selectorType', 'Tag').cmp;

    return (
        <Suspense fallback="AutoInterests ...">
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >
                <Grid item>
                    <Typography color="beta" variant="omega" className={classes.typography}>
                        {t('automatedInterests.tagsField.help')}
                    </Typography>
                </Grid>
                <Grid item>
                    {isContent && <Button variant="outlined"
                        label={loading ? t('automatedInterests.tagsField.loading') : t('automatedInterests.tagsField.tag')}
                        isDisabled={loading}
                        className={classes.button}
                        icon={loading ? <Loading/> : null}
                        onClick={async () => {

                            const resp = await fetch(`${contextJsParameters.contextPath}/cms/editframe/default/${language}${editorContext.path}.requestMeaningCloudServices.do`, {
                                method: 'POST',
                                body: formData,
                                headers: {
                                    accept: "application/json"
                                  }
                            });

                            try {

                                const myData = await resp.json();
                           
                                const list = myData.tags;
                                if (list.length < 1) {
                                    setError(t('automatedInterests.tagsField.empty'));
                                    return;
                                }

              
                                onChange(mergeArrayValues(managedValue, list.map(a => a.toLowerCase())));
                            
                            } catch(e) {
                                console.log('error:', e.message);
                            }
                        }}/> }
                </Grid>
            </Grid>
            <Tag {...props}/>
            {
                error &&
                <Typography color="beta" variant="omega" className={classes.errorMessage}>
                    [{error}]
                </Typography>
            }
        </Suspense>
    );
};

AutomatedInterests.propTypes = {
    value: PropTypes.arrayOf(PropTypes.string),
    field: PropTypes.object,
    onChange: PropTypes.func,
    editorContext: PropTypes.object,
    classes: PropTypes.object
};

export default withStyles(styles)(AutomatedInterests);