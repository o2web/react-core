/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("o2web-react-core");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Styles
// import '../Fields.scss';
// import './Input.scss';

function Input(field, _ref) {
  var t = _ref.t;

  var originalError = field.meta.error;
  var errorTranslation = t('form.' + originalError);
  var error = errorTranslation === 'form.' + originalError ? originalError : errorTranslation;

  var showError = field.meta.touched && field.meta.error && !field.meta.disabled;

  return _react2.default.createElement(
    'div',
    { className: 'field' },
    _react2.default.createElement(
      'label',
      null,
      _react2.default.createElement(
        'span',
        { className: 'field__label' },
        field.label ? t('form.' + field.label) : t('form.' + field.input.name)
      ),
      _react2.default.createElement('input', _extends({}, field.input, {
        className: 'field__input',
        type: field.type,
        disabled: field.disabled,
        onKeyPress: field.onKeyPress,
        placeholder: field.placeholder
      }))
    ),
    showError && _react2.default.createElement(
      'span',
      { className: 'field__error' },
      error
    )
  );
}

Input.contextTypes = {
  t: _propTypes2.default.func
};

exports.default = Input;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var validate = function validate(values) {
  var errors = {};
  if (typeof values.firstName === 'undefined') {
    var firstNameError = { firstName: 'Field is required' };
    errors = Object.assign(errors, firstNameError);
  }
  return errors;
};

exports.default = validate;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _asyncActionCreator = __webpack_require__(15);

var _client = __webpack_require__(10);

var _client2 = _interopRequireDefault(_client);

var _queries = __webpack_require__(68);

var _queries2 = _interopRequireDefault(_queries);

var _types = __webpack_require__(18);

var _types2 = _interopRequireDefault(_types);

var _store = __webpack_require__(12);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  signIn: function signIn(variables) {
    return (0, _asyncActionCreator.asyncMutation)(_store2.default, _types2.default.SIGN_IN, _queries2.default.signIn, variables, _client2.default);
  },
  signUp: function signUp(variables) {
    return (0, _asyncActionCreator.asyncMutation)(_store2.default, _types2.default.SIGN_UP, _queries2.default.signUp, variables, _client2.default);
  },
  signOut: function signOut() {
    localStorage.removeItem('token');
    return {
      type: _types2.default.SIGN_OUT
    };
  },
  updateAccount: function updateAccount(variables) {
    return (0, _asyncActionCreator.asyncMutation)(_store2.default, _types2.default.UPDATE_ACCOUNT, _queries2.default.updateAccount, variables, _client2.default);
  },
  resetPassword: function resetPassword(variables) {
    return (0, _asyncActionCreator.asyncMutation)(_store2.default, _types2.default.RESET_PASSWORD, _queries2.default.resetPassword, variables, _client2.default);
  },
  forgotPassword: function forgotPassword(variables) {
    return (0, _asyncActionCreator.asyncMutation)(_store2.default, _types2.default.FORGOT_PASSWORD, _queries2.default.forgotPassword, variables, _client2.default);
  },
  validateToken: function validateToken(variables) {
    return (0, _asyncActionCreator.asyncMutation)(_store2.default, _types2.default.VALIDATE_TOKEN, _queries2.default.validateToken, variables, _client2.default);
  },
  validateNoToken: function validateNoToken() {
    return {
      type: _types2.default.VALIDATE_NO_TOKEN
    };
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apolloClient = __webpack_require__(49);

var _apolloClient2 = _interopRequireDefault(_apolloClient);

var _apolloLinkHttp = __webpack_require__(50);

var _apolloLink = __webpack_require__(51);

var _apolloCacheInmemory = __webpack_require__(52);

var _nodeFetch = __webpack_require__(53);

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cache = new _apolloCacheInmemory.InMemoryCache();

var httpLink = new _apolloLinkHttp.HttpLink({ uri: 'http://localhost:3001/graphql', fetch: _nodeFetch2.default });

var authMiddleware = new _apolloLink.ApolloLink(function (operation, forward) {
  // add the authorization to the headers
  var token = localStorage.getItem('token');

  if (token) {
    operation.setContext({
      headers: {
        Authorization: token
      }
    });
  }

  return forward(operation);
});

var afterwareLink = new _apolloLink.ApolloLink(function (operation, forward) {
  return forward(operation).map(function (response) {
    var context = operation.getContext();
    var headers = context.response.headers;

    // update token after query

    if (headers) {
      var token = headers.get('Authorization');

      if (token) {
        localStorage.setItem('token', token);
      }
    }

    return response;
  });
});

var client = new _apolloClient2.default({
  link: afterwareLink.concat((0, _apolloLink.concat)(authMiddleware, httpLink)),
  cache: cache
});

exports.default = client;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxActionCreator = __webpack_require__(16);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = (0, _reduxActionCreator.createTypes)([].concat(_toConsumableArray((0, _reduxActionCreator.async)('FETCH_ARTWORK')), _toConsumableArray((0, _reduxActionCreator.async)('FETCH_ARTWORKS'))), 'ARTWORKS');

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxThunk = __webpack_require__(55);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _redux = __webpack_require__(17);

var _index = __webpack_require__(56);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middlewares = [_reduxThunk2.default];

var createStoreWithMiddleware = _redux.applyMiddleware.apply(undefined, middlewares)(_redux.createStore);
var store = createStoreWithMiddleware(_index2.default);

exports.default = store;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("redux-i18n");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _asyncActionCreator = __webpack_require__(15);

var _client = __webpack_require__(10);

var _client2 = _interopRequireDefault(_client);

var _queries = __webpack_require__(54);

var _queries2 = _interopRequireDefault(_queries);

var _types = __webpack_require__(11);

var _types2 = _interopRequireDefault(_types);

var _store = __webpack_require__(12);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  fetchArtwork: function fetchArtwork(variables) {
    return (0, _asyncActionCreator.asyncQuery)(_store2.default, _types2.default.FETCH_ARTWORK, _queries2.default.fetchArtwork, variables, _client2.default);
  },
  fetchArtworks: function fetchArtworks(variables) {
    return (0, _asyncActionCreator.asyncQuery)(_store2.default, _types2.default.FETCH_ARTWORKS, _queries2.default.fetchArtworks, variables, _client2.default);
  }
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.asyncQuery = asyncQuery;
exports.asyncMutation = asyncMutation;

var _graphqlTag = __webpack_require__(48);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _reduxForm = __webpack_require__(3);

var _client = __webpack_require__(10);

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var success = 'SUCCESS';
var fail = 'FAIL';

function asyncQuery(store, type, query) {
  var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var customClient = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

  return function (dispatch) {
    dispatch({ type: type });

    var locale = { locale: store.getState().i18nState.lang };
    var client = customClient || _client2.default;

    return client.query({
      query: (0, _graphqlTag2.default)(query),
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
      variables: _extends({}, locale, params)
    }).then(function (response) {
      var payload = response.data;
      var data = Object.values(payload)[0] || {};

      var responseType = response.errors || data.errors ? fail : success;
      dispatch({ type: type + '_' + responseType, payload: payload });

      return payload;
    }).catch(function (errors) {
      dispatch({ type: type + '_' + fail });
      window.console.log(errors);
    });
  };
}

function asyncMutation(store, type, mutation) {
  var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var customClient = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

  return function (dispatch) {
    dispatch({ type: type });

    var locale = { locale: store.getState().i18nState.lang };
    var client = customClient || _client2.default;

    return client.mutate({
      mutation: (0, _graphqlTag2.default)(mutation),
      fetchPolicy: 'no-cache',
      variables: _extends({}, locale, params)
    }).then(function (response) {
      var payload = response.data;
      var data = Object.values(payload)[0] || {};

      var responseType = response.errors || data.errors ? fail : success;
      dispatch({ type: type + '_' + responseType, payload: payload });

      if (data.errors instanceof Object) {
        var errors = data.errors.reduce(function (obj, _ref) {
          var field = _ref.field,
              message = _ref.message;
          return _extends({}, obj, _defineProperty({}, field, message));
        }, {});

        dispatch((0, _reduxForm.stopSubmit)(Object.keys(payload)[0], errors));
      }

      return payload;
    }).catch(function (errors) {
      dispatch({ type: type + '_' + fail });
      window.console.log(errors);
    });
  };
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("redux-action-creator");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxActionCreator = __webpack_require__(16);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = (0, _reduxActionCreator.createTypes)([].concat(_toConsumableArray((0, _reduxActionCreator.async)('SIGN_IN')), _toConsumableArray((0, _reduxActionCreator.async)('SIGN_UP')), _toConsumableArray((0, _reduxActionCreator.async)('VALIDATE_TOKEN')), _toConsumableArray((0, _reduxActionCreator.async)('FORGOT_PASSWORD')), _toConsumableArray((0, _reduxActionCreator.async)('RESET_PASSWORD')), _toConsumableArray((0, _reduxActionCreator.async)('UPDATE_ACCOUNT')), ['VALIDATE_NO_TOKEN', 'SIGN_OUT']), 'USER');

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(20);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _express = __webpack_require__(21);

var _express2 = _interopRequireDefault(_express);

var _window = __webpack_require__(22);

var _window2 = _interopRequireDefault(_window);

var _server = __webpack_require__(23);

var _reactRedux = __webpack_require__(2);

var _reactHelmet = __webpack_require__(9);

var _ServerApp = __webpack_require__(24);

var _ServerApp2 = _interopRequireDefault(_ServerApp);

var _store = __webpack_require__(12);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.window = new _window2.default();
global.window.scrollTo = function () {};
global.window.localStorage = { getItem: function getItem() {}, setItem: function setItem() {}, removeItem: function removeItem() {} };
global.document = window.document;
global.localStorage = window.localStorage;

var PORT = 8079;
var app = (0, _express2.default)();

app.use('/build', _express2.default.static('build'));

app.get('*', function (request, response) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(_ServerApp2.default, { request: request })
  ));

  var helmet = _reactHelmet.Helmet.renderStatic();

  var raw = '\n    <!doctype html>\n    <html lang="en">\n      <head>\n        <meta charset="utf-8">\n        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">\n        <meta name="theme-color" content="#000000">\n        <link rel="manifest" href="build/manifest.json">\n        ' + helmet.title.toString() + '\n        ' + helmet.meta.toString() + '\n        <link href="build/static/css/main.05aaf55c.css" rel="stylesheet">\n      </head>\n      <body>\n        <noscript>You need to enable JavaScript to run this app.</noscript>\n        <div id="root">' + content + '</div>\n        <script type="text/javascript" src="build/static/js/main.e4869408.js"></script>\n      </body>\n    </html>\n  ';

  response.send(raw);
});

