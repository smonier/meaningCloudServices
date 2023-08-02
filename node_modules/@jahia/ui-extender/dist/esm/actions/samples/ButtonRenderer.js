import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["onClick", "isVisible", "enabled", "label"];
import React from 'react';
import PropTypes from 'prop-types';
var ButtonRenderer = function ButtonRenderer(_ref) {
  var _onClick = _ref.onClick,
    isVisible = _ref.isVisible,
    enabled = _ref.enabled,
    label = _ref.label,
    props = _objectWithoutProperties(_ref, _excluded);
  return isVisible !== false && /*#__PURE__*/React.createElement("button", {
    style: {
      color: '#444444',
      background: '#F3F3F3',
      padding: '5px 10px',
      borderRadius: '2px',
      fontWeight: 'bold',
      fontSize: '9pt',
      outline: 'none'
    },
    disabled: enabled === false,
    type: "button",
    onClick: function onClick(ev) {
      return _onClick(props, ev);
    }
  }, label);
};
ButtonRenderer.propTypes = {
  onClick: PropTypes.func,
  isVisible: PropTypes.bool,
  // eslint-disable-next-line react/boolean-prop-naming
  enabled: PropTypes.bool,
  label: PropTypes.string
};
export { ButtonRenderer };
//# sourceMappingURL=ButtonRenderer.js.map
