package org.jahia.se.modules.meaningCloud.service.impl;

import java.io.IOException;
import java.util.*;
import javax.jcr.RepositoryException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jahia.api.Constants;
import org.jahia.se.modules.meaningCloud.service.RequestMeaningCloudServicesService;
import org.jahia.services.content.JCRNodeWrapper;
import org.jahia.services.content.JCRPropertyWrapperImpl;
import org.jahia.services.content.JCRSessionWrapper;
import org.jahia.services.content.JCRTemplate;
import org.jahia.services.content.LazyPropertyIterator;
import org.jahia.services.content.nodetypes.ExtendedPropertyDefinition;
import org.jahia.utils.LanguageCodeConverters;
import org.osgi.service.cm.ConfigurationException;
import org.osgi.service.cm.ManagedService;
import org.osgi.service.component.annotations.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.meaningcloud.*;
import com.meaningcloud.Request.ParameterValidationException;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;



@Component(service = {RequestMeaningCloudServicesService.class, ManagedService.class}, property = "service.pid=org.jahia.se.modules.meaningCloudServices", immediate = true)
public class RequestMeaningCloudServicesServiceImpl implements RequestMeaningCloudServicesService, ManagedService {

    private static final Logger LOGGER = LoggerFactory.getLogger(RequestMeaningCloudServicesServiceImpl.class);

    private String meaningCloudApikey;
    private String meaningCloudClassModel;
    private String meaningCloudnNamingConvention;
    public  static String inputText ;

    @Override
    public List<String> generateAutoTagsFromClassification(String path, String language) {
            
        try {
                  
            String cleanText = getTextFromNode (path,language);
            JSONArray tagsJsonArray = triggerClassificationRequest(meaningCloudApikey,cleanText,meaningCloudnNamingConvention);

            ArrayList<String> tagsJavaArrayList = new ArrayList<>();

            // Iterate through the JSON array and extract the values
            for (int i = 0; i < tagsJsonArray.length(); i++) {
                 JSONObject jsonObject = tagsJsonArray.getJSONObject(i);
                    // Get the values of the named elements
                    String[] array = jsonObject.getString("value").split(",\\s*|-\\s*");
                    for (String item : array) {
                        tagsJavaArrayList.add(item.trim().replaceAll(" ", "-"));
                    }
            }
            HashSet<String> uniqueSet = new HashSet<>(tagsJavaArrayList);
            // Convert the set back to an array
            String[] uniqueTagsArray = uniqueSet.toArray(new String[0]);    
            Arrays.sort(uniqueTagsArray);
            List<String> tagList = Arrays.asList(uniqueTagsArray);
            
            return tagList;

        } catch (JSONException message) {
            LOGGER.error("JSONException: "+message);
        } catch (ParameterValidationException e) {
            LOGGER.error("ParameterValidationException: ",e); 
        } catch (IOException e) {
            LOGGER.error("IOException: ",e);
        }
        return null;
    }

    @Override
    public List<String> generateAutoTagsFromCategorisation(String path, String language) {
            
        try {
                  
            String cleanText = getTextFromNode (path,language);
            JSONArray tagsJsonArray = triggerCategorisationRequest(meaningCloudApikey,cleanText,meaningCloudClassModel);
            LOGGER.info("Text to analyse: "+cleanText);
            String[] tagsJavaArray = new String[tagsJsonArray.length()];

            // Iterate through the JSON array and extract the values
            for (int i = 0; i < tagsJsonArray.length(); i++) {
                 JSONObject jsonObject = tagsJsonArray.getJSONObject(i);
                // Get the values of the named elements
                int lastIndex = jsonObject.getString("value").lastIndexOf('>');
                String interest = jsonObject.getString("value").substring(lastIndex + 1);
                int interestWeight = (int) jsonObject.getLong("relevance");
                tagsJavaArray[i] = interest+":"+interestWeight;
                LOGGER.info("interest: "+tagsJavaArray[i]);
            }
            HashSet<String> uniqueSet = new HashSet<>(Arrays.asList(tagsJavaArray));

            // Convert the set back to an array
            String[] uniqueTagsArray = uniqueSet.toArray(new String[0]);  

            Arrays.sort(uniqueTagsArray, Comparator.comparing(s -> {
                int lastIndex = s.lastIndexOf(":");
                return lastIndex == -1 ? s : s.substring(lastIndex);
            }));

            List<String> interestsList = Arrays.asList(uniqueTagsArray);
            
            return interestsList;

        } catch (JSONException message) {
            LOGGER.error("JSONException: "+message);
        } catch (ParameterValidationException e) {
            LOGGER.error("ParameterValidationException: ",e); 
        } catch (IOException e) {
            LOGGER.error("IOException: ",e);
        }
        return null;
    }