app.listen(PORT, function () {
  return console.log('Frontend service listening on port: ' + PORT);
});

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("ignore-styles");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("window");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxI18n = __webpack_require__(13);

var _reduxI18n2 = _interopRequireDefault(_reduxI18n);

var _reactCookie = __webpack_require__(25);

var _reactRouterDom = __webpack_require__(5);

var _o2webReactCore = __webpack_require__(4);

var _translations = __webpack_require__(26);

var _translations2 = _interopRequireDefault(_translations);

var _PrimaryLayout = __webpack_require__(42);

var _PrimaryLayout2 = _interopRequireDefault(_PrimaryLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import './../../assets/styles/app.scss';


var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        translations: _translations2.default,
        availableLanguages: _translations.availableLanguages,
        defaultLanguage: _translations.defaultLanguage
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var request = this.props.request;

      return _react2.default.createElement(
        _reduxI18n2.default,
        { translations: _translations2.default, initialLang: _translations.defaultLanguage },
        _react2.default.createElement(
          _reactCookie.CookiesProvider,
          null,
          _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: request.url, context: {} },
            _react2.default.createElement(
              _o2webReactCore.GAListener,
              null,
              _react2.default.createElement(_reactRouterDom.Route, {
                path: '/',
                render: function render(props) {
                  return _react2.default.createElement(_o2webReactCore.BaseRoute, _extends({}, props, {
                    component: _PrimaryLayout2.default
                  }));
                }
              })
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

App.propTypes = {
  request: _propTypes2.default.object.isRequired
};


App.childContextTypes = {
  translations: _propTypes2.default.object.isRequired,
  availableLanguages: _propTypes2.default.array.isRequired,
  defaultLanguage: _propTypes2.default.string.isRequired
};

exports.default = App;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.availableLanguages = exports.defaultLanguage = undefined;

var _index = __webpack_require__(27);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(34);

var _index4 = _interopRequireDefault(_index3);

var _common = __webpack_require__(41);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var translations = {
  fr: (0, _common2.default)(_index2.default),
  en: (0, _common2.default)(_index4.default)
};

var defaultLanguage = exports.defaultLanguage = 'fr';
var availableLanguages = exports.availableLanguages = Object.keys(translations);

exports.default = translations;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _breadcrumbs = __webpack_require__(28);

var _breadcrumbs2 = _interopRequireDefault(_breadcrumbs);

var _languageSwitcher = __webpack_require__(29);

var _languageSwitcher2 = _interopRequireDefault(_languageSwitcher);

var _nav = __webpack_require__(30);

var _nav2 = _interopRequireDefault(_nav);

var _pages = __webpack_require__(31);

var _pages2 = _interopRequireDefault(_pages);

var _routes = __webpack_require__(32);

var _routes2 = _interopRequireDefault(_routes);

var _form = __webpack_require__(33);

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  breadcrumbs: _breadcrumbs2.default,
  languageSwitcher: _languageSwitcher2.default,
  nav: _nav2.default,
  pages: _pages2.default,
  routes: _routes2.default,
  form: _form2.default
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  home: 'Accueil',
  about: 'À propos',
  artwork: 'Oeuvre',
  artworks: 'Oeuvres',
  demo: 'Démo formulaire'
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  en: 'English'
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  home: 'Accueil',
  about: 'À propos',
  artworks: 'Oeuvres',
  form_demo: 'Formulaire démo',
  account: 'Mon compte'
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  titles: {
    home: 'Page d\'accueil',
    about: 'Page à propos'
  },

  // Account
  account: {
    title: 'Mon compte',
    goToFavorites: 'Consultez votre album',
    userInfo: 'Information sur le compte',
    editAccount: 'Modifiez les informations de votre compte',
    logout: 'Déconnexion'
  },
  login: {
    title: 'Connectez-vous',
    subtitle: 'Créez votre compte et contribuez à l\'art d\'ici',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    createAccount: 'Créez votre compte',
    submit: 'Connexion',
    forgotPassword: 'Mot de passe oublié?'
  },
  createAccount: {
    title: 'Créez votre compte',
    submit: 'Soumettre'
  },
  forgotPassword: {
    title: 'Mot de passe oublié?',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    submit: 'Obtenir un lien de réinitialisation',
    instructionsSent: 'Les instructions de réinitialisation de mot de passe ont été envoyé à l\'adresse courriel'
  },
  editAccount: {
    title: 'Modifiez vos informations',
    submit: 'Enregistrer les informations'
  },
  newPassword: {
    title: 'Nouveau mot de passe',
    submit: 'Enregistrer le mot de passe',
    passwordWasReset: 'Le mot de passe a été modifié'
  }

};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  en: 'fr',
  about: 'a-propos',
  artworks: 'oeuvres',
  demo: 'formulaire-demo',
  account: 'mon-compte',
  login: 'connexion',
  createAccount: 'creation-de-compte',
  forgotPassword: 'mot-de-passe-oublie',
  resetPassword: 'nouveau-mot-de-passe',
  editAccount: 'modifier-compte'
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  firstName: "Prénom",
  lastName: "Nom",
  male: "Homme",
  female: "Femme",
  favoriteColor: "Couleur préférée",
  employed: "Employé",
  notes: "Notes",
  email: 'Adresse courriel',
  password: 'Mot de passe',
  oldPassword: 'Mot de passe actuel',
  newPassword: 'Nouveau mot de passe',
  confirmPassword: 'Confirmez le mot de passe',
  confirmNewPassword: 'Confirm new password',

  validation: {
    emailRequired: 'Un adresse courriel est requise.',
    passwordsMustMatch: 'Les mots de passes doivent correspondre.'
  }
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _breadcrumbs = __webpack_require__(35);

var _breadcrumbs2 = _interopRequireDefault(_breadcrumbs);

var _languageSwitcher = __webpack_require__(36);

var _languageSwitcher2 = _interopRequireDefault(_languageSwitcher);

var _nav = __webpack_require__(37);

var _nav2 = _interopRequireDefault(_nav);

var _pages = __webpack_require__(38);

var _pages2 = _interopRequireDefault(_pages);

var _routes = __webpack_require__(39);

var _routes2 = _interopRequireDefault(_routes);

var _form = __webpack_require__(40);

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  breadcrumbs: _breadcrumbs2.default,
  languageSwitcher: _languageSwitcher2.default,
  nav: _nav2.default,
  pages: _pages2.default,
  routes: _routes2.default,
  form: _form2.default
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  home: 'Home',
  about: 'About',
  artwork: 'Arkwork',
  artworks: 'Arkworks',
  demo: 'Demo form'
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  fr: 'Français'
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  home: 'Home',
  about: 'About',
  artworks: 'Artworks',
  form_demo: 'Form demo',
  account: 'My Account'
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  titles: {
    home: 'Home page',
    about: 'About page'
  },

  // Account
  account: {
    title: 'My Account',
    goToFavorites: 'View your favorites',
    userInfo: 'Account Info',
    editAccount: 'Edit your account information',
    logout: 'Déconnexion'
  },
  login: {
    title: 'Log In',
    subtitle: 'Contribute to art by creating an account',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    createAccount: 'Create your account',
    submit: 'Log In',
    forgotPassword: 'Forgot password?'
  },
  createAccount: {
    title: 'Create your Account',
    submit: 'Submit'
  },
  forgotPassword: {
    title: 'Forgot your Password?',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    submit: 'Get a reset password link',
    instructionsSent: 'Password reset instructions have been sent to the email address'
  },
  editAccount: {
    title: 'Edit your account information',
    submit: 'Save your information'
  },
  newPassword: {
    title: 'New password',
    submit: 'Save password',
    passwordWasReset: 'The password has been reset'
  }

};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  en: 'en',
  about: 'about',
  artworks: 'artworks',
  demo: 'demo-form',
  account: 'my-account',
  login: 'login',
  createAccount: 'account-creation',
  forgotPassword: 'forgot-password',
  resetPassword: 'new-password',
  editAccount: 'edit-account'
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  firstName: "First name",
  lastName: "Last name",
  male: "Male",
  female: "Female",
  favoriteColor: "Favorite color",
  employed: "Employed",
  notes: "Notes",
  email: 'Email address',
  password: 'Password',
  oldPassword: 'Current password',
  newPassword: 'New password',
  confirmPassword: 'Confirm password',
  confirmNewPassword: 'Confirm new password',

  validation: {
    emailRequired: 'An email address is required.',
    passwordsMustMatch: 'Entered passwords must match.'
  }
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseTranslations;
var parsesTranslations = {};

function recursiveParse(translations) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  Object.keys(translations).forEach(function (prop) {
    var nextTranslations = translations[prop];
    var nextKey = key ? key + '.' + prop : prop;
    if (nextTranslations instanceof Object) {
      recursiveParse(nextTranslations, nextKey);
    } else {
      parsesTranslations[nextKey] = nextTranslations;
    }
  });
}

