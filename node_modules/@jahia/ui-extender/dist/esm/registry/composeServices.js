import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
function composeServices() {
  for (var _len = arguments.length, services = new Array(_len), _key = 0; _key < _len; _key++) {
    services[_key] = arguments[_key];
  }
  return services.reduce(function (acc, service) {
    if (service) {
      Object.entries(service).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        var previous = acc[key];
        if (typeof previous === 'function' && typeof value === 'function') {
          // If function, override the function but pass the previous one as the last parameter
          // Do not convert the following function to a lambda otherwise the arguments will not be coming from the right context
          acc[key] = function () {
            for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              params[_key2] = arguments[_key2];
            }
            return value.apply(this, [].concat(params, [previous]));
          };
        } else if (Array.isArray(previous) && Array.isArray(value)) {
          // Concatenate arrays
          acc[key] = [].concat(_toConsumableArray(previous), _toConsumableArray(value));
        } else {
          // Simply replaces the value
          acc[key] = value;
        }
      });
    }
    return acc;
  }, {});
}
export { composeServices };
//# sourceMappingURL=composeServices.js.map
