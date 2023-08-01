package org.jahia.se.modules.service.impl;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.*;
import javax.jcr.RepositoryException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.jahia.api.Constants;
import org.jahia.se.modules.service.ChatGPTKeywordGeneratorService;
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


@Component(service = {ChatGPTKeywordGeneratorService.class, ManagedService.class}, property = "service.pid=org.jahia.se.modules.chatGPT", immediate = true)
public class ChatGPTKeywordGeneratorServiceImpl implements ChatGPTKeywordGeneratorService, ManagedService {

    private static final Logger LOGGER = LoggerFactory.getLogger(ChatGPTKeywordGeneratorServiceImpl.class);
    private String apiKey;
    private String model;
    private String max_tokens;
    private String temperature;
    private String meaningCloudApikey;
    private String meaningCloudApiName;
    @Override
    public void generateKeyword(String path, String language) {

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

            // Set the API endpoint URL
          //  URL url = new URL("https://api.openai.com/v1/completions");
            URL url = new URL("https://api.meaningcloud.com/"+meaningCloudApiName);
            // Create an HttpURLConnection
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("POST");
         //   conn.setRequestProperty("Content-Type", "application/json");
        //    conn.setRequestProperty("Authorization", "Bearer "+ apiKey);

            // Create the JSON payload with the input text
            String inputText = "";
            for (Map.Entry<String, String> entry : contentToAnalyse.entrySet()) {
                    inputText += entry.getValue();
            }
            String cleanText = removeHtmlTags(inputText);

            //String payload = "{\"model\":\"" + model + "\",\"prompt\":\"" + cleanText + "\",\"max_tokens\":"+ max_tokens +",\"temperature\":"+ temperature +"}";
            StringBuilder payload = new StringBuilder();

            // Ajout de données à la charge utile
            payload.append("{");
            payload.append("\"key\": \""+ meaningCloudApikey +"\", ");
            payload.append("\"txt\": \""+ cleanText +"\", ");
            payload.append("\"model\": \"IAB_2.0\"");
            payload.append("}");


            String finalPayload = payload.toString();
            LOGGER.info(payload.toString());
            // Enable output for POST request
            conn.setDoOutput(true);

            // Write the JSON payload to the request body
            OutputStream os = conn.getOutputStream();
            os.write(finalPayload.getBytes());
            os.flush();

            // Check for response code
            int responseCode = conn.getResponseCode();
            if (responseCode == HttpURLConnection.HTTP_OK) {
                // Read and process the response
                BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
                String inputLine;
                StringBuilder response = new StringBuilder();
                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }
                in.close();

                // Process the response (Extract keywords)
                String responseBody = response.toString();
                // Implement your logic to extract keywords from the response
                LOGGER.info("Keywords: " + responseBody);
            } else {
                LOGGER.error("HTTP POST request failed with response code: " + responseCode);
            }

            // Close the connection
            conn.disconnect();

        } catch (IOException e) {
            LOGGER.error("IOException: ",e);
        } catch ( RepositoryException ex) {
            LOGGER.error("Impossible to retrieve keywords: "+String.format("ERROR: Keyword retrieval in %s for %s", language, path), ex);
        }
    }

    @Override
    public void updated(Dictionary<String, ?> dictionary) throws ConfigurationException {
        if (dictionary != null) {
            apiKey = (String) dictionary.get("chatGPT.apiKey");
            max_tokens = (String) dictionary.get("chatGPT.max_tokens");
            temperature = (String) dictionary.get("chatGPT.temperature");
            model = (String) dictionary.get("chatGPT.model");
            meaningCloudApikey = (String) dictionary.get("meaningCloud.apikey");
            meaningCloudApiName = (String) dictionary.get("meaningCloud.apiName");


        }
        if (!(apiKey != null && !apiKey.trim().isEmpty()))
            LOGGER.error("chatGPT apiKey not defined. Please add it to org.jahia.se.modules.chatGPT.cfg");
        LOGGER.debug("chatGPT.apiKey = {}", apiKey);

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
}