function parseTranslations(translations) {
  parsesTranslations = {};
  recursiveParse(translations);
  return parsesTranslations;
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBreadcrumbs = __webpack_require__(43);

var _reactRouterDom = __webpack_require__(5);

var _o2webReactCore = __webpack_require__(4);

var _NavLayout = __webpack_require__(44);

var _NavLayout2 = _interopRequireDefault(_NavLayout);

var _Home = __webpack_require__(45);

var _Home2 = _interopRequireDefault(_Home);

var _About = __webpack_require__(46);

var _About2 = _interopRequireDefault(_About);

var _Artwork = __webpack_require__(47);

var _Artwork2 = _interopRequireDefault(_Artwork);

var _Artworks = __webpack_require__(60);

var _Artworks2 = _interopRequireDefault(_Artworks);

var _Demo = __webpack_require__(61);

var _Demo2 = _interopRequireDefault(_Demo);

var _AuthenticatedComponent = __webpack_require__(66);

var _AuthenticatedComponent2 = _interopRequireDefault(_AuthenticatedComponent);

var _SignIn = __webpack_require__(67);

var _SignIn2 = _interopRequireDefault(_SignIn);

var _SignUp = __webpack_require__(69);

var _SignUp2 = _interopRequireDefault(_SignUp);

var _MyAccount = __webpack_require__(70);

var _MyAccount2 = _interopRequireDefault(_MyAccount);

var _ForgotPassword = __webpack_require__(71);

var _ForgotPassword2 = _interopRequireDefault(_ForgotPassword);

var _ResetPassword = __webpack_require__(72);

var _ResetPassword2 = _interopRequireDefault(_ResetPassword);

var _EditAccount = __webpack_require__(73);

var _EditAccount2 = _interopRequireDefault(_EditAccount);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// assets
// import logo from '../../../assets/images/logo.svg';

function PrimaryLayout() {
  return _react2.default.createElement(
    'div',
    { className: 'primary-layout' },
    _react2.default.createElement(
      'header',
      { className: 'app-header' },
      _react2.default.createElement(_o2webReactCore.LanguageSwitcher, null),
      _react2.default.createElement(_NavLayout2.default, null),
      _react2.default.createElement(
        'h1',
        { className: 'app-title' },
        'React Vanille'
      )
    ),
    _react2.default.createElement(
      'main',
      null,
      _react2.default.createElement(_reactBreadcrumbs.Breadcrumbs, null),
      _react2.default.createElement(_o2webReactCore.Route, { exact: true, path: '/en', component: _Home2.default }),
      _react2.default.createElement(_o2webReactCore.CrumbRoute, { exact: true, path: '/en/about', title: 'about', component: _About2.default }),
      _react2.default.createElement(_o2webReactCore.CrumbRoute, {
        path: '/en/artworks',
        title: 'artworks',
        render: function render(_ref) {
          var match = _ref.match;
          return _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(_o2webReactCore.Route, { exact: true, path: match.url, component: _Artworks2.default }),
            _react2.default.createElement(_o2webReactCore.CrumbRoute, { path: match.url + '/:artworkId', title: 'artwork', component: _Artwork2.default })
          );
        }
      }),
      _react2.default.createElement(_o2webReactCore.CrumbRoute, { exact: true, path: '/en/demo', title: 'demo', component: _Demo2.default }),
      _react2.default.createElement(_o2webReactCore.CrumbRoute, { exact: true, path: '/en/login', title: 'login', component: (0, _AuthenticatedComponent2.default)(_SignIn2.default, false) }),
      _react2.default.createElement(_o2webReactCore.CrumbRoute, { exact: true, path: '/en/createAccount', title: 'createAccount', component: (0, _AuthenticatedComponent2.default)(_SignUp2.default, false) }),
      _react2.default.createElement(_o2webReactCore.CrumbRoute, { exact: true, path: '/en/forgotPassword', title: 'forgotPassword', component: (0, _AuthenticatedComponent2.default)(_ForgotPassword2.default, false) }),
      _react2.default.createElement(_o2webReactCore.CrumbRoute, { exact: true, path: '/en/resetPassword/:token', title: 'resetPassword', component: (0, _AuthenticatedComponent2.default)(_ResetPassword2.default, false) }),
      _react2.default.createElement(_o2webReactCore.CrumbRoute, {
        path: '/en/account',
        title: 'account',
        render: function render(_ref2) {
          var match = _ref2.match,
              path = _ref2.path;
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_o2webReactCore.Route, { exact: true, path: match.url, component: (0, _AuthenticatedComponent2.default)(_MyAccount2.default) }),
            _react2.default.createElement(_o2webReactCore.CrumbRoute, { path: path + '/editAccount', title: 'editAccount', component: (0, _AuthenticatedComponent2.default)(_EditAccount2.default) })
          );
        }
      })
    )
  );
}

