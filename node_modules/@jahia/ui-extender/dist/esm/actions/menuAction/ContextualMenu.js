import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _pt from "prop-types";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
import React from 'react';
import { DisplayAction } from "../core";
export var ContextualMenu = /*#__PURE__*/function (_React$Component) {
  _inherits(ContextualMenu, _React$Component);
  var _super = _createSuper(ContextualMenu);
  function ContextualMenu(props) {
    var _this;
    _classCallCheck(this, ContextualMenu);
    _this = _super.call(this, props);
    _this.onClickRef = /*#__PURE__*/React.createRef();
    return _this;
  }
  _createClass(ContextualMenu, [{
    key: "open",
    value: function open(e, newProps) {
      this.onClickRef.current(_objectSpread(_objectSpread(_objectSpread({}, this.props), {}, {
        isMenuUseEventPosition: true
      }, newProps), {}, {
        originalContext: _objectSpread(_objectSpread({}, this.props), newProps)
      }), e);
      e.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var setOpenRef = this.props.setOpenRef;
      if (setOpenRef) {
        setOpenRef.current = this.open.bind(this);
      }
      return /*#__PURE__*/React.createElement(DisplayAction, _extends({}, this.props, {
        render: function render(props) {
          var onClick = props.onClick;
          _this2.onClickRef.current = onClick;
          return null;
        }
      }));
    }
  }]);
  return ContextualMenu;
}(React.Component);
_defineProperty(ContextualMenu, "propTypes", {
  actionKey: _pt.string.isRequired
});
//# sourceMappingURL=ContextualMenu.js.map
