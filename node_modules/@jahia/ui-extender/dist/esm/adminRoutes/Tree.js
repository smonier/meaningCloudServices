import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var filterTree = function filterTree(tree, predicate) {
  return tree.filter(predicate).map(function (item) {
    return _objectSpread(_objectSpread({}, item), {}, {
      children: filterTree(item.children, predicate)
    });
  });
};
var mapTree = function mapTree(tree, mapFunction) {
  return tree.map(function (item) {
    return _objectSpread(_objectSpread({}, mapFunction(item)), {}, {
      children: mapTree(item.children, mapFunction)
    });
  });
};
export var Tree = /*#__PURE__*/function () {
  function Tree(data) {
    _classCallCheck(this, Tree);
    this.data = data;
  }
  _createClass(Tree, [{
    key: "filter",
    value: function filter(predicate) {
      return new Tree(filterTree(this.data, predicate));
    }
  }, {
    key: "map",
    value: function map(mapFunction) {
      return new Tree(mapTree(this.data, mapFunction));
    }
  }, {
    key: "getData",
    value: function getData() {
      return this.data;
    }
  }]);
  return Tree;
}();
//# sourceMappingURL=Tree.js.map