    @Override
    public void generateClassification(String path, String language) {
            
        try {
            String cleanText = getTextFromNode (path,language);
            JSONArray tagsJsonArray = triggerClassificationRequest(meaningCloudApikey,cleanText,meaningCloudnNamingConvention);

            ArrayList<String> tagsJavaArrayList = new ArrayList<>();

            // Iterate through the JSON array and extract the values
            for (int i = 0; i < tagsJsonArray.length(); i++) {
                 JSONObject jsonObject = tagsJsonArray.getJSONObject(i);
                    // Get the values of the named elements
                    String[] array = jsonObject.getString("value").split(",\\s*|-\\s*");
                    for (String item : array) {
                        tagsJavaArrayList.add(item.trim().replaceAll(" ", "-"));
                    }
            }
            HashSet<String> uniqueSet = new HashSet<>(tagsJavaArrayList);

            // Convert the set back to an array
            String[] uniqueTagsArray = uniqueSet.toArray(new String[0]);           
            Arrays.sort(uniqueTagsArray);

            final Locale srcLocale = LanguageCodeConverters.getLocaleFromCode(language);
            final boolean result = JCRTemplate.getInstance().doExecuteWithSystemSessionAsUser(null, Constants.EDIT_WORKSPACE, srcLocale, (JCRSessionWrapper session) -> {
                final JCRNodeWrapper node = session.getNode(path);
                node.setProperty("j:tagList", uniqueTagsArray);              
                session.save();
                return true;
            });

            if (result && LOGGER.isInfoEnabled()) {
                LOGGER.info(String.format("Tag Added in %s done for %s", language, path));
            }

        } catch (JSONException message) {
            LOGGER.error("JSONException: "+message);
        } catch (ParameterValidationException e) {
            LOGGER.error("ParameterValidationException: ",e); 
        } catch (IOException e) {
            LOGGER.error("IOException: ",e);
        } catch ( RepositoryException ex) {
            LOGGER.error("Impossible to retrieve tag: "+String.format("ERROR: Tag retrieval in %s for %s", language, path), ex);
        }
    }
    @Override
    public void generateTopics(String path, String language) {
            
        try {
            String cleanText = getTextFromNode (path,language);
            JSONArray tagsJsonArray = triggerTopicsRequest(meaningCloudApikey,cleanText,Request.Language.valueOf(language.toUpperCase()));

            String[] tagsJavaArray = new String[tagsJsonArray.length()];

            // Iterate through the JSON array and extract the values
            for (int i = 0; i < tagsJsonArray.length(); i++) {
                 JSONObject jsonObject = tagsJsonArray.getJSONObject(i);
                    // Get the values of the named elements
                        tagsJavaArray[i] = jsonObject.getString("value").replaceAll(" ", "-");
            }
            HashSet<String> uniqueSet = new HashSet<>(Arrays.asList(tagsJavaArray));

            // Convert the set back to an array
            String[] uniqueTagsArray = uniqueSet.toArray(new String[0]);           
            Arrays.sort(uniqueTagsArray);

            final Locale srcLocale = LanguageCodeConverters.getLocaleFromCode(language);
            final boolean result = JCRTemplate.getInstance().doExecuteWithSystemSessionAsUser(null, Constants.EDIT_WORKSPACE, srcLocale, (JCRSessionWrapper session) -> {
                final JCRNodeWrapper node = session.getNode(path);
                node.setProperty("j:tagList", uniqueTagsArray);              
                session.save();
                return true;
            });

            if (result && LOGGER.isInfoEnabled()) {
                LOGGER.info(String.format("Tag Added in %s done for %s", language, path));
            }

        } catch (JSONException message) {
            LOGGER.error("JSONException: "+message);
        } catch (ParameterValidationException e) {
            LOGGER.error("ParameterValidationException: ",e); 
        } catch (IOException e) {
            LOGGER.error("IOException: ",e);
        } catch ( RepositoryException ex) {
            LOGGER.error("Impossible to retrieve tag: "+String.format("ERROR: Tag retrieval in %s for %s", language, path), ex);
        }
    }

