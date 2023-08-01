package org.jahia.se.modules.actions;

import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.jahia.bin.Action;
import org.jahia.bin.ActionResult;
import org.jahia.se.modules.service.ChatGPTKeywordGeneratorService;
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
public class RequestChatGPTKeywordsAction extends Action {

    @Activate
    public void activate() {
        setName("requestChatGPTKeywords");
        setRequireAuthenticatedUser(true);
        setRequiredPermission("jcr:write_default");
        setRequiredWorkspace("default");
        setRequiredMethods("GET,POST");
    }

    private ChatGPTKeywordGeneratorService chatGPTKeywordGeneratorService;

    @Reference(service = ChatGPTKeywordGeneratorService.class)
    public void setChatGPTKeywordGeneratorService(ChatGPTKeywordGeneratorService chatGPTKeywordGeneratorService) {
        this.chatGPTKeywordGeneratorService = chatGPTKeywordGeneratorService;
    }

    public ChatGPTKeywordGeneratorService getChatGPTKeywordGeneratorService() {
        return chatGPTKeywordGeneratorService;
    }

    @Override
    public ActionResult doExecute(HttpServletRequest httpServletRequest, RenderContext renderContext, Resource resource, JCRSessionWrapper jcrSessionWrapper, Map<String, List<String>> map, URLResolver urlResolver) throws Exception {
        final JSONObject resp = new JSONObject();
        int resultCode = HttpServletResponse.SC_BAD_REQUEST;

        final String currentLanguage = resource.getLocale().getLanguage();

        resultCode = getChatGPTKeywords(resource.getNode(), currentLanguage);

        return new ActionResult(resultCode, null, resp);
    }

    private int getChatGPTKeywords(JCRNodeWrapper node, String currentLanguage) {
        int resultCode = HttpServletResponse.SC_BAD_REQUEST;

        chatGPTKeywordGeneratorService.generateKeyword(node.getPath(), currentLanguage);
        resultCode = HttpServletResponse.SC_OK;

        return resultCode;
    }
}
