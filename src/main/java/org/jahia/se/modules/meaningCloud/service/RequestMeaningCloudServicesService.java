package org.jahia.se.modules.meaningCloud.service;

public interface RequestMeaningCloudServicesService {
    public void generateTopics(String path, String language);

    public void generateClassification(String path, String language);

    public void generateCategorisation(String path, String language);


}
