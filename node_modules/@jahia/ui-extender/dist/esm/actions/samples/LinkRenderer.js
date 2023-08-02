import React from 'react';
import PropTypes from 'prop-types';
var LinkRenderer = function LinkRenderer(_ref) {
  var context = _ref.context;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      backgroundColor: 'yellow'
    },
    onClick: function onClick(ev) {
      return context.onClick(context, ev);
    }
  }, context.label);
};
LinkRenderer.propTypes = {
  context: PropTypes.object.isRequired
};
export { LinkRenderer };
//# sourceMappingURL=LinkRenderer.js.map