exports.default = PrimaryLayout;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("react-breadcrumbs");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _o2webReactCore = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NavLayout(props, _ref) {
  var t = _ref.t;

  return _react2.default.createElement(
    'nav',
    null,
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _o2webReactCore.NavLink,
          { to: '/en' },
          t('nav.home')
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _o2webReactCore.NavLink,
          { to: '/en/about' },
          t('nav.about')
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _o2webReactCore.NavLink,
          { to: '/en/artworks' },
          t('nav.artworks')
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _o2webReactCore.NavLink,
          { to: '/en/demo' },
          t('nav.form_demo')
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _o2webReactCore.NavLink,
          { to: '/en/account' },
          t('nav.account')
        )
      )
    )
  );
}

// components
// libs


NavLayout.contextTypes = {
  t: _propTypes2.default.func
};

exports.default = NavLayout;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Home(props, _ref) {
  var t = _ref.t;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        'title',
        null,
        'Homepage'
      ),
      _react2.default.createElement('meta', { name: 'description', content: 'Description - Homepage' }),
      _react2.default.createElement('meta', { property: 'og:title', content: 'Og - Homepage' }),
      _react2.default.createElement('meta', { name: 'og:description', content: 'OG - Homepage description' }),
      _react2.default.createElement('meta', { name: 'og:image', content: '' }),
      _react2.default.createElement('meta', { name: 'twitter:title', content: 'twitter - Homepage title' }),
      _react2.default.createElement('meta', { name: 'twitter:description', content: 'twitter - Homepage description' }),
      _react2.default.createElement('meta', { name: 'twitter:image', content: '' })
    ),
    _react2.default.createElement(
      'h2',
      null,
      t('pages.titles.home')
    )
  );
} // libs


Home.contextTypes = {
  t: _propTypes2.default.func
};

exports.default = Home;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function About(pros, _ref) {
  var t = _ref.t;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        'title',
        null,
        '\xC0 propos'
      ),
      _react2.default.createElement('meta', { name: 'description', content: 'Description - Page \xE0 propos' }),
      _react2.default.createElement('meta', { property: 'og:title', content: 'Og - \xC0 propos' }),
      _react2.default.createElement('meta', { name: 'og:description', content: 'OG - \xC0 propos description' }),
      _react2.default.createElement('meta', { name: 'og:image', content: '' }),
      _react2.default.createElement('meta', { name: 'twitter:title', content: 'twitter - \xC0 Propos title' }),
      _react2.default.createElement('meta', { name: 'twitter:description', content: 'twitter - \xC0 Propos description' }),
      _react2.default.createElement('meta', { name: 'twitter:image', content: '' })
    ),
    _react2.default.createElement(
      'h2',
      null,
      t('pages.titles.about')
    )
  );
} // libs


About.contextTypes = {
  t: _propTypes2.default.func
};

exports.default = About;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(2);

var _index = __webpack_require__(14);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // libs


// actions


var propTypes = {
  fetchArtwork: _propTypes2.default.func.isRequired,
  artwork: _propTypes2.default.object.isRequired,
  match: _propTypes2.default.object.isRequired
};

var Artwork = function (_Component) {
  _inherits(Artwork, _Component);

  function Artwork() {
    _classCallCheck(this, Artwork);

    return _possibleConstructorReturn(this, (Artwork.__proto__ || Object.getPrototypeOf(Artwork)).apply(this, arguments));
  }

  _createClass(Artwork, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          fetchArtwork = _props.fetchArtwork,
          artworkId = _props.match.params.artworkId;

      fetchArtwork({ id: artworkId });
    }
  }, {
    key: 'render',
    value: function render() {
      var name = this.props.artwork.name;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          name
        )
      );
    }
  }]);

  return Artwork;
}(_react.Component);

Artwork.propTypes = propTypes;
Artwork.defaultProps = {};


function mapStateToProps(state) {
  return {
    artwork: state.artwork.artwork
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, _index2.default)(Artwork);

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  fetchArtwork: "\n    query($id: ID!) {\n      artwork(id: $id) {\n        id\n        name\n        description\n      }\n    }\n  ",
  fetchArtworks: "\n    query($limit: Int) {\n      artworks(limit: $limit) {\n        artworks {\n          id\n          name\n          description\n        }\n      }\n    }\n  "
};

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(17);

var _reduxI18n = __webpack_require__(13);

var _reduxForm = __webpack_require__(3);

var _artwork = __webpack_require__(57);

var _artwork2 = _interopRequireDefault(_artwork);

var _artworks = __webpack_require__(58);

var _artworks2 = _interopRequireDefault(_artworks);

var _user = __webpack_require__(59);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// libs
var rootReducer = (0, _redux.combineReducers)({
  i18nState: _reduxI18n.i18nState,
  form: _reduxForm.reducer,
  artwork: _artwork2.default,
  artworks: _artworks2.default,
  user: _user2.default
});

exports.default = rootReducer;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _types2.default.FETCH_ARTWORK:
      return _extends({}, state, { loading: true });
    case _types2.default.FETCH_ARTWORK_SUCCESS:
      return _extends({}, state, { loading: false, artwork: action.payload.artwork });
    case _types2.default.FETCH_ARTWORK_FAIL:
      return _extends({}, state, { loading: false });
    default:
  }

  return state;
};

var _types = __webpack_require__(11);

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  loading: false,
  artwork: {}
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _types2.default.FETCH_ARTWORKS:
      return _extends({}, state, { loading: true });
    case _types2.default.FETCH_ARTWORKS_SUCCESS:
      return _extends({}, state, { loading: false, artworks: action.payload.artworks.artworks });
    case _types2.default.FETCH_ARTWORKS_FAIL:
      return _extends({}, state, { loading: false });
    default:
  }

  return state;
};

var _types = __webpack_require__(11);

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  loading: false,
  artworks: []
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _types2.default.VALIDATE_TOKEN:
      return _extends({}, state, { validatingToken: true });
    case _types2.default.VALIDATE_TOKEN_SUCCESS:
      return _extends({}, state, {
        data: action.payload.validateToken.user,
        validatingToken: false,
        authenticated: action.payload.validateToken.valid
      });
    case _types2.default.VALIDATE_TOKEN_FAIL:
      return _extends({}, state, { data: {}, authenticated: false, validatingToken: false });
    case _types2.default.VALIDATE_NO_TOKEN:
      return _extends({}, state, { validatingToken: false });
    case _types2.default.SIGN_IN:
      return _extends({}, state, { loading: true });
    case _types2.default.SIGN_IN_SUCCESS:
      return _extends({}, state, { data: action.payload.signIn.user, authenticated: true });
    case _types2.default.SIGN_IN_FAIL:
      return _extends({}, state, { data: {}, authenticated: false });
    case _types2.default.SIGN_UP:
      return _extends({}, state, { loading: true });
    case _types2.default.SIGN_UP_SUCCESS:
      return _extends({}, state, { data: action.payload.signUp.user, authenticated: true });
    case _types2.default.SIGN_UP_FAIL:
      return _extends({}, state, { data: {}, authenticated: false });
    case _types2.default.SIGN_OUT:
      return _extends({}, state, { data: {}, authenticated: false });
    default:
  }

  return state;
};

var _types = __webpack_require__(18);

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  validatingToken: true,
  loading: false,
  authenticated: false,
  data: {}
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(5);

var _index = __webpack_require__(14);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // libs


// actions


var propTypes = {
  fetchArtworks: _propTypes2.default.func.isRequired,
  artworks: _propTypes2.default.array.isRequired,
  match: _propTypes2.default.object.isRequired
};

var Artworks = function (_Component) {
  _inherits(Artworks, _Component);

  function Artworks() {
    _classCallCheck(this, Artworks);

    return _possibleConstructorReturn(this, (Artworks.__proto__ || Object.getPrototypeOf(Artworks)).apply(this, arguments));
  }

  _createClass(Artworks, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var fetchArtworks = this.props.fetchArtworks;

      fetchArtworks({ limit: 10 });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          artworks = _props.artworks,
          match = _props.match;


      return _react2.default.createElement(
        'ul',
        null,
        artworks.map(function (_ref) {
          var id = _ref.id,
              name = _ref.name;
          return _react2.default.createElement(
            'li',
            { key: id },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: match.url + '/' + id },
              name
            )
          );
        })
      );
    }
  }]);

  return Artworks;
}(_react.Component);

