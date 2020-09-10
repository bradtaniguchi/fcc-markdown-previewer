(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-editor-editor-module"], {
    /***/
    "../../node_modules/dompurify/dist/purify.js":
    /*!*************************************************************************************************************!*\
      !*** /home/runner/work/fcc-markdown-previewer/fcc-markdown-previewer/node_modules/dompurify/dist/purify.js ***!
      \*************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesDompurifyDistPurifyJs(module, exports, __webpack_require__) {
      /*! @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.0.8/LICENSE */
      (function (global, factory) {
        true ? module.exports = factory() : undefined;
      })(this, function () {
        'use strict';

        function _toConsumableArray(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }

            return arr2;
          } else {
            return Array.from(arr);
          }
        }

        var hasOwnProperty = Object.hasOwnProperty,
            setPrototypeOf = Object.setPrototypeOf,
            isFrozen = Object.isFrozen,
            objectKeys = Object.keys;
        var freeze = Object.freeze,
            seal = Object.seal; // eslint-disable-line import/no-mutable-exports

        var _ref = typeof Reflect !== 'undefined' && Reflect,
            apply = _ref.apply,
            construct = _ref.construct;

        if (!apply) {
          apply = function apply(fun, thisValue, args) {
            return fun.apply(thisValue, args);
          };
        }

        if (!freeze) {
          freeze = function freeze(x) {
            return x;
          };
        }

        if (!seal) {
          seal = function seal(x) {
            return x;
          };
        }

        if (!construct) {
          construct = function construct(Func, args) {
            return new (Function.prototype.bind.apply(Func, [null].concat(_toConsumableArray(args))))();
          };
        }

        var arrayForEach = unapply(Array.prototype.forEach);
        var arrayIndexOf = unapply(Array.prototype.indexOf);
        var arrayJoin = unapply(Array.prototype.join);
        var arrayPop = unapply(Array.prototype.pop);
        var arrayPush = unapply(Array.prototype.push);
        var arraySlice = unapply(Array.prototype.slice);
        var stringToLowerCase = unapply(String.prototype.toLowerCase);
        var stringMatch = unapply(String.prototype.match);
        var stringReplace = unapply(String.prototype.replace);
        var stringIndexOf = unapply(String.prototype.indexOf);
        var stringTrim = unapply(String.prototype.trim);
        var regExpTest = unapply(RegExp.prototype.test);
        var regExpCreate = unconstruct(RegExp);
        var typeErrorCreate = unconstruct(TypeError);

        function unapply(func) {
          return function (thisArg) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }

            return apply(func, thisArg, args);
          };
        }

        function unconstruct(func) {
          return function () {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            return construct(func, args);
          };
        }
        /* Add properties to a lookup table */


        function addToSet(set, array) {
          if (setPrototypeOf) {
            // Make 'in' and truthy checks like Boolean(set.constructor)
            // independent of any properties defined on Object.prototype.
            // Prevent prototype setters from intercepting set as a this value.
            setPrototypeOf(set, null);
          }

          var l = array.length;

          while (l--) {
            var element = array[l];

            if (typeof element === 'string') {
              var lcElement = stringToLowerCase(element);

              if (lcElement !== element) {
                // Config presets (e.g. tags.js, attrs.js) are immutable.
                if (!isFrozen(array)) {
                  array[l] = lcElement;
                }

                element = lcElement;
              }
            }

            set[element] = true;
          }

          return set;
        }
        /* Shallow clone an object */


        function clone(object) {
          var newObject = {};
          var property = void 0;

          for (property in object) {
            if (apply(hasOwnProperty, object, [property])) {
              newObject[property] = object[property];
            }
          }

          return newObject;
        }

        var html = freeze(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']); // SVG

        var svg = freeze(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'audio', 'canvas', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'video', 'view', 'vkern']);
        var svgFilters = freeze(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']);
        var mathMl = freeze(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover']);
        var text = freeze(['#text']);
        var html$1 = freeze(['accept', 'action', 'align', 'alt', 'autocapitalize', 'autocomplete', 'autopictureinpicture', 'autoplay', 'background', 'bgcolor', 'border', 'capture', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'controlslist', 'coords', 'crossorigin', 'datetime', 'decoding', 'default', 'dir', 'disabled', 'disablepictureinpicture', 'disableremoteplayback', 'download', 'draggable', 'enctype', 'enterkeyhint', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'inputmode', 'integrity', 'ismap', 'kind', 'label', 'lang', 'list', 'loading', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'muted', 'name', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'playsinline', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'translate', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns']);
        var svg$1 = freeze(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'startoffset', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'tabindex', 'targetx', 'targety', 'transform', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);
        var mathMl$1 = freeze(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);
        var xml = freeze(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']); // eslint-disable-next-line unicorn/better-regex

        var MUSTACHE_EXPR = seal(/\{\{[\s\S]*|[\s\S]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode

        var ERB_EXPR = seal(/<%[\s\S]*|[\s\S]*%>/gm);
        var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape

        var ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape

        var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
        );
        var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
        var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g // eslint-disable-line no-control-regex
        );

        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
          return typeof obj;
        } : function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };

        function _toConsumableArray$1(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }

            return arr2;
          } else {
            return Array.from(arr);
          }
        }

        var getGlobal = function getGlobal() {
          return typeof window === 'undefined' ? null : window;
        };
        /**
         * Creates a no-op policy for internal use only.
         * Don't export this function outside this module!
         * @param {?TrustedTypePolicyFactory} trustedTypes The policy factory.
         * @param {Document} document The document object (to determine policy name suffix)
         * @return {?TrustedTypePolicy} The policy created (or null, if Trusted Types
         * are not supported).
         */


        var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, document) {
          if ((typeof trustedTypes === 'undefined' ? 'undefined' : _typeof(trustedTypes)) !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
            return null;
          } // Allow the callers to control the unique policy name
          // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
          // Policy creation with duplicate names throws in Trusted Types.


          var suffix = null;
          var ATTR_NAME = 'data-tt-policy-suffix';

          if (document.currentScript && document.currentScript.hasAttribute(ATTR_NAME)) {
            suffix = document.currentScript.getAttribute(ATTR_NAME);
          }

          var policyName = 'dompurify' + (suffix ? '#' + suffix : '');

          try {
            return trustedTypes.createPolicy(policyName, {
              createHTML: function createHTML(html$$1) {
                return html$$1;
              }
            });
          } catch (_) {
            // Policy creation failed (most likely another DOMPurify script has
            // already run). Skip creating the policy, as this will only cause errors
            // if TT are enforced.
            console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
            return null;
          }
        };

        function createDOMPurify() {
          var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();

          var DOMPurify = function DOMPurify(root) {
            return createDOMPurify(root);
          };
          /**
           * Version label, exposed for easier checks
           * if DOMPurify is up to date or not
           */


          DOMPurify.version = '2.0.12';
          /**
           * Array of elements that DOMPurify removed during sanitation.
           * Empty if nothing was removed.
           */

          DOMPurify.removed = [];

          if (!window || !window.document || window.document.nodeType !== 9) {
            // Not running in a browser, provide a factory function
            // so that you can pass your own Window
            DOMPurify.isSupported = false;
            return DOMPurify;
          }

          var originalDocument = window.document;
          var removeTitle = false;
          var document = window.document;
          var DocumentFragment = window.DocumentFragment,
              HTMLTemplateElement = window.HTMLTemplateElement,
              Node = window.Node,
              NodeFilter = window.NodeFilter,
              _window$NamedNodeMap = window.NamedNodeMap,
              NamedNodeMap = _window$NamedNodeMap === undefined ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
              Text = window.Text,
              Comment = window.Comment,
              DOMParser = window.DOMParser,
              trustedTypes = window.trustedTypes; // As per issue #47, the web-components registry is inherited by a
          // new document created via createHTMLDocument. As per the spec
          // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
          // a new empty registry is used when creating a template contents owner
          // document, so we use that as our parent document to ensure nothing
          // is inherited.

          if (typeof HTMLTemplateElement === 'function') {
            var template = document.createElement('template');

            if (template.content && template.content.ownerDocument) {
              document = template.content.ownerDocument;
            }
          }

          var trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, originalDocument);

          var emptyHTML = trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML('') : '';
          var _document = document,
              implementation = _document.implementation,
              createNodeIterator = _document.createNodeIterator,
              getElementsByTagName = _document.getElementsByTagName,
              createDocumentFragment = _document.createDocumentFragment;
          var importNode = originalDocument.importNode;
          var hooks = {};
          /**
           * Expose whether this browser supports running the full DOMPurify.
           */

          DOMPurify.isSupported = implementation && typeof implementation.createHTMLDocument !== 'undefined' && document.documentMode !== 9;
          var MUSTACHE_EXPR$$1 = MUSTACHE_EXPR,
              ERB_EXPR$$1 = ERB_EXPR,
              DATA_ATTR$$1 = DATA_ATTR,
              ARIA_ATTR$$1 = ARIA_ATTR,
              IS_SCRIPT_OR_DATA$$1 = IS_SCRIPT_OR_DATA,
              ATTR_WHITESPACE$$1 = ATTR_WHITESPACE;
          var IS_ALLOWED_URI$$1 = IS_ALLOWED_URI;
          /**
           * We consider the elements and attributes below to be safe. Ideally
           * don't add any new ones but feel free to remove unwanted ones.
           */

          /* allowed element names */

          var ALLOWED_TAGS = null;
          var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray$1(html), _toConsumableArray$1(svg), _toConsumableArray$1(svgFilters), _toConsumableArray$1(mathMl), _toConsumableArray$1(text)));
          /* Allowed attribute names */

          var ALLOWED_ATTR = null;
          var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray$1(html$1), _toConsumableArray$1(svg$1), _toConsumableArray$1(mathMl$1), _toConsumableArray$1(xml)));
          /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */

          var FORBID_TAGS = null;
          /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */

          var FORBID_ATTR = null;
          /* Decide if ARIA attributes are okay */

          var ALLOW_ARIA_ATTR = true;
          /* Decide if custom data attributes are okay */

          var ALLOW_DATA_ATTR = true;
          /* Decide if unknown protocols are okay */

          var ALLOW_UNKNOWN_PROTOCOLS = false;
          /* Output should be safe for jQuery's $() factory? */

          var SAFE_FOR_JQUERY = false;
          /* Output should be safe for common template engines.
           * This means, DOMPurify removes data attributes, mustaches and ERB
           */

          var SAFE_FOR_TEMPLATES = false;
          /* Decide if document with <html>... should be returned */

          var WHOLE_DOCUMENT = false;
          /* Track whether config is already set on this instance of DOMPurify. */

          var SET_CONFIG = false;
          /* Decide if all elements (e.g. style, script) must be children of
           * document.body. By default, browsers might move them to document.head */

          var FORCE_BODY = false;
          /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
           * string (or a TrustedHTML object if Trusted Types are supported).
           * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
           */

          var RETURN_DOM = false;
          /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
           * string  (or a TrustedHTML object if Trusted Types are supported) */

          var RETURN_DOM_FRAGMENT = false;
          /* If `RETURN_DOM` or `RETURN_DOM_FRAGMENT` is enabled, decide if the returned DOM
           * `Node` is imported into the current `Document`. If this flag is not enabled the
           * `Node` will belong (its ownerDocument) to a fresh `HTMLDocument`, created by
           * DOMPurify. */

          var RETURN_DOM_IMPORT = false;
          /* Try to return a Trusted Type object instead of a string, retrun a string in
           * case Trusted Types are not supported  */

          var RETURN_TRUSTED_TYPE = false;
          /* Output should be free from DOM clobbering attacks? */

          var SANITIZE_DOM = true;
          /* Keep element content when removing element? */

          var KEEP_CONTENT = true;
          /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
           * of importing it into a new Document and returning a sanitized copy */

          var IN_PLACE = false;
          /* Allow usage of profiles like html, svg and mathMl */

          var USE_PROFILES = {};
          /* Tags to ignore content of when KEEP_CONTENT is true */

          var FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'iframe', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'noembed', 'noframes', 'plaintext', 'script', 'style', 'svg', 'template', 'thead', 'title', 'video', 'xmp']);
          /* Tags that are safe for data: URIs */

          var DATA_URI_TAGS = null;
          var DEFAULT_DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image', 'track']);
          /* Attributes safe for values like "javascript:" */

          var URI_SAFE_ATTRIBUTES = null;
          var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'summary', 'title', 'value', 'style', 'xmlns']);
          /* Keep a reference to config to pass to hooks */

          var CONFIG = null;
          /* Ideally, do not touch anything below this line */

          /* ______________________________________________ */

          var formElement = document.createElement('form');
          /**
           * _parseConfig
           *
           * @param  {Object} cfg optional config literal
           */
          // eslint-disable-next-line complexity

          var _parseConfig = function _parseConfig(cfg) {
            if (CONFIG && CONFIG === cfg) {
              return;
            }
            /* Shield configuration object from tampering */


            if (!cfg || (typeof cfg === 'undefined' ? 'undefined' : _typeof(cfg)) !== 'object') {
              cfg = {};
            }
            /* Set configuration parameters */


            ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS) : DEFAULT_ALLOWED_TAGS;
            ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR) : DEFAULT_ALLOWED_ATTR;
            URI_SAFE_ATTRIBUTES = 'ADD_URI_SAFE_ATTR' in cfg ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR) : DEFAULT_URI_SAFE_ATTRIBUTES;
            DATA_URI_TAGS = 'ADD_DATA_URI_TAGS' in cfg ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS) : DEFAULT_DATA_URI_TAGS;
            FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS) : {};
            FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR) : {};
            USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
            ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true

            ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true

            ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false

            SAFE_FOR_JQUERY = cfg.SAFE_FOR_JQUERY || false; // Default false

            SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false

            WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false

            RETURN_DOM = cfg.RETURN_DOM || false; // Default false

            RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false

            RETURN_DOM_IMPORT = cfg.RETURN_DOM_IMPORT || false; // Default false

            RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false

            FORCE_BODY = cfg.FORCE_BODY || false; // Default false

            SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true

            KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true

            IN_PLACE = cfg.IN_PLACE || false; // Default false

            IS_ALLOWED_URI$$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$$1;

            if (SAFE_FOR_TEMPLATES) {
              ALLOW_DATA_ATTR = false;
            }

            if (RETURN_DOM_FRAGMENT) {
              RETURN_DOM = true;
            }
            /* Parse profile info */


            if (USE_PROFILES) {
              ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray$1(text)));
              ALLOWED_ATTR = [];

              if (USE_PROFILES.html === true) {
                addToSet(ALLOWED_TAGS, html);
                addToSet(ALLOWED_ATTR, html$1);
              }

              if (USE_PROFILES.svg === true) {
                addToSet(ALLOWED_TAGS, svg);
                addToSet(ALLOWED_ATTR, svg$1);
                addToSet(ALLOWED_ATTR, xml);
              }

              if (USE_PROFILES.svgFilters === true) {
                addToSet(ALLOWED_TAGS, svgFilters);
                addToSet(ALLOWED_ATTR, svg$1);
                addToSet(ALLOWED_ATTR, xml);
              }

              if (USE_PROFILES.mathMl === true) {
                addToSet(ALLOWED_TAGS, mathMl);
                addToSet(ALLOWED_ATTR, mathMl$1);
                addToSet(ALLOWED_ATTR, xml);
              }
            }
            /* Merge configuration parameters */


            if (cfg.ADD_TAGS) {
              if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
                ALLOWED_TAGS = clone(ALLOWED_TAGS);
              }

              addToSet(ALLOWED_TAGS, cfg.ADD_TAGS);
            }

            if (cfg.ADD_ATTR) {
              if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
                ALLOWED_ATTR = clone(ALLOWED_ATTR);
              }

              addToSet(ALLOWED_ATTR, cfg.ADD_ATTR);
            }

            if (cfg.ADD_URI_SAFE_ATTR) {
              addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR);
            }
            /* Add #text in case KEEP_CONTENT is set to true */


            if (KEEP_CONTENT) {
              ALLOWED_TAGS['#text'] = true;
            }
            /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */


            if (WHOLE_DOCUMENT) {
              addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
            }
            /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */


            if (ALLOWED_TAGS.table) {
              addToSet(ALLOWED_TAGS, ['tbody']);
              delete FORBID_TAGS.tbody;
            } // Prevent further manipulation of configuration.
            // Not available in IE8, Safari 5, etc.


            if (freeze) {
              freeze(cfg);
            }

            CONFIG = cfg;
          };
          /**
           * _forceRemove
           *
           * @param  {Node} node a DOM node
           */


          var _forceRemove = function _forceRemove(node) {
            arrayPush(DOMPurify.removed, {
              element: node
            });

            try {
              // eslint-disable-next-line unicorn/prefer-node-remove
              node.parentNode.removeChild(node);
            } catch (_) {
              node.outerHTML = emptyHTML;
            }
          };
          /**
           * _removeAttribute
           *
           * @param  {String} name an Attribute name
           * @param  {Node} node a DOM node
           */


          var _removeAttribute = function _removeAttribute(name, node) {
            try {
              arrayPush(DOMPurify.removed, {
                attribute: node.getAttributeNode(name),
                from: node
              });
            } catch (_) {
              arrayPush(DOMPurify.removed, {
                attribute: null,
                from: node
              });
            }

            node.removeAttribute(name);
          };
          /**
           * _initDocument
           *
           * @param  {String} dirty a string of dirty markup
           * @return {Document} a DOM, filled with the dirty markup
           */


          var _initDocument = function _initDocument(dirty) {
            /* Create a HTML document */
            var doc = void 0;
            var leadingWhitespace = void 0;

            if (FORCE_BODY) {
              dirty = '<remove></remove>' + dirty;
            } else {
              /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
              var matches = stringMatch(dirty, /^[\r\n\t ]+/);
              leadingWhitespace = matches && matches[0];
            }

            var dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
            /* Use the DOMParser API by default, fallback later if needs be */

            try {
              doc = new DOMParser().parseFromString(dirtyPayload, 'text/html');
            } catch (_) {}
            /* Remove title to fix a mXSS bug in older MS Edge */


            if (removeTitle) {
              addToSet(FORBID_TAGS, ['title']);
            }
            /* Use createHTMLDocument in case DOMParser is not available */


            if (!doc || !doc.documentElement) {
              doc = implementation.createHTMLDocument('');
              var _doc = doc,
                  body = _doc.body;
              body.parentNode.removeChild(body.parentNode.firstElementChild);
              body.outerHTML = dirtyPayload;
            }

            if (dirty && leadingWhitespace) {
              doc.body.insertBefore(document.createTextNode(leadingWhitespace), doc.body.childNodes[0] || null);
            }
            /* Work on whole document or just its body */


            return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
          };
          /* Here we test for a broken feature in Edge that might cause mXSS */


          if (DOMPurify.isSupported) {
            (function () {
              try {
                var doc = _initDocument('<x/><title>&lt;/title&gt;&lt;img&gt;');

                if (regExpTest(/<\/title/, doc.querySelector('title').innerHTML)) {
                  removeTitle = true;
                }
              } catch (_) {}
            })();
          }
          /**
           * _createIterator
           *
           * @param  {Document} root document/fragment to create iterator for
           * @return {Iterator} iterator instance
           */


          var _createIterator = function _createIterator(root) {
            return createNodeIterator.call(root.ownerDocument || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, function () {
              return NodeFilter.FILTER_ACCEPT;
            }, false);
          };
          /**
           * _isClobbered
           *
           * @param  {Node} elm element to check for clobbering attacks
           * @return {Boolean} true if clobbered, false if safe
           */


          var _isClobbered = function _isClobbered(elm) {
            if (elm instanceof Text || elm instanceof Comment) {
              return false;
            }

            if (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function' || typeof elm.namespaceURI !== 'string') {
              return true;
            }

            return false;
          };
          /**
           * _isNode
           *
           * @param  {Node} obj object to check whether it's a DOM node
           * @return {Boolean} true is object is a DOM node
           */


          var _isNode = function _isNode(object) {
            return (typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === 'object' ? object instanceof Node : object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string';
          };
          /**
           * _executeHook
           * Execute user configurable hooks
           *
           * @param  {String} entryPoint  Name of the hook's entry point
           * @param  {Node} currentNode node to work on with the hook
           * @param  {Object} data additional hook parameters
           */


          var _executeHook = function _executeHook(entryPoint, currentNode, data) {
            if (!hooks[entryPoint]) {
              return;
            }

            arrayForEach(hooks[entryPoint], function (hook) {
              hook.call(DOMPurify, currentNode, data, CONFIG);
            });
          };
          /**
           * _sanitizeElements
           *
           * @protect nodeName
           * @protect textContent
           * @protect removeChild
           *
           * @param   {Node} currentNode to check for permission to exist
           * @return  {Boolean} true if node was killed, false if left alive
           */
          // eslint-disable-next-line complexity


          var _sanitizeElements = function _sanitizeElements(currentNode) {
            var content = void 0;
            /* Execute a hook if present */

            _executeHook('beforeSanitizeElements', currentNode, null);
            /* Check if element is clobbered or can clobber */


            if (_isClobbered(currentNode)) {
              _forceRemove(currentNode);

              return true;
            }
            /* Now let's check the element's type and name */


            var tagName = stringToLowerCase(currentNode.nodeName);
            /* Execute a hook if present */

            _executeHook('uponSanitizeElement', currentNode, {
              tagName: tagName,
              allowedTags: ALLOWED_TAGS
            });
            /* Take care of an mXSS pattern using p, br inside svg, math */


            if ((tagName === 'svg' || tagName === 'math') && currentNode.querySelectorAll('p, br').length !== 0) {
              _forceRemove(currentNode);

              return true;
            }
            /* Remove element if anything forbids its presence */


            if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
              /* Keep content except for bad-listed elements */
              if (KEEP_CONTENT && !FORBID_CONTENTS[tagName] && typeof currentNode.insertAdjacentHTML === 'function') {
                try {
                  var htmlToInsert = currentNode.innerHTML;
                  currentNode.insertAdjacentHTML('AfterEnd', trustedTypesPolicy ? trustedTypesPolicy.createHTML(htmlToInsert) : htmlToInsert);
                } catch (_) {}
              }

              _forceRemove(currentNode);

              return true;
            }
            /* Remove in case a noscript/noembed XSS is suspected */


            if (tagName === 'noscript' && regExpTest(/<\/noscript/i, currentNode.innerHTML)) {
              _forceRemove(currentNode);

              return true;
            }

            if (tagName === 'noembed' && regExpTest(/<\/noembed/i, currentNode.innerHTML)) {
              _forceRemove(currentNode);

              return true;
            }
            /* Convert markup to cover jQuery behavior */


            if (SAFE_FOR_JQUERY && !currentNode.firstElementChild && (!currentNode.content || !currentNode.content.firstElementChild) && regExpTest(/</g, currentNode.textContent)) {
              arrayPush(DOMPurify.removed, {
                element: currentNode.cloneNode()
              });

              if (currentNode.innerHTML) {
                currentNode.innerHTML = stringReplace(currentNode.innerHTML, /</g, '&lt;');
              } else {
                currentNode.innerHTML = stringReplace(currentNode.textContent, /</g, '&lt;');
              }
            }
            /* Sanitize element content to be template-safe */


            if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
              /* Get the element's text content */
              content = currentNode.textContent;
              content = stringReplace(content, MUSTACHE_EXPR$$1, ' ');
              content = stringReplace(content, ERB_EXPR$$1, ' ');

              if (currentNode.textContent !== content) {
                arrayPush(DOMPurify.removed, {
                  element: currentNode.cloneNode()
                });
                currentNode.textContent = content;
              }
            }
            /* Execute a hook if present */


            _executeHook('afterSanitizeElements', currentNode, null);

            return false;
          };
          /**
           * _isValidAttribute
           *
           * @param  {string} lcTag Lowercase tag name of containing element.
           * @param  {string} lcName Lowercase attribute name.
           * @param  {string} value Attribute value.
           * @return {Boolean} Returns true if `value` is valid, otherwise false.
           */
          // eslint-disable-next-line complexity


          var _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
            /* Make sure attribute cannot clobber */
            if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
              return false;
            }
            /* Allow valid data-* attributes: At least one character after "-"
                (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
                XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
                We don't need to check the value; it's always URI safe. */


            if (ALLOW_DATA_ATTR && regExpTest(DATA_ATTR$$1, lcName)) ;else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$$1, lcName)) ;else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
              return false;
              /* Check value is safe. First, is attr inert? If so, is safe */
            } else if (URI_SAFE_ATTRIBUTES[lcName]) ;else if (regExpTest(IS_ALLOWED_URI$$1, stringReplace(value, ATTR_WHITESPACE$$1, ''))) ;else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ;else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$$1, stringReplace(value, ATTR_WHITESPACE$$1, ''))) ;else if (!value) ;else {
              return false;
            }
            return true;
          };
          /**
           * _sanitizeAttributes
           *
           * @protect attributes
           * @protect nodeName
           * @protect removeAttribute
           * @protect setAttribute
           *
           * @param  {Node} currentNode to sanitize
           */
          // eslint-disable-next-line complexity


          var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
            var attr = void 0;
            var value = void 0;
            var lcName = void 0;
            var idAttr = void 0;
            var l = void 0;
            /* Execute a hook if present */

            _executeHook('beforeSanitizeAttributes', currentNode, null);

            var attributes = currentNode.attributes;
            /* Check if we have attributes; if not we might have a text node */

            if (!attributes) {
              return;
            }

            var hookEvent = {
              attrName: '',
              attrValue: '',
              keepAttr: true,
              allowedAttributes: ALLOWED_ATTR
            };
            l = attributes.length;
            /* Go backwards over all attributes; safely remove bad ones */

            while (l--) {
              attr = attributes[l];
              var _attr = attr,
                  name = _attr.name,
                  namespaceURI = _attr.namespaceURI;
              value = stringTrim(attr.value);
              lcName = stringToLowerCase(name);
              /* Execute a hook if present */

              hookEvent.attrName = lcName;
              hookEvent.attrValue = value;
              hookEvent.keepAttr = true;
              hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set

              _executeHook('uponSanitizeAttribute', currentNode, hookEvent);

              value = hookEvent.attrValue;
              /* Did the hooks approve of the attribute? */

              if (hookEvent.forceKeepAttr) {
                continue;
              }
              /* Remove attribute */
              // Safari (iOS + Mac), last tested v8.0.5, crashes if you try to
              // remove a "name" attribute from an <img> tag that has an "id"
              // attribute at the time.


              if (lcName === 'name' && currentNode.nodeName === 'IMG' && attributes.id) {
                idAttr = attributes.id;
                attributes = arraySlice(attributes, []);

                _removeAttribute('id', currentNode);

                _removeAttribute(name, currentNode);

                if (arrayIndexOf(attributes, idAttr) > l) {
                  currentNode.setAttribute('id', idAttr.value);
                }
              } else if ( // This works around a bug in Safari, where input[type=file]
              // cannot be dynamically set after type has been removed
              currentNode.nodeName === 'INPUT' && lcName === 'type' && value === 'file' && hookEvent.keepAttr && (ALLOWED_ATTR[lcName] || !FORBID_ATTR[lcName])) {
                continue;
              } else {
                // This avoids a crash in Safari v9.0 with double-ids.
                // The trick is to first set the id to be empty and then to
                // remove the attribute
                if (name === 'id') {
                  currentNode.setAttribute(name, '');
                }

                _removeAttribute(name, currentNode);
              }
              /* Did the hooks approve of the attribute? */


              if (!hookEvent.keepAttr) {
                continue;
              }
              /* Work around a security issue in jQuery 3.0 */


              if (SAFE_FOR_JQUERY && regExpTest(/\/>/i, value)) {
                _removeAttribute(name, currentNode);

                continue;
              }
              /* Take care of an mXSS pattern using namespace switches */


              if (regExpTest(/svg|math/i, currentNode.namespaceURI) && regExpTest(regExpCreate('</(' + arrayJoin(objectKeys(FORBID_CONTENTS), '|') + ')', 'i'), value)) {
                _removeAttribute(name, currentNode);

                continue;
              }
              /* Sanitize attribute content to be template-safe */


              if (SAFE_FOR_TEMPLATES) {
                value = stringReplace(value, MUSTACHE_EXPR$$1, ' ');
                value = stringReplace(value, ERB_EXPR$$1, ' ');
              }
              /* Is `value` valid for this attribute? */


              var lcTag = currentNode.nodeName.toLowerCase();

              if (!_isValidAttribute(lcTag, lcName, value)) {
                continue;
              }
              /* Handle invalid data-* attribute set by try-catching it */


              try {
                if (namespaceURI) {
                  currentNode.setAttributeNS(namespaceURI, name, value);
                } else {
                  /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
                  currentNode.setAttribute(name, value);
                }

                arrayPop(DOMPurify.removed);
              } catch (_) {}
            }
            /* Execute a hook if present */


            _executeHook('afterSanitizeAttributes', currentNode, null);
          };
          /**
           * _sanitizeShadowDOM
           *
           * @param  {DocumentFragment} fragment to iterate over recursively
           */


          var _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
            var shadowNode = void 0;

            var shadowIterator = _createIterator(fragment);
            /* Execute a hook if present */


            _executeHook('beforeSanitizeShadowDOM', fragment, null);

            while (shadowNode = shadowIterator.nextNode()) {
              /* Execute a hook if present */
              _executeHook('uponSanitizeShadowNode', shadowNode, null);
              /* Sanitize tags and elements */


              if (_sanitizeElements(shadowNode)) {
                continue;
              }
              /* Deep shadow DOM detected */


              if (shadowNode.content instanceof DocumentFragment) {
                _sanitizeShadowDOM(shadowNode.content);
              }
              /* Check attributes, sanitize if necessary */


              _sanitizeAttributes(shadowNode);
            }
            /* Execute a hook if present */


            _executeHook('afterSanitizeShadowDOM', fragment, null);
          };
          /**
           * Sanitize
           * Public method providing core sanitation functionality
           *
           * @param {String|Node} dirty string or DOM node
           * @param {Object} configuration object
           */
          // eslint-disable-next-line complexity


          DOMPurify.sanitize = function (dirty, cfg) {
            var body = void 0;
            var importedNode = void 0;
            var currentNode = void 0;
            var oldNode = void 0;
            var returnNode = void 0;
            /* Make sure we have a string to sanitize.
              DO NOT return early, as this will return the wrong type if
              the user has requested a DOM object rather than a string */

            if (!dirty) {
              dirty = '<!-->';
            }
            /* Stringify, in case dirty is an object */


            if (typeof dirty !== 'string' && !_isNode(dirty)) {
              // eslint-disable-next-line no-negated-condition
              if (typeof dirty.toString !== 'function') {
                throw typeErrorCreate('toString is not a function');
              } else {
                dirty = dirty.toString();

                if (typeof dirty !== 'string') {
                  throw typeErrorCreate('dirty is not a string, aborting');
                }
              }
            }
            /* Check we can run. Otherwise fall back or ignore */


            if (!DOMPurify.isSupported) {
              if (_typeof(window.toStaticHTML) === 'object' || typeof window.toStaticHTML === 'function') {
                if (typeof dirty === 'string') {
                  return window.toStaticHTML(dirty);
                }

                if (_isNode(dirty)) {
                  return window.toStaticHTML(dirty.outerHTML);
                }
              }

              return dirty;
            }
            /* Assign config vars */


            if (!SET_CONFIG) {
              _parseConfig(cfg);
            }
            /* Clean up removed elements */


            DOMPurify.removed = [];
            /* Check if dirty is correctly typed for IN_PLACE */

            if (typeof dirty === 'string') {
              IN_PLACE = false;
            }

            if (IN_PLACE) ;else if (dirty instanceof Node) {
              /* If dirty is a DOM element, append to an empty document to avoid
                 elements being stripped by the parser */
              body = _initDocument('<!-->');
              importedNode = body.ownerDocument.importNode(dirty, true);

              if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
                /* Node is already a body, use as is */
                body = importedNode;
              } else if (importedNode.nodeName === 'HTML') {
                body = importedNode;
              } else {
                // eslint-disable-next-line unicorn/prefer-node-append
                body.appendChild(importedNode);
              }
            } else {
              /* Exit directly if we have nothing to do */
              if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
              dirty.indexOf('<') === -1) {
                return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
              }
              /* Initialize the document to work on */


              body = _initDocument(dirty);
              /* Check we have a DOM node from the data */

              if (!body) {
                return RETURN_DOM ? null : emptyHTML;
              }
            }
            /* Remove first element node (ours) if FORCE_BODY is set */

            if (body && FORCE_BODY) {
              _forceRemove(body.firstChild);
            }
            /* Get node iterator */


            var nodeIterator = _createIterator(IN_PLACE ? dirty : body);
            /* Now start iterating over the created document */


            while (currentNode = nodeIterator.nextNode()) {
              /* Fix IE's strange behavior with manipulated textNodes #89 */
              if (currentNode.nodeType === 3 && currentNode === oldNode) {
                continue;
              }
              /* Sanitize tags and elements */


              if (_sanitizeElements(currentNode)) {
                continue;
              }
              /* Shadow DOM detected, sanitize it */


              if (currentNode.content instanceof DocumentFragment) {
                _sanitizeShadowDOM(currentNode.content);
              }
              /* Check attributes, sanitize if necessary */


              _sanitizeAttributes(currentNode);

              oldNode = currentNode;
            }

            oldNode = null;
            /* If we sanitized `dirty` in-place, return it. */

            if (IN_PLACE) {
              return dirty;
            }
            /* Return sanitized string or DOM */


            if (RETURN_DOM) {
              if (RETURN_DOM_FRAGMENT) {
                returnNode = createDocumentFragment.call(body.ownerDocument);

                while (body.firstChild) {
                  // eslint-disable-next-line unicorn/prefer-node-append
                  returnNode.appendChild(body.firstChild);
                }
              } else {
                returnNode = body;
              }

              if (RETURN_DOM_IMPORT) {
                /*
                  AdoptNode() is not used because internal state is not reset
                  (e.g. the past names map of a HTMLFormElement), this is safe
                  in theory but we would rather not risk another attack vector.
                  The state that is cloned by importNode() is explicitly defined
                  by the specs.
                */
                returnNode = importNode.call(originalDocument, returnNode, true);
              }

              return returnNode;
            }

            var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
            /* Sanitize final string template-safe */

            if (SAFE_FOR_TEMPLATES) {
              serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR$$1, ' ');
              serializedHTML = stringReplace(serializedHTML, ERB_EXPR$$1, ' ');
            }

            return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
          };
          /**
           * Public method to set the configuration once
           * setConfig
           *
           * @param {Object} cfg configuration object
           */


          DOMPurify.setConfig = function (cfg) {
            _parseConfig(cfg);

            SET_CONFIG = true;
          };
          /**
           * Public method to remove the configuration
           * clearConfig
           *
           */


          DOMPurify.clearConfig = function () {
            CONFIG = null;
            SET_CONFIG = false;
          };
          /**
           * Public method to check if an attribute value is valid.
           * Uses last set config, if any. Otherwise, uses config defaults.
           * isValidAttribute
           *
           * @param  {string} tag Tag name of containing element.
           * @param  {string} attr Attribute name.
           * @param  {string} value Attribute value.
           * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
           */


          DOMPurify.isValidAttribute = function (tag, attr, value) {
            /* Initialize shared config vars if necessary. */
            if (!CONFIG) {
              _parseConfig({});
            }

            var lcTag = stringToLowerCase(tag);
            var lcName = stringToLowerCase(attr);
            return _isValidAttribute(lcTag, lcName, value);
          };
          /**
           * AddHook
           * Public method to add DOMPurify hooks
           *
           * @param {String} entryPoint entry point for the hook to add
           * @param {Function} hookFunction function to execute
           */


          DOMPurify.addHook = function (entryPoint, hookFunction) {
            if (typeof hookFunction !== 'function') {
              return;
            }

            hooks[entryPoint] = hooks[entryPoint] || [];
            arrayPush(hooks[entryPoint], hookFunction);
          };
          /**
           * RemoveHook
           * Public method to remove a DOMPurify hook at a given entryPoint
           * (pops it from the stack of hooks if more are present)
           *
           * @param {String} entryPoint entry point for the hook to remove
           */


          DOMPurify.removeHook = function (entryPoint) {
            if (hooks[entryPoint]) {
              arrayPop(hooks[entryPoint]);
            }
          };
          /**
           * RemoveHooks
           * Public method to remove all DOMPurify hooks at a given entryPoint
           *
           * @param  {String} entryPoint entry point for the hooks to remove
           */


          DOMPurify.removeHooks = function (entryPoint) {
            if (hooks[entryPoint]) {
              hooks[entryPoint] = [];
            }
          };
          /**
           * RemoveAllHooks
           * Public method to remove all DOMPurify hooks
           *
           */


          DOMPurify.removeAllHooks = function () {
            hooks = {};
          };

          return DOMPurify;
        }

        var purify = createDOMPurify();
        return purify;
      }); //# sourceMappingURL=purify.js.map

      /***/

    },

    /***/
    "../../node_modules/marked/lib/marked.js":
    /*!*********************************************************************************************************!*\
      !*** /home/runner/work/fcc-markdown-previewer/fcc-markdown-previewer/node_modules/marked/lib/marked.js ***!
      \*********************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesMarkedLibMarkedJs(module, exports, __webpack_require__) {
      /**
       * marked - a markdown parser
       * Copyright (c) 2011-2020, Christopher Jeffrey. (MIT Licensed)
       * https://github.com/markedjs/marked
       */

      /**
       * DO NOT EDIT THIS FILE
       * The code in this file is generated from files in ./src/
       */
      (function (global, factory) {
        true ? module.exports = factory() : undefined;
      })(this, function () {
        'use strict';

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;

          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }

          return arr2;
        }

        function _createForOfIteratorHelperLoose(o, allowArrayLike) {
          var it;

          if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
            if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
              if (it) o = it;
              var i = 0;
              return function () {
                if (i >= o.length) return {
                  done: true
                };
                return {
                  done: false,
                  value: o[i++]
                };
              };
            }

            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }

          it = o[Symbol.iterator]();
          return it.next.bind(it);
        }

        function createCommonjsModule(fn, module) {
          return module = {
            exports: {}
          }, fn(module, module.exports), module.exports;
        }

        var defaults = createCommonjsModule(function (module) {
          function getDefaults() {
            return {
              baseUrl: null,
              breaks: false,
              gfm: true,
              headerIds: true,
              headerPrefix: '',
              highlight: null,
              langPrefix: 'language-',
              mangle: true,
              pedantic: false,
              renderer: null,
              sanitize: false,
              sanitizer: null,
              silent: false,
              smartLists: false,
              smartypants: false,
              tokenizer: null,
              walkTokens: null,
              xhtml: false
            };
          }

          function changeDefaults(newDefaults) {
            module.exports.defaults = newDefaults;
          }

          module.exports = {
            defaults: getDefaults(),
            getDefaults: getDefaults,
            changeDefaults: changeDefaults
          };
        });
        var defaults_1 = defaults.defaults;
        var defaults_2 = defaults.getDefaults;
        var defaults_3 = defaults.changeDefaults;
        /**
         * Helpers
         */

        var escapeTest = /[&<>"']/;
        var escapeReplace = /[&<>"']/g;
        var escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
        var escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
        var escapeReplacements = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#39;'
        };

        var getEscapeReplacement = function getEscapeReplacement(ch) {
          return escapeReplacements[ch];
        };

        function escape(html, encode) {
          if (encode) {
            if (escapeTest.test(html)) {
              return html.replace(escapeReplace, getEscapeReplacement);
            }
          } else {
            if (escapeTestNoEncode.test(html)) {
              return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
            }
          }

          return html;
        }

        var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;

        function unescape(html) {
          // explicitly match decimal, hex, and named HTML entities
          return html.replace(unescapeTest, function (_, n) {
            n = n.toLowerCase();
            if (n === 'colon') return ':';

            if (n.charAt(0) === '#') {
              return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
            }

            return '';
          });
        }

        var caret = /(^|[^\[])\^/g;

        function edit(regex, opt) {
          regex = regex.source || regex;
          opt = opt || '';
          var obj = {
            replace: function replace(name, val) {
              val = val.source || val;
              val = val.replace(caret, '$1');
              regex = regex.replace(name, val);
              return obj;
            },
            getRegex: function getRegex() {
              return new RegExp(regex, opt);
            }
          };
          return obj;
        }

        var nonWordAndColonTest = /[^\w:]/g;
        var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

        function cleanUrl(sanitize, base, href) {
          if (sanitize) {
            var prot;

            try {
              prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, '').toLowerCase();
            } catch (e) {
              return null;
            }

            if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
              return null;
            }
          }

          if (base && !originIndependentUrl.test(href)) {
            href = resolveUrl(base, href);
          }

          try {
            href = encodeURI(href).replace(/%25/g, '%');
          } catch (e) {
            return null;
          }

          return href;
        }

        var baseUrls = {};
        var justDomain = /^[^:]+:\/*[^/]*$/;
        var protocol = /^([^:]+:)[\s\S]*$/;
        var domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;

        function resolveUrl(base, href) {
          if (!baseUrls[' ' + base]) {
            // we can ignore everything in base after the last slash of its path component,
            // but we might need to add _that_
            // https://tools.ietf.org/html/rfc3986#section-3
            if (justDomain.test(base)) {
              baseUrls[' ' + base] = base + '/';
            } else {
              baseUrls[' ' + base] = rtrim(base, '/', true);
            }
          }

          base = baseUrls[' ' + base];
          var relativeBase = base.indexOf(':') === -1;

          if (href.substring(0, 2) === '//') {
            if (relativeBase) {
              return href;
            }

            return base.replace(protocol, '$1') + href;
          } else if (href.charAt(0) === '/') {
            if (relativeBase) {
              return href;
            }

            return base.replace(domain, '$1') + href;
          } else {
            return base + href;
          }
        }

        var noopTest = {
          exec: function noopTest() {}
        };

        function merge(obj) {
          var i = 1,
              target,
              key;

          for (; i < arguments.length; i++) {
            target = arguments[i];

            for (key in target) {
              if (Object.prototype.hasOwnProperty.call(target, key)) {
                obj[key] = target[key];
              }
            }
          }

          return obj;
        }

        function splitCells(tableRow, count) {
          // ensure that every cell-delimiting pipe has a space
          // before it to distinguish it from an escaped pipe
          var row = tableRow.replace(/\|/g, function (match, offset, str) {
            var escaped = false,
                curr = offset;

            while (--curr >= 0 && str[curr] === '\\') {
              escaped = !escaped;
            }

            if (escaped) {
              // odd number of slashes means | is escaped
              // so we leave it alone
              return '|';
            } else {
              // add space before unescaped |
              return ' |';
            }
          }),
              cells = row.split(/ \|/);
          var i = 0;

          if (cells.length > count) {
            cells.splice(count);
          } else {
            while (cells.length < count) {
              cells.push('');
            }
          }

          for (; i < cells.length; i++) {
            // leading or trailing whitespace is ignored per the gfm spec
            cells[i] = cells[i].trim().replace(/\\\|/g, '|');
          }

          return cells;
        } // Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
        // /c*$/ is vulnerable to REDOS.
        // invert: Remove suffix of non-c chars instead. Default falsey.


        function rtrim(str, c, invert) {
          var l = str.length;

          if (l === 0) {
            return '';
          } // Length of suffix matching the invert condition.


          var suffLen = 0; // Step left until we fail to match the invert condition.

          while (suffLen < l) {
            var currChar = str.charAt(l - suffLen - 1);

            if (currChar === c && !invert) {
              suffLen++;
            } else if (currChar !== c && invert) {
              suffLen++;
            } else {
              break;
            }
          }

          return str.substr(0, l - suffLen);
        }

        function findClosingBracket(str, b) {
          if (str.indexOf(b[1]) === -1) {
            return -1;
          }

          var l = str.length;
          var level = 0,
              i = 0;

          for (; i < l; i++) {
            if (str[i] === '\\') {
              i++;
            } else if (str[i] === b[0]) {
              level++;
            } else if (str[i] === b[1]) {
              level--;

              if (level < 0) {
                return i;
              }
            }
          }

          return -1;
        }

        function checkSanitizeDeprecation(opt) {
          if (opt && opt.sanitize && !opt.silent) {
            console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
          }
        }

        var helpers = {
          escape: escape,
          unescape: unescape,
          edit: edit,
          cleanUrl: cleanUrl,
          resolveUrl: resolveUrl,
          noopTest: noopTest,
          merge: merge,
          splitCells: splitCells,
          rtrim: rtrim,
          findClosingBracket: findClosingBracket,
          checkSanitizeDeprecation: checkSanitizeDeprecation
        };
        var defaults$1 = defaults.defaults;
        var rtrim$1 = helpers.rtrim,
            splitCells$1 = helpers.splitCells,
            _escape = helpers.escape,
            findClosingBracket$1 = helpers.findClosingBracket;

        function outputLink(cap, link, raw) {
          var href = link.href;
          var title = link.title ? _escape(link.title) : null;
          var text = cap[1].replace(/\\([\[\]])/g, '$1');

          if (cap[0].charAt(0) !== '!') {
            return {
              type: 'link',
              raw: raw,
              href: href,
              title: title,
              text: text
            };
          } else {
            return {
              type: 'image',
              raw: raw,
              href: href,
              title: title,
              text: _escape(text)
            };
          }
        }

        function indentCodeCompensation(raw, text) {
          var matchIndentToCode = raw.match(/^(\s+)(?:```)/);

          if (matchIndentToCode === null) {
            return text;
          }

          var indentToCode = matchIndentToCode[1];
          return text.split('\n').map(function (node) {
            var matchIndentInNode = node.match(/^\s+/);

            if (matchIndentInNode === null) {
              return node;
            }

            var indentInNode = matchIndentInNode[0];

            if (indentInNode.length >= indentToCode.length) {
              return node.slice(indentToCode.length);
            }

            return node;
          }).join('\n');
        }
        /**
         * Tokenizer
         */


        var Tokenizer_1 = /*#__PURE__*/function () {
          function Tokenizer(options) {
            this.options = options || defaults$1;
          }

          var _proto = Tokenizer.prototype;

          _proto.space = function space(src) {
            var cap = this.rules.block.newline.exec(src);

            if (cap) {
              if (cap[0].length > 1) {
                return {
                  type: 'space',
                  raw: cap[0]
                };
              }

              return {
                raw: '\n'
              };
            }
          };

          _proto.code = function code(src, tokens) {
            var cap = this.rules.block.code.exec(src);

            if (cap) {
              var lastToken = tokens[tokens.length - 1]; // An indented code block cannot interrupt a paragraph.

              if (lastToken && lastToken.type === 'paragraph') {
                return {
                  raw: cap[0],
                  text: cap[0].trimRight()
                };
              }

              var text = cap[0].replace(/^ {4}/gm, '');
              return {
                type: 'code',
                raw: cap[0],
                codeBlockStyle: 'indented',
                text: !this.options.pedantic ? rtrim$1(text, '\n') : text
              };
            }
          };

          _proto.fences = function fences(src) {
            var cap = this.rules.block.fences.exec(src);

            if (cap) {
              var raw = cap[0];
              var text = indentCodeCompensation(raw, cap[3] || '');
              return {
                type: 'code',
                raw: raw,
                lang: cap[2] ? cap[2].trim() : cap[2],
                text: text
              };
            }
          };

          _proto.heading = function heading(src) {
            var cap = this.rules.block.heading.exec(src);

            if (cap) {
              return {
                type: 'heading',
                raw: cap[0],
                depth: cap[1].length,
                text: cap[2]
              };
            }
          };

          _proto.nptable = function nptable(src) {
            var cap = this.rules.block.nptable.exec(src);

            if (cap) {
              var item = {
                type: 'table',
                header: splitCells$1(cap[1].replace(/^ *| *\| *$/g, '')),
                align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : [],
                raw: cap[0]
              };

              if (item.header.length === item.align.length) {
                var l = item.align.length;
                var i;

                for (i = 0; i < l; i++) {
                  if (/^ *-+: *$/.test(item.align[i])) {
                    item.align[i] = 'right';
                  } else if (/^ *:-+: *$/.test(item.align[i])) {
                    item.align[i] = 'center';
                  } else if (/^ *:-+ *$/.test(item.align[i])) {
                    item.align[i] = 'left';
                  } else {
                    item.align[i] = null;
                  }
                }

                l = item.cells.length;

                for (i = 0; i < l; i++) {
                  item.cells[i] = splitCells$1(item.cells[i], item.header.length);
                }

                return item;
              }
            }
          };

          _proto.hr = function hr(src) {
            var cap = this.rules.block.hr.exec(src);

            if (cap) {
              return {
                type: 'hr',
                raw: cap[0]
              };
            }
          };

          _proto.blockquote = function blockquote(src) {
            var cap = this.rules.block.blockquote.exec(src);

            if (cap) {
              var text = cap[0].replace(/^ *> ?/gm, '');
              return {
                type: 'blockquote',
                raw: cap[0],
                text: text
              };
            }
          };

          _proto.list = function list(src) {
            var cap = this.rules.block.list.exec(src);

            if (cap) {
              var raw = cap[0];
              var bull = cap[2];
              var isordered = bull.length > 1;
              var isparen = bull[bull.length - 1] === ')';
              var list = {
                type: 'list',
                raw: raw,
                ordered: isordered,
                start: isordered ? +bull.slice(0, -1) : '',
                loose: false,
                items: []
              }; // Get each top-level item.

              var itemMatch = cap[0].match(this.rules.block.item);
              var next = false,
                  item,
                  space,
                  b,
                  addBack,
                  loose,
                  istask,
                  ischecked;
              var l = itemMatch.length;

              for (var i = 0; i < l; i++) {
                item = itemMatch[i];
                raw = item; // Remove the list item's bullet
                // so it is seen as the next token.

                space = item.length;
                item = item.replace(/^ *([*+-]|\d+[.)]) */, ''); // Outdent whatever the
                // list item contains. Hacky.

                if (~item.indexOf('\n ')) {
                  space -= item.length;
                  item = !this.options.pedantic ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '') : item.replace(/^ {1,4}/gm, '');
                } // Determine whether the next list item belongs here.
                // Backpedal if it does not belong in this list.


                if (i !== l - 1) {
                  b = this.rules.block.bullet.exec(itemMatch[i + 1])[0];

                  if (isordered ? b.length === 1 || !isparen && b[b.length - 1] === ')' : b.length > 1 || this.options.smartLists && b !== bull) {
                    addBack = itemMatch.slice(i + 1).join('\n');
                    list.raw = list.raw.substring(0, list.raw.length - addBack.length);
                    i = l - 1;
                  }
                } // Determine whether item is loose or not.
                // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
                // for discount behavior.


                loose = next || /\n\n(?!\s*$)/.test(item);

                if (i !== l - 1) {
                  next = item.charAt(item.length - 1) === '\n';
                  if (!loose) loose = next;
                }

                if (loose) {
                  list.loose = true;
                } // Check for task list items


                istask = /^\[[ xX]\] /.test(item);
                ischecked = undefined;

                if (istask) {
                  ischecked = item[1] !== ' ';
                  item = item.replace(/^\[[ xX]\] +/, '');
                }

                list.items.push({
                  type: 'list_item',
                  raw: raw,
                  task: istask,
                  checked: ischecked,
                  loose: loose,
                  text: item
                });
              }

              return list;
            }
          };

          _proto.html = function html(src) {
            var cap = this.rules.block.html.exec(src);

            if (cap) {
              return {
                type: this.options.sanitize ? 'paragraph' : 'html',
                raw: cap[0],
                pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
                text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0]
              };
            }
          };

          _proto.def = function def(src) {
            var cap = this.rules.block.def.exec(src);

            if (cap) {
              if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
              var tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
              return {
                tag: tag,
                raw: cap[0],
                href: cap[2],
                title: cap[3]
              };
            }
          };

          _proto.table = function table(src) {
            var cap = this.rules.block.table.exec(src);

            if (cap) {
              var item = {
                type: 'table',
                header: splitCells$1(cap[1].replace(/^ *| *\| *$/g, '')),
                align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
              };

              if (item.header.length === item.align.length) {
                item.raw = cap[0];
                var l = item.align.length;
                var i;

                for (i = 0; i < l; i++) {
                  if (/^ *-+: *$/.test(item.align[i])) {
                    item.align[i] = 'right';
                  } else if (/^ *:-+: *$/.test(item.align[i])) {
                    item.align[i] = 'center';
                  } else if (/^ *:-+ *$/.test(item.align[i])) {
                    item.align[i] = 'left';
                  } else {
                    item.align[i] = null;
                  }
                }

                l = item.cells.length;

                for (i = 0; i < l; i++) {
                  item.cells[i] = splitCells$1(item.cells[i].replace(/^ *\| *| *\| *$/g, ''), item.header.length);
                }

                return item;
              }
            }
          };

          _proto.lheading = function lheading(src) {
            var cap = this.rules.block.lheading.exec(src);

            if (cap) {
              return {
                type: 'heading',
                raw: cap[0],
                depth: cap[2].charAt(0) === '=' ? 1 : 2,
                text: cap[1]
              };
            }
          };

          _proto.paragraph = function paragraph(src) {
            var cap = this.rules.block.paragraph.exec(src);

            if (cap) {
              return {
                type: 'paragraph',
                raw: cap[0],
                text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1]
              };
            }
          };

          _proto.text = function text(src, tokens) {
            var cap = this.rules.block.text.exec(src);

            if (cap) {
              var lastToken = tokens[tokens.length - 1];

              if (lastToken && lastToken.type === 'text') {
                return {
                  raw: cap[0],
                  text: cap[0]
                };
              }

              return {
                type: 'text',
                raw: cap[0],
                text: cap[0]
              };
            }
          };

          _proto.escape = function escape(src) {
            var cap = this.rules.inline.escape.exec(src);

            if (cap) {
              return {
                type: 'escape',
                raw: cap[0],
                text: _escape(cap[1])
              };
            }
          };

          _proto.tag = function tag(src, inLink, inRawBlock) {
            var cap = this.rules.inline.tag.exec(src);

            if (cap) {
              if (!inLink && /^<a /i.test(cap[0])) {
                inLink = true;
              } else if (inLink && /^<\/a>/i.test(cap[0])) {
                inLink = false;
              }

              if (!inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
                inRawBlock = true;
              } else if (inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
                inRawBlock = false;
              }

              return {
                type: this.options.sanitize ? 'text' : 'html',
                raw: cap[0],
                inLink: inLink,
                inRawBlock: inRawBlock,
                text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0]
              };
            }
          };

          _proto.link = function link(src) {
            var cap = this.rules.inline.link.exec(src);

            if (cap) {
              var lastParenIndex = findClosingBracket$1(cap[2], '()');

              if (lastParenIndex > -1) {
                var start = cap[0].indexOf('!') === 0 ? 5 : 4;
                var linkLen = start + cap[1].length + lastParenIndex;
                cap[2] = cap[2].substring(0, lastParenIndex);
                cap[0] = cap[0].substring(0, linkLen).trim();
                cap[3] = '';
              }

              var href = cap[2];
              var title = '';

              if (this.options.pedantic) {
                var link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

                if (link) {
                  href = link[1];
                  title = link[3];
                } else {
                  title = '';
                }
              } else {
                title = cap[3] ? cap[3].slice(1, -1) : '';
              }

              href = href.trim().replace(/^<([\s\S]*)>$/, '$1');
              var token = outputLink(cap, {
                href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
                title: title ? title.replace(this.rules.inline._escapes, '$1') : title
              }, cap[0]);
              return token;
            }
          };

          _proto.reflink = function reflink(src, links) {
            var cap;

            if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
              var link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
              link = links[link.toLowerCase()];

              if (!link || !link.href) {
                var text = cap[0].charAt(0);
                return {
                  type: 'text',
                  raw: text,
                  text: text
                };
              }

              var token = outputLink(cap, link, cap[0]);
              return token;
            }
          };

          _proto.strong = function strong(src, maskedSrc, prevChar) {
            if (prevChar === void 0) {
              prevChar = '';
            }

            var match = this.rules.inline.strong.start.exec(src);

            if (match && (!match[1] || match[1] && (prevChar === '' || this.rules.inline.punctuation.exec(prevChar)))) {
              maskedSrc = maskedSrc.slice(-1 * src.length);
              var endReg = match[0] === '**' ? this.rules.inline.strong.endAst : this.rules.inline.strong.endUnd;
              endReg.lastIndex = 0;
              var cap;

              while ((match = endReg.exec(maskedSrc)) != null) {
                cap = this.rules.inline.strong.middle.exec(maskedSrc.slice(0, match.index + 3));

                if (cap) {
                  return {
                    type: 'strong',
                    raw: src.slice(0, cap[0].length),
                    text: src.slice(2, cap[0].length - 2)
                  };
                }
              }
            }
          };

          _proto.em = function em(src, maskedSrc, prevChar) {
            if (prevChar === void 0) {
              prevChar = '';
            }

            var match = this.rules.inline.em.start.exec(src);

            if (match && (!match[1] || match[1] && (prevChar === '' || this.rules.inline.punctuation.exec(prevChar)))) {
              maskedSrc = maskedSrc.slice(-1 * src.length);
              var endReg = match[0] === '*' ? this.rules.inline.em.endAst : this.rules.inline.em.endUnd;
              endReg.lastIndex = 0;
              var cap;

              while ((match = endReg.exec(maskedSrc)) != null) {
                cap = this.rules.inline.em.middle.exec(maskedSrc.slice(0, match.index + 2));

                if (cap) {
                  return {
                    type: 'em',
                    raw: src.slice(0, cap[0].length),
                    text: src.slice(1, cap[0].length - 1)
                  };
                }
              }
            }
          };

          _proto.codespan = function codespan(src) {
            var cap = this.rules.inline.code.exec(src);

            if (cap) {
              var text = cap[2].replace(/\n/g, ' ');
              var hasNonSpaceChars = /[^ ]/.test(text);
              var hasSpaceCharsOnBothEnds = text.startsWith(' ') && text.endsWith(' ');

              if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
                text = text.substring(1, text.length - 1);
              }

              text = _escape(text, true);
              return {
                type: 'codespan',
                raw: cap[0],
                text: text
              };
            }
          };

          _proto.br = function br(src) {
            var cap = this.rules.inline.br.exec(src);

            if (cap) {
              return {
                type: 'br',
                raw: cap[0]
              };
            }
          };

          _proto.del = function del(src) {
            var cap = this.rules.inline.del.exec(src);

            if (cap) {
              return {
                type: 'del',
                raw: cap[0],
                text: cap[1]
              };
            }
          };

          _proto.autolink = function autolink(src, mangle) {
            var cap = this.rules.inline.autolink.exec(src);

            if (cap) {
              var text, href;

              if (cap[2] === '@') {
                text = _escape(this.options.mangle ? mangle(cap[1]) : cap[1]);
                href = 'mailto:' + text;
              } else {
                text = _escape(cap[1]);
                href = text;
              }

              return {
                type: 'link',
                raw: cap[0],
                text: text,
                href: href,
                tokens: [{
                  type: 'text',
                  raw: text,
                  text: text
                }]
              };
            }
          };

          _proto.url = function url(src, mangle) {
            var cap;

            if (cap = this.rules.inline.url.exec(src)) {
              var text, href;

              if (cap[2] === '@') {
                text = _escape(this.options.mangle ? mangle(cap[0]) : cap[0]);
                href = 'mailto:' + text;
              } else {
                // do extended autolink path validation
                var prevCapZero;

                do {
                  prevCapZero = cap[0];
                  cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
                } while (prevCapZero !== cap[0]);

                text = _escape(cap[0]);

                if (cap[1] === 'www.') {
                  href = 'http://' + text;
                } else {
                  href = text;
                }
              }

              return {
                type: 'link',
                raw: cap[0],
                text: text,
                href: href,
                tokens: [{
                  type: 'text',
                  raw: text,
                  text: text
                }]
              };
            }
          };

          _proto.inlineText = function inlineText(src, inRawBlock, smartypants) {
            var cap = this.rules.inline.text.exec(src);

            if (cap) {
              var text;

              if (inRawBlock) {
                text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0];
              } else {
                text = _escape(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
              }

              return {
                type: 'text',
                raw: cap[0],
                text: text
              };
            }
          };

          return Tokenizer;
        }();

        var noopTest$1 = helpers.noopTest,
            edit$1 = helpers.edit,
            merge$1 = helpers.merge;
        /**
         * Block-Level Grammar
         */

        var block = {
          newline: /^\n+/,
          code: /^( {4}[^\n]+\n*)+/,
          fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
          hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
          heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
          blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
          list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
          html: '^ {0,3}(?:' // optional indentation
          + '<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
          + '|comment[^\\n]*(\\n+|$)' // (2)
          + '|<\\?[\\s\\S]*?\\?>\\n*' // (3)
          + '|<![A-Z][\\s\\S]*?>\\n*' // (4)
          + '|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*' // (5)
          + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)' // (6)
          + '|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) open tag
          + '|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) closing tag
          + ')',
          def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
          nptable: noopTest$1,
          table: noopTest$1,
          lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
          // regex template, placeholders will be replaced according to different paragraph
          // interruption rules of commonmark and the original markdown spec:
          _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
          text: /^[^\n]+/
        };
        block._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
        block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
        block.def = edit$1(block.def).replace('label', block._label).replace('title', block._title).getRegex();
        block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
        block.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/;
        block.item = edit$1(block.item, 'gm').replace(/bull/g, block.bullet).getRegex();
        block.list = edit$1(block.list).replace(/bull/g, block.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + block.def.source + ')').getRegex();
        block._tag = 'address|article|aside|base|basefont|blockquote|body|caption' + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption' + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe' + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option' + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr' + '|track|ul';
        block._comment = /<!--(?!-?>)[\s\S]*?-->/;
        block.html = edit$1(block.html, 'i').replace('comment', block._comment).replace('tag', block._tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
        block.paragraph = edit$1(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
        .replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
        .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
        .getRegex();
        block.blockquote = edit$1(block.blockquote).replace('paragraph', block.paragraph).getRegex();
        /**
         * Normal Block Grammar
         */

        block.normal = merge$1({}, block);
        /**
         * GFM Block Grammar
         */

        block.gfm = merge$1({}, block.normal, {
          nptable: '^ *([^|\\n ].*\\|.*)\\n' // Header
          + ' *([-:]+ *\\|[-| :]*)' // Align
          + '(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
          // Cells
          table: '^ *\\|(.+)\\n' // Header
          + ' *\\|?( *[-:]+[-| :]*)' // Align
          + '(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)' // Cells

        });
        block.gfm.nptable = edit$1(block.gfm.nptable).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
        .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
        .getRegex();
        block.gfm.table = edit$1(block.gfm.table).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
        .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
        .getRegex();
        /**
         * Pedantic grammar (original John Gruber's loose markdown specification)
         */

        block.pedantic = merge$1({}, block.normal, {
          html: edit$1('^ *(?:comment *(?:\\n|\\s*$)' + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
          + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace('comment', block._comment).replace(/tag/g, '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub' + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)' + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
          def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
          heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
          fences: noopTest$1,
          // fences not supported
          paragraph: edit$1(block.normal._paragraph).replace('hr', block.hr).replace('heading', ' *#{1,6} *[^\n]').replace('lheading', block.lheading).replace('blockquote', ' {0,3}>').replace('|fences', '').replace('|list', '').replace('|html', '').getRegex()
        });
        /**
         * Inline-Level Grammar
         */

        var inline = {
          escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
          autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
          url: noopTest$1,
          tag: '^comment' + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
          + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
          + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
          + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
          + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
          // CDATA section
          link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
          reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
          nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
          reflinkSearch: 'reflink|nolink(?!\\()',
          strong: {
            start: /^(?:(\*\*(?=[*punctuation]))|\*\*)(?![\s])|__/,
            // (1) returns if starts w/ punctuation
            middle: /^\*\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*\*$|^__(?![\s])((?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?)__$/,
            endAst: /[^punctuation\s]\*\*(?!\*)|[punctuation]\*\*(?!\*)(?:(?=[punctuation\s]|$))/,
            // last char can't be punct, or final * must also be followed by punct (or endline)
            endUnd: /[^\s]__(?!_)(?:(?=[punctuation\s])|$)/ // last char can't be a space, and final _ must preceed punct or \s (or endline)

          },
          em: {
            start: /^(?:(\*(?=[punctuation]))|\*)(?![*\s])|_/,
            // (1) returns if starts w/ punctuation
            middle: /^\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*$|^_(?![_\s])(?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?_$/,
            endAst: /[^punctuation\s]\*(?!\*)|[punctuation]\*(?!\*)(?:(?=[punctuation\s]|$))/,
            // last char can't be punct, or final * must also be followed by punct (or endline)
            endUnd: /[^\s]_(?!_)(?:(?=[punctuation\s])|$)/ // last char can't be a space, and final _ must preceed punct or \s (or endline)

          },
          code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
          br: /^( {2,}|\\)\n(?!\s*$)/,
          del: noopTest$1,
          text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,
          punctuation: /^([\s*punctuation])/
        }; // list of punctuation marks from common mark spec
        // without * and _ to workaround cases with double emphasis

        inline._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
        inline.punctuation = edit$1(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex(); // sequences em should skip over [title](link), `code`, <html>

        inline._blockSkip = '\\[[^\\]]*?\\]\\([^\\)]*?\\)|`[^`]*?`|<[^>]*?>';
        inline._overlapSkip = '__[^_]*?__|\\*\\*\\[^\\*\\]*?\\*\\*';
        inline.em.start = edit$1(inline.em.start).replace(/punctuation/g, inline._punctuation).getRegex();
        inline.em.middle = edit$1(inline.em.middle).replace(/punctuation/g, inline._punctuation).replace(/overlapSkip/g, inline._overlapSkip).getRegex();
        inline.em.endAst = edit$1(inline.em.endAst, 'g').replace(/punctuation/g, inline._punctuation).getRegex();
        inline.em.endUnd = edit$1(inline.em.endUnd, 'g').replace(/punctuation/g, inline._punctuation).getRegex();
        inline.strong.start = edit$1(inline.strong.start).replace(/punctuation/g, inline._punctuation).getRegex();
        inline.strong.middle = edit$1(inline.strong.middle).replace(/punctuation/g, inline._punctuation).replace(/blockSkip/g, inline._blockSkip).getRegex();
        inline.strong.endAst = edit$1(inline.strong.endAst, 'g').replace(/punctuation/g, inline._punctuation).getRegex();
        inline.strong.endUnd = edit$1(inline.strong.endUnd, 'g').replace(/punctuation/g, inline._punctuation).getRegex();
        inline.blockSkip = edit$1(inline._blockSkip, 'g').getRegex();
        inline.overlapSkip = edit$1(inline._overlapSkip, 'g').getRegex();
        inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
        inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
        inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
        inline.autolink = edit$1(inline.autolink).replace('scheme', inline._scheme).replace('email', inline._email).getRegex();
        inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
        inline.tag = edit$1(inline.tag).replace('comment', block._comment).replace('attribute', inline._attribute).getRegex();
        inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
        inline._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/;
        inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
        inline.link = edit$1(inline.link).replace('label', inline._label).replace('href', inline._href).replace('title', inline._title).getRegex();
        inline.reflink = edit$1(inline.reflink).replace('label', inline._label).getRegex();
        inline.reflinkSearch = edit$1(inline.reflinkSearch, 'g').replace('reflink', inline.reflink).replace('nolink', inline.nolink).getRegex();
        /**
         * Normal Inline Grammar
         */

        inline.normal = merge$1({}, inline);
        /**
         * Pedantic Inline Grammar
         */

        inline.pedantic = merge$1({}, inline.normal, {
          strong: {
            start: /^__|\*\*/,
            middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
            endAst: /\*\*(?!\*)/g,
            endUnd: /__(?!_)/g
          },
          em: {
            start: /^_|\*/,
            middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
            endAst: /\*(?!\*)/g,
            endUnd: /_(?!_)/g
          },
          link: edit$1(/^!?\[(label)\]\((.*?)\)/).replace('label', inline._label).getRegex(),
          reflink: edit$1(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', inline._label).getRegex()
        });
        /**
         * GFM Inline Grammar
         */

        inline.gfm = merge$1({}, inline.normal, {
          escape: edit$1(inline.escape).replace('])', '~|])').getRegex(),
          _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
          url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
          _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
          del: /^~+(?=\S)([\s\S]*?\S)~+/,
          text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
        });
        inline.gfm.url = edit$1(inline.gfm.url, 'i').replace('email', inline.gfm._extended_email).getRegex();
        /**
         * GFM + Line Breaks Inline Grammar
         */

        inline.breaks = merge$1({}, inline.gfm, {
          br: edit$1(inline.br).replace('{2,}', '*').getRegex(),
          text: edit$1(inline.gfm.text).replace('\\b_', '\\b_| {2,}\\n').replace(/\{2,\}/g, '*').getRegex()
        });
        var rules = {
          block: block,
          inline: inline
        };
        var defaults$2 = defaults.defaults;
        var block$1 = rules.block,
            inline$1 = rules.inline;
        /**
         * smartypants text replacement
         */

        function smartypants(text) {
          return text // em-dashes
          .replace(/---/g, "\u2014") // en-dashes
          .replace(/--/g, "\u2013") // opening singles
          .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018") // closing singles & apostrophes
          .replace(/'/g, "\u2019") // opening doubles
          .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C") // closing doubles
          .replace(/"/g, "\u201D") // ellipses
          .replace(/\.{3}/g, "\u2026");
        }
        /**
         * mangle email addresses
         */


        function mangle(text) {
          var out = '',
              i,
              ch;
          var l = text.length;

          for (i = 0; i < l; i++) {
            ch = text.charCodeAt(i);

            if (Math.random() > 0.5) {
              ch = 'x' + ch.toString(16);
            }

            out += '&#' + ch + ';';
          }

          return out;
        }
        /**
         * Block Lexer
         */


        var Lexer_1 = /*#__PURE__*/function () {
          function Lexer(options) {
            this.tokens = [];
            this.tokens.links = Object.create(null);
            this.options = options || defaults$2;
            this.options.tokenizer = this.options.tokenizer || new Tokenizer_1();
            this.tokenizer = this.options.tokenizer;
            this.tokenizer.options = this.options;
            var rules = {
              block: block$1.normal,
              inline: inline$1.normal
            };

            if (this.options.pedantic) {
              rules.block = block$1.pedantic;
              rules.inline = inline$1.pedantic;
            } else if (this.options.gfm) {
              rules.block = block$1.gfm;

              if (this.options.breaks) {
                rules.inline = inline$1.breaks;
              } else {
                rules.inline = inline$1.gfm;
              }
            }

            this.tokenizer.rules = rules;
          }
          /**
           * Expose Rules
           */

          /**
           * Static Lex Method
           */


          Lexer.lex = function lex(src, options) {
            var lexer = new Lexer(options);
            return lexer.lex(src);
          }
          /**
           * Preprocessing
           */
          ;

          var _proto = Lexer.prototype;

          _proto.lex = function lex(src) {
            src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ');
            this.blockTokens(src, this.tokens, true);
            this.inline(this.tokens);
            return this.tokens;
          }
          /**
           * Lexing
           */
          ;

          _proto.blockTokens = function blockTokens(src, tokens, top) {
            if (tokens === void 0) {
              tokens = [];
            }

            if (top === void 0) {
              top = true;
            }

            src = src.replace(/^ +$/gm, '');
            var token, i, l, lastToken;

            while (src) {
              // newline
              if (token = this.tokenizer.space(src)) {
                src = src.substring(token.raw.length);

                if (token.type) {
                  tokens.push(token);
                }

                continue;
              } // code


              if (token = this.tokenizer.code(src, tokens)) {
                src = src.substring(token.raw.length);

                if (token.type) {
                  tokens.push(token);
                } else {
                  lastToken = tokens[tokens.length - 1];
                  lastToken.raw += '\n' + token.raw;
                  lastToken.text += '\n' + token.text;
                }

                continue;
              } // fences


              if (token = this.tokenizer.fences(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
              } // heading


              if (token = this.tokenizer.heading(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
              } // table no leading pipe (gfm)


              if (token = this.tokenizer.nptable(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
              } // hr


              if (token = this.tokenizer.hr(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
              } // blockquote


              if (token = this.tokenizer.blockquote(src)) {
                src = src.substring(token.raw.length);
                token.tokens = this.blockTokens(token.text, [], top);
                tokens.push(token);
                continue;
              } // list


              if (token = this.tokenizer.list(src)) {
                src = src.substring(token.raw.length);
                l = token.items.length;

                for (i = 0; i < l; i++) {
                  token.items[i].tokens = this.blockTokens(token.items[i].text, [], false);
                }

                tokens.push(token);
                continue;
              } // html


              if (token = this.tokenizer.html(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
              } // def


              if (top && (token = this.tokenizer.def(src))) {
                src = src.substring(token.raw.length);

                if (!this.tokens.links[token.tag]) {
                  this.tokens.links[token.tag] = {
                    href: token.href,
                    title: token.title
                  };
                }

                continue;
              } // table (gfm)


              if (token = this.tokenizer.table(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
              } // lheading


              if (token = this.tokenizer.lheading(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
              } // top-level paragraph


              if (top && (token = this.tokenizer.paragraph(src))) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
              } // text


              if (token = this.tokenizer.text(src, tokens)) {
                src = src.substring(token.raw.length);

                if (token.type) {
                  tokens.push(token);
                } else {
                  lastToken = tokens[tokens.length - 1];
                  lastToken.raw += '\n' + token.raw;
                  lastToken.text += '\n' + token.text;
                }

                continue;
              }

              if (src) {
                var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);

                if (this.options.silent) {
                  console.error(errMsg);
                  break;
                } else {
                  throw new Error(errMsg);
                }
              }
            }

            return tokens;
          };

          _proto.inline = function inline(tokens) {
            var i, j, k, l2, row, token;
            var l = tokens.length;

            for (i = 0; i < l; i++) {
              token = tokens[i];

              switch (token.type) {
                case 'paragraph':
                case 'text':
                case 'heading':
                  {
                    token.tokens = [];
                    this.inlineTokens(token.text, token.tokens);
                    break;
                  }

                case 'table':
                  {
                    token.tokens = {
                      header: [],
                      cells: []
                    }; // header

                    l2 = token.header.length;

                    for (j = 0; j < l2; j++) {
                      token.tokens.header[j] = [];
                      this.inlineTokens(token.header[j], token.tokens.header[j]);
                    } // cells


                    l2 = token.cells.length;

                    for (j = 0; j < l2; j++) {
                      row = token.cells[j];
                      token.tokens.cells[j] = [];

                      for (k = 0; k < row.length; k++) {
                        token.tokens.cells[j][k] = [];
                        this.inlineTokens(row[k], token.tokens.cells[j][k]);
                      }
                    }

                    break;
                  }

                case 'blockquote':
                  {
                    this.inline(token.tokens);
                    break;
                  }

                case 'list':
                  {
                    l2 = token.items.length;

                    for (j = 0; j < l2; j++) {
                      this.inline(token.items[j].tokens);
                    }

                    break;
                  }
              }
            }

            return tokens;
          }
          /**
           * Lexing/Compiling
           */
          ;

          _proto.inlineTokens = function inlineTokens(src, tokens, inLink, inRawBlock, prevChar) {
            if (tokens === void 0) {
              tokens = [];
            }

            if (inLink === void 0) {
              inLink = false;
            }

            if (inRawBlock === void 0) {
              inRawBlock = false;
            }

            if (prevChar === void 0) {
              prevChar = '';
            }

            var token; // String with links masked to avoid interference with em and strong

            var maskedSrc = src;
            var match; // Mask out reflinks

            if (this.tokens.links) {
              var links = Object.keys(this.tokens.links);

              if (links.length > 0) {
                while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
                  if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) {
                    maskedSrc = maskedSrc.slice(0, match.index) + '[' + 'a'.repeat(match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
                  }
                }
              }
            } // Mask out other blocks


            while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
              maskedSrc = maskedSrc.slice(0, match.index) + '[' + 'a'.repeat(match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
            }

            while (src) {
              // escape
              if (token = this.tokenizer.escape(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
              } // tag


              if (token = this.tokenizer.tag(src, inLink, inRawBlock)) {
                src = src.substring(token.raw.length);
                inLink = token.inLink;
                inRawBlock = token.inRawBlock;
                tokens.push(token);
                continue;
              } // link


              if (token = this.tokenizer.link(src)) {
                src = src.substring(token.raw.length);

                if (token.type === 'link') {
                  token.tokens = this.inlineTokens(token.text, [], true, inRawBlock);
                }

                tokens.push(token);
                continue;
              } // reflink, nolink


              if (token = this.tokenizer.reflink(src, this.tokens.links)) {
                src = src.substring(token.raw.length);

                if (token.type === 'link') {
                  token.tokens = this.inlineTokens(token.text, [], true, inRawBlock);
                }

                tokens.push(token);
                continue;
              } // strong


              if (token = this.tokenizer.strong(src, maskedSrc, prevChar)) {
                src = src.substring(token.raw.length);
                token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
                tokens.push(token);
                continue;
              } // em


              if (token = this.tokenizer.em(src, maskedSrc, prevChar)) {
                src = src.substring(token.raw.length);
                token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
                tokens.push(token);
                continue;
              } // code


              if (token = this.tokenizer.codespan(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
              } // br


              if (token = this.tokenizer.br(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
              } // del (gfm)


              if (token = this.tokenizer.del(src)) {
                src = src.substring(token.raw.length);
                token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
                tokens.push(token);
                continue;
              } // autolink


              if (token = this.tokenizer.autolink(src, mangle)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
              } // url (gfm)


              if (!inLink && (token = this.tokenizer.url(src, mangle))) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
              } // text


              if (token = this.tokenizer.inlineText(src, inRawBlock, smartypants)) {
                src = src.substring(token.raw.length);
                prevChar = token.raw.slice(-1);
                tokens.push(token);
                continue;
              }

              if (src) {
                var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);

                if (this.options.silent) {
                  console.error(errMsg);
                  break;
                } else {
                  throw new Error(errMsg);
                }
              }
            }

            return tokens;
          };

          _createClass(Lexer, null, [{
            key: "rules",
            get: function get() {
              return {
                block: block$1,
                inline: inline$1
              };
            }
          }]);

          return Lexer;
        }();

        var defaults$3 = defaults.defaults;
        var cleanUrl$1 = helpers.cleanUrl,
            escape$1 = helpers.escape;
        /**
         * Renderer
         */

        var Renderer_1 = /*#__PURE__*/function () {
          function Renderer(options) {
            this.options = options || defaults$3;
          }

          var _proto = Renderer.prototype;

          _proto.code = function code(_code, infostring, escaped) {
            var lang = (infostring || '').match(/\S*/)[0];

            if (this.options.highlight) {
              var out = this.options.highlight(_code, lang);

              if (out != null && out !== _code) {
                escaped = true;
                _code = out;
              }
            }

            if (!lang) {
              return '<pre><code>' + (escaped ? _code : escape$1(_code, true)) + '</code></pre>\n';
            }

            return '<pre><code class="' + this.options.langPrefix + escape$1(lang, true) + '">' + (escaped ? _code : escape$1(_code, true)) + '</code></pre>\n';
          };

          _proto.blockquote = function blockquote(quote) {
            return '<blockquote>\n' + quote + '</blockquote>\n';
          };

          _proto.html = function html(_html) {
            return _html;
          };

          _proto.heading = function heading(text, level, raw, slugger) {
            if (this.options.headerIds) {
              return '<h' + level + ' id="' + this.options.headerPrefix + slugger.slug(raw) + '">' + text + '</h' + level + '>\n';
            } // ignore IDs


            return '<h' + level + '>' + text + '</h' + level + '>\n';
          };

          _proto.hr = function hr() {
            return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
          };

          _proto.list = function list(body, ordered, start) {
            var type = ordered ? 'ol' : 'ul',
                startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
            return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
          };

          _proto.listitem = function listitem(text) {
            return '<li>' + text + '</li>\n';
          };

          _proto.checkbox = function checkbox(checked) {
            return '<input ' + (checked ? 'checked="" ' : '') + 'disabled="" type="checkbox"' + (this.options.xhtml ? ' /' : '') + '> ';
          };

          _proto.paragraph = function paragraph(text) {
            return '<p>' + text + '</p>\n';
          };

          _proto.table = function table(header, body) {
            if (body) body = '<tbody>' + body + '</tbody>';
            return '<table>\n' + '<thead>\n' + header + '</thead>\n' + body + '</table>\n';
          };

          _proto.tablerow = function tablerow(content) {
            return '<tr>\n' + content + '</tr>\n';
          };

          _proto.tablecell = function tablecell(content, flags) {
            var type = flags.header ? 'th' : 'td';
            var tag = flags.align ? '<' + type + ' align="' + flags.align + '">' : '<' + type + '>';
            return tag + content + '</' + type + '>\n';
          } // span level renderer
          ;

          _proto.strong = function strong(text) {
            return '<strong>' + text + '</strong>';
          };

          _proto.em = function em(text) {
            return '<em>' + text + '</em>';
          };

          _proto.codespan = function codespan(text) {
            return '<code>' + text + '</code>';
          };

          _proto.br = function br() {
            return this.options.xhtml ? '<br/>' : '<br>';
          };

          _proto.del = function del(text) {
            return '<del>' + text + '</del>';
          };

          _proto.link = function link(href, title, text) {
            href = cleanUrl$1(this.options.sanitize, this.options.baseUrl, href);

            if (href === null) {
              return text;
            }

            var out = '<a href="' + escape$1(href) + '"';

            if (title) {
              out += ' title="' + title + '"';
            }

            out += '>' + text + '</a>';
            return out;
          };

          _proto.image = function image(href, title, text) {
            href = cleanUrl$1(this.options.sanitize, this.options.baseUrl, href);

            if (href === null) {
              return text;
            }

            var out = '<img src="' + href + '" alt="' + text + '"';

            if (title) {
              out += ' title="' + title + '"';
            }

            out += this.options.xhtml ? '/>' : '>';
            return out;
          };

          _proto.text = function text(_text) {
            return _text;
          };

          return Renderer;
        }();
        /**
         * TextRenderer
         * returns only the textual part of the token
         */


        var TextRenderer_1 = /*#__PURE__*/function () {
          function TextRenderer() {}

          var _proto = TextRenderer.prototype; // no need for block level renderers

          _proto.strong = function strong(text) {
            return text;
          };

          _proto.em = function em(text) {
            return text;
          };

          _proto.codespan = function codespan(text) {
            return text;
          };

          _proto.del = function del(text) {
            return text;
          };

          _proto.html = function html(text) {
            return text;
          };

          _proto.text = function text(_text) {
            return _text;
          };

          _proto.link = function link(href, title, text) {
            return '' + text;
          };

          _proto.image = function image(href, title, text) {
            return '' + text;
          };

          _proto.br = function br() {
            return '';
          };

          return TextRenderer;
        }();
        /**
         * Slugger generates header id
         */


        var Slugger_1 = /*#__PURE__*/function () {
          function Slugger() {
            this.seen = {};
          }
          /**
           * Convert string to unique id
           */


          var _proto = Slugger.prototype;

          _proto.slug = function slug(value) {
            var slug = value.toLowerCase().trim() // remove html tags
            .replace(/<[!\/a-z].*?>/ig, '') // remove unwanted chars
            .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '').replace(/\s/g, '-');

            if (this.seen.hasOwnProperty(slug)) {
              var originalSlug = slug;

              do {
                this.seen[originalSlug]++;
                slug = originalSlug + '-' + this.seen[originalSlug];
              } while (this.seen.hasOwnProperty(slug));
            }

            this.seen[slug] = 0;
            return slug;
          };

          return Slugger;
        }();

        var defaults$4 = defaults.defaults;
        var unescape$1 = helpers.unescape;
        /**
         * Parsing & Compiling
         */

        var Parser_1 = /*#__PURE__*/function () {
          function Parser(options) {
            this.options = options || defaults$4;
            this.options.renderer = this.options.renderer || new Renderer_1();
            this.renderer = this.options.renderer;
            this.renderer.options = this.options;
            this.textRenderer = new TextRenderer_1();
            this.slugger = new Slugger_1();
          }
          /**
           * Static Parse Method
           */


          Parser.parse = function parse(tokens, options) {
            var parser = new Parser(options);
            return parser.parse(tokens);
          }
          /**
           * Parse Loop
           */
          ;

          var _proto = Parser.prototype;

          _proto.parse = function parse(tokens, top) {
            if (top === void 0) {
              top = true;
            }

            var out = '',
                i,
                j,
                k,
                l2,
                l3,
                row,
                cell,
                header,
                body,
                token,
                ordered,
                start,
                loose,
                itemBody,
                item,
                checked,
                task,
                checkbox;
            var l = tokens.length;

            for (i = 0; i < l; i++) {
              token = tokens[i];

              switch (token.type) {
                case 'space':
                  {
                    continue;
                  }

                case 'hr':
                  {
                    out += this.renderer.hr();
                    continue;
                  }

                case 'heading':
                  {
                    out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape$1(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
                    continue;
                  }

                case 'code':
                  {
                    out += this.renderer.code(token.text, token.lang, token.escaped);
                    continue;
                  }

                case 'table':
                  {
                    header = ''; // header

                    cell = '';
                    l2 = token.header.length;

                    for (j = 0; j < l2; j++) {
                      cell += this.renderer.tablecell(this.parseInline(token.tokens.header[j]), {
                        header: true,
                        align: token.align[j]
                      });
                    }

                    header += this.renderer.tablerow(cell);
                    body = '';
                    l2 = token.cells.length;

                    for (j = 0; j < l2; j++) {
                      row = token.tokens.cells[j];
                      cell = '';
                      l3 = row.length;

                      for (k = 0; k < l3; k++) {
                        cell += this.renderer.tablecell(this.parseInline(row[k]), {
                          header: false,
                          align: token.align[k]
                        });
                      }

                      body += this.renderer.tablerow(cell);
                    }

                    out += this.renderer.table(header, body);
                    continue;
                  }

                case 'blockquote':
                  {
                    body = this.parse(token.tokens);
                    out += this.renderer.blockquote(body);
                    continue;
                  }

                case 'list':
                  {
                    ordered = token.ordered;
                    start = token.start;
                    loose = token.loose;
                    l2 = token.items.length;
                    body = '';

                    for (j = 0; j < l2; j++) {
                      item = token.items[j];
                      checked = item.checked;
                      task = item.task;
                      itemBody = '';

                      if (item.task) {
                        checkbox = this.renderer.checkbox(checked);

                        if (loose) {
                          if (item.tokens.length > 0 && item.tokens[0].type === 'text') {
                            item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;

                            if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                              item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                            }
                          } else {
                            item.tokens.unshift({
                              type: 'text',
                              text: checkbox
                            });
                          }
                        } else {
                          itemBody += checkbox;
                        }
                      }

                      itemBody += this.parse(item.tokens, loose);
                      body += this.renderer.listitem(itemBody, task, checked);
                    }

                    out += this.renderer.list(body, ordered, start);
                    continue;
                  }

                case 'html':
                  {
                    // TODO parse inline content if parameter markdown=1
                    out += this.renderer.html(token.text);
                    continue;
                  }

                case 'paragraph':
                  {
                    out += this.renderer.paragraph(this.parseInline(token.tokens));
                    continue;
                  }

                case 'text':
                  {
                    body = token.tokens ? this.parseInline(token.tokens) : token.text;

                    while (i + 1 < l && tokens[i + 1].type === 'text') {
                      token = tokens[++i];
                      body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
                    }

                    out += top ? this.renderer.paragraph(body) : body;
                    continue;
                  }

                default:
                  {
                    var errMsg = 'Token with "' + token.type + '" type was not found.';

                    if (this.options.silent) {
                      console.error(errMsg);
                      return;
                    } else {
                      throw new Error(errMsg);
                    }
                  }
              }
            }

            return out;
          }
          /**
           * Parse Inline Tokens
           */
          ;

          _proto.parseInline = function parseInline(tokens, renderer) {
            renderer = renderer || this.renderer;
            var out = '',
                i,
                token;
            var l = tokens.length;

            for (i = 0; i < l; i++) {
              token = tokens[i];

              switch (token.type) {
                case 'escape':
                  {
                    out += renderer.text(token.text);
                    break;
                  }

                case 'html':
                  {
                    out += renderer.html(token.text);
                    break;
                  }

                case 'link':
                  {
                    out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
                    break;
                  }

                case 'image':
                  {
                    out += renderer.image(token.href, token.title, token.text);
                    break;
                  }

                case 'strong':
                  {
                    out += renderer.strong(this.parseInline(token.tokens, renderer));
                    break;
                  }

                case 'em':
                  {
                    out += renderer.em(this.parseInline(token.tokens, renderer));
                    break;
                  }

                case 'codespan':
                  {
                    out += renderer.codespan(token.text);
                    break;
                  }

                case 'br':
                  {
                    out += renderer.br();
                    break;
                  }

                case 'del':
                  {
                    out += renderer.del(this.parseInline(token.tokens, renderer));
                    break;
                  }

                case 'text':
                  {
                    out += renderer.text(token.text);
                    break;
                  }

                default:
                  {
                    var errMsg = 'Token with "' + token.type + '" type was not found.';

                    if (this.options.silent) {
                      console.error(errMsg);
                      return;
                    } else {
                      throw new Error(errMsg);
                    }
                  }
              }
            }

            return out;
          };

          return Parser;
        }();

        var merge$2 = helpers.merge,
            checkSanitizeDeprecation$1 = helpers.checkSanitizeDeprecation,
            escape$2 = helpers.escape;
        var getDefaults = defaults.getDefaults,
            changeDefaults = defaults.changeDefaults,
            defaults$5 = defaults.defaults;
        /**
         * Marked
         */

        function marked(src, opt, callback) {
          // throw error in case of non string input
          if (typeof src === 'undefined' || src === null) {
            throw new Error('marked(): input parameter is undefined or null');
          }

          if (typeof src !== 'string') {
            throw new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
          }

          if (typeof opt === 'function') {
            callback = opt;
            opt = null;
          }

          opt = merge$2({}, marked.defaults, opt || {});
          checkSanitizeDeprecation$1(opt);

          if (callback) {
            var highlight = opt.highlight;
            var tokens;

            try {
              tokens = Lexer_1.lex(src, opt);
            } catch (e) {
              return callback(e);
            }

            var done = function done(err) {
              var out;

              if (!err) {
                try {
                  out = Parser_1.parse(tokens, opt);
                } catch (e) {
                  err = e;
                }
              }

              opt.highlight = highlight;
              return err ? callback(err) : callback(null, out);
            };

            if (!highlight || highlight.length < 3) {
              return done();
            }

            delete opt.highlight;
            if (!tokens.length) return done();
            var pending = 0;
            marked.walkTokens(tokens, function (token) {
              if (token.type === 'code') {
                pending++;
                setTimeout(function () {
                  highlight(token.text, token.lang, function (err, code) {
                    if (err) {
                      return done(err);
                    }

                    if (code != null && code !== token.text) {
                      token.text = code;
                      token.escaped = true;
                    }

                    pending--;

                    if (pending === 0) {
                      done();
                    }
                  });
                }, 0);
              }
            });

            if (pending === 0) {
              done();
            }

            return;
          }

          try {
            var _tokens = Lexer_1.lex(src, opt);

            if (opt.walkTokens) {
              marked.walkTokens(_tokens, opt.walkTokens);
            }

            return Parser_1.parse(_tokens, opt);
          } catch (e) {
            e.message += '\nPlease report this to https://github.com/markedjs/marked.';

            if (opt.silent) {
              return '<p>An error occurred:</p><pre>' + escape$2(e.message + '', true) + '</pre>';
            }

            throw e;
          }
        }
        /**
         * Options
         */


        marked.options = marked.setOptions = function (opt) {
          merge$2(marked.defaults, opt);
          changeDefaults(marked.defaults);
          return marked;
        };

        marked.getDefaults = getDefaults;
        marked.defaults = defaults$5;
        /**
         * Use Extension
         */

        marked.use = function (extension) {
          var opts = merge$2({}, extension);

          if (extension.renderer) {
            (function () {
              var renderer = marked.defaults.renderer || new Renderer_1();

              var _loop = function _loop(prop) {
                var prevRenderer = renderer[prop];

                renderer[prop] = function () {
                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  var ret = extension.renderer[prop].apply(renderer, args);

                  if (ret === false) {
                    ret = prevRenderer.apply(renderer, args);
                  }

                  return ret;
                };
              };

              for (var prop in extension.renderer) {
                _loop(prop);
              }

              opts.renderer = renderer;
            })();
          }

          if (extension.tokenizer) {
            (function () {
              var tokenizer = marked.defaults.tokenizer || new Tokenizer_1();

              var _loop2 = function _loop2(prop) {
                var prevTokenizer = tokenizer[prop];

                tokenizer[prop] = function () {
                  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                  }

                  var ret = extension.tokenizer[prop].apply(tokenizer, args);

                  if (ret === false) {
                    ret = prevTokenizer.apply(tokenizer, args);
                  }

                  return ret;
                };
              };

              for (var prop in extension.tokenizer) {
                _loop2(prop);
              }

              opts.tokenizer = tokenizer;
            })();
          }

          if (extension.walkTokens) {
            var walkTokens = marked.defaults.walkTokens;

            opts.walkTokens = function (token) {
              extension.walkTokens(token);

              if (walkTokens) {
                walkTokens(token);
              }
            };
          }

          marked.setOptions(opts);
        };
        /**
         * Run callback for every token
         */


        marked.walkTokens = function (tokens, callback) {
          for (var _iterator = _createForOfIteratorHelperLoose(tokens), _step; !(_step = _iterator()).done;) {
            var token = _step.value;
            callback(token);

            switch (token.type) {
              case 'table':
                {
                  for (var _iterator2 = _createForOfIteratorHelperLoose(token.tokens.header), _step2; !(_step2 = _iterator2()).done;) {
                    var cell = _step2.value;
                    marked.walkTokens(cell, callback);
                  }

                  for (var _iterator3 = _createForOfIteratorHelperLoose(token.tokens.cells), _step3; !(_step3 = _iterator3()).done;) {
                    var row = _step3.value;

                    for (var _iterator4 = _createForOfIteratorHelperLoose(row), _step4; !(_step4 = _iterator4()).done;) {
                      var _cell = _step4.value;
                      marked.walkTokens(_cell, callback);
                    }
                  }

                  break;
                }

              case 'list':
                {
                  marked.walkTokens(token.items, callback);
                  break;
                }

              default:
                {
                  if (token.tokens) {
                    marked.walkTokens(token.tokens, callback);
                  }
                }
            }
          }
        };
        /**
         * Expose
         */


        marked.Parser = Parser_1;
        marked.parser = Parser_1.parse;
        marked.Renderer = Renderer_1;
        marked.TextRenderer = TextRenderer_1;
        marked.Lexer = Lexer_1;
        marked.lexer = Lexer_1.lex;
        marked.Tokenizer = Tokenizer_1;
        marked.Slugger = Slugger_1;
        marked.parse = marked;
        var marked_1 = marked;
        return marked_1;
      });
      /***/

    },

    /***/
    "./src/app/modules/editor/editor-actions.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/modules/editor/editor-actions.component.ts ***!
      \************************************************************/

    /*! exports provided: EditorActionsComponent */

    /***/
    function srcAppModulesEditorEditorActionsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditorActionsComponent", function () {
        return EditorActionsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var EditorActionsComponent = /*#__PURE__*/function () {
        function EditorActionsComponent() {
          _classCallCheck(this, EditorActionsComponent);
        }

        _createClass2(EditorActionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EditorActionsComponent;
      }();

      EditorActionsComponent.ɵfac = function EditorActionsComponent_Factory(t) {
        return new (t || EditorActionsComponent)();
      };

      EditorActionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditorActionsComponent,
        selectors: [["app-editor-actions"]],
        decls: 2,
        vars: 0,
        template: function EditorActionsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " editor-actions works! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorActionsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-editor-actions',
            template: "\n    <p>\n      editor-actions works!\n    </p>\n  ",
            styles: [],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/editor/editor-default.ts":
    /*!**************************************************!*\
      !*** ./src/app/modules/editor/editor-default.ts ***!
      \**************************************************/

    /*! exports provided: EDITOR_DEFAULT */

    /***/
    function srcAppModulesEditorEditorDefaultTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EDITOR_DEFAULT", function () {
        return EDITOR_DEFAULT;
      });

      var EDITOR_DEFAULT = "\n# Header\n## Smaller Header\n\n[freeCodeCamp challenge](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer)\n\n`console.log('inline code')`\n\n```js\n// This is a js code block\nconsole.log('hello world!');\n```\n\n* List Item one\n* List item two\n\n> This is a quote\n\n<!-- this is a comment, the picture below is only given as an example -->\n\n![Example Image](/assets/undraw_sync_files_xb3r.png)\n\n**This is bold text**\n";
      /***/
    },

    /***/
    "./src/app/modules/editor/editor-markdown.service.ts":
    /*!***********************************************************!*\
      !*** ./src/app/modules/editor/editor-markdown.service.ts ***!
      \***********************************************************/

    /*! exports provided: EditorMarkdownService */

    /***/
    function srcAppModulesEditorEditorMarkdownServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditorMarkdownService", function () {
        return EditorMarkdownService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var dompurify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! dompurify */
      "../../node_modules/dompurify/dist/purify.js");
      /* harmony import */


      var dompurify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! marked */
      "../../node_modules/marked/lib/marked.js");
      /* harmony import */


      var marked__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _editor_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./editor-default */
      "./src/app/modules/editor/editor-default.ts");

      var EditorMarkdownService = /*#__PURE__*/function () {
        function EditorMarkdownService() {
          _classCallCheck(this, EditorMarkdownService);

          this.DEFAULT = _editor_default__WEBPACK_IMPORTED_MODULE_3__["EDITOR_DEFAULT"];
        }
        /**
         * Converts the given string, to a markdown.
         * Also performs sanitization.
         */


        _createClass2(EditorMarkdownService, [{
          key: "convert",
          value: function convert(str) {
            return dompurify__WEBPACK_IMPORTED_MODULE_1___default.a.sanitize(marked__WEBPACK_IMPORTED_MODULE_2___default()(str, {
              // add break line support
              breaks: true
            }));
          }
        }]);

        return EditorMarkdownService;
      }();

      EditorMarkdownService.ɵfac = function EditorMarkdownService_Factory(t) {
        return new (t || EditorMarkdownService)();
      };

      EditorMarkdownService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: EditorMarkdownService,
        factory: EditorMarkdownService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorMarkdownService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/editor/editor-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/modules/editor/editor-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: EditorRoutingModule */

    /***/
    function srcAppModulesEditorEditorRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditorRoutingModule", function () {
        return EditorRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./editor.component */
      "./src/app/modules/editor/editor.component.ts");

      var routes = [{
        path: '',
        component: _editor_component__WEBPACK_IMPORTED_MODULE_2__["EditorComponent"]
      }];

      var EditorRoutingModule = function EditorRoutingModule() {
        _classCallCheck(this, EditorRoutingModule);
      };

      EditorRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: EditorRoutingModule
      });
      EditorRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function EditorRoutingModule_Factory(t) {
          return new (t || EditorRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EditorRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/editor/editor.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/modules/editor/editor.component.ts ***!
      \****************************************************/

    /*! exports provided: EditorComponent */

    /***/
    function srcAppModulesEditorEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditorComponent", function () {
        return EditorComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _core_header_header_actions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../core/header/header-actions.service */
      "./src/app/core/header/header-actions.service.ts");
      /* harmony import */


      var _services_app_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/app-settings.service */
      "./src/app/services/app-settings.service.ts");
      /* harmony import */


      var _editor_markdown_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./editor-markdown.service */
      "./src/app/modules/editor/editor-markdown.service.ts");
      /* harmony import */


      var _services_file_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/file.service */
      "./src/app/services/file.service.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = ["actionTemplate"];

      function EditorComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditorComponent_ng_template_11_Template_input_change_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.name$.next(_r4.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditorComponent_ng_template_11_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditorComponent_ng_template_11_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.remove();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx_r3.name$));
        }
      }

      var EditorComponent = /*#__PURE__*/function () {
        function EditorComponent(router, route, headerActions, appSettingService, editorMarkdownService, fileService) {
          _classCallCheck(this, EditorComponent);

          this.router = router;
          this.route = route;
          this.headerActions = headerActions;
          this.appSettingService = appSettingService;
          this.editorMarkdownService = editorMarkdownService;
          this.fileService = fileService;
          this.DEFAULT = this.editorMarkdownService.DEFAULT;
          this.content$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
          this.name$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
          this.takeUntil = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }

        _createClass2(EditorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.html$ = this.getHtml$();
            this.id$ = this.getId$();
            this.editorStyles$ = this.getEditorStyles$();
            this.watchId$();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.takeUntil.next();
            this.takeUntil.unsubscribe();
          }
        }, {
          key: "save",
          value: function save() {
            var _this = this;

            this.id$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (id) {
              return {
                id: id,
                name: _this.name$.value,
                content: _this.content$.value
              };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (val) {
              return console.log('test with save', val);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (_ref2) {
              var id = _ref2.id,
                  name = _ref2.name,
                  content = _ref2.content;
              return !!id ? _this.fileService.update({
                id: id,
                content: content,
                name: name
              }) : _this.fileService.create({
                name: name,
                content: content
              });
            }), // TODO: notify user
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function (_ref3) {
              var id = _ref3.id;
              console.log('test with id', {
                id: id
              });

              _this.router.navigate(['/editor', id]);
            });
          }
        }, {
          key: "remove",
          value: function remove() {
            var _this2 = this;

            this.id$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (id) {
              return _this2.fileService.remove(id);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1) // TODO: add notify user
            ).subscribe(function () {
              return _this2.router.navigate(['']);
            });
          }
        }, {
          key: "getId$",
          value: function getId$() {
            return this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (paramMap) {
              return paramMap.get('id');
            }));
          }
        }, {
          key: "getHtml$",
          value: function getHtml$() {
            var _this3 = this;

            return this.content$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (str) {
              return _this3.editorMarkdownService.convert(str);
            }));
          }
        }, {
          key: "getEditorStyles$",
          value: function getEditorStyles$() {
            return this.appSettingService.settings$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref4) {
              var fontSize = _ref4.fontSize;
              return {
                fontSize: fontSize
              };
            }));
          }
        }, {
          key: "watchId$",
          value: function watchId$() {
            var _this4 = this;

            this.id$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (id) {
              if (!id) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
                  id: undefined,
                  name: '',
                  content: _this4.editorMarkdownService.DEFAULT
                });
              }

              return _this4.fileService.get(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (file) {
                return file || {
                  id: undefined,
                  name: '',
                  content: _this4.editorMarkdownService.DEFAULT
                };
              }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.takeUntil)).subscribe(function (_ref5) {
              var name = _ref5.name,
                  content = _ref5.content;
              console.log('test in watchId', {
                name: name,
                content: content
              });

              _this4.name$.next(name);

              _this4.content$.next(content);
            });
          }
        }, {
          key: "actionTemplate",
          set: function set(actionTemplate) {
            if (actionTemplate) {
              this.headerActions.clear();
              this.headerActions.setTemplateRef$(actionTemplate);
            }
          }
        }]);

        return EditorComponent;
      }();

      EditorComponent.ɵfac = function EditorComponent_Factory(t) {
        return new (t || EditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_header_header_actions_service__WEBPACK_IMPORTED_MODULE_4__["HeaderActionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_settings_service__WEBPACK_IMPORTED_MODULE_5__["AppSettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_editor_markdown_service__WEBPACK_IMPORTED_MODULE_6__["EditorMarkdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_file_service__WEBPACK_IMPORTED_MODULE_7__["FileService"]));
      };

      EditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditorComponent,
        selectors: [["app-editor"]],
        viewQuery: function EditorComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.actionTemplate = _t.first);
          }
        },
        decls: 13,
        vars: 10,
        consts: [[1, "full-height"], [1, "flex-layout-row", "full-height"], [1, "flex-50", "max-width-50"], ["id", "editor", 1, "full-width", "editor", 3, "value", "keyup"], ["editor", ""], [1, "flex-50", "max-width-50", "scroll"], ["id", "preview", 3, "innerHTML"], ["preview", ""], ["actionTemplate", ""], [1, "flex-row"], ["type", "text", "autocomplete", "off", "aria-label", "File Name", "placeholder", "No Name", 1, "basic-input", 3, "value", "change"], ["nameInput", ""], ["type", "button", "aria-label", "Save", "title", "Save", "mat-icon-button", "", 3, "click"], ["type", "button", "aria-label", "Delete", "title", "Delete", "mat-icon-button", "", 3, "click"]],
        template: function EditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function EditorComponent_Template_textarea_keyup_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

              return ctx.content$.next(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EditorComponent_ng_template_11_Template, 13, 3, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx.editorStyles$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, ctx.content$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 8, ctx.html$), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]],
        styles: [".editor-button[_ngcontent-%COMP%] {\n        background: inherit;\n        color: inherit;\n        box-shadow: 0px 0px 0px transparent;\n        border: 0px solid transparent;\n        text-shadow: 0px 0px 0px transparent;\n      }"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-editor',
            template: "\n    <div class=\"full-height\">\n      <!-- TODO: Add editor input field here -->\n      <div class=\"flex-layout-row full-height\">\n        <div class=\"flex-50 max-width-50\">\n          <!-- text content -->\n          <textarea\n            #editor\n            [value]=\"content$ | async\"\n            (keyup)=\"content$.next(editor.value)\"\n            class=\"full-width editor\"\n            id=\"editor\"\n            [style]=\"editorStyles$ | async\"\n          ></textarea>\n        </div>\n        <div class=\"flex-50 max-width-50 scroll\">\n          <!-- output -->\n          <div #preview [innerHTML]=\"html$ | async\" id=\"preview\"></div>\n        </div>\n      </div>\n    </div>\n    <ng-template #actionTemplate>\n      <span class=\"flex-row\">\n        <span>\n          <!-- TODO: Add label?? -->\n          <input\n            type=\"text\"\n            autocomplete=\"off\"\n            aria-label=\"File Name\"\n            placeholder=\"No Name\"\n            [value]=\"name$ | async\"\n            (change)=\"name$.next(nameInput.value)\"\n            class=\"basic-input\"\n            #nameInput\n          />\n        </span>\n        <span>\n          <button\n            type=\"button\"\n            aria-label=\"Save\"\n            title=\"Save\"\n            (click)=\"save()\"\n            mat-icon-button\n          >\n            <mat-icon>save</mat-icon>\n          </button>\n        </span>\n        <span>\n          <button\n            type=\"button\"\n            aria-label=\"Delete\"\n            title=\"Delete\"\n            (click)=\"remove()\"\n            mat-icon-button\n          >\n            <mat-icon>delete</mat-icon>\n          </button>\n        </span>\n      </span>\n    </ng-template>\n  ",
            styles: ["\n      .editor-button {\n        background: inherit;\n        color: inherit;\n        box-shadow: 0px 0px 0px transparent;\n        border: 0px solid transparent;\n        text-shadow: 0px 0px 0px transparent;\n      }\n    "],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _core_header_header_actions_service__WEBPACK_IMPORTED_MODULE_4__["HeaderActionsService"]
          }, {
            type: _services_app_settings_service__WEBPACK_IMPORTED_MODULE_5__["AppSettingsService"]
          }, {
            type: _editor_markdown_service__WEBPACK_IMPORTED_MODULE_6__["EditorMarkdownService"]
          }, {
            type: _services_file_service__WEBPACK_IMPORTED_MODULE_7__["FileService"]
          }];
        }, {
          actionTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['actionTemplate']
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/modules/editor/editor.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/modules/editor/editor.module.ts ***!
      \*************************************************/

    /*! exports provided: EditorModule */

    /***/
    function srcAppModulesEditorEditorModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditorModule", function () {
        return EditorModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _editor_actions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./editor-actions.component */
      "./src/app/modules/editor/editor-actions.component.ts");
      /* harmony import */


      var _editor_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./editor-routing.module */
      "./src/app/modules/editor/editor-routing.module.ts");
      /* harmony import */


      var _editor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./editor.component */
      "./src/app/modules/editor/editor.component.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

      var EditorModule = function EditorModule() {
        _classCallCheck(this, EditorModule);
      };

      EditorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: EditorModule
      });
      EditorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function EditorModule_Factory(t) {
          return new (t || EditorModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _editor_routing_module__WEBPACK_IMPORTED_MODULE_4__["EditorRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], // Angular Material
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EditorModule, {
          declarations: [_editor_component__WEBPACK_IMPORTED_MODULE_5__["EditorComponent"], _editor_actions_component__WEBPACK_IMPORTED_MODULE_3__["EditorActionsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _editor_routing_module__WEBPACK_IMPORTED_MODULE_4__["EditorRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], // Angular Material
          _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"]],
          exports: [_editor_component__WEBPACK_IMPORTED_MODULE_5__["EditorComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditorModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_editor_component__WEBPACK_IMPORTED_MODULE_5__["EditorComponent"], _editor_actions_component__WEBPACK_IMPORTED_MODULE_3__["EditorActionsComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _editor_routing_module__WEBPACK_IMPORTED_MODULE_4__["EditorRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], // Angular Material
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"]],
            exports: [_editor_component__WEBPACK_IMPORTED_MODULE_5__["EditorComponent"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-editor-editor-module-es5.js.map