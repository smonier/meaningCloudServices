import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import React, { useContext, useEffect, useState } from 'react';
import { ComponentRendererContext } from "./ComponentRendererContext";
export var ComponentRenderer = function ComponentRenderer() {
  var _useState = useState({
      components: {},
      componentsProps: {}
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var value = useContext(ComponentRendererContext);
  useEffect(function () {
    value.render = function (key, component, props) {
      return setState(function (previous) {
        var newState = {
          components: _objectSpread({}, previous.components),
          componentsProps: _objectSpread({}, previous.componentsProps)
        };
        newState.components[key] = component;
        newState.componentsProps[key] = _objectSpread({}, props);
        return newState;
      });
    };
    value.setProperties = function (key, props) {
      return setState(function (previous) {
        if (previous.components[key]) {
          var newState = {
            components: _objectSpread({}, previous.components),
            componentsProps: _objectSpread({}, previous.componentsProps)
          };
          newState.componentsProps[key] = _objectSpread(_objectSpread({}, previous.componentsProps[key]), props);
          return newState;
        }
        return previous;
      });
    };
    value.destroy = function (key) {
      return setState(function (previous) {
        var newState = {
          components: _objectSpread({}, previous.components),
          componentsProps: _objectSpread({}, previous.componentsProps)
        };
        delete newState.components[key];
        delete newState.componentsProps[key];
        return newState;
      });
    };
  }, [value]);
  var components = Object.keys(state.components).map(function (key) {
    var component = state.components[key];
    return /*#__PURE__*/React.createElement(component, _objectSpread({
      key: key
    }, state.componentsProps[key]));
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, components);
};
//# sourceMappingURL=ComponentRenderer.js.map
