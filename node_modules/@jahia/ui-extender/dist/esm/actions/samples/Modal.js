import PropTypes from 'prop-types';
import React from 'react';
export var Modal = function Modal(_ref) {
  var context = _ref.context,
    onExited = _ref.onExited;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "backdrop",
    style: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      opacity: 0.1,
      backgroundColor: 'black'
    },
    onClick: onExited
  }), /*#__PURE__*/React.createElement("div", {
    className: "modal",
    style: {
      position: 'absolute',
      width: '200px',
      height: '40px',
      top: 'calc( 50% - 20px )',
      left: 'calc( 50% - 100px )',
      border: '1px solid',
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 1 auto'
    }
  }, context.content)));
};
Modal.propTypes = {
  context: PropTypes.object.isRequired,
  onExited: PropTypes.func.isRequired
};
//# sourceMappingURL=Modal.js.map
