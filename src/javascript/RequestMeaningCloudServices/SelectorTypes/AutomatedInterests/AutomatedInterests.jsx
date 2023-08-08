import React, {Suspense, useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Loading, Typography} from '@jahia/moonstone';
import {withStyles, Grid} from '@material-ui/core';
import {useTranslation} from 'react-i18next';
import {registry} from '@jahia/ui-extender';

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

const AutomatedInterests = props => {
    const client = useApolloClient();
    const {t} = useTranslation('automated-interests');
    const [loading, updateLoading] = useState(false);
    const [error, setError] = useState(null);
    const {editorContext, onChange, value, classes, service} = props;
    const {node, nodeLoading: nodeLoading} = useNodeInfo({path: path, language: language}, {getDisplayName: true});


    const isContent = (editorContext && editorContext.nodeTypeName === 'jnt:news');
    console.log(`EditorContext: ${editorContext} - ${editorContext.nodeTypeName}`);
    const TextTag = registry.get('selectorType', 'AutomatedInterests').cmp;

    return (
        <Suspense fallback="AutoTextTags ...">
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
                    {<Button variant="outlined"
                        label={loading ? t('automatedInterests.tagsField.loading') : t('automatedInterests.tagsField.tag')}
                        isDisabled={loading}
                        className={classes.button}
                        icon={loading ? <Loading/> : null}
                        onClick={async () => {
                            updateLoading(true);
                            const formData = new FormData();
                            formData.append('language', language);
                            formData.append('service', service);
                            const response = await fetch(`${contextJsParameters.contextPath}/cms/editframe/default/${language}${path}.requestMeaningCloudServices.do`, {
                                method: 'POST',
                                body: formData
                            });
                            if (!response.ok) {
                                const message = `An error has occured: ${response.status}`;
                                updateLoading(false);
                                throw new Error(message);
                              }
 
                    }}/> }
                </Grid>
            </Grid>
            <TextTag {...props}/>
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