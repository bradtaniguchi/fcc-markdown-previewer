(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-editor-editor-module~modules-files-files-module"], {
    /***/
    "../../node_modules/fuse.js/dist/fuse.esm.js":
    /*!*************************************************************************************************************!*\
      !*** /home/runner/work/fcc-markdown-previewer/fcc-markdown-previewer/node_modules/fuse.js/dist/fuse.esm.js ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesFuseJsDistFuseEsmJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       * Fuse.js v6.4.1 - Lightweight fuzzy-search (http://fusejs.io)
       *
       * Copyright (c) 2020 Kiro Risk (http://kiro.me)
       * All Rights Reserved. Apache Software License 2.0
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       */


      function isArray(value) {
        return !Array.isArray ? getTag(value) === '[object Array]' : Array.isArray(value);
      } // Adapted from: https://github.com/lodash/lodash/blob/master/.internal/baseToString.js


      var INFINITY = 1 / 0;

      function baseToString(value) {
        // Exit early for strings to avoid a performance hit in some environments.
        if (typeof value == 'string') {
          return value;
        }

        var result = value + '';
        return result == '0' && 1 / value == -INFINITY ? '-0' : result;
      }

      function toString(value) {
        return value == null ? '' : baseToString(value);
      }

      function isString(value) {
        return typeof value === 'string';
      }

      function isNumber(value) {
        return typeof value === 'number';
      } // Adapted from: https://github.com/lodash/lodash/blob/master/isBoolean.js


      function isBoolean(value) {
        return value === true || value === false || isObjectLike(value) && getTag(value) == '[object Boolean]';
      }

      function isObject(value) {
        return typeof value === 'object';
      } // Checks if `value` is object-like.


      function isObjectLike(value) {
        return isObject(value) && value !== null;
      }

      function isDefined(value) {
        return value !== undefined && value !== null;
      }

      function isBlank(value) {
        return !value.trim().length;
      } // Gets the `toStringTag` of `value`.
      // Adapted from: https://github.com/lodash/lodash/blob/master/.internal/getTag.js


      function getTag(value) {
        return value == null ? value === undefined ? '[object Undefined]' : '[object Null]' : Object.prototype.toString.call(value);
      }

      var EXTENDED_SEARCH_UNAVAILABLE = 'Extended search is not available';
      var INCORRECT_INDEX_TYPE = "Incorrect 'index' type";

      var LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = function LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key) {
        return "Invalid value for key ".concat(key);
      };

      var PATTERN_LENGTH_TOO_LARGE = function PATTERN_LENGTH_TOO_LARGE(max) {
        return "Pattern length exceeds max of ".concat(max, ".");
      };

      var MISSING_KEY_PROPERTY = function MISSING_KEY_PROPERTY(name) {
        return "Missing ".concat(name, " property in key");
      };

      var INVALID_KEY_WEIGHT_VALUE = function INVALID_KEY_WEIGHT_VALUE(key) {
        return "Property 'weight' in key '".concat(key, "' must be a positive integer");
      };

      var hasOwn = Object.prototype.hasOwnProperty;

      var KeyStore = /*#__PURE__*/function () {
        function KeyStore(keys) {
          var _this = this;

          _classCallCheck(this, KeyStore);

          this._keys = [];
          this._keyMap = {};
          var totalWeight = 0;
          keys.forEach(function (key) {
            var obj = createKey(key);
            totalWeight += obj.weight;

            _this._keys.push(obj);

            _this._keyMap[obj.id] = obj;
            totalWeight += obj.weight;
          }); // Normalize weights so that their sum is equal to 1

          this._keys.forEach(function (key) {
            key.weight /= totalWeight;
          });
        }

        _createClass(KeyStore, [{
          key: "get",
          value: function get(keyId) {
            return this._keyMap[keyId];
          }
        }, {
          key: "keys",
          value: function keys() {
            return this._keys;
          }
        }, {
          key: "toJSON",
          value: function toJSON() {
            return JSON.stringify(this._keys);
          }
        }]);

        return KeyStore;
      }();

      function createKey(key) {
        var path = null;
        var id = null;
        var src = null;
        var weight = 1;

        if (isString(key) || isArray(key)) {
          src = key;
          path = createKeyPath(key);
          id = createKeyId(key);
        } else {
          if (!hasOwn.call(key, 'name')) {
            throw new Error(MISSING_KEY_PROPERTY('name'));
          }

          var name = key.name;
          src = name;

          if (hasOwn.call(key, 'weight')) {
            weight = key.weight;

            if (weight <= 0) {
              throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
            }
          }

          path = createKeyPath(name);
          id = createKeyId(name);
        }

        return {
          path: path,
          id: id,
          weight: weight,
          src: src
        };
      }

      function createKeyPath(key) {
        return isArray(key) ? key : key.split('.');
      }

      function createKeyId(key) {
        return isArray(key) ? key.join('.') : key;
      }

      function get(obj, path) {
        var list = [];
        var arr = false;

        var deepGet = function deepGet(obj, path, index) {
          if (!path[index]) {
            // If there's no path left, we've arrived at the object we care about.
            list.push(obj);
          } else {
            var key = path[index];
            var value = obj[key];

            if (!isDefined(value)) {
              return;
            } // If we're at the last value in the path, and if it's a string/number/bool,
            // add it to the list


            if (index === path.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) {
              list.push(toString(value));
            } else if (isArray(value)) {
              arr = true; // Search each item in the array.

              for (var i = 0, len = value.length; i < len; i += 1) {
                deepGet(value[i], path, index + 1);
              }
            } else if (path.length) {
              // An object. Recurse further.
              deepGet(value, path, index + 1);
            }
          }
        }; // Backwards compatibility (since path used to be a string)


        deepGet(obj, isString(path) ? path.split('.') : path, 0);
        return arr ? list : list[0];
      }

      var MatchOptions = {
        // Whether the matches should be included in the result set. When `true`, each record in the result
        // set will include the indices of the matched characters.
        // These can consequently be used for highlighting purposes.
        includeMatches: false,
        // When `true`, the matching function will continue to the end of a search pattern even if
        // a perfect match has already been located in the string.
        findAllMatches: false,
        // Minimum number of characters that must be matched before a result is considered a match
        minMatchCharLength: 1
      };
      var BasicOptions = {
        // When `true`, the algorithm continues searching to the end of the input even if a perfect
        // match is found before the end of the same input.
        isCaseSensitive: false,
        // When true, the matching function will continue to the end of a search pattern even if
        includeScore: false,
        // List of properties that will be searched. This also supports nested properties.
        keys: [],
        // Whether to sort the result list, by score
        shouldSort: true,
        // Default sort function: sort by ascending score, ascending index
        sortFn: function sortFn(a, b) {
          return a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1;
        }
      };
      var FuzzyOptions = {
        // Approximately where in the text is the pattern expected to be found?
        location: 0,
        // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
        // (of both letters and location), a threshold of '1.0' would match anything.
        threshold: 0.6,
        // Determines how close the match must be to the fuzzy location (specified above).
        // An exact letter match which is 'distance' characters away from the fuzzy location
        // would score as a complete mismatch. A distance of '0' requires the match be at
        // the exact location specified, a threshold of '1000' would require a perfect match
        // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
        distance: 100
      };
      var AdvancedOptions = {
        // When `true`, it enables the use of unix-like search commands
        useExtendedSearch: false,
        // The get function to use when fetching an object's properties.
        // The default will search nested paths *ie foo.bar.baz*
        getFn: get,
        // When `true`, search will ignore `location` and `distance`, so it won't matter
        // where in the string the pattern appears.
        // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
        ignoreLocation: false,
        // When `true`, the calculation for the relevance score (used for sorting) will
        // ignore the field-length norm.
        // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
        ignoreFieldNorm: false
      };

      var Config = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, BasicOptions), MatchOptions), FuzzyOptions), AdvancedOptions);

      var SPACE = /[^ ]+/g; // Field-length norm: the shorter the field, the higher the weight.
      // Set to 3 decimals to reduce index size.

      function norm() {
        var mantissa = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
        var cache = new Map();
        return {
          get: function get(value) {
            var numTokens = value.match(SPACE).length;

            if (cache.has(numTokens)) {
              return cache.get(numTokens);
            }

            var n = parseFloat((1 / Math.sqrt(numTokens)).toFixed(mantissa));
            cache.set(numTokens, n);
            return n;
          },
          clear: function clear() {
            cache.clear();
          }
        };
      }

      var FuseIndex = /*#__PURE__*/function () {
        function FuseIndex() {
          var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              _ref$getFn = _ref.getFn,
              getFn = _ref$getFn === void 0 ? Config.getFn : _ref$getFn;

          _classCallCheck(this, FuseIndex);

          this.norm = norm(3);
          this.getFn = getFn;
          this.isCreated = false;
          this.setIndexRecords();
        }

        _createClass(FuseIndex, [{
          key: "setSources",
          value: function setSources() {
            var docs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            this.docs = docs;
          }
        }, {
          key: "setIndexRecords",
          value: function setIndexRecords() {
            var records = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            this.records = records;
          }
        }, {
          key: "setKeys",
          value: function setKeys() {
            var _this2 = this;

            var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            this.keys = keys;
            this._keysMap = {};
            keys.forEach(function (key, idx) {
              _this2._keysMap[key.id] = idx;
            });
          }
        }, {
          key: "create",
          value: function create() {
            var _this3 = this;

            if (this.isCreated || !this.docs.length) {
              return;
            }

            this.isCreated = true; // List is Array<String>

            if (isString(this.docs[0])) {
              this.docs.forEach(function (doc, docIndex) {
                _this3._addString(doc, docIndex);
              });
            } else {
              // List is Array<Object>
              this.docs.forEach(function (doc, docIndex) {
                _this3._addObject(doc, docIndex);
              });
            }

            this.norm.clear();
          } // Adds a doc to the end of the index

        }, {
          key: "add",
          value: function add(doc) {
            var idx = this.size();

            if (isString(doc)) {
              this._addString(doc, idx);
            } else {
              this._addObject(doc, idx);
            }
          } // Removes the doc at the specified index of the index

        }, {
          key: "removeAt",
          value: function removeAt(idx) {
            this.records.splice(idx, 1); // Change ref index of every subsquent doc

            for (var i = idx, len = this.size(); i < len; i += 1) {
              this.records[i].i -= 1;
            }
          }
        }, {
          key: "getValueForItemAtKeyId",
          value: function getValueForItemAtKeyId(item, keyId) {
            return item[this._keysMap[keyId]];
          }
        }, {
          key: "size",
          value: function size() {
            return this.records.length;
          }
        }, {
          key: "_addString",
          value: function _addString(doc, docIndex) {
            if (!isDefined(doc) || isBlank(doc)) {
              return;
            }

            var record = {
              v: doc,
              i: docIndex,
              n: this.norm.get(doc)
            };
            this.records.push(record);
          }
        }, {
          key: "_addObject",
          value: function _addObject(doc, docIndex) {
            var _this4 = this;

            var record = {
              i: docIndex,
              $: {}
            }; // Iterate over every key (i.e, path), and fetch the value at that key

            this.keys.forEach(function (key, keyIndex) {
              // console.log(key)
              var value = _this4.getFn(doc, key.path);

              if (!isDefined(value)) {
                return;
              }

              if (isArray(value)) {
                (function () {
                  var subRecords = [];
                  var stack = [{
                    nestedArrIndex: -1,
                    value: value
                  }];

                  while (stack.length) {
                    var _stack$pop = stack.pop(),
                        nestedArrIndex = _stack$pop.nestedArrIndex,
                        _value = _stack$pop.value;

                    if (!isDefined(_value)) {
                      continue;
                    }

                    if (isString(_value) && !isBlank(_value)) {
                      var subRecord = {
                        v: _value,
                        i: nestedArrIndex,
                        n: _this4.norm.get(_value)
                      };
                      subRecords.push(subRecord);
                    } else if (isArray(_value)) {
                      _value.forEach(function (item, k) {
                        stack.push({
                          nestedArrIndex: k,
                          value: item
                        });
                      });
                    }
                  }

                  record.$[keyIndex] = subRecords;
                })();
              } else if (!isBlank(value)) {
                var subRecord = {
                  v: value,
                  n: _this4.norm.get(value)
                };
                record.$[keyIndex] = subRecord;
              }
            });
            this.records.push(record);
          }
        }, {
          key: "toJSON",
          value: function toJSON() {
            return {
              keys: this.keys,
              records: this.records
            };
          }
        }]);

        return FuseIndex;
      }();

      function createIndex(keys, docs) {
        var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
            _ref2$getFn = _ref2.getFn,
            getFn = _ref2$getFn === void 0 ? Config.getFn : _ref2$getFn;

        var myIndex = new FuseIndex({
          getFn: getFn
        });
        myIndex.setKeys(keys.map(createKey));
        myIndex.setSources(docs);
        myIndex.create();
        return myIndex;
      }

      function parseIndex(data) {
        var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref3$getFn = _ref3.getFn,
            getFn = _ref3$getFn === void 0 ? Config.getFn : _ref3$getFn;

        var keys = data.keys,
            records = data.records;
        var myIndex = new FuseIndex({
          getFn: getFn
        });
        myIndex.setKeys(keys);
        myIndex.setIndexRecords(records);
        return myIndex;
      }

      function transformMatches(result, data) {
        var matches = result.matches;
        data.matches = [];

        if (!isDefined(matches)) {
          return;
        }

        matches.forEach(function (match) {
          if (!isDefined(match.indices) || !match.indices.length) {
            return;
          }

          var indices = match.indices,
              value = match.value;
          var obj = {
            indices: indices,
            value: value
          };

          if (match.key) {
            obj.key = match.key.src;
          }

          if (match.idx > -1) {
            obj.refIndex = match.idx;
          }

          data.matches.push(obj);
        });
      }

      function transformScore(result, data) {
        data.score = result.score;
      }

      function computeScore(pattern) {
        var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref4$errors = _ref4.errors,
            errors = _ref4$errors === void 0 ? 0 : _ref4$errors,
            _ref4$currentLocation = _ref4.currentLocation,
            currentLocation = _ref4$currentLocation === void 0 ? 0 : _ref4$currentLocation,
            _ref4$expectedLocatio = _ref4.expectedLocation,
            expectedLocation = _ref4$expectedLocatio === void 0 ? 0 : _ref4$expectedLocatio,
            _ref4$distance = _ref4.distance,
            distance = _ref4$distance === void 0 ? Config.distance : _ref4$distance,
            _ref4$ignoreLocation = _ref4.ignoreLocation,
            ignoreLocation = _ref4$ignoreLocation === void 0 ? Config.ignoreLocation : _ref4$ignoreLocation;

        var accuracy = errors / pattern.length;

        if (ignoreLocation) {
          return accuracy;
        }

        var proximity = Math.abs(expectedLocation - currentLocation);

        if (!distance) {
          // Dodge divide by zero error.
          return proximity ? 1.0 : accuracy;
        }

        return accuracy + proximity / distance;
      }

      function convertMaskToIndices() {
        var matchmask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var minMatchCharLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Config.minMatchCharLength;
        var indices = [];
        var start = -1;
        var end = -1;
        var i = 0;

        for (var len = matchmask.length; i < len; i += 1) {
          var match = matchmask[i];

          if (match && start === -1) {
            start = i;
          } else if (!match && start !== -1) {
            end = i - 1;

            if (end - start + 1 >= minMatchCharLength) {
              indices.push([start, end]);
            }

            start = -1;
          }
        } // (i-1 - start) + 1 => i - start


        if (matchmask[i - 1] && i - start >= minMatchCharLength) {
          indices.push([start, i - 1]);
        }

        return indices;
      } // Machine word size


      var MAX_BITS = 32;

      function search(text, pattern, patternAlphabet) {
        var _ref5 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
            _ref5$location = _ref5.location,
            location = _ref5$location === void 0 ? Config.location : _ref5$location,
            _ref5$distance = _ref5.distance,
            distance = _ref5$distance === void 0 ? Config.distance : _ref5$distance,
            _ref5$threshold = _ref5.threshold,
            threshold = _ref5$threshold === void 0 ? Config.threshold : _ref5$threshold,
            _ref5$findAllMatches = _ref5.findAllMatches,
            findAllMatches = _ref5$findAllMatches === void 0 ? Config.findAllMatches : _ref5$findAllMatches,
            _ref5$minMatchCharLen = _ref5.minMatchCharLength,
            minMatchCharLength = _ref5$minMatchCharLen === void 0 ? Config.minMatchCharLength : _ref5$minMatchCharLen,
            _ref5$includeMatches = _ref5.includeMatches,
            includeMatches = _ref5$includeMatches === void 0 ? Config.includeMatches : _ref5$includeMatches,
            _ref5$ignoreLocation = _ref5.ignoreLocation,
            ignoreLocation = _ref5$ignoreLocation === void 0 ? Config.ignoreLocation : _ref5$ignoreLocation;

        if (pattern.length > MAX_BITS) {
          throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
        }

        var patternLen = pattern.length; // Set starting location at beginning text and initialize the alphabet.

        var textLen = text.length; // Handle the case when location > text.length

        var expectedLocation = Math.max(0, Math.min(location, textLen)); // Highest score beyond which we give up.

        var currentThreshold = threshold; // Is there a nearby exact match? (speedup)

        var bestLocation = expectedLocation; // Performance: only computer matches when the minMatchCharLength > 1
        // OR if `includeMatches` is true.

        var computeMatches = minMatchCharLength > 1 || includeMatches; // A mask of the matches, used for building the indices

        var matchMask = computeMatches ? Array(textLen) : [];
        var index; // Get all exact matches, here for speed up

        while ((index = text.indexOf(pattern, bestLocation)) > -1) {
          var score = computeScore(pattern, {
            currentLocation: index,
            expectedLocation: expectedLocation,
            distance: distance,
            ignoreLocation: ignoreLocation
          });
          currentThreshold = Math.min(score, currentThreshold);
          bestLocation = index + patternLen;

          if (computeMatches) {
            var i = 0;

            while (i < patternLen) {
              matchMask[index + i] = 1;
              i += 1;
            }
          }
        } // Reset the best location


        bestLocation = -1;
        var lastBitArr = [];
        var finalScore = 1;
        var binMax = patternLen + textLen;
        var mask = 1 << patternLen - 1;

        for (var _i = 0; _i < patternLen; _i += 1) {
          // Scan for the best match; each iteration allows for one more error.
          // Run a binary search to determine how far from the match location we can stray
          // at this error level.
          var binMin = 0;
          var binMid = binMax;

          while (binMin < binMid) {
            var _score2 = computeScore(pattern, {
              errors: _i,
              currentLocation: expectedLocation + binMid,
              expectedLocation: expectedLocation,
              distance: distance,
              ignoreLocation: ignoreLocation
            });

            if (_score2 <= currentThreshold) {
              binMin = binMid;
            } else {
              binMax = binMid;
            }

            binMid = Math.floor((binMax - binMin) / 2 + binMin);
          } // Use the result from this iteration as the maximum for the next.


          binMax = binMid;
          var start = Math.max(1, expectedLocation - binMid + 1);
          var finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen; // Initialize the bit array

          var bitArr = Array(finish + 2);
          bitArr[finish + 1] = (1 << _i) - 1;

          for (var j = finish; j >= start; j -= 1) {
            var currentLocation = j - 1;
            var charMatch = patternAlphabet[text.charAt(currentLocation)];

            if (computeMatches) {
              // Speed up: quick bool to int conversion (i.e, `charMatch ? 1 : 0`)
              matchMask[currentLocation] = +!!charMatch;
            } // First pass: exact match


            bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch; // Subsequent passes: fuzzy match

            if (_i) {
              bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
            }

            if (bitArr[j] & mask) {
              finalScore = computeScore(pattern, {
                errors: _i,
                currentLocation: currentLocation,
                expectedLocation: expectedLocation,
                distance: distance,
                ignoreLocation: ignoreLocation
              }); // This match will almost certainly be better than any existing match.
              // But check anyway.

              if (finalScore <= currentThreshold) {
                // Indeed it is
                currentThreshold = finalScore;
                bestLocation = currentLocation; // Already passed `loc`, downhill from here on in.

                if (bestLocation <= expectedLocation) {
                  break;
                } // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.


                start = Math.max(1, 2 * expectedLocation - bestLocation);
              }
            }
          } // No hope for a (better) match at greater error levels.


          var _score = computeScore(pattern, {
            errors: _i + 1,
            currentLocation: expectedLocation,
            expectedLocation: expectedLocation,
            distance: distance,
            ignoreLocation: ignoreLocation
          });

          if (_score > currentThreshold) {
            break;
          }

          lastBitArr = bitArr;
        }

        var result = {
          isMatch: bestLocation >= 0,
          // Count exact matches (those with a score of 0) to be "almost" exact
          score: Math.max(0.001, finalScore)
        };

        if (computeMatches) {
          var indices = convertMaskToIndices(matchMask, minMatchCharLength);

          if (!indices.length) {
            result.isMatch = false;
          } else if (includeMatches) {
            result.indices = indices;
          }
        }

        return result;
      }

      function createPatternAlphabet(pattern) {
        var mask = {};

        for (var i = 0, len = pattern.length; i < len; i += 1) {
          var _char = pattern.charAt(i);

          mask[_char] = (mask[_char] || 0) | 1 << len - i - 1;
        }

        return mask;
      }

      var BitapSearch = /*#__PURE__*/function () {
        function BitapSearch(pattern) {
          var _this5 = this;

          var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
              _ref6$location = _ref6.location,
              location = _ref6$location === void 0 ? Config.location : _ref6$location,
              _ref6$threshold = _ref6.threshold,
              threshold = _ref6$threshold === void 0 ? Config.threshold : _ref6$threshold,
              _ref6$distance = _ref6.distance,
              distance = _ref6$distance === void 0 ? Config.distance : _ref6$distance,
              _ref6$includeMatches = _ref6.includeMatches,
              includeMatches = _ref6$includeMatches === void 0 ? Config.includeMatches : _ref6$includeMatches,
              _ref6$findAllMatches = _ref6.findAllMatches,
              findAllMatches = _ref6$findAllMatches === void 0 ? Config.findAllMatches : _ref6$findAllMatches,
              _ref6$minMatchCharLen = _ref6.minMatchCharLength,
              minMatchCharLength = _ref6$minMatchCharLen === void 0 ? Config.minMatchCharLength : _ref6$minMatchCharLen,
              _ref6$isCaseSensitive = _ref6.isCaseSensitive,
              isCaseSensitive = _ref6$isCaseSensitive === void 0 ? Config.isCaseSensitive : _ref6$isCaseSensitive,
              _ref6$ignoreLocation = _ref6.ignoreLocation,
              ignoreLocation = _ref6$ignoreLocation === void 0 ? Config.ignoreLocation : _ref6$ignoreLocation;

          _classCallCheck(this, BitapSearch);

          this.options = {
            location: location,
            threshold: threshold,
            distance: distance,
            includeMatches: includeMatches,
            findAllMatches: findAllMatches,
            minMatchCharLength: minMatchCharLength,
            isCaseSensitive: isCaseSensitive,
            ignoreLocation: ignoreLocation
          };
          this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
          this.chunks = [];

          if (!this.pattern.length) {
            return;
          }

          var addChunk = function addChunk(pattern, startIndex) {
            _this5.chunks.push({
              pattern: pattern,
              alphabet: createPatternAlphabet(pattern),
              startIndex: startIndex
            });
          };

          var len = this.pattern.length;

          if (len > MAX_BITS) {
            var i = 0;
            var remainder = len % MAX_BITS;
            var end = len - remainder;

            while (i < end) {
              addChunk(this.pattern.substr(i, MAX_BITS), i);
              i += MAX_BITS;
            }

            if (remainder) {
              var startIndex = len - MAX_BITS;
              addChunk(this.pattern.substr(startIndex), startIndex);
            }
          } else {
            addChunk(this.pattern, 0);
          }
        }

        _createClass(BitapSearch, [{
          key: "searchIn",
          value: function searchIn(text) {
            var _this$options = this.options,
                isCaseSensitive = _this$options.isCaseSensitive,
                includeMatches = _this$options.includeMatches;

            if (!isCaseSensitive) {
              text = text.toLowerCase();
            } // Exact match


            if (this.pattern === text) {
              var _result = {
                isMatch: true,
                score: 0
              };

              if (includeMatches) {
                _result.indices = [[0, text.length - 1]];
              }

              return _result;
            } // Otherwise, use Bitap algorithm


            var _this$options2 = this.options,
                location = _this$options2.location,
                distance = _this$options2.distance,
                threshold = _this$options2.threshold,
                findAllMatches = _this$options2.findAllMatches,
                minMatchCharLength = _this$options2.minMatchCharLength,
                ignoreLocation = _this$options2.ignoreLocation;
            var allIndices = [];
            var totalScore = 0;
            var hasMatches = false;
            this.chunks.forEach(function (_ref7) {
              var pattern = _ref7.pattern,
                  alphabet = _ref7.alphabet,
                  startIndex = _ref7.startIndex;

              var _search = search(text, pattern, alphabet, {
                location: location + startIndex,
                distance: distance,
                threshold: threshold,
                findAllMatches: findAllMatches,
                minMatchCharLength: minMatchCharLength,
                includeMatches: includeMatches,
                ignoreLocation: ignoreLocation
              }),
                  isMatch = _search.isMatch,
                  score = _search.score,
                  indices = _search.indices;

              if (isMatch) {
                hasMatches = true;
              }

              totalScore += score;

              if (isMatch && indices) {
                allIndices = [].concat(_toConsumableArray(allIndices), _toConsumableArray(indices));
              }
            });
            var result = {
              isMatch: hasMatches,
              score: hasMatches ? totalScore / this.chunks.length : 1
            };

            if (hasMatches && includeMatches) {
              result.indices = allIndices;
            }

            return result;
          }
        }]);

        return BitapSearch;
      }();

      var BaseMatch = /*#__PURE__*/function () {
        function BaseMatch(pattern) {
          _classCallCheck(this, BaseMatch);

          this.pattern = pattern;
        }

        _createClass(BaseMatch, [{
          key: "search",
          value: function search()
          /*text*/
          {}
        }], [{
          key: "isMultiMatch",
          value: function isMultiMatch(pattern) {
            return getMatch(pattern, this.multiRegex);
          }
        }, {
          key: "isSingleMatch",
          value: function isSingleMatch(pattern) {
            return getMatch(pattern, this.singleRegex);
          }
        }]);

        return BaseMatch;
      }();

      function getMatch(pattern, exp) {
        var matches = pattern.match(exp);
        return matches ? matches[1] : null;
      } // Token: 'file


      var ExactMatch = /*#__PURE__*/function (_BaseMatch) {
        _inherits(ExactMatch, _BaseMatch);

        var _super = _createSuper(ExactMatch);

        function ExactMatch(pattern) {
          _classCallCheck(this, ExactMatch);

          return _super.call(this, pattern);
        }

        _createClass(ExactMatch, [{
          key: "search",
          value: function search(text) {
            var isMatch = text === this.pattern;
            return {
              isMatch: isMatch,
              score: isMatch ? 0 : 1,
              indices: [0, this.pattern.length - 1]
            };
          }
        }], [{
          key: "type",
          get: function get() {
            return 'exact';
          }
        }, {
          key: "multiRegex",
          get: function get() {
            return /^="(.*)"$/;
          }
        }, {
          key: "singleRegex",
          get: function get() {
            return /^=(.*)$/;
          }
        }]);

        return ExactMatch;
      }(BaseMatch); // Token: !fire


      var InverseExactMatch = /*#__PURE__*/function (_BaseMatch2) {
        _inherits(InverseExactMatch, _BaseMatch2);

        var _super2 = _createSuper(InverseExactMatch);

        function InverseExactMatch(pattern) {
          _classCallCheck(this, InverseExactMatch);

          return _super2.call(this, pattern);
        }

        _createClass(InverseExactMatch, [{
          key: "search",
          value: function search(text) {
            var index = text.indexOf(this.pattern);
            var isMatch = index === -1;
            return {
              isMatch: isMatch,
              score: isMatch ? 0 : 1,
              indices: [0, text.length - 1]
            };
          }
        }], [{
          key: "type",
          get: function get() {
            return 'inverse-exact';
          }
        }, {
          key: "multiRegex",
          get: function get() {
            return /^!"(.*)"$/;
          }
        }, {
          key: "singleRegex",
          get: function get() {
            return /^!(.*)$/;
          }
        }]);

        return InverseExactMatch;
      }(BaseMatch); // Token: ^file


      var PrefixExactMatch = /*#__PURE__*/function (_BaseMatch3) {
        _inherits(PrefixExactMatch, _BaseMatch3);

        var _super3 = _createSuper(PrefixExactMatch);

        function PrefixExactMatch(pattern) {
          _classCallCheck(this, PrefixExactMatch);

          return _super3.call(this, pattern);
        }

        _createClass(PrefixExactMatch, [{
          key: "search",
          value: function search(text) {
            var isMatch = text.startsWith(this.pattern);
            return {
              isMatch: isMatch,
              score: isMatch ? 0 : 1,
              indices: [0, this.pattern.length - 1]
            };
          }
        }], [{
          key: "type",
          get: function get() {
            return 'prefix-exact';
          }
        }, {
          key: "multiRegex",
          get: function get() {
            return /^\^"(.*)"$/;
          }
        }, {
          key: "singleRegex",
          get: function get() {
            return /^\^(.*)$/;
          }
        }]);

        return PrefixExactMatch;
      }(BaseMatch); // Token: !^fire


      var InversePrefixExactMatch = /*#__PURE__*/function (_BaseMatch4) {
        _inherits(InversePrefixExactMatch, _BaseMatch4);

        var _super4 = _createSuper(InversePrefixExactMatch);

        function InversePrefixExactMatch(pattern) {
          _classCallCheck(this, InversePrefixExactMatch);

          return _super4.call(this, pattern);
        }

        _createClass(InversePrefixExactMatch, [{
          key: "search",
          value: function search(text) {
            var isMatch = !text.startsWith(this.pattern);
            return {
              isMatch: isMatch,
              score: isMatch ? 0 : 1,
              indices: [0, text.length - 1]
            };
          }
        }], [{
          key: "type",
          get: function get() {
            return 'inverse-prefix-exact';
          }
        }, {
          key: "multiRegex",
          get: function get() {
            return /^!\^"(.*)"$/;
          }
        }, {
          key: "singleRegex",
          get: function get() {
            return /^!\^(.*)$/;
          }
        }]);

        return InversePrefixExactMatch;
      }(BaseMatch); // Token: .file$


      var SuffixExactMatch = /*#__PURE__*/function (_BaseMatch5) {
        _inherits(SuffixExactMatch, _BaseMatch5);

        var _super5 = _createSuper(SuffixExactMatch);

        function SuffixExactMatch(pattern) {
          _classCallCheck(this, SuffixExactMatch);

          return _super5.call(this, pattern);
        }

        _createClass(SuffixExactMatch, [{
          key: "search",
          value: function search(text) {
            var isMatch = text.endsWith(this.pattern);
            return {
              isMatch: isMatch,
              score: isMatch ? 0 : 1,
              indices: [text.length - this.pattern.length, text.length - 1]
            };
          }
        }], [{
          key: "type",
          get: function get() {
            return 'suffix-exact';
          }
        }, {
          key: "multiRegex",
          get: function get() {
            return /^"(.*)"\$$/;
          }
        }, {
          key: "singleRegex",
          get: function get() {
            return /^(.*)\$$/;
          }
        }]);

        return SuffixExactMatch;
      }(BaseMatch); // Token: !.file$


      var InverseSuffixExactMatch = /*#__PURE__*/function (_BaseMatch6) {
        _inherits(InverseSuffixExactMatch, _BaseMatch6);

        var _super6 = _createSuper(InverseSuffixExactMatch);

        function InverseSuffixExactMatch(pattern) {
          _classCallCheck(this, InverseSuffixExactMatch);

          return _super6.call(this, pattern);
        }

        _createClass(InverseSuffixExactMatch, [{
          key: "search",
          value: function search(text) {
            var isMatch = !text.endsWith(this.pattern);
            return {
              isMatch: isMatch,
              score: isMatch ? 0 : 1,
              indices: [0, text.length - 1]
            };
          }
        }], [{
          key: "type",
          get: function get() {
            return 'inverse-suffix-exact';
          }
        }, {
          key: "multiRegex",
          get: function get() {
            return /^!"(.*)"\$$/;
          }
        }, {
          key: "singleRegex",
          get: function get() {
            return /^!(.*)\$$/;
          }
        }]);

        return InverseSuffixExactMatch;
      }(BaseMatch);

      var FuzzyMatch = /*#__PURE__*/function (_BaseMatch7) {
        _inherits(FuzzyMatch, _BaseMatch7);

        var _super7 = _createSuper(FuzzyMatch);

        function FuzzyMatch(pattern) {
          var _this6;

          var _ref8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
              _ref8$location = _ref8.location,
              location = _ref8$location === void 0 ? Config.location : _ref8$location,
              _ref8$threshold = _ref8.threshold,
              threshold = _ref8$threshold === void 0 ? Config.threshold : _ref8$threshold,
              _ref8$distance = _ref8.distance,
              distance = _ref8$distance === void 0 ? Config.distance : _ref8$distance,
              _ref8$includeMatches = _ref8.includeMatches,
              includeMatches = _ref8$includeMatches === void 0 ? Config.includeMatches : _ref8$includeMatches,
              _ref8$findAllMatches = _ref8.findAllMatches,
              findAllMatches = _ref8$findAllMatches === void 0 ? Config.findAllMatches : _ref8$findAllMatches,
              _ref8$minMatchCharLen = _ref8.minMatchCharLength,
              minMatchCharLength = _ref8$minMatchCharLen === void 0 ? Config.minMatchCharLength : _ref8$minMatchCharLen,
              _ref8$isCaseSensitive = _ref8.isCaseSensitive,
              isCaseSensitive = _ref8$isCaseSensitive === void 0 ? Config.isCaseSensitive : _ref8$isCaseSensitive;

          _classCallCheck(this, FuzzyMatch);

          _this6 = _super7.call(this, pattern);
          _this6._bitapSearch = new BitapSearch(pattern, {
            location: location,
            threshold: threshold,
            distance: distance,
            includeMatches: includeMatches,
            findAllMatches: findAllMatches,
            minMatchCharLength: minMatchCharLength,
            isCaseSensitive: isCaseSensitive
          });
          return _this6;
        }

        _createClass(FuzzyMatch, [{
          key: "search",
          value: function search(text) {
            return this._bitapSearch.searchIn(text);
          }
        }], [{
          key: "type",
          get: function get() {
            return 'fuzzy';
          }
        }, {
          key: "multiRegex",
          get: function get() {
            return /^"(.*)"$/;
          }
        }, {
          key: "singleRegex",
          get: function get() {
            return /^(.*)$/;
          }
        }]);

        return FuzzyMatch;
      }(BaseMatch); // Token: 'file


      var IncludeMatch = /*#__PURE__*/function (_BaseMatch8) {
        _inherits(IncludeMatch, _BaseMatch8);

        var _super8 = _createSuper(IncludeMatch);

        function IncludeMatch(pattern) {
          _classCallCheck(this, IncludeMatch);

          return _super8.call(this, pattern);
        }

        _createClass(IncludeMatch, [{
          key: "search",
          value: function search(text) {
            var location = 0;
            var index;
            var indices = [];
            var patternLen = this.pattern.length; // Get all exact matches

            while ((index = text.indexOf(this.pattern, location)) > -1) {
              location = index + patternLen;
              indices.push([index, location - 1]);
            }

            var isMatch = !!indices.length;
            return {
              isMatch: isMatch,
              score: isMatch ? 1 : 0,
              indices: indices
            };
          }
        }], [{
          key: "type",
          get: function get() {
            return 'include';
          }
        }, {
          key: "multiRegex",
          get: function get() {
            return /^'"(.*)"$/;
          }
        }, {
          key: "singleRegex",
          get: function get() {
            return /^'(.*)$/;
          }
        }]);

        return IncludeMatch;
      }(BaseMatch); // ❗Order is important. DO NOT CHANGE.


      var searchers = [ExactMatch, IncludeMatch, PrefixExactMatch, InversePrefixExactMatch, InverseSuffixExactMatch, SuffixExactMatch, InverseExactMatch, FuzzyMatch];
      var searchersLen = searchers.length; // Regex to split by spaces, but keep anything in quotes together

      var SPACE_RE = / +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/;
      var OR_TOKEN = '|'; // Return a 2D array representation of the query, for simpler parsing.
      // Example:
      // "^core go$ | rb$ | py$ xy$" => [["^core", "go$"], ["rb$"], ["py$", "xy$"]]

      function parseQuery(pattern) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return pattern.split(OR_TOKEN).map(function (item) {
          var query = item.trim().split(SPACE_RE).filter(function (item) {
            return item && !!item.trim();
          });
          var results = [];

          for (var i = 0, len = query.length; i < len; i += 1) {
            var queryItem = query[i]; // 1. Handle multiple query match (i.e, once that are quoted, like `"hello world"`)

            var found = false;
            var idx = -1;

            while (!found && ++idx < searchersLen) {
              var searcher = searchers[idx];
              var token = searcher.isMultiMatch(queryItem);

              if (token) {
                results.push(new searcher(token, options));
                found = true;
              }
            }

            if (found) {
              continue;
            } // 2. Handle single query matches (i.e, once that are *not* quoted)


            idx = -1;

            while (++idx < searchersLen) {
              var _searcher = searchers[idx];

              var _token = _searcher.isSingleMatch(queryItem);

              if (_token) {
                results.push(new _searcher(_token, options));
                break;
              }
            }
          }

          return results;
        });
      } // These extended matchers can return an array of matches, as opposed
      // to a singl match


      var MultiMatchSet = new Set([FuzzyMatch.type, IncludeMatch.type]);
      /**
       * Command-like searching
       * ======================
       *
       * Given multiple search terms delimited by spaces.e.g. `^jscript .python$ ruby !java`,
       * search in a given text.
       *
       * Search syntax:
       *
       * | Token       | Match type                 | Description                            |
       * | ----------- | -------------------------- | -------------------------------------- |
       * | `jscript`   | fuzzy-match                | Items that fuzzy match `jscript`       |
       * | `=scheme`   | exact-match                | Items that are `scheme`                |
       * | `'python`   | include-match              | Items that include `python`            |
       * | `!ruby`     | inverse-exact-match        | Items that do not include `ruby`       |
       * | `^java`     | prefix-exact-match         | Items that start with `java`           |
       * | `!^earlang` | inverse-prefix-exact-match | Items that do not start with `earlang` |
       * | `.js$`      | suffix-exact-match         | Items that end with `.js`              |
       * | `!.go$`     | inverse-suffix-exact-match | Items that do not end with `.go`       |
       *
       * A single pipe character acts as an OR operator. For example, the following
       * query matches entries that start with `core` and end with either`go`, `rb`,
       * or`py`.
       *
       * ```
       * ^core go$ | rb$ | py$
       * ```
       */

      var ExtendedSearch = /*#__PURE__*/function () {
        function ExtendedSearch(pattern) {
          var _ref9 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
              _ref9$isCaseSensitive = _ref9.isCaseSensitive,
              isCaseSensitive = _ref9$isCaseSensitive === void 0 ? Config.isCaseSensitive : _ref9$isCaseSensitive,
              _ref9$includeMatches = _ref9.includeMatches,
              includeMatches = _ref9$includeMatches === void 0 ? Config.includeMatches : _ref9$includeMatches,
              _ref9$minMatchCharLen = _ref9.minMatchCharLength,
              minMatchCharLength = _ref9$minMatchCharLen === void 0 ? Config.minMatchCharLength : _ref9$minMatchCharLen,
              _ref9$findAllMatches = _ref9.findAllMatches,
              findAllMatches = _ref9$findAllMatches === void 0 ? Config.findAllMatches : _ref9$findAllMatches,
              _ref9$location = _ref9.location,
              location = _ref9$location === void 0 ? Config.location : _ref9$location,
              _ref9$threshold = _ref9.threshold,
              threshold = _ref9$threshold === void 0 ? Config.threshold : _ref9$threshold,
              _ref9$distance = _ref9.distance,
              distance = _ref9$distance === void 0 ? Config.distance : _ref9$distance;

          _classCallCheck(this, ExtendedSearch);

          this.query = null;
          this.options = {
            isCaseSensitive: isCaseSensitive,
            includeMatches: includeMatches,
            minMatchCharLength: minMatchCharLength,
            findAllMatches: findAllMatches,
            location: location,
            threshold: threshold,
            distance: distance
          };
          this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
          this.query = parseQuery(this.pattern, this.options);
        }

        _createClass(ExtendedSearch, [{
          key: "searchIn",
          value: function searchIn(text) {
            var query = this.query;

            if (!query) {
              return {
                isMatch: false,
                score: 1
              };
            }

            var _this$options3 = this.options,
                includeMatches = _this$options3.includeMatches,
                isCaseSensitive = _this$options3.isCaseSensitive;
            text = isCaseSensitive ? text : text.toLowerCase();
            var numMatches = 0;
            var allIndices = [];
            var totalScore = 0; // ORs

            for (var i = 0, qLen = query.length; i < qLen; i += 1) {
              var _searchers = query[i]; // Reset indices

              allIndices.length = 0;
              numMatches = 0; // ANDs

              for (var j = 0, pLen = _searchers.length; j < pLen; j += 1) {
                var searcher = _searchers[j];

                var _searcher$search = searcher.search(text),
                    isMatch = _searcher$search.isMatch,
                    indices = _searcher$search.indices,
                    score = _searcher$search.score;

                if (isMatch) {
                  numMatches += 1;
                  totalScore += score;

                  if (includeMatches) {
                    var type = searcher.constructor.type;

                    if (MultiMatchSet.has(type)) {
                      allIndices = [].concat(_toConsumableArray(allIndices), _toConsumableArray(indices));
                    } else {
                      allIndices.push(indices);
                    }
                  }
                } else {
                  totalScore = 0;
                  numMatches = 0;
                  allIndices.length = 0;
                  break;
                }
              } // OR condition, so if TRUE, return


              if (numMatches) {
                var result = {
                  isMatch: true,
                  score: totalScore / numMatches
                };

                if (includeMatches) {
                  result.indices = allIndices;
                }

                return result;
              }
            } // Nothing was matched


            return {
              isMatch: false,
              score: 1
            };
          }
        }], [{
          key: "condition",
          value: function condition(_, options) {
            return options.useExtendedSearch;
          }
        }]);

        return ExtendedSearch;
      }();

      var registeredSearchers = [];

      function register() {
        registeredSearchers.push.apply(registeredSearchers, arguments);
      }

      function createSearcher(pattern, options) {
        for (var i = 0, len = registeredSearchers.length; i < len; i += 1) {
          var searcherClass = registeredSearchers[i];

          if (searcherClass.condition(pattern, options)) {
            return new searcherClass(pattern, options);
          }
        }

        return new BitapSearch(pattern, options);
      }

      var LogicalOperator = {
        AND: '$and',
        OR: '$or'
      };
      var KeyType = {
        PATH: '$path',
        PATTERN: '$val'
      };

      var isExpression = function isExpression(query) {
        return !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
      };

      var isPath = function isPath(query) {
        return !!query[KeyType.PATH];
      };

      var isLeaf = function isLeaf(query) {
        return !isArray(query) && isObject(query) && !isExpression(query);
      };

      var convertToExplicit = function convertToExplicit(query) {
        return _defineProperty({}, LogicalOperator.AND, Object.keys(query).map(function (key) {
          return _defineProperty({}, key, query[key]);
        }));
      }; // When `auto` is `true`, the parse function will infer and initialize and add
      // the appropriate `Searcher` instance


      function parse(query, options) {
        var _ref12 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
            _ref12$auto = _ref12.auto,
            auto = _ref12$auto === void 0 ? true : _ref12$auto;

        var next = function next(query) {
          var keys = Object.keys(query);
          var isQueryPath = isPath(query);

          if (!isQueryPath && keys.length > 1 && !isExpression(query)) {
            return next(convertToExplicit(query));
          }

          if (isLeaf(query)) {
            var key = isQueryPath ? query[KeyType.PATH] : keys[0];
            var pattern = isQueryPath ? query[KeyType.PATTERN] : query[key];

            if (!isString(pattern)) {
              throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
            }

            var obj = {
              keyId: createKeyId(key),
              pattern: pattern
            };

            if (auto) {
              obj.searcher = createSearcher(pattern, options);
            }

            return obj;
          }

          var node = {
            children: [],
            operator: keys[0]
          };
          keys.forEach(function (key) {
            var value = query[key];

            if (isArray(value)) {
              value.forEach(function (item) {
                node.children.push(next(item));
              });
            }
          });
          return node;
        };

        if (!isExpression(query)) {
          query = convertToExplicit(query);
        }

        return next(query);
      }

      var Fuse = /*#__PURE__*/function () {
        function Fuse(docs) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var index = arguments.length > 2 ? arguments[2] : undefined;

          _classCallCheck(this, Fuse);

          this.options = _objectSpread(_objectSpread({}, Config), options);

          if (this.options.useExtendedSearch && !true) {
            throw new Error(EXTENDED_SEARCH_UNAVAILABLE);
          }

          this._keyStore = new KeyStore(this.options.keys);
          this.setCollection(docs, index);
        }

        _createClass(Fuse, [{
          key: "setCollection",
          value: function setCollection(docs, index) {
            this._docs = docs;

            if (index && !(index instanceof FuseIndex)) {
              throw new Error(INCORRECT_INDEX_TYPE);
            }

            this._myIndex = index || createIndex(this.options.keys, this._docs, {
              getFn: this.options.getFn
            });
          }
        }, {
          key: "add",
          value: function add(doc) {
            if (!isDefined(doc)) {
              return;
            }

            this._docs.push(doc);

            this._myIndex.add(doc);
          }
        }, {
          key: "remove",
          value: function remove() {
            var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
              return (
                /* doc, idx */
                false
              );
            };
            var results = [];

            for (var i = 0, len = this._docs.length; i < len; i += 1) {
              var doc = this._docs[i];

              if (predicate(doc, i)) {
                this.removeAt(i);
                i -= 1;
                results.push(doc);
              }
            }

            return results;
          }
        }, {
          key: "removeAt",
          value: function removeAt(idx) {
            this._docs.splice(idx, 1);

            this._myIndex.removeAt(idx);
          }
        }, {
          key: "getIndex",
          value: function getIndex() {
            return this._myIndex;
          }
        }, {
          key: "search",
          value: function search(query) {
            var _ref13 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                _ref13$limit = _ref13.limit,
                limit = _ref13$limit === void 0 ? -1 : _ref13$limit;

            var _this$options4 = this.options,
                includeMatches = _this$options4.includeMatches,
                includeScore = _this$options4.includeScore,
                shouldSort = _this$options4.shouldSort,
                sortFn = _this$options4.sortFn,
                ignoreFieldNorm = _this$options4.ignoreFieldNorm;
            var results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
            computeScore$1(results, {
              ignoreFieldNorm: ignoreFieldNorm
            });

            if (shouldSort) {
              results.sort(sortFn);
            }

            if (isNumber(limit) && limit > -1) {
              results = results.slice(0, limit);
            }

            return format(results, this._docs, {
              includeMatches: includeMatches,
              includeScore: includeScore
            });
          }
        }, {
          key: "_searchStringList",
          value: function _searchStringList(query) {
            var searcher = createSearcher(query, this.options);
            var records = this._myIndex.records;
            var results = []; // Iterate over every string in the index

            records.forEach(function (_ref14) {
              var text = _ref14.v,
                  idx = _ref14.i,
                  norm = _ref14.n;

              if (!isDefined(text)) {
                return;
              }

              var _searcher$searchIn = searcher.searchIn(text),
                  isMatch = _searcher$searchIn.isMatch,
                  score = _searcher$searchIn.score,
                  indices = _searcher$searchIn.indices;

              if (isMatch) {
                results.push({
                  item: text,
                  idx: idx,
                  matches: [{
                    score: score,
                    value: text,
                    norm: norm,
                    indices: indices
                  }]
                });
              }
            });
            return results;
          }
        }, {
          key: "_searchLogical",
          value: function _searchLogical(query) {
            var _this7 = this;

            var expression = parse(query, this.options);

            var evaluate = function evaluate(node, item, idx) {
              if (!node.children) {
                var keyId = node.keyId,
                    searcher = node.searcher;

                var matches = _this7._findMatches({
                  key: _this7._keyStore.get(keyId),
                  value: _this7._myIndex.getValueForItemAtKeyId(item, keyId),
                  searcher: searcher
                });

                if (matches && matches.length) {
                  return [{
                    idx: idx,
                    item: item,
                    matches: matches
                  }];
                }

                return [];
              }
              /*eslint indent: [2, 2, {"SwitchCase": 1}]*/


              switch (node.operator) {
                case LogicalOperator.AND:
                  {
                    var res = [];

                    for (var i = 0, len = node.children.length; i < len; i += 1) {
                      var child = node.children[i];
                      var result = evaluate(child, item, idx);

                      if (result.length) {
                        res.push.apply(res, _toConsumableArray(result));
                      } else {
                        return [];
                      }
                    }

                    return res;
                  }

                case LogicalOperator.OR:
                  {
                    var _res = [];

                    for (var _i2 = 0, _len = node.children.length; _i2 < _len; _i2 += 1) {
                      var _child = node.children[_i2];

                      var _result2 = evaluate(_child, item, idx);

                      if (_result2.length) {
                        _res.push.apply(_res, _toConsumableArray(_result2));

                        break;
                      }
                    }

                    return _res;
                  }
              }
            };

            var records = this._myIndex.records;
            var resultMap = {};
            var results = [];
            records.forEach(function (_ref15) {
              var item = _ref15.$,
                  idx = _ref15.i;

              if (isDefined(item)) {
                var expResults = evaluate(expression, item, idx);

                if (expResults.length) {
                  // Dedupe when adding
                  if (!resultMap[idx]) {
                    resultMap[idx] = {
                      idx: idx,
                      item: item,
                      matches: []
                    };
                    results.push(resultMap[idx]);
                  }

                  expResults.forEach(function (_ref16) {
                    var _resultMap$idx$matche;

                    var matches = _ref16.matches;

                    (_resultMap$idx$matche = resultMap[idx].matches).push.apply(_resultMap$idx$matche, _toConsumableArray(matches));
                  });
                }
              }
            });
            return results;
          }
        }, {
          key: "_searchObjectList",
          value: function _searchObjectList(query) {
            var _this8 = this;

            var searcher = createSearcher(query, this.options);
            var _this$_myIndex = this._myIndex,
                keys = _this$_myIndex.keys,
                records = _this$_myIndex.records;
            var results = []; // List is Array<Object>

            records.forEach(function (_ref17) {
              var item = _ref17.$,
                  idx = _ref17.i;

              if (!isDefined(item)) {
                return;
              }

              var matches = []; // Iterate over every key (i.e, path), and fetch the value at that key

              keys.forEach(function (key, keyIndex) {
                matches.push.apply(matches, _toConsumableArray(_this8._findMatches({
                  key: key,
                  value: item[keyIndex],
                  searcher: searcher
                })));
              });

              if (matches.length) {
                results.push({
                  idx: idx,
                  item: item,
                  matches: matches
                });
              }
            });
            return results;
          }
        }, {
          key: "_findMatches",
          value: function _findMatches(_ref18) {
            var key = _ref18.key,
                value = _ref18.value,
                searcher = _ref18.searcher;

            if (!isDefined(value)) {
              return [];
            }

            var matches = [];

            if (isArray(value)) {
              value.forEach(function (_ref19) {
                var text = _ref19.v,
                    idx = _ref19.i,
                    norm = _ref19.n;

                if (!isDefined(text)) {
                  return;
                }

                var _searcher$searchIn2 = searcher.searchIn(text),
                    isMatch = _searcher$searchIn2.isMatch,
                    score = _searcher$searchIn2.score,
                    indices = _searcher$searchIn2.indices;

                if (isMatch) {
                  matches.push({
                    score: score,
                    key: key,
                    value: text,
                    idx: idx,
                    norm: norm,
                    indices: indices
                  });
                }
              });
            } else {
              var text = value.v,
                  _norm = value.n;

              var _searcher$searchIn3 = searcher.searchIn(text),
                  isMatch = _searcher$searchIn3.isMatch,
                  score = _searcher$searchIn3.score,
                  indices = _searcher$searchIn3.indices;

              if (isMatch) {
                matches.push({
                  score: score,
                  key: key,
                  value: text,
                  norm: _norm,
                  indices: indices
                });
              }
            }

            return matches;
          }
        }]);

        return Fuse;
      }(); // Practical scoring function


      function computeScore$1(results, _ref20) {
        var _ref20$ignoreFieldNor = _ref20.ignoreFieldNorm,
            ignoreFieldNorm = _ref20$ignoreFieldNor === void 0 ? Config.ignoreFieldNorm : _ref20$ignoreFieldNor;
        results.forEach(function (result) {
          var totalScore = 1;
          result.matches.forEach(function (_ref21) {
            var key = _ref21.key,
                norm = _ref21.norm,
                score = _ref21.score;
            var weight = key ? key.weight : null;
            totalScore *= Math.pow(score === 0 && weight ? Number.EPSILON : score, (weight || 1) * (ignoreFieldNorm ? 1 : norm));
          });
          result.score = totalScore;
        });
      }

      function format(results, docs) {
        var _ref22 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
            _ref22$includeMatches = _ref22.includeMatches,
            includeMatches = _ref22$includeMatches === void 0 ? Config.includeMatches : _ref22$includeMatches,
            _ref22$includeScore = _ref22.includeScore,
            includeScore = _ref22$includeScore === void 0 ? Config.includeScore : _ref22$includeScore;

        var transformers = [];
        if (includeMatches) transformers.push(transformMatches);
        if (includeScore) transformers.push(transformScore);
        return results.map(function (result) {
          var idx = result.idx;
          var data = {
            item: docs[idx],
            refIndex: idx
          };

          if (transformers.length) {
            transformers.forEach(function (transformer) {
              transformer(result, data);
            });
          }

          return data;
        });
      }

      Fuse.version = '6.4.1';
      Fuse.createIndex = createIndex;
      Fuse.parseIndex = parseIndex;
      Fuse.config = Config;
      {
        Fuse.parseQuery = parse;
      }
      {
        register(ExtendedSearch);
      }
      /* harmony default export */

      __webpack_exports__["default"] = Fuse;
      /***/
    },

    /***/
    "../../node_modules/nanoid/format.browser.js":
    /*!*************************************************************************************************************!*\
      !*** /home/runner/work/fcc-markdown-previewer/fcc-markdown-previewer/node_modules/nanoid/format.browser.js ***!
      \*************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesNanoidFormatBrowserJs(module, exports) {
      // This file replaces `format.js` in bundlers like webpack or Rollup,
      // according to `browser` config in `package.json`.
      module.exports = function (random, alphabet, size) {
        // We can’t use bytes bigger than the alphabet. To make bytes values closer
        // to the alphabet, we apply bitmask on them. We look for the closest
        // `2 ** x - 1` number, which will be bigger than alphabet size. If we have
        // 30 symbols in the alphabet, we will take 31 (00011111).
        // We do not use faster Math.clz32, because it is not available in browsers.
        var mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1; // Bitmask is not a perfect solution (in our example it will pass 31 bytes,
        // which is bigger than the alphabet). As a result, we will need more bytes,
        // than ID size, because we will refuse bytes bigger than the alphabet.
        // Every hardware random generator call is costly,
        // because we need to wait for entropy collection. This is why often it will
        // be faster to ask for few extra bytes in advance, to avoid additional calls.
        // Here we calculate how many random bytes should we call in advance.
        // It depends on ID length, mask / alphabet size and magic number 1.6
        // (which was selected according benchmarks).
        // -~f => Math.ceil(f) if n is float number
        // -~i => i + 1 if n is integer number

        var step = -~(1.6 * mask * size / alphabet.length);
        var id = '';

        while (true) {
          var bytes = random(step); // Compact alternative for `for (var i = 0; i < step; i++)`

          var i = step;

          while (i--) {
            // If random byte is bigger than alphabet even after bitmask,
            // we refuse it by `|| ''`.
            id += alphabet[bytes[i] & mask] || ''; // More compact than `id.length + 1 === size`

            if (id.length === +size) return id;
          }
        }
      };
      /***/

    },

    /***/
    "../../node_modules/shortid/index.js":
    /*!*****************************************************************************************************!*\
      !*** /home/runner/work/fcc-markdown-previewer/fcc-markdown-previewer/node_modules/shortid/index.js ***!
      \*****************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesShortidIndexJs(module, exports, __webpack_require__) {
      "use strict";

      module.exports = __webpack_require__(
      /*! ./lib/index */
      "../../node_modules/shortid/lib/index.js");
      /***/
    },

    /***/
    "../../node_modules/shortid/lib/alphabet.js":
    /*!************************************************************************************************************!*\
      !*** /home/runner/work/fcc-markdown-previewer/fcc-markdown-previewer/node_modules/shortid/lib/alphabet.js ***!
      \************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesShortidLibAlphabetJs(module, exports, __webpack_require__) {
      "use strict";

      var randomFromSeed = __webpack_require__(
      /*! ./random/random-from-seed */
      "../../node_modules/shortid/lib/random/random-from-seed.js");

      var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
      var alphabet;
      var previousSeed;
      var shuffled;

      function reset() {
        shuffled = false;
      }

      function setCharacters(_alphabet_) {
        if (!_alphabet_) {
          if (alphabet !== ORIGINAL) {
            alphabet = ORIGINAL;
            reset();
          }

          return;
        }

        if (_alphabet_ === alphabet) {
          return;
        }

        if (_alphabet_.length !== ORIGINAL.length) {
          throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
        }

        var unique = _alphabet_.split('').filter(function (item, ind, arr) {
          return ind !== arr.lastIndexOf(item);
        });

        if (unique.length) {
          throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
        }

        alphabet = _alphabet_;
        reset();
      }

      function characters(_alphabet_) {
        setCharacters(_alphabet_);
        return alphabet;
      }

      function setSeed(seed) {
        randomFromSeed.seed(seed);

        if (previousSeed !== seed) {
          reset();
          previousSeed = seed;
        }
      }

      function shuffle() {
        if (!alphabet) {
          setCharacters(ORIGINAL);
        }

        var sourceArray = alphabet.split('');
        var targetArray = [];
        var r = randomFromSeed.nextValue();
        var characterIndex;

        while (sourceArray.length > 0) {
          r = randomFromSeed.nextValue();
          characterIndex = Math.floor(r * sourceArray.length);
          targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
        }

        return targetArray.join('');
      }

      function getShuffled() {
        if (shuffled) {
          return shuffled;
        }

        shuffled = shuffle();
        return shuffled;
      }
      /**
       * lookup shuffled letter
       * @param index
       * @returns {string}
       */


      function lookup(index) {
        var alphabetShuffled = getShuffled();
        return alphabetShuffled[index];
      }

      function get() {
        return alphabet || ORIGINAL;
      }

      module.exports = {
        get: get,
        characters: characters,
        seed: setSeed,
        lookup: lookup,
        shuffled: getShuffled
      };
      /***/
    },

    /***/
    "../../node_modules/shortid/lib/build.js":
    /*!*********************************************************************************************************!*\
      !*** /home/runner/work/fcc-markdown-previewer/fcc-markdown-previewer/node_modules/shortid/lib/build.js ***!
      \*********************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesShortidLibBuildJs(module, exports, __webpack_require__) {
      "use strict";

      var generate = __webpack_require__(
      /*! ./generate */
      "../../node_modules/shortid/lib/generate.js");

      var alphabet = __webpack_require__(
      /*! ./alphabet */
      "../../node_modules/shortid/lib/alphabet.js"); // Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
      // This number should be updated every year or so to keep the generated id short.
      // To regenerate `new Date() - 0` and bump the version. Always bump the version!


      var REDUCE_TIME = 1567752802062; // don't change unless we change the algos or REDUCE_TIME
      // must be an integer and less than 16

      var version = 7; // Counter is used when shortid is called multiple times in one second.

      var counter; // Remember the last time shortid was called in case counter is needed.

      var previousSeconds;
      /**
       * Generate unique id
       * Returns string id
       */

      function build(clusterWorkerId) {
        var str = '';
        var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

        if (seconds === previousSeconds) {
          counter++;
        } else {
          counter = 0;
          previousSeconds = seconds;
        }

        str = str + generate(version);
        str = str + generate(clusterWorkerId);

        if (counter > 0) {
          str = str + generate(counter);
        }

        str = str + generate(seconds);
        return str;
      }

      module.exports = build;
      /***/
    },

    /***/
    "../../node_modules/shortid/lib/generate.js":
    /*!************************************************************************************************************!*\
      !*** /home/runner/work/fcc-markdown-previewer/fcc-markdown-previewer/node_modules/shortid/lib/generate.js ***!
      \************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesShortidLibGenerateJs(module, exports, __webpack_require__) {
      "use strict";

      var alphabet = __webpack_require__(
      /*! ./alphabet */
      "../../node_modules/shortid/lib/alphabet.js");

      var random = __webpack_require__(
      /*! ./random/random-byte */
      "../../node_modules/shortid/lib/random/random-byte-browser.js");

      var format = __webpack_require__(
      /*! nanoid/format */
      "../../node_modules/nanoid/format.browser.js");

      function generate(number) {
        var loopCounter = 0;
        var done;
        var str = '';

        while (!done) {
          str = str + format(random, alphabet.get(), 1);
          done = number < Math.pow(16, loopCounter + 1);
          loopCounter++;
        }

        return str;
      }

      module.exports = generate;
      /***/
    },

    /***/
    "../../node_modules/shortid/lib/index.js":
    /*!*********************************************************************************************************!*\
      !*** /home/runner/work/fcc-markdown-previewer/fcc-markdown-previewer/node_modules/shortid/lib/index.js ***!
      \*********************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesShortidLibIndexJs(module, exports, __webpack_require__) {
      "use strict";

      var alphabet = __webpack_require__(
      /*! ./alphabet */
      "../../node_modules/shortid/lib/alphabet.js");

      var build = __webpack_require__(
      /*! ./build */
      "../../node_modules/shortid/lib/build.js");

      var isValid = __webpack_require__(
      /*! ./is-valid */
      "../../node_modules/shortid/lib/is-valid.js"); // if you are using cluster or multiple servers use this to make each instance
      // has a unique value for worker
      // Note: I don't know if this is automatically set when using third
      // party cluster solutions such as pm2.


      var clusterWorkerId = __webpack_require__(
      /*! ./util/cluster-worker-id */
      "../../node_modules/shortid/lib/util/cluster-worker-id-browser.js") || 0;
      /**
       * Set the seed.
       * Highly recommended if you don't want people to try to figure out your id schema.
       * exposed as shortid.seed(int)
       * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
       */

      function seed(seedValue) {
        alphabet.seed(seedValue);
        return module.exports;
      }
      /**
       * Set the cluster worker or machine id
       * exposed as shortid.worker(int)
       * @param workerId worker must be positive integer.  Number less than 16 is recommended.
       * returns shortid module so it can be chained.
       */


      function worker(workerId) {
        clusterWorkerId = workerId;
        return module.exports;
      }
      /**
       *
       * sets new characters to use in the alphabet
       * returns the shuffled alphabet
       */


      function characters(newCharacters) {
        if (newCharacters !== undefined) {
          alphabet.characters(newCharacters);
        }

        return alphabet.shuffled();
      }
      /**
       * Generate unique id
       * Returns string id
       */


      function generate() {
        return build(clusterWorkerId);
      } // Export all other functions as properties of the generate function


      module.exports = generate;
      module.exports.generate = generate;
      module.exports.seed = seed;
      module.exports.worker = worker;
      module.exports.characters = characters;
      module.exports.isValid = isValid;
      /***/
    },

    /***/
    "../../node_modules/shortid/lib/is-valid.js":
    /*!************************************************************************************************************!*\
      !*** /home/runner/work/fcc-markdown-previewer/fcc-markdown-previewer/node_modules/shortid/lib/is-valid.js ***!
      \************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesShortidLibIsValidJs(module, exports, __webpack_require__) {
      "use strict";

      var alphabet = __webpack_require__(
      /*! ./alphabet */
      "../../node_modules/shortid/lib/alphabet.js");

      function isShortId(id) {
        if (!id || typeof id !== 'string' || id.length < 6) {
          return false;
        }

        var nonAlphabetic = new RegExp('[^' + alphabet.get().replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&') + ']');
        return !nonAlphabetic.test(id);
      }

      module.exports = isShortId;
      /***/
    },

    /***/
    "../../node_modules/shortid/lib/random/random-byte-browser.js":
    /*!******************************************************************************************************************************!*\
      !*** /home/runner/work/fcc-markdown-previewer/fcc-markdown-previewer/node_modules/shortid/lib/random/random-byte-browser.js ***!
      \******************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesShortidLibRandomRandomByteBrowserJs(module, exports, __webpack_require__) {
      "use strict";

      var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

      var randomByte;

      if (!crypto || !crypto.getRandomValues) {
        randomByte = function randomByte(size) {
          var bytes = [];

          for (var i = 0; i < size; i++) {
            bytes.push(Math.floor(Math.random() * 256));
          }

          return bytes;
        };
      } else {
        randomByte = function randomByte(size) {
          return crypto.getRandomValues(new Uint8Array(size));
        };
      }

      module.exports = randomByte;
      /***/
    },

    /***/
    "../../node_modules/shortid/lib/random/random-from-seed.js":
    /*!***************************************************************************************************************************!*\
      !*** /home/runner/work/fcc-markdown-previewer/fcc-markdown-previewer/node_modules/shortid/lib/random/random-from-seed.js ***!
      \***************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesShortidLibRandomRandomFromSeedJs(module, exports, __webpack_require__) {
      "use strict"; // Found this seed-based random generator somewhere
      // Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

      var seed = 1;
      /**
       * return a random number based on a seed
       * @param seed
       * @returns {number}
       */

      function getNextValue() {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280.0;
      }

      function setSeed(_seed_) {
        seed = _seed_;
      }

      module.exports = {
        nextValue: getNextValue,
        seed: setSeed
      };
      /***/
    },

    /***/
    "../../node_modules/shortid/lib/util/cluster-worker-id-browser.js":
    /*!**********************************************************************************************************************************!*\
      !*** /home/runner/work/fcc-markdown-previewer/fcc-markdown-previewer/node_modules/shortid/lib/util/cluster-worker-id-browser.js ***!
      \**********************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesShortidLibUtilClusterWorkerIdBrowserJs(module, exports, __webpack_require__) {
      "use strict";

      module.exports = 0;
      /***/
    },

    /***/
    "./src/app/services/file.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/file.service.ts ***!
      \******************************************/

    /*! exports provided: FileService */

    /***/
    function srcAppServicesFileServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileService", function () {
        return FileService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "../../node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "../../node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var shortid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! shortid */
      "../../node_modules/shortid/index.js");
      /* harmony import */


      var shortid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _constants_storage_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../constants/storage-keys */
      "./src/app/constants/storage-keys.ts");
      /* harmony import */


      var fuse_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! fuse.js */
      "../../node_modules/fuse.js/dist/fuse.esm.js");
      /* harmony import */


      var _local_forage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./local-forage.service */
      "./src/app/services/local-forage.service.ts");

      var FileService = /*#__PURE__*/function () {
        function FileService(localForage) {
          var _this9 = this;

          _classCallCheck(this, FileService);

          this.localForage = localForage;
          /**
           * An observable of all the files
           */

          this.files$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
          this.localForage.removeAll$.subscribe(function () {
            return _this9.files$.next({});
          });
          this.files$.subscribe(function (files) {
            return _this9.localForage.setItem(_constants_storage_keys__WEBPACK_IMPORTED_MODULE_4__["StorageKeys"].FILES, files);
          });
          localForage.get(_constants_storage_keys__WEBPACK_IMPORTED_MODULE_4__["StorageKeys"].FILES).then(function (files) {
            if (files) {
              return _this9.files$.next(files);
            }

            _this9.files$.next({});
          });
        }

        _createClass(FileService, [{
          key: "get",
          value: function get(id) {
            return this.files$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (files) {
              return files[id];
            }));
          }
          /**
           * Creates the given file
           */

        }, {
          key: "create",
          value: function create(file) {
            var _this10 = this;

            var id = shortid__WEBPACK_IMPORTED_MODULE_3___default()();
            return this.files$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (files) {
              return Object.assign(Object.assign({}, files), _defineProperty({}, id, Object.assign(Object.assign({}, file), {
                id: id
              })));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (files) {
              return _this10.files$.next(files);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
              return _this10.get(id);
            }));
          }
          /**
           * Updates the given file
           */

        }, {
          key: "update",
          value: function update(file) {
            var _this11 = this;

            return this.files$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (files) {
              return Object.assign(Object.assign({}, files), _defineProperty({}, file.id, file));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (files) {
              return _this11.files$.next(files);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
              return _this11.get(file.id);
            }));
          }
          /**
           * Removes the file from localStorage
           */

        }, {
          key: "remove",
          value: function remove(id) {
            var _this12 = this;

            return this.files$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (files) {
              delete files[id];
              return files;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (files) {
              return _this12.files$.next(files);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
              return _this12.get(id);
            }));
          }
          /**
           * Removes all fields
           */

        }, {
          key: "removeAll",
          value: function removeAll() {
            var _this13 = this;

            this.files$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
              return _this13.files$.next({});
            }));
          }
          /**
           * Returns an observable based upon the given params.
           */

        }, {
          key: "searchFiles$",
          value: function searchFiles$(params) {
            var query = params.query,
                _params$orderBy = params.orderBy,
                orderBy = _params$orderBy === void 0 ? 'name' : _params$orderBy;
            return this.files$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(Object.values), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (files) {
              var fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_5__["default"](files, {
                sortFn: orderBy ? function (_ref23, _ref24) {
                  var itemA = _ref23.item;
                  var itemB = _ref24.item;
                  return (// TODO: test order check!
                    itemA[orderBy] > itemB[orderBy] ? -1 : 1
                  );
                } : undefined,
                includeScore: true,
                keys: [{
                  name: 'name',
                  weight: 0.7
                }, {
                  name: 'content',
                  weight: 0.3
                }]
              });

              if (query) {
                return fuse.search(query).map(function (_ref25) {
                  var item = _ref25.item;
                  return item;
                });
              }

              if (orderBy) {
                return files.sort(function (a, b) {
                  return a > b ? -1 : 1;
                });
              }

              return files;
            }));
          }
          /**
           * Removes multiple, then returns the still existing
           */

        }, {
          key: "removeMultiple",
          value: function removeMultiple(ids) {
            var _this14 = this;

            this.files$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (files) {
              ids.forEach(function (id) {
                return delete files[id];
              });
              return Object.assign({}, files);
            })).subscribe(function (files) {
              return _this14.files$.next(files);
            });
            return this.files$;
          }
        }]);

        return FileService;
      }();

      FileService.ɵfac = function FileService_Factory(t) {
        return new (t || FileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_local_forage_service__WEBPACK_IMPORTED_MODULE_6__["LocalForageService"]));
      };

      FileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: FileService,
        factory: FileService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _local_forage_service__WEBPACK_IMPORTED_MODULE_6__["LocalForageService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~modules-editor-editor-module~modules-files-files-module-es5.js.map