Artworks.propTypes = propTypes;
Artworks.defaultProps = {};


function mapStateToProps(state) {
  return {
    artworks: state.artworks.artworks
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, _index2.default)(Artworks);

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(3);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(2);

var _Input = __webpack_require__(6);

var _Input2 = _interopRequireDefault(_Input);

var _Select = __webpack_require__(62);

var _Select2 = _interopRequireDefault(_Select);

var _Radio = __webpack_require__(63);

var _Radio2 = _interopRequireDefault(_Radio);

var _Checkbox = __webpack_require__(64);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Textarea = __webpack_require__(65);

var _Textarea2 = _interopRequireDefault(_Textarea);

var _validate = __webpack_require__(7);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Styles
// import './Demo.scss';

var DemoForm = function (_Component) {
  _inherits(DemoForm, _Component);

  function DemoForm() {
    _classCallCheck(this, DemoForm);

    return _possibleConstructorReturn(this, (DemoForm.__proto__ || Object.getPrototypeOf(DemoForm)).apply(this, arguments));
  }

  _createClass(DemoForm, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          handleSubmit = _props.handleSubmit,
          pristine = _props.pristine,
          submitting = _props.submitting,
          reset = _props.reset;

      var submitForm = handleSubmit(DemoForm.handleFormSubmit);

      return _react2.default.createElement(
        'form',
        { onSubmit: submitForm, className: 'form--demo' },
        _react2.default.createElement(_reduxForm.Field, {
          name: 'firstName',
          component: _Input2.default,
          type: 'text',
          placeholder: 'Your name...'
        }),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'lastName',
          component: _Input2.default,
          type: 'text',
          placeholder: 'Your last name...'
        }),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'label',
            null,
            'Sex'
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_Radio2.default, {
              name: 'sex',
              component: 'input',
              value: 'male',
              label: 'male',
              type: 'radio'
            }),
            _react2.default.createElement(_Radio2.default, {
              name: 'sex',
              component: 'input',
              value: 'female',
              label: 'female',
              type: 'radio'
            })
          )
        ),
        _react2.default.createElement(
          _reduxForm.Field,
          {
            name: 'favoriteColor',
            component: _Select2.default
          },
          _react2.default.createElement('option', null),
          _react2.default.createElement(
            'option',
            { value: 'red' },
            'Red'
          ),
          _react2.default.createElement(
            'option',
            { value: 'green' },
            'Green'
          ),
          _react2.default.createElement(
            'option',
            { value: 'blue' },
            'Blue'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_Checkbox2.default, {
              name: 'employed',
              id: 'employed',
              component: 'input',
              type: 'checkbox'
            })
          )
        ),
        _react2.default.createElement(_reduxForm.Field, {
          name: 'notes',
          component: _Textarea2.default,
          placeholder: 'Enter text here...'
        }),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'button',
            { type: 'submit', disabled: pristine || submitting },
            'Submit'
          ),
          _react2.default.createElement(
            'button',
            { type: 'button', disabled: pristine || submitting, onClick: reset },
            'Clear Values'
          )
        )
      );
    }
  }], [{
    key: 'handleFormSubmit',
    value: function handleFormSubmit(values) {
      alert(JSON.stringify(values, null, 4));
    }
  }]);

  return DemoForm;
}(_react.Component);

DemoForm.propTypes = {
  handleSubmit: _propTypes2.default.func.isRequired,
  pristine: _propTypes2.default.bool.isRequired,
  submitting: _propTypes2.default.bool.isRequired,
  reset: _propTypes2.default.func.isRequired
};

function mapStateToProps() {
  return {
    initialValues: {
      sex: 'male',
      employed: true
    }
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)((0, _reduxForm.reduxForm)({
  form: 'demo',
  enableReinitialize: true,
  validate: _validate2.default
})(DemoForm));

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Styles
// import '../Fields.scss';
// import './Select.scss';

function Select(field, _ref) {
  var t = _ref.t;

  var originalError = field.meta.error;
  var errorTranslation = t('form.' + originalError);
  var error = errorTranslation === 'form.' + originalError ? originalError : errorTranslation;

  var showError = field.meta.touched && field.meta.error && !field.meta.disabled;

  return _react2.default.createElement(
    'div',
    { className: 'field' },
    _react2.default.createElement(
      'label',
      { className: 'field__label' },
      field.label ? t('form.' + field.label) : t('form.' + field.input.name)
    ),
    _react2.default.createElement(
      'select',
      _extends({}, field.input, { disabled: field.disabled, className: 'field__select' }),
      field.children
    ),
    showError && _react2.default.createElement(
      'span',
      { className: 'field__error' },
      error
    )
  );
}

Select.contextTypes = {
  t: _propTypes2.default.func
};

exports.default = Select;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxForm = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Styles
// import '../Fields.scss';
// import './Radio.scss';

var Radio = function Radio(field, _ref) {
  var t = _ref.t;
  return _react2.default.createElement(
    'div',
    { className: 'field' },
    _react2.default.createElement(
      'label',
      null,
      _react2.default.createElement(_reduxForm.Field, {
        name: field.name,
        type: 'radio',
        component: 'input',
        value: field.value,
        onChange: field.onChange,
        disabled: field.disabled,
        className: 'field__radio'
      }),
      _react2.default.createElement(
        'span',
        { className: 'field__radio__label' },
        field.label ? t('form.' + field.label) : t('form.' + field.name)
      )
    )
  );
};

Radio.contextTypes = {
  t: _propTypes2.default.func
};

exports.default = Radio;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxForm = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Styles
// import '../Fields.scss';
// import './Checkbox.scss';

var Checkbox = function Checkbox(field, _ref) {
  var t = _ref.t;
  return _react2.default.createElement(
    'div',
    { className: 'field' },
    _react2.default.createElement(
      'label',
      null,
      _react2.default.createElement(_reduxForm.Field, {
        name: field.name,
        type: 'checkbox',
        component: 'input',
        value: field.value,
        onChange: field.onChange,
        disabled: field.disabled,
        className: 'field__checkbox'
      }),
      _react2.default.createElement(
        'span',
        { className: 'field__checkbox__label' },
        field.label ? t('form.' + field.label) : t('form.' + field.name)
      )
    )
  );
};

Checkbox.contextTypes = {
  t: _propTypes2.default.func
};

exports.default = Checkbox;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Styles
// import '../Fields.scss';
// import './Textarea.scss';

function Textarea(field, _ref) {
  var t = _ref.t;

  var originalError = field.meta.error;
  var errorTranslation = t('form.' + originalError);
  var error = errorTranslation === 'form.' + originalError ? originalError : errorTranslation;

  var showError = field.meta.touched && field.meta.error && !field.meta.disabled;

  return _react2.default.createElement(
    'div',
    { className: 'field' },
    field.type,
    _react2.default.createElement(
      'label',
      null,
      _react2.default.createElement(
        'span',
        { className: 'field__label' },
        field.label ? t('form.' + field.label) : t('form.' + field.input.name)
      ),
      _react2.default.createElement('textarea', _extends({}, field.input, {
        className: 'field__textarea',
        disabled: field.disabled,
        onKeyPress: field.onKeyPress,
        placeholder: field.placeholder
      }))
    ),
    showError && _react2.default.createElement(
      'span',
      { className: 'field__error' },
      error
    )
  );
}

Textarea.contextTypes = {
  t: _propTypes2.default.func
};

exports.default = Textarea;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (ComposedComponent) {
  var authRequired = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var AuthenticatedComponent = function (_Component) {
    _inherits(AuthenticatedComponent, _Component);

    function AuthenticatedComponent() {
      _classCallCheck(this, AuthenticatedComponent);

      return _possibleConstructorReturn(this, (AuthenticatedComponent.__proto__ || Object.getPrototypeOf(AuthenticatedComponent)).apply(this, arguments));
    }

    _createClass(AuthenticatedComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        window.scrollTo(0, 0);
        this.validateLocation();
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.validateLocation();
      }
    }, {
      key: 'validateLocation',
      value: function validateLocation() {
        var _props = this.props,
            authenticated = _props.authenticated,
            history = _props.history,
            validatingToken = _props.validatingToken,
            pathname = _props.location.pathname;
        var t = this.context.t;


        if (!validatingToken) {
          var accountRoute = (0, _o2webReactCore.translateRoute)('/en/account', t);
          var signInRoute = (0, _o2webReactCore.translateRoute)('/en/login', t);

          // redirect to login if user is not authenticated
          if (authenticated && !authRequired && pathname !== accountRoute) {
            history.push(accountRoute);
          } else if (!authenticated && authRequired && pathname !== signInRoute) {
            history.push(signInRoute);
          }
        }
      }
    }, {
      key: 'canRenderComponent',
      value: function canRenderComponent() {
        var _props2 = this.props,
            authenticated = _props2.authenticated,
            validatingToken = _props2.validatingToken,
            pathname = _props2.location.pathname;
        var t = this.context.t;


        if (validatingToken) {
          return false;
        }

        var accountRoute = (0, _o2webReactCore.translateRoute)('/en/account', t);
        if (authenticated && !authRequired && pathname !== accountRoute) {
          return false;
        }

        var signInRoute = (0, _o2webReactCore.translateRoute)('/en/login', t);
        if (!authenticated && authRequired && pathname !== signInRoute) {
          return false;
        }

        return true;
      }
    }, {
      key: 'render',
      value: function render() {
        if (this.canRenderComponent()) {
          return _react2.default.createElement(ComposedComponent, null);
        }

        return null;
      }
    }]);

    return AuthenticatedComponent;
  }(_react.Component);

  AuthenticatedComponent.propTypes = {
    history: _propTypes2.default.object.isRequired,
    location: _propTypes2.default.object.isRequired,
    authenticated: _propTypes2.default.bool.isRequired,
    validatingToken: _propTypes2.default.bool.isRequired
  };
  AuthenticatedComponent.contextTypes = {
    t: _propTypes2.default.func
  };


  function mapStateToProps(state) {
    return {
      authenticated: state.user.authenticated,
      validatingToken: state.user.validatingToken
    };
  }

  return (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(AuthenticatedComponent));
};

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(5);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(2);

