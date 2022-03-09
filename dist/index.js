(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/object-assign/index.js
  var require_object_assign = __commonJS({
    "node_modules/object-assign/index.js"(exports, module) {
      "use strict";
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var hasOwnProperty2 = Object.prototype.hasOwnProperty;
      var propIsEnumerable = Object.prototype.propertyIsEnumerable;
      function toObject(val) {
        if (val === null || val === void 0) {
          throw new TypeError("Object.assign cannot be called with null or undefined");
        }
        return Object(val);
      }
      function shouldUseNative() {
        try {
          if (!Object.assign) {
            return false;
          }
          var test1 = new String("abc");
          test1[5] = "de";
          if (Object.getOwnPropertyNames(test1)[0] === "5") {
            return false;
          }
          var test2 = {};
          for (var i = 0; i < 10; i++) {
            test2["_" + String.fromCharCode(i)] = i;
          }
          var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
          });
          if (order2.join("") !== "0123456789") {
            return false;
          }
          var test3 = {};
          "abcdefghijklmnopqrst".split("").forEach(function(letter) {
            test3[letter] = letter;
          });
          if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
            return false;
          }
          return true;
        } catch (err) {
          return false;
        }
      }
      module.exports = shouldUseNative() ? Object.assign : function(target, source) {
        var from2;
        var to = toObject(target);
        var symbols;
        for (var s = 1; s < arguments.length; s++) {
          from2 = Object(arguments[s]);
          for (var key in from2) {
            if (hasOwnProperty2.call(from2, key)) {
              to[key] = from2[key];
            }
          }
          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from2);
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from2, symbols[i])) {
                to[symbols[i]] = from2[symbols[i]];
              }
            }
          }
        }
        return to;
      };
    }
  });

  // node_modules/react/cjs/react.development.js
  var require_react_development = __commonJS({
    "node_modules/react/cjs/react.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var _assign = require_object_assign();
          var ReactVersion = "17.0.2";
          var REACT_ELEMENT_TYPE = 60103;
          var REACT_PORTAL_TYPE = 60106;
          exports.Fragment = 60107;
          exports.StrictMode = 60108;
          exports.Profiler = 60114;
          var REACT_PROVIDER_TYPE = 60109;
          var REACT_CONTEXT_TYPE = 60110;
          var REACT_FORWARD_REF_TYPE = 60112;
          exports.Suspense = 60113;
          var REACT_SUSPENSE_LIST_TYPE = 60120;
          var REACT_MEMO_TYPE = 60115;
          var REACT_LAZY_TYPE = 60116;
          var REACT_BLOCK_TYPE = 60121;
          var REACT_SERVER_BLOCK_TYPE = 60122;
          var REACT_FUNDAMENTAL_TYPE = 60117;
          var REACT_SCOPE_TYPE = 60119;
          var REACT_OPAQUE_ID_TYPE = 60128;
          var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
          var REACT_OFFSCREEN_TYPE = 60130;
          var REACT_LEGACY_HIDDEN_TYPE = 60131;
          if (typeof Symbol === "function" && Symbol.for) {
            var symbolFor = Symbol.for;
            REACT_ELEMENT_TYPE = symbolFor("react.element");
            REACT_PORTAL_TYPE = symbolFor("react.portal");
            exports.Fragment = symbolFor("react.fragment");
            exports.StrictMode = symbolFor("react.strict_mode");
            exports.Profiler = symbolFor("react.profiler");
            REACT_PROVIDER_TYPE = symbolFor("react.provider");
            REACT_CONTEXT_TYPE = symbolFor("react.context");
            REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
            exports.Suspense = symbolFor("react.suspense");
            REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
            REACT_MEMO_TYPE = symbolFor("react.memo");
            REACT_LAZY_TYPE = symbolFor("react.lazy");
            REACT_BLOCK_TYPE = symbolFor("react.block");
            REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
            REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
            REACT_SCOPE_TYPE = symbolFor("react.scope");
            REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
            REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
            REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
            REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
          }
          var MAYBE_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = "@@iterator";
          function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== "object") {
              return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === "function") {
              return maybeIterator;
            }
            return null;
          }
          var ReactCurrentDispatcher = {
            current: null
          };
          var ReactCurrentBatchConfig = {
            transition: 0
          };
          var ReactCurrentOwner = {
            current: null
          };
          var ReactDebugCurrentFrame = {};
          var currentExtraStackFrame = null;
          function setExtraStackFrame(stack) {
            {
              currentExtraStackFrame = stack;
            }
          }
          {
            ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
              {
                currentExtraStackFrame = stack;
              }
            };
            ReactDebugCurrentFrame.getCurrentStack = null;
            ReactDebugCurrentFrame.getStackAddendum = function() {
              var stack = "";
              if (currentExtraStackFrame) {
                stack += currentExtraStackFrame;
              }
              var impl = ReactDebugCurrentFrame.getCurrentStack;
              if (impl) {
                stack += impl() || "";
              }
              return stack;
            };
          }
          var IsSomeRendererActing = {
            current: false
          };
          var ReactSharedInternals = {
            ReactCurrentDispatcher,
            ReactCurrentBatchConfig,
            ReactCurrentOwner,
            IsSomeRendererActing,
            assign: _assign
          };
          {
            ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          }
          function warn(format2) {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format2, args);
            }
          }
          function error(format2) {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format2, args);
            }
          }
          function printWarning(level, format2, args) {
            {
              var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
              var stack = ReactDebugCurrentFrame2.getStackAddendum();
              if (stack !== "") {
                format2 += "%s";
                args = args.concat([stack]);
              }
              var argsWithFormat = args.map(function(item) {
                return "" + item;
              });
              argsWithFormat.unshift("Warning: " + format2);
              Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
          }
          var didWarnStateUpdateForUnmountedComponent = {};
          function warnNoop(publicInstance, callerName) {
            {
              var _constructor = publicInstance.constructor;
              var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
              var warningKey = componentName + "." + callerName;
              if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                return;
              }
              error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
              didWarnStateUpdateForUnmountedComponent[warningKey] = true;
            }
          }
          var ReactNoopUpdateQueue = {
            isMounted: function(publicInstance) {
              return false;
            },
            enqueueForceUpdate: function(publicInstance, callback, callerName) {
              warnNoop(publicInstance, "forceUpdate");
            },
            enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
              warnNoop(publicInstance, "replaceState");
            },
            enqueueSetState: function(publicInstance, partialState, callback, callerName) {
              warnNoop(publicInstance, "setState");
            }
          };
          var emptyObject = {};
          {
            Object.freeze(emptyObject);
          }
          function Component(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          Component.prototype.isReactComponent = {};
          Component.prototype.setState = function(partialState, callback) {
            if (!(typeof partialState === "object" || typeof partialState === "function" || partialState == null)) {
              {
                throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
              }
            }
            this.updater.enqueueSetState(this, partialState, callback, "setState");
          };
          Component.prototype.forceUpdate = function(callback) {
            this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
          };
          {
            var deprecatedAPIs = {
              isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
              replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
            };
            var defineDeprecationWarning = function(methodName, info) {
              Object.defineProperty(Component.prototype, methodName, {
                get: function() {
                  warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                  return void 0;
                }
              });
            };
            for (var fnName in deprecatedAPIs) {
              if (deprecatedAPIs.hasOwnProperty(fnName)) {
                defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
              }
            }
          }
          function ComponentDummy() {
          }
          ComponentDummy.prototype = Component.prototype;
          function PureComponent(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
          pureComponentPrototype.constructor = PureComponent;
          _assign(pureComponentPrototype, Component.prototype);
          pureComponentPrototype.isPureReactComponent = true;
          function createRef() {
            var refObject = {
              current: null
            };
            {
              Object.seal(refObject);
            }
            return refObject;
          }
          function getWrappedName2(outerType, innerType, wrapperName) {
            var functionName = innerType.displayName || innerType.name || "";
            return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
          }
          function getContextName(type2) {
            return type2.displayName || "Context";
          }
          function getComponentName(type2) {
            if (type2 == null) {
              return null;
            }
            {
              if (typeof type2.tag === "number") {
                error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
              }
            }
            if (typeof type2 === "function") {
              return type2.displayName || type2.name || null;
            }
            if (typeof type2 === "string") {
              return type2;
            }
            switch (type2) {
              case exports.Fragment:
                return "Fragment";
              case REACT_PORTAL_TYPE:
                return "Portal";
              case exports.Profiler:
                return "Profiler";
              case exports.StrictMode:
                return "StrictMode";
              case exports.Suspense:
                return "Suspense";
              case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            }
            if (typeof type2 === "object") {
              switch (type2.$$typeof) {
                case REACT_CONTEXT_TYPE:
                  var context = type2;
                  return getContextName(context) + ".Consumer";
                case REACT_PROVIDER_TYPE:
                  var provider = type2;
                  return getContextName(provider._context) + ".Provider";
                case REACT_FORWARD_REF_TYPE:
                  return getWrappedName2(type2, type2.render, "ForwardRef");
                case REACT_MEMO_TYPE:
                  return getComponentName(type2.type);
                case REACT_BLOCK_TYPE:
                  return getComponentName(type2._render);
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type2;
                  var payload = lazyComponent._payload;
                  var init2 = lazyComponent._init;
                  try {
                    return getComponentName(init2(payload));
                  } catch (x3) {
                    return null;
                  }
                }
              }
            }
            return null;
          }
          var hasOwnProperty2 = Object.prototype.hasOwnProperty;
          var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
          };
          var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
          {
            didWarnAboutStringRefs = {};
          }
          function hasValidRef(config2) {
            {
              if (hasOwnProperty2.call(config2, "ref")) {
                var getter = Object.getOwnPropertyDescriptor(config2, "ref").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config2.ref !== void 0;
          }
          function hasValidKey(config2) {
            {
              if (hasOwnProperty2.call(config2, "key")) {
                var getter = Object.getOwnPropertyDescriptor(config2, "key").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config2.key !== void 0;
          }
          function defineKeyPropWarningGetter(props, displayName) {
            var warnAboutAccessingKey = function() {
              {
                if (!specialPropKeyWarningShown) {
                  specialPropKeyWarningShown = true;
                  error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
          function defineRefPropWarningGetter(props, displayName) {
            var warnAboutAccessingRef = function() {
              {
                if (!specialPropRefWarningShown) {
                  specialPropRefWarningShown = true;
                  error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
          function warnIfStringRefCannotBeAutoConverted(config2) {
            {
              if (typeof config2.ref === "string" && ReactCurrentOwner.current && config2.__self && ReactCurrentOwner.current.stateNode !== config2.__self) {
                var componentName = getComponentName(ReactCurrentOwner.current.type);
                if (!didWarnAboutStringRefs[componentName]) {
                  error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config2.ref);
                  didWarnAboutStringRefs[componentName] = true;
                }
              }
            }
          }
          var ReactElement = function(type2, key, ref, self, source, owner, props) {
            var element = {
              $$typeof: REACT_ELEMENT_TYPE,
              type: type2,
              key,
              ref,
              props,
              _owner: owner
            };
            {
              element._store = {};
              Object.defineProperty(element._store, "validated", {
                configurable: false,
                enumerable: false,
                writable: true,
                value: false
              });
              Object.defineProperty(element, "_self", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: self
              });
              Object.defineProperty(element, "_source", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: source
              });
              if (Object.freeze) {
                Object.freeze(element.props);
                Object.freeze(element);
              }
            }
            return element;
          };
          function createElement4(type2, config2, children2) {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            var self = null;
            var source = null;
            if (config2 != null) {
              if (hasValidRef(config2)) {
                ref = config2.ref;
                {
                  warnIfStringRefCannotBeAutoConverted(config2);
                }
              }
              if (hasValidKey(config2)) {
                key = "" + config2.key;
              }
              self = config2.__self === void 0 ? null : config2.__self;
              source = config2.__source === void 0 ? null : config2.__source;
              for (propName in config2) {
                if (hasOwnProperty2.call(config2, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  props[propName] = config2[propName];
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children2;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              {
                if (Object.freeze) {
                  Object.freeze(childArray);
                }
              }
              props.children = childArray;
            }
            if (type2 && type2.defaultProps) {
              var defaultProps2 = type2.defaultProps;
              for (propName in defaultProps2) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps2[propName];
                }
              }
            }
            {
              if (key || ref) {
                var displayName = typeof type2 === "function" ? type2.displayName || type2.name || "Unknown" : type2;
                if (key) {
                  defineKeyPropWarningGetter(props, displayName);
                }
                if (ref) {
                  defineRefPropWarningGetter(props, displayName);
                }
              }
            }
            return ReactElement(type2, key, ref, self, source, ReactCurrentOwner.current, props);
          }
          function cloneAndReplaceKey(oldElement, newKey) {
            var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
            return newElement;
          }
          function cloneElement4(element, config2, children2) {
            if (!!(element === null || element === void 0)) {
              {
                throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
              }
            }
            var propName;
            var props = _assign({}, element.props);
            var key = element.key;
            var ref = element.ref;
            var self = element._self;
            var source = element._source;
            var owner = element._owner;
            if (config2 != null) {
              if (hasValidRef(config2)) {
                ref = config2.ref;
                owner = ReactCurrentOwner.current;
              }
              if (hasValidKey(config2)) {
                key = "" + config2.key;
              }
              var defaultProps2;
              if (element.type && element.type.defaultProps) {
                defaultProps2 = element.type.defaultProps;
              }
              for (propName in config2) {
                if (hasOwnProperty2.call(config2, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  if (config2[propName] === void 0 && defaultProps2 !== void 0) {
                    props[propName] = defaultProps2[propName];
                  } else {
                    props[propName] = config2[propName];
                  }
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children2;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              props.children = childArray;
            }
            return ReactElement(element.type, key, ref, self, source, owner, props);
          }
          function isValidElement3(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          var SEPARATOR = ".";
          var SUBSEPARATOR = ":";
          function escape(key) {
            var escapeRegex = /[=:]/g;
            var escaperLookup = {
              "=": "=0",
              ":": "=2"
            };
            var escapedString = key.replace(escapeRegex, function(match2) {
              return escaperLookup[match2];
            });
            return "$" + escapedString;
          }
          var didWarnAboutMaps = false;
          var userProvidedKeyEscapeRegex = /\/+/g;
          function escapeUserProvidedKey(text) {
            return text.replace(userProvidedKeyEscapeRegex, "$&/");
          }
          function getElementKey(element, index) {
            if (typeof element === "object" && element !== null && element.key != null) {
              return escape("" + element.key);
            }
            return index.toString(36);
          }
          function mapIntoArray(children2, array2, escapedPrefix, nameSoFar, callback) {
            var type2 = typeof children2;
            if (type2 === "undefined" || type2 === "boolean") {
              children2 = null;
            }
            var invokeCallback = false;
            if (children2 === null) {
              invokeCallback = true;
            } else {
              switch (type2) {
                case "string":
                case "number":
                  invokeCallback = true;
                  break;
                case "object":
                  switch (children2.$$typeof) {
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                      invokeCallback = true;
                  }
              }
            }
            if (invokeCallback) {
              var _child = children2;
              var mappedChild = callback(_child);
              var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
              if (Array.isArray(mappedChild)) {
                var escapedChildKey = "";
                if (childKey != null) {
                  escapedChildKey = escapeUserProvidedKey(childKey) + "/";
                }
                mapIntoArray(mappedChild, array2, escapedChildKey, "", function(c) {
                  return c;
                });
              } else if (mappedChild != null) {
                if (isValidElement3(mappedChild)) {
                  mappedChild = cloneAndReplaceKey(mappedChild, escapedPrefix + (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? escapeUserProvidedKey("" + mappedChild.key) + "/" : "") + childKey);
                }
                array2.push(mappedChild);
              }
              return 1;
            }
            var child;
            var nextName;
            var subtreeCount = 0;
            var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
            if (Array.isArray(children2)) {
              for (var i = 0; i < children2.length; i++) {
                child = children2[i];
                nextName = nextNamePrefix + getElementKey(child, i);
                subtreeCount += mapIntoArray(child, array2, escapedPrefix, nextName, callback);
              }
            } else {
              var iteratorFn = getIteratorFn(children2);
              if (typeof iteratorFn === "function") {
                var iterableChildren = children2;
                {
                  if (iteratorFn === iterableChildren.entries) {
                    if (!didWarnAboutMaps) {
                      warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                    }
                    didWarnAboutMaps = true;
                  }
                }
                var iterator = iteratorFn.call(iterableChildren);
                var step;
                var ii = 0;
                while (!(step = iterator.next()).done) {
                  child = step.value;
                  nextName = nextNamePrefix + getElementKey(child, ii++);
                  subtreeCount += mapIntoArray(child, array2, escapedPrefix, nextName, callback);
                }
              } else if (type2 === "object") {
                var childrenString = "" + children2;
                {
                  {
                    throw Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children2).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
                  }
                }
              }
            }
            return subtreeCount;
          }
          function mapChildren(children2, func, context) {
            if (children2 == null) {
              return children2;
            }
            var result = [];
            var count = 0;
            mapIntoArray(children2, result, "", "", function(child) {
              return func.call(context, child, count++);
            });
            return result;
          }
          function countChildren(children2) {
            var n = 0;
            mapChildren(children2, function() {
              n++;
            });
            return n;
          }
          function forEachChildren(children2, forEachFunc, forEachContext) {
            mapChildren(children2, function() {
              forEachFunc.apply(this, arguments);
            }, forEachContext);
          }
          function toArray(children2) {
            return mapChildren(children2, function(child) {
              return child;
            }) || [];
          }
          function onlyChild(children2) {
            if (!isValidElement3(children2)) {
              {
                throw Error("React.Children.only expected to receive a single React element child.");
              }
            }
            return children2;
          }
          function createContext4(defaultValue, calculateChangedBits) {
            if (calculateChangedBits === void 0) {
              calculateChangedBits = null;
            } else {
              {
                if (calculateChangedBits !== null && typeof calculateChangedBits !== "function") {
                  error("createContext: Expected the optional second argument to be a function. Instead received: %s", calculateChangedBits);
                }
              }
            }
            var context = {
              $$typeof: REACT_CONTEXT_TYPE,
              _calculateChangedBits: calculateChangedBits,
              _currentValue: defaultValue,
              _currentValue2: defaultValue,
              _threadCount: 0,
              Provider: null,
              Consumer: null
            };
            context.Provider = {
              $$typeof: REACT_PROVIDER_TYPE,
              _context: context
            };
            var hasWarnedAboutUsingNestedContextConsumers = false;
            var hasWarnedAboutUsingConsumerProvider = false;
            var hasWarnedAboutDisplayNameOnConsumer = false;
            {
              var Consumer = {
                $$typeof: REACT_CONTEXT_TYPE,
                _context: context,
                _calculateChangedBits: context._calculateChangedBits
              };
              Object.defineProperties(Consumer, {
                Provider: {
                  get: function() {
                    if (!hasWarnedAboutUsingConsumerProvider) {
                      hasWarnedAboutUsingConsumerProvider = true;
                      error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                    }
                    return context.Provider;
                  },
                  set: function(_Provider) {
                    context.Provider = _Provider;
                  }
                },
                _currentValue: {
                  get: function() {
                    return context._currentValue;
                  },
                  set: function(_currentValue) {
                    context._currentValue = _currentValue;
                  }
                },
                _currentValue2: {
                  get: function() {
                    return context._currentValue2;
                  },
                  set: function(_currentValue2) {
                    context._currentValue2 = _currentValue2;
                  }
                },
                _threadCount: {
                  get: function() {
                    return context._threadCount;
                  },
                  set: function(_threadCount) {
                    context._threadCount = _threadCount;
                  }
                },
                Consumer: {
                  get: function() {
                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                      hasWarnedAboutUsingNestedContextConsumers = true;
                      error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                    }
                    return context.Consumer;
                  }
                },
                displayName: {
                  get: function() {
                    return context.displayName;
                  },
                  set: function(displayName) {
                    if (!hasWarnedAboutDisplayNameOnConsumer) {
                      warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                      hasWarnedAboutDisplayNameOnConsumer = true;
                    }
                  }
                }
              });
              context.Consumer = Consumer;
            }
            {
              context._currentRenderer = null;
              context._currentRenderer2 = null;
            }
            return context;
          }
          var Uninitialized = -1;
          var Pending = 0;
          var Resolved = 1;
          var Rejected = 2;
          function lazyInitializer(payload) {
            if (payload._status === Uninitialized) {
              var ctor = payload._result;
              var thenable = ctor();
              var pending = payload;
              pending._status = Pending;
              pending._result = thenable;
              thenable.then(function(moduleObject) {
                if (payload._status === Pending) {
                  var defaultExport = moduleObject.default;
                  {
                    if (defaultExport === void 0) {
                      error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
                    }
                  }
                  var resolved = payload;
                  resolved._status = Resolved;
                  resolved._result = defaultExport;
                }
              }, function(error2) {
                if (payload._status === Pending) {
                  var rejected = payload;
                  rejected._status = Rejected;
                  rejected._result = error2;
                }
              });
            }
            if (payload._status === Resolved) {
              return payload._result;
            } else {
              throw payload._result;
            }
          }
          function lazy(ctor) {
            var payload = {
              _status: -1,
              _result: ctor
            };
            var lazyType = {
              $$typeof: REACT_LAZY_TYPE,
              _payload: payload,
              _init: lazyInitializer
            };
            {
              var defaultProps2;
              var propTypes;
              Object.defineProperties(lazyType, {
                defaultProps: {
                  configurable: true,
                  get: function() {
                    return defaultProps2;
                  },
                  set: function(newDefaultProps) {
                    error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    defaultProps2 = newDefaultProps;
                    Object.defineProperty(lazyType, "defaultProps", {
                      enumerable: true
                    });
                  }
                },
                propTypes: {
                  configurable: true,
                  get: function() {
                    return propTypes;
                  },
                  set: function(newPropTypes) {
                    error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    propTypes = newPropTypes;
                    Object.defineProperty(lazyType, "propTypes", {
                      enumerable: true
                    });
                  }
                }
              });
            }
            return lazyType;
          }
          function forwardRef15(render) {
            {
              if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
              } else if (typeof render !== "function") {
                error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
              } else {
                if (render.length !== 0 && render.length !== 2) {
                  error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
                }
              }
              if (render != null) {
                if (render.defaultProps != null || render.propTypes != null) {
                  error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
                }
              }
            }
            var elementType = {
              $$typeof: REACT_FORWARD_REF_TYPE,
              render
            };
            {
              var ownName;
              Object.defineProperty(elementType, "displayName", {
                enumerable: false,
                configurable: true,
                get: function() {
                  return ownName;
                },
                set: function(name) {
                  ownName = name;
                  if (render.displayName == null) {
                    render.displayName = name;
                  }
                }
              });
            }
            return elementType;
          }
          var enableScopeAPI = false;
          function isValidElementType(type2) {
            if (typeof type2 === "string" || typeof type2 === "function") {
              return true;
            }
            if (type2 === exports.Fragment || type2 === exports.Profiler || type2 === REACT_DEBUG_TRACING_MODE_TYPE || type2 === exports.StrictMode || type2 === exports.Suspense || type2 === REACT_SUSPENSE_LIST_TYPE || type2 === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
              return true;
            }
            if (typeof type2 === "object" && type2 !== null) {
              if (type2.$$typeof === REACT_LAZY_TYPE || type2.$$typeof === REACT_MEMO_TYPE || type2.$$typeof === REACT_PROVIDER_TYPE || type2.$$typeof === REACT_CONTEXT_TYPE || type2.$$typeof === REACT_FORWARD_REF_TYPE || type2.$$typeof === REACT_FUNDAMENTAL_TYPE || type2.$$typeof === REACT_BLOCK_TYPE || type2[0] === REACT_SERVER_BLOCK_TYPE) {
                return true;
              }
            }
            return false;
          }
          function memo2(type2, compare) {
            {
              if (!isValidElementType(type2)) {
                error("memo: The first argument must be a component. Instead received: %s", type2 === null ? "null" : typeof type2);
              }
            }
            var elementType = {
              $$typeof: REACT_MEMO_TYPE,
              type: type2,
              compare: compare === void 0 ? null : compare
            };
            {
              var ownName;
              Object.defineProperty(elementType, "displayName", {
                enumerable: false,
                configurable: true,
                get: function() {
                  return ownName;
                },
                set: function(name) {
                  ownName = name;
                  if (type2.displayName == null) {
                    type2.displayName = name;
                  }
                }
              });
            }
            return elementType;
          }
          function resolveDispatcher() {
            var dispatcher = ReactCurrentDispatcher.current;
            if (!(dispatcher !== null)) {
              {
                throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
              }
            }
            return dispatcher;
          }
          function useContext6(Context, unstable_observedBits) {
            var dispatcher = resolveDispatcher();
            {
              if (unstable_observedBits !== void 0) {
                error("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s", unstable_observedBits, typeof unstable_observedBits === "number" && Array.isArray(arguments[2]) ? "\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://reactjs.org/link/rules-of-hooks" : "");
              }
              if (Context._context !== void 0) {
                var realContext = Context._context;
                if (realContext.Consumer === Context) {
                  error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
                } else if (realContext.Provider === Context) {
                  error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
                }
              }
            }
            return dispatcher.useContext(Context, unstable_observedBits);
          }
          function useState12(initialState) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useState(initialState);
          }
          function useReducer(reducer, initialArg, init2) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useReducer(reducer, initialArg, init2);
          }
          function useRef7(initialValue) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useRef(initialValue);
          }
          function useEffect8(create2, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useEffect(create2, deps);
          }
          function useLayoutEffect3(create2, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useLayoutEffect(create2, deps);
          }
          function useCallback5(callback, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useCallback(callback, deps);
          }
          function useMemo4(create2, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useMemo(create2, deps);
          }
          function useImperativeHandle3(ref, create2, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useImperativeHandle(ref, create2, deps);
          }
          function useDebugValue3(value, formatterFn) {
            {
              var dispatcher = resolveDispatcher();
              return dispatcher.useDebugValue(value, formatterFn);
            }
          }
          var disabledDepth = 0;
          var prevLog;
          var prevInfo;
          var prevWarn;
          var prevError;
          var prevGroup;
          var prevGroupCollapsed;
          var prevGroupEnd;
          function disabledLog() {
          }
          disabledLog.__reactDisabledLog = true;
          function disableLogs() {
            {
              if (disabledDepth === 0) {
                prevLog = console.log;
                prevInfo = console.info;
                prevWarn = console.warn;
                prevError = console.error;
                prevGroup = console.group;
                prevGroupCollapsed = console.groupCollapsed;
                prevGroupEnd = console.groupEnd;
                var props = {
                  configurable: true,
                  enumerable: true,
                  value: disabledLog,
                  writable: true
                };
                Object.defineProperties(console, {
                  info: props,
                  log: props,
                  warn: props,
                  error: props,
                  group: props,
                  groupCollapsed: props,
                  groupEnd: props
                });
              }
              disabledDepth++;
            }
          }
          function reenableLogs() {
            {
              disabledDepth--;
              if (disabledDepth === 0) {
                var props = {
                  configurable: true,
                  enumerable: true,
                  writable: true
                };
                Object.defineProperties(console, {
                  log: _assign({}, props, {
                    value: prevLog
                  }),
                  info: _assign({}, props, {
                    value: prevInfo
                  }),
                  warn: _assign({}, props, {
                    value: prevWarn
                  }),
                  error: _assign({}, props, {
                    value: prevError
                  }),
                  group: _assign({}, props, {
                    value: prevGroup
                  }),
                  groupCollapsed: _assign({}, props, {
                    value: prevGroupCollapsed
                  }),
                  groupEnd: _assign({}, props, {
                    value: prevGroupEnd
                  })
                });
              }
              if (disabledDepth < 0) {
                error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
              }
            }
          }
          var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
          var prefix2;
          function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
              if (prefix2 === void 0) {
                try {
                  throw Error();
                } catch (x3) {
                  var match2 = x3.stack.trim().match(/\n( *(at )?)/);
                  prefix2 = match2 && match2[1] || "";
                }
              }
              return "\n" + prefix2 + name;
            }
          }
          var reentry = false;
          var componentFrameCache;
          {
            var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
          }
          function describeNativeComponentFrame(fn, construct) {
            if (!fn || reentry) {
              return "";
            }
            {
              var frame2 = componentFrameCache.get(fn);
              if (frame2 !== void 0) {
                return frame2;
              }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var previousDispatcher;
            {
              previousDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = null;
              disableLogs();
            }
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x3) {
                    control = x3;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x3) {
                    control = x3;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x3) {
                  control = x3;
                }
                fn();
              }
            } catch (sample) {
              if (sample && control && typeof sample.stack === "string") {
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                  c--;
                }
                for (; s >= 1 && c >= 0; s--, c--) {
                  if (sampleLines[s] !== controlLines[c]) {
                    if (s !== 1 || c !== 1) {
                      do {
                        s--;
                        c--;
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                          var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                          {
                            if (typeof fn === "function") {
                              componentFrameCache.set(fn, _frame);
                            }
                          }
                          return _frame;
                        }
                      } while (s >= 1 && c >= 0);
                    }
                    break;
                  }
                }
              }
            } finally {
              reentry = false;
              {
                ReactCurrentDispatcher$1.current = previousDispatcher;
                reenableLogs();
              }
              Error.prepareStackTrace = previousPrepareStackTrace;
            }
            var name = fn ? fn.displayName || fn.name : "";
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
            {
              if (typeof fn === "function") {
                componentFrameCache.set(fn, syntheticFrame);
              }
            }
            return syntheticFrame;
          }
          function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
              return describeNativeComponentFrame(fn, false);
            }
          }
          function shouldConstruct(Component2) {
            var prototype = Component2.prototype;
            return !!(prototype && prototype.isReactComponent);
          }
          function describeUnknownElementTypeFrameInDEV(type2, source, ownerFn) {
            if (type2 == null) {
              return "";
            }
            if (typeof type2 === "function") {
              {
                return describeNativeComponentFrame(type2, shouldConstruct(type2));
              }
            }
            if (typeof type2 === "string") {
              return describeBuiltInComponentFrame(type2);
            }
            switch (type2) {
              case exports.Suspense:
                return describeBuiltInComponentFrame("Suspense");
              case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
            }
            if (typeof type2 === "object") {
              switch (type2.$$typeof) {
                case REACT_FORWARD_REF_TYPE:
                  return describeFunctionComponentFrame(type2.render);
                case REACT_MEMO_TYPE:
                  return describeUnknownElementTypeFrameInDEV(type2.type, source, ownerFn);
                case REACT_BLOCK_TYPE:
                  return describeFunctionComponentFrame(type2._render);
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type2;
                  var payload = lazyComponent._payload;
                  var init2 = lazyComponent._init;
                  try {
                    return describeUnknownElementTypeFrameInDEV(init2(payload), source, ownerFn);
                  } catch (x3) {
                  }
                }
              }
            }
            return "";
          }
          var loggedTypeFailures = {};
          var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
          function setCurrentlyValidatingElement(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame$1.setExtraStackFrame(null);
              }
            }
          }
          function checkPropTypes(typeSpecs, values3, location, componentName, element) {
            {
              var has = Function.call.bind(Object.prototype.hasOwnProperty);
              for (var typeSpecName in typeSpecs) {
                if (has(typeSpecs, typeSpecName)) {
                  var error$1 = void 0;
                  try {
                    if (typeof typeSpecs[typeSpecName] !== "function") {
                      var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                      err.name = "Invariant Violation";
                      throw err;
                    }
                    error$1 = typeSpecs[typeSpecName](values3, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                  } catch (ex) {
                    error$1 = ex;
                  }
                  if (error$1 && !(error$1 instanceof Error)) {
                    setCurrentlyValidatingElement(element);
                    error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                    setCurrentlyValidatingElement(null);
                  }
                  if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                    loggedTypeFailures[error$1.message] = true;
                    setCurrentlyValidatingElement(element);
                    error("Failed %s type: %s", location, error$1.message);
                    setCurrentlyValidatingElement(null);
                  }
                }
              }
            }
          }
          function setCurrentlyValidatingElement$1(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                setExtraStackFrame(stack);
              } else {
                setExtraStackFrame(null);
              }
            }
          }
          var propTypesMisspellWarningShown;
          {
            propTypesMisspellWarningShown = false;
          }
          function getDeclarationErrorAddendum() {
            if (ReactCurrentOwner.current) {
              var name = getComponentName(ReactCurrentOwner.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
          function getSourceInfoErrorAddendum(source) {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
          function getSourceInfoErrorAddendumForProps(elementProps) {
            if (elementProps !== null && elementProps !== void 0) {
              return getSourceInfoErrorAddendum(elementProps.__source);
            }
            return "";
          }
          var ownerHasKeyUseWarning = {};
          function getCurrentComponentErrorInfo(parentType) {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
          function validateExplicitKey(element, parentType) {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
              childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
            }
            {
              setCurrentlyValidatingElement$1(element);
              error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
              setCurrentlyValidatingElement$1(null);
            }
          }
          function validateChildKeys(node2, parentType) {
            if (typeof node2 !== "object") {
              return;
            }
            if (Array.isArray(node2)) {
              for (var i = 0; i < node2.length; i++) {
                var child = node2[i];
                if (isValidElement3(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement3(node2)) {
              if (node2._store) {
                node2._store.validated = true;
              }
            } else if (node2) {
              var iteratorFn = getIteratorFn(node2);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node2.entries) {
                  var iterator = iteratorFn.call(node2);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement3(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
          function validatePropTypes(element) {
            {
              var type2 = element.type;
              if (type2 === null || type2 === void 0 || typeof type2 === "string") {
                return;
              }
              var propTypes;
              if (typeof type2 === "function") {
                propTypes = type2.propTypes;
              } else if (typeof type2 === "object" && (type2.$$typeof === REACT_FORWARD_REF_TYPE || type2.$$typeof === REACT_MEMO_TYPE)) {
                propTypes = type2.propTypes;
              } else {
                return;
              }
              if (propTypes) {
                var name = getComponentName(type2);
                checkPropTypes(propTypes, element.props, "prop", name, element);
              } else if (type2.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                propTypesMisspellWarningShown = true;
                var _name = getComponentName(type2);
                error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
              }
              if (typeof type2.getDefaultProps === "function" && !type2.getDefaultProps.isReactClassApproved) {
                error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
              }
            }
          }
          function validateFragmentProps(fragment) {
            {
              var keys = Object.keys(fragment.props);
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (key !== "children" && key !== "key") {
                  setCurrentlyValidatingElement$1(fragment);
                  error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                  setCurrentlyValidatingElement$1(null);
                  break;
                }
              }
              if (fragment.ref !== null) {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid attribute `ref` supplied to `React.Fragment`.");
                setCurrentlyValidatingElement$1(null);
              }
            }
          }
          function createElementWithValidation(type2, props, children2) {
            var validType = isValidElementType(type2);
            if (!validType) {
              var info = "";
              if (type2 === void 0 || typeof type2 === "object" && type2 !== null && Object.keys(type2).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendumForProps(props);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type2 === null) {
                typeString = "null";
              } else if (Array.isArray(type2)) {
                typeString = "array";
              } else if (type2 !== void 0 && type2.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentName(type2.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type2;
              }
              {
                error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
              }
            }
            var element = createElement4.apply(this, arguments);
            if (element == null) {
              return element;
            }
            if (validType) {
              for (var i = 2; i < arguments.length; i++) {
                validateChildKeys(arguments[i], type2);
              }
            }
            if (type2 === exports.Fragment) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
          var didWarnAboutDeprecatedCreateFactory = false;
          function createFactoryWithValidation(type2) {
            var validatedFactory = createElementWithValidation.bind(null, type2);
            validatedFactory.type = type2;
            {
              if (!didWarnAboutDeprecatedCreateFactory) {
                didWarnAboutDeprecatedCreateFactory = true;
                warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
              }
              Object.defineProperty(validatedFactory, "type", {
                enumerable: false,
                get: function() {
                  warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                  Object.defineProperty(this, "type", {
                    value: type2
                  });
                  return type2;
                }
              });
            }
            return validatedFactory;
          }
          function cloneElementWithValidation(element, props, children2) {
            var newElement = cloneElement4.apply(this, arguments);
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], newElement.type);
            }
            validatePropTypes(newElement);
            return newElement;
          }
          {
            try {
              var frozenObject = Object.freeze({});
              /* @__PURE__ */ new Map([[frozenObject, null]]);
              /* @__PURE__ */ new Set([frozenObject]);
            } catch (e) {
            }
          }
          var createElement$1 = createElementWithValidation;
          var cloneElement$1 = cloneElementWithValidation;
          var createFactory = createFactoryWithValidation;
          var Children3 = {
            map: mapChildren,
            forEach: forEachChildren,
            count: countChildren,
            toArray,
            only: onlyChild
          };
          exports.Children = Children3;
          exports.Component = Component;
          exports.PureComponent = PureComponent;
          exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
          exports.cloneElement = cloneElement$1;
          exports.createContext = createContext4;
          exports.createElement = createElement$1;
          exports.createFactory = createFactory;
          exports.createRef = createRef;
          exports.forwardRef = forwardRef15;
          exports.isValidElement = isValidElement3;
          exports.lazy = lazy;
          exports.memo = memo2;
          exports.useCallback = useCallback5;
          exports.useContext = useContext6;
          exports.useDebugValue = useDebugValue3;
          exports.useEffect = useEffect8;
          exports.useImperativeHandle = useImperativeHandle3;
          exports.useLayoutEffect = useLayoutEffect3;
          exports.useMemo = useMemo4;
          exports.useReducer = useReducer;
          exports.useRef = useRef7;
          exports.useState = useState12;
          exports.version = ReactVersion;
        })();
      }
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_development();
      }
    }
  });

  // node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js
  var require_react_is_development = __commonJS({
    "node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var hasSymbol = typeof Symbol === "function" && Symbol.for;
          var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
          var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
          var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
          var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
          var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
          var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
          var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
          var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
          var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
          var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
          var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
          var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
          var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
          var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
          var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
          var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
          var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
          var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
          function isValidElementType(type2) {
            return typeof type2 === "string" || typeof type2 === "function" || type2 === REACT_FRAGMENT_TYPE || type2 === REACT_CONCURRENT_MODE_TYPE || type2 === REACT_PROFILER_TYPE || type2 === REACT_STRICT_MODE_TYPE || type2 === REACT_SUSPENSE_TYPE || type2 === REACT_SUSPENSE_LIST_TYPE || typeof type2 === "object" && type2 !== null && (type2.$$typeof === REACT_LAZY_TYPE || type2.$$typeof === REACT_MEMO_TYPE || type2.$$typeof === REACT_PROVIDER_TYPE || type2.$$typeof === REACT_CONTEXT_TYPE || type2.$$typeof === REACT_FORWARD_REF_TYPE || type2.$$typeof === REACT_FUNDAMENTAL_TYPE || type2.$$typeof === REACT_RESPONDER_TYPE || type2.$$typeof === REACT_SCOPE_TYPE || type2.$$typeof === REACT_BLOCK_TYPE);
          }
          function typeOf(object) {
            if (typeof object === "object" && object !== null) {
              var $$typeof = object.$$typeof;
              switch ($$typeof) {
                case REACT_ELEMENT_TYPE:
                  var type2 = object.type;
                  switch (type2) {
                    case REACT_ASYNC_MODE_TYPE:
                    case REACT_CONCURRENT_MODE_TYPE:
                    case REACT_FRAGMENT_TYPE:
                    case REACT_PROFILER_TYPE:
                    case REACT_STRICT_MODE_TYPE:
                    case REACT_SUSPENSE_TYPE:
                      return type2;
                    default:
                      var $$typeofType = type2 && type2.$$typeof;
                      switch ($$typeofType) {
                        case REACT_CONTEXT_TYPE:
                        case REACT_FORWARD_REF_TYPE:
                        case REACT_LAZY_TYPE:
                        case REACT_MEMO_TYPE:
                        case REACT_PROVIDER_TYPE:
                          return $$typeofType;
                        default:
                          return $$typeof;
                      }
                  }
                case REACT_PORTAL_TYPE:
                  return $$typeof;
              }
            }
            return void 0;
          }
          var AsyncMode = REACT_ASYNC_MODE_TYPE;
          var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
          var ContextConsumer = REACT_CONTEXT_TYPE;
          var ContextProvider = REACT_PROVIDER_TYPE;
          var Element = REACT_ELEMENT_TYPE;
          var ForwardRef2 = REACT_FORWARD_REF_TYPE;
          var Fragment4 = REACT_FRAGMENT_TYPE;
          var Lazy = REACT_LAZY_TYPE;
          var Memo2 = REACT_MEMO_TYPE;
          var Portal = REACT_PORTAL_TYPE;
          var Profiler = REACT_PROFILER_TYPE;
          var StrictMode = REACT_STRICT_MODE_TYPE;
          var Suspense = REACT_SUSPENSE_TYPE;
          var hasWarnedAboutDeprecatedIsAsyncMode = false;
          function isAsyncMode(object) {
            {
              if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                hasWarnedAboutDeprecatedIsAsyncMode = true;
                console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
              }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
          }
          function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
          }
          function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
          }
          function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
          }
          function isElement(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
          }
          function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
          }
          function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
          }
          function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
          }
          function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
          }
          function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
          }
          function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
          }
          function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
          }
          exports.AsyncMode = AsyncMode;
          exports.ConcurrentMode = ConcurrentMode;
          exports.ContextConsumer = ContextConsumer;
          exports.ContextProvider = ContextProvider;
          exports.Element = Element;
          exports.ForwardRef = ForwardRef2;
          exports.Fragment = Fragment4;
          exports.Lazy = Lazy;
          exports.Memo = Memo2;
          exports.Portal = Portal;
          exports.Profiler = Profiler;
          exports.StrictMode = StrictMode;
          exports.Suspense = Suspense;
          exports.isAsyncMode = isAsyncMode;
          exports.isConcurrentMode = isConcurrentMode;
          exports.isContextConsumer = isContextConsumer;
          exports.isContextProvider = isContextProvider;
          exports.isElement = isElement;
          exports.isForwardRef = isForwardRef;
          exports.isFragment = isFragment;
          exports.isLazy = isLazy;
          exports.isMemo = isMemo;
          exports.isPortal = isPortal;
          exports.isProfiler = isProfiler;
          exports.isStrictMode = isStrictMode;
          exports.isSuspense = isSuspense;
          exports.isValidElementType = isValidElementType;
          exports.typeOf = typeOf;
        })();
      }
    }
  });

  // node_modules/hoist-non-react-statics/node_modules/react-is/index.js
  var require_react_is = __commonJS({
    "node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_is_development();
      }
    }
  });

  // node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
  var require_hoist_non_react_statics_cjs = __commonJS({
    "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module) {
      "use strict";
      var reactIs = require_react_is();
      var REACT_STATICS = {
        childContextTypes: true,
        contextType: true,
        contextTypes: true,
        defaultProps: true,
        displayName: true,
        getDefaultProps: true,
        getDerivedStateFromError: true,
        getDerivedStateFromProps: true,
        mixins: true,
        propTypes: true,
        type: true
      };
      var KNOWN_STATICS = {
        name: true,
        length: true,
        prototype: true,
        caller: true,
        callee: true,
        arguments: true,
        arity: true
      };
      var FORWARD_REF_STATICS = {
        "$$typeof": true,
        render: true,
        defaultProps: true,
        displayName: true,
        propTypes: true
      };
      var MEMO_STATICS = {
        "$$typeof": true,
        compare: true,
        defaultProps: true,
        displayName: true,
        propTypes: true,
        type: true
      };
      var TYPE_STATICS = {};
      TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
      TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
      function getStatics(component) {
        if (reactIs.isMemo(component)) {
          return MEMO_STATICS;
        }
        return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
      }
      var defineProperty = Object.defineProperty;
      var getOwnPropertyNames = Object.getOwnPropertyNames;
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var getPrototypeOf = Object.getPrototypeOf;
      var objectPrototype = Object.prototype;
      function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
        if (typeof sourceComponent !== "string") {
          if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
              hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
          }
          var keys = getOwnPropertyNames(sourceComponent);
          if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
          }
          var targetStatics = getStatics(targetComponent);
          var sourceStatics = getStatics(sourceComponent);
          for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
              var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
              try {
                defineProperty(targetComponent, key, descriptor);
              } catch (e) {
              }
            }
          }
        }
        return targetComponent;
      }
      module.exports = hoistNonReactStatics;
    }
  });

  // node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js
  var require_react_is_development2 = __commonJS({
    "node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var hasSymbol = typeof Symbol === "function" && Symbol.for;
          var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
          var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
          var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
          var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
          var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
          var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
          var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
          var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
          var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
          var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
          var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
          var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
          var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
          var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
          var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
          var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
          var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
          var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
          function isValidElementType(type2) {
            return typeof type2 === "string" || typeof type2 === "function" || type2 === REACT_FRAGMENT_TYPE || type2 === REACT_CONCURRENT_MODE_TYPE || type2 === REACT_PROFILER_TYPE || type2 === REACT_STRICT_MODE_TYPE || type2 === REACT_SUSPENSE_TYPE || type2 === REACT_SUSPENSE_LIST_TYPE || typeof type2 === "object" && type2 !== null && (type2.$$typeof === REACT_LAZY_TYPE || type2.$$typeof === REACT_MEMO_TYPE || type2.$$typeof === REACT_PROVIDER_TYPE || type2.$$typeof === REACT_CONTEXT_TYPE || type2.$$typeof === REACT_FORWARD_REF_TYPE || type2.$$typeof === REACT_FUNDAMENTAL_TYPE || type2.$$typeof === REACT_RESPONDER_TYPE || type2.$$typeof === REACT_SCOPE_TYPE || type2.$$typeof === REACT_BLOCK_TYPE);
          }
          function typeOf(object) {
            if (typeof object === "object" && object !== null) {
              var $$typeof = object.$$typeof;
              switch ($$typeof) {
                case REACT_ELEMENT_TYPE:
                  var type2 = object.type;
                  switch (type2) {
                    case REACT_ASYNC_MODE_TYPE:
                    case REACT_CONCURRENT_MODE_TYPE:
                    case REACT_FRAGMENT_TYPE:
                    case REACT_PROFILER_TYPE:
                    case REACT_STRICT_MODE_TYPE:
                    case REACT_SUSPENSE_TYPE:
                      return type2;
                    default:
                      var $$typeofType = type2 && type2.$$typeof;
                      switch ($$typeofType) {
                        case REACT_CONTEXT_TYPE:
                        case REACT_FORWARD_REF_TYPE:
                        case REACT_LAZY_TYPE:
                        case REACT_MEMO_TYPE:
                        case REACT_PROVIDER_TYPE:
                          return $$typeofType;
                        default:
                          return $$typeof;
                      }
                  }
                case REACT_PORTAL_TYPE:
                  return $$typeof;
              }
            }
            return void 0;
          }
          var AsyncMode = REACT_ASYNC_MODE_TYPE;
          var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
          var ContextConsumer = REACT_CONTEXT_TYPE;
          var ContextProvider = REACT_PROVIDER_TYPE;
          var Element = REACT_ELEMENT_TYPE;
          var ForwardRef2 = REACT_FORWARD_REF_TYPE;
          var Fragment4 = REACT_FRAGMENT_TYPE;
          var Lazy = REACT_LAZY_TYPE;
          var Memo2 = REACT_MEMO_TYPE;
          var Portal = REACT_PORTAL_TYPE;
          var Profiler = REACT_PROFILER_TYPE;
          var StrictMode = REACT_STRICT_MODE_TYPE;
          var Suspense = REACT_SUSPENSE_TYPE;
          var hasWarnedAboutDeprecatedIsAsyncMode = false;
          function isAsyncMode(object) {
            {
              if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                hasWarnedAboutDeprecatedIsAsyncMode = true;
                console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
              }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
          }
          function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
          }
          function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
          }
          function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
          }
          function isElement(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
          }
          function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
          }
          function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
          }
          function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
          }
          function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
          }
          function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
          }
          function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
          }
          function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
          }
          exports.AsyncMode = AsyncMode;
          exports.ConcurrentMode = ConcurrentMode;
          exports.ContextConsumer = ContextConsumer;
          exports.ContextProvider = ContextProvider;
          exports.Element = Element;
          exports.ForwardRef = ForwardRef2;
          exports.Fragment = Fragment4;
          exports.Lazy = Lazy;
          exports.Memo = Memo2;
          exports.Portal = Portal;
          exports.Profiler = Profiler;
          exports.StrictMode = StrictMode;
          exports.Suspense = Suspense;
          exports.isAsyncMode = isAsyncMode;
          exports.isConcurrentMode = isConcurrentMode;
          exports.isContextConsumer = isContextConsumer;
          exports.isContextProvider = isContextProvider;
          exports.isElement = isElement;
          exports.isForwardRef = isForwardRef;
          exports.isFragment = isFragment;
          exports.isLazy = isLazy;
          exports.isMemo = isMemo;
          exports.isPortal = isPortal;
          exports.isProfiler = isProfiler;
          exports.isStrictMode = isStrictMode;
          exports.isSuspense = isSuspense;
          exports.isValidElementType = isValidElementType;
          exports.typeOf = typeOf;
        })();
      }
    }
  });

  // node_modules/prop-types/node_modules/react-is/index.js
  var require_react_is2 = __commonJS({
    "node_modules/prop-types/node_modules/react-is/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_is_development2();
      }
    }
  });

  // node_modules/prop-types/lib/ReactPropTypesSecret.js
  var require_ReactPropTypesSecret = __commonJS({
    "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
      "use strict";
      var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      module.exports = ReactPropTypesSecret;
    }
  });

  // node_modules/prop-types/lib/has.js
  var require_has = __commonJS({
    "node_modules/prop-types/lib/has.js"(exports, module) {
      module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
    }
  });

  // node_modules/prop-types/checkPropTypes.js
  var require_checkPropTypes = __commonJS({
    "node_modules/prop-types/checkPropTypes.js"(exports, module) {
      "use strict";
      var printWarning = function() {
      };
      if (true) {
        ReactPropTypesSecret = require_ReactPropTypesSecret();
        loggedTypeFailures = {};
        has = require_has();
        printWarning = function(text) {
          var message = "Warning: " + text;
          if (typeof console !== "undefined") {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (x3) {
          }
        };
      }
      var ReactPropTypesSecret;
      var loggedTypeFailures;
      var has;
      function checkPropTypes(typeSpecs, values3, location, componentName, getStack) {
        if (true) {
          for (var typeSpecName in typeSpecs) {
            if (has(typeSpecs, typeSpecName)) {
              var error;
              try {
                if (typeof typeSpecs[typeSpecName] !== "function") {
                  var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  err.name = "Invariant Violation";
                  throw err;
                }
                error = typeSpecs[typeSpecName](values3, typeSpecName, componentName, location, null, ReactPropTypesSecret);
              } catch (ex) {
                error = ex;
              }
              if (error && !(error instanceof Error)) {
                printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
              }
              if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                loggedTypeFailures[error.message] = true;
                var stack = getStack ? getStack() : "";
                printWarning("Failed " + location + " type: " + error.message + (stack != null ? stack : ""));
              }
            }
          }
        }
      }
      checkPropTypes.resetWarningCache = function() {
        if (true) {
          loggedTypeFailures = {};
        }
      };
      module.exports = checkPropTypes;
    }
  });

  // node_modules/prop-types/factoryWithTypeCheckers.js
  var require_factoryWithTypeCheckers = __commonJS({
    "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
      "use strict";
      var ReactIs = require_react_is2();
      var assign2 = require_object_assign();
      var ReactPropTypesSecret = require_ReactPropTypesSecret();
      var has = require_has();
      var checkPropTypes = require_checkPropTypes();
      var printWarning = function() {
      };
      if (true) {
        printWarning = function(text) {
          var message = "Warning: " + text;
          if (typeof console !== "undefined") {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (x3) {
          }
        };
      }
      function emptyFunctionThatReturnsNull() {
        return null;
      }
      module.exports = function(isValidElement3, throwOnDirectAccess) {
        var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
          if (typeof iteratorFn === "function") {
            return iteratorFn;
          }
        }
        var ANONYMOUS = "<<anonymous>>";
        var ReactPropTypes = {
          array: createPrimitiveTypeChecker("array"),
          bigint: createPrimitiveTypeChecker("bigint"),
          bool: createPrimitiveTypeChecker("boolean"),
          func: createPrimitiveTypeChecker("function"),
          number: createPrimitiveTypeChecker("number"),
          object: createPrimitiveTypeChecker("object"),
          string: createPrimitiveTypeChecker("string"),
          symbol: createPrimitiveTypeChecker("symbol"),
          any: createAnyTypeChecker(),
          arrayOf: createArrayOfTypeChecker,
          element: createElementTypeChecker(),
          elementType: createElementTypeTypeChecker(),
          instanceOf: createInstanceTypeChecker,
          node: createNodeChecker(),
          objectOf: createObjectOfTypeChecker,
          oneOf: createEnumTypeChecker,
          oneOfType: createUnionTypeChecker,
          shape: createShapeTypeChecker,
          exact: createStrictShapeTypeChecker
        };
        function is(x3, y3) {
          if (x3 === y3) {
            return x3 !== 0 || 1 / x3 === 1 / y3;
          } else {
            return x3 !== x3 && y3 !== y3;
          }
        }
        function PropTypeError(message, data2) {
          this.message = message;
          this.data = data2 && typeof data2 === "object" ? data2 : {};
          this.stack = "";
        }
        PropTypeError.prototype = Error.prototype;
        function createChainableTypeChecker(validate) {
          if (true) {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
          }
          function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
              if (throwOnDirectAccess) {
                var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                err.name = "Invariant Violation";
                throw err;
              } else if (typeof console !== "undefined") {
                var cacheKey = componentName + ":" + propName;
                if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
                  printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.");
                  manualPropTypeCallCache[cacheKey] = true;
                  manualPropTypeWarningCount++;
                }
              }
            }
            if (props[propName] == null) {
              if (isRequired) {
                if (props[propName] === null) {
                  return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
                }
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
              }
              return null;
            } else {
              return validate(props, propName, componentName, location, propFullName);
            }
          }
          var chainedCheckType = checkType.bind(null, false);
          chainedCheckType.isRequired = checkType.bind(null, true);
          return chainedCheckType;
        }
        function createPrimitiveTypeChecker(expectedType) {
          function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
              var preciseType = getPreciseType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."), { expectedType });
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createAnyTypeChecker() {
          return createChainableTypeChecker(emptyFunctionThatReturnsNull);
        }
        function createArrayOfTypeChecker(typeChecker) {
          function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== "function") {
              return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
            }
            for (var i = 0; i < propValue.length; i++) {
              var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createElementTypeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement3(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createElementTypeTypeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createInstanceTypeChecker(expectedClass) {
          function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
              var expectedClassName = expectedClass.name || ANONYMOUS;
              var actualClassName = getClassName(props[propName]);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createEnumTypeChecker(expectedValues) {
          if (!Array.isArray(expectedValues)) {
            if (true) {
              if (arguments.length > 1) {
                printWarning("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).");
              } else {
                printWarning("Invalid argument supplied to oneOf, expected an array.");
              }
            }
            return emptyFunctionThatReturnsNull;
          }
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for (var i = 0; i < expectedValues.length; i++) {
              if (is(propValue, expectedValues[i])) {
                return null;
              }
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
              var type2 = getPreciseType(value);
              if (type2 === "symbol") {
                return String(value);
              }
              return value;
            });
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
          }
          return createChainableTypeChecker(validate);
        }
        function createObjectOfTypeChecker(typeChecker) {
          function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== "function") {
              return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
            }
            for (var key in propValue) {
              if (has(propValue, key)) {
                var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                if (error instanceof Error) {
                  return error;
                }
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createUnionTypeChecker(arrayOfTypeCheckers) {
          if (!Array.isArray(arrayOfTypeCheckers)) {
            true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
            return emptyFunctionThatReturnsNull;
          }
          for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== "function") {
              printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + ".");
              return emptyFunctionThatReturnsNull;
            }
          }
          function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
              var checker2 = arrayOfTypeCheckers[i2];
              var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
              if (checkerResult == null) {
                return null;
              }
              if (checkerResult.data && has(checkerResult.data, "expectedType")) {
                expectedTypes.push(checkerResult.data.expectedType);
              }
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
          }
          return createChainableTypeChecker(validate);
        }
        function createNodeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function invalidValidatorError(componentName, location, propFullName, key, type2) {
          return new PropTypeError((componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type2 + "`.");
        }
        function createShapeTypeChecker(shapeTypes) {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
            }
            for (var key in shapeTypes) {
              var checker = shapeTypes[key];
              if (typeof checker !== "function") {
                return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
              }
              var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createStrictShapeTypeChecker(shapeTypes) {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
            }
            var allKeys = assign2({}, props[propName], shapeTypes);
            for (var key in allKeys) {
              var checker = shapeTypes[key];
              if (has(shapeTypes, key) && typeof checker !== "function") {
                return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
              }
              if (!checker) {
                return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
              }
              var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function isNode(propValue) {
          switch (typeof propValue) {
            case "number":
            case "string":
            case "undefined":
              return true;
            case "boolean":
              return !propValue;
            case "object":
              if (Array.isArray(propValue)) {
                return propValue.every(isNode);
              }
              if (propValue === null || isValidElement3(propValue)) {
                return true;
              }
              var iteratorFn = getIteratorFn(propValue);
              if (iteratorFn) {
                var iterator = iteratorFn.call(propValue);
                var step;
                if (iteratorFn !== propValue.entries) {
                  while (!(step = iterator.next()).done) {
                    if (!isNode(step.value)) {
                      return false;
                    }
                  }
                } else {
                  while (!(step = iterator.next()).done) {
                    var entry = step.value;
                    if (entry) {
                      if (!isNode(entry[1])) {
                        return false;
                      }
                    }
                  }
                }
              } else {
                return false;
              }
              return true;
            default:
              return false;
          }
        }
        function isSymbol(propType, propValue) {
          if (propType === "symbol") {
            return true;
          }
          if (!propValue) {
            return false;
          }
          if (propValue["@@toStringTag"] === "Symbol") {
            return true;
          }
          if (typeof Symbol === "function" && propValue instanceof Symbol) {
            return true;
          }
          return false;
        }
        function getPropType(propValue) {
          var propType = typeof propValue;
          if (Array.isArray(propValue)) {
            return "array";
          }
          if (propValue instanceof RegExp) {
            return "object";
          }
          if (isSymbol(propType, propValue)) {
            return "symbol";
          }
          return propType;
        }
        function getPreciseType(propValue) {
          if (typeof propValue === "undefined" || propValue === null) {
            return "" + propValue;
          }
          var propType = getPropType(propValue);
          if (propType === "object") {
            if (propValue instanceof Date) {
              return "date";
            } else if (propValue instanceof RegExp) {
              return "regexp";
            }
          }
          return propType;
        }
        function getPostfixForTypeWarning(value) {
          var type2 = getPreciseType(value);
          switch (type2) {
            case "array":
            case "object":
              return "an " + type2;
            case "boolean":
            case "date":
            case "regexp":
              return "a " + type2;
            default:
              return type2;
          }
        }
        function getClassName(propValue) {
          if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
          }
          return propValue.constructor.name;
        }
        ReactPropTypes.checkPropTypes = checkPropTypes;
        ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
        ReactPropTypes.PropTypes = ReactPropTypes;
        return ReactPropTypes;
      };
    }
  });

  // node_modules/prop-types/index.js
  var require_prop_types = __commonJS({
    "node_modules/prop-types/index.js"(exports, module) {
      if (true) {
        ReactIs = require_react_is2();
        throwOnDirectAccess = true;
        module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
      } else {
        module.exports = null();
      }
      var ReactIs;
      var throwOnDirectAccess;
    }
  });

  // node_modules/react/cjs/react-jsx-runtime.development.js
  var require_react_jsx_runtime_development = __commonJS({
    "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var React43 = require_react();
          var _assign = require_object_assign();
          var REACT_ELEMENT_TYPE = 60103;
          var REACT_PORTAL_TYPE = 60106;
          exports.Fragment = 60107;
          var REACT_STRICT_MODE_TYPE = 60108;
          var REACT_PROFILER_TYPE = 60114;
          var REACT_PROVIDER_TYPE = 60109;
          var REACT_CONTEXT_TYPE = 60110;
          var REACT_FORWARD_REF_TYPE = 60112;
          var REACT_SUSPENSE_TYPE = 60113;
          var REACT_SUSPENSE_LIST_TYPE = 60120;
          var REACT_MEMO_TYPE = 60115;
          var REACT_LAZY_TYPE = 60116;
          var REACT_BLOCK_TYPE = 60121;
          var REACT_SERVER_BLOCK_TYPE = 60122;
          var REACT_FUNDAMENTAL_TYPE = 60117;
          var REACT_SCOPE_TYPE = 60119;
          var REACT_OPAQUE_ID_TYPE = 60128;
          var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
          var REACT_OFFSCREEN_TYPE = 60130;
          var REACT_LEGACY_HIDDEN_TYPE = 60131;
          if (typeof Symbol === "function" && Symbol.for) {
            var symbolFor = Symbol.for;
            REACT_ELEMENT_TYPE = symbolFor("react.element");
            REACT_PORTAL_TYPE = symbolFor("react.portal");
            exports.Fragment = symbolFor("react.fragment");
            REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
            REACT_PROFILER_TYPE = symbolFor("react.profiler");
            REACT_PROVIDER_TYPE = symbolFor("react.provider");
            REACT_CONTEXT_TYPE = symbolFor("react.context");
            REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
            REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
            REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
            REACT_MEMO_TYPE = symbolFor("react.memo");
            REACT_LAZY_TYPE = symbolFor("react.lazy");
            REACT_BLOCK_TYPE = symbolFor("react.block");
            REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
            REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
            REACT_SCOPE_TYPE = symbolFor("react.scope");
            REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
            REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
            REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
            REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
          }
          var MAYBE_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = "@@iterator";
          function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== "object") {
              return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === "function") {
              return maybeIterator;
            }
            return null;
          }
          var ReactSharedInternals = React43.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
          function error(format2) {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format2, args);
            }
          }
          function printWarning(level, format2, args) {
            {
              var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
              var stack = ReactDebugCurrentFrame2.getStackAddendum();
              if (stack !== "") {
                format2 += "%s";
                args = args.concat([stack]);
              }
              var argsWithFormat = args.map(function(item) {
                return "" + item;
              });
              argsWithFormat.unshift("Warning: " + format2);
              Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
          }
          var enableScopeAPI = false;
          function isValidElementType(type2) {
            if (typeof type2 === "string" || typeof type2 === "function") {
              return true;
            }
            if (type2 === exports.Fragment || type2 === REACT_PROFILER_TYPE || type2 === REACT_DEBUG_TRACING_MODE_TYPE || type2 === REACT_STRICT_MODE_TYPE || type2 === REACT_SUSPENSE_TYPE || type2 === REACT_SUSPENSE_LIST_TYPE || type2 === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
              return true;
            }
            if (typeof type2 === "object" && type2 !== null) {
              if (type2.$$typeof === REACT_LAZY_TYPE || type2.$$typeof === REACT_MEMO_TYPE || type2.$$typeof === REACT_PROVIDER_TYPE || type2.$$typeof === REACT_CONTEXT_TYPE || type2.$$typeof === REACT_FORWARD_REF_TYPE || type2.$$typeof === REACT_FUNDAMENTAL_TYPE || type2.$$typeof === REACT_BLOCK_TYPE || type2[0] === REACT_SERVER_BLOCK_TYPE) {
                return true;
              }
            }
            return false;
          }
          function getWrappedName2(outerType, innerType, wrapperName) {
            var functionName = innerType.displayName || innerType.name || "";
            return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
          }
          function getContextName(type2) {
            return type2.displayName || "Context";
          }
          function getComponentName(type2) {
            if (type2 == null) {
              return null;
            }
            {
              if (typeof type2.tag === "number") {
                error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
              }
            }
            if (typeof type2 === "function") {
              return type2.displayName || type2.name || null;
            }
            if (typeof type2 === "string") {
              return type2;
            }
            switch (type2) {
              case exports.Fragment:
                return "Fragment";
              case REACT_PORTAL_TYPE:
                return "Portal";
              case REACT_PROFILER_TYPE:
                return "Profiler";
              case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
              case REACT_SUSPENSE_TYPE:
                return "Suspense";
              case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            }
            if (typeof type2 === "object") {
              switch (type2.$$typeof) {
                case REACT_CONTEXT_TYPE:
                  var context = type2;
                  return getContextName(context) + ".Consumer";
                case REACT_PROVIDER_TYPE:
                  var provider = type2;
                  return getContextName(provider._context) + ".Provider";
                case REACT_FORWARD_REF_TYPE:
                  return getWrappedName2(type2, type2.render, "ForwardRef");
                case REACT_MEMO_TYPE:
                  return getComponentName(type2.type);
                case REACT_BLOCK_TYPE:
                  return getComponentName(type2._render);
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type2;
                  var payload = lazyComponent._payload;
                  var init2 = lazyComponent._init;
                  try {
                    return getComponentName(init2(payload));
                  } catch (x3) {
                    return null;
                  }
                }
              }
            }
            return null;
          }
          var disabledDepth = 0;
          var prevLog;
          var prevInfo;
          var prevWarn;
          var prevError;
          var prevGroup;
          var prevGroupCollapsed;
          var prevGroupEnd;
          function disabledLog() {
          }
          disabledLog.__reactDisabledLog = true;
          function disableLogs() {
            {
              if (disabledDepth === 0) {
                prevLog = console.log;
                prevInfo = console.info;
                prevWarn = console.warn;
                prevError = console.error;
                prevGroup = console.group;
                prevGroupCollapsed = console.groupCollapsed;
                prevGroupEnd = console.groupEnd;
                var props = {
                  configurable: true,
                  enumerable: true,
                  value: disabledLog,
                  writable: true
                };
                Object.defineProperties(console, {
                  info: props,
                  log: props,
                  warn: props,
                  error: props,
                  group: props,
                  groupCollapsed: props,
                  groupEnd: props
                });
              }
              disabledDepth++;
            }
          }
          function reenableLogs() {
            {
              disabledDepth--;
              if (disabledDepth === 0) {
                var props = {
                  configurable: true,
                  enumerable: true,
                  writable: true
                };
                Object.defineProperties(console, {
                  log: _assign({}, props, {
                    value: prevLog
                  }),
                  info: _assign({}, props, {
                    value: prevInfo
                  }),
                  warn: _assign({}, props, {
                    value: prevWarn
                  }),
                  error: _assign({}, props, {
                    value: prevError
                  }),
                  group: _assign({}, props, {
                    value: prevGroup
                  }),
                  groupCollapsed: _assign({}, props, {
                    value: prevGroupCollapsed
                  }),
                  groupEnd: _assign({}, props, {
                    value: prevGroupEnd
                  })
                });
              }
              if (disabledDepth < 0) {
                error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
              }
            }
          }
          var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
          var prefix2;
          function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
              if (prefix2 === void 0) {
                try {
                  throw Error();
                } catch (x3) {
                  var match2 = x3.stack.trim().match(/\n( *(at )?)/);
                  prefix2 = match2 && match2[1] || "";
                }
              }
              return "\n" + prefix2 + name;
            }
          }
          var reentry = false;
          var componentFrameCache;
          {
            var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
          }
          function describeNativeComponentFrame(fn, construct) {
            if (!fn || reentry) {
              return "";
            }
            {
              var frame2 = componentFrameCache.get(fn);
              if (frame2 !== void 0) {
                return frame2;
              }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var previousDispatcher;
            {
              previousDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current = null;
              disableLogs();
            }
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x3) {
                    control = x3;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x3) {
                    control = x3;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x3) {
                  control = x3;
                }
                fn();
              }
            } catch (sample) {
              if (sample && control && typeof sample.stack === "string") {
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                  c--;
                }
                for (; s >= 1 && c >= 0; s--, c--) {
                  if (sampleLines[s] !== controlLines[c]) {
                    if (s !== 1 || c !== 1) {
                      do {
                        s--;
                        c--;
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                          var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                          {
                            if (typeof fn === "function") {
                              componentFrameCache.set(fn, _frame);
                            }
                          }
                          return _frame;
                        }
                      } while (s >= 1 && c >= 0);
                    }
                    break;
                  }
                }
              }
            } finally {
              reentry = false;
              {
                ReactCurrentDispatcher.current = previousDispatcher;
                reenableLogs();
              }
              Error.prepareStackTrace = previousPrepareStackTrace;
            }
            var name = fn ? fn.displayName || fn.name : "";
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
            {
              if (typeof fn === "function") {
                componentFrameCache.set(fn, syntheticFrame);
              }
            }
            return syntheticFrame;
          }
          function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
              return describeNativeComponentFrame(fn, false);
            }
          }
          function shouldConstruct(Component) {
            var prototype = Component.prototype;
            return !!(prototype && prototype.isReactComponent);
          }
          function describeUnknownElementTypeFrameInDEV(type2, source, ownerFn) {
            if (type2 == null) {
              return "";
            }
            if (typeof type2 === "function") {
              {
                return describeNativeComponentFrame(type2, shouldConstruct(type2));
              }
            }
            if (typeof type2 === "string") {
              return describeBuiltInComponentFrame(type2);
            }
            switch (type2) {
              case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
              case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
            }
            if (typeof type2 === "object") {
              switch (type2.$$typeof) {
                case REACT_FORWARD_REF_TYPE:
                  return describeFunctionComponentFrame(type2.render);
                case REACT_MEMO_TYPE:
                  return describeUnknownElementTypeFrameInDEV(type2.type, source, ownerFn);
                case REACT_BLOCK_TYPE:
                  return describeFunctionComponentFrame(type2._render);
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type2;
                  var payload = lazyComponent._payload;
                  var init2 = lazyComponent._init;
                  try {
                    return describeUnknownElementTypeFrameInDEV(init2(payload), source, ownerFn);
                  } catch (x3) {
                  }
                }
              }
            }
            return "";
          }
          var loggedTypeFailures = {};
          var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
          function setCurrentlyValidatingElement(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame.setExtraStackFrame(null);
              }
            }
          }
          function checkPropTypes(typeSpecs, values3, location, componentName, element) {
            {
              var has = Function.call.bind(Object.prototype.hasOwnProperty);
              for (var typeSpecName in typeSpecs) {
                if (has(typeSpecs, typeSpecName)) {
                  var error$1 = void 0;
                  try {
                    if (typeof typeSpecs[typeSpecName] !== "function") {
                      var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                      err.name = "Invariant Violation";
                      throw err;
                    }
                    error$1 = typeSpecs[typeSpecName](values3, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                  } catch (ex) {
                    error$1 = ex;
                  }
                  if (error$1 && !(error$1 instanceof Error)) {
                    setCurrentlyValidatingElement(element);
                    error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                    setCurrentlyValidatingElement(null);
                  }
                  if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                    loggedTypeFailures[error$1.message] = true;
                    setCurrentlyValidatingElement(element);
                    error("Failed %s type: %s", location, error$1.message);
                    setCurrentlyValidatingElement(null);
                  }
                }
              }
            }
          }
          var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
          var hasOwnProperty2 = Object.prototype.hasOwnProperty;
          var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
          };
          var specialPropKeyWarningShown;
          var specialPropRefWarningShown;
          var didWarnAboutStringRefs;
          {
            didWarnAboutStringRefs = {};
          }
          function hasValidRef(config2) {
            {
              if (hasOwnProperty2.call(config2, "ref")) {
                var getter = Object.getOwnPropertyDescriptor(config2, "ref").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config2.ref !== void 0;
          }
          function hasValidKey(config2) {
            {
              if (hasOwnProperty2.call(config2, "key")) {
                var getter = Object.getOwnPropertyDescriptor(config2, "key").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config2.key !== void 0;
          }
          function warnIfStringRefCannotBeAutoConverted(config2, self) {
            {
              if (typeof config2.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
                var componentName = getComponentName(ReactCurrentOwner.current.type);
                if (!didWarnAboutStringRefs[componentName]) {
                  error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config2.ref);
                  didWarnAboutStringRefs[componentName] = true;
                }
              }
            }
          }
          function defineKeyPropWarningGetter(props, displayName) {
            {
              var warnAboutAccessingKey = function() {
                if (!specialPropKeyWarningShown) {
                  specialPropKeyWarningShown = true;
                  error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              };
              warnAboutAccessingKey.isReactWarning = true;
              Object.defineProperty(props, "key", {
                get: warnAboutAccessingKey,
                configurable: true
              });
            }
          }
          function defineRefPropWarningGetter(props, displayName) {
            {
              var warnAboutAccessingRef = function() {
                if (!specialPropRefWarningShown) {
                  specialPropRefWarningShown = true;
                  error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              };
              warnAboutAccessingRef.isReactWarning = true;
              Object.defineProperty(props, "ref", {
                get: warnAboutAccessingRef,
                configurable: true
              });
            }
          }
          var ReactElement = function(type2, key, ref, self, source, owner, props) {
            var element = {
              $$typeof: REACT_ELEMENT_TYPE,
              type: type2,
              key,
              ref,
              props,
              _owner: owner
            };
            {
              element._store = {};
              Object.defineProperty(element._store, "validated", {
                configurable: false,
                enumerable: false,
                writable: true,
                value: false
              });
              Object.defineProperty(element, "_self", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: self
              });
              Object.defineProperty(element, "_source", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: source
              });
              if (Object.freeze) {
                Object.freeze(element.props);
                Object.freeze(element);
              }
            }
            return element;
          };
          function jsxDEV(type2, config2, maybeKey, source, self) {
            {
              var propName;
              var props = {};
              var key = null;
              var ref = null;
              if (maybeKey !== void 0) {
                key = "" + maybeKey;
              }
              if (hasValidKey(config2)) {
                key = "" + config2.key;
              }
              if (hasValidRef(config2)) {
                ref = config2.ref;
                warnIfStringRefCannotBeAutoConverted(config2, self);
              }
              for (propName in config2) {
                if (hasOwnProperty2.call(config2, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  props[propName] = config2[propName];
                }
              }
              if (type2 && type2.defaultProps) {
                var defaultProps2 = type2.defaultProps;
                for (propName in defaultProps2) {
                  if (props[propName] === void 0) {
                    props[propName] = defaultProps2[propName];
                  }
                }
              }
              if (key || ref) {
                var displayName = typeof type2 === "function" ? type2.displayName || type2.name || "Unknown" : type2;
                if (key) {
                  defineKeyPropWarningGetter(props, displayName);
                }
                if (ref) {
                  defineRefPropWarningGetter(props, displayName);
                }
              }
              return ReactElement(type2, key, ref, self, source, ReactCurrentOwner.current, props);
            }
          }
          var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
          var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
          function setCurrentlyValidatingElement$1(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame$1.setExtraStackFrame(null);
              }
            }
          }
          var propTypesMisspellWarningShown;
          {
            propTypesMisspellWarningShown = false;
          }
          function isValidElement3(object) {
            {
              return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
            }
          }
          function getDeclarationErrorAddendum() {
            {
              if (ReactCurrentOwner$1.current) {
                var name = getComponentName(ReactCurrentOwner$1.current.type);
                if (name) {
                  return "\n\nCheck the render method of `" + name + "`.";
                }
              }
              return "";
            }
          }
          function getSourceInfoErrorAddendum(source) {
            {
              if (source !== void 0) {
                var fileName = source.fileName.replace(/^.*[\\\/]/, "");
                var lineNumber = source.lineNumber;
                return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
              }
              return "";
            }
          }
          var ownerHasKeyUseWarning = {};
          function getCurrentComponentErrorInfo(parentType) {
            {
              var info = getDeclarationErrorAddendum();
              if (!info) {
                var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
                if (parentName) {
                  info = "\n\nCheck the top-level render call using <" + parentName + ">.";
                }
              }
              return info;
            }
          }
          function validateExplicitKey(element, parentType) {
            {
              if (!element._store || element._store.validated || element.key != null) {
                return;
              }
              element._store.validated = true;
              var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
              if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                return;
              }
              ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
              var childOwner = "";
              if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
                childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
              }
              setCurrentlyValidatingElement$1(element);
              error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
              setCurrentlyValidatingElement$1(null);
            }
          }
          function validateChildKeys(node2, parentType) {
            {
              if (typeof node2 !== "object") {
                return;
              }
              if (Array.isArray(node2)) {
                for (var i = 0; i < node2.length; i++) {
                  var child = node2[i];
                  if (isValidElement3(child)) {
                    validateExplicitKey(child, parentType);
                  }
                }
              } else if (isValidElement3(node2)) {
                if (node2._store) {
                  node2._store.validated = true;
                }
              } else if (node2) {
                var iteratorFn = getIteratorFn(node2);
                if (typeof iteratorFn === "function") {
                  if (iteratorFn !== node2.entries) {
                    var iterator = iteratorFn.call(node2);
                    var step;
                    while (!(step = iterator.next()).done) {
                      if (isValidElement3(step.value)) {
                        validateExplicitKey(step.value, parentType);
                      }
                    }
                  }
                }
              }
            }
          }
          function validatePropTypes(element) {
            {
              var type2 = element.type;
              if (type2 === null || type2 === void 0 || typeof type2 === "string") {
                return;
              }
              var propTypes;
              if (typeof type2 === "function") {
                propTypes = type2.propTypes;
              } else if (typeof type2 === "object" && (type2.$$typeof === REACT_FORWARD_REF_TYPE || type2.$$typeof === REACT_MEMO_TYPE)) {
                propTypes = type2.propTypes;
              } else {
                return;
              }
              if (propTypes) {
                var name = getComponentName(type2);
                checkPropTypes(propTypes, element.props, "prop", name, element);
              } else if (type2.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                propTypesMisspellWarningShown = true;
                var _name = getComponentName(type2);
                error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
              }
              if (typeof type2.getDefaultProps === "function" && !type2.getDefaultProps.isReactClassApproved) {
                error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
              }
            }
          }
          function validateFragmentProps(fragment) {
            {
              var keys = Object.keys(fragment.props);
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (key !== "children" && key !== "key") {
                  setCurrentlyValidatingElement$1(fragment);
                  error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                  setCurrentlyValidatingElement$1(null);
                  break;
                }
              }
              if (fragment.ref !== null) {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid attribute `ref` supplied to `React.Fragment`.");
                setCurrentlyValidatingElement$1(null);
              }
            }
          }
          function jsxWithValidation(type2, props, key, isStaticChildren, source, self) {
            {
              var validType = isValidElementType(type2);
              if (!validType) {
                var info = "";
                if (type2 === void 0 || typeof type2 === "object" && type2 !== null && Object.keys(type2).length === 0) {
                  info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
                }
                var sourceInfo = getSourceInfoErrorAddendum(source);
                if (sourceInfo) {
                  info += sourceInfo;
                } else {
                  info += getDeclarationErrorAddendum();
                }
                var typeString;
                if (type2 === null) {
                  typeString = "null";
                } else if (Array.isArray(type2)) {
                  typeString = "array";
                } else if (type2 !== void 0 && type2.$$typeof === REACT_ELEMENT_TYPE) {
                  typeString = "<" + (getComponentName(type2.type) || "Unknown") + " />";
                  info = " Did you accidentally export a JSX literal instead of a component?";
                } else {
                  typeString = typeof type2;
                }
                error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
              }
              var element = jsxDEV(type2, props, key, source, self);
              if (element == null) {
                return element;
              }
              if (validType) {
                var children2 = props.children;
                if (children2 !== void 0) {
                  if (isStaticChildren) {
                    if (Array.isArray(children2)) {
                      for (var i = 0; i < children2.length; i++) {
                        validateChildKeys(children2[i], type2);
                      }
                      if (Object.freeze) {
                        Object.freeze(children2);
                      }
                    } else {
                      error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                    }
                  } else {
                    validateChildKeys(children2, type2);
                  }
                }
              }
              if (type2 === exports.Fragment) {
                validateFragmentProps(element);
              } else {
                validatePropTypes(element);
              }
              return element;
            }
          }
          function jsxWithValidationStatic(type2, props, key) {
            {
              return jsxWithValidation(type2, props, key, true);
            }
          }
          function jsxWithValidationDynamic(type2, props, key) {
            {
              return jsxWithValidation(type2, props, key, false);
            }
          }
          var jsx = jsxWithValidationDynamic;
          var jsxs = jsxWithValidationStatic;
          exports.jsx = jsx;
          exports.jsxs = jsxs;
        })();
      }
    }
  });

  // node_modules/react/jsx-runtime.js
  var require_jsx_runtime = __commonJS({
    "node_modules/react/jsx-runtime.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_jsx_runtime_development();
      }
    }
  });

  // node_modules/react-is/cjs/react-is.development.js
  var require_react_is_development3 = __commonJS({
    "node_modules/react-is/cjs/react-is.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var REACT_ELEMENT_TYPE = 60103;
          var REACT_PORTAL_TYPE = 60106;
          var REACT_FRAGMENT_TYPE = 60107;
          var REACT_STRICT_MODE_TYPE = 60108;
          var REACT_PROFILER_TYPE = 60114;
          var REACT_PROVIDER_TYPE = 60109;
          var REACT_CONTEXT_TYPE = 60110;
          var REACT_FORWARD_REF_TYPE = 60112;
          var REACT_SUSPENSE_TYPE = 60113;
          var REACT_SUSPENSE_LIST_TYPE = 60120;
          var REACT_MEMO_TYPE = 60115;
          var REACT_LAZY_TYPE = 60116;
          var REACT_BLOCK_TYPE = 60121;
          var REACT_SERVER_BLOCK_TYPE = 60122;
          var REACT_FUNDAMENTAL_TYPE = 60117;
          var REACT_SCOPE_TYPE = 60119;
          var REACT_OPAQUE_ID_TYPE = 60128;
          var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
          var REACT_OFFSCREEN_TYPE = 60130;
          var REACT_LEGACY_HIDDEN_TYPE = 60131;
          if (typeof Symbol === "function" && Symbol.for) {
            var symbolFor = Symbol.for;
            REACT_ELEMENT_TYPE = symbolFor("react.element");
            REACT_PORTAL_TYPE = symbolFor("react.portal");
            REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
            REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
            REACT_PROFILER_TYPE = symbolFor("react.profiler");
            REACT_PROVIDER_TYPE = symbolFor("react.provider");
            REACT_CONTEXT_TYPE = symbolFor("react.context");
            REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
            REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
            REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
            REACT_MEMO_TYPE = symbolFor("react.memo");
            REACT_LAZY_TYPE = symbolFor("react.lazy");
            REACT_BLOCK_TYPE = symbolFor("react.block");
            REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
            REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
            REACT_SCOPE_TYPE = symbolFor("react.scope");
            REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
            REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
            REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
            REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
          }
          var enableScopeAPI = false;
          function isValidElementType(type2) {
            if (typeof type2 === "string" || typeof type2 === "function") {
              return true;
            }
            if (type2 === REACT_FRAGMENT_TYPE || type2 === REACT_PROFILER_TYPE || type2 === REACT_DEBUG_TRACING_MODE_TYPE || type2 === REACT_STRICT_MODE_TYPE || type2 === REACT_SUSPENSE_TYPE || type2 === REACT_SUSPENSE_LIST_TYPE || type2 === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
              return true;
            }
            if (typeof type2 === "object" && type2 !== null) {
              if (type2.$$typeof === REACT_LAZY_TYPE || type2.$$typeof === REACT_MEMO_TYPE || type2.$$typeof === REACT_PROVIDER_TYPE || type2.$$typeof === REACT_CONTEXT_TYPE || type2.$$typeof === REACT_FORWARD_REF_TYPE || type2.$$typeof === REACT_FUNDAMENTAL_TYPE || type2.$$typeof === REACT_BLOCK_TYPE || type2[0] === REACT_SERVER_BLOCK_TYPE) {
                return true;
              }
            }
            return false;
          }
          function typeOf(object) {
            if (typeof object === "object" && object !== null) {
              var $$typeof = object.$$typeof;
              switch ($$typeof) {
                case REACT_ELEMENT_TYPE:
                  var type2 = object.type;
                  switch (type2) {
                    case REACT_FRAGMENT_TYPE:
                    case REACT_PROFILER_TYPE:
                    case REACT_STRICT_MODE_TYPE:
                    case REACT_SUSPENSE_TYPE:
                    case REACT_SUSPENSE_LIST_TYPE:
                      return type2;
                    default:
                      var $$typeofType = type2 && type2.$$typeof;
                      switch ($$typeofType) {
                        case REACT_CONTEXT_TYPE:
                        case REACT_FORWARD_REF_TYPE:
                        case REACT_LAZY_TYPE:
                        case REACT_MEMO_TYPE:
                        case REACT_PROVIDER_TYPE:
                          return $$typeofType;
                        default:
                          return $$typeof;
                      }
                  }
                case REACT_PORTAL_TYPE:
                  return $$typeof;
              }
            }
            return void 0;
          }
          var ContextConsumer = REACT_CONTEXT_TYPE;
          var ContextProvider = REACT_PROVIDER_TYPE;
          var Element = REACT_ELEMENT_TYPE;
          var ForwardRef2 = REACT_FORWARD_REF_TYPE;
          var Fragment4 = REACT_FRAGMENT_TYPE;
          var Lazy = REACT_LAZY_TYPE;
          var Memo2 = REACT_MEMO_TYPE;
          var Portal = REACT_PORTAL_TYPE;
          var Profiler = REACT_PROFILER_TYPE;
          var StrictMode = REACT_STRICT_MODE_TYPE;
          var Suspense = REACT_SUSPENSE_TYPE;
          var hasWarnedAboutDeprecatedIsAsyncMode = false;
          var hasWarnedAboutDeprecatedIsConcurrentMode = false;
          function isAsyncMode(object) {
            {
              if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                hasWarnedAboutDeprecatedIsAsyncMode = true;
                console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
              }
            }
            return false;
          }
          function isConcurrentMode(object) {
            {
              if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
                hasWarnedAboutDeprecatedIsConcurrentMode = true;
                console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
              }
            }
            return false;
          }
          function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
          }
          function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
          }
          function isElement(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
          }
          function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
          }
          function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
          }
          function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
          }
          function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
          }
          function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
          }
          function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
          }
          function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
          }
          exports.ContextConsumer = ContextConsumer;
          exports.ContextProvider = ContextProvider;
          exports.Element = Element;
          exports.ForwardRef = ForwardRef2;
          exports.Fragment = Fragment4;
          exports.Lazy = Lazy;
          exports.Memo = Memo2;
          exports.Portal = Portal;
          exports.Profiler = Profiler;
          exports.StrictMode = StrictMode;
          exports.Suspense = Suspense;
          exports.isAsyncMode = isAsyncMode;
          exports.isConcurrentMode = isConcurrentMode;
          exports.isContextConsumer = isContextConsumer;
          exports.isContextProvider = isContextProvider;
          exports.isElement = isElement;
          exports.isForwardRef = isForwardRef;
          exports.isFragment = isFragment;
          exports.isLazy = isLazy;
          exports.isMemo = isMemo;
          exports.isPortal = isPortal;
          exports.isProfiler = isProfiler;
          exports.isStrictMode = isStrictMode;
          exports.isSuspense = isSuspense;
          exports.isValidElementType = isValidElementType;
          exports.typeOf = typeOf;
        })();
      }
    }
  });

  // node_modules/react-is/index.js
  var require_react_is3 = __commonJS({
    "node_modules/react-is/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_is_development3();
      }
    }
  });

  // node_modules/d3-array/src/ascending.js
  function ascending(a, b) {
    return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }

  // node_modules/d3-array/src/bisector.js
  function bisector(f) {
    let delta = f;
    let compare1 = f;
    let compare2 = f;
    if (f.length !== 2) {
      delta = (d, x3) => f(d) - x3;
      compare1 = ascending;
      compare2 = (d, x3) => ascending(f(d), x3);
    }
    function left3(a, x3, lo = 0, hi = a.length) {
      if (lo < hi) {
        if (compare1(x3, x3) !== 0)
          return hi;
        do {
          const mid = lo + hi >>> 1;
          if (compare2(a[mid], x3) < 0)
            lo = mid + 1;
          else
            hi = mid;
        } while (lo < hi);
      }
      return lo;
    }
    function right3(a, x3, lo = 0, hi = a.length) {
      if (lo < hi) {
        if (compare1(x3, x3) !== 0)
          return hi;
        do {
          const mid = lo + hi >>> 1;
          if (compare2(a[mid], x3) <= 0)
            lo = mid + 1;
          else
            hi = mid;
        } while (lo < hi);
      }
      return lo;
    }
    function center2(a, x3, lo = 0, hi = a.length) {
      const i = left3(a, x3, lo, hi - 1);
      return i > lo && delta(a[i - 1], x3) > -delta(a[i], x3) ? i - 1 : i;
    }
    return { left: left3, center: center2, right: right3 };
  }

  // node_modules/d3-array/src/number.js
  function number(x3) {
    return x3 === null ? NaN : +x3;
  }

  // node_modules/d3-array/src/bisect.js
  var ascendingBisect = bisector(ascending);
  var bisectRight = ascendingBisect.right;
  var bisectLeft = ascendingBisect.left;
  var bisectCenter = bisector(number).center;
  var bisect_default = bisectRight;

  // node_modules/d3-array/src/extent.js
  function extent(values3, valueof) {
    let min2;
    let max3;
    if (valueof === void 0) {
      for (const value of values3) {
        if (value != null) {
          if (min2 === void 0) {
            if (value >= value)
              min2 = max3 = value;
          } else {
            if (min2 > value)
              min2 = value;
            if (max3 < value)
              max3 = value;
          }
        }
      }
    } else {
      let index = -1;
      for (let value of values3) {
        if ((value = valueof(value, ++index, values3)) != null) {
          if (min2 === void 0) {
            if (value >= value)
              min2 = max3 = value;
          } else {
            if (min2 > value)
              min2 = value;
            if (max3 < value)
              max3 = value;
          }
        }
      }
    }
    return [min2, max3];
  }

  // node_modules/internmap/src/index.js
  var InternMap = class extends Map {
    constructor(entries, key = keyof) {
      super();
      Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: key } });
      if (entries != null)
        for (const [key2, value] of entries)
          this.set(key2, value);
    }
    get(key) {
      return super.get(intern_get(this, key));
    }
    has(key) {
      return super.has(intern_get(this, key));
    }
    set(key, value) {
      return super.set(intern_set(this, key), value);
    }
    delete(key) {
      return super.delete(intern_delete(this, key));
    }
  };
  function intern_get({ _intern, _key }, value) {
    const key = _key(value);
    return _intern.has(key) ? _intern.get(key) : value;
  }
  function intern_set({ _intern, _key }, value) {
    const key = _key(value);
    if (_intern.has(key))
      return _intern.get(key);
    _intern.set(key, value);
    return value;
  }
  function intern_delete({ _intern, _key }, value) {
    const key = _key(value);
    if (_intern.has(key)) {
      value = _intern.get(key);
      _intern.delete(key);
    }
    return value;
  }
  function keyof(value) {
    return value !== null && typeof value === "object" ? value.valueOf() : value;
  }

  // node_modules/d3-array/src/permute.js
  function permute(source, keys) {
    return Array.from(keys, (key) => source[key]);
  }

  // node_modules/d3-array/src/sort.js
  function sort(values3, ...F) {
    if (typeof values3[Symbol.iterator] !== "function")
      throw new TypeError("values is not iterable");
    values3 = Array.from(values3);
    let [f] = F;
    if (f && f.length !== 2 || F.length > 1) {
      const index = Uint32Array.from(values3, (d, i) => i);
      if (F.length > 1) {
        F = F.map((f2) => values3.map(f2));
        index.sort((i, j) => {
          for (const f2 of F) {
            const c = ascendingDefined(f2[i], f2[j]);
            if (c)
              return c;
          }
        });
      } else {
        f = values3.map(f);
        index.sort((i, j) => ascendingDefined(f[i], f[j]));
      }
      return permute(values3, index);
    }
    return values3.sort(compareDefined(f));
  }
  function compareDefined(compare = ascending) {
    if (compare === ascending)
      return ascendingDefined;
    if (typeof compare !== "function")
      throw new TypeError("compare is not a function");
    return (a, b) => {
      const x3 = compare(a, b);
      if (x3 || x3 === 0)
        return x3;
      return (compare(b, b) === 0) - (compare(a, a) === 0);
    };
  }
  function ascendingDefined(a, b) {
    return (a == null || !(a >= a)) - (b == null || !(b >= b)) || (a < b ? -1 : a > b ? 1 : 0);
  }

  // node_modules/d3-array/src/ticks.js
  var e10 = Math.sqrt(50);
  var e5 = Math.sqrt(10);
  var e2 = Math.sqrt(2);
  function ticks(start2, stop, count) {
    var reverse, i = -1, n, ticks2, step;
    stop = +stop, start2 = +start2, count = +count;
    if (start2 === stop && count > 0)
      return [start2];
    if (reverse = stop < start2)
      n = start2, start2 = stop, stop = n;
    if ((step = tickIncrement(start2, stop, count)) === 0 || !isFinite(step))
      return [];
    if (step > 0) {
      let r0 = Math.round(start2 / step), r1 = Math.round(stop / step);
      if (r0 * step < start2)
        ++r0;
      if (r1 * step > stop)
        --r1;
      ticks2 = new Array(n = r1 - r0 + 1);
      while (++i < n)
        ticks2[i] = (r0 + i) * step;
    } else {
      step = -step;
      let r0 = Math.round(start2 * step), r1 = Math.round(stop * step);
      if (r0 / step < start2)
        ++r0;
      if (r1 / step > stop)
        --r1;
      ticks2 = new Array(n = r1 - r0 + 1);
      while (++i < n)
        ticks2[i] = (r0 + i) / step;
    }
    if (reverse)
      ticks2.reverse();
    return ticks2;
  }
  function tickIncrement(start2, stop, count) {
    var step = (stop - start2) / Math.max(0, count), power = Math.floor(Math.log(step) / Math.LN10), error = step / Math.pow(10, power);
    return power >= 0 ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power) : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
  }
  function tickStep(start2, stop, count) {
    var step0 = Math.abs(stop - start2) / Math.max(0, count), step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)), error = step0 / step1;
    if (error >= e10)
      step1 *= 10;
    else if (error >= e5)
      step1 *= 5;
    else if (error >= e2)
      step1 *= 2;
    return stop < start2 ? -step1 : step1;
  }

  // node_modules/d3-array/src/max.js
  function max(values3, valueof) {
    let max3;
    if (valueof === void 0) {
      for (const value of values3) {
        if (value != null && (max3 < value || max3 === void 0 && value >= value)) {
          max3 = value;
        }
      }
    } else {
      let index = -1;
      for (let value of values3) {
        if ((value = valueof(value, ++index, values3)) != null && (max3 < value || max3 === void 0 && value >= value)) {
          max3 = value;
        }
      }
    }
    return max3;
  }

  // node_modules/d3-array/src/range.js
  function range(start2, stop, step) {
    start2 = +start2, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start2, start2 = 0, 1) : n < 3 ? 1 : +step;
    var i = -1, n = Math.max(0, Math.ceil((stop - start2) / step)) | 0, range2 = new Array(n);
    while (++i < n) {
      range2[i] = start2 + i * step;
    }
    return range2;
  }

  // node_modules/d3-axis/src/identity.js
  function identity_default(x3) {
    return x3;
  }

  // node_modules/d3-axis/src/axis.js
  var top = 1;
  var right = 2;
  var bottom = 3;
  var left = 4;
  var epsilon = 1e-6;
  function translateX(x3) {
    return "translate(" + x3 + ",0)";
  }
  function translateY(y3) {
    return "translate(0," + y3 + ")";
  }
  function number2(scale) {
    return (d) => +scale(d);
  }
  function center(scale, offset) {
    offset = Math.max(0, scale.bandwidth() - offset * 2) / 2;
    if (scale.round())
      offset = Math.round(offset);
    return (d) => +scale(d) + offset;
  }
  function entering() {
    return !this.__axis;
  }
  function axis(orient, scale) {
    var tickArguments = [], tickValues = null, tickFormat2 = null, tickSizeInner = 6, tickSizeOuter = 6, tickPadding = 3, offset = typeof window !== "undefined" && window.devicePixelRatio > 1 ? 0 : 0.5, k = orient === top || orient === left ? -1 : 1, x3 = orient === left || orient === right ? "x" : "y", transform3 = orient === top || orient === bottom ? translateX : translateY;
    function axis2(context) {
      var values3 = tickValues == null ? scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain() : tickValues, format2 = tickFormat2 == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity_default : tickFormat2, spacing2 = Math.max(tickSizeInner, 0) + tickPadding, range2 = scale.range(), range0 = +range2[0] + offset, range1 = +range2[range2.length - 1] + offset, position3 = (scale.bandwidth ? center : number2)(scale.copy(), offset), selection2 = context.selection ? context.selection() : context, path2 = selection2.selectAll(".domain").data([null]), tick = selection2.selectAll(".tick").data(values3, scale).order(), tickExit = tick.exit(), tickEnter = tick.enter().append("g").attr("class", "tick"), line2 = tick.select("line"), text = tick.select("text");
      path2 = path2.merge(path2.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor"));
      tick = tick.merge(tickEnter);
      line2 = line2.merge(tickEnter.append("line").attr("stroke", "currentColor").attr(x3 + "2", k * tickSizeInner));
      text = text.merge(tickEnter.append("text").attr("fill", "currentColor").attr(x3, k * spacing2).attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));
      if (context !== selection2) {
        path2 = path2.transition(context);
        tick = tick.transition(context);
        line2 = line2.transition(context);
        text = text.transition(context);
        tickExit = tickExit.transition(context).attr("opacity", epsilon).attr("transform", function(d) {
          return isFinite(d = position3(d)) ? transform3(d + offset) : this.getAttribute("transform");
        });
        tickEnter.attr("opacity", epsilon).attr("transform", function(d) {
          var p = this.parentNode.__axis;
          return transform3((p && isFinite(p = p(d)) ? p : position3(d)) + offset);
        });
      }
      tickExit.remove();
      path2.attr("d", orient === left || orient === right ? tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H" + offset + "V" + range1 + "H" + k * tickSizeOuter : "M" + offset + "," + range0 + "V" + range1 : tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V" + offset + "H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + "," + offset + "H" + range1);
      tick.attr("opacity", 1).attr("transform", function(d) {
        return transform3(position3(d) + offset);
      });
      line2.attr(x3 + "2", k * tickSizeInner);
      text.attr(x3, k * spacing2).text(format2);
      selection2.filter(entering).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");
      selection2.each(function() {
        this.__axis = position3;
      });
    }
    axis2.scale = function(_2) {
      return arguments.length ? (scale = _2, axis2) : scale;
    };
    axis2.ticks = function() {
      return tickArguments = Array.from(arguments), axis2;
    };
    axis2.tickArguments = function(_2) {
      return arguments.length ? (tickArguments = _2 == null ? [] : Array.from(_2), axis2) : tickArguments.slice();
    };
    axis2.tickValues = function(_2) {
      return arguments.length ? (tickValues = _2 == null ? null : Array.from(_2), axis2) : tickValues && tickValues.slice();
    };
    axis2.tickFormat = function(_2) {
      return arguments.length ? (tickFormat2 = _2, axis2) : tickFormat2;
    };
    axis2.tickSize = function(_2) {
      return arguments.length ? (tickSizeInner = tickSizeOuter = +_2, axis2) : tickSizeInner;
    };
    axis2.tickSizeInner = function(_2) {
      return arguments.length ? (tickSizeInner = +_2, axis2) : tickSizeInner;
    };
    axis2.tickSizeOuter = function(_2) {
      return arguments.length ? (tickSizeOuter = +_2, axis2) : tickSizeOuter;
    };
    axis2.tickPadding = function(_2) {
      return arguments.length ? (tickPadding = +_2, axis2) : tickPadding;
    };
    axis2.offset = function(_2) {
      return arguments.length ? (offset = +_2, axis2) : offset;
    };
    return axis2;
  }
  function axisTop(scale) {
    return axis(top, scale);
  }
  function axisRight(scale) {
    return axis(right, scale);
  }
  function axisBottom(scale) {
    return axis(bottom, scale);
  }
  function axisLeft(scale) {
    return axis(left, scale);
  }

  // node_modules/d3-dispatch/src/dispatch.js
  var noop = { value: () => {
  } };
  function dispatch() {
    for (var i = 0, n = arguments.length, _2 = {}, t; i < n; ++i) {
      if (!(t = arguments[i] + "") || t in _2 || /[\s.]/.test(t))
        throw new Error("illegal type: " + t);
      _2[t] = [];
    }
    return new Dispatch(_2);
  }
  function Dispatch(_2) {
    this._ = _2;
  }
  function parseTypenames(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
      var name = "", i = t.indexOf(".");
      if (i >= 0)
        name = t.slice(i + 1), t = t.slice(0, i);
      if (t && !types.hasOwnProperty(t))
        throw new Error("unknown type: " + t);
      return { type: t, name };
    });
  }
  Dispatch.prototype = dispatch.prototype = {
    constructor: Dispatch,
    on: function(typename, callback) {
      var _2 = this._, T = parseTypenames(typename + "", _2), t, i = -1, n = T.length;
      if (arguments.length < 2) {
        while (++i < n)
          if ((t = (typename = T[i]).type) && (t = get(_2[t], typename.name)))
            return t;
        return;
      }
      if (callback != null && typeof callback !== "function")
        throw new Error("invalid callback: " + callback);
      while (++i < n) {
        if (t = (typename = T[i]).type)
          _2[t] = set(_2[t], typename.name, callback);
        else if (callback == null)
          for (t in _2)
            _2[t] = set(_2[t], typename.name, null);
      }
      return this;
    },
    copy: function() {
      var copy3 = {}, _2 = this._;
      for (var t in _2)
        copy3[t] = _2[t].slice();
      return new Dispatch(copy3);
    },
    call: function(type2, that) {
      if ((n = arguments.length - 2) > 0)
        for (var args = new Array(n), i = 0, n, t; i < n; ++i)
          args[i] = arguments[i + 2];
      if (!this._.hasOwnProperty(type2))
        throw new Error("unknown type: " + type2);
      for (t = this._[type2], i = 0, n = t.length; i < n; ++i)
        t[i].value.apply(that, args);
    },
    apply: function(type2, that, args) {
      if (!this._.hasOwnProperty(type2))
        throw new Error("unknown type: " + type2);
      for (var t = this._[type2], i = 0, n = t.length; i < n; ++i)
        t[i].value.apply(that, args);
    }
  };
  function get(type2, name) {
    for (var i = 0, n = type2.length, c; i < n; ++i) {
      if ((c = type2[i]).name === name) {
        return c.value;
      }
    }
  }
  function set(type2, name, callback) {
    for (var i = 0, n = type2.length; i < n; ++i) {
      if (type2[i].name === name) {
        type2[i] = noop, type2 = type2.slice(0, i).concat(type2.slice(i + 1));
        break;
      }
    }
    if (callback != null)
      type2.push({ name, value: callback });
    return type2;
  }
  var dispatch_default = dispatch;

  // node_modules/d3-selection/src/namespaces.js
  var xhtml = "http://www.w3.org/1999/xhtml";
  var namespaces_default = {
    svg: "http://www.w3.org/2000/svg",
    xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };

  // node_modules/d3-selection/src/namespace.js
  function namespace_default(name) {
    var prefix2 = name += "", i = prefix2.indexOf(":");
    if (i >= 0 && (prefix2 = name.slice(0, i)) !== "xmlns")
      name = name.slice(i + 1);
    return namespaces_default.hasOwnProperty(prefix2) ? { space: namespaces_default[prefix2], local: name } : name;
  }

  // node_modules/d3-selection/src/creator.js
  function creatorInherit(name) {
    return function() {
      var document2 = this.ownerDocument, uri = this.namespaceURI;
      return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
    };
  }
  function creatorFixed(fullname) {
    return function() {
      return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
  }
  function creator_default(name) {
    var fullname = namespace_default(name);
    return (fullname.local ? creatorFixed : creatorInherit)(fullname);
  }

  // node_modules/d3-selection/src/selector.js
  function none() {
  }
  function selector_default(selector) {
    return selector == null ? none : function() {
      return this.querySelector(selector);
    };
  }

  // node_modules/d3-selection/src/selection/select.js
  function select_default(select) {
    if (typeof select !== "function")
      select = selector_default(select);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node2, subnode, i = 0; i < n; ++i) {
        if ((node2 = group[i]) && (subnode = select.call(node2, node2.__data__, i, group))) {
          if ("__data__" in node2)
            subnode.__data__ = node2.__data__;
          subgroup[i] = subnode;
        }
      }
    }
    return new Selection(subgroups, this._parents);
  }

  // node_modules/d3-selection/src/array.js
  function array(x3) {
    return x3 == null ? [] : Array.isArray(x3) ? x3 : Array.from(x3);
  }

  // node_modules/d3-selection/src/selectorAll.js
  function empty() {
    return [];
  }
  function selectorAll_default(selector) {
    return selector == null ? empty : function() {
      return this.querySelectorAll(selector);
    };
  }

  // node_modules/d3-selection/src/selection/selectAll.js
  function arrayAll(select) {
    return function() {
      return array(select.apply(this, arguments));
    };
  }
  function selectAll_default(select) {
    if (typeof select === "function")
      select = arrayAll(select);
    else
      select = selectorAll_default(select);
    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node2, i = 0; i < n; ++i) {
        if (node2 = group[i]) {
          subgroups.push(select.call(node2, node2.__data__, i, group));
          parents.push(node2);
        }
      }
    }
    return new Selection(subgroups, parents);
  }

  // node_modules/d3-selection/src/matcher.js
  function matcher_default(selector) {
    return function() {
      return this.matches(selector);
    };
  }
  function childMatcher(selector) {
    return function(node2) {
      return node2.matches(selector);
    };
  }

  // node_modules/d3-selection/src/selection/selectChild.js
  var find = Array.prototype.find;
  function childFind(match2) {
    return function() {
      return find.call(this.children, match2);
    };
  }
  function childFirst() {
    return this.firstElementChild;
  }
  function selectChild_default(match2) {
    return this.select(match2 == null ? childFirst : childFind(typeof match2 === "function" ? match2 : childMatcher(match2)));
  }

  // node_modules/d3-selection/src/selection/selectChildren.js
  var filter = Array.prototype.filter;
  function children() {
    return Array.from(this.children);
  }
  function childrenFilter(match2) {
    return function() {
      return filter.call(this.children, match2);
    };
  }
  function selectChildren_default(match2) {
    return this.selectAll(match2 == null ? children : childrenFilter(typeof match2 === "function" ? match2 : childMatcher(match2)));
  }

  // node_modules/d3-selection/src/selection/filter.js
  function filter_default(match2) {
    if (typeof match2 !== "function")
      match2 = matcher_default(match2);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node2, i = 0; i < n; ++i) {
        if ((node2 = group[i]) && match2.call(node2, node2.__data__, i, group)) {
          subgroup.push(node2);
        }
      }
    }
    return new Selection(subgroups, this._parents);
  }

  // node_modules/d3-selection/src/selection/sparse.js
  function sparse_default(update) {
    return new Array(update.length);
  }

  // node_modules/d3-selection/src/selection/enter.js
  function enter_default() {
    return new Selection(this._enter || this._groups.map(sparse_default), this._parents);
  }
  function EnterNode(parent, datum2) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum2;
  }
  EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function(child) {
      return this._parent.insertBefore(child, this._next);
    },
    insertBefore: function(child, next2) {
      return this._parent.insertBefore(child, next2);
    },
    querySelector: function(selector) {
      return this._parent.querySelector(selector);
    },
    querySelectorAll: function(selector) {
      return this._parent.querySelectorAll(selector);
    }
  };

  // node_modules/d3-selection/src/constant.js
  function constant_default(x3) {
    return function() {
      return x3;
    };
  }

  // node_modules/d3-selection/src/selection/data.js
  function bindIndex(parent, group, enter, update, exit, data2) {
    var i = 0, node2, groupLength = group.length, dataLength = data2.length;
    for (; i < dataLength; ++i) {
      if (node2 = group[i]) {
        node2.__data__ = data2[i];
        update[i] = node2;
      } else {
        enter[i] = new EnterNode(parent, data2[i]);
      }
    }
    for (; i < groupLength; ++i) {
      if (node2 = group[i]) {
        exit[i] = node2;
      }
    }
  }
  function bindKey(parent, group, enter, update, exit, data2, key) {
    var i, node2, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group.length, dataLength = data2.length, keyValues = new Array(groupLength), keyValue;
    for (i = 0; i < groupLength; ++i) {
      if (node2 = group[i]) {
        keyValues[i] = keyValue = key.call(node2, node2.__data__, i, group) + "";
        if (nodeByKeyValue.has(keyValue)) {
          exit[i] = node2;
        } else {
          nodeByKeyValue.set(keyValue, node2);
        }
      }
    }
    for (i = 0; i < dataLength; ++i) {
      keyValue = key.call(parent, data2[i], i, data2) + "";
      if (node2 = nodeByKeyValue.get(keyValue)) {
        update[i] = node2;
        node2.__data__ = data2[i];
        nodeByKeyValue.delete(keyValue);
      } else {
        enter[i] = new EnterNode(parent, data2[i]);
      }
    }
    for (i = 0; i < groupLength; ++i) {
      if ((node2 = group[i]) && nodeByKeyValue.get(keyValues[i]) === node2) {
        exit[i] = node2;
      }
    }
  }
  function datum(node2) {
    return node2.__data__;
  }
  function data_default(value, key) {
    if (!arguments.length)
      return Array.from(this, datum);
    var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
    if (typeof value !== "function")
      value = constant_default(value);
    for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
      var parent = parents[j], group = groups[j], groupLength = group.length, data2 = arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data2.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
      bind(parent, group, enterGroup, updateGroup, exitGroup, data2, key);
      for (var i0 = 0, i1 = 0, previous, next2; i0 < dataLength; ++i0) {
        if (previous = enterGroup[i0]) {
          if (i0 >= i1)
            i1 = i0 + 1;
          while (!(next2 = updateGroup[i1]) && ++i1 < dataLength)
            ;
          previous._next = next2 || null;
        }
      }
    }
    update = new Selection(update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
  }
  function arraylike(data2) {
    return typeof data2 === "object" && "length" in data2 ? data2 : Array.from(data2);
  }

  // node_modules/d3-selection/src/selection/exit.js
  function exit_default() {
    return new Selection(this._exit || this._groups.map(sparse_default), this._parents);
  }

  // node_modules/d3-selection/src/selection/join.js
  function join_default(onenter, onupdate, onexit) {
    var enter = this.enter(), update = this, exit = this.exit();
    if (typeof onenter === "function") {
      enter = onenter(enter);
      if (enter)
        enter = enter.selection();
    } else {
      enter = enter.append(onenter + "");
    }
    if (onupdate != null) {
      update = onupdate(update);
      if (update)
        update = update.selection();
    }
    if (onexit == null)
      exit.remove();
    else
      onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
  }

  // node_modules/d3-selection/src/selection/merge.js
  function merge_default(context) {
    var selection2 = context.selection ? context.selection() : context;
    for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge3 = merges[j] = new Array(n), node2, i = 0; i < n; ++i) {
        if (node2 = group0[i] || group1[i]) {
          merge3[i] = node2;
        }
      }
    }
    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }
    return new Selection(merges, this._parents);
  }

  // node_modules/d3-selection/src/selection/order.js
  function order_default() {
    for (var groups = this._groups, j = -1, m = groups.length; ++j < m; ) {
      for (var group = groups[j], i = group.length - 1, next2 = group[i], node2; --i >= 0; ) {
        if (node2 = group[i]) {
          if (next2 && node2.compareDocumentPosition(next2) ^ 4)
            next2.parentNode.insertBefore(node2, next2);
          next2 = node2;
        }
      }
    }
    return this;
  }

  // node_modules/d3-selection/src/selection/sort.js
  function sort_default(compare) {
    if (!compare)
      compare = ascending2;
    function compareNode(a, b) {
      return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    }
    for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node2, i = 0; i < n; ++i) {
        if (node2 = group[i]) {
          sortgroup[i] = node2;
        }
      }
      sortgroup.sort(compareNode);
    }
    return new Selection(sortgroups, this._parents).order();
  }
  function ascending2(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }

  // node_modules/d3-selection/src/selection/call.js
  function call_default() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
  }

  // node_modules/d3-selection/src/selection/nodes.js
  function nodes_default() {
    return Array.from(this);
  }

  // node_modules/d3-selection/src/selection/node.js
  function node_default() {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
        var node2 = group[i];
        if (node2)
          return node2;
      }
    }
    return null;
  }

  // node_modules/d3-selection/src/selection/size.js
  function size_default() {
    let size = 0;
    for (const node2 of this)
      ++size;
    return size;
  }

  // node_modules/d3-selection/src/selection/empty.js
  function empty_default() {
    return !this.node();
  }

  // node_modules/d3-selection/src/selection/each.js
  function each_default(callback) {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length, node2; i < n; ++i) {
        if (node2 = group[i])
          callback.call(node2, node2.__data__, i, group);
      }
    }
    return this;
  }

  // node_modules/d3-selection/src/selection/attr.js
  function attrRemove(name) {
    return function() {
      this.removeAttribute(name);
    };
  }
  function attrRemoveNS(fullname) {
    return function() {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }
  function attrConstant(name, value) {
    return function() {
      this.setAttribute(name, value);
    };
  }
  function attrConstantNS(fullname, value) {
    return function() {
      this.setAttributeNS(fullname.space, fullname.local, value);
    };
  }
  function attrFunction(name, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null)
        this.removeAttribute(name);
      else
        this.setAttribute(name, v);
    };
  }
  function attrFunctionNS(fullname, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null)
        this.removeAttributeNS(fullname.space, fullname.local);
      else
        this.setAttributeNS(fullname.space, fullname.local, v);
    };
  }
  function attr_default(name, value) {
    var fullname = namespace_default(name);
    if (arguments.length < 2) {
      var node2 = this.node();
      return fullname.local ? node2.getAttributeNS(fullname.space, fullname.local) : node2.getAttribute(fullname);
    }
    return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
  }

  // node_modules/d3-selection/src/window.js
  function window_default(node2) {
    return node2.ownerDocument && node2.ownerDocument.defaultView || node2.document && node2 || node2.defaultView;
  }

  // node_modules/d3-selection/src/selection/style.js
  function styleRemove(name) {
    return function() {
      this.style.removeProperty(name);
    };
  }
  function styleConstant(name, value, priority) {
    return function() {
      this.style.setProperty(name, value, priority);
    };
  }
  function styleFunction(name, value, priority) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null)
        this.style.removeProperty(name);
      else
        this.style.setProperty(name, v, priority);
    };
  }
  function style_default(name, value, priority) {
    return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
  }
  function styleValue(node2, name) {
    return node2.style.getPropertyValue(name) || window_default(node2).getComputedStyle(node2, null).getPropertyValue(name);
  }

  // node_modules/d3-selection/src/selection/property.js
  function propertyRemove(name) {
    return function() {
      delete this[name];
    };
  }
  function propertyConstant(name, value) {
    return function() {
      this[name] = value;
    };
  }
  function propertyFunction(name, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null)
        delete this[name];
      else
        this[name] = v;
    };
  }
  function property_default(name, value) {
    return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
  }

  // node_modules/d3-selection/src/selection/classed.js
  function classArray(string) {
    return string.trim().split(/^|\s+/);
  }
  function classList(node2) {
    return node2.classList || new ClassList(node2);
  }
  function ClassList(node2) {
    this._node = node2;
    this._names = classArray(node2.getAttribute("class") || "");
  }
  ClassList.prototype = {
    add: function(name) {
      var i = this._names.indexOf(name);
      if (i < 0) {
        this._names.push(name);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    remove: function(name) {
      var i = this._names.indexOf(name);
      if (i >= 0) {
        this._names.splice(i, 1);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    contains: function(name) {
      return this._names.indexOf(name) >= 0;
    }
  };
  function classedAdd(node2, names) {
    var list = classList(node2), i = -1, n = names.length;
    while (++i < n)
      list.add(names[i]);
  }
  function classedRemove(node2, names) {
    var list = classList(node2), i = -1, n = names.length;
    while (++i < n)
      list.remove(names[i]);
  }
  function classedTrue(names) {
    return function() {
      classedAdd(this, names);
    };
  }
  function classedFalse(names) {
    return function() {
      classedRemove(this, names);
    };
  }
  function classedFunction(names, value) {
    return function() {
      (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
  }
  function classed_default(name, value) {
    var names = classArray(name + "");
    if (arguments.length < 2) {
      var list = classList(this.node()), i = -1, n = names.length;
      while (++i < n)
        if (!list.contains(names[i]))
          return false;
      return true;
    }
    return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
  }

  // node_modules/d3-selection/src/selection/text.js
  function textRemove() {
    this.textContent = "";
  }
  function textConstant(value) {
    return function() {
      this.textContent = value;
    };
  }
  function textFunction(value) {
    return function() {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? "" : v;
    };
  }
  function text_default(value) {
    return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
  }

  // node_modules/d3-selection/src/selection/html.js
  function htmlRemove() {
    this.innerHTML = "";
  }
  function htmlConstant(value) {
    return function() {
      this.innerHTML = value;
    };
  }
  function htmlFunction(value) {
    return function() {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? "" : v;
    };
  }
  function html_default(value) {
    return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
  }

  // node_modules/d3-selection/src/selection/raise.js
  function raise() {
    if (this.nextSibling)
      this.parentNode.appendChild(this);
  }
  function raise_default() {
    return this.each(raise);
  }

  // node_modules/d3-selection/src/selection/lower.js
  function lower() {
    if (this.previousSibling)
      this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  function lower_default() {
    return this.each(lower);
  }

  // node_modules/d3-selection/src/selection/append.js
  function append_default(name) {
    var create2 = typeof name === "function" ? name : creator_default(name);
    return this.select(function() {
      return this.appendChild(create2.apply(this, arguments));
    });
  }

  // node_modules/d3-selection/src/selection/insert.js
  function constantNull() {
    return null;
  }
  function insert_default(name, before) {
    var create2 = typeof name === "function" ? name : creator_default(name), select = before == null ? constantNull : typeof before === "function" ? before : selector_default(before);
    return this.select(function() {
      return this.insertBefore(create2.apply(this, arguments), select.apply(this, arguments) || null);
    });
  }

  // node_modules/d3-selection/src/selection/remove.js
  function remove() {
    var parent = this.parentNode;
    if (parent)
      parent.removeChild(this);
  }
  function remove_default() {
    return this.each(remove);
  }

  // node_modules/d3-selection/src/selection/clone.js
  function selection_cloneShallow() {
    var clone = this.cloneNode(false), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }
  function selection_cloneDeep() {
    var clone = this.cloneNode(true), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }
  function clone_default(deep) {
    return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
  }

  // node_modules/d3-selection/src/selection/datum.js
  function datum_default(value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
  }

  // node_modules/d3-selection/src/selection/on.js
  function contextListener(listener) {
    return function(event) {
      listener.call(this, event, this.__data__);
    };
  }
  function parseTypenames2(typenames) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
      var name = "", i = t.indexOf(".");
      if (i >= 0)
        name = t.slice(i + 1), t = t.slice(0, i);
      return { type: t, name };
    });
  }
  function onRemove(typename) {
    return function() {
      var on = this.__on;
      if (!on)
        return;
      for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
        if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
        } else {
          on[++i] = o;
        }
      }
      if (++i)
        on.length = i;
      else
        delete this.__on;
    };
  }
  function onAdd(typename, value, options) {
    return function() {
      var on = this.__on, o, listener = contextListener(value);
      if (on)
        for (var j = 0, m = on.length; j < m; ++j) {
          if ((o = on[j]).type === typename.type && o.name === typename.name) {
            this.removeEventListener(o.type, o.listener, o.options);
            this.addEventListener(o.type, o.listener = listener, o.options = options);
            o.value = value;
            return;
          }
        }
      this.addEventListener(typename.type, listener, options);
      o = { type: typename.type, name: typename.name, value, listener, options };
      if (!on)
        this.__on = [o];
      else
        on.push(o);
    };
  }
  function on_default(typename, value, options) {
    var typenames = parseTypenames2(typename + ""), i, n = typenames.length, t;
    if (arguments.length < 2) {
      var on = this.node().__on;
      if (on)
        for (var j = 0, m = on.length, o; j < m; ++j) {
          for (i = 0, o = on[j]; i < n; ++i) {
            if ((t = typenames[i]).type === o.type && t.name === o.name) {
              return o.value;
            }
          }
        }
      return;
    }
    on = value ? onAdd : onRemove;
    for (i = 0; i < n; ++i)
      this.each(on(typenames[i], value, options));
    return this;
  }

  // node_modules/d3-selection/src/selection/dispatch.js
  function dispatchEvent(node2, type2, params) {
    var window2 = window_default(node2), event = window2.CustomEvent;
    if (typeof event === "function") {
      event = new event(type2, params);
    } else {
      event = window2.document.createEvent("Event");
      if (params)
        event.initEvent(type2, params.bubbles, params.cancelable), event.detail = params.detail;
      else
        event.initEvent(type2, false, false);
    }
    node2.dispatchEvent(event);
  }
  function dispatchConstant(type2, params) {
    return function() {
      return dispatchEvent(this, type2, params);
    };
  }
  function dispatchFunction(type2, params) {
    return function() {
      return dispatchEvent(this, type2, params.apply(this, arguments));
    };
  }
  function dispatch_default2(type2, params) {
    return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type2, params));
  }

  // node_modules/d3-selection/src/selection/iterator.js
  function* iterator_default() {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length, node2; i < n; ++i) {
        if (node2 = group[i])
          yield node2;
      }
    }
  }

  // node_modules/d3-selection/src/selection/index.js
  var root = [null];
  function Selection(groups, parents) {
    this._groups = groups;
    this._parents = parents;
  }
  function selection() {
    return new Selection([[document.documentElement]], root);
  }
  function selection_selection() {
    return this;
  }
  Selection.prototype = selection.prototype = {
    constructor: Selection,
    select: select_default,
    selectAll: selectAll_default,
    selectChild: selectChild_default,
    selectChildren: selectChildren_default,
    filter: filter_default,
    data: data_default,
    enter: enter_default,
    exit: exit_default,
    join: join_default,
    merge: merge_default,
    selection: selection_selection,
    order: order_default,
    sort: sort_default,
    call: call_default,
    nodes: nodes_default,
    node: node_default,
    size: size_default,
    empty: empty_default,
    each: each_default,
    attr: attr_default,
    style: style_default,
    property: property_default,
    classed: classed_default,
    text: text_default,
    html: html_default,
    raise: raise_default,
    lower: lower_default,
    append: append_default,
    insert: insert_default,
    remove: remove_default,
    clone: clone_default,
    datum: datum_default,
    on: on_default,
    dispatch: dispatch_default2,
    [Symbol.iterator]: iterator_default
  };
  var selection_default = selection;

  // node_modules/d3-selection/src/select.js
  function select_default2(selector) {
    return typeof selector === "string" ? new Selection([[document.querySelector(selector)]], [document.documentElement]) : new Selection([[selector]], root);
  }

  // node_modules/d3-selection/src/sourceEvent.js
  function sourceEvent_default(event) {
    let sourceEvent;
    while (sourceEvent = event.sourceEvent)
      event = sourceEvent;
    return event;
  }

  // node_modules/d3-selection/src/pointer.js
  function pointer_default(event, node2) {
    event = sourceEvent_default(event);
    if (node2 === void 0)
      node2 = event.currentTarget;
    if (node2) {
      var svg2 = node2.ownerSVGElement || node2;
      if (svg2.createSVGPoint) {
        var point4 = svg2.createSVGPoint();
        point4.x = event.clientX, point4.y = event.clientY;
        point4 = point4.matrixTransform(node2.getScreenCTM().inverse());
        return [point4.x, point4.y];
      }
      if (node2.getBoundingClientRect) {
        var rect = node2.getBoundingClientRect();
        return [event.clientX - rect.left - node2.clientLeft, event.clientY - rect.top - node2.clientTop];
      }
    }
    return [event.pageX, event.pageY];
  }

  // node_modules/d3-drag/src/noevent.js
  var nonpassivecapture = { capture: true, passive: false };
  function noevent_default(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  // node_modules/d3-drag/src/nodrag.js
  function nodrag_default(view) {
    var root2 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", noevent_default, nonpassivecapture);
    if ("onselectstart" in root2) {
      selection2.on("selectstart.drag", noevent_default, nonpassivecapture);
    } else {
      root2.__noselect = root2.style.MozUserSelect;
      root2.style.MozUserSelect = "none";
    }
  }
  function yesdrag(view, noclick) {
    var root2 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", null);
    if (noclick) {
      selection2.on("click.drag", noevent_default, nonpassivecapture);
      setTimeout(function() {
        selection2.on("click.drag", null);
      }, 0);
    }
    if ("onselectstart" in root2) {
      selection2.on("selectstart.drag", null);
    } else {
      root2.style.MozUserSelect = root2.__noselect;
      delete root2.__noselect;
    }
  }

  // node_modules/d3-color/src/define.js
  function define_default(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
  }
  function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for (var key in definition)
      prototype[key] = definition[key];
    return prototype;
  }

  // node_modules/d3-color/src/color.js
  function Color() {
  }
  var darker = 0.7;
  var brighter = 1 / darker;
  var reI = "\\s*([+-]?\\d+)\\s*";
  var reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*";
  var reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
  var reHex = /^#([0-9a-f]{3,8})$/;
  var reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$");
  var reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$");
  var reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$");
  var reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$");
  var reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$");
  var reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");
  var named = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  };
  define_default(Color, color2, {
    copy: function(channels) {
      return Object.assign(new this.constructor(), this, channels);
    },
    displayable: function() {
      return this.rgb().displayable();
    },
    hex: color_formatHex,
    formatHex: color_formatHex,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
  });
  function color_formatHex() {
    return this.rgb().formatHex();
  }
  function color_formatHsl() {
    return hslConvert(this).formatHsl();
  }
  function color_formatRgb() {
    return this.rgb().formatRgb();
  }
  function color2(format2) {
    var m, l;
    format2 = (format2 + "").trim().toLowerCase();
    return (m = reHex.exec(format2)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format2)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format2)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format2)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format2)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
  }
  function rgbn(n) {
    return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
  }
  function rgba(r2, g, b, a) {
    if (a <= 0)
      r2 = g = b = NaN;
    return new Rgb(r2, g, b, a);
  }
  function rgbConvert(o) {
    if (!(o instanceof Color))
      o = color2(o);
    if (!o)
      return new Rgb();
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
  }
  function rgb(r2, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r2) : new Rgb(r2, g, b, opacity == null ? 1 : opacity);
  }
  function Rgb(r2, g, b, opacity) {
    this.r = +r2;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
  }
  define_default(Rgb, rgb, extend(Color, {
    brighter: function(k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker: function(k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb: function() {
      return this;
    },
    displayable: function() {
      return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
    },
    hex: rgb_formatHex,
    formatHex: rgb_formatHex,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
  }));
  function rgb_formatHex() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
  }
  function rgb_formatRgb() {
    var a = this.opacity;
    a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
  }
  function hex(value) {
    value = Math.max(0, Math.min(255, Math.round(value) || 0));
    return (value < 16 ? "0" : "") + value.toString(16);
  }
  function hsla(h, s, l, a) {
    if (a <= 0)
      h = s = l = NaN;
    else if (l <= 0 || l >= 1)
      h = s = NaN;
    else if (s <= 0)
      h = NaN;
    return new Hsl(h, s, l, a);
  }
  function hslConvert(o) {
    if (o instanceof Hsl)
      return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color))
      o = color2(o);
    if (!o)
      return new Hsl();
    if (o instanceof Hsl)
      return o;
    o = o.rgb();
    var r2 = o.r / 255, g = o.g / 255, b = o.b / 255, min2 = Math.min(r2, g, b), max3 = Math.max(r2, g, b), h = NaN, s = max3 - min2, l = (max3 + min2) / 2;
    if (s) {
      if (r2 === max3)
        h = (g - b) / s + (g < b) * 6;
      else if (g === max3)
        h = (b - r2) / s + 2;
      else
        h = (r2 - g) / s + 4;
      s /= l < 0.5 ? max3 + min2 : 2 - max3 - min2;
      h *= 60;
    } else {
      s = l > 0 && l < 1 ? 0 : h;
    }
    return new Hsl(h, s, l, o.opacity);
  }
  function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
  }
  function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
  }
  define_default(Hsl, hsl, extend(Color, {
    brighter: function(k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function(k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function() {
      var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
      return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
    },
    displayable: function() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
    },
    formatHsl: function() {
      var a = this.opacity;
      a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
      return (a === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a === 1 ? ")" : ", " + a + ")");
    }
  }));
  function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
  }

  // node_modules/d3-interpolate/src/basis.js
  function basis(t1, v0, v1, v2, v3) {
    var t2 = t1 * t1, t3 = t2 * t1;
    return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
  }
  function basis_default(values3) {
    var n = values3.length - 1;
    return function(t) {
      var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values3[i], v2 = values3[i + 1], v0 = i > 0 ? values3[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values3[i + 2] : 2 * v2 - v1;
      return basis((t - i / n) * n, v0, v1, v2, v3);
    };
  }

  // node_modules/d3-interpolate/src/basisClosed.js
  function basisClosed_default(values3) {
    var n = values3.length;
    return function(t) {
      var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values3[(i + n - 1) % n], v1 = values3[i % n], v2 = values3[(i + 1) % n], v3 = values3[(i + 2) % n];
      return basis((t - i / n) * n, v0, v1, v2, v3);
    };
  }

  // node_modules/d3-interpolate/src/constant.js
  var constant_default2 = (x3) => () => x3;

  // node_modules/d3-interpolate/src/color.js
  function linear(a, d) {
    return function(t) {
      return a + t * d;
    };
  }
  function exponential(a, b, y3) {
    return a = Math.pow(a, y3), b = Math.pow(b, y3) - a, y3 = 1 / y3, function(t) {
      return Math.pow(a + t * b, y3);
    };
  }
  function gamma(y3) {
    return (y3 = +y3) === 1 ? nogamma : function(a, b) {
      return b - a ? exponential(a, b, y3) : constant_default2(isNaN(a) ? b : a);
    };
  }
  function nogamma(a, b) {
    var d = b - a;
    return d ? linear(a, d) : constant_default2(isNaN(a) ? b : a);
  }

  // node_modules/d3-interpolate/src/rgb.js
  var rgb_default = function rgbGamma(y3) {
    var color4 = gamma(y3);
    function rgb2(start2, end) {
      var r2 = color4((start2 = rgb(start2)).r, (end = rgb(end)).r), g = color4(start2.g, end.g), b = color4(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
      return function(t) {
        start2.r = r2(t);
        start2.g = g(t);
        start2.b = b(t);
        start2.opacity = opacity(t);
        return start2 + "";
      };
    }
    rgb2.gamma = rgbGamma;
    return rgb2;
  }(1);
  function rgbSpline(spline) {
    return function(colors2) {
      var n = colors2.length, r2 = new Array(n), g = new Array(n), b = new Array(n), i, color4;
      for (i = 0; i < n; ++i) {
        color4 = rgb(colors2[i]);
        r2[i] = color4.r || 0;
        g[i] = color4.g || 0;
        b[i] = color4.b || 0;
      }
      r2 = spline(r2);
      g = spline(g);
      b = spline(b);
      color4.opacity = 1;
      return function(t) {
        color4.r = r2(t);
        color4.g = g(t);
        color4.b = b(t);
        return color4 + "";
      };
    };
  }
  var rgbBasis = rgbSpline(basis_default);
  var rgbBasisClosed = rgbSpline(basisClosed_default);

  // node_modules/d3-interpolate/src/numberArray.js
  function numberArray_default(a, b) {
    if (!b)
      b = [];
    var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;
    return function(t) {
      for (i = 0; i < n; ++i)
        c[i] = a[i] * (1 - t) + b[i] * t;
      return c;
    };
  }
  function isNumberArray(x3) {
    return ArrayBuffer.isView(x3) && !(x3 instanceof DataView);
  }

  // node_modules/d3-interpolate/src/array.js
  function genericArray(a, b) {
    var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x3 = new Array(na), c = new Array(nb), i;
    for (i = 0; i < na; ++i)
      x3[i] = value_default(a[i], b[i]);
    for (; i < nb; ++i)
      c[i] = b[i];
    return function(t) {
      for (i = 0; i < na; ++i)
        c[i] = x3[i](t);
      return c;
    };
  }

  // node_modules/d3-interpolate/src/date.js
  function date_default(a, b) {
    var d = new Date();
    return a = +a, b = +b, function(t) {
      return d.setTime(a * (1 - t) + b * t), d;
    };
  }

  // node_modules/d3-interpolate/src/number.js
  function number_default(a, b) {
    return a = +a, b = +b, function(t) {
      return a * (1 - t) + b * t;
    };
  }

  // node_modules/d3-interpolate/src/object.js
  function object_default(a, b) {
    var i = {}, c = {}, k;
    if (a === null || typeof a !== "object")
      a = {};
    if (b === null || typeof b !== "object")
      b = {};
    for (k in b) {
      if (k in a) {
        i[k] = value_default(a[k], b[k]);
      } else {
        c[k] = b[k];
      }
    }
    return function(t) {
      for (k in i)
        c[k] = i[k](t);
      return c;
    };
  }

  // node_modules/d3-interpolate/src/string.js
  var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  var reB = new RegExp(reA.source, "g");
  function zero(b) {
    return function() {
      return b;
    };
  }
  function one(b) {
    return function(t) {
      return b(t) + "";
    };
  }
  function string_default(a, b) {
    var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
    a = a + "", b = b + "";
    while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
      if ((bs = bm.index) > bi) {
        bs = b.slice(bi, bs);
        if (s[i])
          s[i] += bs;
        else
          s[++i] = bs;
      }
      if ((am = am[0]) === (bm = bm[0])) {
        if (s[i])
          s[i] += bm;
        else
          s[++i] = bm;
      } else {
        s[++i] = null;
        q.push({ i, x: number_default(am, bm) });
      }
      bi = reB.lastIndex;
    }
    if (bi < b.length) {
      bs = b.slice(bi);
      if (s[i])
        s[i] += bs;
      else
        s[++i] = bs;
    }
    return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
      for (var i2 = 0, o; i2 < b; ++i2)
        s[(o = q[i2]).i] = o.x(t);
      return s.join("");
    });
  }

  // node_modules/d3-interpolate/src/value.js
  function value_default(a, b) {
    var t = typeof b, c;
    return b == null || t === "boolean" ? constant_default2(b) : (t === "number" ? number_default : t === "string" ? (c = color2(b)) ? (b = c, rgb_default) : string_default : b instanceof color2 ? rgb_default : b instanceof Date ? date_default : isNumberArray(b) ? numberArray_default : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object_default : number_default)(a, b);
  }

  // node_modules/d3-interpolate/src/round.js
  function round_default(a, b) {
    return a = +a, b = +b, function(t) {
      return Math.round(a * (1 - t) + b * t);
    };
  }

  // node_modules/d3-interpolate/src/transform/decompose.js
  var degrees = 180 / Math.PI;
  var identity = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
  };
  function decompose_default(a, b, c, d, e, f) {
    var scaleX, scaleY, skewX;
    if (scaleX = Math.sqrt(a * a + b * b))
      a /= scaleX, b /= scaleX;
    if (skewX = a * c + b * d)
      c -= a * skewX, d -= b * skewX;
    if (scaleY = Math.sqrt(c * c + d * d))
      c /= scaleY, d /= scaleY, skewX /= scaleY;
    if (a * d < b * c)
      a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
    return {
      translateX: e,
      translateY: f,
      rotate: Math.atan2(b, a) * degrees,
      skewX: Math.atan(skewX) * degrees,
      scaleX,
      scaleY
    };
  }

  // node_modules/d3-interpolate/src/transform/parse.js
  var svgNode;
  function parseCss(value) {
    const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
    return m.isIdentity ? identity : decompose_default(m.a, m.b, m.c, m.d, m.e, m.f);
  }
  function parseSvg(value) {
    if (value == null)
      return identity;
    if (!svgNode)
      svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgNode.setAttribute("transform", value);
    if (!(value = svgNode.transform.baseVal.consolidate()))
      return identity;
    value = value.matrix;
    return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
  }

  // node_modules/d3-interpolate/src/transform/index.js
  function interpolateTransform(parse2, pxComma, pxParen, degParen) {
    function pop(s) {
      return s.length ? s.pop() + " " : "";
    }
    function translate(xa, ya, xb, yb, s, q) {
      if (xa !== xb || ya !== yb) {
        var i = s.push("translate(", null, pxComma, null, pxParen);
        q.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });
      } else if (xb || yb) {
        s.push("translate(" + xb + pxComma + yb + pxParen);
      }
    }
    function rotate2(a, b, s, q) {
      if (a !== b) {
        if (a - b > 180)
          b += 360;
        else if (b - a > 180)
          a += 360;
        q.push({ i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: number_default(a, b) });
      } else if (b) {
        s.push(pop(s) + "rotate(" + b + degParen);
      }
    }
    function skewX(a, b, s, q) {
      if (a !== b) {
        q.push({ i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: number_default(a, b) });
      } else if (b) {
        s.push(pop(s) + "skewX(" + b + degParen);
      }
    }
    function scale(xa, ya, xb, yb, s, q) {
      if (xa !== xb || ya !== yb) {
        var i = s.push(pop(s) + "scale(", null, ",", null, ")");
        q.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });
      } else if (xb !== 1 || yb !== 1) {
        s.push(pop(s) + "scale(" + xb + "," + yb + ")");
      }
    }
    return function(a, b) {
      var s = [], q = [];
      a = parse2(a), b = parse2(b);
      translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
      rotate2(a.rotate, b.rotate, s, q);
      skewX(a.skewX, b.skewX, s, q);
      scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
      a = b = null;
      return function(t) {
        var i = -1, n = q.length, o;
        while (++i < n)
          s[(o = q[i]).i] = o.x(t);
        return s.join("");
      };
    };
  }
  var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
  var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

  // node_modules/d3-interpolate/src/zoom.js
  var epsilon2 = 1e-12;
  function cosh(x3) {
    return ((x3 = Math.exp(x3)) + 1 / x3) / 2;
  }
  function sinh(x3) {
    return ((x3 = Math.exp(x3)) - 1 / x3) / 2;
  }
  function tanh(x3) {
    return ((x3 = Math.exp(2 * x3)) - 1) / (x3 + 1);
  }
  var zoom_default = function zoomRho(rho, rho2, rho4) {
    function zoom(p0, p1) {
      var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
      if (d2 < epsilon2) {
        S = Math.log(w1 / w0) / rho;
        i = function(t) {
          return [
            ux0 + t * dx,
            uy0 + t * dy,
            w0 * Math.exp(rho * t * S)
          ];
        };
      } else {
        var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
        S = (r1 - r0) / rho;
        i = function(t) {
          var s = t * S, coshr0 = cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
          return [
            ux0 + u * dx,
            uy0 + u * dy,
            w0 * coshr0 / cosh(rho * s + r0)
          ];
        };
      }
      i.duration = S * 1e3 * rho / Math.SQRT2;
      return i;
    }
    zoom.rho = function(_2) {
      var _1 = Math.max(1e-3, +_2), _22 = _1 * _1, _4 = _22 * _22;
      return zoomRho(_1, _22, _4);
    };
    return zoom;
  }(Math.SQRT2, 2, 4);

  // node_modules/d3-timer/src/timer.js
  var frame = 0;
  var timeout = 0;
  var interval = 0;
  var pokeDelay = 1e3;
  var taskHead;
  var taskTail;
  var clockLast = 0;
  var clockNow = 0;
  var clockSkew = 0;
  var clock = typeof performance === "object" && performance.now ? performance : Date;
  var setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
    setTimeout(f, 17);
  };
  function now() {
    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
  }
  function clearNow() {
    clockNow = 0;
  }
  function Timer() {
    this._call = this._time = this._next = null;
  }
  Timer.prototype = timer.prototype = {
    constructor: Timer,
    restart: function(callback, delay, time) {
      if (typeof callback !== "function")
        throw new TypeError("callback is not a function");
      time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
      if (!this._next && taskTail !== this) {
        if (taskTail)
          taskTail._next = this;
        else
          taskHead = this;
        taskTail = this;
      }
      this._call = callback;
      this._time = time;
      sleep();
    },
    stop: function() {
      if (this._call) {
        this._call = null;
        this._time = Infinity;
        sleep();
      }
    }
  };
  function timer(callback, delay, time) {
    var t = new Timer();
    t.restart(callback, delay, time);
    return t;
  }
  function timerFlush() {
    now();
    ++frame;
    var t = taskHead, e;
    while (t) {
      if ((e = clockNow - t._time) >= 0)
        t._call.call(void 0, e);
      t = t._next;
    }
    --frame;
  }
  function wake() {
    clockNow = (clockLast = clock.now()) + clockSkew;
    frame = timeout = 0;
    try {
      timerFlush();
    } finally {
      frame = 0;
      nap();
      clockNow = 0;
    }
  }
  function poke() {
    var now2 = clock.now(), delay = now2 - clockLast;
    if (delay > pokeDelay)
      clockSkew -= delay, clockLast = now2;
  }
  function nap() {
    var t0, t1 = taskHead, t2, time = Infinity;
    while (t1) {
      if (t1._call) {
        if (time > t1._time)
          time = t1._time;
        t0 = t1, t1 = t1._next;
      } else {
        t2 = t1._next, t1._next = null;
        t1 = t0 ? t0._next = t2 : taskHead = t2;
      }
    }
    taskTail = t0;
    sleep(time);
  }
  function sleep(time) {
    if (frame)
      return;
    if (timeout)
      timeout = clearTimeout(timeout);
    var delay = time - clockNow;
    if (delay > 24) {
      if (time < Infinity)
        timeout = setTimeout(wake, time - clock.now() - clockSkew);
      if (interval)
        interval = clearInterval(interval);
    } else {
      if (!interval)
        clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
      frame = 1, setFrame(wake);
    }
  }

  // node_modules/d3-timer/src/timeout.js
  function timeout_default(callback, delay, time) {
    var t = new Timer();
    delay = delay == null ? 0 : +delay;
    t.restart((elapsed) => {
      t.stop();
      callback(elapsed + delay);
    }, delay, time);
    return t;
  }

  // node_modules/d3-transition/src/transition/schedule.js
  var emptyOn = dispatch_default("start", "end", "cancel", "interrupt");
  var emptyTween = [];
  var CREATED = 0;
  var SCHEDULED = 1;
  var STARTING = 2;
  var STARTED = 3;
  var RUNNING = 4;
  var ENDING = 5;
  var ENDED = 6;
  function schedule_default(node2, name, id2, index, group, timing) {
    var schedules = node2.__transition;
    if (!schedules)
      node2.__transition = {};
    else if (id2 in schedules)
      return;
    create(node2, id2, {
      name,
      index,
      group,
      on: emptyOn,
      tween: emptyTween,
      time: timing.time,
      delay: timing.delay,
      duration: timing.duration,
      ease: timing.ease,
      timer: null,
      state: CREATED
    });
  }
  function init(node2, id2) {
    var schedule = get2(node2, id2);
    if (schedule.state > CREATED)
      throw new Error("too late; already scheduled");
    return schedule;
  }
  function set2(node2, id2) {
    var schedule = get2(node2, id2);
    if (schedule.state > STARTED)
      throw new Error("too late; already running");
    return schedule;
  }
  function get2(node2, id2) {
    var schedule = node2.__transition;
    if (!schedule || !(schedule = schedule[id2]))
      throw new Error("transition not found");
    return schedule;
  }
  function create(node2, id2, self) {
    var schedules = node2.__transition, tween;
    schedules[id2] = self;
    self.timer = timer(schedule, 0, self.time);
    function schedule(elapsed) {
      self.state = SCHEDULED;
      self.timer.restart(start2, self.delay, self.time);
      if (self.delay <= elapsed)
        start2(elapsed - self.delay);
    }
    function start2(elapsed) {
      var i, j, n, o;
      if (self.state !== SCHEDULED)
        return stop();
      for (i in schedules) {
        o = schedules[i];
        if (o.name !== self.name)
          continue;
        if (o.state === STARTED)
          return timeout_default(start2);
        if (o.state === RUNNING) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("interrupt", node2, node2.__data__, o.index, o.group);
          delete schedules[i];
        } else if (+i < id2) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("cancel", node2, node2.__data__, o.index, o.group);
          delete schedules[i];
        }
      }
      timeout_default(function() {
        if (self.state === STARTED) {
          self.state = RUNNING;
          self.timer.restart(tick, self.delay, self.time);
          tick(elapsed);
        }
      });
      self.state = STARTING;
      self.on.call("start", node2, node2.__data__, self.index, self.group);
      if (self.state !== STARTING)
        return;
      self.state = STARTED;
      tween = new Array(n = self.tween.length);
      for (i = 0, j = -1; i < n; ++i) {
        if (o = self.tween[i].value.call(node2, node2.__data__, self.index, self.group)) {
          tween[++j] = o;
        }
      }
      tween.length = j + 1;
    }
    function tick(elapsed) {
      var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
      while (++i < n) {
        tween[i].call(node2, t);
      }
      if (self.state === ENDING) {
        self.on.call("end", node2, node2.__data__, self.index, self.group);
        stop();
      }
    }
    function stop() {
      self.state = ENDED;
      self.timer.stop();
      delete schedules[id2];
      for (var i in schedules)
        return;
      delete node2.__transition;
    }
  }

  // node_modules/d3-transition/src/interrupt.js
  function interrupt_default(node2, name) {
    var schedules = node2.__transition, schedule, active, empty2 = true, i;
    if (!schedules)
      return;
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule = schedules[i]).name !== name) {
        empty2 = false;
        continue;
      }
      active = schedule.state > STARTING && schedule.state < ENDING;
      schedule.state = ENDED;
      schedule.timer.stop();
      schedule.on.call(active ? "interrupt" : "cancel", node2, node2.__data__, schedule.index, schedule.group);
      delete schedules[i];
    }
    if (empty2)
      delete node2.__transition;
  }

  // node_modules/d3-transition/src/selection/interrupt.js
  function interrupt_default2(name) {
    return this.each(function() {
      interrupt_default(this, name);
    });
  }

  // node_modules/d3-transition/src/transition/tween.js
  function tweenRemove(id2, name) {
    var tween0, tween1;
    return function() {
      var schedule = set2(this, id2), tween = schedule.tween;
      if (tween !== tween0) {
        tween1 = tween0 = tween;
        for (var i = 0, n = tween1.length; i < n; ++i) {
          if (tween1[i].name === name) {
            tween1 = tween1.slice();
            tween1.splice(i, 1);
            break;
          }
        }
      }
      schedule.tween = tween1;
    };
  }
  function tweenFunction(id2, name, value) {
    var tween0, tween1;
    if (typeof value !== "function")
      throw new Error();
    return function() {
      var schedule = set2(this, id2), tween = schedule.tween;
      if (tween !== tween0) {
        tween1 = (tween0 = tween).slice();
        for (var t = { name, value }, i = 0, n = tween1.length; i < n; ++i) {
          if (tween1[i].name === name) {
            tween1[i] = t;
            break;
          }
        }
        if (i === n)
          tween1.push(t);
      }
      schedule.tween = tween1;
    };
  }
  function tween_default(name, value) {
    var id2 = this._id;
    name += "";
    if (arguments.length < 2) {
      var tween = get2(this.node(), id2).tween;
      for (var i = 0, n = tween.length, t; i < n; ++i) {
        if ((t = tween[i]).name === name) {
          return t.value;
        }
      }
      return null;
    }
    return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
  }
  function tweenValue(transition2, name, value) {
    var id2 = transition2._id;
    transition2.each(function() {
      var schedule = set2(this, id2);
      (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
    });
    return function(node2) {
      return get2(node2, id2).value[name];
    };
  }

  // node_modules/d3-transition/src/transition/interpolate.js
  function interpolate_default(a, b) {
    var c;
    return (typeof b === "number" ? number_default : b instanceof color2 ? rgb_default : (c = color2(b)) ? (b = c, rgb_default) : string_default)(a, b);
  }

  // node_modules/d3-transition/src/transition/attr.js
  function attrRemove2(name) {
    return function() {
      this.removeAttribute(name);
    };
  }
  function attrRemoveNS2(fullname) {
    return function() {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }
  function attrConstant2(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
      var string0 = this.getAttribute(name);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
  }
  function attrConstantNS2(fullname, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
      var string0 = this.getAttributeNS(fullname.space, fullname.local);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
  }
  function attrFunction2(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
      var string0, value1 = value(this), string1;
      if (value1 == null)
        return void this.removeAttribute(name);
      string0 = this.getAttribute(name);
      string1 = value1 + "";
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }
  function attrFunctionNS2(fullname, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
      var string0, value1 = value(this), string1;
      if (value1 == null)
        return void this.removeAttributeNS(fullname.space, fullname.local);
      string0 = this.getAttributeNS(fullname.space, fullname.local);
      string1 = value1 + "";
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }
  function attr_default2(name, value) {
    var fullname = namespace_default(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate_default;
    return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS2 : attrFunction2)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS2 : attrRemove2)(fullname) : (fullname.local ? attrConstantNS2 : attrConstant2)(fullname, i, value));
  }

  // node_modules/d3-transition/src/transition/attrTween.js
  function attrInterpolate(name, i) {
    return function(t) {
      this.setAttribute(name, i.call(this, t));
    };
  }
  function attrInterpolateNS(fullname, i) {
    return function(t) {
      this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
    };
  }
  function attrTweenNS(fullname, value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0)
        t0 = (i0 = i) && attrInterpolateNS(fullname, i);
      return t0;
    }
    tween._value = value;
    return tween;
  }
  function attrTween(name, value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0)
        t0 = (i0 = i) && attrInterpolate(name, i);
      return t0;
    }
    tween._value = value;
    return tween;
  }
  function attrTween_default(name, value) {
    var key = "attr." + name;
    if (arguments.length < 2)
      return (key = this.tween(key)) && key._value;
    if (value == null)
      return this.tween(key, null);
    if (typeof value !== "function")
      throw new Error();
    var fullname = namespace_default(name);
    return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
  }

  // node_modules/d3-transition/src/transition/delay.js
  function delayFunction(id2, value) {
    return function() {
      init(this, id2).delay = +value.apply(this, arguments);
    };
  }
  function delayConstant(id2, value) {
    return value = +value, function() {
      init(this, id2).delay = value;
    };
  }
  function delay_default(value) {
    var id2 = this._id;
    return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get2(this.node(), id2).delay;
  }

  // node_modules/d3-transition/src/transition/duration.js
  function durationFunction(id2, value) {
    return function() {
      set2(this, id2).duration = +value.apply(this, arguments);
    };
  }
  function durationConstant(id2, value) {
    return value = +value, function() {
      set2(this, id2).duration = value;
    };
  }
  function duration_default(value) {
    var id2 = this._id;
    return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get2(this.node(), id2).duration;
  }

  // node_modules/d3-transition/src/transition/ease.js
  function easeConstant(id2, value) {
    if (typeof value !== "function")
      throw new Error();
    return function() {
      set2(this, id2).ease = value;
    };
  }
  function ease_default(value) {
    var id2 = this._id;
    return arguments.length ? this.each(easeConstant(id2, value)) : get2(this.node(), id2).ease;
  }

  // node_modules/d3-transition/src/transition/easeVarying.js
  function easeVarying(id2, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (typeof v !== "function")
        throw new Error();
      set2(this, id2).ease = v;
    };
  }
  function easeVarying_default(value) {
    if (typeof value !== "function")
      throw new Error();
    return this.each(easeVarying(this._id, value));
  }

  // node_modules/d3-transition/src/transition/filter.js
  function filter_default2(match2) {
    if (typeof match2 !== "function")
      match2 = matcher_default(match2);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node2, i = 0; i < n; ++i) {
        if ((node2 = group[i]) && match2.call(node2, node2.__data__, i, group)) {
          subgroup.push(node2);
        }
      }
    }
    return new Transition(subgroups, this._parents, this._name, this._id);
  }

  // node_modules/d3-transition/src/transition/merge.js
  function merge_default2(transition2) {
    if (transition2._id !== this._id)
      throw new Error();
    for (var groups0 = this._groups, groups1 = transition2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge3 = merges[j] = new Array(n), node2, i = 0; i < n; ++i) {
        if (node2 = group0[i] || group1[i]) {
          merge3[i] = node2;
        }
      }
    }
    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }
    return new Transition(merges, this._parents, this._name, this._id);
  }

  // node_modules/d3-transition/src/transition/on.js
  function start(name) {
    return (name + "").trim().split(/^|\s+/).every(function(t) {
      var i = t.indexOf(".");
      if (i >= 0)
        t = t.slice(0, i);
      return !t || t === "start";
    });
  }
  function onFunction(id2, name, listener) {
    var on0, on1, sit = start(name) ? init : set2;
    return function() {
      var schedule = sit(this, id2), on = schedule.on;
      if (on !== on0)
        (on1 = (on0 = on).copy()).on(name, listener);
      schedule.on = on1;
    };
  }
  function on_default2(name, listener) {
    var id2 = this._id;
    return arguments.length < 2 ? get2(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
  }

  // node_modules/d3-transition/src/transition/remove.js
  function removeFunction(id2) {
    return function() {
      var parent = this.parentNode;
      for (var i in this.__transition)
        if (+i !== id2)
          return;
      if (parent)
        parent.removeChild(this);
    };
  }
  function remove_default2() {
    return this.on("end.remove", removeFunction(this._id));
  }

  // node_modules/d3-transition/src/transition/select.js
  function select_default3(select) {
    var name = this._name, id2 = this._id;
    if (typeof select !== "function")
      select = selector_default(select);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node2, subnode, i = 0; i < n; ++i) {
        if ((node2 = group[i]) && (subnode = select.call(node2, node2.__data__, i, group))) {
          if ("__data__" in node2)
            subnode.__data__ = node2.__data__;
          subgroup[i] = subnode;
          schedule_default(subgroup[i], name, id2, i, subgroup, get2(node2, id2));
        }
      }
    }
    return new Transition(subgroups, this._parents, name, id2);
  }

  // node_modules/d3-transition/src/transition/selectAll.js
  function selectAll_default2(select) {
    var name = this._name, id2 = this._id;
    if (typeof select !== "function")
      select = selectorAll_default(select);
    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node2, i = 0; i < n; ++i) {
        if (node2 = group[i]) {
          for (var children2 = select.call(node2, node2.__data__, i, group), child, inherit2 = get2(node2, id2), k = 0, l = children2.length; k < l; ++k) {
            if (child = children2[k]) {
              schedule_default(child, name, id2, k, children2, inherit2);
            }
          }
          subgroups.push(children2);
          parents.push(node2);
        }
      }
    }
    return new Transition(subgroups, parents, name, id2);
  }

  // node_modules/d3-transition/src/transition/selection.js
  var Selection2 = selection_default.prototype.constructor;
  function selection_default2() {
    return new Selection2(this._groups, this._parents);
  }

  // node_modules/d3-transition/src/transition/style.js
  function styleNull(name, interpolate) {
    var string00, string10, interpolate0;
    return function() {
      var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
    };
  }
  function styleRemove2(name) {
    return function() {
      this.style.removeProperty(name);
    };
  }
  function styleConstant2(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
      var string0 = styleValue(this, name);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
  }
  function styleFunction2(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
      var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
      if (value1 == null)
        string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }
  function styleMaybeRemove(id2, name) {
    var on0, on1, listener0, key = "style." + name, event = "end." + key, remove2;
    return function() {
      var schedule = set2(this, id2), on = schedule.on, listener = schedule.value[key] == null ? remove2 || (remove2 = styleRemove2(name)) : void 0;
      if (on !== on0 || listener0 !== listener)
        (on1 = (on0 = on).copy()).on(event, listener0 = listener);
      schedule.on = on1;
    };
  }
  function style_default2(name, value, priority) {
    var i = (name += "") === "transform" ? interpolateTransformCss : interpolate_default;
    return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove2(name)) : typeof value === "function" ? this.styleTween(name, styleFunction2(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant2(name, i, value), priority).on("end.style." + name, null);
  }

  // node_modules/d3-transition/src/transition/styleTween.js
  function styleInterpolate(name, i, priority) {
    return function(t) {
      this.style.setProperty(name, i.call(this, t), priority);
    };
  }
  function styleTween(name, value, priority) {
    var t, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0)
        t = (i0 = i) && styleInterpolate(name, i, priority);
      return t;
    }
    tween._value = value;
    return tween;
  }
  function styleTween_default(name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2)
      return (key = this.tween(key)) && key._value;
    if (value == null)
      return this.tween(key, null);
    if (typeof value !== "function")
      throw new Error();
    return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
  }

  // node_modules/d3-transition/src/transition/text.js
  function textConstant2(value) {
    return function() {
      this.textContent = value;
    };
  }
  function textFunction2(value) {
    return function() {
      var value1 = value(this);
      this.textContent = value1 == null ? "" : value1;
    };
  }
  function text_default2(value) {
    return this.tween("text", typeof value === "function" ? textFunction2(tweenValue(this, "text", value)) : textConstant2(value == null ? "" : value + ""));
  }

  // node_modules/d3-transition/src/transition/textTween.js
  function textInterpolate(i) {
    return function(t) {
      this.textContent = i.call(this, t);
    };
  }
  function textTween(value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0)
        t0 = (i0 = i) && textInterpolate(i);
      return t0;
    }
    tween._value = value;
    return tween;
  }
  function textTween_default(value) {
    var key = "text";
    if (arguments.length < 1)
      return (key = this.tween(key)) && key._value;
    if (value == null)
      return this.tween(key, null);
    if (typeof value !== "function")
      throw new Error();
    return this.tween(key, textTween(value));
  }

  // node_modules/d3-transition/src/transition/transition.js
  function transition_default() {
    var name = this._name, id0 = this._id, id1 = newId();
    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node2, i = 0; i < n; ++i) {
        if (node2 = group[i]) {
          var inherit2 = get2(node2, id0);
          schedule_default(node2, name, id1, i, group, {
            time: inherit2.time + inherit2.delay + inherit2.duration,
            delay: 0,
            duration: inherit2.duration,
            ease: inherit2.ease
          });
        }
      }
    }
    return new Transition(groups, this._parents, name, id1);
  }

  // node_modules/d3-transition/src/transition/end.js
  function end_default() {
    var on0, on1, that = this, id2 = that._id, size = that.size();
    return new Promise(function(resolve, reject) {
      var cancel = { value: reject }, end = { value: function() {
        if (--size === 0)
          resolve();
      } };
      that.each(function() {
        var schedule = set2(this, id2), on = schedule.on;
        if (on !== on0) {
          on1 = (on0 = on).copy();
          on1._.cancel.push(cancel);
          on1._.interrupt.push(cancel);
          on1._.end.push(end);
        }
        schedule.on = on1;
      });
      if (size === 0)
        resolve();
    });
  }

  // node_modules/d3-transition/src/transition/index.js
  var id = 0;
  function Transition(groups, parents, name, id2) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id2;
  }
  function transition(name) {
    return selection_default().transition(name);
  }
  function newId() {
    return ++id;
  }
  var selection_prototype = selection_default.prototype;
  Transition.prototype = transition.prototype = {
    constructor: Transition,
    select: select_default3,
    selectAll: selectAll_default2,
    selectChild: selection_prototype.selectChild,
    selectChildren: selection_prototype.selectChildren,
    filter: filter_default2,
    merge: merge_default2,
    selection: selection_default2,
    transition: transition_default,
    call: selection_prototype.call,
    nodes: selection_prototype.nodes,
    node: selection_prototype.node,
    size: selection_prototype.size,
    empty: selection_prototype.empty,
    each: selection_prototype.each,
    on: on_default2,
    attr: attr_default2,
    attrTween: attrTween_default,
    style: style_default2,
    styleTween: styleTween_default,
    text: text_default2,
    textTween: textTween_default,
    remove: remove_default2,
    tween: tween_default,
    delay: delay_default,
    duration: duration_default,
    ease: ease_default,
    easeVarying: easeVarying_default,
    end: end_default,
    [Symbol.iterator]: selection_prototype[Symbol.iterator]
  };

  // node_modules/d3-ease/src/cubic.js
  function cubicInOut(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
  }

  // node_modules/d3-transition/src/selection/transition.js
  var defaultTiming = {
    time: null,
    delay: 0,
    duration: 250,
    ease: cubicInOut
  };
  function inherit(node2, id2) {
    var timing;
    while (!(timing = node2.__transition) || !(timing = timing[id2])) {
      if (!(node2 = node2.parentNode)) {
        throw new Error(`transition ${id2} not found`);
      }
    }
    return timing;
  }
  function transition_default2(name) {
    var id2, timing;
    if (name instanceof Transition) {
      id2 = name._id, name = name._name;
    } else {
      id2 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
    }
    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node2, i = 0; i < n; ++i) {
        if (node2 = group[i]) {
          schedule_default(node2, name, id2, i, group, timing || inherit(node2, id2));
        }
      }
    }
    return new Transition(groups, this._parents, name, id2);
  }

  // node_modules/d3-transition/src/selection/index.js
  selection_default.prototype.interrupt = interrupt_default2;
  selection_default.prototype.transition = transition_default2;

  // node_modules/d3-brush/src/brush.js
  var { abs, max: max2, min } = Math;
  function number1(e) {
    return [+e[0], +e[1]];
  }
  function number22(e) {
    return [number1(e[0]), number1(e[1])];
  }
  var X = {
    name: "x",
    handles: ["w", "e"].map(type),
    input: function(x3, e) {
      return x3 == null ? null : [[+x3[0], e[0][1]], [+x3[1], e[1][1]]];
    },
    output: function(xy) {
      return xy && [xy[0][0], xy[1][0]];
    }
  };
  var Y = {
    name: "y",
    handles: ["n", "s"].map(type),
    input: function(y3, e) {
      return y3 == null ? null : [[e[0][0], +y3[0]], [e[1][0], +y3[1]]];
    },
    output: function(xy) {
      return xy && [xy[0][1], xy[1][1]];
    }
  };
  var XY = {
    name: "xy",
    handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(type),
    input: function(xy) {
      return xy == null ? null : number22(xy);
    },
    output: function(xy) {
      return xy;
    }
  };
  function type(t) {
    return { type: t };
  }

  // node_modules/d3-path/src/path.js
  var pi = Math.PI;
  var tau = 2 * pi;
  var epsilon3 = 1e-6;
  var tauEpsilon = tau - epsilon3;
  function Path() {
    this._x0 = this._y0 = this._x1 = this._y1 = null;
    this._ = "";
  }
  function path() {
    return new Path();
  }
  Path.prototype = path.prototype = {
    constructor: Path,
    moveTo: function(x3, y3) {
      this._ += "M" + (this._x0 = this._x1 = +x3) + "," + (this._y0 = this._y1 = +y3);
    },
    closePath: function() {
      if (this._x1 !== null) {
        this._x1 = this._x0, this._y1 = this._y0;
        this._ += "Z";
      }
    },
    lineTo: function(x3, y3) {
      this._ += "L" + (this._x1 = +x3) + "," + (this._y1 = +y3);
    },
    quadraticCurveTo: function(x1, y1, x3, y3) {
      this._ += "Q" + +x1 + "," + +y1 + "," + (this._x1 = +x3) + "," + (this._y1 = +y3);
    },
    bezierCurveTo: function(x1, y1, x22, y22, x3, y3) {
      this._ += "C" + +x1 + "," + +y1 + "," + +x22 + "," + +y22 + "," + (this._x1 = +x3) + "," + (this._y1 = +y3);
    },
    arcTo: function(x1, y1, x22, y22, r2) {
      x1 = +x1, y1 = +y1, x22 = +x22, y22 = +y22, r2 = +r2;
      var x0 = this._x1, y0 = this._y1, x21 = x22 - x1, y21 = y22 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
      if (r2 < 0)
        throw new Error("negative radius: " + r2);
      if (this._x1 === null) {
        this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
      } else if (!(l01_2 > epsilon3))
        ;
      else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon3) || !r2) {
        this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
      } else {
        var x20 = x22 - x0, y20 = y22 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r2 * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
        if (Math.abs(t01 - 1) > epsilon3) {
          this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
        }
        this._ += "A" + r2 + "," + r2 + ",0,0," + +(y01 * x20 > x01 * y20) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
      }
    },
    arc: function(x3, y3, r2, a0, a1, ccw) {
      x3 = +x3, y3 = +y3, r2 = +r2, ccw = !!ccw;
      var dx = r2 * Math.cos(a0), dy = r2 * Math.sin(a0), x0 = x3 + dx, y0 = y3 + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
      if (r2 < 0)
        throw new Error("negative radius: " + r2);
      if (this._x1 === null) {
        this._ += "M" + x0 + "," + y0;
      } else if (Math.abs(this._x1 - x0) > epsilon3 || Math.abs(this._y1 - y0) > epsilon3) {
        this._ += "L" + x0 + "," + y0;
      }
      if (!r2)
        return;
      if (da < 0)
        da = da % tau + tau;
      if (da > tauEpsilon) {
        this._ += "A" + r2 + "," + r2 + ",0,1," + cw + "," + (x3 - dx) + "," + (y3 - dy) + "A" + r2 + "," + r2 + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
      } else if (da > epsilon3) {
        this._ += "A" + r2 + "," + r2 + ",0," + +(da >= pi) + "," + cw + "," + (this._x1 = x3 + r2 * Math.cos(a1)) + "," + (this._y1 = y3 + r2 * Math.sin(a1));
      }
    },
    rect: function(x3, y3, w, h) {
      this._ += "M" + (this._x0 = this._x1 = +x3) + "," + (this._y0 = this._y1 = +y3) + "h" + +w + "v" + +h + "h" + -w + "Z";
    },
    toString: function() {
      return this._;
    }
  };
  var path_default = path;

  // node_modules/d3-dsv/src/dsv.js
  var EOL = {};
  var EOF = {};
  var QUOTE = 34;
  var NEWLINE = 10;
  var RETURN = 13;
  function objectConverter(columns) {
    return new Function("d", "return {" + columns.map(function(name, i) {
      return JSON.stringify(name) + ": d[" + i + '] || ""';
    }).join(",") + "}");
  }
  function customConverter(columns, f) {
    var object = objectConverter(columns);
    return function(row, i) {
      return f(object(row), i, columns);
    };
  }
  function inferColumns(rows) {
    var columnSet = /* @__PURE__ */ Object.create(null), columns = [];
    rows.forEach(function(row) {
      for (var column2 in row) {
        if (!(column2 in columnSet)) {
          columns.push(columnSet[column2] = column2);
        }
      }
    });
    return columns;
  }
  function pad(value, width2) {
    var s = value + "", length2 = s.length;
    return length2 < width2 ? new Array(width2 - length2 + 1).join(0) + s : s;
  }
  function formatYear(year) {
    return year < 0 ? "-" + pad(-year, 6) : year > 9999 ? "+" + pad(year, 6) : pad(year, 4);
  }
  function formatDate(date) {
    var hours = date.getUTCHours(), minutes = date.getUTCMinutes(), seconds = date.getUTCSeconds(), milliseconds = date.getUTCMilliseconds();
    return isNaN(date) ? "Invalid Date" : formatYear(date.getUTCFullYear(), 4) + "-" + pad(date.getUTCMonth() + 1, 2) + "-" + pad(date.getUTCDate(), 2) + (milliseconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "." + pad(milliseconds, 3) + "Z" : seconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "Z" : minutes || hours ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + "Z" : "");
  }
  function dsv_default(delimiter2) {
    var reFormat = new RegExp('["' + delimiter2 + "\n\r]"), DELIMITER = delimiter2.charCodeAt(0);
    function parse2(text, f) {
      var convert, columns, rows = parseRows(text, function(row, i) {
        if (convert)
          return convert(row, i - 1);
        columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
      });
      rows.columns = columns || [];
      return rows;
    }
    function parseRows(text, f) {
      var rows = [], N = text.length, I = 0, n = 0, t, eof = N <= 0, eol = false;
      if (text.charCodeAt(N - 1) === NEWLINE)
        --N;
      if (text.charCodeAt(N - 1) === RETURN)
        --N;
      function token2() {
        if (eof)
          return EOF;
        if (eol)
          return eol = false, EOL;
        var i, j = I, c;
        if (text.charCodeAt(j) === QUOTE) {
          while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE)
            ;
          if ((i = I) >= N)
            eof = true;
          else if ((c = text.charCodeAt(I++)) === NEWLINE)
            eol = true;
          else if (c === RETURN) {
            eol = true;
            if (text.charCodeAt(I) === NEWLINE)
              ++I;
          }
          return text.slice(j + 1, i - 1).replace(/""/g, '"');
        }
        while (I < N) {
          if ((c = text.charCodeAt(i = I++)) === NEWLINE)
            eol = true;
          else if (c === RETURN) {
            eol = true;
            if (text.charCodeAt(I) === NEWLINE)
              ++I;
          } else if (c !== DELIMITER)
            continue;
          return text.slice(j, i);
        }
        return eof = true, text.slice(j, N);
      }
      while ((t = token2()) !== EOF) {
        var row = [];
        while (t !== EOL && t !== EOF)
          row.push(t), t = token2();
        if (f && (row = f(row, n++)) == null)
          continue;
        rows.push(row);
      }
      return rows;
    }
    function preformatBody(rows, columns) {
      return rows.map(function(row) {
        return columns.map(function(column2) {
          return formatValue(row[column2]);
        }).join(delimiter2);
      });
    }
    function format2(rows, columns) {
      if (columns == null)
        columns = inferColumns(rows);
      return [columns.map(formatValue).join(delimiter2)].concat(preformatBody(rows, columns)).join("\n");
    }
    function formatBody(rows, columns) {
      if (columns == null)
        columns = inferColumns(rows);
      return preformatBody(rows, columns).join("\n");
    }
    function formatRows(rows) {
      return rows.map(formatRow).join("\n");
    }
    function formatRow(row) {
      return row.map(formatValue).join(delimiter2);
    }
    function formatValue(value) {
      return value == null ? "" : value instanceof Date ? formatDate(value) : reFormat.test(value += "") ? '"' + value.replace(/"/g, '""') + '"' : value;
    }
    return {
      parse: parse2,
      parseRows,
      format: format2,
      formatBody,
      formatRows,
      formatRow,
      formatValue
    };
  }

  // node_modules/d3-dsv/src/csv.js
  var csv = dsv_default(",");
  var csvParse = csv.parse;
  var csvParseRows = csv.parseRows;
  var csvFormat = csv.format;
  var csvFormatBody = csv.formatBody;
  var csvFormatRows = csv.formatRows;
  var csvFormatRow = csv.formatRow;
  var csvFormatValue = csv.formatValue;

  // node_modules/d3-dsv/src/tsv.js
  var tsv = dsv_default("	");
  var tsvParse = tsv.parse;
  var tsvParseRows = tsv.parseRows;
  var tsvFormat = tsv.format;
  var tsvFormatBody = tsv.formatBody;
  var tsvFormatRows = tsv.formatRows;
  var tsvFormatRow = tsv.formatRow;
  var tsvFormatValue = tsv.formatValue;

  // node_modules/d3-fetch/src/text.js
  function responseText(response) {
    if (!response.ok)
      throw new Error(response.status + " " + response.statusText);
    return response.text();
  }
  function text_default3(input, init2) {
    return fetch(input, init2).then(responseText);
  }

  // node_modules/d3-fetch/src/dsv.js
  function dsvParse(parse2) {
    return function(input, init2, row) {
      if (arguments.length === 2 && typeof init2 === "function")
        row = init2, init2 = void 0;
      return text_default3(input, init2).then(function(response) {
        return parse2(response, row);
      });
    };
  }
  var csv2 = dsvParse(csvParse);
  var tsv2 = dsvParse(tsvParse);

  // node_modules/d3-format/src/formatDecimal.js
  function formatDecimal_default(x3) {
    return Math.abs(x3 = Math.round(x3)) >= 1e21 ? x3.toLocaleString("en").replace(/,/g, "") : x3.toString(10);
  }
  function formatDecimalParts(x3, p) {
    if ((i = (x3 = p ? x3.toExponential(p - 1) : x3.toExponential()).indexOf("e")) < 0)
      return null;
    var i, coefficient = x3.slice(0, i);
    return [
      coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
      +x3.slice(i + 1)
    ];
  }

  // node_modules/d3-format/src/exponent.js
  function exponent_default(x3) {
    return x3 = formatDecimalParts(Math.abs(x3)), x3 ? x3[1] : NaN;
  }

  // node_modules/d3-format/src/formatGroup.js
  function formatGroup_default(grouping, thousands) {
    return function(value, width2) {
      var i = value.length, t = [], j = 0, g = grouping[0], length2 = 0;
      while (i > 0 && g > 0) {
        if (length2 + g + 1 > width2)
          g = Math.max(1, width2 - length2);
        t.push(value.substring(i -= g, i + g));
        if ((length2 += g + 1) > width2)
          break;
        g = grouping[j = (j + 1) % grouping.length];
      }
      return t.reverse().join(thousands);
    };
  }

  // node_modules/d3-format/src/formatNumerals.js
  function formatNumerals_default(numerals) {
    return function(value) {
      return value.replace(/[0-9]/g, function(i) {
        return numerals[+i];
      });
    };
  }

  // node_modules/d3-format/src/formatSpecifier.js
  var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
  function formatSpecifier(specifier) {
    if (!(match2 = re.exec(specifier)))
      throw new Error("invalid format: " + specifier);
    var match2;
    return new FormatSpecifier({
      fill: match2[1],
      align: match2[2],
      sign: match2[3],
      symbol: match2[4],
      zero: match2[5],
      width: match2[6],
      comma: match2[7],
      precision: match2[8] && match2[8].slice(1),
      trim: match2[9],
      type: match2[10]
    });
  }
  formatSpecifier.prototype = FormatSpecifier.prototype;
  function FormatSpecifier(specifier) {
    this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
    this.align = specifier.align === void 0 ? ">" : specifier.align + "";
    this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
    this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
    this.zero = !!specifier.zero;
    this.width = specifier.width === void 0 ? void 0 : +specifier.width;
    this.comma = !!specifier.comma;
    this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
    this.trim = !!specifier.trim;
    this.type = specifier.type === void 0 ? "" : specifier.type + "";
  }
  FormatSpecifier.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
  };

  // node_modules/d3-format/src/formatTrim.js
  function formatTrim_default(s) {
    out:
      for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
        switch (s[i]) {
          case ".":
            i0 = i1 = i;
            break;
          case "0":
            if (i0 === 0)
              i0 = i;
            i1 = i;
            break;
          default:
            if (!+s[i])
              break out;
            if (i0 > 0)
              i0 = 0;
            break;
        }
      }
    return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
  }

  // node_modules/d3-format/src/formatPrefixAuto.js
  var prefixExponent;
  function formatPrefixAuto_default(x3, p) {
    var d = formatDecimalParts(x3, p);
    if (!d)
      return x3 + "";
    var coefficient = d[0], exponent = d[1], i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1, n = coefficient.length;
    return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimalParts(x3, Math.max(0, p + i - 1))[0];
  }

  // node_modules/d3-format/src/formatRounded.js
  function formatRounded_default(x3, p) {
    var d = formatDecimalParts(x3, p);
    if (!d)
      return x3 + "";
    var coefficient = d[0], exponent = d[1];
    return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
  }

  // node_modules/d3-format/src/formatTypes.js
  var formatTypes_default = {
    "%": (x3, p) => (x3 * 100).toFixed(p),
    "b": (x3) => Math.round(x3).toString(2),
    "c": (x3) => x3 + "",
    "d": formatDecimal_default,
    "e": (x3, p) => x3.toExponential(p),
    "f": (x3, p) => x3.toFixed(p),
    "g": (x3, p) => x3.toPrecision(p),
    "o": (x3) => Math.round(x3).toString(8),
    "p": (x3, p) => formatRounded_default(x3 * 100, p),
    "r": formatRounded_default,
    "s": formatPrefixAuto_default,
    "X": (x3) => Math.round(x3).toString(16).toUpperCase(),
    "x": (x3) => Math.round(x3).toString(16)
  };

  // node_modules/d3-format/src/identity.js
  function identity_default2(x3) {
    return x3;
  }

  // node_modules/d3-format/src/locale.js
  var map = Array.prototype.map;
  var prefixes = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
  function locale_default(locale2) {
    var group = locale2.grouping === void 0 || locale2.thousands === void 0 ? identity_default2 : formatGroup_default(map.call(locale2.grouping, Number), locale2.thousands + ""), currencyPrefix = locale2.currency === void 0 ? "" : locale2.currency[0] + "", currencySuffix = locale2.currency === void 0 ? "" : locale2.currency[1] + "", decimal = locale2.decimal === void 0 ? "." : locale2.decimal + "", numerals = locale2.numerals === void 0 ? identity_default2 : formatNumerals_default(map.call(locale2.numerals, String)), percent = locale2.percent === void 0 ? "%" : locale2.percent + "", minus = locale2.minus === void 0 ? "\u2212" : locale2.minus + "", nan = locale2.nan === void 0 ? "NaN" : locale2.nan + "";
    function newFormat(specifier) {
      specifier = formatSpecifier(specifier);
      var fill = specifier.fill, align = specifier.align, sign = specifier.sign, symbol = specifier.symbol, zero2 = specifier.zero, width2 = specifier.width, comma = specifier.comma, precision = specifier.precision, trim2 = specifier.trim, type2 = specifier.type;
      if (type2 === "n")
        comma = true, type2 = "g";
      else if (!formatTypes_default[type2])
        precision === void 0 && (precision = 12), trim2 = true, type2 = "g";
      if (zero2 || fill === "0" && align === "=")
        zero2 = true, fill = "0", align = "=";
      var prefix2 = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type2) ? "0" + type2.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type2) ? percent : "";
      var formatType = formatTypes_default[type2], maybeSuffix = /[defgprs%]/.test(type2);
      precision = precision === void 0 ? 6 : /[gprs]/.test(type2) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
      function format2(value) {
        var valuePrefix = prefix2, valueSuffix = suffix, i, n, c;
        if (type2 === "c") {
          valueSuffix = formatType(value) + valueSuffix;
          value = "";
        } else {
          value = +value;
          var valueNegative = value < 0 || 1 / value < 0;
          value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
          if (trim2)
            value = formatTrim_default(value);
          if (valueNegative && +value === 0 && sign !== "+")
            valueNegative = false;
          valuePrefix = (valueNegative ? sign === "(" ? sign : minus : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
          valueSuffix = (type2 === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");
          if (maybeSuffix) {
            i = -1, n = value.length;
            while (++i < n) {
              if (c = value.charCodeAt(i), 48 > c || c > 57) {
                valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
                value = value.slice(0, i);
                break;
              }
            }
          }
        }
        if (comma && !zero2)
          value = group(value, Infinity);
        var length2 = valuePrefix.length + value.length + valueSuffix.length, padding2 = length2 < width2 ? new Array(width2 - length2 + 1).join(fill) : "";
        if (comma && zero2)
          value = group(padding2 + value, padding2.length ? width2 - valueSuffix.length : Infinity), padding2 = "";
        switch (align) {
          case "<":
            value = valuePrefix + value + valueSuffix + padding2;
            break;
          case "=":
            value = valuePrefix + padding2 + value + valueSuffix;
            break;
          case "^":
            value = padding2.slice(0, length2 = padding2.length >> 1) + valuePrefix + value + valueSuffix + padding2.slice(length2);
            break;
          default:
            value = padding2 + valuePrefix + value + valueSuffix;
            break;
        }
        return numerals(value);
      }
      format2.toString = function() {
        return specifier + "";
      };
      return format2;
    }
    function formatPrefix2(specifier, value) {
      var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3, k = Math.pow(10, -e), prefix2 = prefixes[8 + e / 3];
      return function(value2) {
        return f(k * value2) + prefix2;
      };
    }
    return {
      format: newFormat,
      formatPrefix: formatPrefix2
    };
  }

  // node_modules/d3-format/src/defaultLocale.js
  var locale;
  var format;
  var formatPrefix;
  defaultLocale({
    thousands: ",",
    grouping: [3],
    currency: ["$", ""]
  });
  function defaultLocale(definition) {
    locale = locale_default(definition);
    format = locale.format;
    formatPrefix = locale.formatPrefix;
    return locale;
  }

  // node_modules/d3-format/src/precisionFixed.js
  function precisionFixed_default(step) {
    return Math.max(0, -exponent_default(Math.abs(step)));
  }

  // node_modules/d3-format/src/precisionPrefix.js
  function precisionPrefix_default(step, value) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3 - exponent_default(Math.abs(step)));
  }

  // node_modules/d3-format/src/precisionRound.js
  function precisionRound_default(step, max3) {
    step = Math.abs(step), max3 = Math.abs(max3) - step;
    return Math.max(0, exponent_default(max3) - exponent_default(step)) + 1;
  }

  // node_modules/d3-scale/src/init.js
  function initRange(domain, range2) {
    switch (arguments.length) {
      case 0:
        break;
      case 1:
        this.range(domain);
        break;
      default:
        this.range(range2).domain(domain);
        break;
    }
    return this;
  }

  // node_modules/d3-scale/src/ordinal.js
  var implicit = Symbol("implicit");
  function ordinal() {
    var index = new InternMap(), domain = [], range2 = [], unknown = implicit;
    function scale(d) {
      let i = index.get(d);
      if (i === void 0) {
        if (unknown !== implicit)
          return unknown;
        index.set(d, i = domain.push(d) - 1);
      }
      return range2[i % range2.length];
    }
    scale.domain = function(_2) {
      if (!arguments.length)
        return domain.slice();
      domain = [], index = new InternMap();
      for (const value of _2) {
        if (index.has(value))
          continue;
        index.set(value, domain.push(value) - 1);
      }
      return scale;
    };
    scale.range = function(_2) {
      return arguments.length ? (range2 = Array.from(_2), scale) : range2.slice();
    };
    scale.unknown = function(_2) {
      return arguments.length ? (unknown = _2, scale) : unknown;
    };
    scale.copy = function() {
      return ordinal(domain, range2).unknown(unknown);
    };
    initRange.apply(scale, arguments);
    return scale;
  }

  // node_modules/d3-scale/src/band.js
  function band() {
    var scale = ordinal().unknown(void 0), domain = scale.domain, ordinalRange = scale.range, r0 = 0, r1 = 1, step, bandwidth, round2 = false, paddingInner = 0, paddingOuter = 0, align = 0.5;
    delete scale.unknown;
    function rescale() {
      var n = domain().length, reverse = r1 < r0, start2 = reverse ? r1 : r0, stop = reverse ? r0 : r1;
      step = (stop - start2) / Math.max(1, n - paddingInner + paddingOuter * 2);
      if (round2)
        step = Math.floor(step);
      start2 += (stop - start2 - step * (n - paddingInner)) * align;
      bandwidth = step * (1 - paddingInner);
      if (round2)
        start2 = Math.round(start2), bandwidth = Math.round(bandwidth);
      var values3 = range(n).map(function(i) {
        return start2 + step * i;
      });
      return ordinalRange(reverse ? values3.reverse() : values3);
    }
    scale.domain = function(_2) {
      return arguments.length ? (domain(_2), rescale()) : domain();
    };
    scale.range = function(_2) {
      return arguments.length ? ([r0, r1] = _2, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
    };
    scale.rangeRound = function(_2) {
      return [r0, r1] = _2, r0 = +r0, r1 = +r1, round2 = true, rescale();
    };
    scale.bandwidth = function() {
      return bandwidth;
    };
    scale.step = function() {
      return step;
    };
    scale.round = function(_2) {
      return arguments.length ? (round2 = !!_2, rescale()) : round2;
    };
    scale.padding = function(_2) {
      return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_2), rescale()) : paddingInner;
    };
    scale.paddingInner = function(_2) {
      return arguments.length ? (paddingInner = Math.min(1, _2), rescale()) : paddingInner;
    };
    scale.paddingOuter = function(_2) {
      return arguments.length ? (paddingOuter = +_2, rescale()) : paddingOuter;
    };
    scale.align = function(_2) {
      return arguments.length ? (align = Math.max(0, Math.min(1, _2)), rescale()) : align;
    };
    scale.copy = function() {
      return band(domain(), [r0, r1]).round(round2).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
    };
    return initRange.apply(rescale(), arguments);
  }
  function pointish(scale) {
    var copy3 = scale.copy;
    scale.padding = scale.paddingOuter;
    delete scale.paddingInner;
    delete scale.paddingOuter;
    scale.copy = function() {
      return pointish(copy3());
    };
    return scale;
  }
  function point() {
    return pointish(band.apply(null, arguments).paddingInner(1));
  }

  // node_modules/d3-scale/src/constant.js
  function constants(x3) {
    return function() {
      return x3;
    };
  }

  // node_modules/d3-scale/src/number.js
  function number3(x3) {
    return +x3;
  }

  // node_modules/d3-scale/src/continuous.js
  var unit = [0, 1];
  function identity2(x3) {
    return x3;
  }
  function normalize(a, b) {
    return (b -= a = +a) ? function(x3) {
      return (x3 - a) / b;
    } : constants(isNaN(b) ? NaN : 0.5);
  }
  function clamper(a, b) {
    var t;
    if (a > b)
      t = a, a = b, b = t;
    return function(x3) {
      return Math.max(a, Math.min(b, x3));
    };
  }
  function bimap(domain, range2, interpolate) {
    var d0 = domain[0], d1 = domain[1], r0 = range2[0], r1 = range2[1];
    if (d1 < d0)
      d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
    else
      d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
    return function(x3) {
      return r0(d0(x3));
    };
  }
  function polymap(domain, range2, interpolate) {
    var j = Math.min(domain.length, range2.length) - 1, d = new Array(j), r2 = new Array(j), i = -1;
    if (domain[j] < domain[0]) {
      domain = domain.slice().reverse();
      range2 = range2.slice().reverse();
    }
    while (++i < j) {
      d[i] = normalize(domain[i], domain[i + 1]);
      r2[i] = interpolate(range2[i], range2[i + 1]);
    }
    return function(x3) {
      var i2 = bisect_default(domain, x3, 1, j) - 1;
      return r2[i2](d[i2](x3));
    };
  }
  function copy(source, target) {
    return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
  }
  function transformer() {
    var domain = unit, range2 = unit, interpolate = value_default, transform3, untransform, unknown, clamp2 = identity2, piecewise, output, input;
    function rescale() {
      var n = Math.min(domain.length, range2.length);
      if (clamp2 !== identity2)
        clamp2 = clamper(domain[0], domain[n - 1]);
      piecewise = n > 2 ? polymap : bimap;
      output = input = null;
      return scale;
    }
    function scale(x3) {
      return x3 == null || isNaN(x3 = +x3) ? unknown : (output || (output = piecewise(domain.map(transform3), range2, interpolate)))(transform3(clamp2(x3)));
    }
    scale.invert = function(y3) {
      return clamp2(untransform((input || (input = piecewise(range2, domain.map(transform3), number_default)))(y3)));
    };
    scale.domain = function(_2) {
      return arguments.length ? (domain = Array.from(_2, number3), rescale()) : domain.slice();
    };
    scale.range = function(_2) {
      return arguments.length ? (range2 = Array.from(_2), rescale()) : range2.slice();
    };
    scale.rangeRound = function(_2) {
      return range2 = Array.from(_2), interpolate = round_default, rescale();
    };
    scale.clamp = function(_2) {
      return arguments.length ? (clamp2 = _2 ? true : identity2, rescale()) : clamp2 !== identity2;
    };
    scale.interpolate = function(_2) {
      return arguments.length ? (interpolate = _2, rescale()) : interpolate;
    };
    scale.unknown = function(_2) {
      return arguments.length ? (unknown = _2, scale) : unknown;
    };
    return function(t, u) {
      transform3 = t, untransform = u;
      return rescale();
    };
  }
  function continuous() {
    return transformer()(identity2, identity2);
  }

  // node_modules/d3-scale/src/tickFormat.js
  function tickFormat(start2, stop, count, specifier) {
    var step = tickStep(start2, stop, count), precision;
    specifier = formatSpecifier(specifier == null ? ",f" : specifier);
    switch (specifier.type) {
      case "s": {
        var value = Math.max(Math.abs(start2), Math.abs(stop));
        if (specifier.precision == null && !isNaN(precision = precisionPrefix_default(step, value)))
          specifier.precision = precision;
        return formatPrefix(specifier, value);
      }
      case "":
      case "e":
      case "g":
      case "p":
      case "r": {
        if (specifier.precision == null && !isNaN(precision = precisionRound_default(step, Math.max(Math.abs(start2), Math.abs(stop)))))
          specifier.precision = precision - (specifier.type === "e");
        break;
      }
      case "f":
      case "%": {
        if (specifier.precision == null && !isNaN(precision = precisionFixed_default(step)))
          specifier.precision = precision - (specifier.type === "%") * 2;
        break;
      }
    }
    return format(specifier);
  }

  // node_modules/d3-scale/src/linear.js
  function linearish(scale) {
    var domain = scale.domain;
    scale.ticks = function(count) {
      var d = domain();
      return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
    };
    scale.tickFormat = function(count, specifier) {
      var d = domain();
      return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
    };
    scale.nice = function(count) {
      if (count == null)
        count = 10;
      var d = domain();
      var i0 = 0;
      var i1 = d.length - 1;
      var start2 = d[i0];
      var stop = d[i1];
      var prestep;
      var step;
      var maxIter = 10;
      if (stop < start2) {
        step = start2, start2 = stop, stop = step;
        step = i0, i0 = i1, i1 = step;
      }
      while (maxIter-- > 0) {
        step = tickIncrement(start2, stop, count);
        if (step === prestep) {
          d[i0] = start2;
          d[i1] = stop;
          return domain(d);
        } else if (step > 0) {
          start2 = Math.floor(start2 / step) * step;
          stop = Math.ceil(stop / step) * step;
        } else if (step < 0) {
          start2 = Math.ceil(start2 * step) / step;
          stop = Math.floor(stop * step) / step;
        } else {
          break;
        }
        prestep = step;
      }
      return scale;
    };
    return scale;
  }
  function linear2() {
    var scale = continuous();
    scale.copy = function() {
      return copy(scale, linear2());
    };
    initRange.apply(scale, arguments);
    return linearish(scale);
  }

  // node_modules/d3-scale/src/nice.js
  function nice(domain, interval2) {
    domain = domain.slice();
    var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], t;
    if (x1 < x0) {
      t = i0, i0 = i1, i1 = t;
      t = x0, x0 = x1, x1 = t;
    }
    domain[i0] = interval2.floor(x0);
    domain[i1] = interval2.ceil(x1);
    return domain;
  }

  // node_modules/d3-scale/src/log.js
  function transformLog(x3) {
    return Math.log(x3);
  }
  function transformExp(x3) {
    return Math.exp(x3);
  }
  function transformLogn(x3) {
    return -Math.log(-x3);
  }
  function transformExpn(x3) {
    return -Math.exp(-x3);
  }
  function pow10(x3) {
    return isFinite(x3) ? +("1e" + x3) : x3 < 0 ? 0 : x3;
  }
  function powp(base) {
    return base === 10 ? pow10 : base === Math.E ? Math.exp : (x3) => Math.pow(base, x3);
  }
  function logp(base) {
    return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), (x3) => Math.log(x3) / base);
  }
  function reflect(f) {
    return (x3, k) => -f(-x3, k);
  }
  function loggish(transform3) {
    const scale = transform3(transformLog, transformExp);
    const domain = scale.domain;
    let base = 10;
    let logs;
    let pows;
    function rescale() {
      logs = logp(base), pows = powp(base);
      if (domain()[0] < 0) {
        logs = reflect(logs), pows = reflect(pows);
        transform3(transformLogn, transformExpn);
      } else {
        transform3(transformLog, transformExp);
      }
      return scale;
    }
    scale.base = function(_2) {
      return arguments.length ? (base = +_2, rescale()) : base;
    };
    scale.domain = function(_2) {
      return arguments.length ? (domain(_2), rescale()) : domain();
    };
    scale.ticks = (count) => {
      const d = domain();
      let u = d[0];
      let v = d[d.length - 1];
      const r2 = v < u;
      if (r2)
        [u, v] = [v, u];
      let i = logs(u);
      let j = logs(v);
      let k;
      let t;
      const n = count == null ? 10 : +count;
      let z = [];
      if (!(base % 1) && j - i < n) {
        i = Math.floor(i), j = Math.ceil(j);
        if (u > 0)
          for (; i <= j; ++i) {
            for (k = 1; k < base; ++k) {
              t = i < 0 ? k / pows(-i) : k * pows(i);
              if (t < u)
                continue;
              if (t > v)
                break;
              z.push(t);
            }
          }
        else
          for (; i <= j; ++i) {
            for (k = base - 1; k >= 1; --k) {
              t = i > 0 ? k / pows(-i) : k * pows(i);
              if (t < u)
                continue;
              if (t > v)
                break;
              z.push(t);
            }
          }
        if (z.length * 2 < n)
          z = ticks(u, v, n);
      } else {
        z = ticks(i, j, Math.min(j - i, n)).map(pows);
      }
      return r2 ? z.reverse() : z;
    };
    scale.tickFormat = (count, specifier) => {
      if (count == null)
        count = 10;
      if (specifier == null)
        specifier = base === 10 ? "s" : ",";
      if (typeof specifier !== "function") {
        if (!(base % 1) && (specifier = formatSpecifier(specifier)).precision == null)
          specifier.trim = true;
        specifier = format(specifier);
      }
      if (count === Infinity)
        return specifier;
      const k = Math.max(1, base * count / scale.ticks().length);
      return (d) => {
        let i = d / pows(Math.round(logs(d)));
        if (i * base < base - 0.5)
          i *= base;
        return i <= k ? specifier(d) : "";
      };
    };
    scale.nice = () => {
      return domain(nice(domain(), {
        floor: (x3) => pows(Math.floor(logs(x3))),
        ceil: (x3) => pows(Math.ceil(logs(x3)))
      }));
    };
    return scale;
  }
  function log() {
    const scale = loggish(transformer()).domain([1, 10]);
    scale.copy = () => copy(scale, log()).base(scale.base());
    initRange.apply(scale, arguments);
    return scale;
  }

  // node_modules/d3-scale-chromatic/src/colors.js
  function colors_default(specifier) {
    var n = specifier.length / 6 | 0, colors2 = new Array(n), i = 0;
    while (i < n)
      colors2[i] = "#" + specifier.slice(i * 6, ++i * 6);
    return colors2;
  }

  // node_modules/d3-scale-chromatic/src/categorical/Tableau10.js
  var Tableau10_default = colors_default("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");

  // node_modules/d3-shape/src/constant.js
  function constant_default4(x3) {
    return function constant() {
      return x3;
    };
  }

  // node_modules/d3-shape/src/math.js
  var epsilon4 = 1e-12;
  var pi2 = Math.PI;
  var halfPi = pi2 / 2;
  var tau2 = 2 * pi2;

  // node_modules/d3-shape/src/array.js
  var slice = Array.prototype.slice;
  function array_default(x3) {
    return typeof x3 === "object" && "length" in x3 ? x3 : Array.from(x3);
  }

  // node_modules/d3-shape/src/curve/linear.js
  function Linear(context) {
    this._context = context;
  }
  Linear.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._point = 0;
    },
    lineEnd: function() {
      if (this._line || this._line !== 0 && this._point === 1)
        this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x3, y3) {
      x3 = +x3, y3 = +y3;
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(x3, y3) : this._context.moveTo(x3, y3);
          break;
        case 1:
          this._point = 2;
        default:
          this._context.lineTo(x3, y3);
          break;
      }
    }
  };
  function linear_default(context) {
    return new Linear(context);
  }

  // node_modules/d3-shape/src/point.js
  function x2(p) {
    return p[0];
  }
  function y2(p) {
    return p[1];
  }

  // node_modules/d3-shape/src/line.js
  function line_default(x3, y3) {
    var defined = constant_default4(true), context = null, curve = linear_default, output = null;
    x3 = typeof x3 === "function" ? x3 : x3 === void 0 ? x2 : constant_default4(x3);
    y3 = typeof y3 === "function" ? y3 : y3 === void 0 ? y2 : constant_default4(y3);
    function line2(data2) {
      var i, n = (data2 = array_default(data2)).length, d, defined0 = false, buffer;
      if (context == null)
        output = curve(buffer = path_default());
      for (i = 0; i <= n; ++i) {
        if (!(i < n && defined(d = data2[i], i, data2)) === defined0) {
          if (defined0 = !defined0)
            output.lineStart();
          else
            output.lineEnd();
        }
        if (defined0)
          output.point(+x3(d, i, data2), +y3(d, i, data2));
      }
      if (buffer)
        return output = null, buffer + "" || null;
    }
    line2.x = function(_2) {
      return arguments.length ? (x3 = typeof _2 === "function" ? _2 : constant_default4(+_2), line2) : x3;
    };
    line2.y = function(_2) {
      return arguments.length ? (y3 = typeof _2 === "function" ? _2 : constant_default4(+_2), line2) : y3;
    };
    line2.defined = function(_2) {
      return arguments.length ? (defined = typeof _2 === "function" ? _2 : constant_default4(!!_2), line2) : defined;
    };
    line2.curve = function(_2) {
      return arguments.length ? (curve = _2, context != null && (output = curve(context)), line2) : curve;
    };
    line2.context = function(_2) {
      return arguments.length ? (_2 == null ? context = output = null : output = curve(context = _2), line2) : context;
    };
    return line2;
  }

  // node_modules/d3-shape/src/curve/cardinal.js
  function point2(that, x3, y3) {
    that._context.bezierCurveTo(that._x1 + that._k * (that._x2 - that._x0), that._y1 + that._k * (that._y2 - that._y0), that._x2 + that._k * (that._x1 - x3), that._y2 + that._k * (that._y1 - y3), that._x2, that._y2);
  }
  function Cardinal(context, tension) {
    this._context = context;
    this._k = (1 - tension) / 6;
  }
  Cardinal.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x2, this._y2);
          break;
        case 3:
          point2(this, this._x1, this._y1);
          break;
      }
      if (this._line || this._line !== 0 && this._point === 1)
        this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x3, y3) {
      x3 = +x3, y3 = +y3;
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(x3, y3) : this._context.moveTo(x3, y3);
          break;
        case 1:
          this._point = 2;
          this._x1 = x3, this._y1 = y3;
          break;
        case 2:
          this._point = 3;
        default:
          point2(this, x3, y3);
          break;
      }
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x3;
      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y3;
    }
  };
  var cardinal_default = function custom(tension) {
    function cardinal(context) {
      return new Cardinal(context, tension);
    }
    cardinal.tension = function(tension2) {
      return custom(+tension2);
    };
    return cardinal;
  }(0);

  // node_modules/d3-shape/src/curve/catmullRom.js
  function point3(that, x3, y3) {
    var x1 = that._x1, y1 = that._y1, x22 = that._x2, y22 = that._y2;
    if (that._l01_a > epsilon4) {
      var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a, n = 3 * that._l01_a * (that._l01_a + that._l12_a);
      x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
      y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
    }
    if (that._l23_a > epsilon4) {
      var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a, m = 3 * that._l23_a * (that._l23_a + that._l12_a);
      x22 = (x22 * b + that._x1 * that._l23_2a - x3 * that._l12_2a) / m;
      y22 = (y22 * b + that._y1 * that._l23_2a - y3 * that._l12_2a) / m;
    }
    that._context.bezierCurveTo(x1, y1, x22, y22, that._x2, that._y2);
  }
  function CatmullRom(context, alpha2) {
    this._context = context;
    this._alpha = alpha2;
  }
  CatmullRom.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
      this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x2, this._y2);
          break;
        case 3:
          this.point(this._x2, this._y2);
          break;
      }
      if (this._line || this._line !== 0 && this._point === 1)
        this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x3, y3) {
      x3 = +x3, y3 = +y3;
      if (this._point) {
        var x23 = this._x2 - x3, y23 = this._y2 - y3;
        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
      }
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(x3, y3) : this._context.moveTo(x3, y3);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
        default:
          point3(this, x3, y3);
          break;
      }
      this._l01_a = this._l12_a, this._l12_a = this._l23_a;
      this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x3;
      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y3;
    }
  };
  var catmullRom_default = function custom2(alpha2) {
    function catmullRom(context) {
      return alpha2 ? new CatmullRom(context, alpha2) : new Cardinal(context, 0);
    }
    catmullRom.alpha = function(alpha3) {
      return custom2(+alpha3);
    };
    return catmullRom;
  }(0.5);

  // node_modules/d3-zoom/src/constant.js
  var constant_default5 = (x3) => () => x3;

  // node_modules/d3-zoom/src/event.js
  function ZoomEvent(type2, {
    sourceEvent,
    target,
    transform: transform3,
    dispatch: dispatch2
  }) {
    Object.defineProperties(this, {
      type: { value: type2, enumerable: true, configurable: true },
      sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
      target: { value: target, enumerable: true, configurable: true },
      transform: { value: transform3, enumerable: true, configurable: true },
      _: { value: dispatch2 }
    });
  }

  // node_modules/d3-zoom/src/transform.js
  function Transform(k, x3, y3) {
    this.k = k;
    this.x = x3;
    this.y = y3;
  }
  Transform.prototype = {
    constructor: Transform,
    scale: function(k) {
      return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
    },
    translate: function(x3, y3) {
      return x3 === 0 & y3 === 0 ? this : new Transform(this.k, this.x + this.k * x3, this.y + this.k * y3);
    },
    apply: function(point4) {
      return [point4[0] * this.k + this.x, point4[1] * this.k + this.y];
    },
    applyX: function(x3) {
      return x3 * this.k + this.x;
    },
    applyY: function(y3) {
      return y3 * this.k + this.y;
    },
    invert: function(location) {
      return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
    },
    invertX: function(x3) {
      return (x3 - this.x) / this.k;
    },
    invertY: function(y3) {
      return (y3 - this.y) / this.k;
    },
    rescaleX: function(x3) {
      return x3.copy().domain(x3.range().map(this.invertX, this).map(x3.invert, x3));
    },
    rescaleY: function(y3) {
      return y3.copy().domain(y3.range().map(this.invertY, this).map(y3.invert, y3));
    },
    toString: function() {
      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
  };
  var identity3 = new Transform(1, 0, 0);
  transform.prototype = Transform.prototype;
  function transform(node2) {
    while (!node2.__zoom)
      if (!(node2 = node2.parentNode))
        return identity3;
    return node2.__zoom;
  }

  // node_modules/d3-zoom/src/noevent.js
  function nopropagation2(event) {
    event.stopImmediatePropagation();
  }
  function noevent_default3(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  // node_modules/d3-zoom/src/zoom.js
  function defaultFilter(event) {
    return (!event.ctrlKey || event.type === "wheel") && !event.button;
  }
  function defaultExtent() {
    var e = this;
    if (e instanceof SVGElement) {
      e = e.ownerSVGElement || e;
      if (e.hasAttribute("viewBox")) {
        e = e.viewBox.baseVal;
        return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
      }
      return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
    }
    return [[0, 0], [e.clientWidth, e.clientHeight]];
  }
  function defaultTransform() {
    return this.__zoom || identity3;
  }
  function defaultWheelDelta(event) {
    return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3) * (event.ctrlKey ? 10 : 1);
  }
  function defaultTouchable() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }
  function defaultConstrain(transform3, extent2, translateExtent) {
    var dx0 = transform3.invertX(extent2[0][0]) - translateExtent[0][0], dx1 = transform3.invertX(extent2[1][0]) - translateExtent[1][0], dy0 = transform3.invertY(extent2[0][1]) - translateExtent[0][1], dy1 = transform3.invertY(extent2[1][1]) - translateExtent[1][1];
    return transform3.translate(dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1), dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1));
  }
  function zoom_default2() {
    var filter2 = defaultFilter, extent2 = defaultExtent, constrain = defaultConstrain, wheelDelta = defaultWheelDelta, touchable = defaultTouchable, scaleExtent = [0, Infinity], translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]], duration2 = 250, interpolate = zoom_default, listeners = dispatch_default("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
    function zoom(selection2) {
      selection2.property("__zoom", defaultTransform).on("wheel.zoom", wheeled, { passive: false }).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    zoom.transform = function(collection, transform3, point4, event) {
      var selection2 = collection.selection ? collection.selection() : collection;
      selection2.property("__zoom", defaultTransform);
      if (collection !== selection2) {
        schedule(collection, transform3, point4, event);
      } else {
        selection2.interrupt().each(function() {
          gesture(this, arguments).event(event).start().zoom(null, typeof transform3 === "function" ? transform3.apply(this, arguments) : transform3).end();
        });
      }
    };
    zoom.scaleBy = function(selection2, k, p, event) {
      zoom.scaleTo(selection2, function() {
        var k0 = this.__zoom.k, k1 = typeof k === "function" ? k.apply(this, arguments) : k;
        return k0 * k1;
      }, p, event);
    };
    zoom.scaleTo = function(selection2, k, p, event) {
      zoom.transform(selection2, function() {
        var e = extent2.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
        return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
      }, p, event);
    };
    zoom.translateBy = function(selection2, x3, y3, event) {
      zoom.transform(selection2, function() {
        return constrain(this.__zoom.translate(typeof x3 === "function" ? x3.apply(this, arguments) : x3, typeof y3 === "function" ? y3.apply(this, arguments) : y3), extent2.apply(this, arguments), translateExtent);
      }, null, event);
    };
    zoom.translateTo = function(selection2, x3, y3, p, event) {
      zoom.transform(selection2, function() {
        var e = extent2.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
        return constrain(identity3.translate(p0[0], p0[1]).scale(t.k).translate(typeof x3 === "function" ? -x3.apply(this, arguments) : -x3, typeof y3 === "function" ? -y3.apply(this, arguments) : -y3), e, translateExtent);
      }, p, event);
    };
    function scale(transform3, k) {
      k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
      return k === transform3.k ? transform3 : new Transform(k, transform3.x, transform3.y);
    }
    function translate(transform3, p0, p1) {
      var x3 = p0[0] - p1[0] * transform3.k, y3 = p0[1] - p1[1] * transform3.k;
      return x3 === transform3.x && y3 === transform3.y ? transform3 : new Transform(transform3.k, x3, y3);
    }
    function centroid(extent3) {
      return [(+extent3[0][0] + +extent3[1][0]) / 2, (+extent3[0][1] + +extent3[1][1]) / 2];
    }
    function schedule(transition2, transform3, point4, event) {
      transition2.on("start.zoom", function() {
        gesture(this, arguments).event(event).start();
      }).on("interrupt.zoom end.zoom", function() {
        gesture(this, arguments).event(event).end();
      }).tween("zoom", function() {
        var that = this, args = arguments, g = gesture(that, args).event(event), e = extent2.apply(that, args), p = point4 == null ? centroid(e) : typeof point4 === "function" ? point4.apply(that, args) : point4, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a = that.__zoom, b = typeof transform3 === "function" ? transform3.apply(that, args) : transform3, i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
        return function(t) {
          if (t === 1)
            t = b;
          else {
            var l = i(t), k = w / l[2];
            t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k);
          }
          g.zoom(null, t);
        };
      });
    }
    function gesture(that, args, clean) {
      return !clean && that.__zooming || new Gesture(that, args);
    }
    function Gesture(that, args) {
      this.that = that;
      this.args = args;
      this.active = 0;
      this.sourceEvent = null;
      this.extent = extent2.apply(that, args);
      this.taps = 0;
    }
    Gesture.prototype = {
      event: function(event) {
        if (event)
          this.sourceEvent = event;
        return this;
      },
      start: function() {
        if (++this.active === 1) {
          this.that.__zooming = this;
          this.emit("start");
        }
        return this;
      },
      zoom: function(key, transform3) {
        if (this.mouse && key !== "mouse")
          this.mouse[1] = transform3.invert(this.mouse[0]);
        if (this.touch0 && key !== "touch")
          this.touch0[1] = transform3.invert(this.touch0[0]);
        if (this.touch1 && key !== "touch")
          this.touch1[1] = transform3.invert(this.touch1[0]);
        this.that.__zoom = transform3;
        this.emit("zoom");
        return this;
      },
      end: function() {
        if (--this.active === 0) {
          delete this.that.__zooming;
          this.emit("end");
        }
        return this;
      },
      emit: function(type2) {
        var d = select_default2(this.that).datum();
        listeners.call(type2, this.that, new ZoomEvent(type2, {
          sourceEvent: this.sourceEvent,
          target: zoom,
          type: type2,
          transform: this.that.__zoom,
          dispatch: listeners
        }), d);
      }
    };
    function wheeled(event, ...args) {
      if (!filter2.apply(this, arguments))
        return;
      var g = gesture(this, args).event(event), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p = pointer_default(event);
      if (g.wheel) {
        if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
          g.mouse[1] = t.invert(g.mouse[0] = p);
        }
        clearTimeout(g.wheel);
      } else if (t.k === k)
        return;
      else {
        g.mouse = [p, t.invert(p)];
        interrupt_default(this);
        g.start();
      }
      noevent_default3(event);
      g.wheel = setTimeout(wheelidled, wheelDelay);
      g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
      function wheelidled() {
        g.wheel = null;
        g.end();
      }
    }
    function mousedowned(event, ...args) {
      if (touchending || !filter2.apply(this, arguments))
        return;
      var currentTarget = event.currentTarget, g = gesture(this, args, true).event(event), v = select_default2(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = pointer_default(event, currentTarget), x0 = event.clientX, y0 = event.clientY;
      nodrag_default(event.view);
      nopropagation2(event);
      g.mouse = [p, this.__zoom.invert(p)];
      interrupt_default(this);
      g.start();
      function mousemoved(event2) {
        noevent_default3(event2);
        if (!g.moved) {
          var dx = event2.clientX - x0, dy = event2.clientY - y0;
          g.moved = dx * dx + dy * dy > clickDistance2;
        }
        g.event(event2).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = pointer_default(event2, currentTarget), g.mouse[1]), g.extent, translateExtent));
      }
      function mouseupped(event2) {
        v.on("mousemove.zoom mouseup.zoom", null);
        yesdrag(event2.view, g.moved);
        noevent_default3(event2);
        g.event(event2).end();
      }
    }
    function dblclicked(event, ...args) {
      if (!filter2.apply(this, arguments))
        return;
      var t0 = this.__zoom, p0 = pointer_default(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent2.apply(this, args), translateExtent);
      noevent_default3(event);
      if (duration2 > 0)
        select_default2(this).transition().duration(duration2).call(schedule, t1, p0, event);
      else
        select_default2(this).call(zoom.transform, t1, p0, event);
    }
    function touchstarted(event, ...args) {
      if (!filter2.apply(this, arguments))
        return;
      var touches = event.touches, n = touches.length, g = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
      nopropagation2(event);
      for (i = 0; i < n; ++i) {
        t = touches[i], p = pointer_default(t, this);
        p = [p, this.__zoom.invert(p), t.identifier];
        if (!g.touch0)
          g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
        else if (!g.touch1 && g.touch0[2] !== p[2])
          g.touch1 = p, g.taps = 0;
      }
      if (touchstarting)
        touchstarting = clearTimeout(touchstarting);
      if (started) {
        if (g.taps < 2)
          touchfirst = p[0], touchstarting = setTimeout(function() {
            touchstarting = null;
          }, touchDelay);
        interrupt_default(this);
        g.start();
      }
    }
    function touchmoved(event, ...args) {
      if (!this.__zooming)
        return;
      var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
      noevent_default3(event);
      for (i = 0; i < n; ++i) {
        t = touches[i], p = pointer_default(t, this);
        if (g.touch0 && g.touch0[2] === t.identifier)
          g.touch0[0] = p;
        else if (g.touch1 && g.touch1[2] === t.identifier)
          g.touch1[0] = p;
      }
      t = g.that.__zoom;
      if (g.touch1) {
        var p0 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
        t = scale(t, Math.sqrt(dp / dl));
        p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
        l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
      } else if (g.touch0)
        p = g.touch0[0], l = g.touch0[1];
      else
        return;
      g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
    }
    function touchended(event, ...args) {
      if (!this.__zooming)
        return;
      var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
      nopropagation2(event);
      if (touchending)
        clearTimeout(touchending);
      touchending = setTimeout(function() {
        touchending = null;
      }, touchDelay);
      for (i = 0; i < n; ++i) {
        t = touches[i];
        if (g.touch0 && g.touch0[2] === t.identifier)
          delete g.touch0;
        else if (g.touch1 && g.touch1[2] === t.identifier)
          delete g.touch1;
      }
      if (g.touch1 && !g.touch0)
        g.touch0 = g.touch1, delete g.touch1;
      if (g.touch0)
        g.touch0[1] = this.__zoom.invert(g.touch0[0]);
      else {
        g.end();
        if (g.taps === 2) {
          t = pointer_default(t, this);
          if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
            var p = select_default2(this).on("dblclick.zoom");
            if (p)
              p.apply(this, arguments);
          }
        }
      }
    }
    zoom.wheelDelta = function(_2) {
      return arguments.length ? (wheelDelta = typeof _2 === "function" ? _2 : constant_default5(+_2), zoom) : wheelDelta;
    };
    zoom.filter = function(_2) {
      return arguments.length ? (filter2 = typeof _2 === "function" ? _2 : constant_default5(!!_2), zoom) : filter2;
    };
    zoom.touchable = function(_2) {
      return arguments.length ? (touchable = typeof _2 === "function" ? _2 : constant_default5(!!_2), zoom) : touchable;
    };
    zoom.extent = function(_2) {
      return arguments.length ? (extent2 = typeof _2 === "function" ? _2 : constant_default5([[+_2[0][0], +_2[0][1]], [+_2[1][0], +_2[1][1]]]), zoom) : extent2;
    };
    zoom.scaleExtent = function(_2) {
      return arguments.length ? (scaleExtent[0] = +_2[0], scaleExtent[1] = +_2[1], zoom) : [scaleExtent[0], scaleExtent[1]];
    };
    zoom.translateExtent = function(_2) {
      return arguments.length ? (translateExtent[0][0] = +_2[0][0], translateExtent[1][0] = +_2[1][0], translateExtent[0][1] = +_2[0][1], translateExtent[1][1] = +_2[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
    };
    zoom.constrain = function(_2) {
      return arguments.length ? (constrain = _2, zoom) : constrain;
    };
    zoom.duration = function(_2) {
      return arguments.length ? (duration2 = +_2, zoom) : duration2;
    };
    zoom.interpolate = function(_2) {
      return arguments.length ? (interpolate = _2, zoom) : interpolate;
    };
    zoom.on = function() {
      var value = listeners.on.apply(listeners, arguments);
      return value === listeners ? zoom : value;
    };
    zoom.clickDistance = function(_2) {
      return arguments.length ? (clickDistance2 = (_2 = +_2) * _2, zoom) : Math.sqrt(clickDistance2);
    };
    zoom.tapDistance = function(_2) {
      return arguments.length ? (tapDistance = +_2, zoom) : tapDistance;
    };
    return zoom;
  }

  // node_modules/@babel/runtime/helpers/esm/extends.js
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }

  // node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }

  // node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js
  var import_react5 = __toESM(require_react());

  // node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js
  function memoize(fn) {
    var cache = /* @__PURE__ */ Object.create(null);
    return function(arg) {
      if (cache[arg] === void 0)
        cache[arg] = fn(arg);
      return cache[arg];
    };
  }
  var emotion_memoize_browser_esm_default = memoize;

  // node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.browser.esm.js
  var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
  var isPropValid = /* @__PURE__ */ emotion_memoize_browser_esm_default(function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
  });
  var emotion_is_prop_valid_browser_esm_default = isPropValid;

  // node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js
  var React3 = __toESM(require_react());
  var import_react3 = __toESM(require_react());

  // node_modules/@emotion/react/dist/emotion-react.browser.esm.js
  var React2 = __toESM(require_react());
  var import_react2 = __toESM(require_react());

  // node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js
  function sheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    }
    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  }
  function createStyleElement(options) {
    var tag = document.createElement("style");
    tag.setAttribute("data-emotion", options.key);
    if (options.nonce !== void 0) {
      tag.setAttribute("nonce", options.nonce);
    }
    tag.appendChild(document.createTextNode(""));
    tag.setAttribute("data-s", "");
    return tag;
  }
  var StyleSheet = /* @__PURE__ */ function() {
    function StyleSheet2(options) {
      var _this = this;
      this._insertTag = function(tag) {
        var before;
        if (_this.tags.length === 0) {
          if (_this.insertionPoint) {
            before = _this.insertionPoint.nextSibling;
          } else if (_this.prepend) {
            before = _this.container.firstChild;
          } else {
            before = _this.before;
          }
        } else {
          before = _this.tags[_this.tags.length - 1].nextSibling;
        }
        _this.container.insertBefore(tag, before);
        _this.tags.push(tag);
      };
      this.isSpeedy = options.speedy === void 0 ? false : options.speedy;
      this.tags = [];
      this.ctr = 0;
      this.nonce = options.nonce;
      this.key = options.key;
      this.container = options.container;
      this.prepend = options.prepend;
      this.insertionPoint = options.insertionPoint;
      this.before = null;
    }
    var _proto = StyleSheet2.prototype;
    _proto.hydrate = function hydrate(nodes) {
      nodes.forEach(this._insertTag);
    };
    _proto.insert = function insert(rule) {
      if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
        this._insertTag(createStyleElement(this));
      }
      var tag = this.tags[this.tags.length - 1];
      if (true) {
        var isImportRule3 = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;
        if (isImportRule3 && this._alreadyInsertedOrderInsensitiveRule) {
          console.error("You're attempting to insert the following rule:\n" + rule + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.");
        }
        this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule3;
      }
      if (this.isSpeedy) {
        var sheet = sheetForTag(tag);
        try {
          sheet.insertRule(rule, sheet.cssRules.length);
        } catch (e) {
          if (!/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear){/.test(rule)) {
            console.error('There was a problem inserting the following rule: "' + rule + '"', e);
          }
        }
      } else {
        tag.appendChild(document.createTextNode(rule));
      }
      this.ctr++;
    };
    _proto.flush = function flush() {
      this.tags.forEach(function(tag) {
        return tag.parentNode && tag.parentNode.removeChild(tag);
      });
      this.tags = [];
      this.ctr = 0;
      if (true) {
        this._alreadyInsertedOrderInsensitiveRule = false;
      }
    };
    return StyleSheet2;
  }();

  // node_modules/stylis/src/Enum.js
  var MS = "-ms-";
  var MOZ = "-moz-";
  var WEBKIT = "-webkit-";
  var COMMENT = "comm";
  var RULESET = "rule";
  var DECLARATION = "decl";
  var IMPORT = "@import";
  var KEYFRAMES = "@keyframes";

  // node_modules/stylis/src/Utility.js
  var abs2 = Math.abs;
  var from = String.fromCharCode;
  var assign = Object.assign;
  function hash(value, length2) {
    return (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3);
  }
  function trim(value) {
    return value.trim();
  }
  function match(value, pattern) {
    return (value = pattern.exec(value)) ? value[0] : value;
  }
  function replace(value, pattern, replacement) {
    return value.replace(pattern, replacement);
  }
  function indexof(value, search) {
    return value.indexOf(search);
  }
  function charat(value, index) {
    return value.charCodeAt(index) | 0;
  }
  function substr(value, begin, end) {
    return value.slice(begin, end);
  }
  function strlen(value) {
    return value.length;
  }
  function sizeof(value) {
    return value.length;
  }
  function append(value, array2) {
    return array2.push(value), value;
  }
  function combine(array2, callback) {
    return array2.map(callback).join("");
  }

  // node_modules/stylis/src/Tokenizer.js
  var line = 1;
  var column = 1;
  var length = 0;
  var position = 0;
  var character = 0;
  var characters = "";
  function node(value, root2, parent, type2, props, children2, length2) {
    return { value, root: root2, parent, type: type2, props, children: children2, line, column, length: length2, return: "" };
  }
  function copy2(root2, props) {
    return assign(node("", null, null, "", null, null, 0), root2, { length: -root2.length }, props);
  }
  function char() {
    return character;
  }
  function prev() {
    character = position > 0 ? charat(characters, --position) : 0;
    if (column--, character === 10)
      column = 1, line--;
    return character;
  }
  function next() {
    character = position < length ? charat(characters, position++) : 0;
    if (column++, character === 10)
      column = 1, line++;
    return character;
  }
  function peek() {
    return charat(characters, position);
  }
  function caret() {
    return position;
  }
  function slice2(begin, end) {
    return substr(characters, begin, end);
  }
  function token(type2) {
    switch (type2) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function alloc(value) {
    return line = column = 1, length = strlen(characters = value), position = 0, [];
  }
  function dealloc(value) {
    return characters = "", value;
  }
  function delimit(type2) {
    return trim(slice2(position - 1, delimiter(type2 === 91 ? type2 + 2 : type2 === 40 ? type2 + 1 : type2)));
  }
  function whitespace(type2) {
    while (character = peek())
      if (character < 33)
        next();
      else
        break;
    return token(type2) > 2 || token(character) > 3 ? "" : " ";
  }
  function escaping(index, count) {
    while (--count && next())
      if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
        break;
    return slice2(index, caret() + (count < 6 && peek() == 32 && next() == 32));
  }
  function delimiter(type2) {
    while (next())
      switch (character) {
        case type2:
          return position;
        case 34:
        case 39:
          if (type2 !== 34 && type2 !== 39)
            delimiter(character);
          break;
        case 40:
          if (type2 === 41)
            delimiter(type2);
          break;
        case 92:
          next();
          break;
      }
    return position;
  }
  function commenter(type2, index) {
    while (next())
      if (type2 + character === 47 + 10)
        break;
      else if (type2 + character === 42 + 42 && peek() === 47)
        break;
    return "/*" + slice2(index, position - 1) + "*" + from(type2 === 47 ? type2 : next());
  }
  function identifier(index) {
    while (!token(peek()))
      next();
    return slice2(index, position);
  }

  // node_modules/stylis/src/Parser.js
  function compile(value) {
    return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
  }
  function parse(value, root2, parent, rule, rules, rulesets, pseudo, points, declarations) {
    var index = 0;
    var offset = 0;
    var length2 = pseudo;
    var atrule = 0;
    var property = 0;
    var previous = 0;
    var variable = 1;
    var scanning = 1;
    var ampersand = 1;
    var character2 = 0;
    var type2 = "";
    var props = rules;
    var children2 = rulesets;
    var reference = rule;
    var characters2 = type2;
    while (scanning)
      switch (previous = character2, character2 = next()) {
        case 40:
          if (previous != 108 && characters2.charCodeAt(length2 - 1) == 58) {
            if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
              ampersand = -1;
            break;
          }
        case 34:
        case 39:
        case 91:
          characters2 += delimit(character2);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          characters2 += whitespace(previous);
          break;
        case 92:
          characters2 += escaping(caret() - 1, 7);
          continue;
        case 47:
          switch (peek()) {
            case 42:
            case 47:
              append(comment(commenter(next(), caret()), root2, parent), declarations);
              break;
            default:
              characters2 += "/";
          }
          break;
        case 123 * variable:
          points[index++] = strlen(characters2) * ampersand;
        case 125 * variable:
        case 59:
        case 0:
          switch (character2) {
            case 0:
            case 125:
              scanning = 0;
            case 59 + offset:
              if (property > 0 && strlen(characters2) - length2)
                append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
              break;
            case 59:
              characters2 += ";";
            default:
              append(reference = ruleset(characters2, root2, parent, index, offset, rules, points, type2, props = [], children2 = [], length2), rulesets);
              if (character2 === 123)
                if (offset === 0)
                  parse(characters2, root2, reference, reference, props, rulesets, length2, points, children2);
                else
                  switch (atrule) {
                    case 100:
                    case 109:
                    case 115:
                      parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type2, rules, props = [], length2), children2), rules, children2, length2, points, rule ? props : children2);
                      break;
                    default:
                      parse(characters2, reference, reference, reference, [""], children2, 0, points, children2);
                  }
          }
          index = offset = property = 0, variable = ampersand = 1, type2 = characters2 = "", length2 = pseudo;
          break;
        case 58:
          length2 = 1 + strlen(characters2), property = previous;
        default:
          if (variable < 1) {
            if (character2 == 123)
              --variable;
            else if (character2 == 125 && variable++ == 0 && prev() == 125)
              continue;
          }
          switch (characters2 += from(character2), character2 * variable) {
            case 38:
              ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
              break;
            case 44:
              points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
              break;
            case 64:
              if (peek() === 45)
                characters2 += delimit(next());
              atrule = peek(), offset = length2 = strlen(type2 = characters2 += identifier(caret())), character2++;
              break;
            case 45:
              if (previous === 45 && strlen(characters2) == 2)
                variable = 0;
          }
      }
    return rulesets;
  }
  function ruleset(value, root2, parent, index, offset, rules, points, type2, props, children2, length2) {
    var post = offset - 1;
    var rule = offset === 0 ? rules : [""];
    var size = sizeof(rule);
    for (var i = 0, j = 0, k = 0; i < index; ++i)
      for (var x3 = 0, y3 = substr(value, post + 1, post = abs2(j = points[i])), z = value; x3 < size; ++x3)
        if (z = trim(j > 0 ? rule[x3] + " " + y3 : replace(y3, /&\f/g, rule[x3])))
          props[k++] = z;
    return node(value, root2, parent, offset === 0 ? RULESET : type2, props, children2, length2);
  }
  function comment(value, root2, parent) {
    return node(value, root2, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
  }
  function declaration(value, root2, parent, length2) {
    return node(value, root2, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
  }

  // node_modules/stylis/src/Prefixer.js
  function prefix(value, length2) {
    switch (hash(value, length2)) {
      case 5103:
        return WEBKIT + "print-" + value + value;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return WEBKIT + value + value;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return WEBKIT + value + MOZ + value + MS + value + value;
      case 6828:
      case 4268:
        return WEBKIT + value + MS + value + value;
      case 6165:
        return WEBKIT + value + MS + "flex-" + value + value;
      case 5187:
        return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
      case 5443:
        return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
      case 4675:
        return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
      case 5548:
        return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
      case 5292:
        return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
      case 6060:
        return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
      case 4554:
        return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
      case 6187:
        return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
      case 5495:
      case 3959:
        return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
      case 4968:
        return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (strlen(value) - 1 - length2 > 6)
          switch (charat(value, length2 + 1)) {
            case 109:
              if (charat(value, length2 + 4) !== 45)
                break;
            case 102:
              return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
            case 115:
              return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2) + value : value;
          }
        break;
      case 4949:
        if (charat(value, length2 + 1) !== 115)
          break;
      case 6444:
        switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
          case 107:
            return replace(value, ":", ":" + WEBKIT) + value;
          case 101:
            return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
        }
        break;
      case 5936:
        switch (charat(value, length2 + 11)) {
          case 114:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
          case 108:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
          case 45:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
        }
        return WEBKIT + value + MS + value + value;
    }
    return value;
  }

  // node_modules/stylis/src/Serializer.js
  function serialize(children2, callback) {
    var output = "";
    var length2 = sizeof(children2);
    for (var i = 0; i < length2; i++)
      output += callback(children2[i], i, children2, callback) || "";
    return output;
  }
  function stringify(element, index, children2, callback) {
    switch (element.type) {
      case IMPORT:
      case DECLARATION:
        return element.return = element.return || element.value;
      case COMMENT:
        return "";
      case KEYFRAMES:
        return element.return = element.value + "{" + serialize(element.children, callback) + "}";
      case RULESET:
        element.value = element.props.join(",");
    }
    return strlen(children2 = serialize(element.children, callback)) ? element.return = element.value + "{" + children2 + "}" : "";
  }

  // node_modules/stylis/src/Middleware.js
  function middleware(collection) {
    var length2 = sizeof(collection);
    return function(element, index, children2, callback) {
      var output = "";
      for (var i = 0; i < length2; i++)
        output += collection[i](element, index, children2, callback) || "";
      return output;
    };
  }
  function prefixer(element, index, children2, callback) {
    if (element.length > -1) {
      if (!element.return)
        switch (element.type) {
          case DECLARATION:
            element.return = prefix(element.value, element.length);
            break;
          case KEYFRAMES:
            return serialize([copy2(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
          case RULESET:
            if (element.length)
              return combine(element.props, function(value) {
                switch (match(value, /(::plac\w+|:read-\w+)/)) {
                  case ":read-only":
                  case ":read-write":
                    return serialize([copy2(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] })], callback);
                  case "::placeholder":
                    return serialize([
                      copy2(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }),
                      copy2(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }),
                      copy2(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] })
                    ], callback);
                }
                return "";
              });
        }
    }
  }

  // node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
  var last = function last2(arr) {
    return arr.length ? arr[arr.length - 1] : null;
  };
  var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index) {
    var previous = 0;
    var character2 = 0;
    while (true) {
      previous = character2;
      character2 = peek();
      if (previous === 38 && character2 === 12) {
        points[index] = 1;
      }
      if (token(character2)) {
        break;
      }
      next();
    }
    return slice2(begin, position);
  };
  var toRules = function toRules2(parsed, points) {
    var index = -1;
    var character2 = 44;
    do {
      switch (token(character2)) {
        case 0:
          if (character2 === 38 && peek() === 12) {
            points[index] = 1;
          }
          parsed[index] += identifierWithPointTracking(position - 1, points, index);
          break;
        case 2:
          parsed[index] += delimit(character2);
          break;
        case 4:
          if (character2 === 44) {
            parsed[++index] = peek() === 58 ? "&\f" : "";
            points[index] = parsed[index].length;
            break;
          }
        default:
          parsed[index] += from(character2);
      }
    } while (character2 = next());
    return parsed;
  };
  var getRules = function getRules2(value, points) {
    return dealloc(toRules(alloc(value), points));
  };
  var fixedElements = /* @__PURE__ */ new WeakMap();
  var compat = function compat2(element) {
    if (element.type !== "rule" || !element.parent || element.length < 1) {
      return;
    }
    var value = element.value, parent = element.parent;
    var isImplicitRule = element.column === parent.column && element.line === parent.line;
    while (parent.type !== "rule") {
      parent = parent.parent;
      if (!parent)
        return;
    }
    if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
      return;
    }
    if (isImplicitRule) {
      return;
    }
    fixedElements.set(element, true);
    var points = [];
    var rules = getRules(value, points);
    var parentRules = parent.props;
    for (var i = 0, k = 0; i < rules.length; i++) {
      for (var j = 0; j < parentRules.length; j++, k++) {
        element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
      }
    }
  };
  var removeLabel = function removeLabel2(element) {
    if (element.type === "decl") {
      var value = element.value;
      if (value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98) {
        element["return"] = "";
        element.value = "";
      }
    }
  };
  var ignoreFlag = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason";
  var isIgnoringComment = function isIgnoringComment2(element) {
    return !!element && element.type === "comm" && element.children.indexOf(ignoreFlag) > -1;
  };
  var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm2(cache) {
    return function(element, index, children2) {
      if (element.type !== "rule")
        return;
      var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);
      if (unsafePseudoClasses && cache.compat !== true) {
        var prevElement = index > 0 ? children2[index - 1] : null;
        if (prevElement && isIgnoringComment(last(prevElement.children))) {
          return;
        }
        unsafePseudoClasses.forEach(function(unsafePseudoClass) {
          console.error('The pseudo class "' + unsafePseudoClass + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + unsafePseudoClass.split("-child")[0] + '-of-type".');
        });
      }
    };
  };
  var isImportRule = function isImportRule2(element) {
    return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
  };
  var isPrependedWithRegularRules = function isPrependedWithRegularRules2(index, children2) {
    for (var i = index - 1; i >= 0; i--) {
      if (!isImportRule(children2[i])) {
        return true;
      }
    }
    return false;
  };
  var nullifyElement = function nullifyElement2(element) {
    element.type = "";
    element.value = "";
    element["return"] = "";
    element.children = "";
    element.props = "";
  };
  var incorrectImportAlarm = function incorrectImportAlarm2(element, index, children2) {
    if (!isImportRule(element)) {
      return;
    }
    if (element.parent) {
      console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
      nullifyElement(element);
    } else if (isPrependedWithRegularRules(index, children2)) {
      console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
      nullifyElement(element);
    }
  };
  var defaultStylisPlugins = [prefixer];
  var createCache = function createCache2(options) {
    var key = options.key;
    if (!key) {
      throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\nIf multiple caches share the same key they might \"fight\" for each other's style elements.");
    }
    if (key === "css") {
      var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(ssrStyles, function(node2) {
        var dataEmotionAttribute = node2.getAttribute("data-emotion");
        if (dataEmotionAttribute.indexOf(" ") === -1) {
          return;
        }
        document.head.appendChild(node2);
        node2.setAttribute("data-s", "");
      });
    }
    var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
    if (true) {
      if (/[^a-z-]/.test(key)) {
        throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + key + '" was passed');
      }
    }
    var inserted = {};
    var container;
    var nodesToHydrate = [];
    {
      container = options.container || document.head;
      Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + key + ' "]'), function(node2) {
        var attrib = node2.getAttribute("data-emotion").split(" ");
        for (var i = 1; i < attrib.length; i++) {
          inserted[attrib[i]] = true;
        }
        nodesToHydrate.push(node2);
      });
    }
    var _insert;
    var omnipresentPlugins = [compat, removeLabel];
    if (true) {
      omnipresentPlugins.push(createUnsafeSelectorsAlarm({
        get compat() {
          return cache.compat;
        }
      }), incorrectImportAlarm);
    }
    {
      var currentSheet;
      var finalizingPlugins = [stringify, true ? function(element) {
        if (!element.root) {
          if (element["return"]) {
            currentSheet.insert(element["return"]);
          } else if (element.value && element.type !== COMMENT) {
            currentSheet.insert(element.value + "{}");
          }
        }
      } : rulesheet(function(rule) {
        currentSheet.insert(rule);
      })];
      var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
      var stylis = function stylis2(styles) {
        return serialize(compile(styles), serializer);
      };
      _insert = function insert(selector, serialized, sheet, shouldCache) {
        currentSheet = sheet;
        if (serialized.map !== void 0) {
          currentSheet = {
            insert: function insert2(rule) {
              sheet.insert(rule + serialized.map);
            }
          };
        }
        stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
        if (shouldCache) {
          cache.inserted[serialized.name] = true;
        }
      };
    }
    var cache = {
      key,
      sheet: new StyleSheet({
        key,
        container,
        nonce: options.nonce,
        speedy: options.speedy,
        prepend: options.prepend,
        insertionPoint: options.insertionPoint
      }),
      nonce: options.nonce,
      inserted,
      registered: {},
      insert: _insert
    };
    cache.sheet.hydrate(nodesToHydrate);
    return cache;
  };
  var emotion_cache_browser_esm_default = createCache;

  // node_modules/@emotion/react/dist/emotion-element-cbed451f.browser.esm.js
  var React = __toESM(require_react());
  var import_react = __toESM(require_react());

  // node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
  var isBrowser = true;
  function getRegisteredStyles(registered, registeredStyles, classNames) {
    var rawClassName = "";
    classNames.split(" ").forEach(function(className) {
      if (registered[className] !== void 0) {
        registeredStyles.push(registered[className] + ";");
      } else {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }
  var registerStyles = function registerStyles2(cache, serialized, isStringTag) {
    var className = cache.key + "-" + serialized.name;
    if ((isStringTag === false || isBrowser === false) && cache.registered[className] === void 0) {
      cache.registered[className] = serialized.styles;
    }
  };
  var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
    registerStyles(cache, serialized, isStringTag);
    var className = cache.key + "-" + serialized.name;
    if (cache.inserted[serialized.name] === void 0) {
      var current = serialized;
      do {
        var maybeStyles = cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
        current = current.next;
      } while (current !== void 0);
    }
  };

  // node_modules/@emotion/hash/dist/hash.browser.esm.js
  function murmur2(str) {
    var h = 0;
    var k, i = 0, len = str.length;
    for (; len >= 4; ++i, len -= 4) {
      k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
      k = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
      k ^= k >>> 24;
      h = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
    }
    switch (len) {
      case 3:
        h ^= (str.charCodeAt(i + 2) & 255) << 16;
      case 2:
        h ^= (str.charCodeAt(i + 1) & 255) << 8;
      case 1:
        h ^= str.charCodeAt(i) & 255;
        h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
    }
    h ^= h >>> 13;
    h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
    return ((h ^ h >>> 15) >>> 0).toString(36);
  }
  var hash_browser_esm_default = murmur2;

  // node_modules/@emotion/unitless/dist/unitless.browser.esm.js
  var unitlessKeys = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  };
  var unitless_browser_esm_default = unitlessKeys;

  // node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js
  var ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
  var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
  var hyphenateRegex = /[A-Z]|^ms/g;
  var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
  var isCustomProperty = function isCustomProperty2(property) {
    return property.charCodeAt(1) === 45;
  };
  var isProcessableValue = function isProcessableValue2(value) {
    return value != null && typeof value !== "boolean";
  };
  var processStyleName = /* @__PURE__ */ emotion_memoize_browser_esm_default(function(styleName) {
    return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
  });
  var processStyleValue = function processStyleValue2(key, value) {
    switch (key) {
      case "animation":
      case "animationName": {
        if (typeof value === "string") {
          return value.replace(animationRegex, function(match2, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
    }
    if (unitless_browser_esm_default[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
      return value + "px";
    }
    return value;
  };
  if (true) {
    contentValuePattern = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
    contentValues = ["normal", "none", "initial", "inherit", "unset"];
    oldProcessStyleValue = processStyleValue;
    msPattern = /^-ms-/;
    hyphenPattern = /-(.)/g;
    hyphenatedCache = {};
    processStyleValue = function processStyleValue3(key, value) {
      if (key === "content") {
        if (typeof value !== "string" || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
          throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
        }
      }
      var processed = oldProcessStyleValue(key, value);
      if (processed !== "" && !isCustomProperty(key) && key.indexOf("-") !== -1 && hyphenatedCache[key] === void 0) {
        hyphenatedCache[key] = true;
        console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, "ms-").replace(hyphenPattern, function(str, _char) {
          return _char.toUpperCase();
        }) + "?");
      }
      return processed;
    };
  }
  var contentValuePattern;
  var contentValues;
  var oldProcessStyleValue;
  var msPattern;
  var hyphenPattern;
  var hyphenatedCache;
  function handleInterpolation(mergedProps, registered, interpolation) {
    if (interpolation == null) {
      return "";
    }
    if (interpolation.__emotion_styles !== void 0) {
      if (interpolation.toString() === "NO_COMPONENT_SELECTOR") {
        throw new Error("Component selectors can only be used in conjunction with @emotion/babel-plugin.");
      }
      return interpolation;
    }
    switch (typeof interpolation) {
      case "boolean": {
        return "";
      }
      case "object": {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }
        if (interpolation.styles !== void 0) {
          var next2 = interpolation.next;
          if (next2 !== void 0) {
            while (next2 !== void 0) {
              cursor = {
                name: next2.name,
                styles: next2.styles,
                next: cursor
              };
              next2 = next2.next;
            }
          }
          var styles = interpolation.styles + ";";
          if (interpolation.map !== void 0) {
            styles += interpolation.map;
          }
          return styles;
        }
        return createStringFromObject(mergedProps, registered, interpolation);
      }
      case "function": {
        if (mergedProps !== void 0) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        } else if (true) {
          console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
        }
        break;
      }
      case "string":
        if (true) {
          var matched = [];
          var replaced = interpolation.replace(animationRegex, function(match2, p1, p2) {
            var fakeVarName = "animation" + matched.length;
            matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, "") + "`");
            return "${" + fakeVarName + "}";
          });
          if (matched.length) {
            console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(matched, ["`" + replaced + "`"]).join("\n") + "\n\nYou should wrap it with `css` like this:\n\n" + ("css`" + replaced + "`"));
          }
        }
        break;
    }
    if (registered == null) {
      return interpolation;
    }
    var cached = registered[interpolation];
    return cached !== void 0 ? cached : interpolation;
  }
  function createStringFromObject(mergedProps, registered, obj) {
    var string = "";
    if (Array.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
      }
    } else {
      for (var _key in obj) {
        var value = obj[_key];
        if (typeof value !== "object") {
          if (registered != null && registered[value] !== void 0) {
            string += _key + "{" + registered[value] + "}";
          } else if (isProcessableValue(value)) {
            string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
          }
        } else {
          if (_key === "NO_COMPONENT_SELECTOR" && true) {
            throw new Error("Component selectors can only be used in conjunction with @emotion/babel-plugin.");
          }
          if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
            for (var _i = 0; _i < value.length; _i++) {
              if (isProcessableValue(value[_i])) {
                string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
              }
            }
          } else {
            var interpolated = handleInterpolation(mergedProps, registered, value);
            switch (_key) {
              case "animation":
              case "animationName": {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }
              default: {
                if (_key === "undefined") {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }
                string += _key + "{" + interpolated + "}";
              }
            }
          }
        }
      }
    }
    return string;
  }
  var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
  var sourceMapPattern;
  if (true) {
    sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
  }
  var cursor;
  var serializeStyles = function serializeStyles2(args, registered, mergedProps) {
    if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
      return args[0];
    }
    var stringMode = true;
    var styles = "";
    cursor = void 0;
    var strings = args[0];
    if (strings == null || strings.raw === void 0) {
      stringMode = false;
      styles += handleInterpolation(mergedProps, registered, strings);
    } else {
      if (strings[0] === void 0) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }
      styles += strings[0];
    }
    for (var i = 1; i < args.length; i++) {
      styles += handleInterpolation(mergedProps, registered, args[i]);
      if (stringMode) {
        if (strings[i] === void 0) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
        }
        styles += strings[i];
      }
    }
    var sourceMap;
    if (true) {
      styles = styles.replace(sourceMapPattern, function(match3) {
        sourceMap = match3;
        return "";
      });
    }
    labelPattern.lastIndex = 0;
    var identifierName = "";
    var match2;
    while ((match2 = labelPattern.exec(styles)) !== null) {
      identifierName += "-" + match2[1];
    }
    var name = hash_browser_esm_default(styles) + identifierName;
    if (true) {
      return {
        name,
        styles,
        map: sourceMap,
        next: cursor,
        toString: function toString() {
          return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
        }
      };
    }
    return {
      name,
      styles,
      next: cursor
    };
  };

  // node_modules/@emotion/react/dist/emotion-element-cbed451f.browser.esm.js
  var hasOwnProperty = {}.hasOwnProperty;
  var EmotionCacheContext = /* @__PURE__ */ (0, import_react.createContext)(typeof HTMLElement !== "undefined" ? /* @__PURE__ */ emotion_cache_browser_esm_default({
    key: "css"
  }) : null);
  if (true) {
    EmotionCacheContext.displayName = "EmotionCacheContext";
  }
  var CacheProvider = EmotionCacheContext.Provider;
  var withEmotionCache = function withEmotionCache2(func) {
    return /* @__PURE__ */ (0, import_react.forwardRef)(function(props, ref) {
      var cache = (0, import_react.useContext)(EmotionCacheContext);
      return func(props, cache, ref);
    });
  };
  var ThemeContext = /* @__PURE__ */ (0, import_react.createContext)({});
  if (true) {
    ThemeContext.displayName = "EmotionThemeContext";
  }
  var useInsertionEffect2 = React["useInsertionEffect"] ? React["useInsertionEffect"] : function useInsertionEffect3(create2) {
    create2();
  };
  function useInsertionEffectMaybe(create2) {
    useInsertionEffect2(create2);
  }
  var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
  var labelPropName = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__";
  var Insertion = function Insertion2(_ref) {
    var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
    registerStyles(cache, serialized, isStringTag);
    var rules = useInsertionEffectMaybe(function() {
      return insertStyles(cache, serialized, isStringTag);
    });
    return null;
  };
  var Emotion = /* @__PURE__ */ withEmotionCache(function(props, cache, ref) {
    var cssProp = props.css;
    if (typeof cssProp === "string" && cache.registered[cssProp] !== void 0) {
      cssProp = cache.registered[cssProp];
    }
    var WrappedComponent = props[typePropName];
    var registeredStyles = [cssProp];
    var className = "";
    if (typeof props.className === "string") {
      className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
    } else if (props.className != null) {
      className = props.className + " ";
    }
    var serialized = serializeStyles(registeredStyles, void 0, (0, import_react.useContext)(ThemeContext));
    if (serialized.name.indexOf("-") === -1) {
      var labelFromStack = props[labelPropName];
      if (labelFromStack) {
        serialized = serializeStyles([serialized, "label:" + labelFromStack + ";"]);
      }
    }
    className += cache.key + "-" + serialized.name;
    var newProps = {};
    for (var key in props) {
      if (hasOwnProperty.call(props, key) && key !== "css" && key !== typePropName && key !== labelPropName) {
        newProps[key] = props[key];
      }
    }
    newProps.ref = ref;
    newProps.className = className;
    return /* @__PURE__ */ (0, import_react.createElement)(import_react.Fragment, null, /* @__PURE__ */ (0, import_react.createElement)(Insertion, {
      cache,
      serialized,
      isStringTag: typeof WrappedComponent === "string"
    }), /* @__PURE__ */ (0, import_react.createElement)(WrappedComponent, newProps));
  });
  if (true) {
    Emotion.displayName = "EmotionCssPropInternal";
  }

  // node_modules/@emotion/react/dist/emotion-react.browser.esm.js
  var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
  var pkg = {
    name: "@emotion/react",
    version: "11.8.1",
    main: "dist/emotion-react.cjs.js",
    module: "dist/emotion-react.esm.js",
    browser: {
      "./dist/emotion-react.cjs.js": "./dist/emotion-react.browser.cjs.js",
      "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
    },
    types: "types/index.d.ts",
    files: [
      "src",
      "dist",
      "jsx-runtime",
      "jsx-dev-runtime",
      "_isolated-hnrs",
      "types/*.d.ts",
      "macro.js",
      "macro.d.ts",
      "macro.js.flow"
    ],
    sideEffects: false,
    author: "Emotion Contributors",
    license: "MIT",
    scripts: {
      "test:typescript": "dtslint types"
    },
    dependencies: {
      "@babel/runtime": "^7.13.10",
      "@emotion/babel-plugin": "^11.7.1",
      "@emotion/cache": "^11.7.1",
      "@emotion/serialize": "^1.0.2",
      "@emotion/sheet": "^1.1.0",
      "@emotion/utils": "^1.1.0",
      "@emotion/weak-memoize": "^0.2.5",
      "hoist-non-react-statics": "^3.3.1"
    },
    peerDependencies: {
      "@babel/core": "^7.0.0",
      react: ">=16.8.0"
    },
    peerDependenciesMeta: {
      "@babel/core": {
        optional: true
      },
      "@types/react": {
        optional: true
      }
    },
    devDependencies: {
      "@babel/core": "^7.13.10",
      "@emotion/css": "11.7.1",
      "@emotion/css-prettifier": "1.0.1",
      "@emotion/server": "11.4.0",
      "@emotion/styled": "11.8.1",
      "@types/react": "^16.9.11",
      dtslint: "^0.3.0",
      "html-tag-names": "^1.1.2",
      react: "16.14.0",
      "svg-tag-names": "^1.1.1"
    },
    repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
    publishConfig: {
      access: "public"
    },
    "umd:main": "dist/emotion-react.umd.min.js",
    preconstruct: {
      entrypoints: [
        "./index.js",
        "./jsx-runtime.js",
        "./jsx-dev-runtime.js",
        "./_isolated-hnrs.js"
      ],
      umdName: "emotionReact"
    }
  };
  var useInsertionEffect5 = React2["useInsertionEffect"] ? React2["useInsertionEffect"] : import_react2.useLayoutEffect;
  var warnedAboutCssPropForGlobal = false;
  var Global = /* @__PURE__ */ withEmotionCache(function(props, cache) {
    if (!warnedAboutCssPropForGlobal && (props.className || props.css)) {
      console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
      warnedAboutCssPropForGlobal = true;
    }
    var styles = props.styles;
    var serialized = serializeStyles([styles], void 0, (0, import_react2.useContext)(ThemeContext));
    var sheetRef = (0, import_react2.useRef)();
    useInsertionEffect5(function() {
      var key = cache.key + "-global";
      var sheet = new StyleSheet({
        key,
        nonce: cache.sheet.nonce,
        container: cache.sheet.container,
        speedy: cache.sheet.isSpeedy
      });
      var rehydrating = false;
      var node2 = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
      if (cache.sheet.tags.length) {
        sheet.before = cache.sheet.tags[0];
      }
      if (node2 !== null) {
        rehydrating = true;
        node2.setAttribute("data-emotion", key);
        sheet.hydrate([node2]);
      }
      sheetRef.current = [sheet, rehydrating];
      return function() {
        sheet.flush();
      };
    }, [cache]);
    useInsertionEffect5(function() {
      var sheetRefCurrent = sheetRef.current;
      var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
      if (rehydrating) {
        sheetRefCurrent[1] = false;
        return;
      }
      if (serialized.next !== void 0) {
        insertStyles(cache, serialized.next, true);
      }
      if (sheet.tags.length) {
        var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
        sheet.before = element;
        sheet.flush();
      }
      cache.insert("", serialized, sheet, false);
    }, [cache, serialized.name]);
    return null;
  });
  if (true) {
    Global.displayName = "EmotionGlobal";
  }
  function css() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return serializeStyles(args);
  }
  var keyframes = function keyframes2() {
    var insertable = css.apply(void 0, arguments);
    var name = "animation-" + insertable.name;
    return {
      name,
      styles: "@keyframes " + name + "{" + insertable.styles + "}",
      anim: 1,
      toString: function toString() {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      }
    };
  };
  var classnames = function classnames2(args) {
    var len = args.length;
    var i = 0;
    var cls = "";
    for (; i < len; i++) {
      var arg = args[i];
      if (arg == null)
        continue;
      var toAdd = void 0;
      switch (typeof arg) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(arg)) {
            toAdd = classnames2(arg);
          } else {
            if (arg.styles !== void 0 && arg.name !== void 0) {
              console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.");
            }
            toAdd = "";
            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += " ");
                toAdd += k;
              }
            }
          }
          break;
        }
        default: {
          toAdd = arg;
        }
      }
      if (toAdd) {
        cls && (cls += " ");
        cls += toAdd;
      }
    }
    return cls;
  };
  function merge(registered, css2, className) {
    var registeredStyles = [];
    var rawClassName = getRegisteredStyles(registered, registeredStyles, className);
    if (registeredStyles.length < 2) {
      return className;
    }
    return rawClassName + css2(registeredStyles);
  }
  var Insertion3 = function Insertion4(_ref) {
    var cache = _ref.cache, serializedArr = _ref.serializedArr;
    var rules = useInsertionEffectMaybe(function() {
      for (var i = 0; i < serializedArr.length; i++) {
        var res = insertStyles(cache, serializedArr[i], false);
      }
    });
    return null;
  };
  var ClassNames = /* @__PURE__ */ withEmotionCache(function(props, cache) {
    var hasRendered = false;
    var serializedArr = [];
    var css2 = function css3() {
      if (hasRendered && true) {
        throw new Error("css can only be used during render");
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var serialized = serializeStyles(args, cache.registered);
      serializedArr.push(serialized);
      registerStyles(cache, serialized, false);
      return cache.key + "-" + serialized.name;
    };
    var cx = function cx2() {
      if (hasRendered && true) {
        throw new Error("cx can only be used during render");
      }
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return merge(cache.registered, css2, classnames(args));
    };
    var content = {
      css: css2,
      cx,
      theme: (0, import_react2.useContext)(ThemeContext)
    };
    var ele = props.children(content);
    hasRendered = true;
    return /* @__PURE__ */ (0, import_react2.createElement)(import_react2.Fragment, null, /* @__PURE__ */ (0, import_react2.createElement)(Insertion3, {
      cache,
      serializedArr
    }), ele);
  });
  if (true) {
    ClassNames.displayName = "EmotionClassNames";
  }
  if (true) {
    isBrowser2 = true;
    isJest = typeof jest !== "undefined";
    if (isBrowser2 && !isJest) {
      globalContext = typeof globalThis !== "undefined" ? globalThis : isBrowser2 ? window : global;
      globalKey = "__EMOTION_REACT_" + pkg.version.split(".")[0] + "__";
      if (globalContext[globalKey]) {
        console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used.");
      }
      globalContext[globalKey] = true;
    }
  }
  var isBrowser2;
  var isJest;
  var globalContext;
  var globalKey;

  // node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js
  var testOmitPropsOnStringTag = emotion_is_prop_valid_browser_esm_default;
  var testOmitPropsOnComponent = function testOmitPropsOnComponent2(key) {
    return key !== "theme";
  };
  var getDefaultShouldForwardProp = function getDefaultShouldForwardProp2(tag) {
    return typeof tag === "string" && tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
  };
  var composeShouldForwardProps = function composeShouldForwardProps2(tag, options, isReal) {
    var shouldForwardProp2;
    if (options) {
      var optionsShouldForwardProp = options.shouldForwardProp;
      shouldForwardProp2 = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
        return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
      } : optionsShouldForwardProp;
    }
    if (typeof shouldForwardProp2 !== "function" && isReal) {
      shouldForwardProp2 = tag.__emotion_forwardProp;
    }
    return shouldForwardProp2;
  };
  var useInsertionEffect7 = React3["useInsertionEffect"] ? React3["useInsertionEffect"] : function useInsertionEffect8(create2) {
    create2();
  };
  function useInsertionEffectMaybe2(create2) {
    useInsertionEffect7(create2);
  }
  var ILLEGAL_ESCAPE_SEQUENCE_ERROR2 = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
  var Insertion5 = function Insertion6(_ref) {
    var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
    registerStyles(cache, serialized, isStringTag);
    var rules = useInsertionEffectMaybe2(function() {
      return insertStyles(cache, serialized, isStringTag);
    });
    return null;
  };
  var createStyled = function createStyled2(tag, options) {
    if (true) {
      if (tag === void 0) {
        throw new Error("You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.");
      }
    }
    var isReal = tag.__emotion_real === tag;
    var baseTag = isReal && tag.__emotion_base || tag;
    var identifierName;
    var targetClassName;
    if (options !== void 0) {
      identifierName = options.label;
      targetClassName = options.target;
    }
    var shouldForwardProp2 = composeShouldForwardProps(tag, options, isReal);
    var defaultShouldForwardProp = shouldForwardProp2 || getDefaultShouldForwardProp(baseTag);
    var shouldUseAs = !defaultShouldForwardProp("as");
    return function() {
      var args = arguments;
      var styles = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
      if (identifierName !== void 0) {
        styles.push("label:" + identifierName + ";");
      }
      if (args[0] == null || args[0].raw === void 0) {
        styles.push.apply(styles, args);
      } else {
        if (args[0][0] === void 0) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR2);
        }
        styles.push(args[0][0]);
        var len = args.length;
        var i = 1;
        for (; i < len; i++) {
          if (args[0][i] === void 0) {
            console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR2);
          }
          styles.push(args[i], args[0][i]);
        }
      }
      var Styled = withEmotionCache(function(props, cache, ref) {
        var FinalTag = shouldUseAs && props.as || baseTag;
        var className = "";
        var classInterpolations = [];
        var mergedProps = props;
        if (props.theme == null) {
          mergedProps = {};
          for (var key in props) {
            mergedProps[key] = props[key];
          }
          mergedProps.theme = (0, import_react3.useContext)(ThemeContext);
        }
        if (typeof props.className === "string") {
          className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
        } else if (props.className != null) {
          className = props.className + " ";
        }
        var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
        className += cache.key + "-" + serialized.name;
        if (targetClassName !== void 0) {
          className += " " + targetClassName;
        }
        var finalShouldForwardProp = shouldUseAs && shouldForwardProp2 === void 0 ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
        var newProps = {};
        for (var _key in props) {
          if (shouldUseAs && _key === "as")
            continue;
          if (finalShouldForwardProp(_key)) {
            newProps[_key] = props[_key];
          }
        }
        newProps.className = className;
        newProps.ref = ref;
        return /* @__PURE__ */ (0, import_react3.createElement)(import_react3.Fragment, null, /* @__PURE__ */ (0, import_react3.createElement)(Insertion5, {
          cache,
          serialized,
          isStringTag: typeof FinalTag === "string"
        }), /* @__PURE__ */ (0, import_react3.createElement)(FinalTag, newProps));
      });
      Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
      Styled.defaultProps = tag.defaultProps;
      Styled.__emotion_real = Styled;
      Styled.__emotion_base = baseTag;
      Styled.__emotion_styles = styles;
      Styled.__emotion_forwardProp = shouldForwardProp2;
      Object.defineProperty(Styled, "toString", {
        value: function value() {
          if (targetClassName === void 0 && true) {
            return "NO_COMPONENT_SELECTOR";
          }
          return "." + targetClassName;
        }
      });
      Styled.withComponent = function(nextTag, nextOptions) {
        return createStyled2(nextTag, _extends({}, options, nextOptions, {
          shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
        })).apply(void 0, styles);
      };
      return Styled;
    };
  };
  var emotion_styled_base_browser_esm_default = createStyled;

  // node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js
  var tags = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan"
  ];
  var newStyled = emotion_styled_base_browser_esm_default.bind();
  tags.forEach(function(tagName) {
    newStyled[tagName] = newStyled(tagName);
  });
  var emotion_styled_browser_esm_default = newStyled;

  // node_modules/@mui/styled-engine/index.js
  function styled(tag, options) {
    const stylesFactory = emotion_styled_browser_esm_default(tag, options);
    if (true) {
      return (...styles) => {
        const component = typeof tag === "string" ? `"${tag}"` : "component";
        if (styles.length === 0) {
          console.error([`MUI: Seems like you called \`styled(${component})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join("\n"));
        } else if (styles.some((style3) => style3 === void 0)) {
          console.error(`MUI: the styled(${component})(...args) API requires all its args to be defined.`);
        }
        return stylesFactory(...styles);
      };
    }
    return stylesFactory;
  }

  // node_modules/@mui/system/esm/responsivePropType.js
  var import_prop_types = __toESM(require_prop_types());
  var responsivePropType = true ? import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string, import_prop_types.default.object, import_prop_types.default.array]) : {};
  var responsivePropType_default = responsivePropType;

  // node_modules/@mui/utils/esm/chainPropTypes.js
  function chainPropTypes(propType1, propType2) {
    if (false) {
      return () => null;
    }
    return function validate(...args) {
      return propType1(...args) || propType2(...args);
    };
  }

  // node_modules/@mui/utils/esm/deepmerge.js
  function isPlainObject(item) {
    return item !== null && typeof item === "object" && item.constructor === Object;
  }
  function deepmerge(target, source, options = {
    clone: true
  }) {
    const output = options.clone ? _extends({}, target) : target;
    if (isPlainObject(target) && isPlainObject(source)) {
      Object.keys(source).forEach((key) => {
        if (key === "__proto__") {
          return;
        }
        if (isPlainObject(source[key]) && key in target && isPlainObject(target[key])) {
          output[key] = deepmerge(target[key], source[key], options);
        } else {
          output[key] = source[key];
        }
      });
    }
    return output;
  }

  // node_modules/@mui/utils/esm/elementTypeAcceptingRef.js
  var import_prop_types2 = __toESM(require_prop_types());
  function isClassComponent(elementType) {
    const {
      prototype = {}
    } = elementType;
    return Boolean(prototype.isReactComponent);
  }
  function elementTypeAcceptingRef(props, propName, componentName, location, propFullName) {
    const propValue = props[propName];
    const safePropName = propFullName || propName;
    if (propValue == null || typeof window === "undefined") {
      return null;
    }
    let warningHint;
    if (typeof propValue === "function" && !isClassComponent(propValue)) {
      warningHint = "Did you accidentally provide a plain function component instead?";
    }
    if (warningHint !== void 0) {
      return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. Expected an element type that can hold a ref. ${warningHint} For more information see https://mui.com/r/caveat-with-refs-guide`);
    }
    return null;
  }
  var elementTypeAcceptingRef_default = chainPropTypes(import_prop_types2.default.elementType, elementTypeAcceptingRef);

  // node_modules/@mui/utils/esm/getDisplayName.js
  var import_react_is = __toESM(require_react_is3());
  var fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
  function getFunctionName(fn) {
    const match2 = `${fn}`.match(fnNameMatchRegex);
    const name = match2 && match2[1];
    return name || "";
  }
  function getFunctionComponentName(Component, fallback = "") {
    return Component.displayName || Component.name || getFunctionName(Component) || fallback;
  }
  function getWrappedName(outerType, innerType, wrapperName) {
    const functionName = getFunctionComponentName(innerType);
    return outerType.displayName || (functionName !== "" ? `${wrapperName}(${functionName})` : wrapperName);
  }
  function getDisplayName(Component) {
    if (Component == null) {
      return void 0;
    }
    if (typeof Component === "string") {
      return Component;
    }
    if (typeof Component === "function") {
      return getFunctionComponentName(Component, "Component");
    }
    if (typeof Component === "object") {
      switch (Component.$$typeof) {
        case import_react_is.ForwardRef:
          return getWrappedName(Component, Component.render, "ForwardRef");
        case import_react_is.Memo:
          return getWrappedName(Component, Component.type, "memo");
        default:
          return void 0;
      }
    }
    return void 0;
  }

  // node_modules/@mui/utils/esm/refType.js
  var import_prop_types3 = __toESM(require_prop_types());
  var refType = import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object]);
  var refType_default = refType;

  // node_modules/@mui/utils/esm/capitalize.js
  function capitalize(string) {
    if (typeof string !== "string") {
      throw new Error(true ? `MUI: \`capitalize(string)\` expects a string argument.` : formatMuiErrorMessage(7));
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // node_modules/@mui/utils/esm/setRef.js
  function setRef(ref, value) {
    if (typeof ref === "function") {
      ref(value);
    } else if (ref) {
      ref.current = value;
    }
  }

  // node_modules/@mui/utils/esm/useEnhancedEffect.js
  var React4 = __toESM(require_react());
  var useEnhancedEffect = typeof window !== "undefined" ? React4.useLayoutEffect : React4.useEffect;
  var useEnhancedEffect_default = useEnhancedEffect;

  // node_modules/@mui/utils/esm/useControlled.js
  var React5 = __toESM(require_react());
  function useControlled({
    controlled,
    default: defaultProp,
    name,
    state = "value"
  }) {
    const {
      current: isControlled
    } = React5.useRef(controlled !== void 0);
    const [valueState, setValue] = React5.useState(defaultProp);
    const value = isControlled ? controlled : valueState;
    if (true) {
      React5.useEffect(() => {
        if (isControlled !== (controlled !== void 0)) {
          console.error([`MUI: A component is changing the ${isControlled ? "" : "un"}controlled ${state} state of ${name} to be ${isControlled ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${name} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join("\n"));
        }
      }, [state, name, controlled]);
      const {
        current: defaultValue
      } = React5.useRef(defaultProp);
      React5.useEffect(() => {
        if (!isControlled && defaultValue !== defaultProp) {
          console.error([`MUI: A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. To suppress this warning opt to use a controlled ${name}.`].join("\n"));
        }
      }, [JSON.stringify(defaultProp)]);
    }
    const setValueIfUncontrolled = React5.useCallback((newValue) => {
      if (!isControlled) {
        setValue(newValue);
      }
    }, []);
    return [value, setValueIfUncontrolled];
  }

  // node_modules/@mui/utils/esm/useEventCallback.js
  var React6 = __toESM(require_react());
  function useEventCallback(fn) {
    const ref = React6.useRef(fn);
    useEnhancedEffect_default(() => {
      ref.current = fn;
    });
    return React6.useCallback((...args) => (0, ref.current)(...args), []);
  }

  // node_modules/@mui/utils/esm/useForkRef.js
  var React7 = __toESM(require_react());
  function useForkRef(refA, refB) {
    return React7.useMemo(() => {
      if (refA == null && refB == null) {
        return null;
      }
      return (refValue) => {
        setRef(refA, refValue);
        setRef(refB, refValue);
      };
    }, [refA, refB]);
  }

  // node_modules/@mui/utils/esm/useIsFocusVisible.js
  var React8 = __toESM(require_react());
  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout;
  var inputTypesWhitelist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    "datetime-local": true
  };
  function focusTriggersKeyboardModality(node2) {
    const {
      type: type2,
      tagName
    } = node2;
    if (tagName === "INPUT" && inputTypesWhitelist[type2] && !node2.readOnly) {
      return true;
    }
    if (tagName === "TEXTAREA" && !node2.readOnly) {
      return true;
    }
    if (node2.isContentEditable) {
      return true;
    }
    return false;
  }
  function handleKeyDown(event) {
    if (event.metaKey || event.altKey || event.ctrlKey) {
      return;
    }
    hadKeyboardEvent = true;
  }
  function handlePointerDown() {
    hadKeyboardEvent = false;
  }
  function handleVisibilityChange() {
    if (this.visibilityState === "hidden") {
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }
    }
  }
  function prepare(doc) {
    doc.addEventListener("keydown", handleKeyDown, true);
    doc.addEventListener("mousedown", handlePointerDown, true);
    doc.addEventListener("pointerdown", handlePointerDown, true);
    doc.addEventListener("touchstart", handlePointerDown, true);
    doc.addEventListener("visibilitychange", handleVisibilityChange, true);
  }
  function isFocusVisible(event) {
    const {
      target
    } = event;
    try {
      return target.matches(":focus-visible");
    } catch (error) {
    }
    return hadKeyboardEvent || focusTriggersKeyboardModality(target);
  }
  function useIsFocusVisible() {
    const ref = React8.useCallback((node2) => {
      if (node2 != null) {
        prepare(node2.ownerDocument);
      }
    }, []);
    const isFocusVisibleRef = React8.useRef(false);
    function handleBlurVisible() {
      if (isFocusVisibleRef.current) {
        hadFocusVisibleRecently = true;
        window.clearTimeout(hadFocusVisibleRecentlyTimeout);
        hadFocusVisibleRecentlyTimeout = window.setTimeout(() => {
          hadFocusVisibleRecently = false;
        }, 100);
        isFocusVisibleRef.current = false;
        return true;
      }
      return false;
    }
    function handleFocusVisible(event) {
      if (isFocusVisible(event)) {
        isFocusVisibleRef.current = true;
        return true;
      }
      return false;
    }
    return {
      isFocusVisibleRef,
      onFocus: handleFocusVisible,
      onBlur: handleBlurVisible,
      ref
    };
  }

  // node_modules/@mui/utils/esm/integerPropType.js
  function getTypeByValue(value) {
    const valueType = typeof value;
    switch (valueType) {
      case "number":
        if (Number.isNaN(value)) {
          return "NaN";
        }
        if (!Number.isFinite(value)) {
          return "Infinity";
        }
        if (value !== Math.floor(value)) {
          return "float";
        }
        return "number";
      case "object":
        if (value === null) {
          return "null";
        }
        return value.constructor.name;
      default:
        return valueType;
    }
  }
  function ponyfillIsInteger(x3) {
    return typeof x3 === "number" && isFinite(x3) && Math.floor(x3) === x3;
  }
  var isInteger = Number.isInteger || ponyfillIsInteger;
  function requiredInteger(props, propName, componentName, location) {
    const propValue = props[propName];
    if (propValue == null || !isInteger(propValue)) {
      const propType = getTypeByValue(propValue);
      return new RangeError(`Invalid ${location} \`${propName}\` of type \`${propType}\` supplied to \`${componentName}\`, expected \`integer\`.`);
    }
    return null;
  }
  function validator(props, propName, ...other) {
    const propValue = props[propName];
    if (propValue === void 0) {
      return null;
    }
    return requiredInteger(props, propName, ...other);
  }
  function validatorNoop() {
    return null;
  }
  validator.isRequired = requiredInteger;
  validatorNoop.isRequired = validatorNoop;
  var integerPropType_default = false ? validatorNoop : validator;

  // node_modules/@mui/utils/esm/resolveProps.js
  function resolveProps(defaultProps2, props) {
    const output = _extends({}, props);
    Object.keys(defaultProps2).forEach((propName) => {
      if (output[propName] === void 0) {
        output[propName] = defaultProps2[propName];
      }
    });
    return output;
  }

  // node_modules/@mui/system/esm/merge.js
  function merge2(acc, item) {
    if (!item) {
      return acc;
    }
    return deepmerge(acc, item, {
      clone: false
    });
  }
  var merge_default3 = merge2;

  // node_modules/@mui/system/esm/breakpoints.js
  var values = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
  };
  var defaultBreakpoints = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (key) => `@media (min-width:${values[key]}px)`
  };
  function handleBreakpoints(props, propValue, styleFromPropValue) {
    const theme = props.theme || {};
    if (Array.isArray(propValue)) {
      const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
      return propValue.reduce((acc, item, index) => {
        acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
        return acc;
      }, {});
    }
    if (typeof propValue === "object") {
      const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
      return Object.keys(propValue).reduce((acc, breakpoint) => {
        if (Object.keys(themeBreakpoints.values || values).indexOf(breakpoint) !== -1) {
          const mediaKey = themeBreakpoints.up(breakpoint);
          acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
        } else {
          const cssKey = breakpoint;
          acc[cssKey] = propValue[cssKey];
        }
        return acc;
      }, {});
    }
    const output = styleFromPropValue(propValue);
    return output;
  }
  function createEmptyBreakpointObject(breakpointsInput = {}) {
    var _breakpointsInput$key;
    const breakpointsInOrder = breakpointsInput == null ? void 0 : (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
      const breakpointStyleKey = breakpointsInput.up(key);
      acc[breakpointStyleKey] = {};
      return acc;
    }, {});
    return breakpointsInOrder || {};
  }
  function removeUnusedBreakpoints(breakpointKeys, style3) {
    return breakpointKeys.reduce((acc, key) => {
      const breakpointOutput = acc[key];
      const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;
      if (isBreakpointUnused) {
        delete acc[key];
      }
      return acc;
    }, style3);
  }

  // node_modules/@mui/system/esm/style.js
  function getPath(obj, path2) {
    if (!path2 || typeof path2 !== "string") {
      return null;
    }
    return path2.split(".").reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
  }
  function getValue(themeMapping, transform3, propValueFinal, userValue = propValueFinal) {
    let value;
    if (typeof themeMapping === "function") {
      value = themeMapping(propValueFinal);
    } else if (Array.isArray(themeMapping)) {
      value = themeMapping[propValueFinal] || userValue;
    } else {
      value = getPath(themeMapping, propValueFinal) || userValue;
    }
    if (transform3) {
      value = transform3(value);
    }
    return value;
  }
  function style(options) {
    const {
      prop,
      cssProperty = options.prop,
      themeKey,
      transform: transform3
    } = options;
    const fn = (props) => {
      if (props[prop] == null) {
        return null;
      }
      const propValue = props[prop];
      const theme = props.theme;
      const themeMapping = getPath(theme, themeKey) || {};
      const styleFromPropValue = (propValueFinal) => {
        let value = getValue(themeMapping, transform3, propValueFinal);
        if (propValueFinal === value && typeof propValueFinal === "string") {
          value = getValue(themeMapping, transform3, `${prop}${propValueFinal === "default" ? "" : capitalize(propValueFinal)}`, propValueFinal);
        }
        if (cssProperty === false) {
          return value;
        }
        return {
          [cssProperty]: value
        };
      };
      return handleBreakpoints(props, propValue, styleFromPropValue);
    };
    fn.propTypes = true ? {
      [prop]: responsivePropType_default
    } : {};
    fn.filterProps = [prop];
    return fn;
  }
  var style_default3 = style;

  // node_modules/@mui/system/esm/compose.js
  function compose(...styles) {
    const handlers = styles.reduce((acc, style3) => {
      style3.filterProps.forEach((prop) => {
        acc[prop] = style3;
      });
      return acc;
    }, {});
    const fn = (props) => {
      return Object.keys(props).reduce((acc, prop) => {
        if (handlers[prop]) {
          return merge_default3(acc, handlers[prop](props));
        }
        return acc;
      }, {});
    };
    fn.propTypes = true ? styles.reduce((acc, style3) => Object.assign(acc, style3.propTypes), {}) : {};
    fn.filterProps = styles.reduce((acc, style3) => acc.concat(style3.filterProps), []);
    return fn;
  }
  var compose_default = compose;

  // node_modules/@mui/system/esm/memoize.js
  function memoize2(fn) {
    const cache = {};
    return (arg) => {
      if (cache[arg] === void 0) {
        cache[arg] = fn(arg);
      }
      return cache[arg];
    };
  }

  // node_modules/@mui/system/esm/spacing.js
  var properties = {
    m: "margin",
    p: "padding"
  };
  var directions = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"]
  };
  var aliases = {
    marginX: "mx",
    marginY: "my",
    paddingX: "px",
    paddingY: "py"
  };
  var getCssProperties = memoize2((prop) => {
    if (prop.length > 2) {
      if (aliases[prop]) {
        prop = aliases[prop];
      } else {
        return [prop];
      }
    }
    const [a, b] = prop.split("");
    const property = properties[a];
    const direction = directions[b] || "";
    return Array.isArray(direction) ? direction.map((dir) => property + dir) : [property + direction];
  });
  var marginKeys = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"];
  var paddingKeys = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
  var spacingKeys = [...marginKeys, ...paddingKeys];
  function createUnaryUnit(theme, themeKey, defaultValue, propName) {
    const themeSpacing = getPath(theme, themeKey) || defaultValue;
    if (typeof themeSpacing === "number") {
      return (abs3) => {
        if (typeof abs3 === "string") {
          return abs3;
        }
        if (true) {
          if (typeof abs3 !== "number") {
            console.error(`MUI: Expected ${propName} argument to be a number or a string, got ${abs3}.`);
          }
        }
        return themeSpacing * abs3;
      };
    }
    if (Array.isArray(themeSpacing)) {
      return (abs3) => {
        if (typeof abs3 === "string") {
          return abs3;
        }
        if (true) {
          if (!Number.isInteger(abs3)) {
            console.error([`MUI: The \`theme.${themeKey}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${themeKey}\` as a number.`].join("\n"));
          } else if (abs3 > themeSpacing.length - 1) {
            console.error([`MUI: The value provided (${abs3}) overflows.`, `The supported values are: ${JSON.stringify(themeSpacing)}.`, `${abs3} > ${themeSpacing.length - 1}, you need to add the missing values.`].join("\n"));
          }
        }
        return themeSpacing[abs3];
      };
    }
    if (typeof themeSpacing === "function") {
      return themeSpacing;
    }
    if (true) {
      console.error([`MUI: The \`theme.${themeKey}\` value (${themeSpacing}) is invalid.`, "It should be a number, an array or a function."].join("\n"));
    }
    return () => void 0;
  }
  function createUnarySpacing(theme) {
    return createUnaryUnit(theme, "spacing", 8, "spacing");
  }
  function getValue2(transformer2, propValue) {
    if (typeof propValue === "string" || propValue == null) {
      return propValue;
    }
    const abs3 = Math.abs(propValue);
    const transformed = transformer2(abs3);
    if (propValue >= 0) {
      return transformed;
    }
    if (typeof transformed === "number") {
      return -transformed;
    }
    return `-${transformed}`;
  }
  function getStyleFromPropValue(cssProperties, transformer2) {
    return (propValue) => cssProperties.reduce((acc, cssProperty) => {
      acc[cssProperty] = getValue2(transformer2, propValue);
      return acc;
    }, {});
  }
  function resolveCssProperty(props, keys, prop, transformer2) {
    if (keys.indexOf(prop) === -1) {
      return null;
    }
    const cssProperties = getCssProperties(prop);
    const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer2);
    const propValue = props[prop];
    return handleBreakpoints(props, propValue, styleFromPropValue);
  }
  function style2(props, keys) {
    const transformer2 = createUnarySpacing(props.theme);
    return Object.keys(props).map((prop) => resolveCssProperty(props, keys, prop, transformer2)).reduce(merge_default3, {});
  }
  function margin(props) {
    return style2(props, marginKeys);
  }
  margin.propTypes = true ? marginKeys.reduce((obj, key) => {
    obj[key] = responsivePropType_default;
    return obj;
  }, {}) : {};
  margin.filterProps = marginKeys;
  function padding(props) {
    return style2(props, paddingKeys);
  }
  padding.propTypes = true ? paddingKeys.reduce((obj, key) => {
    obj[key] = responsivePropType_default;
    return obj;
  }, {}) : {};
  padding.filterProps = paddingKeys;
  function spacing(props) {
    return style2(props, spacingKeys);
  }
  spacing.propTypes = true ? spacingKeys.reduce((obj, key) => {
    obj[key] = responsivePropType_default;
    return obj;
  }, {}) : {};
  spacing.filterProps = spacingKeys;
  var spacing_default = spacing;

  // node_modules/@mui/system/esm/borders.js
  function getBorder(value) {
    if (typeof value !== "number") {
      return value;
    }
    return `${value}px solid`;
  }
  var border = style_default3({
    prop: "border",
    themeKey: "borders",
    transform: getBorder
  });
  var borderTop = style_default3({
    prop: "borderTop",
    themeKey: "borders",
    transform: getBorder
  });
  var borderRight = style_default3({
    prop: "borderRight",
    themeKey: "borders",
    transform: getBorder
  });
  var borderBottom = style_default3({
    prop: "borderBottom",
    themeKey: "borders",
    transform: getBorder
  });
  var borderLeft = style_default3({
    prop: "borderLeft",
    themeKey: "borders",
    transform: getBorder
  });
  var borderColor = style_default3({
    prop: "borderColor",
    themeKey: "palette"
  });
  var borderTopColor = style_default3({
    prop: "borderTopColor",
    themeKey: "palette"
  });
  var borderRightColor = style_default3({
    prop: "borderRightColor",
    themeKey: "palette"
  });
  var borderBottomColor = style_default3({
    prop: "borderBottomColor",
    themeKey: "palette"
  });
  var borderLeftColor = style_default3({
    prop: "borderLeftColor",
    themeKey: "palette"
  });
  var borderRadius = (props) => {
    if (props.borderRadius !== void 0 && props.borderRadius !== null) {
      const transformer2 = createUnaryUnit(props.theme, "shape.borderRadius", 4, "borderRadius");
      const styleFromPropValue = (propValue) => ({
        borderRadius: getValue2(transformer2, propValue)
      });
      return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
    }
    return null;
  };
  borderRadius.propTypes = true ? {
    borderRadius: responsivePropType_default
  } : {};
  borderRadius.filterProps = ["borderRadius"];
  var borders = compose_default(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius);
  var borders_default = borders;

  // node_modules/@mui/system/esm/display.js
  var displayPrint = style_default3({
    prop: "displayPrint",
    cssProperty: false,
    transform: (value) => ({
      "@media print": {
        display: value
      }
    })
  });
  var displayRaw = style_default3({
    prop: "display"
  });
  var overflow = style_default3({
    prop: "overflow"
  });
  var textOverflow = style_default3({
    prop: "textOverflow"
  });
  var visibility = style_default3({
    prop: "visibility"
  });
  var whiteSpace = style_default3({
    prop: "whiteSpace"
  });
  var display_default = compose_default(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace);

  // node_modules/@mui/system/esm/flexbox.js
  var flexBasis = style_default3({
    prop: "flexBasis"
  });
  var flexDirection = style_default3({
    prop: "flexDirection"
  });
  var flexWrap = style_default3({
    prop: "flexWrap"
  });
  var justifyContent = style_default3({
    prop: "justifyContent"
  });
  var alignItems = style_default3({
    prop: "alignItems"
  });
  var alignContent = style_default3({
    prop: "alignContent"
  });
  var order = style_default3({
    prop: "order"
  });
  var flex = style_default3({
    prop: "flex"
  });
  var flexGrow = style_default3({
    prop: "flexGrow"
  });
  var flexShrink = style_default3({
    prop: "flexShrink"
  });
  var alignSelf = style_default3({
    prop: "alignSelf"
  });
  var justifyItems = style_default3({
    prop: "justifyItems"
  });
  var justifySelf = style_default3({
    prop: "justifySelf"
  });
  var flexbox = compose_default(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);
  var flexbox_default = flexbox;

  // node_modules/@mui/system/esm/grid.js
  var gap = (props) => {
    if (props.gap !== void 0 && props.gap !== null) {
      const transformer2 = createUnaryUnit(props.theme, "spacing", 8, "gap");
      const styleFromPropValue = (propValue) => ({
        gap: getValue2(transformer2, propValue)
      });
      return handleBreakpoints(props, props.gap, styleFromPropValue);
    }
    return null;
  };
  gap.propTypes = true ? {
    gap: responsivePropType_default
  } : {};
  gap.filterProps = ["gap"];
  var columnGap = (props) => {
    if (props.columnGap !== void 0 && props.columnGap !== null) {
      const transformer2 = createUnaryUnit(props.theme, "spacing", 8, "columnGap");
      const styleFromPropValue = (propValue) => ({
        columnGap: getValue2(transformer2, propValue)
      });
      return handleBreakpoints(props, props.columnGap, styleFromPropValue);
    }
    return null;
  };
  columnGap.propTypes = true ? {
    columnGap: responsivePropType_default
  } : {};
  columnGap.filterProps = ["columnGap"];
  var rowGap = (props) => {
    if (props.rowGap !== void 0 && props.rowGap !== null) {
      const transformer2 = createUnaryUnit(props.theme, "spacing", 8, "rowGap");
      const styleFromPropValue = (propValue) => ({
        rowGap: getValue2(transformer2, propValue)
      });
      return handleBreakpoints(props, props.rowGap, styleFromPropValue);
    }
    return null;
  };
  rowGap.propTypes = true ? {
    rowGap: responsivePropType_default
  } : {};
  rowGap.filterProps = ["rowGap"];
  var gridColumn = style_default3({
    prop: "gridColumn"
  });
  var gridRow = style_default3({
    prop: "gridRow"
  });
  var gridAutoFlow = style_default3({
    prop: "gridAutoFlow"
  });
  var gridAutoColumns = style_default3({
    prop: "gridAutoColumns"
  });
  var gridAutoRows = style_default3({
    prop: "gridAutoRows"
  });
  var gridTemplateColumns = style_default3({
    prop: "gridTemplateColumns"
  });
  var gridTemplateRows = style_default3({
    prop: "gridTemplateRows"
  });
  var gridTemplateAreas = style_default3({
    prop: "gridTemplateAreas"
  });
  var gridArea = style_default3({
    prop: "gridArea"
  });
  var grid = compose_default(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
  var grid_default = grid;

  // node_modules/@mui/system/esm/palette.js
  var color3 = style_default3({
    prop: "color",
    themeKey: "palette"
  });
  var bgcolor = style_default3({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette"
  });
  var backgroundColor = style_default3({
    prop: "backgroundColor",
    themeKey: "palette"
  });
  var palette = compose_default(color3, bgcolor, backgroundColor);
  var palette_default = palette;

  // node_modules/@mui/system/esm/positions.js
  var position2 = style_default3({
    prop: "position"
  });
  var zIndex = style_default3({
    prop: "zIndex",
    themeKey: "zIndex"
  });
  var top2 = style_default3({
    prop: "top"
  });
  var right2 = style_default3({
    prop: "right"
  });
  var bottom2 = style_default3({
    prop: "bottom"
  });
  var left2 = style_default3({
    prop: "left"
  });
  var positions_default = compose_default(position2, zIndex, top2, right2, bottom2, left2);

  // node_modules/@mui/system/esm/shadows.js
  var boxShadow = style_default3({
    prop: "boxShadow",
    themeKey: "shadows"
  });
  var shadows_default = boxShadow;

  // node_modules/@mui/system/esm/sizing.js
  function transform2(value) {
    return value <= 1 && value !== 0 ? `${value * 100}%` : value;
  }
  var width = style_default3({
    prop: "width",
    transform: transform2
  });
  var maxWidth = (props) => {
    if (props.maxWidth !== void 0 && props.maxWidth !== null) {
      const styleFromPropValue = (propValue) => {
        var _props$theme, _props$theme$breakpoi, _props$theme$breakpoi2;
        const breakpoint = ((_props$theme = props.theme) == null ? void 0 : (_props$theme$breakpoi = _props$theme.breakpoints) == null ? void 0 : (_props$theme$breakpoi2 = _props$theme$breakpoi.values) == null ? void 0 : _props$theme$breakpoi2[propValue]) || values[propValue];
        return {
          maxWidth: breakpoint || transform2(propValue)
        };
      };
      return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
    }
    return null;
  };
  maxWidth.filterProps = ["maxWidth"];
  var minWidth = style_default3({
    prop: "minWidth",
    transform: transform2
  });
  var height = style_default3({
    prop: "height",
    transform: transform2
  });
  var maxHeight = style_default3({
    prop: "maxHeight",
    transform: transform2
  });
  var minHeight = style_default3({
    prop: "minHeight",
    transform: transform2
  });
  var sizeWidth = style_default3({
    prop: "size",
    cssProperty: "width",
    transform: transform2
  });
  var sizeHeight = style_default3({
    prop: "size",
    cssProperty: "height",
    transform: transform2
  });
  var boxSizing = style_default3({
    prop: "boxSizing"
  });
  var sizing = compose_default(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
  var sizing_default = sizing;

  // node_modules/@mui/system/esm/typography.js
  var fontFamily = style_default3({
    prop: "fontFamily",
    themeKey: "typography"
  });
  var fontSize = style_default3({
    prop: "fontSize",
    themeKey: "typography"
  });
  var fontStyle = style_default3({
    prop: "fontStyle",
    themeKey: "typography"
  });
  var fontWeight = style_default3({
    prop: "fontWeight",
    themeKey: "typography"
  });
  var letterSpacing = style_default3({
    prop: "letterSpacing"
  });
  var textTransform = style_default3({
    prop: "textTransform"
  });
  var lineHeight = style_default3({
    prop: "lineHeight"
  });
  var textAlign = style_default3({
    prop: "textAlign"
  });
  var typographyVariant = style_default3({
    prop: "typography",
    cssProperty: false,
    themeKey: "typography"
  });
  var typography = compose_default(typographyVariant, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign, textTransform);
  var typography_default = typography;

  // node_modules/@mui/system/esm/getThemeValue.js
  var filterPropsMapping = {
    borders: borders_default.filterProps,
    display: display_default.filterProps,
    flexbox: flexbox_default.filterProps,
    grid: grid_default.filterProps,
    positions: positions_default.filterProps,
    palette: palette_default.filterProps,
    shadows: shadows_default.filterProps,
    sizing: sizing_default.filterProps,
    spacing: spacing_default.filterProps,
    typography: typography_default.filterProps
  };
  var styleFunctionMapping = {
    borders: borders_default,
    display: display_default,
    flexbox: flexbox_default,
    grid: grid_default,
    positions: positions_default,
    palette: palette_default,
    shadows: shadows_default,
    sizing: sizing_default,
    spacing: spacing_default,
    typography: typography_default
  };
  var propToStyleFunction = Object.keys(filterPropsMapping).reduce((acc, styleFnName) => {
    filterPropsMapping[styleFnName].forEach((propName) => {
      acc[propName] = styleFunctionMapping[styleFnName];
    });
    return acc;
  }, {});

  // node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js
  function objectsHaveSameKeys(...objects) {
    const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
    const union = new Set(allKeys);
    return objects.every((object) => union.size === Object.keys(object).length);
  }
  function callIfFn(maybeFn, arg) {
    return typeof maybeFn === "function" ? maybeFn(arg) : maybeFn;
  }
  function unstable_createStyleFunctionSx(styleFunctionMapping2 = styleFunctionMapping) {
    const propToStyleFunction2 = Object.keys(styleFunctionMapping2).reduce((acc, styleFnName) => {
      styleFunctionMapping2[styleFnName].filterProps.forEach((propName) => {
        acc[propName] = styleFunctionMapping2[styleFnName];
      });
      return acc;
    }, {});
    function getThemeValue(prop, value, theme) {
      const inputProps = {
        [prop]: value,
        theme
      };
      const styleFunction3 = propToStyleFunction2[prop];
      return styleFunction3 ? styleFunction3(inputProps) : {
        [prop]: value
      };
    }
    function styleFunctionSx2(props) {
      const {
        sx,
        theme = {}
      } = props || {};
      if (!sx) {
        return null;
      }
      function traverse(sxInput) {
        let sxObject = sxInput;
        if (typeof sxInput === "function") {
          sxObject = sxInput(theme);
        } else if (typeof sxInput !== "object") {
          return sxInput;
        }
        if (!sxObject) {
          return null;
        }
        const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
        const breakpointsKeys = Object.keys(emptyBreakpoints);
        let css2 = emptyBreakpoints;
        Object.keys(sxObject).forEach((styleKey) => {
          const value = callIfFn(sxObject[styleKey], theme);
          if (value !== null && value !== void 0) {
            if (typeof value === "object") {
              if (propToStyleFunction2[styleKey]) {
                css2 = merge_default3(css2, getThemeValue(styleKey, value, theme));
              } else {
                const breakpointsValues = handleBreakpoints({
                  theme
                }, value, (x3) => ({
                  [styleKey]: x3
                }));
                if (objectsHaveSameKeys(breakpointsValues, value)) {
                  css2[styleKey] = styleFunctionSx2({
                    sx: value,
                    theme
                  });
                } else {
                  css2 = merge_default3(css2, breakpointsValues);
                }
              }
            } else {
              css2 = merge_default3(css2, getThemeValue(styleKey, value, theme));
            }
          }
        });
        return removeUnusedBreakpoints(breakpointsKeys, css2);
      }
      return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
    }
    return styleFunctionSx2;
  }
  var styleFunctionSx = unstable_createStyleFunctionSx();
  styleFunctionSx.filterProps = ["sx"];
  var styleFunctionSx_default = styleFunctionSx;

  // node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js
  var _excluded = ["sx"];
  var splitProps = (props) => {
    const result = {
      systemProps: {},
      otherProps: {}
    };
    Object.keys(props).forEach((prop) => {
      if (propToStyleFunction[prop]) {
        result.systemProps[prop] = props[prop];
      } else {
        result.otherProps[prop] = props[prop];
      }
    });
    return result;
  };
  function extendSxProp(props) {
    const {
      sx: inSx
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
    const {
      systemProps,
      otherProps
    } = splitProps(other);
    let finalSx;
    if (Array.isArray(inSx)) {
      finalSx = [systemProps, ...inSx];
    } else if (typeof inSx === "function") {
      finalSx = (...args) => {
        const result = inSx(...args);
        if (!isPlainObject(result)) {
          return systemProps;
        }
        return _extends({}, systemProps, result);
      };
    } else {
      finalSx = _extends({}, systemProps, inSx);
    }
    return _extends({}, otherProps, {
      sx: finalSx
    });
  }

  // node_modules/clsx/dist/clsx.m.js
  function toVal(mix) {
    var k, y3, str = "";
    if (typeof mix === "string" || typeof mix === "number") {
      str += mix;
    } else if (typeof mix === "object") {
      if (Array.isArray(mix)) {
        for (k = 0; k < mix.length; k++) {
          if (mix[k]) {
            if (y3 = toVal(mix[k])) {
              str && (str += " ");
              str += y3;
            }
          }
        }
      } else {
        for (k in mix) {
          if (mix[k]) {
            str && (str += " ");
            str += k;
          }
        }
      }
    }
    return str;
  }
  function clsx_m_default() {
    var i = 0, tmp, x3, str = "";
    while (i < arguments.length) {
      if (tmp = arguments[i++]) {
        if (x3 = toVal(tmp)) {
          str && (str += " ");
          str += x3;
        }
      }
    }
    return str;
  }

  // node_modules/@mui/system/esm/createTheme/createBreakpoints.js
  var _excluded2 = ["values", "unit", "step"];
  var sortBreakpointsValues = (values3) => {
    const breakpointsAsArray = Object.keys(values3).map((key) => ({
      key,
      val: values3[key]
    })) || [];
    breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
    return breakpointsAsArray.reduce((acc, obj) => {
      return _extends({}, acc, {
        [obj.key]: obj.val
      });
    }, {});
  };
  function createBreakpoints(breakpoints) {
    const {
      values: values3 = {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536
      },
      unit: unit2 = "px",
      step = 5
    } = breakpoints, other = _objectWithoutPropertiesLoose(breakpoints, _excluded2);
    const sortedValues = sortBreakpointsValues(values3);
    const keys = Object.keys(sortedValues);
    function up(key) {
      const value = typeof values3[key] === "number" ? values3[key] : key;
      return `@media (min-width:${value}${unit2})`;
    }
    function down(key) {
      const value = typeof values3[key] === "number" ? values3[key] : key;
      return `@media (max-width:${value - step / 100}${unit2})`;
    }
    function between(start2, end) {
      const endIndex = keys.indexOf(end);
      return `@media (min-width:${typeof values3[start2] === "number" ? values3[start2] : start2}${unit2}) and (max-width:${(endIndex !== -1 && typeof values3[keys[endIndex]] === "number" ? values3[keys[endIndex]] : end) - step / 100}${unit2})`;
    }
    function only(key) {
      if (keys.indexOf(key) + 1 < keys.length) {
        return between(key, keys[keys.indexOf(key) + 1]);
      }
      return up(key);
    }
    function not(key) {
      const keyIndex = keys.indexOf(key);
      if (keyIndex === 0) {
        return up(keys[1]);
      }
      if (keyIndex === keys.length - 1) {
        return down(keys[keyIndex]);
      }
      return between(key, keys[keys.indexOf(key) + 1]).replace("@media", "@media not all and");
    }
    return _extends({
      keys,
      values: sortedValues,
      up,
      down,
      between,
      only,
      not,
      unit: unit2
    }, other);
  }

  // node_modules/@mui/system/esm/createTheme/shape.js
  var shape = {
    borderRadius: 4
  };
  var shape_default = shape;

  // node_modules/@mui/system/esm/createTheme/createSpacing.js
  function createSpacing(spacingInput = 8) {
    if (spacingInput.mui) {
      return spacingInput;
    }
    const transform3 = createUnarySpacing({
      spacing: spacingInput
    });
    const spacing2 = (...argsInput) => {
      if (true) {
        if (!(argsInput.length <= 4)) {
          console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${argsInput.length}`);
        }
      }
      const args = argsInput.length === 0 ? [1] : argsInput;
      return args.map((argument) => {
        const output = transform3(argument);
        return typeof output === "number" ? `${output}px` : output;
      }).join(" ");
    };
    spacing2.mui = true;
    return spacing2;
  }

  // node_modules/@mui/system/esm/createTheme/createTheme.js
  var _excluded3 = ["breakpoints", "palette", "spacing", "shape"];
  function createTheme(options = {}, ...args) {
    const {
      breakpoints: breakpointsInput = {},
      palette: paletteInput = {},
      spacing: spacingInput,
      shape: shapeInput = {}
    } = options, other = _objectWithoutPropertiesLoose(options, _excluded3);
    const breakpoints = createBreakpoints(breakpointsInput);
    const spacing2 = createSpacing(spacingInput);
    let muiTheme = deepmerge({
      breakpoints,
      direction: "ltr",
      components: {},
      palette: _extends({
        mode: "light"
      }, paletteInput),
      spacing: spacing2,
      shape: _extends({}, shape_default, shapeInput)
    }, other);
    muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
    return muiTheme;
  }
  var createTheme_default = createTheme;

  // node_modules/@mui/private-theming/useTheme/ThemeContext.js
  var React9 = __toESM(require_react());
  var ThemeContext2 = /* @__PURE__ */ React9.createContext(null);
  if (true) {
    ThemeContext2.displayName = "ThemeContext";
  }
  var ThemeContext_default = ThemeContext2;

  // node_modules/@mui/private-theming/useTheme/useTheme.js
  var React10 = __toESM(require_react());
  function useTheme2() {
    const theme = React10.useContext(ThemeContext_default);
    if (true) {
      React10.useDebugValue(theme);
    }
    return theme;
  }

  // node_modules/@mui/system/esm/useThemeWithoutDefault.js
  function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  function useTheme3(defaultTheme2 = null) {
    const contextTheme = useTheme2();
    return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme2 : contextTheme;
  }
  var useThemeWithoutDefault_default = useTheme3;

  // node_modules/@mui/system/esm/useTheme.js
  var systemDefaultTheme = createTheme_default();
  function useTheme4(defaultTheme2 = systemDefaultTheme) {
    return useThemeWithoutDefault_default(defaultTheme2);
  }
  var useTheme_default = useTheme4;

  // node_modules/@mui/system/esm/propsToClassKey.js
  var _excluded4 = ["variant"];
  function isEmpty(string) {
    return string.length === 0;
  }
  function propsToClassKey(props) {
    const {
      variant
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded4);
    let classKey = variant || "";
    Object.keys(other).sort().forEach((key) => {
      if (key === "color") {
        classKey += isEmpty(classKey) ? props[key] : capitalize(props[key]);
      } else {
        classKey += `${isEmpty(classKey) ? key : capitalize(key)}${capitalize(props[key].toString())}`;
      }
    });
    return classKey;
  }

  // node_modules/@mui/system/esm/createStyled.js
  var _excluded5 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
  var _excluded22 = ["theme"];
  var _excluded32 = ["theme"];
  function isEmpty2(obj) {
    return Object.keys(obj).length === 0;
  }
  var getStyleOverrides = (name, theme) => {
    if (theme.components && theme.components[name] && theme.components[name].styleOverrides) {
      return theme.components[name].styleOverrides;
    }
    return null;
  };
  var getVariantStyles = (name, theme) => {
    let variants = [];
    if (theme && theme.components && theme.components[name] && theme.components[name].variants) {
      variants = theme.components[name].variants;
    }
    const variantsStyles = {};
    variants.forEach((definition) => {
      const key = propsToClassKey(definition.props);
      variantsStyles[key] = definition.style;
    });
    return variantsStyles;
  };
  var variantsResolver = (props, styles, theme, name) => {
    var _theme$components, _theme$components$nam;
    const {
      ownerState = {}
    } = props;
    const variantsStyles = [];
    const themeVariants = theme == null ? void 0 : (_theme$components = theme.components) == null ? void 0 : (_theme$components$nam = _theme$components[name]) == null ? void 0 : _theme$components$nam.variants;
    if (themeVariants) {
      themeVariants.forEach((themeVariant) => {
        let isMatch = true;
        Object.keys(themeVariant.props).forEach((key) => {
          if (ownerState[key] !== themeVariant.props[key] && props[key] !== themeVariant.props[key]) {
            isMatch = false;
          }
        });
        if (isMatch) {
          variantsStyles.push(styles[propsToClassKey(themeVariant.props)]);
        }
      });
    }
    return variantsStyles;
  };
  function shouldForwardProp(prop) {
    return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
  }
  var systemDefaultTheme2 = createTheme_default();
  var lowercaseFirstLetter = (string) => {
    return string.charAt(0).toLowerCase() + string.slice(1);
  };
  function createStyled3(input = {}) {
    const {
      defaultTheme: defaultTheme2 = systemDefaultTheme2,
      rootShouldForwardProp: rootShouldForwardProp2 = shouldForwardProp,
      slotShouldForwardProp = shouldForwardProp,
      styleFunctionSx: styleFunctionSx2 = styleFunctionSx_default
    } = input;
    return (tag, inputOptions = {}) => {
      const {
        name: componentName,
        slot: componentSlot,
        skipVariantsResolver: inputSkipVariantsResolver,
        skipSx: inputSkipSx,
        overridesResolver
      } = inputOptions, options = _objectWithoutPropertiesLoose(inputOptions, _excluded5);
      const skipVariantsResolver = inputSkipVariantsResolver !== void 0 ? inputSkipVariantsResolver : componentSlot && componentSlot !== "Root" || false;
      const skipSx = inputSkipSx || false;
      let label2;
      if (true) {
        if (componentName) {
          label2 = `${componentName}-${lowercaseFirstLetter(componentSlot || "Root")}`;
        }
      }
      let shouldForwardPropOption = shouldForwardProp;
      if (componentSlot === "Root") {
        shouldForwardPropOption = rootShouldForwardProp2;
      } else if (componentSlot) {
        shouldForwardPropOption = slotShouldForwardProp;
      }
      const defaultStyledResolver = styled(tag, _extends({
        shouldForwardProp: shouldForwardPropOption,
        label: label2
      }, options));
      const muiStyledResolver = (styleArg, ...expressions) => {
        const expressionsWithDefaultTheme = expressions ? expressions.map((stylesArg) => {
          return typeof stylesArg === "function" && stylesArg.__emotion_real !== stylesArg ? (_ref) => {
            let {
              theme: themeInput
            } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded22);
            return stylesArg(_extends({
              theme: isEmpty2(themeInput) ? defaultTheme2 : themeInput
            }, other));
          } : stylesArg;
        }) : [];
        let transformedStyleArg = styleArg;
        if (componentName && overridesResolver) {
          expressionsWithDefaultTheme.push((props) => {
            const theme = isEmpty2(props.theme) ? defaultTheme2 : props.theme;
            const styleOverrides = getStyleOverrides(componentName, theme);
            if (styleOverrides) {
              const resolvedStyleOverrides = {};
              Object.entries(styleOverrides).forEach(([slotKey, slotStyle]) => {
                resolvedStyleOverrides[slotKey] = typeof slotStyle === "function" ? slotStyle(props) : slotStyle;
              });
              return overridesResolver(props, resolvedStyleOverrides);
            }
            return null;
          });
        }
        if (componentName && !skipVariantsResolver) {
          expressionsWithDefaultTheme.push((props) => {
            const theme = isEmpty2(props.theme) ? defaultTheme2 : props.theme;
            return variantsResolver(props, getVariantStyles(componentName, theme), theme, componentName);
          });
        }
        if (!skipSx) {
          expressionsWithDefaultTheme.push((props) => {
            const theme = isEmpty2(props.theme) ? defaultTheme2 : props.theme;
            return styleFunctionSx2(_extends({}, props, {
              theme
            }));
          });
        }
        const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;
        if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
          const placeholders = new Array(numOfCustomFnsApplied).fill("");
          transformedStyleArg = [...styleArg, ...placeholders];
          transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
        } else if (typeof styleArg === "function" && styleArg.__emotion_real !== styleArg) {
          transformedStyleArg = (_ref2) => {
            let {
              theme: themeInput
            } = _ref2, other = _objectWithoutPropertiesLoose(_ref2, _excluded32);
            return styleArg(_extends({
              theme: isEmpty2(themeInput) ? defaultTheme2 : themeInput
            }, other));
          };
        }
        const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);
        if (true) {
          let displayName;
          if (componentName) {
            displayName = `${componentName}${componentSlot || ""}`;
          }
          if (displayName === void 0) {
            displayName = `Styled(${getDisplayName(tag)})`;
          }
          Component.displayName = displayName;
        }
        return Component;
      };
      if (defaultStyledResolver.withConfig) {
        muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
      }
      return muiStyledResolver;
    };
  }

  // node_modules/@mui/system/esm/useThemeProps/getThemeProps.js
  function getThemeProps(params) {
    const {
      theme,
      name,
      props
    } = params;
    if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
      return props;
    }
    return resolveProps(theme.components[name].defaultProps, props);
  }

  // node_modules/@mui/system/esm/useThemeProps/useThemeProps.js
  function useThemeProps({
    props,
    name,
    defaultTheme: defaultTheme2
  }) {
    const theme = useTheme_default(defaultTheme2);
    const mergedProps = getThemeProps({
      theme,
      name,
      props
    });
    return mergedProps;
  }

  // node_modules/@mui/system/esm/colorManipulator.js
  function clamp(value, min2 = 0, max3 = 1) {
    if (true) {
      if (value < min2 || value > max3) {
        console.error(`MUI: The value provided ${value} is out of range [${min2}, ${max3}].`);
      }
    }
    return Math.min(Math.max(min2, value), max3);
  }
  function hexToRgb(color4) {
    color4 = color4.substr(1);
    const re2 = new RegExp(`.{1,${color4.length >= 6 ? 2 : 1}}`, "g");
    let colors2 = color4.match(re2);
    if (colors2 && colors2[0].length === 1) {
      colors2 = colors2.map((n) => n + n);
    }
    return colors2 ? `rgb${colors2.length === 4 ? "a" : ""}(${colors2.map((n, index) => {
      return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3;
    }).join(", ")})` : "";
  }
  function decomposeColor(color4) {
    if (color4.type) {
      return color4;
    }
    if (color4.charAt(0) === "#") {
      return decomposeColor(hexToRgb(color4));
    }
    const marker = color4.indexOf("(");
    const type2 = color4.substring(0, marker);
    if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(type2) === -1) {
      throw new Error(true ? `MUI: Unsupported \`${color4}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : formatMuiErrorMessage(9, color4));
    }
    let values3 = color4.substring(marker + 1, color4.length - 1);
    let colorSpace;
    if (type2 === "color") {
      values3 = values3.split(" ");
      colorSpace = values3.shift();
      if (values3.length === 4 && values3[3].charAt(0) === "/") {
        values3[3] = values3[3].substr(1);
      }
      if (["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(colorSpace) === -1) {
        throw new Error(true ? `MUI: unsupported \`${colorSpace}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : formatMuiErrorMessage(10, colorSpace));
      }
    } else {
      values3 = values3.split(",");
    }
    values3 = values3.map((value) => parseFloat(value));
    return {
      type: type2,
      values: values3,
      colorSpace
    };
  }
  function recomposeColor(color4) {
    const {
      type: type2,
      colorSpace
    } = color4;
    let {
      values: values3
    } = color4;
    if (type2.indexOf("rgb") !== -1) {
      values3 = values3.map((n, i) => i < 3 ? parseInt(n, 10) : n);
    } else if (type2.indexOf("hsl") !== -1) {
      values3[1] = `${values3[1]}%`;
      values3[2] = `${values3[2]}%`;
    }
    if (type2.indexOf("color") !== -1) {
      values3 = `${colorSpace} ${values3.join(" ")}`;
    } else {
      values3 = `${values3.join(", ")}`;
    }
    return `${type2}(${values3})`;
  }
  function hslToRgb(color4) {
    color4 = decomposeColor(color4);
    const {
      values: values3
    } = color4;
    const h = values3[0];
    const s = values3[1] / 100;
    const l = values3[2] / 100;
    const a = s * Math.min(l, 1 - l);
    const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    let type2 = "rgb";
    const rgb2 = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
    if (color4.type === "hsla") {
      type2 += "a";
      rgb2.push(values3[3]);
    }
    return recomposeColor({
      type: type2,
      values: rgb2
    });
  }
  function getLuminance(color4) {
    color4 = decomposeColor(color4);
    let rgb2 = color4.type === "hsl" ? decomposeColor(hslToRgb(color4)).values : color4.values;
    rgb2 = rgb2.map((val) => {
      if (color4.type !== "color") {
        val /= 255;
      }
      return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
    });
    return Number((0.2126 * rgb2[0] + 0.7152 * rgb2[1] + 0.0722 * rgb2[2]).toFixed(3));
  }
  function getContrastRatio(foreground, background) {
    const lumA = getLuminance(foreground);
    const lumB = getLuminance(background);
    return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
  }
  function alpha(color4, value) {
    color4 = decomposeColor(color4);
    value = clamp(value);
    if (color4.type === "rgb" || color4.type === "hsl") {
      color4.type += "a";
    }
    if (color4.type === "color") {
      color4.values[3] = `/${value}`;
    } else {
      color4.values[3] = value;
    }
    return recomposeColor(color4);
  }
  function darken(color4, coefficient) {
    color4 = decomposeColor(color4);
    coefficient = clamp(coefficient);
    if (color4.type.indexOf("hsl") !== -1) {
      color4.values[2] *= 1 - coefficient;
    } else if (color4.type.indexOf("rgb") !== -1 || color4.type.indexOf("color") !== -1) {
      for (let i = 0; i < 3; i += 1) {
        color4.values[i] *= 1 - coefficient;
      }
    }
    return recomposeColor(color4);
  }
  function lighten(color4, coefficient) {
    color4 = decomposeColor(color4);
    coefficient = clamp(coefficient);
    if (color4.type.indexOf("hsl") !== -1) {
      color4.values[2] += (100 - color4.values[2]) * coefficient;
    } else if (color4.type.indexOf("rgb") !== -1) {
      for (let i = 0; i < 3; i += 1) {
        color4.values[i] += (255 - color4.values[i]) * coefficient;
      }
    } else if (color4.type.indexOf("color") !== -1) {
      for (let i = 0; i < 3; i += 1) {
        color4.values[i] += (1 - color4.values[i]) * coefficient;
      }
    }
    return recomposeColor(color4);
  }

  // node_modules/@mui/base/composeClasses/composeClasses.js
  function composeClasses(slots, getUtilityClass, classes) {
    const output = {};
    Object.keys(slots).forEach((slot) => {
      output[slot] = slots[slot].reduce((acc, key) => {
        if (key) {
          if (classes && classes[key]) {
            acc.push(classes[key]);
          }
          acc.push(getUtilityClass(key));
        }
        return acc;
      }, []).join(" ");
    });
    return output;
  }

  // node_modules/@mui/base/className/ClassNameGenerator.js
  var defaultGenerator = (componentName) => componentName;
  var createClassNameGenerator = () => {
    let generate = defaultGenerator;
    return {
      configure(generator) {
        generate = generator;
      },
      generate(componentName) {
        return generate(componentName);
      },
      reset() {
        generate = defaultGenerator;
      }
    };
  };
  var ClassNameGenerator = createClassNameGenerator();
  var ClassNameGenerator_default = ClassNameGenerator;

  // node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js
  var globalStateClassesMapping = {
    active: "Mui-active",
    checked: "Mui-checked",
    completed: "Mui-completed",
    disabled: "Mui-disabled",
    error: "Mui-error",
    expanded: "Mui-expanded",
    focused: "Mui-focused",
    focusVisible: "Mui-focusVisible",
    required: "Mui-required",
    selected: "Mui-selected"
  };
  function generateUtilityClass(componentName, slot) {
    const globalStateClass = globalStateClassesMapping[slot];
    return globalStateClass || `${ClassNameGenerator_default.generate(componentName)}-${slot}`;
  }

  // node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js
  function generateUtilityClasses(componentName, slots) {
    const result = {};
    slots.forEach((slot) => {
      result[slot] = generateUtilityClass(componentName, slot);
    });
    return result;
  }

  // node_modules/@mui/material/styles/createMixins.js
  function createMixins(breakpoints, spacing2, mixins) {
    return _extends({
      toolbar: {
        minHeight: 56,
        [`${breakpoints.up("xs")} and (orientation: landscape)`]: {
          minHeight: 48
        },
        [breakpoints.up("sm")]: {
          minHeight: 64
        }
      }
    }, mixins);
  }

  // node_modules/@mui/material/colors/common.js
  var common = {
    black: "#000",
    white: "#fff"
  };
  var common_default = common;

  // node_modules/@mui/material/colors/grey.js
  var grey = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161"
  };
  var grey_default = grey;

  // node_modules/@mui/material/colors/purple.js
  var purple = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff"
  };
  var purple_default = purple;

  // node_modules/@mui/material/colors/red.js
  var red = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000"
  };
  var red_default = red;

  // node_modules/@mui/material/colors/orange.js
  var orange = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00"
  };
  var orange_default = orange;

  // node_modules/@mui/material/colors/blue.js
  var blue = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff"
  };
  var blue_default = blue;

  // node_modules/@mui/material/colors/lightBlue.js
  var lightBlue = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea"
  };
  var lightBlue_default = lightBlue;

  // node_modules/@mui/material/colors/green.js
  var green = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853"
  };
  var green_default = green;

  // node_modules/@mui/material/styles/createPalette.js
  var _excluded6 = ["mode", "contrastThreshold", "tonalOffset"];
  var light = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: {
      paper: common_default.white,
      default: common_default.white
    },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
  var dark = {
    text: {
      primary: common_default.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: common_default.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
  function addLightOrDark(intent, direction, shade, tonalOffset) {
    const tonalOffsetLight = tonalOffset.light || tonalOffset;
    const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
    if (!intent[direction]) {
      if (intent.hasOwnProperty(shade)) {
        intent[direction] = intent[shade];
      } else if (direction === "light") {
        intent.light = lighten(intent.main, tonalOffsetLight);
      } else if (direction === "dark") {
        intent.dark = darken(intent.main, tonalOffsetDark);
      }
    }
  }
  function getDefaultPrimary(mode = "light") {
    if (mode === "dark") {
      return {
        main: blue_default[200],
        light: blue_default[50],
        dark: blue_default[400]
      };
    }
    return {
      main: blue_default[700],
      light: blue_default[400],
      dark: blue_default[800]
    };
  }
  function getDefaultSecondary(mode = "light") {
    if (mode === "dark") {
      return {
        main: purple_default[200],
        light: purple_default[50],
        dark: purple_default[400]
      };
    }
    return {
      main: purple_default[500],
      light: purple_default[300],
      dark: purple_default[700]
    };
  }
  function getDefaultError(mode = "light") {
    if (mode === "dark") {
      return {
        main: red_default[500],
        light: red_default[300],
        dark: red_default[700]
      };
    }
    return {
      main: red_default[700],
      light: red_default[400],
      dark: red_default[800]
    };
  }
  function getDefaultInfo(mode = "light") {
    if (mode === "dark") {
      return {
        main: lightBlue_default[400],
        light: lightBlue_default[300],
        dark: lightBlue_default[700]
      };
    }
    return {
      main: lightBlue_default[700],
      light: lightBlue_default[500],
      dark: lightBlue_default[900]
    };
  }
  function getDefaultSuccess(mode = "light") {
    if (mode === "dark") {
      return {
        main: green_default[400],
        light: green_default[300],
        dark: green_default[700]
      };
    }
    return {
      main: green_default[800],
      light: green_default[500],
      dark: green_default[900]
    };
  }
  function getDefaultWarning(mode = "light") {
    if (mode === "dark") {
      return {
        main: orange_default[400],
        light: orange_default[300],
        dark: orange_default[700]
      };
    }
    return {
      main: "#ed6c02",
      light: orange_default[500],
      dark: orange_default[900]
    };
  }
  function createPalette(palette2) {
    const {
      mode = "light",
      contrastThreshold = 3,
      tonalOffset = 0.2
    } = palette2, other = _objectWithoutPropertiesLoose(palette2, _excluded6);
    const primary = palette2.primary || getDefaultPrimary(mode);
    const secondary = palette2.secondary || getDefaultSecondary(mode);
    const error = palette2.error || getDefaultError(mode);
    const info = palette2.info || getDefaultInfo(mode);
    const success = palette2.success || getDefaultSuccess(mode);
    const warning = palette2.warning || getDefaultWarning(mode);
    function getContrastText(background) {
      const contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
      if (true) {
        const contrast = getContrastRatio(background, contrastText);
        if (contrast < 3) {
          console.error([`MUI: The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join("\n"));
        }
      }
      return contrastText;
    }
    const augmentColor = ({
      color: color4,
      name,
      mainShade = 500,
      lightShade = 300,
      darkShade = 700
    }) => {
      color4 = _extends({}, color4);
      if (!color4.main && color4[mainShade]) {
        color4.main = color4[mainShade];
      }
      if (!color4.hasOwnProperty("main")) {
        throw new Error(true ? `MUI: The color${name ? ` (${name})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${mainShade}\` property.` : formatMuiErrorMessage(11, name ? ` (${name})` : "", mainShade));
      }
      if (typeof color4.main !== "string") {
        throw new Error(true ? `MUI: The color${name ? ` (${name})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(color4.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : formatMuiErrorMessage(12, name ? ` (${name})` : "", JSON.stringify(color4.main)));
      }
      addLightOrDark(color4, "light", lightShade, tonalOffset);
      addLightOrDark(color4, "dark", darkShade, tonalOffset);
      if (!color4.contrastText) {
        color4.contrastText = getContrastText(color4.main);
      }
      return color4;
    };
    const modes = {
      dark,
      light
    };
    if (true) {
      if (!modes[mode]) {
        console.error(`MUI: The palette mode \`${mode}\` is not supported.`);
      }
    }
    const paletteOutput = deepmerge(_extends({
      common: common_default,
      mode,
      primary: augmentColor({
        color: primary,
        name: "primary"
      }),
      secondary: augmentColor({
        color: secondary,
        name: "secondary",
        mainShade: "A400",
        lightShade: "A200",
        darkShade: "A700"
      }),
      error: augmentColor({
        color: error,
        name: "error"
      }),
      warning: augmentColor({
        color: warning,
        name: "warning"
      }),
      info: augmentColor({
        color: info,
        name: "info"
      }),
      success: augmentColor({
        color: success,
        name: "success"
      }),
      grey: grey_default,
      contrastThreshold,
      getContrastText,
      augmentColor,
      tonalOffset
    }, modes[mode]), other);
    return paletteOutput;
  }

  // node_modules/@mui/material/styles/createTypography.js
  var _excluded7 = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
  function round(value) {
    return Math.round(value * 1e5) / 1e5;
  }
  var caseAllCaps = {
    textTransform: "uppercase"
  };
  var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
  function createTypography(palette2, typography2) {
    const _ref = typeof typography2 === "function" ? typography2(palette2) : typography2, {
      fontFamily: fontFamily2 = defaultFontFamily,
      fontSize: fontSize2 = 14,
      fontWeightLight = 300,
      fontWeightRegular = 400,
      fontWeightMedium = 500,
      fontWeightBold = 700,
      htmlFontSize = 16,
      allVariants,
      pxToRem: pxToRem2
    } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded7);
    if (true) {
      if (typeof fontSize2 !== "number") {
        console.error("MUI: `fontSize` is required to be a number.");
      }
      if (typeof htmlFontSize !== "number") {
        console.error("MUI: `htmlFontSize` is required to be a number.");
      }
    }
    const coef = fontSize2 / 14;
    const pxToRem = pxToRem2 || ((size) => `${size / htmlFontSize * coef}rem`);
    const buildVariant = (fontWeight2, size, lineHeight2, letterSpacing2, casing) => _extends({
      fontFamily: fontFamily2,
      fontWeight: fontWeight2,
      fontSize: pxToRem(size),
      lineHeight: lineHeight2
    }, fontFamily2 === defaultFontFamily ? {
      letterSpacing: `${round(letterSpacing2 / size)}em`
    } : {}, casing, allVariants);
    const variants = {
      h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
      h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
      h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
      h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
      h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
      h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
      subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
      subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
      body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
      body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
      button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
      caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
      overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
    };
    return deepmerge(_extends({
      htmlFontSize,
      pxToRem,
      fontFamily: fontFamily2,
      fontSize: fontSize2,
      fontWeightLight,
      fontWeightRegular,
      fontWeightMedium,
      fontWeightBold
    }, variants), other, {
      clone: false
    });
  }

  // node_modules/@mui/material/styles/shadows.js
  var shadowKeyUmbraOpacity = 0.2;
  var shadowKeyPenumbraOpacity = 0.14;
  var shadowAmbientShadowOpacity = 0.12;
  function createShadow(...px) {
    return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(",");
  }
  var shadows = ["none", createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
  var shadows_default2 = shadows;

  // node_modules/@mui/material/styles/createTransitions.js
  var _excluded8 = ["duration", "easing", "delay"];
  var easing = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
  };
  var duration = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195
  };
  function formatMs(milliseconds) {
    return `${Math.round(milliseconds)}ms`;
  }
  function getAutoHeightDuration(height2) {
    if (!height2) {
      return 0;
    }
    const constant = height2 / 36;
    return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
  }
  function createTransitions(inputTransitions) {
    const mergedEasing = _extends({}, easing, inputTransitions.easing);
    const mergedDuration = _extends({}, duration, inputTransitions.duration);
    const create2 = (props = ["all"], options = {}) => {
      const {
        duration: durationOption = mergedDuration.standard,
        easing: easingOption = mergedEasing.easeInOut,
        delay = 0
      } = options, other = _objectWithoutPropertiesLoose(options, _excluded8);
      if (true) {
        const isString = (value) => typeof value === "string";
        const isNumber = (value) => !isNaN(parseFloat(value));
        if (!isString(props) && !Array.isArray(props)) {
          console.error('MUI: Argument "props" must be a string or Array.');
        }
        if (!isNumber(durationOption) && !isString(durationOption)) {
          console.error(`MUI: Argument "duration" must be a number or a string but found ${durationOption}.`);
        }
        if (!isString(easingOption)) {
          console.error('MUI: Argument "easing" must be a string.');
        }
        if (!isNumber(delay) && !isString(delay)) {
          console.error('MUI: Argument "delay" must be a number or a string.');
        }
        if (Object.keys(other).length !== 0) {
          console.error(`MUI: Unrecognized argument(s) [${Object.keys(other).join(",")}].`);
        }
      }
      return (Array.isArray(props) ? props : [props]).map((animatedProp) => `${animatedProp} ${typeof durationOption === "string" ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === "string" ? delay : formatMs(delay)}`).join(",");
    };
    return _extends({
      getAutoHeightDuration,
      create: create2
    }, inputTransitions, {
      easing: mergedEasing,
      duration: mergedDuration
    });
  }

  // node_modules/@mui/material/styles/zIndex.js
  var zIndex2 = {
    mobileStepper: 1e3,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  };
  var zIndex_default = zIndex2;

  // node_modules/@mui/material/styles/createTheme.js
  var _excluded9 = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
  function createTheme2(options = {}, ...args) {
    const {
      mixins: mixinsInput = {},
      palette: paletteInput = {},
      transitions: transitionsInput = {},
      typography: typographyInput = {}
    } = options, other = _objectWithoutPropertiesLoose(options, _excluded9);
    const palette2 = createPalette(paletteInput);
    const systemTheme = createTheme_default(options);
    let muiTheme = deepmerge(systemTheme, {
      mixins: createMixins(systemTheme.breakpoints, systemTheme.spacing, mixinsInput),
      palette: palette2,
      shadows: shadows_default2.slice(),
      typography: createTypography(palette2, typographyInput),
      transitions: createTransitions(transitionsInput),
      zIndex: _extends({}, zIndex_default)
    });
    muiTheme = deepmerge(muiTheme, other);
    muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
    if (true) {
      const stateClasses = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"];
      const traverse = (node2, component) => {
        let key;
        for (key in node2) {
          const child = node2[key];
          if (stateClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
            if (true) {
              const stateClass = generateUtilityClass("", key);
              console.error([`MUI: The \`${component}\` component increases the CSS specificity of the \`${key}\` internal state.`, "You can not override it like this: ", JSON.stringify(node2, null, 2), "", `Instead, you need to use the '&.${stateClass}' syntax:`, JSON.stringify({
                root: {
                  [`&.${stateClass}`]: child
                }
              }, null, 2), "", "https://mui.com/r/state-classes-guide"].join("\n"));
            }
            node2[key] = {};
          }
        }
      };
      Object.keys(muiTheme.components).forEach((component) => {
        const styleOverrides = muiTheme.components[component].styleOverrides;
        if (styleOverrides && component.indexOf("Mui") === 0) {
          traverse(styleOverrides, component);
        }
      });
    }
    return muiTheme;
  }
  var createTheme_default2 = createTheme2;

  // node_modules/@mui/material/styles/useTheme.js
  var React11 = __toESM(require_react());

  // node_modules/@mui/material/styles/defaultTheme.js
  var defaultTheme = createTheme_default2();
  var defaultTheme_default = defaultTheme;

  // node_modules/@mui/material/styles/useTheme.js
  function useTheme5() {
    const theme = useTheme_default(defaultTheme_default);
    if (true) {
      React11.useDebugValue(theme);
    }
    return theme;
  }

  // node_modules/@mui/material/styles/useThemeProps.js
  function useThemeProps2({
    props,
    name
  }) {
    return useThemeProps({
      props,
      name,
      defaultTheme: defaultTheme_default
    });
  }

  // node_modules/@mui/material/styles/styled.js
  var rootShouldForwardProp = (prop) => shouldForwardProp(prop) && prop !== "classes";
  var styled2 = createStyled3({
    defaultTheme: defaultTheme_default,
    rootShouldForwardProp
  });
  var styled_default = styled2;

  // node_modules/@zilliz/zui/dist/Theme.js
  var customPalette = {
    blue: {
      dark: "#003C96",
      primary: "#0052CC",
      blue1: "#0084FF",
      blue2: "#BADEFF",
      blue3: "#E8F1FF",
      blue4: "#FAFCFF"
    },
    black: {
      black1: "#1D2939",
      black2: "#475467",
      black3: "#5E6A7C",
      black4: "#CED2D9",
      black5: "#E8EAEE",
      black6: "#F9FAFB"
    },
    green: {
      dark: "#127D00",
      green1: "#00B66B",
      green2: "#B5EAD4",
      green3: "#E7F8EE"
    },
    purple: {
      purple1: "#9E2EFF",
      purple2: "#F0D1FF",
      purple3: "#FAF0FF"
    },
    yellow: {
      dark: "#AD6800",
      yellow1: "#D78100",
      yellow2: "#EFCD99",
      yellow3: "#FFF2DF"
    },
    red: {
      dark: "#B62117",
      red1: "#D6483F",
      red2: "#E89994",
      red3: "#F5E8E4"
    }
  };
  var customTypography = {
    typography: {
      fontFamily: [
        '"SF Pro"',
        '"Noto Sans SC"',
        '"Segoe UI"',
        "Roboto",
        "-apple-system"
      ].join(","),
      h1: {
        fontSize: "28px",
        lineHeight: "36px",
        fontWeight: "500",
        letterSpacing: "0.015em",
        color: customPalette.black.black1
      },
      h2: {
        fontSize: "26px",
        lineHeight: "33px",
        fontWeight: "500",
        letterSpacing: "0"
      },
      h3: {
        fontSize: "24px",
        lineHeight: "32px",
        fontWeight: "500",
        letterSpacing: "0"
      },
      h4: {
        fontSize: "22px",
        lineHeight: "28px",
        fontWeight: "500",
        letterSpacing: "0.015em"
      },
      h5: {
        fontSize: "20px",
        lineHeight: "26px",
        fontWeight: "500",
        letterSpacing: "0.015em"
      },
      h6: {
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: "500",
        letterSpacing: "0"
      },
      body1: {
        fontSize: "14px",
        lineHeight: "20px",
        fontWeight: "500",
        letterSpacing: "0"
      },
      body2: {
        fontSize: "13px",
        lineHeight: "19px",
        fontWeight: "500",
        letterSpacing: "0"
      },
      caption: {
        fontSize: "12px",
        lineHeight: "16px",
        fontWeight: "500",
        letterSpacing: "0"
      }
    }
  };
  var zCloudTheme = createTheme_default2({
    palette: {
      primary: {
        main: customPalette.blue.primary,
        dark: customPalette.blue.dark,
        light: customPalette.blue.blue1
      },
      success: {
        dark: customPalette.green.dark,
        main: customPalette.green.green1,
        light: customPalette.green.green2,
        contrastText: customPalette.green.green3
      },
      info: {
        dark: customPalette.blue.primary,
        main: customPalette.blue.blue1,
        light: customPalette.blue.blue3,
        contrastText: customPalette.blue.blue3
      },
      warning: {
        dark: customPalette.yellow.dark,
        main: customPalette.yellow.yellow1,
        light: customPalette.yellow.yellow2,
        contrastText: customPalette.yellow.yellow3
      },
      error: {
        dark: customPalette.red.dark,
        main: customPalette.red.red1,
        light: customPalette.red.red2,
        contrastText: customPalette.red.red3
      },
      text: {
        primary: customPalette.black.black1,
        secondary: customPalette.black.black2,
        disabled: customPalette.black.black3
      }
    },
    ...customPalette,
    ...customTypography,
    body: {
      body04: {
        fontFamily: "SF Pro Display",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "20px"
      },
      body05: {
        fontFamily: "SF Pro Display",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "20px"
      }
    }
  });

  // node_modules/@zilliz/zui/dist/ZAlert/ZAlert.js
  var import_jsx_runtime30 = __toESM(require_jsx_runtime());
  var React36 = __toESM(require_react());

  // node_modules/@mui/material/utils/useEventCallback.js
  var useEventCallback_default = useEventCallback;

  // node_modules/@mui/material/utils/capitalize.js
  var capitalize_default = capitalize;

  // node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }

  // node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _setPrototypeOf(subClass, superClass);
  }

  // node_modules/react-transition-group/esm/TransitionGroupContext.js
  var import_react7 = __toESM(require_react());
  var TransitionGroupContext_default = import_react7.default.createContext(null);

  // node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }

  // node_modules/react-transition-group/esm/TransitionGroup.js
  var import_prop_types4 = __toESM(require_prop_types());
  var import_react9 = __toESM(require_react());

  // node_modules/react-transition-group/esm/utils/ChildMapping.js
  var import_react8 = __toESM(require_react());
  function getChildMapping(children2, mapFn) {
    var mapper = function mapper2(child) {
      return mapFn && (0, import_react8.isValidElement)(child) ? mapFn(child) : child;
    };
    var result = /* @__PURE__ */ Object.create(null);
    if (children2)
      import_react8.Children.map(children2, function(c) {
        return c;
      }).forEach(function(child) {
        result[child.key] = mapper(child);
      });
    return result;
  }
  function mergeChildMappings(prev2, next2) {
    prev2 = prev2 || {};
    next2 = next2 || {};
    function getValueForKey(key) {
      return key in next2 ? next2[key] : prev2[key];
    }
    var nextKeysPending = /* @__PURE__ */ Object.create(null);
    var pendingKeys = [];
    for (var prevKey in prev2) {
      if (prevKey in next2) {
        if (pendingKeys.length) {
          nextKeysPending[prevKey] = pendingKeys;
          pendingKeys = [];
        }
      } else {
        pendingKeys.push(prevKey);
      }
    }
    var i;
    var childMapping = {};
    for (var nextKey in next2) {
      if (nextKeysPending[nextKey]) {
        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
          var pendingNextKey = nextKeysPending[nextKey][i];
          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
        }
      }
      childMapping[nextKey] = getValueForKey(nextKey);
    }
    for (i = 0; i < pendingKeys.length; i++) {
      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }
    return childMapping;
  }
  function getProp(child, prop, props) {
    return props[prop] != null ? props[prop] : child.props[prop];
  }
  function getInitialChildMapping(props, onExited) {
    return getChildMapping(props.children, function(child) {
      return (0, import_react8.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        appear: getProp(child, "appear", props),
        enter: getProp(child, "enter", props),
        exit: getProp(child, "exit", props)
      });
    });
  }
  function getNextChildMapping(nextProps, prevChildMapping, onExited) {
    var nextChildMapping = getChildMapping(nextProps.children);
    var children2 = mergeChildMappings(prevChildMapping, nextChildMapping);
    Object.keys(children2).forEach(function(key) {
      var child = children2[key];
      if (!(0, import_react8.isValidElement)(child))
        return;
      var hasPrev = key in prevChildMapping;
      var hasNext = key in nextChildMapping;
      var prevChild = prevChildMapping[key];
      var isLeaving = (0, import_react8.isValidElement)(prevChild) && !prevChild.props.in;
      if (hasNext && (!hasPrev || isLeaving)) {
        children2[key] = (0, import_react8.cloneElement)(child, {
          onExited: onExited.bind(null, child),
          in: true,
          exit: getProp(child, "exit", nextProps),
          enter: getProp(child, "enter", nextProps)
        });
      } else if (!hasNext && hasPrev && !isLeaving) {
        children2[key] = (0, import_react8.cloneElement)(child, {
          in: false
        });
      } else if (hasNext && hasPrev && (0, import_react8.isValidElement)(prevChild)) {
        children2[key] = (0, import_react8.cloneElement)(child, {
          onExited: onExited.bind(null, child),
          in: prevChild.props.in,
          exit: getProp(child, "exit", nextProps),
          enter: getProp(child, "enter", nextProps)
        });
      }
    });
    return children2;
  }

  // node_modules/react-transition-group/esm/TransitionGroup.js
  var values2 = Object.values || function(obj) {
    return Object.keys(obj).map(function(k) {
      return obj[k];
    });
  };
  var defaultProps = {
    component: "div",
    childFactory: function childFactory(child) {
      return child;
    }
  };
  var TransitionGroup = /* @__PURE__ */ function(_React$Component) {
    _inheritsLoose(TransitionGroup2, _React$Component);
    function TransitionGroup2(props, context) {
      var _this;
      _this = _React$Component.call(this, props, context) || this;
      var handleExited = _this.handleExited.bind(_assertThisInitialized(_this));
      _this.state = {
        contextValue: {
          isMounting: true
        },
        handleExited,
        firstRender: true
      };
      return _this;
    }
    var _proto = TransitionGroup2.prototype;
    _proto.componentDidMount = function componentDidMount() {
      this.mounted = true;
      this.setState({
        contextValue: {
          isMounting: false
        }
      });
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      this.mounted = false;
    };
    TransitionGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
      var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
      return {
        children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
        firstRender: false
      };
    };
    _proto.handleExited = function handleExited(child, node2) {
      var currentChildMapping = getChildMapping(this.props.children);
      if (child.key in currentChildMapping)
        return;
      if (child.props.onExited) {
        child.props.onExited(node2);
      }
      if (this.mounted) {
        this.setState(function(state) {
          var children2 = _extends({}, state.children);
          delete children2[child.key];
          return {
            children: children2
          };
        });
      }
    };
    _proto.render = function render() {
      var _this$props = this.props, Component = _this$props.component, childFactory2 = _this$props.childFactory, props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);
      var contextValue = this.state.contextValue;
      var children2 = values2(this.state.children).map(childFactory2);
      delete props.appear;
      delete props.enter;
      delete props.exit;
      if (Component === null) {
        return /* @__PURE__ */ import_react9.default.createElement(TransitionGroupContext_default.Provider, {
          value: contextValue
        }, children2);
      }
      return /* @__PURE__ */ import_react9.default.createElement(TransitionGroupContext_default.Provider, {
        value: contextValue
      }, /* @__PURE__ */ import_react9.default.createElement(Component, props, children2));
    };
    return TransitionGroup2;
  }(import_react9.default.Component);
  TransitionGroup.propTypes = true ? {
    component: import_prop_types4.default.any,
    children: import_prop_types4.default.node,
    appear: import_prop_types4.default.bool,
    enter: import_prop_types4.default.bool,
    exit: import_prop_types4.default.bool,
    childFactory: import_prop_types4.default.func
  } : {};
  TransitionGroup.defaultProps = defaultProps;
  var TransitionGroup_default = TransitionGroup;

  // node_modules/@mui/material/utils/useForkRef.js
  var useForkRef_default = useForkRef;

  // node_modules/@mui/material/Paper/Paper.js
  var React14 = __toESM(require_react());
  var import_prop_types5 = __toESM(require_prop_types());

  // node_modules/@mui/material/Paper/paperClasses.js
  function getPaperUtilityClass(slot) {
    return generateUtilityClass("MuiPaper", slot);
  }
  var paperClasses = generateUtilityClasses("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);

  // node_modules/@mui/material/Paper/Paper.js
  var import_jsx_runtime = __toESM(require_jsx_runtime());
  var _excluded10 = ["className", "component", "elevation", "square", "variant"];
  var getOverlayAlpha = (elevation) => {
    let alphaValue;
    if (elevation < 1) {
      alphaValue = 5.11916 * elevation ** 2;
    } else {
      alphaValue = 4.5 * Math.log(elevation + 1) + 2;
    }
    return (alphaValue / 100).toFixed(2);
  };
  var useUtilityClasses = (ownerState) => {
    const {
      square,
      elevation,
      variant,
      classes
    } = ownerState;
    const slots = {
      root: ["root", variant, !square && "rounded", variant === "elevation" && `elevation${elevation}`]
    };
    return composeClasses(slots, getPaperUtilityClass, classes);
  };
  var PaperRoot = styled_default("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, styles[ownerState.variant], !ownerState.square && styles.rounded, ownerState.variant === "elevation" && styles[`elevation${ownerState.elevation}`]];
    }
  })(({
    theme,
    ownerState
  }) => _extends({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    transition: theme.transitions.create("box-shadow")
  }, !ownerState.square && {
    borderRadius: theme.shape.borderRadius
  }, ownerState.variant === "outlined" && {
    border: `1px solid ${theme.palette.divider}`
  }, ownerState.variant === "elevation" && _extends({
    boxShadow: theme.shadows[ownerState.elevation]
  }, theme.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${alpha("#fff", getOverlayAlpha(ownerState.elevation))}, ${alpha("#fff", getOverlayAlpha(ownerState.elevation))})`
  })));
  var Paper = /* @__PURE__ */ React14.forwardRef(function Paper2(inProps, ref) {
    const props = useThemeProps2({
      props: inProps,
      name: "MuiPaper"
    });
    const {
      className,
      component = "div",
      elevation = 1,
      square = false,
      variant = "elevation"
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded10);
    const ownerState = _extends({}, props, {
      component,
      elevation,
      square,
      variant
    });
    const classes = useUtilityClasses(ownerState);
    if (true) {
      const theme = useTheme5();
      if (theme.shadows[elevation] === void 0) {
        console.error([`MUI: The elevation provided <Paper elevation={${elevation}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${elevation}]\` is defined.`].join("\n"));
      }
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaperRoot, _extends({
      as: component,
      ownerState,
      className: clsx_m_default(classes.root, className),
      ref
    }, other));
  });
  true ? Paper.propTypes = {
    children: import_prop_types5.default.node,
    classes: import_prop_types5.default.object,
    className: import_prop_types5.default.string,
    component: import_prop_types5.default.elementType,
    elevation: chainPropTypes(integerPropType_default, (props) => {
      const {
        elevation,
        variant
      } = props;
      if (elevation > 0 && variant === "outlined") {
        return new Error(`MUI: Combining \`elevation={${elevation}}\` with \`variant="${variant}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`);
      }
      return null;
    }),
    square: import_prop_types5.default.bool,
    sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object]),
    variant: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["elevation", "outlined"]), import_prop_types5.default.string])
  } : void 0;
  var Paper_default = Paper;

  // node_modules/@mui/material/Alert/Alert.js
  var React26 = __toESM(require_react());
  var import_prop_types11 = __toESM(require_prop_types());

  // node_modules/@mui/material/Alert/alertClasses.js
  function getAlertUtilityClass(slot) {
    return generateUtilityClass("MuiAlert", slot);
  }
  var alertClasses = generateUtilityClasses("MuiAlert", ["root", "action", "icon", "message", "filled", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]);
  var alertClasses_default = alertClasses;

  // node_modules/@mui/material/IconButton/IconButton.js
  var React18 = __toESM(require_react());
  var import_prop_types9 = __toESM(require_prop_types());

  // node_modules/@mui/material/ButtonBase/ButtonBase.js
  var React17 = __toESM(require_react());
  var import_prop_types8 = __toESM(require_prop_types());

  // node_modules/@mui/material/utils/useIsFocusVisible.js
  var useIsFocusVisible_default = useIsFocusVisible;

  // node_modules/@mui/material/ButtonBase/TouchRipple.js
  var React16 = __toESM(require_react());
  var import_prop_types7 = __toESM(require_prop_types());

  // node_modules/@mui/material/ButtonBase/Ripple.js
  var React15 = __toESM(require_react());
  var import_prop_types6 = __toESM(require_prop_types());
  var import_jsx_runtime2 = __toESM(require_jsx_runtime());
  function Ripple(props) {
    const {
      className,
      classes,
      pulsate = false,
      rippleX,
      rippleY,
      rippleSize,
      in: inProp,
      onExited,
      timeout: timeout2
    } = props;
    const [leaving, setLeaving] = React15.useState(false);
    const rippleClassName = clsx_m_default(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
    const rippleStyles = {
      width: rippleSize,
      height: rippleSize,
      top: -(rippleSize / 2) + rippleY,
      left: -(rippleSize / 2) + rippleX
    };
    const childClassName = clsx_m_default(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
    if (!inProp && !leaving) {
      setLeaving(true);
    }
    React15.useEffect(() => {
      if (!inProp && onExited != null) {
        const timeoutId = setTimeout(onExited, timeout2);
        return () => {
          clearTimeout(timeoutId);
        };
      }
      return void 0;
    }, [onExited, inProp, timeout2]);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {
      className: rippleClassName,
      style: rippleStyles,
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {
        className: childClassName
      })
    });
  }
  true ? Ripple.propTypes = {
    classes: import_prop_types6.default.object.isRequired,
    className: import_prop_types6.default.string,
    in: import_prop_types6.default.bool,
    onExited: import_prop_types6.default.func,
    pulsate: import_prop_types6.default.bool,
    rippleSize: import_prop_types6.default.number,
    rippleX: import_prop_types6.default.number,
    rippleY: import_prop_types6.default.number,
    timeout: import_prop_types6.default.number.isRequired
  } : void 0;
  var Ripple_default = Ripple;

  // node_modules/@mui/material/ButtonBase/touchRippleClasses.js
  var touchRippleClasses = generateUtilityClasses("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]);
  var touchRippleClasses_default = touchRippleClasses;

  // node_modules/@mui/material/ButtonBase/TouchRipple.js
  var import_jsx_runtime3 = __toESM(require_jsx_runtime());
  var _excluded11 = ["center", "classes", "className"];
  var _ = (t) => t;
  var _t;
  var _t2;
  var _t3;
  var _t4;
  var DURATION = 550;
  var DELAY_RIPPLE = 80;
  var enterKeyframe = keyframes(_t || (_t = _`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`));
  var exitKeyframe = keyframes(_t2 || (_t2 = _`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`));
  var pulsateKeyframe = keyframes(_t3 || (_t3 = _`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`));
  var TouchRippleRoot = styled_default("span", {
    name: "MuiTouchRipple",
    slot: "Root"
  })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit"
  });
  var TouchRippleRipple = styled_default(Ripple_default, {
    name: "MuiTouchRipple",
    slot: "Ripple"
  })(_t4 || (_t4 = _`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), touchRippleClasses_default.rippleVisible, enterKeyframe, DURATION, ({
    theme
  }) => theme.transitions.easing.easeInOut, touchRippleClasses_default.ripplePulsate, ({
    theme
  }) => theme.transitions.duration.shorter, touchRippleClasses_default.child, touchRippleClasses_default.childLeaving, exitKeyframe, DURATION, ({
    theme
  }) => theme.transitions.easing.easeInOut, touchRippleClasses_default.childPulsate, pulsateKeyframe, ({
    theme
  }) => theme.transitions.easing.easeInOut);
  var TouchRipple = /* @__PURE__ */ React16.forwardRef(function TouchRipple2(inProps, ref) {
    const props = useThemeProps2({
      props: inProps,
      name: "MuiTouchRipple"
    });
    const {
      center: centerProp = false,
      classes = {},
      className
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded11);
    const [ripples, setRipples] = React16.useState([]);
    const nextKey = React16.useRef(0);
    const rippleCallback = React16.useRef(null);
    React16.useEffect(() => {
      if (rippleCallback.current) {
        rippleCallback.current();
        rippleCallback.current = null;
      }
    }, [ripples]);
    const ignoringMouseDown = React16.useRef(false);
    const startTimer = React16.useRef(null);
    const startTimerCommit = React16.useRef(null);
    const container = React16.useRef(null);
    React16.useEffect(() => {
      return () => {
        clearTimeout(startTimer.current);
      };
    }, []);
    const startCommit = React16.useCallback((params) => {
      const {
        pulsate: pulsate2,
        rippleX,
        rippleY,
        rippleSize,
        cb
      } = params;
      setRipples((oldRipples) => [...oldRipples, /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(TouchRippleRipple, {
        classes: {
          ripple: clsx_m_default(classes.ripple, touchRippleClasses_default.ripple),
          rippleVisible: clsx_m_default(classes.rippleVisible, touchRippleClasses_default.rippleVisible),
          ripplePulsate: clsx_m_default(classes.ripplePulsate, touchRippleClasses_default.ripplePulsate),
          child: clsx_m_default(classes.child, touchRippleClasses_default.child),
          childLeaving: clsx_m_default(classes.childLeaving, touchRippleClasses_default.childLeaving),
          childPulsate: clsx_m_default(classes.childPulsate, touchRippleClasses_default.childPulsate)
        },
        timeout: DURATION,
        pulsate: pulsate2,
        rippleX,
        rippleY,
        rippleSize
      }, nextKey.current)]);
      nextKey.current += 1;
      rippleCallback.current = cb;
    }, [classes]);
    const start2 = React16.useCallback((event = {}, options = {}, cb) => {
      const {
        pulsate: pulsate2 = false,
        center: center2 = centerProp || options.pulsate,
        fakeElement = false
      } = options;
      if (event.type === "mousedown" && ignoringMouseDown.current) {
        ignoringMouseDown.current = false;
        return;
      }
      if (event.type === "touchstart") {
        ignoringMouseDown.current = true;
      }
      const element = fakeElement ? null : container.current;
      const rect = element ? element.getBoundingClientRect() : {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      };
      let rippleX;
      let rippleY;
      let rippleSize;
      if (center2 || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
        rippleX = Math.round(rect.width / 2);
        rippleY = Math.round(rect.height / 2);
      } else {
        const {
          clientX,
          clientY
        } = event.touches ? event.touches[0] : event;
        rippleX = Math.round(clientX - rect.left);
        rippleY = Math.round(clientY - rect.top);
      }
      if (center2) {
        rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);
        if (rippleSize % 2 === 0) {
          rippleSize += 1;
        }
      } else {
        const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
        const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
        rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
      }
      if (event.touches) {
        if (startTimerCommit.current === null) {
          startTimerCommit.current = () => {
            startCommit({
              pulsate: pulsate2,
              rippleX,
              rippleY,
              rippleSize,
              cb
            });
          };
          startTimer.current = setTimeout(() => {
            if (startTimerCommit.current) {
              startTimerCommit.current();
              startTimerCommit.current = null;
            }
          }, DELAY_RIPPLE);
        }
      } else {
        startCommit({
          pulsate: pulsate2,
          rippleX,
          rippleY,
          rippleSize,
          cb
        });
      }
    }, [centerProp, startCommit]);
    const pulsate = React16.useCallback(() => {
      start2({}, {
        pulsate: true
      });
    }, [start2]);
    const stop = React16.useCallback((event, cb) => {
      clearTimeout(startTimer.current);
      if (event.type === "touchend" && startTimerCommit.current) {
        startTimerCommit.current();
        startTimerCommit.current = null;
        startTimer.current = setTimeout(() => {
          stop(event, cb);
        });
        return;
      }
      startTimerCommit.current = null;
      setRipples((oldRipples) => {
        if (oldRipples.length > 0) {
          return oldRipples.slice(1);
        }
        return oldRipples;
      });
      rippleCallback.current = cb;
    }, []);
    React16.useImperativeHandle(ref, () => ({
      pulsate,
      start: start2,
      stop
    }), [pulsate, start2, stop]);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(TouchRippleRoot, _extends({
      className: clsx_m_default(classes.root, touchRippleClasses_default.root, className),
      ref: container
    }, other, {
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(TransitionGroup_default, {
        component: null,
        exit: true,
        children: ripples
      })
    }));
  });
  true ? TouchRipple.propTypes = {
    center: import_prop_types7.default.bool,
    classes: import_prop_types7.default.object,
    className: import_prop_types7.default.string
  } : void 0;
  var TouchRipple_default = TouchRipple;

  // node_modules/@mui/material/ButtonBase/buttonBaseClasses.js
  function getButtonBaseUtilityClass(slot) {
    return generateUtilityClass("MuiButtonBase", slot);
  }
  var buttonBaseClasses = generateUtilityClasses("MuiButtonBase", ["root", "disabled", "focusVisible"]);
  var buttonBaseClasses_default = buttonBaseClasses;

  // node_modules/@mui/material/ButtonBase/ButtonBase.js
  var import_jsx_runtime4 = __toESM(require_jsx_runtime());
  var import_jsx_runtime5 = __toESM(require_jsx_runtime());
  var _excluded12 = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"];
  var useUtilityClasses2 = (ownerState) => {
    const {
      disabled,
      focusVisible,
      focusVisibleClassName,
      classes
    } = ownerState;
    const slots = {
      root: ["root", disabled && "disabled", focusVisible && "focusVisible"]
    };
    const composedClasses = composeClasses(slots, getButtonBaseUtilityClass, classes);
    if (focusVisible && focusVisibleClassName) {
      composedClasses.root += ` ${focusVisibleClassName}`;
    }
    return composedClasses;
  };
  var ButtonBaseRoot = styled_default("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (props, styles) => styles.root
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": {
      borderStyle: "none"
    },
    [`&.${buttonBaseClasses_default.disabled}`]: {
      pointerEvents: "none",
      cursor: "default"
    },
    "@media print": {
      colorAdjust: "exact"
    }
  });
  var ButtonBase = /* @__PURE__ */ React17.forwardRef(function ButtonBase2(inProps, ref) {
    const props = useThemeProps2({
      props: inProps,
      name: "MuiButtonBase"
    });
    const {
      action,
      centerRipple = false,
      children: children2,
      className,
      component = "button",
      disabled = false,
      disableRipple = false,
      disableTouchRipple = false,
      focusRipple = false,
      LinkComponent = "a",
      onBlur,
      onClick,
      onContextMenu,
      onDragLeave,
      onFocus,
      onFocusVisible,
      onKeyDown,
      onKeyUp,
      onMouseDown,
      onMouseLeave,
      onMouseUp,
      onTouchEnd,
      onTouchMove,
      onTouchStart,
      tabIndex = 0,
      TouchRippleProps,
      touchRippleRef,
      type: type2
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded12);
    const buttonRef = React17.useRef(null);
    const rippleRef = React17.useRef(null);
    const handleRippleRef = useForkRef_default(rippleRef, touchRippleRef);
    const {
      isFocusVisibleRef,
      onFocus: handleFocusVisible,
      onBlur: handleBlurVisible,
      ref: focusVisibleRef
    } = useIsFocusVisible_default();
    const [focusVisible, setFocusVisible] = React17.useState(false);
    if (disabled && focusVisible) {
      setFocusVisible(false);
    }
    React17.useImperativeHandle(action, () => ({
      focusVisible: () => {
        setFocusVisible(true);
        buttonRef.current.focus();
      }
    }), []);
    React17.useEffect(() => {
      if (focusVisible && focusRipple && !disableRipple) {
        rippleRef.current.pulsate();
      }
    }, [disableRipple, focusRipple, focusVisible]);
    function useRippleHandler(rippleAction, eventCallback, skipRippleAction = disableTouchRipple) {
      return useEventCallback_default((event) => {
        if (eventCallback) {
          eventCallback(event);
        }
        const ignore = skipRippleAction;
        if (!ignore && rippleRef.current) {
          rippleRef.current[rippleAction](event);
        }
        return true;
      });
    }
    const handleMouseDown = useRippleHandler("start", onMouseDown);
    const handleContextMenu = useRippleHandler("stop", onContextMenu);
    const handleDragLeave = useRippleHandler("stop", onDragLeave);
    const handleMouseUp = useRippleHandler("stop", onMouseUp);
    const handleMouseLeave = useRippleHandler("stop", (event) => {
      if (focusVisible) {
        event.preventDefault();
      }
      if (onMouseLeave) {
        onMouseLeave(event);
      }
    });
    const handleTouchStart = useRippleHandler("start", onTouchStart);
    const handleTouchEnd = useRippleHandler("stop", onTouchEnd);
    const handleTouchMove = useRippleHandler("stop", onTouchMove);
    const handleBlur = useRippleHandler("stop", (event) => {
      handleBlurVisible(event);
      if (isFocusVisibleRef.current === false) {
        setFocusVisible(false);
      }
      if (onBlur) {
        onBlur(event);
      }
    }, false);
    const handleFocus = useEventCallback_default((event) => {
      if (!buttonRef.current) {
        buttonRef.current = event.currentTarget;
      }
      handleFocusVisible(event);
      if (isFocusVisibleRef.current === true) {
        setFocusVisible(true);
        if (onFocusVisible) {
          onFocusVisible(event);
        }
      }
      if (onFocus) {
        onFocus(event);
      }
    });
    const isNonNativeButton = () => {
      const button = buttonRef.current;
      return component && component !== "button" && !(button.tagName === "A" && button.href);
    };
    const keydownRef = React17.useRef(false);
    const handleKeyDown2 = useEventCallback_default((event) => {
      if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === " ") {
        keydownRef.current = true;
        rippleRef.current.stop(event, () => {
          rippleRef.current.start(event);
        });
      }
      if (event.target === event.currentTarget && isNonNativeButton() && event.key === " ") {
        event.preventDefault();
      }
      if (onKeyDown) {
        onKeyDown(event);
      }
      if (event.target === event.currentTarget && isNonNativeButton() && event.key === "Enter" && !disabled) {
        event.preventDefault();
        if (onClick) {
          onClick(event);
        }
      }
    });
    const handleKeyUp = useEventCallback_default((event) => {
      if (focusRipple && event.key === " " && rippleRef.current && focusVisible && !event.defaultPrevented) {
        keydownRef.current = false;
        rippleRef.current.stop(event, () => {
          rippleRef.current.pulsate(event);
        });
      }
      if (onKeyUp) {
        onKeyUp(event);
      }
      if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === " " && !event.defaultPrevented) {
        onClick(event);
      }
    });
    let ComponentProp = component;
    if (ComponentProp === "button" && (other.href || other.to)) {
      ComponentProp = LinkComponent;
    }
    const buttonProps = {};
    if (ComponentProp === "button") {
      buttonProps.type = type2 === void 0 ? "button" : type2;
      buttonProps.disabled = disabled;
    } else {
      if (!other.href && !other.to) {
        buttonProps.role = "button";
      }
      if (disabled) {
        buttonProps["aria-disabled"] = disabled;
      }
    }
    const handleOwnRef = useForkRef_default(focusVisibleRef, buttonRef);
    const handleRef = useForkRef_default(ref, handleOwnRef);
    const [mountedState, setMountedState] = React17.useState(false);
    React17.useEffect(() => {
      setMountedState(true);
    }, []);
    const enableTouchRipple = mountedState && !disableRipple && !disabled;
    if (true) {
      React17.useEffect(() => {
        if (enableTouchRipple && !rippleRef.current) {
          console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join("\n"));
        }
      }, [enableTouchRipple]);
    }
    const ownerState = _extends({}, props, {
      centerRipple,
      component,
      disabled,
      disableRipple,
      disableTouchRipple,
      focusRipple,
      tabIndex,
      focusVisible
    });
    const classes = useUtilityClasses2(ownerState);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(ButtonBaseRoot, _extends({
      as: ComponentProp,
      className: clsx_m_default(classes.root, className),
      ownerState,
      onBlur: handleBlur,
      onClick,
      onContextMenu: handleContextMenu,
      onFocus: handleFocus,
      onKeyDown: handleKeyDown2,
      onKeyUp: handleKeyUp,
      onMouseDown: handleMouseDown,
      onMouseLeave: handleMouseLeave,
      onMouseUp: handleMouseUp,
      onDragLeave: handleDragLeave,
      onTouchEnd: handleTouchEnd,
      onTouchMove: handleTouchMove,
      onTouchStart: handleTouchStart,
      ref: handleRef,
      tabIndex: disabled ? -1 : tabIndex,
      type: type2
    }, buttonProps, other, {
      children: [children2, enableTouchRipple ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TouchRipple_default, _extends({
        ref: handleRippleRef,
        center: centerRipple
      }, TouchRippleProps)) : null]
    }));
  });
  true ? ButtonBase.propTypes = {
    action: refType_default,
    centerRipple: import_prop_types8.default.bool,
    children: import_prop_types8.default.node,
    classes: import_prop_types8.default.object,
    className: import_prop_types8.default.string,
    component: elementTypeAcceptingRef_default,
    disabled: import_prop_types8.default.bool,
    disableRipple: import_prop_types8.default.bool,
    disableTouchRipple: import_prop_types8.default.bool,
    focusRipple: import_prop_types8.default.bool,
    focusVisibleClassName: import_prop_types8.default.string,
    href: import_prop_types8.default.any,
    LinkComponent: import_prop_types8.default.elementType,
    onBlur: import_prop_types8.default.func,
    onClick: import_prop_types8.default.func,
    onContextMenu: import_prop_types8.default.func,
    onDragLeave: import_prop_types8.default.func,
    onFocus: import_prop_types8.default.func,
    onFocusVisible: import_prop_types8.default.func,
    onKeyDown: import_prop_types8.default.func,
    onKeyUp: import_prop_types8.default.func,
    onMouseDown: import_prop_types8.default.func,
    onMouseLeave: import_prop_types8.default.func,
    onMouseUp: import_prop_types8.default.func,
    onTouchEnd: import_prop_types8.default.func,
    onTouchMove: import_prop_types8.default.func,
    onTouchStart: import_prop_types8.default.func,
    sx: import_prop_types8.default.oneOfType([import_prop_types8.default.arrayOf(import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.object, import_prop_types8.default.bool])), import_prop_types8.default.func, import_prop_types8.default.object]),
    tabIndex: import_prop_types8.default.number,
    TouchRippleProps: import_prop_types8.default.object,
    touchRippleRef: import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.shape({
      current: import_prop_types8.default.shape({
        pulsate: import_prop_types8.default.func.isRequired,
        start: import_prop_types8.default.func.isRequired,
        stop: import_prop_types8.default.func.isRequired
      })
    })]),
    type: import_prop_types8.default.oneOfType([import_prop_types8.default.oneOf(["button", "reset", "submit"]), import_prop_types8.default.string])
  } : void 0;
  var ButtonBase_default = ButtonBase;

  // node_modules/@mui/material/IconButton/iconButtonClasses.js
  function getIconButtonUtilityClass(slot) {
    return generateUtilityClass("MuiIconButton", slot);
  }
  var iconButtonClasses = generateUtilityClasses("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]);
  var iconButtonClasses_default = iconButtonClasses;

  // node_modules/@mui/material/IconButton/IconButton.js
  var import_jsx_runtime6 = __toESM(require_jsx_runtime());
  var _excluded13 = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"];
  var useUtilityClasses3 = (ownerState) => {
    const {
      classes,
      disabled,
      color: color4,
      edge,
      size
    } = ownerState;
    const slots = {
      root: ["root", disabled && "disabled", color4 !== "default" && `color${capitalize_default(color4)}`, edge && `edge${capitalize_default(edge)}`, `size${capitalize_default(size)}`]
    };
    return composeClasses(slots, getIconButtonUtilityClass, classes);
  };
  var IconButtonRoot = styled_default(ButtonBase_default, {
    name: "MuiIconButton",
    slot: "Root",
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, ownerState.color !== "default" && styles[`color${capitalize_default(ownerState.color)}`], ownerState.edge && styles[`edge${capitalize_default(ownerState.edge)}`], styles[`size${capitalize_default(ownerState.size)}`]];
    }
  })(({
    theme,
    ownerState
  }) => _extends({
    textAlign: "center",
    flex: "0 0 auto",
    fontSize: theme.typography.pxToRem(24),
    padding: 8,
    borderRadius: "50%",
    overflow: "visible",
    color: theme.palette.action.active,
    transition: theme.transitions.create("background-color", {
      duration: theme.transitions.duration.shortest
    })
  }, !ownerState.disableRipple && {
    "&:hover": {
      backgroundColor: alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }
  }, ownerState.edge === "start" && {
    marginLeft: ownerState.size === "small" ? -3 : -12
  }, ownerState.edge === "end" && {
    marginRight: ownerState.size === "small" ? -3 : -12
  }), ({
    theme,
    ownerState
  }) => _extends({}, ownerState.color === "inherit" && {
    color: "inherit"
  }, ownerState.color !== "inherit" && ownerState.color !== "default" && _extends({
    color: theme.palette[ownerState.color].main
  }, !ownerState.disableRipple && {
    "&:hover": {
      backgroundColor: alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }
  }), ownerState.size === "small" && {
    padding: 5,
    fontSize: theme.typography.pxToRem(18)
  }, ownerState.size === "large" && {
    padding: 12,
    fontSize: theme.typography.pxToRem(28)
  }, {
    [`&.${iconButtonClasses_default.disabled}`]: {
      backgroundColor: "transparent",
      color: theme.palette.action.disabled
    }
  }));
  var IconButton = /* @__PURE__ */ React18.forwardRef(function IconButton2(inProps, ref) {
    const props = useThemeProps2({
      props: inProps,
      name: "MuiIconButton"
    });
    const {
      edge = false,
      children: children2,
      className,
      color: color4 = "default",
      disabled = false,
      disableFocusRipple = false,
      size = "medium"
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded13);
    const ownerState = _extends({}, props, {
      edge,
      color: color4,
      disabled,
      disableFocusRipple,
      size
    });
    const classes = useUtilityClasses3(ownerState);
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(IconButtonRoot, _extends({
      className: clsx_m_default(classes.root, className),
      centerRipple: true,
      focusRipple: !disableFocusRipple,
      disabled,
      ref,
      ownerState
    }, other, {
      children: children2
    }));
  });
  true ? IconButton.propTypes = {
    children: chainPropTypes(import_prop_types9.default.node, (props) => {
      const found = React18.Children.toArray(props.children).some((child) => /* @__PURE__ */ React18.isValidElement(child) && child.props.onClick);
      if (found) {
        return new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join("\n"));
      }
      return null;
    }),
    classes: import_prop_types9.default.object,
    className: import_prop_types9.default.string,
    color: import_prop_types9.default.oneOfType([import_prop_types9.default.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types9.default.string]),
    disabled: import_prop_types9.default.bool,
    disableFocusRipple: import_prop_types9.default.bool,
    disableRipple: import_prop_types9.default.bool,
    edge: import_prop_types9.default.oneOf(["end", "start", false]),
    size: import_prop_types9.default.oneOfType([import_prop_types9.default.oneOf(["small", "medium", "large"]), import_prop_types9.default.string]),
    sx: import_prop_types9.default.oneOfType([import_prop_types9.default.arrayOf(import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.object, import_prop_types9.default.bool])), import_prop_types9.default.func, import_prop_types9.default.object])
  } : void 0;
  var IconButton_default = IconButton;

  // node_modules/@mui/material/internal/svg-icons/SuccessOutlined.js
  var React21 = __toESM(require_react());

  // node_modules/@mui/material/utils/createSvgIcon.js
  var React20 = __toESM(require_react());

  // node_modules/@mui/material/SvgIcon/SvgIcon.js
  var React19 = __toESM(require_react());
  var import_prop_types10 = __toESM(require_prop_types());

  // node_modules/@mui/material/SvgIcon/svgIconClasses.js
  function getSvgIconUtilityClass(slot) {
    return generateUtilityClass("MuiSvgIcon", slot);
  }
  var svgIconClasses = generateUtilityClasses("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);

  // node_modules/@mui/material/SvgIcon/SvgIcon.js
  var import_jsx_runtime7 = __toESM(require_jsx_runtime());
  var import_jsx_runtime8 = __toESM(require_jsx_runtime());
  var _excluded14 = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"];
  var useUtilityClasses4 = (ownerState) => {
    const {
      color: color4,
      fontSize: fontSize2,
      classes
    } = ownerState;
    const slots = {
      root: ["root", color4 !== "inherit" && `color${capitalize_default(color4)}`, `fontSize${capitalize_default(fontSize2)}`]
    };
    return composeClasses(slots, getSvgIconUtilityClass, classes);
  };
  var SvgIconRoot = styled_default("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, ownerState.color !== "inherit" && styles[`color${capitalize_default(ownerState.color)}`], styles[`fontSize${capitalize_default(ownerState.fontSize)}`]];
    }
  })(({
    theme,
    ownerState
  }) => {
    var _theme$transitions, _theme$transitions$cr, _theme$transitions2, _theme$transitions2$d, _theme$typography, _theme$typography$pxT, _theme$typography2, _theme$typography2$px, _theme$typography3, _theme$typography3$px, _theme$palette$ownerS, _theme$palette, _theme$palette$ownerS2, _theme$palette2, _theme$palette2$actio, _theme$palette3, _theme$palette3$actio;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: "currentColor",
      flexShrink: 0,
      transition: (_theme$transitions = theme.transitions) == null ? void 0 : (_theme$transitions$cr = _theme$transitions.create) == null ? void 0 : _theme$transitions$cr.call(_theme$transitions, "fill", {
        duration: (_theme$transitions2 = theme.transitions) == null ? void 0 : (_theme$transitions2$d = _theme$transitions2.duration) == null ? void 0 : _theme$transitions2$d.shorter
      }),
      fontSize: {
        inherit: "inherit",
        small: ((_theme$typography = theme.typography) == null ? void 0 : (_theme$typography$pxT = _theme$typography.pxToRem) == null ? void 0 : _theme$typography$pxT.call(_theme$typography, 20)) || "1.25rem",
        medium: ((_theme$typography2 = theme.typography) == null ? void 0 : (_theme$typography2$px = _theme$typography2.pxToRem) == null ? void 0 : _theme$typography2$px.call(_theme$typography2, 24)) || "1.5rem",
        large: ((_theme$typography3 = theme.typography) == null ? void 0 : (_theme$typography3$px = _theme$typography3.pxToRem) == null ? void 0 : _theme$typography3$px.call(_theme$typography3, 35)) || "2.1875"
      }[ownerState.fontSize],
      color: (_theme$palette$ownerS = (_theme$palette = theme.palette) == null ? void 0 : (_theme$palette$ownerS2 = _theme$palette[ownerState.color]) == null ? void 0 : _theme$palette$ownerS2.main) != null ? _theme$palette$ownerS : {
        action: (_theme$palette2 = theme.palette) == null ? void 0 : (_theme$palette2$actio = _theme$palette2.action) == null ? void 0 : _theme$palette2$actio.active,
        disabled: (_theme$palette3 = theme.palette) == null ? void 0 : (_theme$palette3$actio = _theme$palette3.action) == null ? void 0 : _theme$palette3$actio.disabled,
        inherit: void 0
      }[ownerState.color]
    };
  });
  var SvgIcon = /* @__PURE__ */ React19.forwardRef(function SvgIcon2(inProps, ref) {
    const props = useThemeProps2({
      props: inProps,
      name: "MuiSvgIcon"
    });
    const {
      children: children2,
      className,
      color: color4 = "inherit",
      component = "svg",
      fontSize: fontSize2 = "medium",
      htmlColor,
      inheritViewBox = false,
      titleAccess,
      viewBox = "0 0 24 24"
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded14);
    const ownerState = _extends({}, props, {
      color: color4,
      component,
      fontSize: fontSize2,
      instanceFontSize: inProps.fontSize,
      inheritViewBox,
      viewBox
    });
    const more = {};
    if (!inheritViewBox) {
      more.viewBox = viewBox;
    }
    const classes = useUtilityClasses4(ownerState);
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(SvgIconRoot, _extends({
      as: component,
      className: clsx_m_default(classes.root, className),
      ownerState,
      focusable: "false",
      color: htmlColor,
      "aria-hidden": titleAccess ? void 0 : true,
      role: titleAccess ? "img" : void 0,
      ref
    }, more, other, {
      children: [children2, titleAccess ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("title", {
        children: titleAccess
      }) : null]
    }));
  });
  true ? SvgIcon.propTypes = {
    children: import_prop_types10.default.node,
    classes: import_prop_types10.default.object,
    className: import_prop_types10.default.string,
    color: import_prop_types10.default.oneOfType([import_prop_types10.default.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types10.default.string]),
    component: import_prop_types10.default.elementType,
    fontSize: import_prop_types10.default.oneOfType([import_prop_types10.default.oneOf(["inherit", "large", "medium", "small"]), import_prop_types10.default.string]),
    htmlColor: import_prop_types10.default.string,
    inheritViewBox: import_prop_types10.default.bool,
    shapeRendering: import_prop_types10.default.string,
    sx: import_prop_types10.default.oneOfType([import_prop_types10.default.arrayOf(import_prop_types10.default.oneOfType([import_prop_types10.default.func, import_prop_types10.default.object, import_prop_types10.default.bool])), import_prop_types10.default.func, import_prop_types10.default.object]),
    titleAccess: import_prop_types10.default.string,
    viewBox: import_prop_types10.default.string
  } : void 0;
  SvgIcon.muiName = "SvgIcon";
  var SvgIcon_default = SvgIcon;

  // node_modules/@mui/material/utils/createSvgIcon.js
  var import_jsx_runtime9 = __toESM(require_jsx_runtime());
  function createSvgIcon(path2, displayName) {
    const Component = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SvgIcon_default, _extends({
      "data-testid": `${displayName}Icon`,
      ref
    }, props, {
      children: path2
    }));
    if (true) {
      Component.displayName = `${displayName}Icon`;
    }
    Component.muiName = SvgIcon_default.muiName;
    return /* @__PURE__ */ React20.memo(/* @__PURE__ */ React20.forwardRef(Component));
  }

  // node_modules/@mui/material/internal/svg-icons/SuccessOutlined.js
  var import_jsx_runtime10 = __toESM(require_jsx_runtime());
  var SuccessOutlined_default = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
    d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
  }), "SuccessOutlined");

  // node_modules/@mui/material/internal/svg-icons/ReportProblemOutlined.js
  var React22 = __toESM(require_react());
  var import_jsx_runtime11 = __toESM(require_jsx_runtime());
  var ReportProblemOutlined_default = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", {
    d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
  }), "ReportProblemOutlined");

  // node_modules/@mui/material/internal/svg-icons/ErrorOutline.js
  var React23 = __toESM(require_react());
  var import_jsx_runtime12 = __toESM(require_jsx_runtime());
  var ErrorOutline_default = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", {
    d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), "ErrorOutline");

  // node_modules/@mui/material/internal/svg-icons/InfoOutlined.js
  var React24 = __toESM(require_react());
  var import_jsx_runtime13 = __toESM(require_jsx_runtime());
  var InfoOutlined_default = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
    d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
  }), "InfoOutlined");

  // node_modules/@mui/material/internal/svg-icons/Close.js
  var React25 = __toESM(require_react());
  var import_jsx_runtime14 = __toESM(require_jsx_runtime());
  var Close_default = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Close");

  // node_modules/@mui/material/Alert/Alert.js
  var import_jsx_runtime15 = __toESM(require_jsx_runtime());
  var import_jsx_runtime16 = __toESM(require_jsx_runtime());
  var _CloseIcon;
  var _excluded15 = ["action", "children", "className", "closeText", "color", "icon", "iconMapping", "onClose", "role", "severity", "variant"];
  var useUtilityClasses5 = (ownerState) => {
    const {
      variant,
      color: color4,
      severity,
      classes
    } = ownerState;
    const slots = {
      root: ["root", `${variant}${capitalize_default(color4 || severity)}`, `${variant}`],
      icon: ["icon"],
      message: ["message"],
      action: ["action"]
    };
    return composeClasses(slots, getAlertUtilityClass, classes);
  };
  var AlertRoot = styled_default(Paper_default, {
    name: "MuiAlert",
    slot: "Root",
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, styles[ownerState.variant], styles[`${ownerState.variant}${capitalize_default(ownerState.color || ownerState.severity)}`]];
    }
  })(({
    theme,
    ownerState
  }) => {
    const getColor = theme.palette.mode === "light" ? darken : lighten;
    const getBackgroundColor = theme.palette.mode === "light" ? lighten : darken;
    const color4 = ownerState.color || ownerState.severity;
    return _extends({}, theme.typography.body2, {
      backgroundColor: "transparent",
      display: "flex",
      padding: "6px 16px"
    }, color4 && ownerState.variant === "standard" && {
      color: getColor(theme.palette[color4].light, 0.6),
      backgroundColor: getBackgroundColor(theme.palette[color4].light, 0.9),
      [`& .${alertClasses_default.icon}`]: {
        color: theme.palette.mode === "dark" ? theme.palette[color4].main : theme.palette[color4].light
      }
    }, color4 && ownerState.variant === "outlined" && {
      color: getColor(theme.palette[color4].light, 0.6),
      border: `1px solid ${theme.palette[color4].light}`,
      [`& .${alertClasses_default.icon}`]: {
        color: theme.palette.mode === "dark" ? theme.palette[color4].main : theme.palette[color4].light
      }
    }, color4 && ownerState.variant === "filled" && {
      color: "#fff",
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.mode === "dark" ? theme.palette[color4].dark : theme.palette[color4].main
    });
  });
  var AlertIcon = styled_default("div", {
    name: "MuiAlert",
    slot: "Icon",
    overridesResolver: (props, styles) => styles.icon
  })({
    marginRight: 12,
    padding: "7px 0",
    display: "flex",
    fontSize: 22,
    opacity: 0.9
  });
  var AlertMessage = styled_default("div", {
    name: "MuiAlert",
    slot: "Message",
    overridesResolver: (props, styles) => styles.message
  })({
    padding: "8px 0"
  });
  var AlertAction = styled_default("div", {
    name: "MuiAlert",
    slot: "Action",
    overridesResolver: (props, styles) => styles.action
  })({
    display: "flex",
    alignItems: "flex-start",
    padding: "4px 0 0 16px",
    marginLeft: "auto",
    marginRight: -8
  });
  var defaultIconMapping = {
    success: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(SuccessOutlined_default, {
      fontSize: "inherit"
    }),
    warning: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ReportProblemOutlined_default, {
      fontSize: "inherit"
    }),
    error: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ErrorOutline_default, {
      fontSize: "inherit"
    }),
    info: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(InfoOutlined_default, {
      fontSize: "inherit"
    })
  };
  var Alert = /* @__PURE__ */ React26.forwardRef(function Alert2(inProps, ref) {
    const props = useThemeProps2({
      props: inProps,
      name: "MuiAlert"
    });
    const {
      action,
      children: children2,
      className,
      closeText = "Close",
      color: color4,
      icon,
      iconMapping = defaultIconMapping,
      onClose,
      role = "alert",
      severity = "success",
      variant = "standard"
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded15);
    const ownerState = _extends({}, props, {
      color: color4,
      severity,
      variant
    });
    const classes = useUtilityClasses5(ownerState);
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(AlertRoot, _extends({
      role,
      elevation: 0,
      ownerState,
      className: clsx_m_default(classes.root, className),
      ref
    }, other, {
      children: [icon !== false ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(AlertIcon, {
        ownerState,
        className: classes.icon,
        children: icon || iconMapping[severity] || defaultIconMapping[severity]
      }) : null, /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(AlertMessage, {
        ownerState,
        className: classes.message,
        children: children2
      }), action != null ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(AlertAction, {
        className: classes.action,
        children: action
      }) : null, action == null && onClose ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(AlertAction, {
        ownerState,
        className: classes.action,
        children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(IconButton_default, {
          size: "small",
          "aria-label": closeText,
          title: closeText,
          color: "inherit",
          onClick: onClose,
          children: _CloseIcon || (_CloseIcon = /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Close_default, {
            fontSize: "small"
          }))
        })
      }) : null]
    }));
  });
  true ? Alert.propTypes = {
    action: import_prop_types11.default.node,
    children: import_prop_types11.default.node,
    classes: import_prop_types11.default.object,
    className: import_prop_types11.default.string,
    closeText: import_prop_types11.default.string,
    color: import_prop_types11.default.oneOfType([import_prop_types11.default.oneOf(["error", "info", "success", "warning"]), import_prop_types11.default.string]),
    icon: import_prop_types11.default.node,
    iconMapping: import_prop_types11.default.shape({
      error: import_prop_types11.default.node,
      info: import_prop_types11.default.node,
      success: import_prop_types11.default.node,
      warning: import_prop_types11.default.node
    }),
    onClose: import_prop_types11.default.func,
    role: import_prop_types11.default.string,
    severity: import_prop_types11.default.oneOf(["error", "info", "success", "warning"]),
    sx: import_prop_types11.default.oneOfType([import_prop_types11.default.arrayOf(import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object, import_prop_types11.default.bool])), import_prop_types11.default.func, import_prop_types11.default.object]),
    variant: import_prop_types11.default.oneOfType([import_prop_types11.default.oneOf(["filled", "outlined", "standard"]), import_prop_types11.default.string])
  } : void 0;
  var Alert_default = Alert;

  // node_modules/@zilliz/zui/dist/ZAlert/ZAlertIcons.js
  var import_jsx_runtime29 = __toESM(require_jsx_runtime());

  // node_modules/@mui/material/utils/useControlled.js
  var useControlled_default = useControlled;

  // node_modules/@mui/material/Typography/Typography.js
  var React27 = __toESM(require_react());
  var import_prop_types12 = __toESM(require_prop_types());

  // node_modules/@mui/material/Typography/typographyClasses.js
  function getTypographyUtilityClass(slot) {
    return generateUtilityClass("MuiTypography", slot);
  }
  var typographyClasses = generateUtilityClasses("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);

  // node_modules/@mui/material/Typography/Typography.js
  var import_jsx_runtime17 = __toESM(require_jsx_runtime());
  var _excluded16 = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"];
  var useUtilityClasses6 = (ownerState) => {
    const {
      align,
      gutterBottom,
      noWrap,
      paragraph,
      variant,
      classes
    } = ownerState;
    const slots = {
      root: ["root", variant, ownerState.align !== "inherit" && `align${capitalize_default(align)}`, gutterBottom && "gutterBottom", noWrap && "noWrap", paragraph && "paragraph"]
    };
    return composeClasses(slots, getTypographyUtilityClass, classes);
  };
  var TypographyRoot = styled_default("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, ownerState.variant && styles[ownerState.variant], ownerState.align !== "inherit" && styles[`align${capitalize_default(ownerState.align)}`], ownerState.noWrap && styles.noWrap, ownerState.gutterBottom && styles.gutterBottom, ownerState.paragraph && styles.paragraph];
    }
  })(({
    theme,
    ownerState
  }) => _extends({
    margin: 0
  }, ownerState.variant && theme.typography[ownerState.variant], ownerState.align !== "inherit" && {
    textAlign: ownerState.align
  }, ownerState.noWrap && {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, ownerState.gutterBottom && {
    marginBottom: "0.35em"
  }, ownerState.paragraph && {
    marginBottom: 16
  }));
  var defaultVariantMapping = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p"
  };
  var colorTransformations = {
    primary: "primary.main",
    textPrimary: "text.primary",
    secondary: "secondary.main",
    textSecondary: "text.secondary",
    error: "error.main"
  };
  var transformDeprecatedColors = (color4) => {
    return colorTransformations[color4] || color4;
  };
  var Typography = /* @__PURE__ */ React27.forwardRef(function Typography2(inProps, ref) {
    const themeProps = useThemeProps2({
      props: inProps,
      name: "MuiTypography"
    });
    const color4 = transformDeprecatedColors(themeProps.color);
    const props = extendSxProp(_extends({}, themeProps, {
      color: color4
    }));
    const {
      align = "inherit",
      className,
      component,
      gutterBottom = false,
      noWrap = false,
      paragraph = false,
      variant = "body1",
      variantMapping = defaultVariantMapping
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded16);
    const ownerState = _extends({}, props, {
      align,
      color: color4,
      className,
      component,
      gutterBottom,
      noWrap,
      paragraph,
      variant,
      variantMapping
    });
    const Component = component || (paragraph ? "p" : variantMapping[variant] || defaultVariantMapping[variant]) || "span";
    const classes = useUtilityClasses6(ownerState);
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(TypographyRoot, _extends({
      as: Component,
      ref,
      ownerState,
      className: clsx_m_default(classes.root, className)
    }, other));
  });
  true ? Typography.propTypes = {
    align: import_prop_types12.default.oneOf(["center", "inherit", "justify", "left", "right"]),
    children: import_prop_types12.default.node,
    classes: import_prop_types12.default.object,
    className: import_prop_types12.default.string,
    component: import_prop_types12.default.elementType,
    gutterBottom: import_prop_types12.default.bool,
    noWrap: import_prop_types12.default.bool,
    paragraph: import_prop_types12.default.bool,
    sx: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object, import_prop_types12.default.bool])), import_prop_types12.default.func, import_prop_types12.default.object]),
    variant: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), import_prop_types12.default.string]),
    variantMapping: import_prop_types12.default.object
  } : void 0;
  var Typography_default = Typography;

  // node_modules/@mui/material/FormControl/formControlState.js
  function formControlState({
    props,
    states,
    muiFormControl
  }) {
    return states.reduce((acc, state) => {
      acc[state] = props[state];
      if (muiFormControl) {
        if (typeof props[state] === "undefined") {
          acc[state] = muiFormControl[state];
        }
      }
      return acc;
    }, {});
  }

  // node_modules/@mui/material/FormControl/FormControlContext.js
  var React28 = __toESM(require_react());
  var FormControlContext = /* @__PURE__ */ React28.createContext();
  if (true) {
    FormControlContext.displayName = "FormControlContext";
  }
  var FormControlContext_default = FormControlContext;

  // node_modules/@mui/material/FormControl/useFormControl.js
  var React29 = __toESM(require_react());
  function useFormControl() {
    return React29.useContext(FormControlContext_default);
  }

  // node_modules/@mui/material/Checkbox/Checkbox.js
  var React34 = __toESM(require_react());
  var import_prop_types14 = __toESM(require_prop_types());

  // node_modules/@mui/material/internal/SwitchBase.js
  var React30 = __toESM(require_react());
  var import_prop_types13 = __toESM(require_prop_types());

  // node_modules/@mui/material/internal/switchBaseClasses.js
  function getSwitchBaseUtilityClass(slot) {
    return generateUtilityClass("PrivateSwitchBase", slot);
  }
  var switchBaseClasses = generateUtilityClasses("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);

  // node_modules/@mui/material/internal/SwitchBase.js
  var import_jsx_runtime18 = __toESM(require_jsx_runtime());
  var import_jsx_runtime19 = __toESM(require_jsx_runtime());
  var _excluded17 = ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"];
  var useUtilityClasses7 = (ownerState) => {
    const {
      classes,
      checked,
      disabled,
      edge
    } = ownerState;
    const slots = {
      root: ["root", checked && "checked", disabled && "disabled", edge && `edge${capitalize_default(edge)}`],
      input: ["input"]
    };
    return composeClasses(slots, getSwitchBaseUtilityClass, classes);
  };
  var SwitchBaseRoot = styled_default(ButtonBase_default)(({
    ownerState
  }) => _extends({
    padding: 9,
    borderRadius: "50%"
  }, ownerState.edge === "start" && {
    marginLeft: ownerState.size === "small" ? -3 : -12
  }, ownerState.edge === "end" && {
    marginRight: ownerState.size === "small" ? -3 : -12
  }));
  var SwitchBaseInput = styled_default("input")({
    cursor: "inherit",
    position: "absolute",
    opacity: 0,
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1
  });
  var SwitchBase = /* @__PURE__ */ React30.forwardRef(function SwitchBase2(props, ref) {
    const {
      autoFocus,
      checked: checkedProp,
      checkedIcon,
      className,
      defaultChecked,
      disabled: disabledProp,
      disableFocusRipple = false,
      edge = false,
      icon,
      id: id2,
      inputProps,
      inputRef,
      name,
      onBlur,
      onChange,
      onFocus,
      readOnly,
      required,
      tabIndex,
      type: type2,
      value
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded17);
    const [checked, setCheckedState] = useControlled_default({
      controlled: checkedProp,
      default: Boolean(defaultChecked),
      name: "SwitchBase",
      state: "checked"
    });
    const muiFormControl = useFormControl();
    const handleFocus = (event) => {
      if (onFocus) {
        onFocus(event);
      }
      if (muiFormControl && muiFormControl.onFocus) {
        muiFormControl.onFocus(event);
      }
    };
    const handleBlur = (event) => {
      if (onBlur) {
        onBlur(event);
      }
      if (muiFormControl && muiFormControl.onBlur) {
        muiFormControl.onBlur(event);
      }
    };
    const handleInputChange = (event) => {
      if (event.nativeEvent.defaultPrevented) {
        return;
      }
      const newChecked = event.target.checked;
      setCheckedState(newChecked);
      if (onChange) {
        onChange(event, newChecked);
      }
    };
    let disabled = disabledProp;
    if (muiFormControl) {
      if (typeof disabled === "undefined") {
        disabled = muiFormControl.disabled;
      }
    }
    const hasLabelFor = type2 === "checkbox" || type2 === "radio";
    const ownerState = _extends({}, props, {
      checked,
      disabled,
      disableFocusRipple,
      edge
    });
    const classes = useUtilityClasses7(ownerState);
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(SwitchBaseRoot, _extends({
      component: "span",
      className: clsx_m_default(classes.root, className),
      centerRipple: true,
      focusRipple: !disableFocusRipple,
      disabled,
      tabIndex: null,
      role: void 0,
      onFocus: handleFocus,
      onBlur: handleBlur,
      ownerState,
      ref
    }, other, {
      children: [/* @__PURE__ */ (0, import_jsx_runtime18.jsx)(SwitchBaseInput, _extends({
        autoFocus,
        checked: checkedProp,
        defaultChecked,
        className: classes.input,
        disabled,
        id: hasLabelFor && id2,
        name,
        onChange: handleInputChange,
        readOnly,
        ref: inputRef,
        required,
        ownerState,
        tabIndex,
        type: type2
      }, type2 === "checkbox" && value === void 0 ? {} : {
        value
      }, inputProps)), checked ? checkedIcon : icon]
    }));
  });
  true ? SwitchBase.propTypes = {
    autoFocus: import_prop_types13.default.bool,
    checked: import_prop_types13.default.bool,
    checkedIcon: import_prop_types13.default.node.isRequired,
    classes: import_prop_types13.default.object,
    className: import_prop_types13.default.string,
    defaultChecked: import_prop_types13.default.bool,
    disabled: import_prop_types13.default.bool,
    disableFocusRipple: import_prop_types13.default.bool,
    edge: import_prop_types13.default.oneOf(["end", "start", false]),
    icon: import_prop_types13.default.node.isRequired,
    id: import_prop_types13.default.string,
    inputProps: import_prop_types13.default.object,
    inputRef: refType_default,
    name: import_prop_types13.default.string,
    onBlur: import_prop_types13.default.func,
    onChange: import_prop_types13.default.func,
    onFocus: import_prop_types13.default.func,
    readOnly: import_prop_types13.default.bool,
    required: import_prop_types13.default.bool,
    sx: import_prop_types13.default.object,
    tabIndex: import_prop_types13.default.oneOfType([import_prop_types13.default.number, import_prop_types13.default.string]),
    type: import_prop_types13.default.string.isRequired,
    value: import_prop_types13.default.any
  } : void 0;
  var SwitchBase_default = SwitchBase;

  // node_modules/@mui/material/internal/svg-icons/CheckBoxOutlineBlank.js
  var React31 = __toESM(require_react());
  var import_jsx_runtime20 = __toESM(require_jsx_runtime());
  var CheckBoxOutlineBlank_default = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime20.jsx)("path", {
    d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
  }), "CheckBoxOutlineBlank");

  // node_modules/@mui/material/internal/svg-icons/CheckBox.js
  var React32 = __toESM(require_react());
  var import_jsx_runtime21 = __toESM(require_jsx_runtime());
  var CheckBox_default = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime21.jsx)("path", {
    d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
  }), "CheckBox");

  // node_modules/@mui/material/internal/svg-icons/IndeterminateCheckBox.js
  var React33 = __toESM(require_react());
  var import_jsx_runtime22 = __toESM(require_jsx_runtime());
  var IndeterminateCheckBox_default = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", {
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
  }), "IndeterminateCheckBox");

  // node_modules/@mui/material/Checkbox/checkboxClasses.js
  function getCheckboxUtilityClass(slot) {
    return generateUtilityClass("MuiCheckbox", slot);
  }
  var checkboxClasses = generateUtilityClasses("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary"]);
  var checkboxClasses_default = checkboxClasses;

  // node_modules/@mui/material/Checkbox/Checkbox.js
  var import_jsx_runtime23 = __toESM(require_jsx_runtime());
  var _excluded18 = ["checkedIcon", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size"];
  var useUtilityClasses8 = (ownerState) => {
    const {
      classes,
      indeterminate,
      color: color4
    } = ownerState;
    const slots = {
      root: ["root", indeterminate && "indeterminate", `color${capitalize_default(color4)}`]
    };
    const composedClasses = composeClasses(slots, getCheckboxUtilityClass, classes);
    return _extends({}, classes, composedClasses);
  };
  var CheckboxRoot = styled_default(SwitchBase_default, {
    shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
    name: "MuiCheckbox",
    slot: "Root",
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, ownerState.indeterminate && styles.indeterminate, ownerState.color !== "default" && styles[`color${capitalize_default(ownerState.color)}`]];
    }
  })(({
    theme,
    ownerState
  }) => _extends({
    color: theme.palette.text.secondary
  }, !ownerState.disableRipple && {
    "&:hover": {
      backgroundColor: alpha(ownerState.color === "default" ? theme.palette.action.active : theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }
  }, ownerState.color !== "default" && {
    [`&.${checkboxClasses_default.checked}, &.${checkboxClasses_default.indeterminate}`]: {
      color: theme.palette[ownerState.color].main
    },
    [`&.${checkboxClasses_default.disabled}`]: {
      color: theme.palette.action.disabled
    }
  }));
  var defaultCheckedIcon = /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(CheckBox_default, {});
  var defaultIcon = /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(CheckBoxOutlineBlank_default, {});
  var defaultIndeterminateIcon = /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(IndeterminateCheckBox_default, {});
  var Checkbox = /* @__PURE__ */ React34.forwardRef(function Checkbox2(inProps, ref) {
    var _icon$props$fontSize, _indeterminateIcon$pr;
    const props = useThemeProps2({
      props: inProps,
      name: "MuiCheckbox"
    });
    const {
      checkedIcon = defaultCheckedIcon,
      color: color4 = "primary",
      icon: iconProp = defaultIcon,
      indeterminate = false,
      indeterminateIcon: indeterminateIconProp = defaultIndeterminateIcon,
      inputProps,
      size = "medium"
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded18);
    const icon = indeterminate ? indeterminateIconProp : iconProp;
    const indeterminateIcon = indeterminate ? indeterminateIconProp : checkedIcon;
    const ownerState = _extends({}, props, {
      color: color4,
      indeterminate,
      size
    });
    const classes = useUtilityClasses8(ownerState);
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(CheckboxRoot, _extends({
      type: "checkbox",
      inputProps: _extends({
        "data-indeterminate": indeterminate
      }, inputProps),
      icon: /* @__PURE__ */ React34.cloneElement(icon, {
        fontSize: (_icon$props$fontSize = icon.props.fontSize) != null ? _icon$props$fontSize : size
      }),
      checkedIcon: /* @__PURE__ */ React34.cloneElement(indeterminateIcon, {
        fontSize: (_indeterminateIcon$pr = indeterminateIcon.props.fontSize) != null ? _indeterminateIcon$pr : size
      }),
      ownerState,
      ref
    }, other, {
      classes
    }));
  });
  true ? Checkbox.propTypes = {
    checked: import_prop_types14.default.bool,
    checkedIcon: import_prop_types14.default.node,
    classes: import_prop_types14.default.object,
    color: import_prop_types14.default.oneOfType([import_prop_types14.default.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types14.default.string]),
    defaultChecked: import_prop_types14.default.bool,
    disabled: import_prop_types14.default.bool,
    disableRipple: import_prop_types14.default.bool,
    icon: import_prop_types14.default.node,
    id: import_prop_types14.default.string,
    indeterminate: import_prop_types14.default.bool,
    indeterminateIcon: import_prop_types14.default.node,
    inputProps: import_prop_types14.default.object,
    inputRef: refType_default,
    onChange: import_prop_types14.default.func,
    required: import_prop_types14.default.bool,
    size: import_prop_types14.default.oneOfType([import_prop_types14.default.oneOf(["medium", "small"]), import_prop_types14.default.string]),
    sx: import_prop_types14.default.oneOfType([import_prop_types14.default.arrayOf(import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.object, import_prop_types14.default.bool])), import_prop_types14.default.func, import_prop_types14.default.object]),
    value: import_prop_types14.default.any
  } : void 0;
  var Checkbox_default = Checkbox;

  // node_modules/@mui/material/FormControlLabel/FormControlLabel.js
  var React35 = __toESM(require_react());
  var import_prop_types15 = __toESM(require_prop_types());

  // node_modules/@mui/material/FormControlLabel/formControlLabelClasses.js
  function getFormControlLabelUtilityClasses(slot) {
    return generateUtilityClass("MuiFormControlLabel", slot);
  }
  var formControlLabelClasses = generateUtilityClasses("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error"]);
  var formControlLabelClasses_default = formControlLabelClasses;

  // node_modules/@mui/material/FormControlLabel/FormControlLabel.js
  var import_jsx_runtime24 = __toESM(require_jsx_runtime());
  var import_jsx_runtime25 = __toESM(require_jsx_runtime());
  var _excluded19 = ["checked", "className", "componentsProps", "control", "disabled", "disableTypography", "inputRef", "label", "labelPlacement", "name", "onChange", "value"];
  var useUtilityClasses9 = (ownerState) => {
    const {
      classes,
      disabled,
      labelPlacement,
      error
    } = ownerState;
    const slots = {
      root: ["root", disabled && "disabled", `labelPlacement${capitalize_default(labelPlacement)}`, error && "error"],
      label: ["label", disabled && "disabled"]
    };
    return composeClasses(slots, getFormControlLabelUtilityClasses, classes);
  };
  var FormControlLabelRoot = styled_default("label", {
    name: "MuiFormControlLabel",
    slot: "Root",
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [{
        [`& .${formControlLabelClasses_default.label}`]: styles.label
      }, styles.root, styles[`labelPlacement${capitalize_default(ownerState.labelPlacement)}`]];
    }
  })(({
    theme,
    ownerState
  }) => _extends({
    display: "inline-flex",
    alignItems: "center",
    cursor: "pointer",
    verticalAlign: "middle",
    WebkitTapHighlightColor: "transparent",
    marginLeft: -11,
    marginRight: 16,
    [`&.${formControlLabelClasses_default.disabled}`]: {
      cursor: "default"
    }
  }, ownerState.labelPlacement === "start" && {
    flexDirection: "row-reverse",
    marginLeft: 16,
    marginRight: -11
  }, ownerState.labelPlacement === "top" && {
    flexDirection: "column-reverse",
    marginLeft: 16
  }, ownerState.labelPlacement === "bottom" && {
    flexDirection: "column",
    marginLeft: 16
  }, {
    [`& .${formControlLabelClasses_default.label}`]: {
      [`&.${formControlLabelClasses_default.disabled}`]: {
        color: theme.palette.text.disabled
      }
    }
  }));
  var FormControlLabel = /* @__PURE__ */ React35.forwardRef(function FormControlLabel2(inProps, ref) {
    const props = useThemeProps2({
      props: inProps,
      name: "MuiFormControlLabel"
    });
    const {
      className,
      componentsProps = {},
      control,
      disabled: disabledProp,
      disableTypography,
      label: label2,
      labelPlacement = "end"
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded19);
    const muiFormControl = useFormControl();
    let disabled = disabledProp;
    if (typeof disabled === "undefined" && typeof control.props.disabled !== "undefined") {
      disabled = control.props.disabled;
    }
    if (typeof disabled === "undefined" && muiFormControl) {
      disabled = muiFormControl.disabled;
    }
    const controlProps = {
      disabled
    };
    ["checked", "name", "onChange", "value", "inputRef"].forEach((key) => {
      if (typeof control.props[key] === "undefined" && typeof props[key] !== "undefined") {
        controlProps[key] = props[key];
      }
    });
    const fcs = formControlState({
      props,
      muiFormControl,
      states: ["error"]
    });
    const ownerState = _extends({}, props, {
      disabled,
      label: label2,
      labelPlacement,
      error: fcs.error
    });
    const classes = useUtilityClasses9(ownerState);
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(FormControlLabelRoot, _extends({
      className: clsx_m_default(classes.root, className),
      ownerState,
      ref
    }, other, {
      children: [/* @__PURE__ */ React35.cloneElement(control, controlProps), label2.type === Typography_default || disableTypography ? label2 : /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Typography_default, _extends({
        component: "span",
        className: classes.label
      }, componentsProps.typography, {
        children: label2
      }))]
    }));
  });
  true ? FormControlLabel.propTypes = {
    checked: import_prop_types15.default.bool,
    classes: import_prop_types15.default.object,
    className: import_prop_types15.default.string,
    componentsProps: import_prop_types15.default.shape({
      typography: import_prop_types15.default.object
    }),
    control: import_prop_types15.default.element.isRequired,
    disabled: import_prop_types15.default.bool,
    disableTypography: import_prop_types15.default.bool,
    inputRef: refType_default,
    label: import_prop_types15.default.oneOfType([import_prop_types15.default.element, import_prop_types15.default.number, import_prop_types15.default.string]).isRequired,
    labelPlacement: import_prop_types15.default.oneOf(["bottom", "end", "start", "top"]),
    name: import_prop_types15.default.string,
    onChange: import_prop_types15.default.func,
    sx: import_prop_types15.default.oneOfType([import_prop_types15.default.arrayOf(import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object, import_prop_types15.default.bool])), import_prop_types15.default.func, import_prop_types15.default.object]),
    value: import_prop_types15.default.any
  } : void 0;
  var FormControlLabel_default = FormControlLabel;

  // node_modules/@zilliz/zui/dist/ZIcons/svg14.js
  var import_jsx_runtime26 = __toESM(require_jsx_runtime());
  {
  }

  // node_modules/@zilliz/zui/dist/ZIcons/svg24.js
  var import_jsx_runtime27 = __toESM(require_jsx_runtime());

  // node_modules/@zilliz/zui/dist/ZIcons/logo.js
  var import_jsx_runtime28 = __toESM(require_jsx_runtime());

  // node_modules/@zilliz/zui/dist/ZAlert/ZAlert.js
  var Alert3 = React36.forwardRef(function Alert4(props, ref) {
    return (0, import_jsx_runtime30.jsx)(Alert_default, { ref, ...props }, void 0);
  });

  // node_modules/@zilliz/zui/dist/ZBreadcrumb/ZBreadcrumb.js
  var import_jsx_runtime31 = __toESM(require_jsx_runtime());

  // node_modules/@zilliz/zui/dist/ZButton/ZButton.js
  var import_jsx_runtime32 = __toESM(require_jsx_runtime());

  // node_modules/@zilliz/zui/dist/ZButton/ZIconButton.js
  var import_jsx_runtime33 = __toESM(require_jsx_runtime());

  // node_modules/@zilliz/zui/dist/ZCheckbox/ZCheckbox.js
  var import_jsx_runtime34 = __toESM(require_jsx_runtime());
  var import_react10 = __toESM(require_react());
  var StyledCheckbox = import_react10.default.forwardRef((props, ref) => {
    const { sx, ...others } = props;
    const zTheme = useTheme5();
    return (0, import_jsx_runtime34.jsx)(Checkbox_default, { ref, sx: {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        "& path": {
          fill: zTheme.black.black5
        }
      },
      "&.MuiCheckbox-root:hover": {
        background: "none"
      },
      "&.Mui-checked": {
        color: zTheme.blue.primary,
        "& path": { fill: zTheme.blue.primary }
      },
      "&.Mui-disabled": {
        color: zTheme.black.black5,
        "& path": { fill: zTheme.black.black5 }
      },
      ...sx
    }, disableRipple: true, ...others }, void 0);
  });
  var ZCheckbox = import_react10.default.forwardRef(function(props, ref) {
    const zTheme = useTheme5();
    const { label: label2 = "", ...others } = props;
    return label2 ? (0, import_jsx_runtime34.jsx)(FormControlLabel_default, { sx: {
      "& .MuiFormControlLabel-label": {
        fontSize: 14,
        lineHeight: "20px",
        color: zTheme.black.black1,
        "&.Mui-disabled": {
          color: zTheme.black.black4
        }
      }
    }, label: label2, control: (0, import_jsx_runtime34.jsx)(StyledCheckbox, { ref, ...others }, void 0) }, void 0) : (0, import_jsx_runtime34.jsx)(StyledCheckbox, { ref, ...others }, void 0);
  });

  // node_modules/@zilliz/zui/dist/ZDataGrid/ZDataGrid.js
  var import_jsx_runtime37 = __toESM(require_jsx_runtime());
  var import_react12 = __toESM(require_react());

  // node_modules/@zilliz/zui/dist/ZDataGrid/ZGridSlotsComponents.js
  var import_jsx_runtime36 = __toESM(require_jsx_runtime());
  var import_react11 = __toESM(require_react());

  // node_modules/@zilliz/zui/dist/ZPagination/ZPagination.js
  var import_jsx_runtime35 = __toESM(require_jsx_runtime());

  // node_modules/@zilliz/zui/dist/ZDatePicker/ZDatePicker.js
  var import_jsx_runtime38 = __toESM(require_jsx_runtime());
  var React38 = __toESM(require_react());

  // node_modules/@zilliz/zui/dist/ZInput/ZInput.js
  var import_jsx_runtime40 = __toESM(require_jsx_runtime());

  // node_modules/@zilliz/zui/dist/ZInput/ZPassword.js
  var import_jsx_runtime39 = __toESM(require_jsx_runtime());
  var import_react13 = __toESM(require_react());

  // node_modules/@zilliz/zui/dist/ZInput/Types.js
  var InputComponentTypeEnum;
  (function(InputComponentTypeEnum2) {
    InputComponentTypeEnum2["default"] = "default";
    InputComponentTypeEnum2["password"] = "pwd";
  })(InputComponentTypeEnum || (InputComponentTypeEnum = {}));

  // node_modules/@zilliz/zui/dist/ZModal/ZModal.js
  var import_jsx_runtime41 = __toESM(require_jsx_runtime());

  // node_modules/@zilliz/zui/dist/ZNavigation/ZNavigation.js
  var import_jsx_runtime42 = __toESM(require_jsx_runtime());
  var React39 = __toESM(require_react());

  // node_modules/@zilliz/zui/dist/ZNotification/ZNotification.js
  var import_jsx_runtime44 = __toESM(require_jsx_runtime());
  var React40 = __toESM(require_react());

  // node_modules/@zilliz/zui/dist/ZNotification/ZNotificationIcon.js
  var import_jsx_runtime43 = __toESM(require_jsx_runtime());

  // node_modules/@zilliz/zui/dist/ZNotification/ZNotification.js
  var Alert5 = React40.forwardRef(function Alert6(props, ref) {
    return (0, import_jsx_runtime44.jsx)(Alert_default, { ref, ...props }, void 0);
  });

  // node_modules/@zilliz/zui/dist/ZNumberBoxGroup/ZNumberBoxGroup.js
  var import_jsx_runtime46 = __toESM(require_jsx_runtime());
  var import_react14 = __toESM(require_react());
  var import_react15 = __toESM(require_react());

  // node_modules/@zilliz/zui/dist/ZNumberBoxGroup/ZNumberBox.js
  var import_jsx_runtime45 = __toESM(require_jsx_runtime());

  // node_modules/@zilliz/zui/dist/ZPopconfirm/ZPopconfirm.js
  var import_jsx_runtime47 = __toESM(require_jsx_runtime());

  // node_modules/@zilliz/zui/dist/ZRadio/ZRadio.js
  var import_jsx_runtime48 = __toESM(require_jsx_runtime());
  var BpIcon = styled_default("span")(({ theme }) => ({
    boxSizing: "border-box",
    borderRadius: "50%",
    width: 14,
    height: 14,
    border: `solid 2px ${theme.black.black5}`,
    transition: "all 0.1s"
  }));
  var BpCheckedIcon = styled_default(BpIcon)(({ theme }) => ({
    border: `solid 5px ${theme.blue.primary}`
  }));

  // node_modules/@zilliz/zui/dist/ZSelector/ZSelector.js
  var import_jsx_runtime49 = __toESM(require_jsx_runtime());
  var React42 = __toESM(require_react());

  // node_modules/@zilliz/zui/dist/ZTab/ZTab.js
  var import_jsx_runtime50 = __toESM(require_jsx_runtime());
  var import_react16 = __toESM(require_react());

  // node_modules/@zilliz/zui/dist/ZTag/ZTag.js
  var import_jsx_runtime51 = __toESM(require_jsx_runtime());

  // node_modules/@zilliz/zui/dist/ZDrawer/ZDrawer.js
  var import_jsx_runtime52 = __toESM(require_jsx_runtime());

  // node_modules/@zilliz/zui/dist/ZChart/ZChart.js
  var import_jsx_runtime53 = __toESM(require_jsx_runtime());
  var import_react17 = __toESM(require_react());

  // node_modules/@zilliz/zui/dist/ZChart/title.js
  var drawTitle = (titleG, config2) => {
    const { width: width2, height: height2, padding: padding2, title } = config2;
    titleG.append("text").attr("x", width2 / 2).attr("y", padding2[0] / 2 + title.fontSize / 2).attr("text-anchor", "middle").attr("font-size", title.fontSize).attr("font-weight", title.fontWeight).attr("fill", title.fontColor).text(title.text);
  };
  var title_default = drawTitle;

  // node_modules/@zilliz/zui/dist/ZChart/axis.js
  var tickMap = {
    bottom: axisBottom,
    top: axisTop,
    left: axisLeft,
    right: axisRight
  };
  var xAxis = (g, scale, config2) => {
    g.selectAll("*").remove();
    const { width: width2, height: height2, padding: padding2, x: x3 } = config2;
    g.attr("transform", x3.tickType === "bottom" ? `translate(0,${height2 - padding2[2]})` : `translate(0,${padding2[0]})`).call(tickMap[x3.tickType](scale)).call((g2) => g2.select(".domain").remove()).call((g2) => g2.selectAll(".tick text").attr("font-size", x3.tickFontSize).attr("fill", x3.tickColor)).call((g2) => g2.append("text").attr("x", (width2 - padding2[1] - padding2[3]) / 2 + padding2[3]).attr("y", x3.tickType === "bottom" ? padding2[2] - 8 : -24).attr("fill", x3.labelColor).attr("text-anchor", "middle").style("font-size", x3.labelFontSize).style("font-weight", x3.labelWeight).text(x3.label));
    if (x3.scaleType === "bin") {
      g.call((g2) => g2.selectAll(".tick line").remove());
    } else {
      g.call((g2) => g2.selectAll(".tick line").attr("y1", 0).attr("y2", (x3.tickType === "bottom" ? 1 : -1) * (padding2[0] + padding2[2] - height2)).attr("stroke-opacity", 0.1));
    }
  };
  var yAxis = (g, scale, config2) => {
    g.selectAll("*").remove();
    const { width: width2, height: height2, padding: padding2, y: y3 } = config2;
    g.attr("transform", y3.tickType === "left" ? `translate(${padding2[3]},0)` : `translate(${width2 - padding2[1]},0)`).call(tickMap[y3.tickType](scale)).call((g2) => g2.select(".domain").remove()).call((g2) => g2.selectAll(".tick line").attr("x1", 0).attr("x2", (y3.tickType === "left" ? 1 : -1) * (width2 - padding2[1] - padding2[3])).attr("stroke-opacity", 0.1)).call((g2) => g2.selectAll(".tick text").attr("font-size", y3.tickFontSize).attr("fill", y3.tickColor)).call((g2) => {
      const labelX2 = y3.tickType === "left" ? -padding2[3] + 20 : padding2[1] - 20;
      const labelY2 = (height2 - padding2[0] - padding2[2]) / 2 + padding2[0];
      const rotate2 = y3.tickType === "left" ? 270 : 90;
      g2.append("text").attr("x", 0).attr("y", 0).attr("transform", `translate(${labelX2},${labelY2}) rotate(${rotate2})`).attr("fill", y3.labelColor).attr("text-anchor", "middle").style("font-size", y3.labelFontSize).style("font-weight", y3.labelWeight).text(y3.label);
    });
  };

  // node_modules/@zilliz/zui/dist/ZChart/circle.js
  var linkMap = {
    curve: catmullRom_default.alpha(0.5),
    linear: linear_default
  };
  var drawCircles = (circlesG, data, config, xScale, yScale, colorScale, showTooltip, closeTooltip, clip) => {
    circlesG.selectAll("*").remove();
    circlesG.attr("clip-path", clip);
    const { circle, x, y } = config;
    const positions = data.map((item) => [
      xScale(item[x.key]),
      yScale(item[y.key])
    ]);
    const { withLinks = false, linkWidth = 2, linkColor = "#ccc", linkType = "curve", isLinkColorMapping = false } = circle;
    if (withLinks) {
      const link = line_default().curve(linkMap[linkType]).x((d) => d[0]).y((d) => d[1]);
      circlesG.append("g").attr("id", "circles-links").append("path").attr("fill", "none").attr("stroke", isLinkColorMapping ? colorScale(data[0][linkColor]) : linkColor).attr("stroke-width", linkWidth).attr("d", link(positions));
    }
    const circleG = circlesG.append("g").attr("id", "circles-nodes").selectAll("g").data(data).join("g");
    const { circleColor = "#e6550d", r = 5, strokeColor = "", strokeWidth = 1, isCircleColorMapping = false } = circle;
    const circleColorMap = isCircleColorMapping ? colorScale : () => circleColor;
    circleG.append("circle").attr("fill", (item) => circleColorMap(item[circleColor])).attr("r", r).attr("stroke", strokeColor).attr("stroke-width", strokeWidth).attr("cx", (_2, i) => positions[i][0]).attr("cy", (_2, i) => positions[i][1]);
    const { withLabels = false, label: _label = "()=>{}", labelFontSize = 14 } = circle;
    const label = eval(_label);
    if (withLabels) {
      circleG.append("text").text((item) => label(item)).attr("font-size", labelFontSize).attr("fill", (item) => circleColorMap(item[circleColor])).attr("text-anchor", "middle").attr("x", (_2, i) => positions[i][0]).attr("y", (_2, i) => positions[i][1] - r - 4);
    }
    circleG.style("cursor", "pointer").on("mousemove", showTooltip);
    circleG.on("mouseout", closeTooltip);
  };
  var circle_default = drawCircles;

  // node_modules/@zilliz/zui/dist/ZChart/utils.js
  var domainExtent = (domain) => {
    const ext = (domain[1] - domain[0]) * 0.06;
    return domain[0] === 0 ? [domain[0], domain[1] + ext] : [domain[0] - ext, domain[1] + ext];
  };
  var scaleMap = {
    linear: linear2,
    log,
    bin: band,
    ordinal: point
  };
  var colors = Tableau10_default;

  // node_modules/@zilliz/zui/dist/ZChart/scatterPlot.js
  var drawScatterPlot = ({ svg: svg2, circlesPlotG, xAxisG: xAxisG2, yAxisG: yAxisG2, data: data2, colorScale: colorScale2, xScale: xScale2, yScale: yScale2, xRange, yRange, config: config2, showTooltip: showTooltip2, closeTooltip: closeTooltip2, clip: clip2 }) => {
    const { groupBy: groupBy2, x: x3, y: y3 } = config2;
    const zoomedFuncs = [];
    if (groupBy2.isGroupBy) {
      const groupByKeySet = new Set(data2.map((d) => d[groupBy2.key]));
      const groupByKeyOrder = Array.from(groupByKeySet);
      const datas = groupByKeyOrder.map((key) => data2.filter((d) => d[groupBy2.key] === key));
      groupBy2.sameXScale && xAxisG2.call(xAxis, xScale2, config2);
      groupBy2.sameYScale && yAxisG2.call(yAxis, yScale2, config2);
      const xScales = [];
      const yScales = [];
      datas.forEach((data3, i) => {
        if (!groupBy2.sameXScale) {
          const xDomain = domainExtent(extent(data3, (d) => d[x3.key]));
          xScale2 = scaleMap[x3.scaleType]().domain(xDomain).range(xRange);
          xScales.push(xScale2);
        }
        if (!groupBy2.sameYScale) {
          const yDomain = domainExtent(extent(data3, (d) => d[y3.key]));
          yScale2 = scaleMap[y3.scaleType]().domain(yDomain).range(yRange);
          yScales.push(yScale2);
        }
        const circlesG2 = circlesPlotG.append("g").attr("id", `circles-g-${i}`).classed(`group-${groupByKeyOrder[i]}`, true);
        circlesG2.call(circle_default, data3, config2, xScale2, yScale2, colorScale2, showTooltip2, closeTooltip2, clip2);
        zoomedFuncs.push(({ transform: transform3, newXScale, newYScale }) => {
          const _newXScale = groupBy2.sameXScale ? newXScale : transform3.rescaleX(xScales[i]);
          const _newYScale = groupBy2.sameYScale ? newYScale : transform3.rescaleY(yScales[i]);
          circlesG2.call(circle_default, data3, config2, x3.zoom ? _newXScale : xScales[i] || xScale2, y3.zoom ? _newYScale : yScales[i] || yScale2, colorScale2, showTooltip2, closeTooltip2, clip2);
        });
      });
      const zoomed = ({ transform: transform3 }) => {
        const newXScale = x3.zoom ? transform3.rescaleX(xScale2) : xScale2;
        const newYScale = y3.zoom ? transform3.rescaleY(yScale2) : yScale2;
        x3.zoom && groupBy2.sameXScale && xAxisG2.call(xAxis, newXScale, config2);
        y3.zoom && groupBy2.sameYScale && yAxisG2.call(yAxis, newYScale, config2);
        zoomedFuncs.forEach((zoomedFunc) => zoomedFunc({ transform: transform3, newXScale, newYScale }));
      };
      const zoom = zoom_default2().scaleExtent([0.5, 1024]).on("zoom", zoomed);
      (x3.zoom || y3.zoom) && svg2.call(zoom).call(zoom.transform, identity3);
    } else {
      xAxisG2.call(xAxis, xScale2, config2);
      yAxisG2.call(yAxis, yScale2, config2);
      const circlesG2 = circlesPlotG.append("g").attr("id", `circles-g`);
      circlesG2.call(circle_default, data2, config2, xScale2, yScale2, colorScale2, showTooltip2, closeTooltip2, clip2);
      const zoomed = ({ transform: transform3 }) => {
        const newXScale = x3.zoom ? transform3.rescaleX(xScale2) : xScale2;
        const newYScale = y3.zoom ? transform3.rescaleY(yScale2) : yScale2;
        x3.zoom && xAxisG2.call(xAxis, newXScale, config2);
        y3.zoom && yAxisG2.call(yAxis, newYScale, config2);
        circlesG2.call(circle_default, data2, config2, newXScale, newYScale, colorScale2, showTooltip2, closeTooltip2, clip2);
      };
      const zoom = zoom_default2().scaleExtent([0.5, 32]).on("zoom", zoomed);
      (x3.zoom || y3.zoom) && svg2.call(zoom).call(zoom.transform, identity3);
    }
  };
  var scatterPlot_default = drawScatterPlot;

  // node_modules/@zilliz/zui/dist/ZChart/barChart.js
  var drawBarChart = ({ barsG, xAxisG, yAxisG, data, xScale, yScale, colorScale, config, showTooltip, closeTooltip }) => {
    xScale.paddingInner(0.3).paddingOuter(0.5);
    xAxisG.call(xAxis, xScale, config);
    yAxisG.call(yAxis, yScale, config);
    const { bar, groupBy, x, y } = config;
    const { isColorMapping = false, color = "#888", withLabels, label: _label = "()=>{}", labelFontSize } = bar;
    const label = eval(_label);
    const colorMap = isColorMapping ? colorScale : () => color;
    const barG = barsG.selectAll("g").data(data).join("g");
    if (groupBy.isGroupBy) {
      const groupByKeyOrder = Array.from(new Set(data.map((d) => d[groupBy.key])));
      barG.each(function(d) {
        select_default2(this).classed(`group-${d[groupBy.key]}`, true);
      });
      const innerPadding = 0.1;
      const innerBarStep = xScale.bandwidth() / groupByKeyOrder.length;
      const innerBarWidth = innerBarStep * (1 - innerPadding);
      const innerBias = (d) => (groupByKeyOrder.indexOf(d[groupBy.key]) + innerPadding) * innerBarStep;
      barG.append("rect").attr("x", (d) => xScale(d[x.key]) + innerBias(d)).attr("y", (d) => yScale(d[y.key])).attr("width", innerBarWidth).attr("height", (d) => yScale(0) - yScale(d[y.key])).attr("fill", (d) => colorMap(d[color]));
      withLabels && barG.append("text").attr("x", (d) => xScale(d[x.key]) + innerBarWidth / 2 + innerBias(d)).attr("y", (d) => yScale(d[y.key]) - 5).attr("text-anchor", "middle").text((d) => label(d)).attr("font-size", labelFontSize).attr("fill", (d) => colorMap(d[color]));
    } else {
      barG.append("rect").attr("x", (d) => xScale(d[x.key])).attr("y", (d) => yScale(d[y.key])).attr("width", xScale.bandwidth()).attr("height", (d) => yScale(0) - yScale(d[y.key])).attr("fill", (d) => colorMap(d[color]));
      withLabels && barG.append("text").attr("x", (d) => xScale(d[x.key]) + xScale.bandwidth() / 2).attr("y", (d) => yScale(d[y.key]) - 5).attr("text-anchor", "middle").text((d) => label(d)).attr("font-size", labelFontSize).attr("fill", (d) => colorMap(d[color]));
    }
    barG.style("cursor", "pointer").on("mousemove", showTooltip);
    barG.on("mouseout", closeTooltip);
  };
  var barChart_default = drawBarChart;

  // node_modules/@zilliz/zui/dist/ZChart/legend.js
  var drawLegend = ({ chartType, legendsG, data, colorScale, config, svg }) => {
    const { groupBy, circle } = config;
    const { legendHeight = 30, legendIconWidth = 40, legendFontSize = 16, legendLabel: _legendLabel = "(v)=>v" } = groupBy;
    const groupByKeyList = Array.from(new Set(data.map((d) => d[groupBy.key])));
    const legendG = legendsG.selectAll("g").data(groupByKeyList).join("g").attr("transform", (_2, i) => `translate(0,${i * legendHeight})`);
    if (chartType === "scatter_plot") {
      if (circle.withLinks) {
        legendG.append("path").attr("d", `M0,${legendHeight / 2}h${legendIconWidth}`).attr("fill", "none").attr("stroke", (d) => colorScale(d)).attr("stroke-width", circle.linkWidth).attr("stroke-linecap", "round");
      }
      legendG.append("circle").attr("cx", legendIconWidth / 2).attr("cy", legendHeight / 2).attr("r", circle.r).attr("fill", (d) => colorScale(d)).attr("stroke", circle.strokeColor).attr("stroke-width", circle.strokeWidth);
    }
    if (chartType === "barchart") {
      legendG.append("rect").attr("x", 0).attr("y", legendHeight * 0.25).attr("width", legendIconWidth).attr("height", legendHeight * 0.5).attr("fill", (d) => colorScale(d));
    }
    const legendLabel = eval(_legendLabel);
    legendG.append("text").attr("x", legendIconWidth + 6).attr("y", legendHeight / 2 + legendFontSize * 0.35).attr("font-size", legendFontSize).attr("fill", (d) => colorScale(d)).text(legendLabel);
    legendG.style("cursor", "pointer").on("click", function(_2, d) {
      const items = svg.selectAll(`.group-${d}`);
      const legend = select_default2(this);
      const status = legend.classed("zchart-legend-hide");
      items.classed("zchart-items-hide", !status);
      legend.classed("zchart-legend-hide", !status);
    });
  };
  var legend_default = drawLegend;

  // node_modules/@zilliz/zui/dist/ZChart/tooltip.js
  var drawTooltip = ({ tooltipG, config: config2 }) => {
    const { height: height2, tooltip } = config2;
    let showTooltip2 = () => {
    };
    let closeTooltip2 = () => {
    };
    if (tooltip.hasTooltip) {
      showTooltip2 = (e, d) => {
        tooltipG.attr("opacity", 1);
        const { layerX: __x, layerY: __y } = e;
        const path2 = tooltipG.selectAll("path").data([,]).join("path").attr("fill", "#ffffff40").attr("stroke", "#666");
        const text = tooltipG.selectAll("text").data([,]).join("text").attr("font-size", tooltip.fontSize).attr("font-weight", tooltip.fontWeight).attr("fill", tooltip.fontColor).call((text2) => text2.selectAll("tspan").data(tooltip.content).join("tspan").attr("x", 0).attr("y", (_2, i) => `${i * 1.5}em`).text((key) => `${key}: ${d[key]}`));
        const { y: _y, width: w, height: h } = text.node().getBBox();
        let tooltipX = __x;
        let tooltipY = __y;
        if (tooltipY > height2 * 0.65) {
          tooltipY -= h + 30;
        } else {
          tooltipY += 10;
        }
        tooltipG.attr("transform", `translate(${tooltipX},${tooltipY})`);
        text.attr("transform", `translate(${-w / 2},${15 - _y})`);
        path2.attr("d", `M${-w / 2 - 10},5 H${w / 2 + 10} v${h + 20} h-${w + 20}z`);
      };
      closeTooltip2 = () => {
        tooltipG.attr("opacity", 0);
      };
    }
    return { showTooltip: showTooltip2, closeTooltip: closeTooltip2 };
  };
  var tooltip_default = drawTooltip;

  // node_modules/@zilliz/zui/dist/ZChart/index.js
  var ZChart = ({ chartType: chartType2, domSelector, data: _data, config: config2 }) => {
    let { width: width2 = 800, height: height2 = 600, background = null, border: border2 = null, padding: padding2 = [50, 25, 35, 35], dataProcessing = {}, x: x3 = {}, y: y3 = {}, groupBy: groupBy2 = {} } = config2;
    let data2 = _data;
    if (dataProcessing.needSort) {
      data2 = sort(data2, (d) => d[dataProcessing.sort]);
      if (dataProcessing.sortReverse) {
        data2 = data2.reverse();
      }
    }
    if (dataProcessing.needFixed) {
      const { fixedKey, fixedNum } = dataProcessing;
      data2.forEach((d) => {
        d[fixedKey] = (+d[fixedKey]).toFixed(fixedNum);
      });
    }
    const svg2 = select_default2(domSelector).append("svg").attr("id", "chart-svg");
    svg2.attr("width", width2).attr("height", height2).style("background", background).style("border", border2);
    const colorScale2 = ordinal().range(colors);
    const xDomain = x3.scaleType === "bin" || x3.scaleType === "ordinal" ? data2.map((d) => d[x3.key]) : domainExtent(extent(data2, (d) => +d[x3.key]));
    const xRange = [padding2[3] + x3.inset, width2 - padding2[1] - x3.inset];
    let xScale2 = scaleMap[x3.scaleType]().domain(xDomain).range(xRange);
    const yDomain = y3.fromZero ? domainExtent([0, max(data2, (d) => +d[y3.key])]) : domainExtent(extent(data2, (d) => +d[y3.key]));
    const yRange = [height2 - padding2[2] - y3.inset, padding2[0] + y3.inset];
    let yScale2 = scaleMap[y3.scaleType]().domain(yDomain).range(yRange);
    const clipId = `chart-clip-${Math.floor(Math.random() * 999999999)}`;
    const clip2 = `url(#${clipId})`;
    svg2.append("clipPath").attr("id", clipId).append("rect").attr("x", padding2[3] - x3.inset).attr("y", padding2[0]).attr("width", width2 - padding2[1] - padding2[3] + x3.inset * 2).attr("height", height2 - padding2[0] - padding2[2]);
    const titleG = svg2.append("g").attr("id", "title-g");
    titleG.call(title_default, config2);
    const xAxisG2 = svg2.append("g").attr("id", "x-axis-g");
    const yAxisG2 = svg2.append("g").attr("id", "y-axis-g");
    const circlesPlotG = svg2.append("g").attr("id", "circles-plot-g");
    const barsG2 = svg2.append("g").attr("id", "bars-g");
    const legendsG2 = svg2.append("g").attr("id", "legends-g");
    const tooltipG = svg2.append("g").attr("id", "tooltip-g").style("pointer-events", "none").attr("opacity", 0);
    const { showTooltip: showTooltip2, closeTooltip: closeTooltip2 } = tooltip_default({
      tooltipG,
      config: config2,
      colorScale: colorScale2
    });
    if (chartType2 === "scatter_plot") {
      scatterPlot_default({
        svg: svg2,
        circlesPlotG,
        xAxisG: xAxisG2,
        yAxisG: yAxisG2,
        data: data2,
        xScale: xScale2,
        yScale: yScale2,
        colorScale: colorScale2,
        xRange,
        yRange,
        config: config2,
        showTooltip: showTooltip2,
        closeTooltip: closeTooltip2,
        clip: clip2
      });
    }
    if (chartType2 === "barchart") {
      barChart_default({
        barsG: barsG2,
        xAxisG: xAxisG2,
        yAxisG: yAxisG2,
        data: data2,
        xScale: xScale2,
        yScale: yScale2,
        colorScale: colorScale2,
        config: config2,
        showTooltip: showTooltip2,
        closeTooltip: closeTooltip2,
        clip: clip2
      });
    }
    legendsG2.attr("transform", `translate(${width2 - padding2[1] * 0.85},${padding2[0]})`);
    if (groupBy2.isGroupBy) {
      legend_default({ chartType: chartType2, legendsG: legendsG2, data: data2, colorScale: colorScale2, config: config2, svg: svg2 });
    }
  };
  var ZChart_default = ZChart;

  // node_modules/@zilliz/zui/dist/ZChart/ZChart.js
  var drawZChart = (props) => {
    ZChart_default(props);
  };

  // node_modules/@zilliz/zui/dist/ZStepper/ZStepper.js
  var import_jsx_runtime55 = __toESM(require_jsx_runtime());
  var import_react18 = __toESM(require_react());

  // node_modules/@zilliz/zui/dist/ZStepper/ZStep.js
  var import_jsx_runtime54 = __toESM(require_jsx_runtime());

  // index.js
  window.addEventListener("DOMContentLoaded", async () => {
    const data_NB_RT = "./data/NB_RT.json";
    const NB_RT = await fetch(data_NB_RT).then((res) => res.json());
    let configFile = "./config_json/NB_RT_c.json";
    const NB_RT_c = await fetch(configFile).then((res) => res.json());
    drawZChart({
      chartType: "scatter_plot",
      domSelector: "#NB_RT",
      data: NB_RT,
      config: NB_RT_c
    });
    csvFile = "./data/indexnodes_indextime_hnsw.csv";
    let in_it = await csv2(csvFile);
    configFile = "./config_json/in_it_c.json";
    const in_it_c = await fetch(configFile).then((res) => res.json());
    drawZChart({
      chartType: "barchart",
      domSelector: "#indexnodes_indextime",
      data: in_it,
      config: in_it_c
    });
    csvFile = "./data/nq_RT_1m.csv";
    let nq_RT_1m = await csv2(csvFile);
    configFile = "./config_json/nq_RT_1m_c.json";
    const nq_RT_1m_c = await fetch(configFile).then((res) => res.json());
    drawZChart({
      chartType: "scatter_plot",
      domSelector: "#nq_RT_1m",
      data: nq_RT_1m,
      config: nq_RT_1m_c
    });
    csvFile = "./data/nq_RT_50m_4qn.csv";
    let nq_RT_50m_4qn = await csv2(csvFile);
    configFile = "./config_json/nq_RT_50m_4qn_c.json";
    const nq_RT_50m_4qn_c = await fetch(configFile).then((res) => res.json());
    drawZChart({
      chartType: "scatter_plot",
      domSelector: "#nq_RT_50m_4qn",
      data: nq_RT_50m_4qn,
      config: nq_RT_50m_4qn_c
    });
    csvFile = "./data/nq_RT_50m_8qn.csv";
    let nq_RT_50m_8qn = await csv2(csvFile);
    configFile = "./config_json/nq_RT_50m_8qn_c.json";
    const nq_RT_50m_8qn_c = await fetch(configFile).then((res) => res.json());
    drawZChart({
      chartType: "scatter_plot",
      domSelector: "#nq_RT_50m_8qn",
      data: nq_RT_50m_8qn,
      config: nq_RT_50m_8qn_c
    });
    configFile = "./config_json/nq_RT_1m_vps_c.json";
    const nq_RT_1m_vps_c = await fetch(configFile).then((res) => res.json());
    drawZChart({
      chartType: "scatter_plot",
      domSelector: "#nq_RT_1m_vps",
      data: nq_RT_1m,
      config: nq_RT_1m_vps_c
    });
    configFile = "./config_json/nq_RT_50m_4qn_vps_c.json";
    const nq_RT_50m_4qn_vps_c = await fetch(configFile).then((res) => res.json());
    drawZChart({
      chartType: "scatter_plot",
      domSelector: "#nq_RT_50m_4qn_vps",
      data: nq_RT_50m_4qn,
      config: nq_RT_50m_4qn_vps_c
    });
    configFile = "./config_json/nq_RT_50m_8qn_vps_c.json";
    const nq_RT_50m_8qn_vps_c = await fetch(configFile).then((res) => res.json());
    drawZChart({
      chartType: "scatter_plot",
      domSelector: "#nq_RT_50m_8qn_vps",
      data: nq_RT_50m_8qn,
      config: nq_RT_50m_8qn_vps_c
    });
    csvFile = "./data/RT_QPS_1m.csv";
    let RT_QPS_1m = await csv2(csvFile);
    configFile = "./config_json/RT_QPS_1m_c.json";
    const RT_QPS_1m_c = await fetch(configFile).then((res) => res.json());
    drawZChart({
      chartType: "scatter_plot",
      domSelector: "#RT_QPS_1m",
      data: RT_QPS_1m,
      config: RT_QPS_1m_c
    });
    csvFile = "./data/queryNodes_QPS_50m.csv";
    let queryNodes_QPS_50m = await csv2(csvFile);
    configFile = "./config_json/queryNodes_QPS_50m_c.json";
    const queryNodes_QPS_50m_c = await fetch(configFile).then((res) => res.json());
    drawZChart({
      chartType: "scatter_plot",
      domSelector: "#queryNodes_QPS_50m",
      data: queryNodes_QPS_50m,
      config: queryNodes_QPS_50m_c
    });
    csvFile = "./data/Recall_RT_sift_hnsw.csv";
    let Recall_RT_sift_hnsw = await csv2(csvFile);
    configFile = "./config_json/Recall_RT_sift_hnsw_c.json";
    const Recall_RT_sift_hnsw_c = await fetch(configFile).then((res) => res.json());
    drawZChart({
      chartType: "scatter_plot",
      domSelector: "#Recall_RT_sift_hnsw",
      data: Recall_RT_sift_hnsw,
      config: Recall_RT_sift_hnsw_c
    });
    csvFile = "./data/Recall_RT_sift_ivf_flat.csv";
    let Recall_RT_sift_ivf_flat = await csv2(csvFile);
    configFile = "./config_json/Recall_RT_sift_ivf_flat_c.json";
    const Recall_RT_sift_ivf_flat_c = await fetch(configFile).then((res) => res.json());
    drawZChart({
      chartType: "scatter_plot",
      domSelector: "#Recall_RT_sift_ivf_flat",
      data: Recall_RT_sift_ivf_flat,
      config: Recall_RT_sift_ivf_flat_c
    });
    csvFile = "./data/Recall_RT_sift_ivf_sq8.csv";
    let Recall_RT_sift_ivf_sq8 = await csv2(csvFile);
    configFile = "./config_json/Recall_RT_sift_ivf_sq8_c.json";
    const Recall_RT_sift_ivf_sq8_c = await fetch(configFile).then((res) => res.json());
    drawZChart({
      chartType: "scatter_plot",
      domSelector: "#Recall_RT_sift_ivf_sq8",
      data: Recall_RT_sift_ivf_sq8,
      config: Recall_RT_sift_ivf_sq8_c
    });
    csvFile = "./data/Recall_RT_glove_ivf_flat.csv";
    let Recall_RT_glove_ivf_flat = await csv2(csvFile);
    configFile = "./config_json/Recall_RT_glove_ivf_flat_c.json";
    const Recall_RT_glove_ivf_flat_c = await fetch(configFile).then((res) => res.json());
    drawZChart({
      chartType: "scatter_plot",
      domSelector: "#Recall_RT_glove_ivf_flat",
      data: Recall_RT_glove_ivf_flat,
      config: Recall_RT_glove_ivf_flat_c
    });
    csvFile = "./data/Recall_RT_sift.csv";
    let Recall_RT_sift = await csv2(csvFile);
    configFile = "./config_json/Recall_RT_sift.json";
    const Recall_RT_sift_c = await fetch(configFile).then((res) => res.json());
    drawZChart({
      chartType: "scatter_plot",
      domSelector: "#Recall_RT_sift",
      data: Recall_RT_sift,
      config: Recall_RT_sift_c
    });
    csvFile = "./data/Recall_RT_ivf_flat.csv";
    let Recall_RT_ivf_flat = await csv2(csvFile);
    configFile = "./config_json/Recall_RT_ivf_flat.json";
    const Recall_RT_ivf_flat_c = await fetch(configFile).then((res) => res.json());
    drawZChart({
      chartType: "scatter_plot",
      domSelector: "#Recall_RT_ivf_flat",
      data: Recall_RT_ivf_flat,
      config: Recall_RT_ivf_flat_c
    });
  });
})();
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/** @license MUI v5.0.0-alpha.71
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license MUI v5.4.4
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
