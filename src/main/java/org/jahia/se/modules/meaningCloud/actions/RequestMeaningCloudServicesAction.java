package org.jahia.se.modules.meaningCloud.actions;

import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.jahia.bin.Action;
import org.jahia.bin.ActionResult;
import org.jahia.se.modules.meaningCloud.service.RequestMeaningCloudServicesService;
import org.jahia.services.content.JCRNodeWrapper;
import org.jahia.services.content.JCRSessionWrapper;
import org.jahia.services.render.RenderContext;
import org.jahia.services.render.Resource;
import org.jahia.services.render.URLResolver;
import org.json.JSONObject;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;

@Component(service = Action.class, immediate = true)
public class RequestMeaningCloudServicesAction extends Action {

    @Activate
    public void activate() {
        setName("requestMeaningCloudServices");
        setRequireAuthenticatedUser(true);
        setRequiredPermission("jcr:write_default");
        setRequiredWorkspace("default");
        setRequiredMethods("GET,POST");
    }

    private RequestMeaningCloudServicesService meaningCloudServicesGeneratorService;

    @Reference(service = RequestMeaningCloudServicesService.class)
    public void setRequestMeaningCloudServicesService(RequestMeaningCloudServicesService meaningCloudServicesGeneratorService) {
        this.meaningCloudServicesGeneratorService = meaningCloudServicesGeneratorService;
    }

    public RequestMeaningCloudServicesService getRequestMeaningCloudServicesService() {
        return meaningCloudServicesGeneratorService;
    }

    @Override
    public ActionResult doExecute(HttpServletRequest httpServletRequest, RenderContext renderContext, Resource resource, JCRSessionWrapper jcrSessionWrapper, Map<String, List<String>> map, URLResolver urlResolver) throws Exception {
        final JSONObject resp = new JSONObject();
        int resultCode = HttpServletResponse.SC_BAD_REQUEST;

        final String currentLanguage = resource.getLocale().getLanguage();
        String serviceType = map.get("service").get(0);
        resultCode = getMeaningCloudServices(resource.getNode(), currentLanguage, serviceType);

        return new ActionResult(resultCode, null, resp);
    }

    private int getMeaningCloudServices(JCRNodeWrapper node, String currentLanguage, String serviceType) {
        int resultCode = HttpServletResponse.SC_BAD_REQUEST;

        switch (serviceType) {
            case "topics":
                meaningCloudServicesGeneratorService.generateTopics(node.getPath(), currentLanguage);
                resultCode = HttpServletResponse.SC_OK;
                return resultCode;                
            case "classification":
                meaningCloudServicesGeneratorService.generateClassification(node.getPath(), currentLanguage);
                resultCode = HttpServletResponse.SC_OK;
                return resultCode;
            case "categorisation":
                meaningCloudServicesGeneratorService.generateCategorisation(node.getPath(), currentLanguage);
                resultCode = HttpServletResponse.SC_OK;
                return resultCode;
            default:
                return resultCode;
        }

    }
}
