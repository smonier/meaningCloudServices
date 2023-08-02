import { useRef } from 'react';
import deepEquals from 'fast-deep-equal';
export var useDeepCompare = function useDeepCompare(newValue) {
  var valueRef = useRef(null);
  var isNew = !valueRef.current;
  var isChanged = !isNew && !deepEquals(newValue, valueRef.current);
  if (isChanged || isNew) {
    valueRef.current = newValue;
  }
  var value = valueRef.current;
  return {
    isNew: isNew,
    isChanged: isChanged,
    value: value
  };
};
//# sourceMappingURL=useDeepCompare.js.map
