import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import { useMemo } from 'react';
import { registry } from "../registry";
import { getIframeRenderer } from "../IframeRenderer";
import { Tree } from "./Tree";
export var useAdminRouteTreeStructure = function useAdminRouteTreeStructure(target, selected) {
  var result = useMemo(function () {
    var getAllRoutes = function getAllRoutes(baseTarget) {
      var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return registry.find({
        type: 'adminRoute',
        target: baseTarget + parent
      }).flatMap(function (route) {
        return [route].concat(_toConsumableArray(getAllRoutes(baseTarget, '-' + route.key)));
      }).map(function (route) {
        return _objectSpread(_objectSpread({}, route), {}, {
          render: route.render || typeof route.iframeUrl === 'string' && function () {
            return getIframeRenderer(route.iframeUrl);
          }
        });
      });
    };
    var routes = getAllRoutes(target);
    var createTree = function createTree(baseTarget) {
      var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return registry.find({
        type: 'adminRoute',
        target: baseTarget + parent
      }).filter(function (route) {
        return !route.omitFromTree;
      }).map(function (route) {
        return _objectSpread(_objectSpread({}, route), {}, {
          children: createTree(baseTarget, '-' + route.key)
        });
      });
    };
    var tree = new Tree(createTree(target));
    var allPermissions = routes.filter(function (route) {
      return route.requiredPermission;
    }).map(function (route) {
      return route.requiredPermission;
    }).filter(function (item, pos, self) {
      return self.indexOf(item) === pos;
    });
    return {
      routes: routes,
      tree: tree,
      allPermissions: allPermissions
    };
  }, [target]);
  var tree = result.tree,
    routes = result.routes,
    allPermissions = result.allPermissions;
  var defaultOpenedItems = [];
  if (selected) {
    var selectedItem = registry.get('adminRoute', selected);
    while (selectedItem) {
      var parentTarget = selectedItem.targets.find(function (t) {
        return t.id.startsWith(target + '-');
      });
      if (parentTarget) {
        var parent = parentTarget.id.substr(target.length + 1);
        defaultOpenedItems.push(parent);
        selectedItem = registry.get('adminRoute', parent);
      } else {
        selectedItem = null;
      }
    }
  }
  return {
    tree: tree,
    defaultOpenedItems: defaultOpenedItems,
    routes: routes,
    allPermissions: allPermissions
  };
};
//# sourceMappingURL=useAdminRoutesTreeStructure.js.map
