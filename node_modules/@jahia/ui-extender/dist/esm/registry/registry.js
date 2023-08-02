import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
var _excluded = ["target"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import { composeServices } from "./composeServices";
var Registry = /*#__PURE__*/function () {
  function Registry() {
    _classCallCheck(this, Registry);
    this.registry = {};
  }
  _createClass(Registry, [{
    key: "addOrReplace",
    value: function addOrReplace(type, key) {
      var registryKey = type + '-' + key;
      for (var _len = arguments.length, services = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        services[_key - 2] = arguments[_key];
      }
      var service = composeServices.apply(void 0, services);
      var targets = service.targets ? service.targets.map(function (t) {
        if (typeof t === 'string') {
          var spl = t.split(':');
          return {
            id: spl[0],
            priority: spl[1] ? spl[1] : 0
          };
        }
        return t;
      }) : [];
      var storedService = _objectSpread(_objectSpread({}, service), {}, {
        targets: targets,
        type: type,
        key: key
      });
      this.registry[registryKey] = storedService;
      return storedService;
    }
  }, {
    key: "add",
    value: function add(type, key) {
      var registryKey = type + '-' + key;
      if (this.registry[registryKey]) {
        throw new Error('Entry already exist for key ' + key);
      }
      for (var _len2 = arguments.length, services = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        services[_key2 - 2] = arguments[_key2];
      }
      return this.addOrReplace.apply(this, [type, key].concat(services));
    }
  }, {
    key: "get",
    value: function get(type, key) {
      return this.registry[type + '-' + key];
    }
  }, {
    key: "remove",
    value: function remove(type, key) {
      var _this = this;
      if (key) {
        var registryKey = type + '-' + key;
        if (this.registry[registryKey]) {
          delete this.registry[type + '-' + key];
        }
      } else {
        var entries = this.find({
          type: type
        });
        if (entries) {
          entries.forEach(function (entry) {
            return _this.remove(type, entry.key);
          });
        }
      }
    }
  }, {
    key: "find",
    value: function find(filters) {
      var result = Object.values(this.registry);
      var target = filters.target,
        otherFilters = _objectWithoutProperties(filters, _excluded);
      if (target) {
        result = result.filter(function (item) {
          return item.targets && item.targets.map(function (t) {
            return t.id;
          }).includes(filters.target);
        }).sort(function (a, b) {
          var foundA = a.targets && a.targets.find(function (t) {
            return t.id === filters.target;
          });
          var foundB = b.targets && b.targets.find(function (t) {
            return t.id === filters.target;
          });
          var priorityA = foundA && Number(foundA.priority);
          var priorityB = foundB && Number(foundB.priority);
          if (isNaN(priorityA) && isNaN(priorityB)) {
            return 0;
          }
          if (isNaN(priorityA)) {
            return -1;
          }
          if (isNaN(priorityB)) {
            return 1;
          }
          return priorityA - priorityB;
        });
      }
      return result.filter(function (item) {
        return (
          // Try to find one key that doesn't match
          !Object.keys(otherFilters).find(function (key) {
            return item[key] !== otherFilters[key];
          })
        );
      });
    }
  }, {
    key: "clear",
    value: function clear() {
      this.registry = {};
    }
  }]);
  return Registry;
}();
var registry = new Registry();
export { registry };
//# sourceMappingURL=registry.js.map
