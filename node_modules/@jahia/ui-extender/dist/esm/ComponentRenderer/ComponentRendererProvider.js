import React, { useRef } from 'react';
import { ComponentRenderer } from "./ComponentRenderer";
import PropTypes from 'prop-types';
import { ComponentRendererContext } from "./ComponentRendererContext";
export var ComponentRendererProvider = function ComponentRendererProvider(_ref) {
  var children = _ref.children;
  var value = useRef({});
  return /*#__PURE__*/React.createElement(ComponentRendererContext.Provider, {
    value: value.current
  }, /*#__PURE__*/React.createElement(ComponentRenderer, null), children);
};
ComponentRendererProvider.defaultProps = {
  children: null
};
ComponentRendererProvider.propTypes = {
  children: PropTypes.element
};
//# sourceMappingURL=ComponentRendererProvider.js.map