    @Override
    public void generateCategorisation(String path, String language) {
            
        try {
            String cleanText = getTextFromNode (path,language);
            JSONArray tagsJsonArray = triggerCategorisationRequest(meaningCloudApikey,cleanText,meaningCloudClassModel);

            String[] tagsJavaArray = new String[tagsJsonArray.length()];

            // Iterate through the JSON array and extract the values
            for (int i = 0; i < tagsJsonArray.length(); i++) {
                 JSONObject jsonObject = tagsJsonArray.getJSONObject(i);
                // Get the values of the named elements
                int lastIndex = jsonObject.getString("value").lastIndexOf('>');
                String interest = jsonObject.getString("value").substring(lastIndex + 1);
                int interestWeight = (int) jsonObject.getLong("relevance");
                tagsJavaArray[i] = interest+":"+interestWeight;
                LOGGER.info("interest: "+tagsJavaArray[i]);
            }
            HashSet<String> uniqueSet = new HashSet<>(Arrays.asList(tagsJavaArray));

            // Convert the set back to an array
            String[] uniqueTagsArray = uniqueSet.toArray(new String[0]);           
            Arrays.sort(uniqueTagsArray, Comparator.comparing(s -> {
                int lastIndex = s.lastIndexOf(":");
                return lastIndex == -1 ? s : s.substring(lastIndex);
            }));
            final Locale srcLocale = LanguageCodeConverters.getLocaleFromCode(language);
            final boolean result = JCRTemplate.getInstance().doExecuteWithSystemSessionAsUser(null, Constants.EDIT_WORKSPACE, srcLocale, (JCRSessionWrapper session) -> {
                final JCRNodeWrapper node = session.getNode(path);
                if (!node.isNodeType("wemmix:wemInterests")) {
                    node.addMixin("wemmix:wemInterests");
                }
                node.setProperty("wem:interests", uniqueTagsArray);              
                session.save();
                return true;
            });

            if (result && LOGGER.isInfoEnabled()) {
                LOGGER.info(String.format("Classification Added in %s done for %s", language, path));
            }

        } catch (JSONException message) {
            LOGGER.error("JSONException: "+message);
        } catch (ParameterValidationException e) {
            LOGGER.error("ParameterValidationException: ",e); 
        } catch (IOException e) {
            LOGGER.error("IOException: ",e);
        } catch ( RepositoryException ex) {
            LOGGER.error("Impossible to retrieve classification: "+String.format("ERROR: Classification retrieval in %s for %s", language, path), ex);
        }
    }
    @Override
    public void updated(Dictionary<String, ?> dictionary) throws ConfigurationException {
        if (dictionary != null) {
            meaningCloudApikey = (String) dictionary.get("meaningCloud.apikey");
            meaningCloudClassModel = (String) dictionary.get("meaningCloud.classificationModel");
            meaningCloudnNamingConvention = (String) dictionary.get("meaningCloud.namingConvention");
        }
        if (!(meaningCloudApikey != null && !meaningCloudApikey.trim().isEmpty()))
            LOGGER.error("MeaningCloud Apikey not defined. Please add it to org.jahia.se.modules.meaningCloudServices.cfg");
        LOGGER.debug("meaningCloud.apikey = {}", meaningCloudApikey);

    }

    public static String removeHtmlTags(String htmlText) {
        Document doc = Jsoup.parse(htmlText);
       // Elements elements = doc.getAllElements();
       // for (Element element : elements) {
       //     // Remove the HTML tags while preserving the text content
       //     element.unwrap();
       // }
        return doc.text();
    }

