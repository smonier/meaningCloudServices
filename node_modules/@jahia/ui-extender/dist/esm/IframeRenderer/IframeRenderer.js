import React from 'react';
import PropTypes from 'prop-types';
export var IframeRenderer = function IframeRenderer(props) {
  var _window, _window$jahia, _window$jahia$ui;
  var IframeRendererComp = (_window = window) === null || _window === void 0 ? void 0 : (_window$jahia = _window.jahia) === null || _window$jahia === void 0 ? void 0 : (_window$jahia$ui = _window$jahia.ui) === null || _window$jahia$ui === void 0 ? void 0 : _window$jahia$ui.IframeRenderer;
  if (IframeRendererComp) {
    return /*#__PURE__*/React.createElement(IframeRendererComp, props);
  }
  return /*#__PURE__*/React.createElement("span", null, "Jahia UI not loaded");
};
export var getIframeRenderer = function getIframeRenderer(url) {
  return /*#__PURE__*/React.createElement(IframeRenderer, {
    url: url
  });
};
IframeRenderer.propTypes = {
  url: PropTypes.string.isRequired
};
//# sourceMappingURL=IframeRenderer.js.map
