package org.jahia.se.modules.meaningCloud.service;

import java.util.List;

public interface RequestMeaningCloudServicesService {

    public void generateTopics(String path, String language);

    public void generateClassification(String path, String language);

    public void generateCategorisation(String path, String language);

    public List<String> generateAutoTagsFromClassification(String path, String language);

    public List<String> generateAutoTagsFromCategorisation(String path, String language);


}