    public static String getTextFromNode(String path, String language) {

        try {
            final Locale srcLocale = LanguageCodeConverters.getLocaleFromCode(language);
            final Map<String, String> contentToAnalyse = JCRTemplate.getInstance().doExecuteWithSystemSessionAsUser(null, Constants.EDIT_WORKSPACE, srcLocale, (JCRSessionWrapper session) -> {
                final Map<String, String> srcValues = new HashMap<>();
                final LazyPropertyIterator propertyIterator = (LazyPropertyIterator) session.getNode(path).getProperties();
                while (propertyIterator.hasNext()) {
                    final JCRPropertyWrapperImpl property = (JCRPropertyWrapperImpl) propertyIterator.nextProperty();
                    final ExtendedPropertyDefinition definition = property.getDefinition();
                    if (definition.isInternationalized() && !definition.isMultiple()) {
                        srcValues.put(property.getName(), property.getValue().getString());
                    }
                }
                return srcValues;
            });

            for (Map.Entry<String, String> entry : contentToAnalyse.entrySet()) {
                inputText += entry.getValue();
            }

            return removeHtmlTags(inputText);
       
        } catch ( RepositoryException ex) {
            LOGGER.error(String.format("Impossible to extract text from node: %s in %s", path,language), ex);
            return null;
        }

    }

    public static JSONArray triggerClassificationRequest (String meaningCloudApiKey,String txt, String model) throws IOException, Request.ParameterValidationException {
        
        JSONArray classificationJsonArray = new JSONArray();

        ClassResponse r = ClassRequest
                .build(meaningCloudApiKey, model)
                .withText(txt)
                .send();

        try {
            List<ClassResponse.Category> categories = r.getCategoryList();

            for (ClassResponse.Category category : categories) {
                JSONObject jsonObject = new JSONObject();
                jsonObject.put("relevance", category.getRelevance());
                jsonObject.put("value",  category.getLabel());

                classificationJsonArray.put(jsonObject);
            }
         
            return classificationJsonArray;

        } catch (JSONException message) {
            LOGGER.error("JSONException: "+message);
            return null;
        
        } catch (IndexOutOfBoundsException message) {
            LOGGER.info("IndexOutOfBoundsException: "+message);
            return null;
        }
    }

    public static JSONArray triggerCategorisationRequest (String meaningCloudApiKey,String txt, String model) throws IOException, Request.ParameterValidationException {
        
        JSONArray classificationJsonArray = new JSONArray();

        DeepCatResponse r = DeepCatRequest
                .build(meaningCloudApiKey, model)
                .withText(txt)
                .send();

        try {
            List<DeepCatResponse.Category> categories = r.getCategoryList();

            for (DeepCatResponse.Category category : categories) {
                JSONObject jsonObject = new JSONObject();
                jsonObject.put("relevance", category.getRelevance());
                jsonObject.put("value",  category.getLabel());

                classificationJsonArray.put(jsonObject);
            }
         
            return classificationJsonArray;

        } catch (JSONException message) {
            LOGGER.error("JSONException: "+message);
            return null;
        
        } catch (IndexOutOfBoundsException message) {
            LOGGER.info("IndexOutOfBoundsException: "+message);
            return null;
        }
    }

    public static JSONArray triggerTopicsRequest (String meaningCloudApiKey,String txt, Request.Language lang) throws IOException, Request.ParameterValidationException, JSONException {
        
        JSONArray conceptJsonArray = new JSONArray();

        TopicsResponse r = TopicsRequest
                .build(meaningCloudApiKey, lang)
                .withText(txt)
                .send();

        try{
            
        // Populate the JSON array using a loop
            for (int i = 0; i < r.getConceptList().size(); i++) {
            // Create a JSON object for each element
                JSONObject jsonObject = new JSONObject();
                jsonObject.put("concept", i);
                jsonObject.put("value",  r.getConceptList().get(i).getForm());

                // Add the JSON object to the array
                conceptJsonArray.put(jsonObject);
            }

            return conceptJsonArray;

        } catch (JSONException message) {
            LOGGER.error("JSONException: "+message);
            return null;
        
        } catch (IndexOutOfBoundsException message) {
            LOGGER.info("IndexOutOfBoundsException: "+message);
            return null;
        }
   
    }

    
}
