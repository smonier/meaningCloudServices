import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["render", "componentToRender"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ComponentRendererContext } from "../../ComponentRenderer";
export var ComponentRendererActionComponent = function ComponentRendererActionComponent(_ref) {
  var Render = _ref.render,
    componentToRender = _ref.componentToRender,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  var componentRenderer = useContext(ComponentRendererContext);
  var componentContext = {};
  useEffect(function () {
    componentContext.id = 'actionComponent-' + otherProps.id;
    componentContext.render = function (component, properties) {
      componentRenderer.render(componentContext.id, component, _objectSpread(_objectSpread({}, otherProps), {}, {
        onExited: componentContext.handleDestroy
      }, properties));
    };
    componentContext.handleDestroy = function () {
      componentRenderer.destroy(componentContext.id);
    };
    componentContext.setProperties = function (properties) {
      componentRenderer.setProperties(componentContext.id, properties);
    };
  });
  if (!otherProps.onClick) {
    return /*#__PURE__*/React.createElement(Render, _extends({
      onClick: function onClick() {
        return componentContext.render(componentToRender);
      }
    }, otherProps));
  }
  return /*#__PURE__*/React.createElement(Render, otherProps);
};
ComponentRendererActionComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  context: PropTypes.object.isRequired,
  render: PropTypes.func.isRequired,
  componentToRender: PropTypes.node
};

/**
 * Context properties :
 *
 * menu : name of the target of actions to display in the menu
 * menuRenderer
 * menuItemRenderer
 */
export var componentRendererAction = {
  component: ComponentRendererActionComponent
};
//# sourceMappingURL=componentRenderAction.js.map