var _o2webReactCore = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libs

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(3);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(2);

var _o2webReactCore = __webpack_require__(4);

var _Input = __webpack_require__(6);

var _Input2 = _interopRequireDefault(_Input);

var _validate = __webpack_require__(7);

var _validate2 = _interopRequireDefault(_validate);

var _user = __webpack_require__(8);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libs


// Styles
// import './styles.scss';

// Login Form
var SignInForm = function (_Component) {
  _inherits(SignInForm, _Component);

  function SignInForm() {
    _classCallCheck(this, SignInForm);

    var _this = _possibleConstructorReturn(this, (SignInForm.__proto__ || Object.getPrototypeOf(SignInForm)).call(this));

    _this.handleFormSubmit = _this.handleFormSubmit.bind(_this);
    return _this;
  }

  _createClass(SignInForm, [{
    key: 'handleFormSubmit',
    value: function handleFormSubmit(values) {
      var signIn = this.props.signIn;

      signIn(values);
    }
  }, {
    key: 'render',
    value: function render() {
      var t = this.context.t;
      var _props = this.props,
          handleSubmit = _props.handleSubmit,
          pristine = _props.pristine,
          submitting = _props.submitting,
          error = _props.error;

      var submitForm = handleSubmit(this.handleFormSubmit);

      return _react2.default.createElement(
        'section',
        { className: 'section section--lined-background login-page' },
        _react2.default.createElement(
          'h1',
          { className: 'page__title', watermark: t('pages.login.title') },
          t('pages.login.title')
        ),
        _react2.default.createElement(
          'div',
          { className: 'columns columns--align-top' },
          _react2.default.createElement(
            'div',
            { className: 'columns__column columns__column--half login-form' },
            _react2.default.createElement(
              'form',
              { onSubmit: submitForm, className: 'form' },
              error && _react2.default.createElement(
                'div',
                { className: 'form-error' },
                error
              ),
              _react2.default.createElement(_reduxForm.Field, {
                name: 'email',
                component: _Input2.default,
                type: 'email',
                label: 'email'
              }),
              _react2.default.createElement(_reduxForm.Field, {
                name: 'password',
                component: _Input2.default,
                type: 'password',
                label: 'password'
              }),
              _react2.default.createElement(
                'div',
                { className: 'form__forgot-password-link' },
                _react2.default.createElement(
                  _o2webReactCore.NavLink,
                  { to: 'en/forgotPassword' },
                  t('pages.login.forgotPassword')
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form__actions' },
                _react2.default.createElement(
                  'button',
                  { className: 'form__submit', type: 'submit', disabled: pristine || submitting },
                  t('pages.login.submit')
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'columns__column columns__column--half create-account' },
            _react2.default.createElement(
              'h2',
              { className: 'section__subtitle create-account__title' },
              t('pages.login.subtitle')
            ),
            _react2.default.createElement(
              'p',
              { className: 'section__text create-account__text' },
              t('pages.login.text')
            ),
            _react2.default.createElement(
              'div',
              { className: 'create-account__button' },
              _react2.default.createElement(
                _o2webReactCore.NavLink,
                { to: 'en/createAccount' },
                t('pages.login.createAccount')
              )
            )
          )
        )
      );
    }
  }]);

  return SignInForm;
}(_react.Component);

SignInForm.propTypes = {
  handleSubmit: _propTypes2.default.func.isRequired,
  pristine: _propTypes2.default.bool.isRequired,
  submitting: _propTypes2.default.bool.isRequired,
  signIn: _propTypes2.default.func.isRequired,
  error: _propTypes2.default.string
};
SignInForm.defaultProps = {
  error: ''
};
SignInForm.contextTypes = {
  t: _propTypes2.default.func
};


function mapStateToProps() {
  return {
    initialValues: {}
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, _user2.default)((0, _reduxForm.reduxForm)({
  form: 'signIn',
  enableReinitialize: true,
  validate: _validate2.default
})(SignInForm));

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  signIn: "\n    mutation($email: String!, $password: String!) {\n      signIn(email: $email, password: $password) {\n        user {\n          email\n        }\n        errors {\n          field\n          message\n        }\n      }\n    }\n  ",
  signUp: "\n    mutation($email: String!, $password: String!, $passwordConfirmation: String!) {\n      signUp(email: $email, password: $password, passwordConfirmation: $passwordConfirmation) {\n        user {\n          email\n        }\n        errors {\n          field\n          message\n        }\n      }\n    }\n  ",
  forgotPassword: "\n    mutation($email: String!) {\n      forgotPassword(email: $email) {\n        valid\n      }\n    }\n  ",
  resetPassword: "\n    mutation($token: String!, $password: String!, $passwordConfirmation: String!) {\n      resetPassword(resetPasswordToken: $token, password: $password, passwordConfirmation: $passwordConfirmation) {\n        valid\n        errors {\n          field\n          message\n        }\n      }\n    }\n  ",
  updateAccount: "\n    mutation($currentPassword: String!, $password: String!, $passwordConfirmation: String!) {\n      updateAccount(currentPassword: $currentPassword, password: $password, passwordConfirmation: $passwordConfirmation) {\n        user {\n          email\n        }\n        errors {\n          field\n          message\n        }\n      }\n    }\n  ",
  validateToken: "\n    mutation {\n      validateToken {\n        valid\n        user {\n          email\n        }\n      }\n    }\n  "
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(3);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(2);

var _o2webReactCore = __webpack_require__(4);

var _Input = __webpack_require__(6);

var _Input2 = _interopRequireDefault(_Input);

var _validate = __webpack_require__(7);

var _validate2 = _interopRequireDefault(_validate);

var _user = __webpack_require__(8);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libs


// Styles
// import './styles.scss';

var SignUpForm = function (_Component) {
  _inherits(SignUpForm, _Component);

  function SignUpForm() {
    _classCallCheck(this, SignUpForm);

    var _this = _possibleConstructorReturn(this, (SignUpForm.__proto__ || Object.getPrototypeOf(SignUpForm)).call(this));

    _this.handleFormSubmit = _this.handleFormSubmit.bind(_this);
    return _this;
  }

  _createClass(SignUpForm, [{
    key: 'handleFormSubmit',
    value: function handleFormSubmit(values) {
      var signUp = this.props.signUp;

      signUp(values);
    }
  }, {
    key: 'render',
    value: function render() {
      var t = this.context.t;
      var _props = this.props,
          handleSubmit = _props.handleSubmit,
          pristine = _props.pristine,
          submitting = _props.submitting,
          error = _props.error;

      var submitForm = handleSubmit(this.handleFormSubmit);

      return _react2.default.createElement(
        'section',
        { className: 'section section--lined-background' },
        _react2.default.createElement(
          'div',
          { className: 'wrapper wrapper--narrow' },
          _react2.default.createElement(
            'h1',
            { className: 'page__title' },
            t('pages.createAccount.title')
          ),
          _react2.default.createElement(
            'form',
            { onSubmit: submitForm, className: 'form form--login' },
            error && _react2.default.createElement(
              'div',
              { className: 'form-error' },
              error
            ),
            _react2.default.createElement(_reduxForm.Field, {
              name: 'email',
              component: _Input2.default,
              type: 'email',
              label: 'email'
            }),
            _react2.default.createElement(_reduxForm.Field, {
              name: 'password',
              component: _Input2.default,
              type: 'password',
              label: 'password'
            }),
            _react2.default.createElement(_reduxForm.Field, {
              name: 'passwordConfirmation',
              component: _Input2.default,
              type: 'password',
              label: 'confirmPassword'
            }),
            _react2.default.createElement(
              'div',
              { className: 'form__actions' },
              _react2.default.createElement(
                'button',
                { className: 'form__submit', type: 'submit', disabled: pristine || submitting },
                t('pages.createAccount.submit')
              )
            )
          ),
          _react2.default.createElement(
            _o2webReactCore.NavLink,
            { to: 'en/login' },
            t('pages.login.submit')
          )
        )
      );
    }
  }]);

  return SignUpForm;
}(_react.Component);

SignUpForm.contextTypes = {
  t: _propTypes2.default.func
};
SignUpForm.propTypes = {
  handleSubmit: _propTypes2.default.func.isRequired,
  pristine: _propTypes2.default.bool.isRequired,
  submitting: _propTypes2.default.bool.isRequired,
  signUp: _propTypes2.default.func.isRequired,
  error: _propTypes2.default.string
};
SignUpForm.defaultProps = {
  error: ''
};


function mapStateToProps() {
  return {
    initialValues: {}
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, _user2.default)((0, _reduxForm.reduxForm)({
  form: 'signUp',
  enableReinitialize: true,
  validate: _validate2.default
})(SignUpForm));

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(5);

var _reactRedux = __webpack_require__(2);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _o2webReactCore = __webpack_require__(4);

var _user = __webpack_require__(8);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Styles
// import './styles.scss';

// libs
function MyAccount(_ref, _ref2) {
  var email = _ref.email,
      signOut = _ref.signOut;
  var t = _ref2.t;

  var userName = email.split('@').join('\u200B@');

  return _react2.default.createElement(
    'section',
    { className: 'my-account section section--lined-background' },
    _react2.default.createElement(
      'div',
      { className: 'wrapper wrapper--narrow' },
      _react2.default.createElement(
        'h1',
        { className: 'page__title my-account__name' },
        userName
      ),
      _react2.default.createElement(
        'div',
        { className: 'my-account__info' },
        _react2.default.createElement(
          'h2',
          { className: 'section__subtitle' },
          t('pages.account.userInfo')
        ),
        _react2.default.createElement(
          'dl',
          { className: 'info' },
          _react2.default.createElement(
            'dt',
            { className: 'info__label' },
            t('form.email')
          ),
          _react2.default.createElement(
            'dd',
            { className: 'info__data info__email' },
            email
          ),
          _react2.default.createElement(
            'dt',
            { className: 'info__label' },
            t('form.password')
          ),
          _react2.default.createElement(
            'dd',
            { className: 'info__data info__password' },
            '\u2022\u2022\u2022\u2022\u2022\u2022\u2022'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'my-account__actions' },
          _react2.default.createElement(
            'div',
            { className: 'my-account__action my-account__action--change-password' },
            _react2.default.createElement(
              _o2webReactCore.NavLink,
              { to: 'en/account/editAccount' },
              t('pages.account.editAccount')
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'my-account__action my-account__action--logout' },
            _react2.default.createElement(
              'button',
              { type: 'button', onClick: signOut },
              t('pages.account.logout')
            )
          )
        )
      )
    )
  );
}

// Actions


MyAccount.propTypes = {
  signOut: _propTypes2.default.func.isRequired,
  email: _propTypes2.default.string.isRequired
};

MyAccount.contextTypes = {
  t: _propTypes2.default.func
};

function mapStateToProps(state) {
  return {
    authenticated: state.user.authenticated,
    id: state.user.id,
    email: state.user.data.email
  };
}

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, _user2.default)(MyAccount));

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(5);

var _reduxForm = __webpack_require__(3);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(2);

var _o2webReactCore = __webpack_require__(4);

var _Input = __webpack_require__(6);

var _Input2 = _interopRequireDefault(_Input);

var _validate = __webpack_require__(7);

var _validate2 = _interopRequireDefault(_validate);

var _user = __webpack_require__(8);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libs


// Styles
// import './styles.scss';

var ForgotPasswordForm = function (_Component) {
  _inherits(ForgotPasswordForm, _Component);

  function ForgotPasswordForm() {
    _classCallCheck(this, ForgotPasswordForm);

    var _this = _possibleConstructorReturn(this, (ForgotPasswordForm.__proto__ || Object.getPrototypeOf(ForgotPasswordForm)).call(this));

    _this.state = { resetInstructionsSent: false };
    _this.handleFormSubmit = _this.handleFormSubmit.bind(_this);
    return _this;
  }

  _createClass(ForgotPasswordForm, [{
    key: 'handleFormSubmit',
    value: function handleFormSubmit(values) {
      var _this2 = this;

      var forgotPassword = this.props.forgotPassword;

      forgotPassword(values).then(function (data) {
        if (data && data.forgotPassword.valid) {
          _this2.setState({ resetInstructionsSent: true });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          handleSubmit = _props.handleSubmit,
          pristine = _props.pristine,
          submitting = _props.submitting;
      var resetInstructionsSent = this.state.resetInstructionsSent;
      var t = this.context.t;


      var submitForm = handleSubmit(this.handleFormSubmit);

      return _react2.default.createElement(
        'section',
        { className: 'section section--lined-background' },
        _react2.default.createElement(
          'div',
          { className: 'wrapper wrapper--narrow' },
          _react2.default.createElement(
            'h1',
            { className: 'page__title', watermark: t('pages.login.title') },
            t('pages.forgotPassword.title')
          ),
          resetInstructionsSent ? _react2.default.createElement(
            'p',
            null,
            t('pages.forgotPassword.instructionsSent')
          ) : _react2.default.createElement(
            'form',
            { onSubmit: submitForm, className: 'form form--login' },
            _react2.default.createElement(_reduxForm.Field, {
              name: 'email',
              component: _Input2.default,
              type: 'email',
              label: 'email'
            }),
            _react2.default.createElement(
              'div',
              { className: 'form__actions' },
              _react2.default.createElement(
                'button',
                { className: 'form__submit', type: 'submit', disabled: pristine || submitting },
                t('pages.forgotPassword.submit')
              )
            )
          ),
          _react2.default.createElement(
            'p',
            { className: 'section__text' },
            t('pages.forgotPassword.text')
          ),
          _react2.default.createElement(
            _o2webReactCore.NavLink,
            { to: 'en/login' },
            t('pages.login.submit')
          )
        )
      );
    }
  }]);

  return ForgotPasswordForm;
}(_react.Component);

ForgotPasswordForm.propTypes = {
  handleSubmit: _propTypes2.default.func.isRequired,
  pristine: _propTypes2.default.bool.isRequired,
  submitting: _propTypes2.default.bool.isRequired,
  forgotPassword: _propTypes2.default.func.isRequired
};
ForgotPasswordForm.contextTypes = {
  t: _propTypes2.default.func
};


ForgotPasswordForm.propTypes = {
  handleSubmit: _propTypes2.default.func.isRequired,
  pristine: _propTypes2.default.bool.isRequired,
  submitting: _propTypes2.default.bool.isRequired
};

function mapStateToProps() {
  return {
    initialValues: {}
  };
}

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, _user2.default)((0, _reduxForm.reduxForm)({
  form: 'forgotPassword',
  enableReinitialize: true,
  validate: _validate2.default
})(ForgotPasswordForm)));

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(3);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(5);

var _Input = __webpack_require__(6);

var _Input2 = _interopRequireDefault(_Input);

var _validate = __webpack_require__(7);

var _validate2 = _interopRequireDefault(_validate);

var _user = __webpack_require__(8);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libs


// Styles
// import './styles.scss';

var ResetPasswordForm = function (_Component) {
  _inherits(ResetPasswordForm, _Component);

  function ResetPasswordForm() {
    _classCallCheck(this, ResetPasswordForm);

    var _this = _possibleConstructorReturn(this, (ResetPasswordForm.__proto__ || Object.getPrototypeOf(ResetPasswordForm)).call(this));

    _this.state = { passwordWasReset: false };
    _this.handleFormSubmit = _this.handleFormSubmit.bind(_this);
    return _this;
  }

  _createClass(ResetPasswordForm, [{
    key: 'handleFormSubmit',
    value: function handleFormSubmit(values) {
      var _this2 = this;

      var _props = this.props,
          resetPassword = _props.resetPassword,
          token = _props.match.params.token;


      resetPassword(_extends({}, values, { token: token })).then(function (data) {
        if (data && data.resetPassword.valid) {
          _this2.setState({ passwordWasReset: true });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          handleSubmit = _props2.handleSubmit,
          pristine = _props2.pristine,
          submitting = _props2.submitting,
          error = _props2.error;
      var passwordWasReset = this.state.passwordWasReset;
      var t = this.context.t;

      var submitForm = handleSubmit(this.handleFormSubmit);

      return _react2.default.createElement(
        'section',
        { className: 'section section--lined-background' },
        _react2.default.createElement(
          'div',
          { className: 'wrapper wrapper--narrow' },
          _react2.default.createElement(
            'h1',
            { className: 'page__title', watermark: t('pages.newPassword.title') },
            t('pages.newPassword.title')
          ),
          passwordWasReset ? _react2.default.createElement(
            'p',
            null,
            t('pages.newPassword.passwordWasReset')
          ) : _react2.default.createElement(
            'form',
            { onSubmit: submitForm, className: 'form form--login' },
            error && _react2.default.createElement(
              'div',
              { className: 'form-error' },
              error
            ),
            _react2.default.createElement(_reduxForm.Field, {
              name: 'password',
              component: _Input2.default,
              type: 'password',
              label: 'newPassword'
            }),
            _react2.default.createElement(_reduxForm.Field, {
              name: 'passwordConfirmation',
              component: _Input2.default,
              type: 'password',
              label: 'confirmPassword'
            }),
            _react2.default.createElement(
              'div',
              { className: 'form__actions' },
              _react2.default.createElement(
                'button',
                { className: 'form__submit', type: 'submit', disabled: pristine || submitting },
                t('pages.newPassword.submit')
              )
            )
          )
        )
      );
    }
  }]);

  return ResetPasswordForm;
}(_react.Component);

ResetPasswordForm.propTypes = {
  handleSubmit: _propTypes2.default.func.isRequired,
  pristine: _propTypes2.default.bool.isRequired,
  submitting: _propTypes2.default.bool.isRequired,
  resetPassword: _propTypes2.default.func.isRequired,
  error: _propTypes2.default.string,
  match: _propTypes2.default.object.isRequired
};
ResetPasswordForm.defaultProps = {
  error: ''
};
ResetPasswordForm.contextTypes = {
  t: _propTypes2.default.func
};


function mapStateToProps() {
  return {
    initialValues: {}
  };
}

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, _user2.default)((0, _reduxForm.reduxForm)({
  form: 'resetPassword',
  enableReinitialize: true,
  validate: _validate2.default
}, mapStateToProps)(ResetPasswordForm)));

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(3);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(5);

var _o2webReactCore = __webpack_require__(4);

var _Input = __webpack_require__(6);

var _Input2 = _interopRequireDefault(_Input);

var _validate = __webpack_require__(7);

var _validate2 = _interopRequireDefault(_validate);

var _user = __webpack_require__(8);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libs


// Styles
// import './styles.scss';

var EditAccountForm = function (_Component) {
  _inherits(EditAccountForm, _Component);

  function EditAccountForm() {
    _classCallCheck(this, EditAccountForm);

    var _this = _possibleConstructorReturn(this, (EditAccountForm.__proto__ || Object.getPrototypeOf(EditAccountForm)).call(this));

    _this.handleFormSubmit = _this.handleFormSubmit.bind(_this);
    return _this;
  }

  _createClass(EditAccountForm, [{
    key: 'handleFormSubmit',
    value: function handleFormSubmit(values) {
      var _props = this.props,
          updateAccount = _props.updateAccount,
          history = _props.history;
      var t = this.context.t;


      updateAccount(values).then(function (data) {
        if (data && data.updateAccount.user) {
          history.push((0, _o2webReactCore.translateRoute)('/en/account', t));
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          handleSubmit = _props2.handleSubmit,
          pristine = _props2.pristine,
          submitting = _props2.submitting;
      var t = this.context.t;


      var submitForm = handleSubmit(this.handleFormSubmit);

      return _react2.default.createElement(
        'section',
        { className: 'section section--lined-background' },
        _react2.default.createElement(
          'div',
          { className: 'wrapper wrapper--narrow' },
          _react2.default.createElement(
            'h1',
            { className: 'page__title', watermark: t('pages.editAccount.title') },
            t('pages.editAccount.title')
          ),
          _react2.default.createElement(
            'form',
            { onSubmit: submitForm, className: 'form form--login' },
            _react2.default.createElement(_reduxForm.Field, {
              name: 'currentPassword',
              component: _Input2.default,
              type: 'password',
              label: 'oldPassword'
            }),
            _react2.default.createElement(_reduxForm.Field, {
              name: 'password',
              component: _Input2.default,
              type: 'password',
              label: 'newPassword'
            }),
            _react2.default.createElement(_reduxForm.Field, {
              name: 'passwordConfirmation',
              component: _Input2.default,
              type: 'password',
              label: 'confirmPassword'
            }),
            _react2.default.createElement(
              'div',
              { className: 'form__actions' },
              _react2.default.createElement(
                'button',
                { className: 'form__submit', type: 'submit', disabled: pristine || submitting },
                t('pages.editAccount.submit')
              )
            )
          )
        )
      );
    }
  }]);

  return EditAccountForm;
}(_react.Component);

EditAccountForm.propTypes = {
  handleSubmit: _propTypes2.default.func.isRequired,
  pristine: _propTypes2.default.bool.isRequired,
  submitting: _propTypes2.default.bool.isRequired,
  updateAccount: _propTypes2.default.func.isRequired,
  history: _propTypes2.default.object.isRequired
};
EditAccountForm.contextTypes = {
  t: _propTypes2.default.func
};


EditAccountForm.propTypes = {
  handleSubmit: _propTypes2.default.func.isRequired,
  pristine: _propTypes2.default.bool.isRequired,
  submitting: _propTypes2.default.bool.isRequired
};

function mapStateToProps() {
  return {
    initialValues: {}
  };
}

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, _user2.default)((0, _reduxForm.reduxForm)({
  form: 'updateAccount',
  enableReinitialize: true,
  validate: _validate2.default
})(EditAccountForm)));

/***/ })
/******/ ]);