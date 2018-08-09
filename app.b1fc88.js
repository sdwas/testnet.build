webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScrollBarWidth = exports.getPageOffset = exports.ignoreProps = exports.api = exports.localStorage = exports.constants = exports.request = exports.links = exports.web3 = exports.btc = undefined;

var _btc = __webpack_require__(505);

var _btc2 = _interopRequireDefault(_btc);

var _web = __webpack_require__(154);

var _web2 = _interopRequireDefault(_web);

var _links = __webpack_require__(704);

var _links2 = _interopRequireDefault(_links);

var _request = __webpack_require__(705);

var _request2 = _interopRequireDefault(_request);

var _constants = __webpack_require__(372);

var _constants2 = _interopRequireDefault(_constants);

var _localStorage = __webpack_require__(738);

var _localStorage2 = _interopRequireDefault(_localStorage);

var _api = __webpack_require__(740);

var _api2 = _interopRequireDefault(_api);

var _ignoreProps = __webpack_require__(790);

var _ignoreProps2 = _interopRequireDefault(_ignoreProps);

var _getPageOffset = __webpack_require__(793);

var _getPageOffset2 = _interopRequireDefault(_getPageOffset);

var _getScrollBarWidth = __webpack_require__(794);

var _getScrollBarWidth2 = _interopRequireDefault(_getScrollBarWidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Getters
exports.btc = _btc2.default;
exports.web3 = _web2.default;
exports.links = _links2.default;
exports.request = _request2.default;
exports.constants = _constants2.default;
exports.localStorage = _localStorage2.default;
exports.api = _api2.default;
exports.ignoreProps = _ignoreProps2.default;
exports.getPageOffset = _getPageOffset2.default;
exports.getScrollBarWidth = _getScrollBarWidth2.default;

// Methods

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modals = __webpack_require__(868);

var _modals2 = _interopRequireDefault(_modals);

var _loader = __webpack_require__(869);

var _loader2 = _interopRequireDefault(_loader);

var _notifications = __webpack_require__(870);

var _notifications2 = _interopRequireDefault(_notifications);

var _user = __webpack_require__(871);

var _user2 = _interopRequireDefault(_user);

var _feed = __webpack_require__(875);

var _feed2 = _interopRequireDefault(_feed);

var _core = __webpack_require__(876);

var _core2 = _interopRequireDefault(_core);

var _filter = __webpack_require__(877);

var _filter2 = _interopRequireDefault(_filter);

var _btc = __webpack_require__(878);

var _btc2 = _interopRequireDefault(_btc);

var _eth = __webpack_require__(879);

var _eth2 = _interopRequireDefault(_eth);

var _eos = __webpack_require__(883);

var _eos2 = _interopRequireDefault(_eos);

var _token = __webpack_require__(904);

var _token2 = _interopRequireDefault(_token);

var _nimiq = __webpack_require__(906);

var _nimiq2 = _interopRequireDefault(_nimiq);

var _api = __webpack_require__(908);

var _api2 = _interopRequireDefault(_api);

var _referral = __webpack_require__(417);

var _referral2 = _interopRequireDefault(_referral);

var _analytics = __webpack_require__(909);

var _analytics2 = _interopRequireDefault(_analytics);

var _ipfs = __webpack_require__(914);

var _ipfs2 = _interopRequireDefault(_ipfs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  filter: _filter2.default,
  modals: _modals2.default,
  loader: _loader2.default,
  notifications: _notifications2.default,
  user: _user2.default,
  core: _core2.default,
  btc: _btc2.default,
  eth: _eth2.default,
  token: _token2.default,
  nimiq: _nimiq2.default,
  eos: _eos2.default,
  feed: _feed2.default,
  analytics: _analytics2.default,
  referral: _referral2.default,
  ipfs: _ipfs2.default,
  api: _api2.default
};

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// resolve object in webpack
exports.default = {"propENV":"testnet.prod","paths":{},"referral":{"url":"https://wiki.swap.online/affiliate.php"},"publicPath":"https://testnet.swap.online/","http":{"host":"localhost","port":9001},"i18nDate":{"month":"long","day":"numeric","hour":"numeric","minute":"numeric"},"exchangeRates":{"swapeth":1,"ethswap":1,"swapnoxon":1,"noxonswap":1,"swapbtc":0.07,"btcswap":0.07,"etheth":1,"ethbtc":0.07,"btceth":14,"ethnoxon":1,"noxoneth":1,"btcnoxon":0.07,"noxonbtc":0.07},"env":"production","entry":"testnet","base":"https://testnet.swap.online/","services":{"web3":{"provider":"https://rinkeby.infura.io/JCnK5ifEPH9qcQkX0Ahl","rate":0.1,"gas":2000000,"gasPrice":"20000000000"},"eos":{"chainId":"038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca","httpEndpoint":"https://jungle.eosio.cr"}},"ipfs":{"swarm":"/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star","server":"discovery.libp2p.io"},"token":{"contract":"0xc87C2668F05803F60EF75b176eea0CCE80D0009C"},"eth":{"contract":"0x4356152f044e3a1ce1a57566b2e0bee57949c1b2"},"tokens":{"swap":{"address":"0xbaa3fa2ed111f3e8488c21861ea7b7dbb5a7b121","decimals":18},"noxon":{"address":"0x60c205722c6c797c725a996cf9cca11291f90749","decimals":0},"jot":{"address":"0x9070e2fDb61887c234D841c95D1709288EBbB9a0","decimals":18}},"apiAlternatives":{"bitpay":["https://testnet.y000r.world/insight-api","https://test-insight.bitpay.com/api"]},"link":{"bitpay":"https://test-insight.swap.online/insight","etherscan":"https://rinkeby.etherscan.io","eos":"http://jungle.cryptolions.io/#accountInfo"},"api":{"blocktrail":"https://api.blocktrail.com/v1/tBTC","bitpay":"https://test-insight.swap.online/insight-api","etherscan":"https://rinkeby.etherscan.io/api"},"apiKeys":{"etherscan":"RHHFPNMAZMD6I4ZWBZBF6FA11CMW9AXZNM","blocktrail":"1835368c0fa8e71907ca26f3c978ab742a7db42e"}};

/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.util = exports.constants = exports.Events = exports.Collection = exports.SwapInterface = exports.ServiceInterface = undefined;

var _SwapApp = __webpack_require__(394);

var _SwapApp2 = _interopRequireDefault(_SwapApp);

var _ServiceInterface = __webpack_require__(833);

var _ServiceInterface2 = _interopRequireDefault(_ServiceInterface);

var _SwapInterface = __webpack_require__(834);

var _SwapInterface2 = _interopRequireDefault(_SwapInterface);

var _Collection = __webpack_require__(835);

var _Collection2 = _interopRequireDefault(_Collection);

var _Events = __webpack_require__(836);

var _Events2 = _interopRequireDefault(_Events);

var _constants = __webpack_require__(251);

var _constants2 = _interopRequireDefault(_constants);

var _util = __webpack_require__(837);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SwapApp2.default;
exports.ServiceInterface = _ServiceInterface2.default;
exports.SwapInterface = _SwapInterface2.default;
exports.Collection = _Collection2.default;
exports.Events = _Events2.default;
exports.constants = _constants2.default;
exports.util = _util2.default;

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redaction = __webpack_require__(25);

var _reducers = __webpack_require__(384);

var _reducers2 = _interopRequireDefault(_reducers);

var _store = __webpack_require__(235);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redaction.wrapReducers)(_reducers2.default, _store2.default.dispatch);

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(44);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Button = __webpack_require__(1040);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(props) {
  var children = props.children,
      className = props.className,
      fullWidth = props.fullWidth,
      brand = props.brand,
      green = props.green,
      white = props.white,
      gray = props.gray,
      disabled = props.disabled,
      onClick = props.onClick,
      _props$id = props.id,
      id = _props$id === undefined ? '' : _props$id;


  var styleName = (0, _classnames2.default)('button', {
    'fullWidth': fullWidth,
    'brand': brand,
    'green': green,
    'white': white,
    'gray': gray,
    'disabled': disabled
  });

  return _react2.default.createElement(
    'div',
    {
      styleName: styleName,
      className: className,
      role: 'button',
      onClick: onClick,
      id: id,
      disabled: disabled
    },
    children
  );
};

Button.propTypes = {
  children: _propTypes2.default.any,
  className: _propTypes2.default.string,
  fullWidth: _propTypes2.default.bool,
  brand: _propTypes2.default.bool,
  green: _propTypes2.default.bool,
  white: _propTypes2.default.bool,
  gray: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  onClick: _propTypes2.default.func
};

exports.default = (0, _reactCssModules2.default)(Button, _Button2.default, { allowMultiple: true });

/***/ }),
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getState = exports.reducers = undefined;

var _store = __webpack_require__(235);

var _store2 = _interopRequireDefault(_store);

var _reducers = __webpack_require__(27);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getState = function getState() {
  return _store2.default.getState();
};

exports.reducers = _reducers2.default;
exports.getState = getState;

/***/ }),
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = exports.TextArea = exports.Radio = exports.Checkbox = exports.NumberInput = exports.Input = undefined;

var _keys = __webpack_require__(46);

var _keys2 = _interopRequireDefault(_keys);

var _toConsumableArray2 = __webpack_require__(104);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _tags = __webpack_require__(1104);

Object.defineProperty(exports, 'Input', {
  enumerable: true,
  get: function get() {
    return _tags.Input;
  }
});
Object.defineProperty(exports, 'NumberInput', {
  enumerable: true,
  get: function get() {
    return _tags.NumberInput;
  }
});
Object.defineProperty(exports, 'Checkbox', {
  enumerable: true,
  get: function get() {
    return _tags.Checkbox;
  }
});
Object.defineProperty(exports, 'Radio', {
  enumerable: true,
  get: function get() {
    return _tags.Radio;
  }
});
Object.defineProperty(exports, 'TextArea', {
  enumerable: true,
  get: function get() {
    return _tags.TextArea;
  }
});
Object.defineProperty(exports, 'Select', {
  enumerable: true,
  get: function get() {
    return _tags.Select;
  }
});

var _valuelink = __webpack_require__(1107);

var _valuelink2 = _interopRequireDefault(_valuelink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this.state = { foo: '', bar: '' }  =>   Link.all(this, 'foo', 'bar')
_valuelink2.default.allFields = function (component) {
  return _valuelink2.default.all.apply(_valuelink2.default, [component].concat((0, _toConsumableArray3.default)((0, _keys2.default)(component.state))));
};

exports.default = _valuelink2.default;

/***/ }),
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithdrawButton = exports.TimerButton = exports.RemoveButton = exports.ReloadButton = exports.Flip = exports.ButtonInRow = exports.Button = undefined;

var _Button = __webpack_require__(33);

var _Button2 = _interopRequireDefault(_Button);

var _ButtonsInRow = __webpack_require__(452);

var _ButtonsInRow2 = _interopRequireDefault(_ButtonsInRow);

var _Flip = __webpack_require__(451);

var _Flip2 = _interopRequireDefault(_Flip);

var _ReloadButton = __webpack_require__(453);

var _ReloadButton2 = _interopRequireDefault(_ReloadButton);

var _RemoveButton = __webpack_require__(449);

var _RemoveButton2 = _interopRequireDefault(_RemoveButton);

var _TimerButton = __webpack_require__(142);

var _TimerButton2 = _interopRequireDefault(_TimerButton);

var _WithdrawButton = __webpack_require__(454);

var _WithdrawButton2 = _interopRequireDefault(_WithdrawButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Button = _Button2.default;
exports.ButtonInRow = _ButtonsInRow2.default;
exports.Flip = _Flip2.default;
exports.ReloadButton = _ReloadButton2.default;
exports.RemoveButton = _RemoveButton2.default;
exports.TimerButton = _TimerButton2.default;
exports.WithdrawButton = _WithdrawButton2.default;

/***/ }),
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _SubTitle = __webpack_require__(1050);

var _SubTitle2 = _interopRequireDefault(_SubTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubTitle = function SubTitle(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { styleName: 'subTitle' },
    children
  );
};

exports.default = (0, _reactCssModules2.default)(SubTitle, _SubTitle2.default);

/***/ }),
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flow = undefined;

var _Swap = __webpack_require__(813);

var _Swap2 = _interopRequireDefault(_Swap);

var _Flow = __webpack_require__(844);

var _Flow2 = _interopRequireDefault(_Flow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Swap2.default;
exports.Flow = _Flow2.default;

/***/ }),
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Timer = __webpack_require__(1042);

var _Timer2 = _interopRequireDefault(_Timer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Timer = (_dec = (0, _reactCssModules2.default)(_Timer2.default), _dec(_class = (_temp = _class2 = function (_React$Component) {
  (0, _inherits3.default)(Timer, _React$Component);

  function Timer(_ref) {
    var lockTime = _ref.lockTime;
    (0, _classCallCheck3.default)(this, Timer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Timer.__proto__ || (0, _getPrototypeOf2.default)(Timer)).call(this));

    _this.timer = null;

    _this.tick = function () {
      var timeLeft = _this.state.timeLeft;

      var newTimeLeft = timeLeft - 1000;

      if (newTimeLeft <= 0) {
        _this.props.enabledButton();
      } else {
        _this.timer = setTimeout(_this.tick, 1000);
        _this.setState({
          timeLeft: newTimeLeft
        });
      }
    };

    _this.state = {
      lockTime: lockTime,
      timeLeft: null
    };
    return _this;
  }

  (0, _createClass3.default)(Timer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.tick();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var lockTime = this.state.lockTime;

      console.log(lockTime);

      var dateNow = new Date().getTime();
      var timeLeft = lockTime - dateNow;

      this.setState({
        timeLeft: timeLeft
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var timeLeft = this.state.timeLeft;

      var min = Math.ceil(timeLeft / 1000 / 60);

      return _react2.default.createElement(
        'div',
        { styleName: 'timer' },
        min > 0 ? min + ' minute left for refund' : 'refund ready'
      );
    }
  }]);
  return Timer;
}(_react2.default.Component), _class2.propTypes = {
  lockTime: _propTypes2.default.number
}, _temp)) || _class);
exports.default = Timer;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _InlineLoader = __webpack_require__(1043);

var _InlineLoader2 = _interopRequireDefault(_InlineLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InlineLoader = function InlineLoader() {
  return _react2.default.createElement(
    'div',
    { styleName: 'ellipsis' },
    _react2.default.createElement('div', null),
    _react2.default.createElement('div', null),
    _react2.default.createElement('div', null),
    _react2.default.createElement('div', null)
  );
};

exports.default = (0, _reactCssModules2.default)(InlineLoader, _InlineLoader2.default);

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp, _initialiseProps;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = __webpack_require__(33);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimerButton = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(TimerButton, _Component);

  function TimerButton(_ref) {
    var timeLeft = _ref.timeLeft;
    (0, _classCallCheck3.default)(this, TimerButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TimerButton.__proto__ || (0, _getPrototypeOf2.default)(TimerButton)).call(this));

    _initialiseProps.call(_this);

    _this.state = {
      timeLeft: timeLeft
    };
    return _this;
  }

  (0, _createClass3.default)(TimerButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.tick();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
    }
  }, {
    key: 'render',
    value: function render() {
      var timeLeft = this.state.timeLeft;
      var _props = this.props,
          children = _props.children,
          isButton = _props.isButton;


      return isButton ? _react2.default.createElement(
        _Button2.default,
        { brand: true, onClick: this.handleClick },
        children,
        ' ',
        timeLeft,
        's'
      ) : '' + timeLeft;
    }
  }]);
  return TimerButton;
}(_react.Component), _class.propTypes = {
  timeLeft: _propTypes2.default.number, // seconds
  onClick: _propTypes2.default.func.isRequired
}, _class.defaultProps = {
  timeLeft: 10,
  isButton: true
}, _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.timer = null;

  this.tick = function () {
    var timeLeft = _this2.state.timeLeft;

    var newTimeLeft = timeLeft - 1;

    if (newTimeLeft <= 0) {
      _this2.handleClick();
    } else {
      _this2.timer = setTimeout(_this2.tick, 1000);
      _this2.setState({
        timeLeft: newTimeLeft
      });
    }
  };

  this.handleClick = function () {
    var onClick = _this2.props.onClick;


    clearTimeout(_this2.timer);
    onClick();
  };
}, _temp);
exports.default = TimerButton;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _PageHeadline = __webpack_require__(1049);

var _PageHeadline2 = _interopRequireDefault(_PageHeadline);

var _Title = __webpack_require__(265);

var _Title2 = _interopRequireDefault(_Title);

var _SubTitle = __webpack_require__(109);

var _SubTitle2 = _interopRequireDefault(_SubTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageHeadline = function PageHeadline(_ref) {
  var children = _ref.children,
      title = _ref.title,
      subTitle = _ref.subTitle;
  return _react2.default.createElement(
    'div',
    { styleName: 'headline' },
    children || _react2.default.createElement(
      _react.Fragment,
      null,
      title && _react2.default.createElement(
        _Title2.default,
        null,
        title
      ),
      subTitle && _react2.default.createElement(
        _SubTitle2.default,
        null,
        subTitle
      )
    )
  );
};

PageHeadline.propTypes = {
  title: _propTypes2.default.string,
  subTitle: _propTypes2.default.string
};

exports.default = (0, _reactCssModules2.default)(PageHeadline, _PageHeadline2.default);

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Table = __webpack_require__(1067);

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Table = function Table(_ref) {
  var titles = _ref.titles,
      rows = _ref.rows,
      rowRender = _ref.rowRender,
      textIfEmpty = _ref.textIfEmpty,
      isLoading = _ref.isLoading,
      loadingText = _ref.loadingText;
  return _react2.default.createElement(
    'table',
    { styleName: 'table' },
    _react2.default.createElement(
      'thead',
      null,
      _react2.default.createElement(
        'tr',
        null,
        titles.map(function (title, index) {
          return _react2.default.createElement(
            'th',
            { key: index },
            title
          );
        })
      )
    ),
    _react2.default.createElement(
      'tbody',
      null,
      isLoading && _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          { styleName: 'color' },
          loadingText
        )
      ),
      !isLoading && !rows.length && _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          { styleName: 'color' },
          textIfEmpty
        )
      ),
      !isLoading && !!rows.length && rows.map(function (row, rowIndex) {
        return typeof rowRender === 'function' && rowRender(row, rowIndex);
      })
    )
  );
};

Table.defaultProps = {
  textIfEmpty: 'The table is empty',
  loadingText: 'Loading...'
};

exports.default = (0, _reactCssModules2.default)(Table, _Table2.default);

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = exports.Input = exports.FieldLabel = undefined;

var _FieldLabel = __webpack_require__(187);

var _FieldLabel2 = _interopRequireDefault(_FieldLabel);

var _Input = __webpack_require__(188);

var _Input2 = _interopRequireDefault(_Input);

var _TextArea = __webpack_require__(455);

var _TextArea2 = _interopRequireDefault(_TextArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.FieldLabel = _FieldLabel2.default;
exports.Input = _Input2.default;
exports.TextArea = _TextArea2.default;

/***/ }),
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = __webpack_require__(559);

var _web2 = _interopRequireDefault(_web);

var _appConfig = __webpack_require__(18);

var _appConfig2 = _interopRequireDefault(_appConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = new _web2.default(new _web2.default.providers.HttpProvider(_appConfig2.default.services.web3.provider));

exports.default = web3;

/***/ }),
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Coins = __webpack_require__(1053);

var _Coins2 = _interopRequireDefault(_Coins);

var _Coin = __webpack_require__(266);

var _Coin2 = _interopRequireDefault(_Coin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Coins = function Coins(_ref) {
  var className = _ref.className,
      names = _ref.names,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 40 : _ref$size;
  return _react2.default.createElement(
    'div',
    { styleName: 'coins', className: className },
    _react2.default.createElement(_Coin2.default, { name: names[0], size: size }),
    _react2.default.createElement(_Coin2.default, { name: names[1], size: size })
  );
};

exports.default = (0, _reactCssModules2.default)(Coins, _Coins2.default);

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(51);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Href = __webpack_require__(1096);

var _Href2 = _interopRequireDefault(_Href);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Href = function Href(_ref) {
  var children = _ref.children,
      to = _ref.to,
      redirect = _ref.redirect,
      tab = _ref.tab;

  if (to) {
    return _react2.default.createElement(
      _reactRouterDom.NavLink,
      { styleName: 'link' },
      children
    );
  }

  return _react2.default.createElement(
    'a',
    { styleName: 'link', href: redirect || tab, target: tab ? '_blank' : null },
    children
  );
};

exports.default = (0, _reactCssModules2.default)(Href, _Href2.default);

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(44);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _FieldLabel = __webpack_require__(1103);

var _FieldLabel2 = _interopRequireDefault(_FieldLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FieldLabel = function FieldLabel(_ref) {
  var children = _ref.children,
      inRow = _ref.inRow;
  return _react2.default.createElement(
    'div',
    { styleName: (0, _classnames2.default)('label', { 'inRow': inRow }) },
    children
  );
};

exports.default = (0, _reactCssModules2.default)(FieldLabel, _FieldLabel2.default, { allowMultiple: true });

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(55);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _swValuelink = __webpack_require__(81);

var _classnames = __webpack_require__(44);

var _classnames2 = _interopRequireDefault(_classnames);

var _helpers = __webpack_require__(11);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Input = __webpack_require__(1110);

var _Input2 = _interopRequireDefault(_Input);

var _TextArea = __webpack_require__(455);

var _TextArea2 = _interopRequireDefault(_TextArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = (_dec = (0, _reactCssModules2.default)(_Input2.default, { allowMultiple: true }), _dec(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(Input, _Component);

  function Input() {
    (0, _classCallCheck3.default)(this, Input);
    return (0, _possibleConstructorReturn3.default)(this, (Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).apply(this, arguments));
  }

  (0, _createClass3.default)(Input, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          inputContainerClassName = _props.inputContainerClassName,
          inputClassName = _props.inputClassName,
          error = _props.valueLink.error,
          valueLink = _props.valueLink,
          multiline = _props.multiline,
          focusOnInit = _props.focusOnInit,
          disabled = _props.disabled,
          readOnly = _props.readOnly,
          type = _props.type,
          rest = (0, _objectWithoutProperties3.default)(_props, ['className', 'inputContainerClassName', 'inputClassName', 'valueLink', 'valueLink', 'multiline', 'focusOnInit', 'disabled', 'readOnly', 'type']);


      var inputContainerStyleName = (0, _classnames2.default)('inputContainer', {
        'withError': error
      });

      return _react2.default.createElement(
        'div',
        { styleName: 'root', className: className },
        _react2.default.createElement(
          'div',
          { styleName: inputContainerStyleName, className: inputContainerClassName },
          _react2.default.createElement(multiline ? _TextArea2.default : _swValuelink.Input, (0, _assign2.default)({}, (0, _helpers.ignoreProps)(rest, 'styles'), {
            styleName: 'input',
            className: inputClassName,
            valueLink: valueLink,
            type: type,
            disabled: disabled || readOnly,
            autoFocus: !!focusOnInit,
            dir: 'auto',
            autoComplete: 'off'
          }))
        ),
        Boolean(error) && _react2.default.createElement(
          'div',
          { styleName: 'error' },
          error
        )
      );
    }
  }]);
  return Input;
}(_react.Component), _class2.propTypes = {
  className: _propTypes2.default.string,
  rootClassName: _propTypes2.default.string,
  inputClassName: _propTypes2.default.string,
  placeholder: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  type: _propTypes2.default.string,
  valueLink: _propTypes2.default.object.isRequired,
  focusOnInit: _propTypes2.default.bool,
  multiline: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  readOnly: _propTypes2.default.bool,
  required: _propTypes2.default.bool,
  icon: _propTypes2.default.bool,
  intl: _propTypes2.default.object
}, _class2.defaultProps = {
  focusOnInit: false,
  multiline: false,
  disabled: false,
  readOnly: false,
  required: false,
  type: 'text'
}, _temp)) || _class);
exports.default = Input;

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SwapAuth = __webpack_require__(269);

var _SwapAuth2 = _interopRequireDefault(_SwapAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SwapAuth2.default;
module.exports = exports['default'];

/***/ }),
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(68);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(55);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(44);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _WidthContainer = __webpack_require__(1207);

var _WidthContainer2 = _interopRequireDefault(_WidthContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WidthContainer = function WidthContainer(_ref) {
  var children = _ref.children,
      className = _ref.className,
      main = _ref.main,
      fullHeight = _ref.fullHeight,
      relative = _ref.relative,
      contentCentering = _ref.contentCentering,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['children', 'className', 'main', 'fullHeight', 'relative', 'contentCentering']);

  var containerStyleName = (0, _classnames2.default)('widthContainer', {
    'main': main,
    'fullHeight': fullHeight,
    'centeringContent': contentCentering
  });

  if (fullHeight || relative) {
    var containerInStyleName = (0, _classnames2.default)('widthContainerIn', {
      'fullHeight': fullHeight,
      'relative': relative
    });

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({ styleName: containerStyleName, className: className }, rest),
      _react2.default.createElement(
        'div',
        { styleName: containerInStyleName },
        children
      )
    );
  }

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ styleName: containerStyleName, className: className }, rest),
    children
  );
};

WidthContainer.propTypes = {
  children: _propTypes2.default.node,
  main: _propTypes2.default.bool, // uses for main container between header and footer with vertical paddings
  fullHeight: _propTypes2.default.bool,
  relative: _propTypes2.default.bool,
  contentCentering: _propTypes2.default.bool,
  className: _propTypes2.default.string
};

exports.default = (0, _reactCssModules2.default)(WidthContainer, _WidthContainer2.default, { allowMultiple: true });

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(12);

var _actions2 = _interopRequireDefault(_actions);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(44);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Modal = __webpack_require__(1217);

var _Modal2 = _interopRequireDefault(_Modal);

var _WidthContainer = __webpack_require__(193);

var _WidthContainer2 = _interopRequireDefault(_WidthContainer);

var _CloseIcon = __webpack_require__(1218);

var _CloseIcon2 = _interopRequireDefault(_CloseIcon);

var _Overlay = __webpack_require__(471);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Center = __webpack_require__(472);

var _Center2 = _interopRequireDefault(_Center);

var _Logo = __webpack_require__(469);

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = (_dec = (0, _reactCssModules2.default)(_Modal2.default, { allowMultiple: true }), _dec(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.close = function () {
      var _this$props = _this.props,
          name = _this$props.name,
          data = _this$props.data,
          onClose = _this$props.onClose,
          disableClose = _this$props.disableClose;


      if (name === 'OfferModal') {
        _actions2.default.analytics.dataEvent('orderbook-addoffer-click-exit-button');
      }

      if (!disableClose) {
        _actions2.default.modals.close(name);

        if (typeof onClose === 'function') {
          onClose();
        }

        if (typeof data.onClose === 'function') {
          data.onClose();
        }
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Modal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          whiteLogo = _props.whiteLogo,
          title = _props.title,
          showCloseButton = _props.showCloseButton,
          disableClose = _props.disableClose,
          children = _props.children,
          titleUppercase = _props.titleUppercase;


      var titleStyleName = (0, _classnames2.default)('title', {
        'uppercase': titleUppercase
      });

      return _react2.default.createElement(
        _Overlay2.default,
        null,
        _react2.default.createElement(
          'div',
          { styleName: 'modal', className: className },
          Boolean(title || showCloseButton) && _react2.default.createElement(
            'div',
            { styleName: 'header' },
            _react2.default.createElement(
              _WidthContainer2.default,
              { styleName: 'headerContent' },
              _react2.default.createElement(_Logo2.default, { colored: !whiteLogo }),
              _react2.default.createElement(
                'div',
                { styleName: titleStyleName, role: 'title' },
                title
              ),
              showCloseButton && !disableClose && _react2.default.createElement(_CloseIcon2.default, { styleName: 'closeButton', onClick: this.close, 'data-testid': 'modalCloseIcon' })
            )
          ),
          _react2.default.createElement(
            'div',
            { styleName: 'contentContainer' },
            _react2.default.createElement(
              _Center2.default,
              { scrollable: true },
              _react2.default.createElement(
                'div',
                { styleName: 'content' },
                children
              )
            )
          )
        )
      );
    }
  }]);
  return Modal;
}(_react.Component), _class2.propTypes = {
  children: _propTypes2.default.node,
  name: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.any,
  showCloseButton: _propTypes2.default.bool,
  data: _propTypes2.default.object,
  disableClose: _propTypes2.default.bool,
  titleUppercase: _propTypes2.default.bool,
  onClose: _propTypes2.default.func
}, _class2.defaultProps = {
  data: {},
  whiteLogo: false,
  showCloseButton: true,
  fullWidth: false,
  disableClose: false,
  disableCloseOverlay: false,
  uppercase: false
}, _temp2)) || _class);
exports.default = Modal;

/***/ }),
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.history = undefined;

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

var _reactRouterRedux = __webpack_require__(373);

var _history = __webpack_require__(59);

var _redaction = __webpack_require__(25);

var _reduxLogger = __webpack_require__(774);

var _reducers = __webpack_require__(384);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = exports.history = (0, _history.createBrowserHistory)();
var middleware = (0, _reactRouterRedux.routerMiddleware)(history);
var initialState = {}; // (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : {}


var store = (0, _redaction.createStore)({
  reducers: (0, _assign2.default)({}, (0, _redaction.combineReducers)(_reducers2.default)),
  middleware: [middleware].concat( true ? [] : [(0, _reduxLogger.createLogger)()]),
  initialState: initialState
});

exports.default = store;

/***/ }),
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _COINS = __webpack_require__(827);

var _COINS2 = _interopRequireDefault(_COINS);

var _ENV = __webpack_require__(828);

var _ENV2 = _interopRequireDefault(_ENV);

var _SERVICES = __webpack_require__(829);

var _SERVICES2 = _interopRequireDefault(_SERVICES);

var _NETWORKS = __webpack_require__(830);

var _NETWORKS2 = _interopRequireDefault(_NETWORKS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  COINS: _COINS2.default,
  ENV: _ENV2.default,
  SERVICES: _SERVICES2.default,
  NETWORKS: _NETWORKS2.default
};
module.exports = exports['default'];

/***/ }),
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Title = __webpack_require__(1048);

var _Title2 = _interopRequireDefault(_Title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Title = function Title(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { styleName: 'title' },
    children
  );
};

exports.default = (0, _reactCssModules2.default)(Title, _Title2.default);

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Coin = __webpack_require__(1054);

var _Coin2 = _interopRequireDefault(_Coin);

var _CurrencyIcon = __webpack_require__(448);

var _CurrencyIcon2 = _interopRequireDefault(_CurrencyIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Coin = function Coin(_ref) {
  var className = _ref.className,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 40 : _ref$size,
      name = _ref.name;

  var style = {
    width: size ? size + 'px' : null
  };

  var iconProps = {
    name: name.toLowerCase()
  };

  var isIconExist = _CurrencyIcon.iconNames.includes(name.toLowerCase());

  if (isIconExist) {
    iconProps = (0, _assign2.default)({}, iconProps, {
      styleName: 'icon'
    });
  } else {
    iconProps = (0, _assign2.default)({}, iconProps, {
      styleName: 'letter',
      style: {
        lineHeight: size + 'px',
        fontSize: size / 2 + 'px'
      }
    });
  }

  return _react2.default.createElement(
    'div',
    { styleName: 'coin', className: className, style: style },
    _react2.default.createElement(_CurrencyIcon2.default, iconProps)
  );
};

exports.default = (0, _reactCssModules2.default)(Coin, _Coin2.default);

/***/ }),
/* 267 */,
/* 268 */,
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(252);

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = __webpack_require__(74);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _swap = __webpack_require__(20);

var _swap2 = _interopRequireDefault(_swap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _privateKeys = void 0;
var getPublicDataMethods = {};

var SwapAuth = function (_ServiceInterface) {
  (0, _inherits3.default)(SwapAuth, _ServiceInterface);
  (0, _createClass3.default)(SwapAuth, null, [{
    key: 'name',
    get: function get() {
      return 'auth';
    }
  }]);

  function SwapAuth(privateKeys) {
    (0, _classCallCheck3.default)(this, SwapAuth);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SwapAuth.__proto__ || (0, _getPrototypeOf2.default)(SwapAuth)).call(this));

    _this._serviceName = 'auth';
    _this.accounts = {};

    _privateKeys = privateKeys;
    return _this;
  }

  (0, _createClass3.default)(SwapAuth, [{
    key: 'initService',
    value: function initService() {
      var _this2 = this;

      (0, _keys2.default)(_privateKeys).forEach(function (name) {
        if ((0, _keys2.default)(_swap.constants.COINS).indexOf(name) < 0) {
          var error = 'SwapAuth._initService(): There is no instance with name "' + name + '".';
          error += 'Only [' + (0, _stringify2.default)((0, _keys2.default)(_swap.constants.COINS)).replace(/"/g, '\'') + '] available';

          throw new Error(error);
        }

        try {
          var instance = __webpack_require__(1151)("./" + name);
          instance = instance.default || instance;
          var account = instance.login(_privateKeys[name]);

          _this2.accounts[name] = account;
          getPublicDataMethods[name] = function () {
            return instance.getPublicData(account);
          };
        } catch (err) {
          throw new Error('SwapAuth._initService(): ' + err);
        }
      });
    }
  }, {
    key: 'getPublicData',
    value: function getPublicData() {
      var data = {
        peer: _swap2.default.services.room.peer
      };

      (0, _keys2.default)(getPublicDataMethods).forEach(function (name) {
        data[name] = getPublicDataMethods[name]();
      });

      return data;
    }
  }]);
  return SwapAuth;
}(_swap.ServiceInterface);

exports.default = SwapAuth;
module.exports = exports['default'];

/***/ }),
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Loader = __webpack_require__(1212);

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = function Loader(_ref) {
  var overlayClassName = _ref.overlayClassName,
      className = _ref.className,
      _ref$text = _ref.text,
      text = _ref$text === undefined ? false : _ref$text,
      txId = _ref.txId;
  return _react2.default.createElement(
    'div',
    { styleName: 'overlay', className: overlayClassName },
    _react2.default.createElement(
      'div',
      { styleName: 'loader center', className: className },
      _react2.default.createElement('div', { styleName: 'loader1' }),
      _react2.default.createElement('div', { styleName: 'loader2' }),
      _react2.default.createElement('div', { styleName: 'loader3' })
    ),
    text && _react2.default.createElement(
      'p',
      { styleName: 'text' },
      'Please wait, it takes from 3 to 5 minutes to complete the transaction.'
    ),
    txId && _react2.default.createElement(
      'a',
      { href: txId, styleName: 'link', target: '_blank', rel: 'noopener noreferrer' },
      txId
    )
  );
};

exports.default = (0, _reactCssModules2.default)(Loader, _Loader2.default, { allowMultiple: true });

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Row = __webpack_require__(1226);

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = function Row(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { styleName: 'row' },
    _react2.default.createElement(
      'div',
      { styleName: 'title' },
      title
    ),
    _react2.default.createElement(
      'div',
      { styleName: 'content' },
      children
    )
  );
};

exports.default = (0, _reactCssModules2.default)(Row, _Row2.default);

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Value = __webpack_require__(1227);

var _Value2 = _interopRequireDefault(_Value);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = function Value(_ref) {
  var value = _ref.value,
      currency = _ref.currency;
  return _react2.default.createElement(
    'span',
    { styleName: 'value' },
    _react2.default.createElement(
      'span',
      null,
      value,
      ' '
    ),
    _react2.default.createElement(
      'span',
      { styleName: 'currency' },
      ' ',
      currency.toUpperCase()
    )
  );
};

exports.default = (0, _reactCssModules2.default)(Value, _Value2.default);

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalContainer = exports.ModalConductor = exports.Modal = undefined;

var _Modal = __webpack_require__(194);

var _Modal2 = _interopRequireDefault(_Modal);

var _ModalConductor = __webpack_require__(470);

var _ModalConductor2 = _interopRequireDefault(_ModalConductor);

var _ModalContainer = __webpack_require__(1247);

var _ModalContainer2 = _interopRequireDefault(_ModalContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Modal = _Modal2.default;
exports.ModalConductor = _ModalConductor2.default;
exports.ModalContainer = _ModalContainer2.default;

/***/ }),
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _localStorage = __webpack_require__(734);

var _localStorage2 = _interopRequireDefault(_localStorage);

var _privateKeyNames = __webpack_require__(735);

var _privateKeyNames2 = _interopRequireDefault(_privateKeyNames);

var _notifications = __webpack_require__(736);

var _notifications2 = _interopRequireDefault(_notifications);

var _modals = __webpack_require__(737);

var _modals2 = _interopRequireDefault(_modals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  localStorage: _localStorage2.default,
  privateKeyNames: _privateKeyNames2.default,
  notifications: _notifications2.default,
  modals: _modals2.default
};

/***/ }),
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _notifications = __webpack_require__(775);

var notifications = _interopRequireWildcard(_notifications);

var _modals = __webpack_require__(778);

var modals = _interopRequireWildcard(_modals);

var _history = __webpack_require__(779);

var history = _interopRequireWildcard(_history);

var _loader = __webpack_require__(784);

var loader = _interopRequireWildcard(_loader);

var _user = __webpack_require__(785);

var user = _interopRequireWildcard(_user);

var _feeds = __webpack_require__(786);

var feeds = _interopRequireWildcard(_feeds);

var _core = __webpack_require__(787);

var core = _interopRequireWildcard(_core);

var _ipfs = __webpack_require__(788);

var ipfs = _interopRequireWildcard(_ipfs);

var _api = __webpack_require__(789);

var api = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
  notifications: notifications,
  modals: modals,
  history: history,
  loader: loader,
  core: core,
  user: user,
  feeds: feeds,
  ipfs: ipfs,
  api: api
};

/***/ }),
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _values = __webpack_require__(250);

var _values2 = _interopRequireDefault(_values);

var _keys = __webpack_require__(74);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

var _constants = __webpack_require__(251);

var _constants2 = _interopRequireDefault(_constants);

var _StorageFactory = __webpack_require__(831);

var _StorageFactory2 = _interopRequireDefault(_StorageFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwapApp = function () {
  function SwapApp() {
    (0, _classCallCheck3.default)(this, SwapApp);
  }

  (0, _createClass3.default)(SwapApp, [{
    key: 'setup',


    /**
     *
     * @param {object}  options
     * @param {string}  options.network
     * @param {object}  options.env
     * @param {array}   options.services
     * @param {array}   options.swaps
     * @param {array}   options.flows
     */
    value: function setup(options) {
      this.network = options.network || _constants2.default.NETWORKS.TESTNET;
      this.env = {};
      this.services = {};
      this.swaps = {};
      this.flows = {};

      this._addEnv(options.env || {});
      this._addServices(options.services || {});
      this._addSwaps(options.swaps || {});
      this._addFlows(options.flows || {});
    }

    // Configure -------------------------------------------------------- /

  }, {
    key: '_addEnv',
    value: function _addEnv(env) {
      (0, _keys2.default)(env).forEach(function (name) {
        if ((0, _values2.default)(_constants2.default.ENV).indexOf(name) < 0) {
          throw new Error('SwapApp.addEnv(): Only ' + (0, _values2.default)(_constants2.default.ENV) + ' available');
        }
      });

      this.env = env;
      this.env.storage = new _StorageFactory2.default(env.storage);
    }
  }, {
    key: '_addService',
    value: function _addService(service) {
      if (!service._serviceName) {
        throw new Error('SwapApp service should contain "_serviceName" property');
      }

      if (!(0, _values2.default)(_constants2.default.SERVICES).includes(service._serviceName)) {
        throw new Error('SwapApp service should contain "_serviceName" property should be one of ' + (0, _values2.default)(_constants2.default.SERVICES) + ', got "' + service._serviceName + '"');
      }

      this.services[service._serviceName] = service;
    }
  }, {
    key: '_addServices',
    value: function _addServices(services) {
      var _this = this;

      // add service to app by _serviceName
      services.forEach(function (service) {
        return _this._addService(service);
      });
      // spy expects
      (0, _keys2.default)(this.services).forEach(function (serviceName) {
        return _this.services[serviceName]._waitRelationsResolve();
      });
      // init services
      (0, _keys2.default)(this.services).forEach(function (serviceName) {
        return _this.services[serviceName]._tryInitService();
      });
    }
  }, {
    key: '_addSwap',
    value: function _addSwap(swap) {
      if (!swap._swapName) {
        throw new Error('SwapApp swap should contain "_swapName" property');
      }

      if (!(0, _values2.default)(_constants2.default.COINS).includes(swap._swapName.toUpperCase())) {
        throw new Error('SwapApp swap should contain "_swapName" property should be one of ' + (0, _values2.default)(_constants2.default.COINS) + ', got "' + swap._swapName.toUpperCase() + '"');
      }

      this.swaps[swap._swapName] = swap;

      if (typeof swap._initSwap === 'function') {
        swap._initSwap();
      }
    }
  }, {
    key: '_addSwaps',
    value: function _addSwaps(swaps) {
      var _this2 = this;

      swaps.forEach(function (swap) {
        _this2._addSwap(swap);
      });
    }
  }, {
    key: '_addFlow',
    value: function _addFlow(Flow) {
      var flowName = Flow.getName();

      if (!/^[A-Za-z]+2[A-Za-z]+$/.test(flowName)) {
        throw new Error('SwapApp flow "_flowName" property should be "^[A-Za-z]+2[A-Za-z]+$" format');
      }

      var flowNameLeftPart = flowName.match(/^[^\d]+/);
      var flowNameRightPart = flowName.match(/[^\d]+$/);

      if (!flowNameLeftPart || !flowNameRightPart || !(0, _values2.default)(_constants2.default.COINS).includes(flowNameLeftPart[0].toUpperCase()) || !(0, _values2.default)(_constants2.default.COINS).includes(flowNameRightPart[0].toUpperCase())) {
        throw new Error('SwapApp flow "_flowName" property should contain only: ' + (0, _values2.default)(_constants2.default.COINS) + '. Got: "' + flowName.toUpperCase() + '"');
      }

      this.flows[flowName] = Flow;
    }
  }, {
    key: '_addFlows',
    value: function _addFlows(flows) {
      var _this3 = this;

      flows.forEach(function (flow) {
        _this3._addFlow(flow);
      });
    }

    // Public methods --------------------------------------------------- /

  }, {
    key: 'isMainNet',
    value: function isMainNet() {
      return this.network.toLowerCase() === _constants2.default.NETWORKS.MAINNET;
    }
  }, {
    key: 'isTestNet',
    value: function isTestNet() {
      return this.network.toLowerCase() === _constants2.default.NETWORKS.TESTNET;
    }
  }]);
  return SwapApp;
}();

exports.default = new SwapApp();
module.exports = exports['default'];

/***/ }),
/* 395 */,
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(108);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(248);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

var _swap = __webpack_require__(20);

var _swap2 = _interopRequireDefault(_swap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Room = function () {

  // TODO add destroy method with all events unsubscribe (when swap is finished)

  function Room(_ref) {
    var swapId = _ref.swapId,
        participantPeer = _ref.participantPeer;
    (0, _classCallCheck3.default)(this, Room);

    this.swapId = swapId;
    this.peer = participantPeer;
  }

  (0, _createClass3.default)(Room, [{
    key: 'on',
    value: function on(eventName, handler) {
      var _this = this;

      _swap2.default.services.room.on(eventName, function (_ref2) {
        var fromPeer = _ref2.fromPeer,
            swapId = _ref2.swapId,
            values = (0, _objectWithoutProperties3.default)(_ref2, ['fromPeer', 'swapId']);

        console.log('on ' + eventName + ' from ' + fromPeer + ' at swap ' + swapId, values);
        if (fromPeer === _this.peer && swapId === _this.swapId) {
          handler(values);
        }
      });
    }
  }, {
    key: 'once',
    value: function once(eventName, handler) {
      var self = this;

      _swap2.default.services.room.on(eventName, function (_ref3) {
        var fromPeer = _ref3.fromPeer,
            swapId = _ref3.swapId,
            values = (0, _objectWithoutProperties3.default)(_ref3, ['fromPeer', 'swapId']);

        console.log('once ' + eventName + ' from ' + fromPeer + ' at swap ' + swapId, values);
        if (fromPeer === self.peer && swapId === self.swapId) {
          this.unsubscribe();
          handler(values);
        }
      });
    }
  }, {
    key: 'sendMessage',
    value: function sendMessage() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      console.log('send message', args);
      if (args.length === 1) {
        var value = args[0];

        // value - eventName

        if (typeof value === 'string') {
          _swap2.default.services.room.sendMessage(this.peer, [{
            event: value,
            data: {
              swapId: this.swapId
            }
          }]);
        }
        // value - messages
        else if (Array.isArray(value)) {
            if (value[0] && !value[0].swapId) {
              console.error('Bad format', value[0]);
              throw new Error('Bad message format! ' + value[0]);
            }

            _swap2.default.services.room.sendMessage(this.peer, value);
          }
      } else {
        var eventName = args[0],
            message = args[1];


        _swap2.default.services.room.sendMessage(this.peer, [{
          event: eventName,
          data: (0, _extends3.default)({
            swapId: this.swapId
          }, message)
        }]);
      }
    }
  }]);
  return Room;
}();

exports.default = Room;
module.exports = exports['default'];

/***/ }),
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = __webpack_require__(11);

var _appConfig = __webpack_require__(18);

var _appConfig2 = _interopRequireDefault(_appConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var URL = __webpack_require__(880);


var newReferral = function newReferral(eth_address) {
  var _ref = new URL(window.location.href, 1),
      query = _ref.query;

  if (query.ref) {
    _helpers.request.get(_appConfig2.default.referral.url + '?referral=' + query.ref + '&action=add_referrer&address=' + eth_address);
  }
};

exports.default = {
  newReferral: newReferral
};

/***/ }),
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconNames = undefined;

var _keys = __webpack_require__(46);

var _keys2 = _interopRequireDefault(_keys);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _CurrencyIcon = __webpack_require__(1055);

var _CurrencyIcon2 = _interopRequireDefault(_CurrencyIcon);

var _btc = __webpack_require__(1056);

var _btc2 = _interopRequireDefault(_btc);

var _eth = __webpack_require__(1057);

var _eth2 = _interopRequireDefault(_eth);

var _icx = __webpack_require__(1058);

var _icx2 = _interopRequireDefault(_icx);

var _waves = __webpack_require__(1059);

var _waves2 = _interopRequireDefault(_waves);

var _xrp = __webpack_require__(1060);

var _xrp2 = _interopRequireDefault(_xrp);

var _nim = __webpack_require__(1061);

var _nim2 = _interopRequireDefault(_nim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icons = {
  btc: _btc2.default,
  eth: _eth2.default,
  icx: _icx2.default,
  waves: _waves2.default,
  xrp: _xrp2.default,
  nim: _nim2.default
};

var iconNames = exports.iconNames = (0, _keys2.default)(icons);

var CurrencyIcon = function CurrencyIcon(_ref) {
  var className = _ref.className,
      style = _ref.style,
      name = _ref.name;

  var isIconExist = iconNames.includes(name.toLowerCase());

  if (isIconExist) {
    return _react2.default.createElement('img', {
      className: className,
      src: icons[name],
      alt: name + ' icon',
      role: 'image'
    });
  }

  return _react2.default.createElement(
    'span',
    {
      role: 'letter',
      styleName: 'text',
      className: className,
      style: style
    },
    name.charAt(0).toUpperCase()
  );
};

exports.default = (0, _reactCssModules2.default)(CurrencyIcon, _CurrencyIcon2.default);

/***/ }),
/* 449 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _RemoveButton = __webpack_require__(1064);

var _RemoveButton2 = _interopRequireDefault(_RemoveButton);

var _RemoveIcon = __webpack_require__(1065);

var _RemoveIcon2 = _interopRequireDefault(_RemoveIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RemoveButton = function RemoveButton(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    'div',
    { styleName: 'removeButton', className: className, onClick: onClick },
    _react2.default.createElement(_RemoveIcon2.default, { styleName: 'icon' })
  );
};

exports.default = (0, _reactCssModules2.default)(RemoveButton, _RemoveButton2.default);

/***/ }),
/* 450 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _CurrencySelect = __webpack_require__(1073);

var _CurrencySelect2 = _interopRequireDefault(_CurrencySelect);

var _Option = __webpack_require__(1074);

var _Option2 = _interopRequireDefault(_Option);

var _DropDown = __webpack_require__(1076);

var _DropDown2 = _interopRequireDefault(_DropDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CurrencySelect = function CurrencySelect(_ref) {
  var className = _ref.className,
      selectedValue = _ref.selectedValue,
      onSelect = _ref.onSelect;
  return _react2.default.createElement(_DropDown2.default, {
    className: className,
    items: [{ title: 'ETH', icon: 'eth', value: 'eth' }, { title: 'BTC', icon: 'btc', value: 'btc' }],
    selectedValue: selectedValue,
    selectedItemRender: function selectedItemRender(item) {
      return _react2.default.createElement(_Option2.default, item);
    },
    itemRender: function itemRender(item) {
      return _react2.default.createElement(_Option2.default, item);
    },
    onSelect: onSelect
  });
};

exports.default = (0, _reactCssModules2.default)(CurrencySelect, _CurrencySelect2.default);

/***/ }),
/* 451 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Flip = __webpack_require__(1079);

var _Flip2 = _interopRequireDefault(_Flip);

var _flip = __webpack_require__(1080);

var _flip2 = _interopRequireDefault(_flip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Flip(_ref) {
  var onClick = _ref.onClick;

  return _react2.default.createElement('img', { src: _flip2.default, alt: '', onClick: onClick, styleName: 'trade-panel__change' });
}

exports.default = (0, _reactCssModules2.default)(Flip, _Flip2.default);

/***/ }),
/* 452 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(55);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ButtonsInRow = __webpack_require__(1088);

var _ButtonsInRow2 = _interopRequireDefault(_ButtonsInRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonsInRow = function ButtonsInRow(_ref) {
  var children = _ref.children,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['children']);
  return _react2.default.createElement(
    'div',
    rest,
    _react2.default.createElement(
      'div',
      { styleName: 'twoButtonsInRow' },
      children
    )
  );
};

ButtonsInRow.propTypes = {
  children: _propTypes2.default.node.isRequired
};

exports.default = (0, _reactCssModules2.default)(ButtonsInRow, _ButtonsInRow2.default);

/***/ }),
/* 453 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ReloadButton = __webpack_require__(1089);

var _ReloadButton2 = _interopRequireDefault(_ReloadButton);

var _ReloadIcon = __webpack_require__(1090);

var _ReloadIcon2 = _interopRequireDefault(_ReloadIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReloadButton = function ReloadButton(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    'div',
    { styleName: 'reloadButton', className: className, onClick: onClick },
    _react2.default.createElement(_ReloadIcon2.default, { styleName: 'icon' })
  );
};

exports.default = (0, _reactCssModules2.default)(ReloadButton, _ReloadButton2.default);

/***/ }),
/* 454 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _WithdrawButton = __webpack_require__(1092);

var _WithdrawButton2 = _interopRequireDefault(_WithdrawButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WithdrawButton = function WithdrawButton(_ref) {
  var onClick = _ref.onClick,
      children = _ref.children;
  return _react2.default.createElement(
    'button',
    { styleName: 'withdrawButton', onClick: onClick },
    children
  );
};

exports.default = (0, _reactCssModules2.default)(WithdrawButton, _WithdrawButton2.default);

/***/ }),
/* 455 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(68);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(55);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autosize = __webpack_require__(1111);

var _autosize2 = _interopRequireDefault(_autosize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UPDATE = 'autosize:update';
var DESTROY = 'autosize:destroy';
var RESIZED = 'autosize:resized';

var TextareaAutosize = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(TextareaAutosize, _Component);

  function TextareaAutosize() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TextareaAutosize);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TextareaAutosize.__proto__ || (0, _getPrototypeOf2.default)(TextareaAutosize)).call.apply(_ref, [this].concat(args))), _this), _this.dispatchEvent = function (EVENT_TYPE, defer) {
      var event = document.createEvent('Event');

      event.initEvent(EVENT_TYPE, true, false);

      var dispatch = function dispatch() {
        return _this.textareaEl.dispatchEvent(event);
      };

      if (defer) {
        setTimeout(dispatch);
      } else {
        dispatch();
      }
    }, _this.getValue = function (_ref2) {
      var valueLink = _ref2.valueLink,
          value = _ref2.value;
      return valueLink ? valueLink.value : value;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TextareaAutosize, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _autosize2.default)(this.textareaEl);

      if (this.props.onResize) {
        this.textareaEl.addEventListener(RESIZED, this.props.onResize);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.onResize) {
        this.textareaEl.removeEventListener(RESIZED, this.props.onResize);
      }

      this.dispatchEvent(DESTROY);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.getValue(nextProps) !== this.getValue(this.props)) {
        this.dispatchEvent(UPDATE, true);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          valueLink = _props.valueLink,
          props = (0, _objectWithoutProperties3.default)(_props, ['valueLink']);


      return _react2.default.createElement('textarea', (0, _extends3.default)({
        ref: function ref(el) {
          return _this2.textareaEl = el;
        }
      }, props, {
        value: valueLink.value,
        onChange: valueLink.action(function (x, e) {
          return e.target.value;
        })
      }));
    }
  }]);
  return TextareaAutosize;
}(_react.Component), _class.propTypes = {
  valueLink: _propTypes2.default.object.isRequired,
  onResize: _propTypes2.default.func
}, _class.defaultProps = {
  rows: 1
}, _temp2);
exports.default = TextareaAutosize;

/***/ }),
/* 456 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"history-filter":"r9K_HC","history-filter__item":"xJUwLa","history-filter__item_active":"_2ZTLX3"};

/***/ }),
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _swap = __webpack_require__(20);

var _swap2 = _interopRequireDefault(_swap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = function login(_privateKey) {
  var storageKey = _swap2.default.network + ':btc:privateKey';
  var privateKey = _privateKey || _swap2.default.env.storage.getItem(storageKey);
  var account = void 0;

  var network = _swap2.default.isMainNet() ? _swap2.default.env.bitcoin.networks.bitcoin : _swap2.default.env.bitcoin.networks.testnet;

  if (!privateKey) {
    privateKey = _swap2.default.env.bitcoin.ECPair.makeRandom({ network: network }).toWIF();
  }

  account = new _swap2.default.env.bitcoin.ECPair.fromWIF(privateKey, network);

  account.__proto__.getPublicKey = function () {
    return account.getPublicKeyBuffer().toString('hex');
  };
  account.__proto__.getPrivateKey = function () {
    return privateKey;
  };

  if (!_privateKey) {
    _swap2.default.env.storage.setItem(storageKey, privateKey);
  }

  return account;
};

var getPublicData = function getPublicData(account) {
  return {
    address: account.getAddress(),
    publicKey: account.getPublicKey()
  };
};

exports.default = {
  login: login,
  getPublicData: getPublicData
};
module.exports = exports['default'];

/***/ }),
/* 461 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _swap = __webpack_require__(20);

var _swap2 = _interopRequireDefault(_swap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = function login(_privateKey) {
  var storageKey = _swap2.default.network + ':eth:privateKey';
  var privateKey = _privateKey || _swap2.default.env.storage.getItem(storageKey);
  var account = void 0;

  if (privateKey) {
    account = _swap2.default.env.web3.eth.accounts.privateKeyToAccount(privateKey);
  } else {
    account = _swap2.default.env.web3.eth.accounts.create();
  }

  _swap2.default.env.web3.eth.accounts.wallet.add(account.privateKey);

  if (!_privateKey) {
    _swap2.default.env.storage.setItem(storageKey, account.privateKey);
  }

  return account;
};

var getPublicData = function getPublicData(account) {
  return {
    address: account.address,
    publicKey: null
  };
};

exports.default = {
  login: login,
  getPublicData: getPublicData
};
module.exports = exports['default'];

/***/ }),
/* 462 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SwapRoom = __webpack_require__(1152);

var _SwapRoom2 = _interopRequireDefault(_SwapRoom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SwapRoom2.default;
module.exports = exports['default'];

/***/ }),
/* 463 */,
/* 464 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _swap = __webpack_require__(20);

exports.default = new _swap.Events();
module.exports = exports['default'];

/***/ }),
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "71af1b68ea0f662eb88996ea7a25bf8a.mp4";

/***/ }),
/* 469 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(51);

var _helpers = __webpack_require__(11);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Logo = __webpack_require__(1204);

var _Logo2 = _interopRequireDefault(_Logo);

var _logo = __webpack_require__(1205);

var _logo2 = _interopRequireDefault(_logo);

var _logoColored = __webpack_require__(1206);

var _logoColored2 = _interopRequireDefault(_logoColored);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logo = function Logo(_ref) {
  var colored = _ref.colored,
      withLink = _ref.withLink;

  var imgNode = _react2.default.createElement('img', {
    styleName: !withLink && 'logo',
    src: colored ? _logoColored2.default : _logo2.default,
    alt: 'swap.online logo'
  });

  if (withLink) {
    return _react2.default.createElement(
      _reactRouterDom.Link,
      { styleName: 'logo', to: _helpers.links.home },
      imgNode
    );
  }

  return imgNode;
};

exports.default = (0, _reactCssModules2.default)(Logo, _Logo2.default);

/***/ }),
/* 470 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _keys = __webpack_require__(46);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redaction = __webpack_require__(25);

var _helpers = __webpack_require__(11);

var _modals = __webpack_require__(1214);

var _modals2 = _interopRequireDefault(_modals);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ModalConductor = __webpack_require__(1256);

var _ModalConductor2 = _interopRequireDefault(_ModalConductor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalConductor = (_dec = (0, _redaction.connect)({
  modals: 'modals'
}), _dec2 = (0, _reactCssModules2.default)(_ModalConductor2.default), _dec(_class = _dec2(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(ModalConductor, _Component);

  function ModalConductor() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ModalConductor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ModalConductor.__proto__ || (0, _getPrototypeOf2.default)(ModalConductor)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      offsetTop: 0
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ModalConductor, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref2) {
      var modals = _ref2.modals;
      var offsetTop = this.state.offsetTop;


      var myOffsetTop = (0, _helpers.getPageOffset)().y;

      // When modal is showing add overflow: hidden to body and padding-right: ${scrollWidth}
      // to prevent screen from blinking
      if ((0, _keys2.default)(modals).length) {
        document.body.classList.add('withOpenedModal');
        document.body.style.paddingRight = (0, _helpers.getScrollBarWidth)() + 'px';

        if (myOffsetTop > 0) {
          this.setState({
            offsetTop: myOffsetTop
          });
        }
      } else {
        document.body.classList.remove('withOpenedModal');
        document.body.style.paddingRight = '0px';

        if (offsetTop > 0) {
          window.scrollTo(0, offsetTop);

          this.setState({
            offsetTop: 0
          });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var modals = this.props.modals;


      var modalNames = (0, _keys2.default)(modals);
      var areModalsExist = Boolean(modalNames.length);

      return areModalsExist && _react2.default.createElement(
        'div',
        { styleName: 'modalConductor' },
        modalNames.map(function (key) {
          var _modals$key = modals[key],
              name = _modals$key.name,
              _modals$key$data = _modals$key.data,
              data = _modals$key$data === undefined ? {} : _modals$key$data,
              zIndex = _modals$key.zIndex;


          return _react2.default.createElement(_modals2.default[name], {
            key: name,
            name: name,
            data: data,
            style: { zIndex: zIndex }
          });
        })
      );
    }
  }]);
  return ModalConductor;
}(_react.Component), _class2.propTypes = {
  modals: _propTypes2.default.object
}, _temp2)) || _class) || _class);
exports.default = ModalConductor;

/***/ }),
/* 471 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(68);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(55);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = __webpack_require__(11);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Overlay = __webpack_require__(1220);

var _Overlay2 = _interopRequireDefault(_Overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Overlay = function Overlay(_ref) {
  var children = _ref.children,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['children']);

  var props = (0, _helpers.ignoreProps)(rest, 'closePortal');

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ styleName: 'overlay' }, props),
    children
  );
};

Overlay.propTypes = {
  children: _propTypes2.default.node
};

exports.default = (0, _reactCssModules2.default)(Overlay, _Overlay2.default);

/***/ }),
/* 472 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(68);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(55);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(44);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Center = __webpack_require__(1221);

var _Center2 = _interopRequireDefault(_Center);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Center = function Center(_ref) {
  var children = _ref.children,
      scrollable = _ref.scrollable,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['children', 'scrollable']);

  // TODO move overflow to Modal and any other cases where it belongs
  var styleName = (0, _classnames2.default)('centringContainer', {
    'scrollable': scrollable
  });

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ styleName: styleName }, rest),
    _react2.default.createElement(
      'div',
      { styleName: 'centringContent' },
      children
    )
  );
};

Center.propTypes = {
  children: _propTypes2.default.node,
  scrollable: _propTypes2.default.bool
};

Center.defaultProps = {
  scrollable: false
};

exports.default = (0, _reactCssModules2.default)(Center, _Center2.default, { allowMultiple: true });

/***/ }),
/* 473 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Group = __webpack_require__(1237);

var _Group2 = _interopRequireDefault(_Group);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Input = __webpack_require__(188);

var _Input2 = _interopRequireDefault(_Input);

var _FieldLabel = __webpack_require__(187);

var _FieldLabel2 = _interopRequireDefault(_FieldLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Group = function Group(_ref) {
  var className = _ref.className,
      label = _ref.label,
      id = _ref.id,
      inputValueLink = _ref.inputValueLink,
      placeholder = _ref.placeholder,
      children = _ref.children;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      _FieldLabel2.default,
      { inRow: true },
      label
    ),
    _react2.default.createElement(
      'div',
      { styleName: 'groupField', className: className },
      _react2.default.createElement(_Input2.default, {
        styleName: 'inputRoot',
        inputContainerClassName: 'inputContainer',
        valueLink: inputValueLink,
        pattern: '0-9\\.',
        id: id,
        placeholder: placeholder
      }),
      children
    )
  );
};

exports.default = (0, _reactCssModules2.default)(Group, _Group2.default);

/***/ }),
/* 474 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(44);

var _classnames2 = _interopRequireDefault(_classnames);

var _actions = __webpack_require__(12);

var _actions2 = _interopRequireDefault(_actions);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Notification = __webpack_require__(1261);

var _Notification2 = _interopRequireDefault(_Notification);

var _Sound = __webpack_require__(468);

var _Sound2 = _interopRequireDefault(_Sound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Notification = (_dec = (0, _reactCssModules2.default)(_Notification2.default, { allowMultiple: true }), _dec(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(Notification, _Component);

  function Notification() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Notification);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Notification.__proto__ || (0, _getPrototypeOf2.default)(Notification)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      mounted: false,
      removed: false
    }, _this.close = function () {
      var name = _this.props.name;


      _this.setState({
        removed: true
      }, function () {
        setTimeout(function () {
          _actions2.default.notifications.hide(name);
        }, 300);
      });
    }, _this.soundClick = function () {
      var audio = new Audio();
      audio.src = _Sound2.default;
      audio.autoplay = true;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Notification, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.soundClick();
      setTimeout(function () {
        _this2.setState({
          mounted: true
        }, function () {
          setTimeout(_this2.close, 4000);
        });
      }, 0);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          mounted = _state.mounted,
          removed = _state.removed;
      var _props = this.props,
          children = _props.children,
          type = _props.type;


      var containerStyleName = (0, _classnames2.default)('container', {
        'mounted': mounted,
        'removed': removed
      });

      var notificationStyleName = (0, _classnames2.default)('notification', {
        'mounted': mounted,
        'removed': removed,
        'info': type === 'info',
        'success': type === 'success',
        'warning': type === 'warning',
        'error': type === 'error'
      });

      return _react2.default.createElement(
        'div',
        { styleName: containerStyleName },
        _react2.default.createElement(
          'div',
          { styleName: notificationStyleName, onClick: this.close },
          _react2.default.createElement(
            'div',
            { styleName: 'content' },
            children
          )
        )
      );
    }
  }]);
  return Notification;
}(_react.Component), _class2.childContextTypes = {
  close: _propTypes2.default.func
}, _temp2)) || _class);
exports.default = Notification;

/***/ }),
/* 475 */,
/* 476 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(283);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _routes = __webpack_require__(485);

var _routes2 = _interopRequireDefault(_routes);

var _store = __webpack_require__(235);

var _store2 = _interopRequireDefault(_store);

var _Root = __webpack_require__(1128);

var _Root2 = _interopRequireDefault(_Root);

var _Loader = __webpack_require__(273);

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_Loader2.default, null), document.getElementById('root'));

var ipfsRoom = window.document.getElementById('ipfsRoom');

setInterval(ipfsRoom.onload = function () {
  _reactDom2.default.render(_react2.default.createElement(_Root2.default, { history: _store.history, store: _store2.default, routes: _routes2.default }), document.getElementById('root'));
}, 500);

/***/ }),
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(147);

var _reactRouterDom = __webpack_require__(51);

var _helpers = __webpack_require__(11);

var _Swap = __webpack_require__(795);

var _Swap2 = _interopRequireDefault(_Swap);

var _Home = __webpack_require__(1047);

var _Home2 = _interopRequireDefault(_Home);

var _Wallet = __webpack_require__(1081);

var _Wallet2 = _interopRequireDefault(_Wallet);

var _Listing = __webpack_require__(1097);

var _Listing2 = _interopRequireDefault(_Listing);

var _History = __webpack_require__(1112);

var _History2 = _interopRequireDefault(_History);

var _NotFound = __webpack_require__(1126);

var _NotFound2 = _interopRequireDefault(_NotFound);

var _Affiliate = __webpack_require__(1127);

var _Affiliate2 = _interopRequireDefault(_Affiliate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = _react2.default.createElement(
  _reactRouterDom.Switch,
  null,
  _react2.default.createElement(_reactRouter.Route, { path: _helpers.links.exchange + '/:buy-:sell', component: _Home2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: _helpers.links.exchange + '/:buy-:sell/:orderId', component: _Home2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: _helpers.links.exchange, component: _Home2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: _helpers.links.affiliate, component: _Affiliate2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: _helpers.links.listing, component: _Listing2.default }),
  _react2.default.createElement(_reactRouter.Route, { exact: true, path: _helpers.links.home, component: _Wallet2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: _helpers.links.history, component: _History2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: _helpers.links.swap + '/:buy-:sell/:orderId', component: _Swap2.default }),
  _react2.default.createElement(_reactRouter.Route, { component: _NotFound2.default })
);

exports.default = routes;

/***/ }),
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bitcoinjsLib = __webpack_require__(201);

var _bitcoinjsLib2 = _interopRequireDefault(_bitcoinjsLib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var network =  false ? _bitcoinjsLib2.default.networks.bitcoin : _bitcoinjsLib2.default.networks.testnet;

exports.default = {
  network: network
};

/***/ }),
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 529 */,
/* 530 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 629 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */,
/* 671 */,
/* 672 */,
/* 673 */,
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */,
/* 678 */,
/* 679 */,
/* 680 */,
/* 681 */,
/* 682 */,
/* 683 */,
/* 684 */,
/* 685 */,
/* 686 */,
/* 687 */,
/* 688 */,
/* 689 */,
/* 690 */,
/* 691 */,
/* 692 */,
/* 693 */,
/* 694 */,
/* 695 */,
/* 696 */,
/* 697 */,
/* 698 */,
/* 699 */,
/* 700 */,
/* 701 */,
/* 702 */,
/* 703 */,
/* 704 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  home: '/',
  exchange: '/exchange',
  history: '/history',
  swap: '/swap',
  feed: '/feed',
  affiliate: '/affiliate',
  listing: '/listing',
  test: 'https:/testnet.swap.online'
};

/***/ }),
/* 705 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

var _promise = __webpack_require__(62);

var _promise2 = _interopRequireDefault(_promise);

var _superagent = __webpack_require__(728);

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createResponseHandler = function createResponseHandler(req, opts) {
  var debug = opts.method.toUpperCase() + ' ' + opts.endpoint;

  return new _promise2.default(function (fulfill, reject) {
    return req.end(function (err, res) {
      var serverError = void 0;
      var body = res.body;

      // Errors

      if (!res && !err) {
        serverError = 'Connection failed: ' + debug;
      } else if (!res || res.statusCode >= 500) {
        serverError = 'We`re having technical issues at that moment. Please try again later';
      }

      if (serverError) {
        throw new Error(serverError);
      }

      if (err) {
        // TODO write Error notifier
        opts.onComplete();
        return reject({ resData: body, err: err, res: res });
      }

      if (!body) {
        try {
          body = JSON.parse(res.text);
        } catch (err) {
          return reject(err);
        }
      }

      var resData = opts.modifyResult(body);

      // Resolve

      fulfill(resData, res);
      opts.onComplete();
    });
  });
};

var defaultOptions = {
  sameOrigin: false,
  modifyResult: function modifyResult(resData) {
    return resData;
  },
  onComplete: function onComplete() {}

  /**
   *
   * @param {Object} options
   * @param {String} options.endpoint
   * @param {String} options.method
   * @param {Object} options.headers
   * @param {Object} options.query
   * @param {Object} options.body
   * @param {number} options.delay
   */
};var sendRequest = function sendRequest(options) {
  var opts = (0, _assign2.default)({}, defaultOptions, options);
  var req = _superagent2.default[opts.method](opts.endpoint);

  // req.set({
  //   'Content-Type': opts.formData ? 'application/x-www-form-urlencoded; charset=UTF-8' : 'application/json',
  //   ...(opts.headers || {}),
  // })

  if (opts.timeout) {
    req.timeout((0, _assign2.default)({
      response: 5000, // Wait 5 seconds for the server to start sending,
      deadline: 60000 }, opts.timeout));
  }

  if (opts.query) {
    req.query(opts.query);
  }

  if (opts.body) {
    req.send(opts.body);
  }

  if (opts.sameOrigin) {
    req.withCredentials();
  }

  var responseHandler = createResponseHandler(req, opts);

  responseHandler.abort = req.abort.bind(req);

  return responseHandler;
};

var requestByMethod = function requestByMethod(method) {
  return function (endpoint, opts) {
    return sendRequest((0, _assign2.default)({}, opts, { endpoint: endpoint, method: method }));
  };
};

exports.default = {
  get: requestByMethod('get'),
  post: requestByMethod('post'),
  patch: requestByMethod('patch'),
  put: requestByMethod('put'),
  delete: requestByMethod('delete')
};

/***/ }),
/* 706 */,
/* 707 */,
/* 708 */,
/* 709 */,
/* 710 */,
/* 711 */,
/* 712 */,
/* 713 */,
/* 714 */,
/* 715 */,
/* 716 */,
/* 717 */,
/* 718 */,
/* 719 */,
/* 720 */,
/* 721 */,
/* 722 */,
/* 723 */,
/* 724 */,
/* 725 */,
/* 726 */,
/* 727 */,
/* 728 */,
/* 729 */,
/* 730 */,
/* 731 */,
/* 732 */,
/* 733 */,
/* 734 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  privateKeysSaved: 'privateKeysSaved',
  demoMoneyReceived: 'demoMoneyReceived'
};

/***/ }),
/* 735 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  eth: "testnet" + ":eth:privateKey",
  btc: "testnet" + ":btc:privateKey",
  eos: "testnet" + ":eos:privateKey",
  eosAccount: "testnet" + ":eos:account"
};

/***/ }),
/* 736 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  SuccessWithdraw: 'SuccessWithdraw',
  Message: 'Message'
};

/***/ }),
/* 737 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  Withdraw: 'WithdrawModal',
  Offer: 'OfferModal',
  PrivateKeys: 'PrivateKeysModal',
  Eos: 'EosModal',
  Approve: 'Approve',
  ImportKeys: 'ImportKeys'
};

/***/ }),
/* 738 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(166);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isLocalStorageEnabled = void 0;

try {
  window.localStorage.setItem('test', 'test');
  window.localStorage.removeItem('test');
  isLocalStorageEnabled = true;
} catch (e) {
  isLocalStorageEnabled = false;
}

var setItem = function setItem(key, value) {
  if (isLocalStorageEnabled) {
    window.localStorage.setItem(key, (0, _stringify2.default)(value));
  }
};

var getItem = function getItem(key) {
  if (isLocalStorageEnabled) {
    var value = window.localStorage.getItem(key);

    try {
      return JSON.parse(value);
    } catch (err) {
      return value;
    }
  }
  return undefined;
};

var removeItem = function removeItem(key) {
  if (isLocalStorageEnabled) {
    return window.localStorage.removeItem(key);
  }
};

var clear = function clear() {
  if (isLocalStorageEnabled) {
    window.localStorage.clear();
  }
};

exports.default = {
  setItem: setItem,
  getItem: getItem,
  removeItem: removeItem,
  clear: clear
};

/***/ }),
/* 739 */,
/* 740 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _appConfig = __webpack_require__(18);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _core = __webpack_require__(73);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getApiServer = function getApiServer(provider) {
  var _getState = (0, _core.getState)(),
      servers = _getState.api.servers;

  return (servers || {})[provider] || _appConfig2.default.api[provider];
};

exports.default = {
  getApiServer: getApiServer
};

/***/ }),
/* 741 */,
/* 742 */,
/* 743 */,
/* 744 */,
/* 745 */,
/* 746 */,
/* 747 */,
/* 748 */,
/* 749 */,
/* 750 */,
/* 751 */,
/* 752 */,
/* 753 */,
/* 754 */,
/* 755 */,
/* 756 */,
/* 757 */,
/* 758 */,
/* 759 */,
/* 760 */,
/* 761 */,
/* 762 */,
/* 763 */,
/* 764 */,
/* 765 */,
/* 766 */,
/* 767 */,
/* 768 */,
/* 769 */,
/* 770 */,
/* 771 */,
/* 772 */,
/* 773 */,
/* 774 */,
/* 775 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hide = exports.show = exports.initialState = undefined;

var _objectWithoutProperties2 = __webpack_require__(55);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = __webpack_require__(127);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {};

var show = exports.show = function show(state, _ref) {
  var name = _ref.name,
      _ref$data = _ref.data,
      data = _ref$data === undefined ? {} : _ref$data;
  return (0, _assign2.default)({}, state, (0, _defineProperty3.default)({}, name, {
    name: name,
    data: data
  }));
};

var hide = function hide(state, name) {
  var closingNotification = state[name],
      otherNotifications = (0, _objectWithoutProperties3.default)(state, [name]);

  return otherNotifications;
};
exports.hide = hide;

/***/ }),
/* 776 */,
/* 777 */,
/* 778 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = exports.open = exports.initialState = undefined;

var _objectWithoutProperties2 = __webpack_require__(55);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = __webpack_require__(127);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this is necessary to arrange the modals in the opening order, not alphabetical
var zIndex = 305;

var initialState = exports.initialState = {};

var open = exports.open = function open(state, _ref) {
  var name = _ref.name,
      _ref$data = _ref.data,
      data = _ref$data === undefined ? {} : _ref$data;
  return (0, _assign2.default)({}, state, (0, _defineProperty3.default)({}, name, {
    name: name,
    data: data,
    zIndex: ++zIndex
  }));
};

var close = function close(state, name) {
  var closingModal = state[name],
      otherModals = (0, _objectWithoutProperties3.default)(state, [name]);


  zIndex -= 1;

  return otherModals;
};
exports.close = close;

/***/ }),
/* 779 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setSwapHistory = exports.setTransactions = exports.setFilter = exports.initialState = undefined;

var _toConsumableArray2 = __webpack_require__(104);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {
  transactions: [],
  filter: 'all',
  swapHistory: {}
};

var setFilter = exports.setFilter = function setFilter(state, payload) {
  return (0, _assign2.default)({}, state, {
    filter: payload
  });
};

var setTransactions = exports.setTransactions = function setTransactions(state, payload) {
  return (0, _assign2.default)({}, state, {
    transactions: [].concat((0, _toConsumableArray3.default)(payload))
  });
};

var setSwapHistory = exports.setSwapHistory = function setSwapHistory(state, payload) {
  return (0, _assign2.default)({}, state, {
    swapHistory: (0, _assign2.default)({}, payload)
  });
};

/***/ }),
/* 780 */,
/* 781 */,
/* 782 */,
/* 783 */,
/* 784 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setVisibility = exports.initialState = undefined;

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {
  isVisible: false,
  text: false,
  txId: null
};

var setVisibility = exports.setVisibility = function setVisibility(state, payload) {
  return (0, _assign2.default)({}, state, {
    isVisible: payload.isVisible,
    text: payload.text,
    txId: payload.txId
  });
};

/***/ }),
/* 785 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTokenApprove = exports.setTokenBalance = exports.setBalance = exports.setTokenAuthData = exports.setAuthData = exports.initialState = undefined;

var _defineProperty2 = __webpack_require__(127);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {
  ethData: {
    address: '0x0',
    publicKey: '0x0',
    balance: 0,
    isBalanceFetched: false,
    currency: 'ETH'
  },
  btcData: {
    address: '0x0',
    publicKey: '0x0',
    balance: 0,
    isBalanceFetched: false,
    currency: 'BTC'
  },
  nimData: {
    address: '',
    balance: 0,
    isBalanceFetched: false,
    currency: 'NIM'
  },
  eosData: {
    address: '',
    balance: 0,
    isBalanceFetched: true,
    currency: 'EOS'
  },
  tokensData: {}
};

var setAuthData = exports.setAuthData = function setAuthData(state, _ref) {
  var name = _ref.name,
      data = _ref.data;
  return (0, _assign2.default)({}, state, (0, _defineProperty3.default)({
    tokensData: (0, _assign2.default)({}, state.tokensData)
  }, name, (0, _assign2.default)({}, state[name], data)));
};

var setTokenAuthData = exports.setTokenAuthData = function setTokenAuthData(state, _ref2) {
  var name = _ref2.name,
      data = _ref2.data;
  return (0, _assign2.default)({}, state, {
    tokensData: (0, _assign2.default)({}, state.tokensData, (0, _defineProperty3.default)({}, name, (0, _assign2.default)({}, state[name], data)))
  });
};

var setBalance = exports.setBalance = function setBalance(state, _ref3) {
  var name = _ref3.name,
      amount = _ref3.amount,
      unconfirmedBalance = _ref3.unconfirmedBalance;
  return (0, _assign2.default)({}, state, (0, _defineProperty3.default)({
    tokensData: (0, _assign2.default)({}, state.tokensData)
  }, name, (0, _assign2.default)({}, state[name], {
    balance: Number(amount),
    unconfirmedBalance: unconfirmedBalance,
    isBalanceFetched: true
  })));
};

var setTokenBalance = exports.setTokenBalance = function setTokenBalance(state, _ref4) {
  var name = _ref4.name,
      amount = _ref4.amount;
  return (0, _assign2.default)({}, state, {
    tokensData: (0, _assign2.default)({}, state.tokensData, (0, _defineProperty3.default)({}, name, (0, _assign2.default)({}, state.tokensData[name], {
      balance: Number(amount),
      isBalanceFetched: true
    })))
  });
};

var setTokenApprove = exports.setTokenApprove = function setTokenApprove(state, _ref5) {
  var name = _ref5.name,
      approve = _ref5.approve;
  return (0, _assign2.default)({}, state, {
    tokensData: (0, _assign2.default)({}, state.tokensData, (0, _defineProperty3.default)({}, name, (0, _assign2.default)({}, state.tokensData[name], {
      approve: approve
    })))
  });
};

/***/ }),
/* 786 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteItems = exports.addItems = exports.initialState = undefined;

var _toConsumableArray2 = __webpack_require__(104);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {
  items: []
};

var addItems = exports.addItems = function addItems(state, payload) {
  return (0, _assign2.default)({}, state, {
    items: [].concat((0, _toConsumableArray3.default)(payload))
  });
};

var deleteItems = exports.deleteItems = function deleteItems(state, payload) {
  return (0, _assign2.default)({}, state, {
    items: payload
  });
};

/***/ }),
/* 787 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setFilter = exports.getOrders = exports.initialState = undefined;

var _toConsumableArray2 = __webpack_require__(104);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {
  orders: [],
  filter: 'ethbtc'
};

var getOrders = exports.getOrders = function getOrders(state, _ref) {
  var orders = _ref.orders;
  return (0, _assign2.default)({}, state, {
    orders: orders
  });
};

var setFilter = exports.setFilter = function setFilter(state, _ref2) {
  var filter = _ref2.filter;
  return (0, _assign2.default)({}, state, {
    orders: [].concat((0, _toConsumableArray3.default)(state.orders)),
    filter: filter
  });
};

/***/ }),
/* 788 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userLeft = exports.userJoined = exports.set = exports.initialState = undefined;

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {
  isOnline: false,
  onlineUsers: 0,
  server: null,
  peer: ''
};

var set = exports.set = function set(state, payload) {
  return (0, _assign2.default)({}, state, payload);
};

/**
 * Событие "Пользователь вошел в сеть".
 */
var userJoined = exports.userJoined = function userJoined(state) {
  return (0, _assign2.default)({}, state, {
    onlineUsers: state.onlineUsers + 1
  });
};

/**
 * Событие "Пользователь вышел из сети".
 */
var userLeft = exports.userLeft = function userLeft(state) {
  return (0, _assign2.default)({}, state, {
    onlineUsers: state.onlineUsers - 1
  });
};

/***/ }),
/* 789 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setApiServer = exports.initialState = undefined;

var _defineProperty2 = __webpack_require__(127);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

var _appConfig = __webpack_require__(18);

var _appConfig2 = _interopRequireDefault(_appConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {
  servers: _appConfig2.default.api
};

var setApiServer = exports.setApiServer = function setApiServer(state, _ref) {
  var provider = _ref.provider,
      server = _ref.server;
  return (0, _assign2.default)({}, state, {
    servers: (0, _assign2.default)({}, state.servers, (0, _defineProperty3.default)({}, provider, server)),
    updatedServers: (0, _assign2.default)({}, state.updatedServers, (0, _defineProperty3.default)({}, provider, server))
  });
};

/***/ }),
/* 790 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(46);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ignoreProps = function ignoreProps() {
  for (var _len = arguments.length, ignored = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    ignored[_key - 1] = arguments[_key];
  }

  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var list = {};

  (0, _keys2.default)(props).forEach(function (key) {
    if (!ignored.includes(key)) {
      list[key] = props[key];
    }
  });

  return list;
};

exports.default = ignoreProps;

/***/ }),
/* 791 */,
/* 792 */,
/* 793 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getPageOffset = function getPageOffset() {
  // isCSS1Compat for old browsers support like IE < 9,
  // which do not have window.pageYOffset and window.scrollY
  // For more info check https://developer.mozilla.org/ru/docs/Web/API/Window/scrollY
  var isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';
  var isSupportPageOffset = window.pageXOffset !== undefined;

  if (isSupportPageOffset) {

    return {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }

  return {
    x: isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
    y: isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
  };
};

exports.default = getPageOffset;

/***/ }),
/* 794 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getScrollBarWidth = function getScrollBarWidth() {
  var outer = document.createElement('div');

  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps

  document.body.appendChild(outer);

  var widthNoScroll = outer.offsetWidth;

  // force scrollbars
  outer.style.overflow = 'scroll';

  // add innerdiv
  var inner = document.createElement('div');

  inner.style.width = '100%';
  outer.appendChild(inner);

  var widthWithScroll = inner.offsetWidth;

  // remove divs
  outer.parentNode.removeChild(outer);

  return widthNoScroll - widthWithScroll;
};

exports.default = getScrollBarWidth;

/***/ }),
/* 795 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _stringify = __webpack_require__(166);

var _stringify2 = _interopRequireDefault(_stringify);

var _toConsumableArray2 = __webpack_require__(104);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _swap = __webpack_require__(128);

var _swap2 = _interopRequireDefault(_swap);

var _appConfig = __webpack_require__(18);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _actions = __webpack_require__(12);

var _actions2 = _interopRequireDefault(_actions);

var _EmergencySave = __webpack_require__(915);

var _EmergencySave2 = _interopRequireDefault(_EmergencySave);

var _BtcToEth = __webpack_require__(1041);

var _BtcToEth2 = _interopRequireDefault(_BtcToEth);

var _EthToBtc = __webpack_require__(1044);

var _EthToBtc2 = _interopRequireDefault(_EthToBtc);

var _EthTokenToBtc = __webpack_require__(1045);

var _EthTokenToBtc2 = _interopRequireDefault(_EthTokenToBtc);

var _BtcToEthToken = __webpack_require__(1046);

var _BtcToEthToken2 = _interopRequireDefault(_BtcToEthToken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var swapComponents = {
  'BTC2ETH': _BtcToEth2.default,
  'ETH2BTC': _EthToBtc2.default,
  'NOXON2BTC': _EthTokenToBtc2.default,
  'BTC2NOXON': _BtcToEthToken2.default,
  'SWAP2BTC': _EthTokenToBtc2.default,
  'BTC2SWAP': _BtcToEthToken2.default
};

var SwapComponent = function (_PureComponent) {
  (0, _inherits3.default)(SwapComponent, _PureComponent);

  function SwapComponent() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SwapComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SwapComponent.__proto__ || (0, _getPrototypeOf2.default)(SwapComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      swap: null,
      SwapComponent: null,
      errors: false
    }, _this.setSaveSwapId = function (orderId) {
      var swapsId = JSON.parse(localStorage.getItem('swapId'));

      if (swapsId === null || swapsId.length === 0) {
        swapsId = [];
        swapsId.push(orderId);
      }

      var boolean = swapsId.map(function (item) {
        return item !== orderId;
      });

      if (Boolean.apply(undefined, (0, _toConsumableArray3.default)(boolean))) {
        swapsId.push(orderId);
      }

      localStorage.setItem('swapId', (0, _stringify2.default)(swapsId));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SwapComponent, [{
    key: 'createSwap',
    value: function createSwap() {
      var orderId = this.props.match.params.orderId;


      var swap = new _swap2.default(orderId);
      var SwapComponent = swapComponents[swap.flow._flowName.toUpperCase()];

      this.setState({
        SwapComponent: SwapComponent,
        swap: swap
      });

      this.setSaveSwapId(orderId);

      // for debug and emergency save
      window.swap = swap;
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      _actions2.default.api.checkServers().then(function () {
        _this2.createSwap();
      }).catch(function (e) {
        _this2.setState({ errors: true });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          swap = _state.swap,
          SwapComponent = _state.SwapComponent,
          errors = _state.errors;


      return _react2.default.createElement(
        'div',
        { style: { paddingLeft: '30px', paddingTop: '30px' } },
        swap && _react2.default.createElement(
          SwapComponent,
          { swap: swap },
          _react2.default.createElement(_EmergencySave2.default, { flow: swap.flow })
        ),
        errors && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Error!'
          ),
          'Can\'t reach payments provider server. Please, try again later'
        )
      );
    }
  }]);
  return SwapComponent;
}(_react.PureComponent);

exports.default = SwapComponent;

/***/ }),
/* 796 */,
/* 797 */,
/* 798 */,
/* 799 */,
/* 800 */,
/* 801 */,
/* 802 */,
/* 803 */,
/* 804 */,
/* 805 */,
/* 806 */,
/* 807 */,
/* 808 */,
/* 809 */,
/* 810 */,
/* 811 */,
/* 812 */,
/* 813 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(74);

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = __webpack_require__(108);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(248);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

var _bignumber = __webpack_require__(171);

var _bignumber2 = _interopRequireDefault(_bignumber);

var _swap = __webpack_require__(20);

var _swap2 = _interopRequireDefault(_swap);

var _Room = __webpack_require__(396);

var _Room2 = _interopRequireDefault(_Room);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Swap = function () {
  function Swap(id) {
    (0, _classCallCheck3.default)(this, Swap);

    this.id = null;
    this.isMy = null;
    this.owner = null;
    this.participant = null;
    this.buyCurrency = null;
    this.sellCurrency = null;
    this.buyAmount = null;
    this.sellAmount = null;

    var data = _swap2.default.env.storage.getItem('swap.' + id);

    if (!data) {
      var order = _swap2.default.services.orders.getByKey(id);

      data = this._getDataFromOrder(order);
    }

    this.update(data);

    this.events = new _swap.Events();

    this.room = new _Room2.default({
      swapId: id,
      participantPeer: this.participant.peer
    });

    // NOXON2BTC
    // BTC2NOXON
    var Flow = _swap2.default.flows[data.sellCurrency.toUpperCase() + '2' + data.buyCurrency.toUpperCase()];

    if (!Flow) {
      throw new Error('Flow with name "' + data.sellCurrency.toUpperCase() + '2' + data.buyCurrency.toUpperCase() + '" not found in SwapApp.flows');
    }

    this.flow = new Flow(this);
  }

  (0, _createClass3.default)(Swap, [{
    key: '_getDataFromOrder',
    value: function _getDataFromOrder(order) {
      // TODO add check order format (typeforce)

      var data = _swap.util.pullProps(order, 'id', 'isMy', 'owner', 'participant', 'buyCurrency', 'sellCurrency', 'buyAmount', 'sellAmount');

      var isMy = data.isMy,
          buyCurrency = data.buyCurrency,
          sellCurrency = data.sellCurrency,
          buyAmount = data.buyAmount,
          sellAmount = data.sellAmount,
          rest = (0, _objectWithoutProperties3.default)(data, ['isMy', 'buyCurrency', 'sellCurrency', 'buyAmount', 'sellAmount']);


      var swap = (0, _extends3.default)({}, rest, {
        isMy: isMy,
        buyCurrency: isMy ? buyCurrency : sellCurrency,
        sellCurrency: isMy ? sellCurrency : buyCurrency,
        buyAmount: isMy ? buyAmount : sellAmount,
        sellAmount: isMy ? sellAmount : buyAmount
      });

      if (!swap.participant && !isMy) {
        swap.participant = swap.owner;
      }

      return swap;
    }
  }, {
    key: '_pullRequiredData',
    value: function _pullRequiredData(data) {
      return _swap.util.pullProps(data, 'id', 'isMy', 'owner', 'participant', 'buyCurrency', 'sellCurrency', 'buyAmount', 'sellAmount');
    }
  }, {
    key: '_saveState',
    value: function _saveState() {
      var data = this._pullRequiredData(this);

      _swap2.default.env.storage.setItem('swap.' + this.id, data);
    }
  }, {
    key: 'update',
    value: function update(values) {
      var _this = this;

      (0, _keys2.default)(values).forEach(function (key) {
        if (key === 'buyAmount' || key === 'sellAmount') {
          _this[key] = new _bignumber2.default(String(values[key]));
        } else {
          _this[key] = values[key];
        }
      });
      this._saveState();
    }
  }, {
    key: 'on',
    value: function on(eventName, handler) {
      this.events.subscribe(eventName, handler);
    }
  }, {
    key: 'off',
    value: function off(eventName, handler) {
      this.events.unsubscribe(eventName, handler);
    }
  }]);
  return Swap;
}();

exports.default = Swap;
module.exports = exports['default'];

/***/ }),
/* 814 */,
/* 815 */,
/* 816 */,
/* 817 */,
/* 818 */,
/* 819 */,
/* 820 */,
/* 821 */,
/* 822 */,
/* 823 */,
/* 824 */,
/* 825 */,
/* 826 */,
/* 827 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  eth: 'ETH',
  btc: 'BTC',
  nim: 'NIM',

  // ETH Tokens
  noxon: 'NOXON',
  swap: 'SWAP',
  btrm: 'BTRM'
};
module.exports = exports['default'];

/***/ }),
/* 828 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  web3: 'web3',
  bitcoin: 'bitcoin',
  Ipfs: 'Ipfs',
  IpfsRoom: 'IpfsRoom',
  storage: 'storage'
};
module.exports = exports['default'];

/***/ }),
/* 829 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  auth: 'auth',
  room: 'room',
  orders: 'orders',
  swaps: 'swaps'
};
module.exports = exports['default'];

/***/ }),
/* 830 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  MAINNET: 'mainnet',
  TESTNET: 'testnet'
};
module.exports = exports['default'];

/***/ }),
/* 831 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(252);

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StorageFactory = function () {
  function StorageFactory(storage) {
    (0, _classCallCheck3.default)(this, StorageFactory);

    this.prefix = 'swap:';
    this.storage = storage || global.localStorage;

    try {
      this.storage.setItem('test', 'test');
      this.storage.getItem('test');
      this.storage.removeItem('test');
    } catch (err) {
      throw new Error('SwapApp.env.StorageFactory: ' + err);
    }
  }

  (0, _createClass3.default)(StorageFactory, [{
    key: 'setItem',
    value: function setItem(key, value) {
      this.storage.setItem('' + this.prefix + key, (0, _stringify2.default)(value));
    }
  }, {
    key: 'getItem',
    value: function getItem(key) {
      var value = this.storage.getItem('' + this.prefix + key);

      try {
        return JSON.parse(value);
      } catch (err) {
        console.error('SwapApp.env.storage.getItem(' + key + ') parse error. Looks like the value was created w/o setItem method');
        console.error(err);
        return undefined;
      }
    }
  }, {
    key: 'removeItem',
    value: function removeItem(key) {
      return this.storage.removeItem('' + this.prefix + key);
    }
  }]);
  return StorageFactory;
}();

exports.default = StorageFactory;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 832 */,
/* 833 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(74);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

var _SwapApp = __webpack_require__(394);

var _SwapApp2 = _interopRequireDefault(_SwapApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ServiceInterface = function () {
  (0, _createClass3.default)(ServiceInterface, [{
    key: '_constructor',


    // _constructor for aggregation
    value: function _constructor() {
      // service name, within it will be stored in SwapApp.services
      this._serviceName = null;
      this._dependsOn = null;
      this._spyHandlers = [];
    }
  }]);

  function ServiceInterface() {
    (0, _classCallCheck3.default)(this, ServiceInterface);

    this._constructor();
  }

  (0, _createClass3.default)(ServiceInterface, [{
    key: '_waitRelationsResolve',
    value: function _waitRelationsResolve() {
      var _this = this;

      if (this._dependsOn && this._dependsOn.length) {
        var dependsOnMap = {};

        this._dependsOn.forEach(function (Service) {
          dependsOnMap[Service.name] = {
            initialized: false
          };

          _SwapApp2.default.services[Service.name]._addWaitRelationHandler(function () {
            dependsOnMap[Service.name].initialized = true;

            var areAllExpectsInitialized = (0, _keys2.default)(dependsOnMap).every(function (serviceName) {
              return dependsOnMap[serviceName].initialized;
            });

            if (areAllExpectsInitialized) {
              _this.initService();
            }
          });
        });
      }
    }
  }, {
    key: '_addWaitRelationHandler',
    value: function _addWaitRelationHandler(handler) {
      this._spyHandlers.push(handler);
    }
  }, {
    key: '_tryInitService',
    value: function _tryInitService() {
      if (!this._dependsOn || !this._dependsOn.length) {
        this.initService();
        this._spyHandlers.forEach(function (handler) {
          return handler();
        });
        this._spyHandlers = [];
      }
    }
  }, {
    key: 'initService',
    value: function initService() {
      // init service on SwapApp mounting
    }
  }]);
  return ServiceInterface;
}();

exports.default = ServiceInterface;
module.exports = exports['default'];

/***/ }),
/* 834 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwapInterface = function () {
  function SwapInterface() {
    (0, _classCallCheck3.default)(this, SwapInterface);

    // service name, within it will be stored in SwapApp.swaps
    this._swapName = null;
  }

  (0, _createClass3.default)(SwapInterface, [{
    key: "_initSwap",
    value: function _initSwap() {
      // init service on SwapApp mounting
    }
  }]);
  return SwapInterface;
}();

exports.default = SwapInterface;
module.exports = exports["default"];

/***/ }),
/* 835 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(74);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Collection = function () {
  (0, _createClass3.default)(Collection, [{
    key: "_constructor",


    // _constructor for aggregation
    value: function _constructor() {
      this.items = [];
      this.itemIds = {};
    }
  }]);

  function Collection() {
    (0, _classCallCheck3.default)(this, Collection);

    this._constructor();
  }

  /**
   * Add item at the start of current collection
   * @param item
   * @param key {string|number}
   * @returns {*}
   */


  (0, _createClass3.default)(Collection, [{
    key: "prepend",
    value: function prepend(item, key) {
      this.items.unshift(item);
      if (key) {
        for (var _key in this.itemIds) {
          if (this.itemIds.hasOwnProperty(_key)) {
            this.itemIds[_key] += 1;
          }
        }
        this.itemIds[key] = 0;
      }
      return item;
    }

    /**
     * Add item at the end of current collection
     * @param item
     * @param key {string|number}
     * @returns {*}
     */

  }, {
    key: "append",
    value: function append(item, key) {
      this.items.push(item);
      if (key) {
        this.itemIds[key] = this.items.length - 1;
      }
      return item;
    }

    /**
     * Remove item by index from current collection
     * @param index
     * @returns {*}
     */

  }, {
    key: "removeByIndex",
    value: function removeByIndex(index) {
      this.items = this.items.splice(index, 1);
    }

    /**
     * Remove item by key [id] from current collection
     * @param key {string|number}
     * @returns {*}
     */

  }, {
    key: "removeByKey",
    value: function removeByKey(key) {
      var _this = this;

      var index = this.itemIds[key];

      if (index !== undefined) {
        this.items.splice(index, 1);
        delete this.itemIds[key];

        (0, _keys2.default)(this.itemIds).forEach(function (key) {
          if (_this.itemIds[key] > index) {
            _this.itemIds[key]--;
          }
        });
      }
    }

    /**
     * Get index of item in current collection
     * @param item
     * @returns {number}
     */

  }, {
    key: "indexOf",
    value: function indexOf(item) {
      return this.items.indexOf(item);
    }

    /**
     * Get item by index from current collection
     * @param index
     * @returns {*}
     */

  }, {
    key: "getByIndex",
    value: function getByIndex(index) {
      return this.items[index];
    }

    /**
     * Get item by key [id] from current collection
     * @param key {string|number}
     * @returns {*}
     */

  }, {
    key: "getByKey",
    value: function getByKey(key) {
      return this.items[this.itemIds[key]];
    }
  }, {
    key: "isExist",
    value: function isExist(item) {
      return this.items.includes(item);
    }

    /**
     * Check if item with such name exists in current collection
     * @param key {string|number}
     * @returns {boolean}
     */

  }, {
    key: "isExistByKey",
    value: function isExistByKey(key) {
      return Boolean(this.getByKey(key));
    }
  }]);
  return Collection;
}();

exports.default = Collection;
module.exports = exports["default"];

/***/ }),
/* 836 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.events = undefined;

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Event = function () {

  /**
   *
   * @param name {string}
   */
  function Event(name) {
    (0, _classCallCheck3.default)(this, Event);

    this.name = name;
    this.handlers = [];
  }

  /**
   * Add handler to current Event
   *
   * @param handler {function}
   */


  (0, _createClass3.default)(Event, [{
    key: "addHandler",
    value: function addHandler(handler) {
      var _this = this;

      this.handlers.push(handler.bind({
        unsubscribe: function unsubscribe() {
          _this.removeHandler(handler);
        }
      }));
    }

    /**
     * Remove handler from current Event
     *
     * @param handler {function}
     * @returns {Array.<T>|*}
     */

  }, {
    key: "removeHandler",
    value: function removeHandler(handler) {
      var handlerIndex = this.handlers.indexOf(handler);

      this.handlers.splice(handlerIndex, 1);
    }

    /**
     * Call all handlers in all priorities of current Event
     *
     * @param eventArgs {...array}
     */

  }, {
    key: "call",
    value: function call() {
      for (var _len = arguments.length, eventArgs = Array(_len), _key = 0; _key < _len; _key++) {
        eventArgs[_key] = arguments[_key];
      }

      this.handlers.forEach(function (handler) {
        try {
          handler.apply(undefined, eventArgs);
        } catch (err) {
          console.error(err);
        }
      });
    }
  }]);
  return Event;
}();

var EventAggregator = function () {
  function EventAggregator() {
    (0, _classCallCheck3.default)(this, EventAggregator);

    this.events = {};
  }

  /**
   * Get Event by name
   *
   * @param name
   * @returns {*}
   */


  (0, _createClass3.default)(EventAggregator, [{
    key: "getEvent",
    value: function getEvent(name) {
      var event = this.events[name];

      if (!event) {
        event = new Event(name);
        this.events[name] = event;
      }

      return event;
    }

    /**
     *
     * @param name {string}
     * @param handler {function}
     * @returns {{ event: *, handler: * }}
     */

  }, {
    key: "subscribe",
    value: function subscribe(name, handler) {
      var event = this.getEvent(name);

      event.addHandler(handler);

      return { event: event, handler: handler };
    }

    /**
     *
     * @param eventName {string}
     * @param handler {function}
     */

  }, {
    key: "unsubscribe",
    value: function unsubscribe(eventName, handler) {
      var event = this.getEvent(eventName);

      event.removeHandler(handler);
    }

    /**
     *
     * @param name {string}
     * @param eventArgs {...array}
     */

  }, {
    key: "dispatch",
    value: function dispatch(name) {
      var event = this.getEvent(name);

      if (event) {
        for (var _len2 = arguments.length, eventArgs = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          eventArgs[_key2 - 1] = arguments[_key2];
        }

        event.call.apply(event, eventArgs);
      }
    }

    /**
     * Subscribe to Event and unsubscribe after call
     *
     * @param eventName {string}
     * @param handler {function}
     * @returns {{ event: *, handlerWrapper: (function(...[*])) }}
     */

  }, {
    key: "once",
    value: function once(eventName, handler) {
      var event = this.getEvent(eventName);

      var handlerWrapper = function handlerWrapper() {
        var result = handler.apply(undefined, arguments);
        if (result) {
          event.removeHandler(handlerWrapper);
        }
      };

      event.addHandler(handlerWrapper);

      return { event: event, handlerWrapper: handlerWrapper };
    }
  }]);
  return EventAggregator;
}();

var events = new EventAggregator();

exports.default = EventAggregator;
exports.events = events;

/***/ }),
/* 837 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pullProps = __webpack_require__(838);

var _pullProps2 = _interopRequireDefault(_pullProps);

var _ignoreProps = __webpack_require__(839);

var _ignoreProps2 = _interopRequireDefault(_ignoreProps);

var _typeforce = __webpack_require__(840);

var _typeforce2 = _interopRequireDefault(_typeforce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  pullProps: _pullProps2.default,
  ignoreProps: _ignoreProps2.default,
  typeforce: _typeforce2.default
};
module.exports = exports['default'];

/***/ }),
/* 838 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var pullProps = function pullProps(obj) {
  for (var _len = arguments.length, props = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    props[_key - 1] = arguments[_key];
  }

  var result = {};

  props.forEach(function (propName) {
    result[propName] = obj[propName];
  });

  return result;
};

exports.default = pullProps;
module.exports = exports["default"];

/***/ }),
/* 839 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(74);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ignoreProps = function ignoreProps() {
  for (var _len = arguments.length, ignored = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    ignored[_key - 1] = arguments[_key];
  }

  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var list = {};

  (0, _keys2.default)(props).forEach(function (key) {
    if (!ignored.includes(key)) {
      list[key] = props[key];
    }
  });

  return list;
};

exports.default = ignoreProps;
module.exports = exports["default"];

/***/ }),
/* 840 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(841);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _values = __webpack_require__(250);

var _values2 = _interopRequireDefault(_values);

var _isCoinAddress, _isPublicKey;

var _typeforce = __webpack_require__(842);

var _typeforce2 = _interopRequireDefault(_typeforce);

var _constants = __webpack_require__(251);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var check = function check() {
  try {
    return _typeforce2.default.apply(undefined, arguments);
  } catch (err) {
    console.error(err);
    return false;
  }
};

var isNumeric = function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

var isCoinName = function isCoinName(value) {
  return (0, _values2.default)(_constants2.default.COINS).map(function (v) {
    return v.toLowerCase();
  }).includes(value.toLowerCase());
};

var isCoinAddress = (_isCoinAddress = {}, (0, _defineProperty3.default)(_isCoinAddress, _constants2.default.COINS.eth, function (value) {
  return typeof value === 'string' && /^0x[A-Fa-f0-9]{40}$/.test(value);
}), (0, _defineProperty3.default)(_isCoinAddress, _constants2.default.COINS.btc, function (value) {
  return typeof value === 'string' && /^[A-Za-z0-9]{34}$/.test(value);
}), (0, _defineProperty3.default)(_isCoinAddress, _constants2.default.COINS.nim, function (value) {
  return typeof value === 'string' && /^0x[A-Fa-f0-9]{40}$/.test(value);
}), (0, _defineProperty3.default)(_isCoinAddress, _constants2.default.COINS.noxon, function (value) {
  return typeof value === 'string' && /^0x[A-Fa-f0-9]{40}$/.test(value);
}), (0, _defineProperty3.default)(_isCoinAddress, _constants2.default.COINS.swap, function (value) {
  return typeof value === 'string' && /^0x[A-Fa-f0-9]{40}$/.test(value);
}), _isCoinAddress);

var isPublicKey = (_isPublicKey = {}, (0, _defineProperty3.default)(_isPublicKey, _constants2.default.COINS.eth, '?String'), (0, _defineProperty3.default)(_isPublicKey, _constants2.default.COINS.btc, function (value) {
  return typeof value === 'string' && /^[A-Za-z0-9]{66}$/.test(value);
}), (0, _defineProperty3.default)(_isPublicKey, _constants2.default.COINS.nim, '?String'), (0, _defineProperty3.default)(_isPublicKey, _constants2.default.COINS.noxon, '?String'), (0, _defineProperty3.default)(_isPublicKey, _constants2.default.COINS.swap, '?String'), _isPublicKey);

exports.default = {
  t: _typeforce2.default,
  check: check,
  isNumeric: isNumeric,
  isCoinName: isCoinName,
  isCoinAddress: isCoinAddress,
  isPublicKey: isPublicKey
};
module.exports = exports['default'];

/***/ }),
/* 841 */,
/* 842 */,
/* 843 */,
/* 844 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(78);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(79);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _toConsumableArray2 = __webpack_require__(412);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__(108);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

var _swap2 = __webpack_require__(20);

var _swap3 = _interopRequireDefault(_swap2);

var _Room = __webpack_require__(396);

var _Room2 = _interopRequireDefault(_Room);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flow = function () {
  function Flow(swap) {
    (0, _classCallCheck3.default)(this, Flow);

    this.swap = swap;
    this.steps = [];

    this.stepNumbers = {};

    this.state = {
      step: 0,
      isWaitingForOwner: false
    };
  }

  (0, _createClass3.default)(Flow, [{
    key: '_persistState',
    value: function _persistState() {
      var _this = this;

      var state = _swap3.default.env.storage.getItem('flow.' + this.swap.id);

      if (state) {
        this.state = (0, _extends3.default)({}, this.state, state);
      }

      this.swap.room.on('persist state', function (values) {
        _this.setState(values, true);
      });
    }
  }, {
    key: '_persistSteps',
    value: function _persistSteps() {
      var _this2 = this;

      this.steps = [].concat((0, _toConsumableArray3.default)(this._getInitialSteps()), (0, _toConsumableArray3.default)(this._getSteps()));

      // wait events placed
      setTimeout(function () {
        if (_this2.state.step >= _this2.steps.length) return;else _this2.goStep(_this2.state.step);
      }, 0);
    }
  }, {
    key: '_getInitialSteps',
    value: function _getInitialSteps() {
      var _this3 = this;

      var flow = this;

      return [

      // Check if order exists

      (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _swap, orderId, owner;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _swap = _this3.swap, orderId = _swap.id, owner = _swap.owner;

                // TODO how can we don't know who is participant???
                // TODO if there is no participant in `order` then no need to create Flow...
                // if there is no order it orderCollection that means owner is offline, so `swap.owner` will be undefined

                if (!owner) {
                  flow.setState({
                    isWaitingForOwner: true
                  });

                  _swap3.default.services.room.on('new orders', function (_ref2) {
                    var orders = _ref2.orders;

                    var order = orders.find(function (_ref3) {
                      var id = _ref3.id;
                      return id === orderId;
                    });

                    if (order) {
                      this.unsubscribe();

                      var _order = orders.getByKey(orderId);

                      // TODO move this to Swap.js
                      flow.swap.room = new _Room2.default({
                        participantPeer: _order.owner.peer
                      });
                      flow.swap.update((0, _extends3.default)({}, _order, {
                        participant: _order.owner
                      }));
                      flow.finishStep({
                        isWaitingForOwner: false
                      });
                    }
                  });
                } else {
                  flow.finishStep();
                }

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this3);
      }))];
    }
  }, {
    key: '_getSteps',
    value: function _getSteps() {
      return [];
    }
  }, {
    key: '_saveState',
    value: function _saveState() {
      _swap3.default.env.storage.setItem('flow.' + this.swap.id, this.state);
    }
  }, {
    key: 'finishStep',
    value: function finishStep(data, constraints) {
      console.log('on step ' + this.state.step + ', constraints =', constraints);

      if (constraints) {
        var step = constraints.step,
            silentError = constraints.silentError;


        var n_step = this.stepNumbers[step];
        console.log('trying to finish step ' + step + ' = ' + n_step + ' when on step ' + this.state.step);

        if (step && this.state.step < n_step) {
          if (silentError) {
            console.error('Cant finish step ' + step + ' = ' + n_step + ' when on step ' + this.state.step);
            return;
          } else {
            throw new Error('Cant finish step ' + step + ' = ' + n_step + ' when on step ' + this.state.step);
            return;
          }
        }
      }

      console.log('proceed to step ' + (this.state.step + 1) + ', data=', data);

      this.goNextStep(data);
    }
  }, {
    key: 'goNextStep',
    value: function goNextStep(data) {
      var step = this.state.step;

      var newStep = step + 1;

      this.swap.events.dispatch('leave step', step);

      this.setState((0, _extends3.default)({
        step: newStep
      }, data || {}), true);

      this.goStep(newStep);
    }
  }, {
    key: 'goStep',
    value: function goStep(index) {
      this.swap.events.dispatch('enter step', index);
      this.steps[index]();
    }
  }, {
    key: 'restartStep',
    value: function restartStep() {
      this.goStep(this.state.step);
    }
  }, {
    key: 'setState',
    value: function setState(values, save) {
      this.state = (0, _extends3.default)({}, this.state, values);

      if (save) {
        this._saveState();
      }

      this.swap.events.dispatch('state update', this.state, values);
    }
  }]);
  return Flow;
}();

exports.default = Flow;
module.exports = exports['default'];

/***/ }),
/* 845 */,
/* 846 */,
/* 847 */,
/* 848 */,
/* 849 */,
/* 850 */,
/* 851 */,
/* 852 */,
/* 853 */,
/* 854 */,
/* 855 */,
/* 856 */,
/* 857 */,
/* 858 */,
/* 859 */,
/* 860 */,
/* 861 */,
/* 862 */,
/* 863 */,
/* 864 */,
/* 865 */,
/* 866 */,
/* 867 */,
/* 868 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducers = __webpack_require__(27);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var open = function open(name, data) {
  return _reducers2.default.modals.open({ name: name, data: data });
};

var close = function close(name) {
  return _reducers2.default.modals.close(name);
};

exports.default = {
  open: open,
  close: close
};

/***/ }),
/* 869 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducers = __webpack_require__(27);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var show = function show(isVisible, text, txId) {
  return _reducers2.default.loader.setVisibility({ isVisible: isVisible, text: text, txId: txId });
};
var hide = function hide() {
  return _reducers2.default.loader.setVisibility({ isVisible: false });
};

exports.default = {
  show: show,
  hide: hide
};

/***/ }),
/* 870 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducers = __webpack_require__(27);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var show = function show(name, data) {
  return _reducers2.default.notifications.show({ name: name, data: data });
};

var hide = function hide(name) {
  return _reducers2.default.notifications.hide(name);
};

exports.default = {
  show: show,
  hide: hide
};

/***/ }),
/* 871 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(104);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _promise = __webpack_require__(62);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _keys = __webpack_require__(46);

var _keys2 = _interopRequireDefault(_keys);

var _asyncToGenerator2 = __webpack_require__(65);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _appConfig = __webpack_require__(18);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _moment = __webpack_require__(135);

var _moment2 = _interopRequireDefault(_moment);

var _helpers = __webpack_require__(11);

var _actions = __webpack_require__(12);

var _actions2 = _interopRequireDefault(_actions);

var _core = __webpack_require__(73);

var _swap = __webpack_require__(20);

var _swap2 = _interopRequireDefault(_swap);

var _reducers = __webpack_require__(27);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sign = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var btcPrivateKey, ethPrivateKey, _ethPrivateKey, eosMasterPrivateKey, eosAccount;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            btcPrivateKey = localStorage.getItem(_helpers.constants.privateKeyNames.btc);
            ethPrivateKey = localStorage.getItem(_helpers.constants.privateKeyNames.eth);
            _ethPrivateKey = _actions2.default.eth.login(ethPrivateKey);


            _actions2.default.btc.login(btcPrivateKey);

            (0, _keys2.default)(_appConfig2.default.tokens).forEach(function (name) {
              _actions2.default.token.login(_ethPrivateKey, _appConfig2.default.tokens[name].address, name, _appConfig2.default.tokens[name].decimals);
            });
            // await actions.nimiq.login(_ethPrivateKey)

            eosMasterPrivateKey = localStorage.getItem(_helpers.constants.privateKeyNames.eos);
            eosAccount = localStorage.getItem(_helpers.constants.privateKeyNames.eosAccount);

            if (!(eosMasterPrivateKey && eosAccount)) {
              _context.next = 14;
              break;
            }

            _context.next = 10;
            return _actions2.default.eos.init();

          case 10:
            _context.next = 12;
            return _actions2.default.eos.login(eosAccount, eosMasterPrivateKey);

          case 12:
            _context.next = 14;
            return _actions2.default.eos.getBalance();

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function sign() {
    return _ref.apply(this, arguments);
  };
}();

var getBalances = function getBalances() {
  _actions2.default.eth.getBalance();
  _actions2.default.btc.getBalance();
  _actions2.default.eos.getBalance();

  (0, _keys2.default)(_appConfig2.default.tokens).forEach(function (name) {
    _actions2.default.token.getBalance(_appConfig2.default.tokens[name].address, name, _appConfig2.default.tokens[name].decimals);
  });
  // actions.nimiq.getBalance()
};

var getDemoMoney =  false ? function () {} : function () {
  _helpers.request.get('https://swap.wpmix.net/demokeys.php', {}).then(function (r) {
    window.localStorage.clear();
    localStorage.setItem(_helpers.constants.privateKeyNames.btc, r[0]);
    localStorage.setItem(_helpers.constants.privateKeyNames.eth, r[1]);
    localStorage.setItem(_helpers.constants.localStorage.demoMoneyReceived, true);
  });
};

var setExchangeRate = function setExchangeRate(sellCurrency, buyCurrency, setState) {
  var url = 'https://api.cryptonator.com/api/full/' + sellCurrency + '-' + buyCurrency;

  return _helpers.request.get(url).then(function (_ref2) {
    var exchangeRate = _ref2.ticker.price;

    setState(exchangeRate);
  }).catch(function () {
    return setState(_appConfig2.default.exchangeRates['' + sellCurrency.toLowerCase() + buyCurrency.toLowerCase()]);
  });
};

var setTransactions = function setTransactions() {
  return _promise2.default.all([_actions2.default.btc.getTransaction(), _actions2.default.eth.getTransaction(), _actions2.default.token.getTransaction(_appConfig2.default.tokens.swap.address), _actions2.default.token.getTransaction(_appConfig2.default.tokens.noxon.address)]).then(function (transactions) {
    var _ref3;

    var data = (_ref3 = []).concat.apply(_ref3, [[]].concat((0, _toConsumableArray3.default)(transactions))).sort(function (a, b) {
      return b.date - a.date;
    });
    _reducers2.default.history.setTransactions(data);
  });
};

var getText = function getText() {
  var _getState = (0, _core.getState)(),
      _getState$user = _getState.user,
      ethData = _getState$user.ethData,
      btcData = _getState$user.btcData,
      eosData = _getState$user.eosData;

  var text = '\n' + window.location.hostname + ' emergency instruction\n\r\n\n\r\n\n#ETHEREUM\n\r\n\n\r\n\nEthereum address: ' + ethData.address + '  \r\n\nPrivate key: ' + ethData.privateKey + '\r\n\n\r\n\n\r\n\nHow to access tokens and ethers: \r\n\n1. Go here https://www.myetherwallet.com/#send-transaction \r\n\n2. Select \'Private key\'\r\n\n3. paste private key to input and click "unlock"\r\n\n\r\n\n\r\n\n\r\n\n# BITCOIN\r\n\n\r\n\n\r\n\nBitcoin address: ' + btcData.address + '\r\n\nPrivate key: ' + btcData.privateKey + '\r\n\n\r\n\n\r\n\n1. Go to blockchain.info\r\n\n2. login\r\n\n3. Go to settings > addresses > import\r\n\n4. paste private key and click "Ok"\r\n\n\r\n\n\r\n\n* We don`t store your private keys and will not be able to restore them!  \n\r\n\n\r\n\n\r\n\n# EOS\r\n\n\r\n\nEOS Master Private Key: ' + eosData.masterPrivateKey + '\r\n\nAccount name: ' + eosData.address + '\r\n\n';

  return text;
};

var downloadPrivateKeys = function downloadPrivateKeys() {
  var element = document.createElement('a');
  var text = getText();
  var message = 'Check your browser downloads';

  element.setAttribute('href', 'data:text/plaincharset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', window.location.hostname + '_keys_' + (0, _moment2.default)().format('DD.MM.YYYY') + '.txt');

  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);

  _actions2.default.notifications.show(_helpers.constants.notifications.Message, {
    message: message
  });
};

exports.default = {
  sign: sign,
  getBalances: getBalances,
  getDemoMoney: getDemoMoney,
  setExchangeRate: setExchangeRate,
  setTransactions: setTransactions,
  downloadPrivateKeys: downloadPrivateKeys
};

/***/ }),
/* 872 */,
/* 873 */,
/* 874 */,
/* 875 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(46);

var _keys2 = _interopRequireDefault(_keys);

var _reducers = __webpack_require__(27);

var _reducers2 = _interopRequireDefault(_reducers);

var _core = __webpack_require__(73);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addItemToFeed = function addItemToFeed(feeds) {
  var filteredFeeds = feeds.filter(function (f) {
    return f.request.length !== 0;
  });
  _reducers2.default.feeds.addItems(filteredFeeds);
};

var deleteItemToFeed = function deleteItemToFeed(orderId) {
  var _getState = (0, _core.getState)(),
      feeds = _getState.feeds;

  var filteredFeeds = (0, _keys2.default)(feeds).map(function (k) {
    return feeds[k];
  }).filter(function (f) {
    return f.id === orderId;
  });

  _reducers2.default.feeds.deleteItems(filteredFeeds);
};

var getFeedDataFromOrder = function getFeedDataFromOrder(orders) {
  var feeds = orders.map(function (order) {
    return {
      peer: order.owner.peer,
      id: order.id,
      content: {
        sellCurrency: order.sellCurrency,
        buyCurrency: order.buyCurrency,
        sellAmount: order.sellAmount,
        buyAmount: order.buyAmount
      },
      request: order.requests
    };
  });

  addItemToFeed(feeds);
};

exports.default = {
  getFeedDataFromOrder: getFeedDataFromOrder,
  deleteItemToFeed: deleteItemToFeed
};

/***/ }),
/* 876 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

var _reducers = __webpack_require__(27);

var _reducers2 = _interopRequireDefault(_reducers);

var _actions = __webpack_require__(12);

var _actions2 = _interopRequireDefault(_actions);

var _core = __webpack_require__(73);

var _swap = __webpack_require__(20);

var _swap2 = _interopRequireDefault(_swap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getOrders = function getOrders(orders) {
  _reducers2.default.core.getOrders({ orders: orders });
};

var setFilter = function setFilter(filter) {
  _reducers2.default.core.setFilter({ filter: filter });
};

var acceptRequest = function acceptRequest(orderId, participantPeer) {
  var order = _swap2.default.services.orders.getByKey(orderId);
  order.acceptRequest(participantPeer);
};

var declineRequest = function declineRequest(orderId, participantPeer) {
  var order = _swap2.default.services.orders.getByKey(orderId);
  order.declineRequest(participantPeer);
};

var removeOrder = function removeOrder(orderId) {
  _swap2.default.services.orders.remove(orderId);
  _actions2.default.feed.deleteItemToFeed(orderId);
};

var sendRequest = function sendRequest(orderId) {
  var order = _swap2.default.services.orders.getByKey(orderId);

  order.sendRequest(function (isAccepted) {
    console.log('user ' + order.owner.peer + ' ' + (isAccepted ? 'accepted' : 'declined') + ' your request');
  });
};

var createOrder = function createOrder(data) {
  _swap2.default.services.orders.create(data);
};

var updateCore = function updateCore() {
  var orders = _swap2.default.services.orders.items;

  if (orders !== undefined && orders.length > 0) {
    getOrders(orders);
    getSwapHistory();
    _actions2.default.feed.getFeedDataFromOrder(orders);
  }
};

var getSwapHistory = function getSwapHistory() {
  var swapId = JSON.parse(localStorage.getItem('swapId'));

  if (swapId === null || swapId.length === 0) {
    return;
  }

  var historySwap = swapId.map(function (item) {
    return (0, _assign2.default)({}, _swap2.default.env.storage.getItem('swap.' + item), _swap2.default.env.storage.getItem('flow.' + item));
  });

  _reducers2.default.history.setSwapHistory(historySwap);
};

exports.default = {
  getOrders: getOrders,
  setFilter: setFilter,
  createOrder: createOrder,
  getSwapHistory: getSwapHistory,
  updateCore: updateCore,
  sendRequest: sendRequest,
  acceptRequest: acceptRequest,
  declineRequest: declineRequest,
  removeOrder: removeOrder
};

/***/ }),
/* 877 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducers = __webpack_require__(27);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setFilter = function setFilter(filter) {
  _reducers2.default.history.setFilter(filter);
};

var ordersFilter = function ordersFilter(filter) {
  _reducers2.default.orders.ordersFilter(filter);
};

exports.default = {
  setFilter: setFilter,
  ordersFilter: ordersFilter
};

/***/ }),
/* 878 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(65);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = __webpack_require__(62);

var _promise2 = _interopRequireDefault(_promise);

var _bigi = __webpack_require__(37);

var _bigi2 = _interopRequireDefault(_bigi);

var _bignumber = __webpack_require__(80);

var _appConfig = __webpack_require__(18);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _bitcoinjsLib = __webpack_require__(201);

var _bitcoinjsLib2 = _interopRequireDefault(_bitcoinjsLib);

var _core = __webpack_require__(73);

var _reducers = __webpack_require__(27);

var _reducers2 = _interopRequireDefault(_reducers);

var _helpers = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = function login(privateKey) {
  var keyPair = void 0;

  if (privateKey) {
    var hash = _bitcoinjsLib2.default.crypto.sha256(privateKey);
    var d = _bigi2.default.fromBuffer(hash);

    keyPair = new _bitcoinjsLib2.default.ECPair(d, null, { network: _helpers.btc.network });
  } else {
    console.info('Created account Bitcoin ...');
    keyPair = _bitcoinjsLib2.default.ECPair.makeRandom({ network: _helpers.btc.network });
    privateKey = keyPair.toWIF();
  }

  localStorage.setItem(_helpers.constants.privateKeyNames.btc, privateKey);

  var account = new _bitcoinjsLib2.default.ECPair.fromWIF(privateKey, _helpers.btc.network); // eslint-disable-line
  var address = account.getAddress();
  var publicKey = account.getPublicKeyBuffer().toString('hex');

  var data = {
    account: account,
    keyPair: keyPair,
    address: address,
    privateKey: privateKey,
    publicKey: publicKey
  };

  window.getBtcAddress = function () {
    return data.address;
  };

  console.info('Logged in with Bitcoin', data);
  _reducers2.default.user.setAuthData({ name: 'btcData', data: data });
};

var getBalance = function getBalance() {
  var _getState = (0, _core.getState)(),
      address = _getState.user.btcData.address;

  return _helpers.request.get(_helpers.api.getApiServer('bitpay') + '/addr/' + address).then(function (_ref) {
    var balance = _ref.balance,
        unconfirmedBalance = _ref.unconfirmedBalance;

    console.log('BTC Balance:', balance);
    console.log('BTC unconfirmedBalance Balance:', unconfirmedBalance);
    _reducers2.default.user.setBalance({ name: 'btcData', amount: balance, unconfirmedBalance: unconfirmedBalance });
    return balance;
  }, function () {
    return _promise2.default.reject();
  });
};

var fetchBalance = function fetchBalance(address) {
  return _helpers.request.get(_helpers.api.getApiServer('bitpay') + '/addr/' + address).then(function (_ref2) {
    var balance = _ref2.balance,
        unconfirmedBalance = _ref2.unconfirmedBalance;

    console.log('BALANCE', balance);
    console.log('unconfirmedBalance', unconfirmedBalance);
    return balance;
  });
};

var getTransaction = function getTransaction() {
  return new _promise2.default(function (resolve) {
    var _getState2 = (0, _core.getState)(),
        address = _getState2.user.btcData.address;

    var url = _helpers.api.getApiServer('bitpay') + '/txs/?address=' + address;

    return _helpers.request.get(url).then(function (res) {
      var transactions = res.txs.map(function (item) {
        return {
          type: 'btc',
          hash: item.txid,
          confirmations: item.confirmations,
          value: item.vout[0].value,
          date: item.time * 1000,
          direction: address.toLocaleLowerCase() === item.vout[0].scriptPubKey.addresses[0].toLocaleLowerCase() ? 'in' : 'out'
        };
      });
      resolve(transactions);
    }).catch(function () {
      resolve([]);
    });
  });
};

var createScript = function createScript(data) {
  var secretHash = data.secretHash,
      ownerPublicKey = data.ownerPublicKey,
      recipientPublicKey = data.recipientPublicKey,
      lockTime = data.lockTime;


  var script = _bitcoinjsLib2.default.script.compile([_bitcoinjsLib2.default.opcodes.OP_RIPEMD160, Buffer.from(secretHash, 'hex'), _bitcoinjsLib2.default.opcodes.OP_EQUALVERIFY, Buffer.from(recipientPublicKey, 'hex'), _bitcoinjsLib2.default.opcodes.OP_EQUAL, _bitcoinjsLib2.default.opcodes.OP_IF, Buffer.from(recipientPublicKey, 'hex'), _bitcoinjsLib2.default.opcodes.OP_CHECKSIG, _bitcoinjsLib2.default.opcodes.OP_ELSE, _bitcoinjsLib2.default.script.number.encode(lockTime), _bitcoinjsLib2.default.opcodes.OP_CHECKLOCKTIMEVERIFY, _bitcoinjsLib2.default.opcodes.OP_DROP, Buffer.from(ownerPublicKey, 'hex'), _bitcoinjsLib2.default.opcodes.OP_CHECKSIG, _bitcoinjsLib2.default.opcodes.OP_ENDIF]);

  var scriptPubKey = _bitcoinjsLib2.default.script.scriptHash.output.encode(_bitcoinjsLib2.default.crypto.hash160(script));
  var scriptAddress = _bitcoinjsLib2.default.address.fromOutputScript(scriptPubKey, { network: _helpers.btc.network });

  return {
    scriptAddress: scriptAddress
  };
};

var send = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(from, to, amount) {
    var _getState3, privateKey, keyPair, tx, unspents, fundValue, feeValue, totalUnspent, skipValue, txRaw;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _getState3 = (0, _core.getState)(), privateKey = _getState3.user.btcData.privateKey;
            keyPair = _bitcoinjsLib2.default.ECPair.fromWIF(privateKey, _helpers.btc.network);
            tx = new _bitcoinjsLib2.default.TransactionBuilder(_helpers.btc.network);
            _context.next = 5;
            return fetchUnspents(from);

          case 5:
            unspents = _context.sent;
            fundValue = new _bignumber.BigNumber(String(amount)).multipliedBy(1e8).integerValue().toNumber();
            feeValue = 15000;
            totalUnspent = unspents.reduce(function (summ, _ref4) {
              var satoshis = _ref4.satoshis;
              return summ + satoshis;
            }, 0);
            skipValue = totalUnspent - feeValue - fundValue;


            unspents.forEach(function (_ref5) {
              var txid = _ref5.txid,
                  vout = _ref5.vout;
              return tx.addInput(txid, vout, 0xfffffffe);
            });
            tx.addOutput(to, fundValue);
            tx.addOutput(from, skipValue);

            tx.inputs.forEach(function (input, index) {
              tx.sign(index, keyPair);
            });

            txRaw = tx.buildIncomplete();


            broadcastTx(txRaw.toHex());

          case 16:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function send(_x, _x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();

var fetchUnspents = function fetchUnspents(address) {
  return _helpers.request.get(_helpers.api.getApiServer('bitpay') + '/addr/' + address + '/utxo');
};

var broadcastTx = function broadcastTx(txRaw) {
  return _helpers.request.post(_helpers.api.getApiServer('bitpay') + '/tx/send', {
    body: {
      rawtx: txRaw
    }
  });
};

exports.default = {
  login: login,
  getBalance: getBalance,
  getTransaction: getTransaction,
  send: send,
  fetchUnspents: fetchUnspents,
  createScript: createScript,
  broadcastTx: broadcastTx,
  fetchBalance: fetchBalance
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),
/* 879 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(65);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = __webpack_require__(62);

var _promise2 = _interopRequireDefault(_promise);

var _helpers = __webpack_require__(11);

var _core = __webpack_require__(73);

var _actions = __webpack_require__(12);

var _actions2 = _interopRequireDefault(_actions);

var _web = __webpack_require__(154);

var _web2 = _interopRequireDefault(_web);

var _reducers = __webpack_require__(27);

var _reducers2 = _interopRequireDefault(_reducers);

var _appConfig = __webpack_require__(18);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _referral = __webpack_require__(417);

var _referral2 = _interopRequireDefault(_referral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = function login(privateKey) {
  var data = void 0;

  if (privateKey) {
    data = _web2.default.eth.accounts.privateKeyToAccount(privateKey);
  } else {
    console.info('Created account Ethereum ...');
    data = _web2.default.eth.accounts.create();
  }

  localStorage.setItem(_helpers.constants.privateKeyNames.eth, data.privateKey);

  _web2.default.eth.accounts.wallet.add(data.privateKey);
  _reducers2.default.user.setAuthData({ name: 'ethData', data: data });

  window.getEthAddress = function () {
    return data.address;
  };
  _referral2.default.newReferral(data.address);

  console.info('Logged in with Ethereum', data);

  return data.privateKey;
};

var getBalance = function getBalance() {
  var _getState = (0, _core.getState)(),
      address = _getState.user.ethData.address;

  return _web2.default.eth.getBalance(address).then(function (result) {
    var amount = Number(_web2.default.utils.fromWei(result));

    _reducers2.default.user.setBalance({ name: 'ethData', amount: amount });
    return amount;
  }).catch(function (e) {
    console.log('Web3 doesn\'t work please again later ', e.error);
  });
};

var fetchBalance = function fetchBalance(address) {
  return _web2.default.eth.getBalance(address).then(function (result) {
    return Number(_web2.default.utils.fromWei(result));
  }).catch(function (e) {
    console.log('Web3 doesn\'t work please again later ', e.error);
  });
};

var getTransaction = function getTransaction() {
  return new _promise2.default(function (resolve) {
    var _getState2 = (0, _core.getState)(),
        address = _getState2.user.ethData.address;

    var url = _helpers.api.getApiServer('etherscan') + '?module=account&action=txlist&address=' + address + '&startblock=0&endblock=99999999&sort=asc&apikey=' + _appConfig2.default.apiKeys.etherscan;

    return _helpers.request.get(url).then(function (res) {
      var transactions = res.result.filter(function (item) {
        return item.value > 0;
      }).map(function (item) {
        return {
          type: 'eth',
          confirmations: item.confirmations,
          hash: item.hash,
          status: item.blockHash != null ? 1 : 0,
          value: _web2.default.utils.fromWei(item.value),
          address: item.to,
          date: item.timeStamp * 1000,
          direction: address.toLowerCase() === item.to.toLowerCase() ? 'in' : 'out'
        };
      });

      resolve(transactions);
    }).catch(function () {
      resolve([]);
    });
  });
};

var send = function send(from, to, amount) {
  return new _promise2.default(function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(resolve, reject) {
      var _getState3, privateKey, params, txRaw, receipt;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _getState3 = (0, _core.getState)(), privateKey = _getState3.user.ethData.privateKey;
              params = {
                to: String(to).trim(),
                gasPrice: '20000000000',
                gas: '21000',
                value: _web2.default.utils.toWei(String(amount))
              };
              txRaw = void 0;
              _context.next = 5;
              return _web2.default.eth.accounts.signTransaction(params, privateKey).then(function (result) {
                txRaw = _web2.default.eth.sendSignedTransaction(result.rawTransaction);
              });

            case 5:
              _context.next = 7;
              return txRaw.on('transactionHash', function (hash) {
                var txId = _appConfig2.default.link.etherscan + '/tx/' + hash;
                _actions2.default.loader.show(true, true, txId);
              }).on('error', function (err) {
                reject(err);
              });

            case 7:
              receipt = _context.sent;


              resolve(receipt);

            case 9:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};

exports.default = {
  send: send,
  login: login,
  getBalance: getBalance,
  fetchBalance: fetchBalance,
  getTransaction: getTransaction
};

/***/ }),
/* 880 */,
/* 881 */,
/* 882 */,
/* 883 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parseFloat = __webpack_require__(884);

var _parseFloat2 = _interopRequireDefault(_parseFloat);

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(65);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _core = __webpack_require__(73);

var _appConfig = __webpack_require__(18);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _reducers = __webpack_require__(27);

var _reducers2 = _interopRequireDefault(_reducers);

var _constants = __webpack_require__(372);

var _constants2 = _interopRequireDefault(_constants);

var _eosjsKeygen = __webpack_require__(889);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eos = null;
var ecc = null;

var keyProvider = function keyProvider(_ref) {
  var transaction = _ref.transaction,
      pubkeys = _ref.pubkeys;

  var _getState = (0, _core.getState)(),
      _getState$user$eosDat = _getState.user.eosData,
      privateKeys = _getState$user$eosDat.privateKeys,
      publicKeys = _getState$user$eosDat.publicKeys;

  if (!pubkeys) {
    return [publicKeys.active];
  }

  return [privateKeys.active];
};

var init = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var EOSLibrary, _config$services$eos, chainId, httpEndpoint;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(eos === null)) {
              _context.next = 9;
              break;
            }

            _context.next = 3;
            return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 1265));

          case 3:
            EOSLibrary = _context.sent;
            _config$services$eos = _appConfig2.default.services.eos, chainId = _config$services$eos.chainId, httpEndpoint = _config$services$eos.httpEndpoint;

            if (!(!chainId || !httpEndpoint)) {
              _context.next = 7;
              break;
            }

            throw new Error('Invalid config');

          case 7:

            eos = EOSLibrary({
              chainId: chainId,
              httpEndpoint: httpEndpoint,
              keyProvider: keyProvider
            });

            ecc = EOSLibrary.modules.ecc;

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function init() {
    return _ref2.apply(this, arguments);
  };
}();

var register = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(accountName, privateKey) {
    var keys, _ref4, permissions, providedKey, requiredKey;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _eosjsKeygen.Keygen.generateMasterKeys(privateKey);

          case 2:
            keys = _context2.sent;

            if (!(keys.masterPrivateKey !== privateKey)) {
              _context2.next = 5;
              break;
            }

            throw new Error('Invalid private key');

          case 5:
            _context2.next = 7;
            return eos.getAccount(accountName);

          case 7:
            _ref4 = _context2.sent;
            permissions = _ref4.permissions;
            providedKey = ecc.privateToPublic(keys.privateKeys.active);
            requiredKey = permissions.find(function (item) {
              return item.perm_name === 'active';
            }).required_auth.keys[0].key;

            if (!(providedKey !== requiredKey)) {
              _context2.next = 13;
              break;
            }

            throw new Error('Invalid accounts permissions');

          case 13:

            localStorage.setItem(_constants2.default.privateKeyNames.eos, privateKey);
            localStorage.setItem(_constants2.default.privateKeyNames.eosAccount, accountName);

            _reducers2.default.user.setAuthData({ name: 'eosData', data: (0, _assign2.default)({}, keys, { address: accountName }) });

          case 16:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function register(_x, _x2) {
    return _ref3.apply(this, arguments);
  };
}();

var login = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(accountName, masterPrivateKey) {
    var keys;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _eosjsKeygen.Keygen.generateMasterKeys(masterPrivateKey);

          case 2:
            keys = _context3.sent;

            _reducers2.default.user.setAuthData({ name: 'eosData', data: (0, _assign2.default)({}, keys, { address: accountName }) });

          case 4:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function login(_x3, _x4) {
    return _ref5.apply(this, arguments);
  };
}();

var getBalance = function () {
  var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
    var _getState2, address, balance, amount;

    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _getState2 = (0, _core.getState)(), address = _getState2.user.eosData.address;

            if (!(eos === null || typeof address === 'string')) {
              _context4.next = 3;
              break;
            }

            return _context4.abrupt('return');

          case 3:
            _context4.next = 5;
            return eos.getCurrencyBalance({
              code: 'eosio.token',
              symbol: 'EOS',
              account: address
            });

          case 5:
            balance = _context4.sent;
            amount = (0, _parseFloat2.default)(balance[0]) || 0;


            _reducers2.default.user.setBalance({ name: 'eosData', amount: amount });

          case 8:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function getBalance() {
    return _ref6.apply(this, arguments);
  };
}();

var send = function () {
  var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(from, to, amount) {
    var _getState3, address, transfer;

    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _getState3 = (0, _core.getState)(), address = _getState3.user.eosData.address;

            if (!(eos === null || typeof address === 'string')) {
              _context5.next = 3;
              break;
            }

            return _context5.abrupt('return');

          case 3:
            _context5.next = 5;
            return eos.transaction({
              actions: [{
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: from,
                  permission: 'active'
                }],
                data: {
                  from: from,
                  to: to.trim(),
                  quantity: amount + '.0000 EOS',
                  memo: ''
                }
              }]
            });

          case 5:
            transfer = _context5.sent;

          case 6:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined);
  }));

  return function send(_x5, _x6, _x7) {
    return _ref7.apply(this, arguments);
  };
}();

exports.default = {
  init: init,
  login: login,
  register: register,
  getBalance: getBalance,
  send: send
};

/***/ }),
/* 884 */,
/* 885 */,
/* 886 */,
/* 887 */,
/* 888 */,
/* 889 */,
/* 890 */,
/* 891 */,
/* 892 */,
/* 893 */,
/* 894 */,
/* 895 */,
/* 896 */,
/* 897 */,
/* 898 */,
/* 899 */,
/* 900 */,
/* 901 */,
/* 902 */,
/* 903 */,
/* 904 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(62);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(65);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _humanStandardTokenAbi = __webpack_require__(905);

var _humanStandardTokenAbi2 = _interopRequireDefault(_humanStandardTokenAbi);

var _helpers = __webpack_require__(11);

var _core = __webpack_require__(73);

var _actions = __webpack_require__(12);

var _actions2 = _interopRequireDefault(_actions);

var _web = __webpack_require__(154);

var _web2 = _interopRequireDefault(_web);

var _reducers = __webpack_require__(27);

var _reducers2 = _interopRequireDefault(_reducers);

var _appConfig = __webpack_require__(18);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _bignumber = __webpack_require__(80);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_bignumber.BigNumber.config({ RANGE: [-1e+9, 1e+9], POW_PRECISION: 0 });

var login = function login(privateKey, contractAddress, nameContract, decimals) {
  var data = void 0;
  if (privateKey) {
    data = _web2.default.eth.accounts.privateKeyToAccount(privateKey);
  } else {
    console.info('Created account ETH Token ...');
    data = _web2.default.eth.accounts.create();
    _web2.default.eth.accounts.wallet.add(data);
  }

  _web2.default.eth.accounts.wallet.add(data.privateKey);
  console.info('Logged in with ETH Token', data);

  setupContract(data.address, contractAddress, nameContract, decimals);
};

var setupContract = function setupContract(ethAddress, contractAddress, nameContract, decimals) {
  if (!_web2.default.eth.accounts.wallet[ethAddress]) {
    throw new Error('web3 does not have given address');
  }

  var data = {
    address: ethAddress,
    balance: 0,
    name: nameContract,
    currency: nameContract.toUpperCase(),
    contractAddress: contractAddress,
    decimals: decimals
  };

  _reducers2.default.user.setTokenAuthData({ name: data.name, data: data });
};

var getBalance = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(tokenAddress, name, decimals) {
    var _getState, address, ERC20, result, amount;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _getState = (0, _core.getState)(), address = _getState.user.ethData.address;
            ERC20 = new _web2.default.eth.Contract(_humanStandardTokenAbi2.default, tokenAddress);
            _context.next = 4;
            return ERC20.methods.balanceOf(address).call();

          case 4:
            result = _context.sent;
            amount = new _bignumber.BigNumber(String(result)).dividedBy(new _bignumber.BigNumber(String(10)).pow(decimals)).toNumber();


            _reducers2.default.user.setTokenBalance({ name: name, amount: amount });
            return _context.abrupt('return', amount);

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function getBalance(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var fetchBalance = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(address, tokenAddress, decimals) {
    var ERC20, result, amount;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            ERC20 = new _web2.default.eth.Contract(_humanStandardTokenAbi2.default, tokenAddress);
            _context2.next = 3;
            return ERC20.methods.balanceOf(address).call();

          case 3:
            result = _context2.sent;
            amount = new _bignumber.BigNumber(String(result)).dividedBy(new _bignumber.BigNumber(String(10)).pow(decimals)).toNumber();
            return _context2.abrupt('return', amount);

          case 6:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function fetchBalance(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

var getTransaction = function getTransaction(contractAddress) {
  return new _promise2.default(function (resolve) {
    var _getState2 = (0, _core.getState)(),
        address = _getState2.user.ethData.address;

    var url = ['https://api-rinkeby.etherscan.io/api?module=account&action=tokentx', '&contractaddress=' + contractAddress, '&address=' + address, '&startblock=0&endblock=99999999', '&sort=asc&apikey=' + _appConfig2.default.apiKeys.blocktrail].join('');

    return _helpers.request.get(url).then(function (res) {
      var transactions = res.result.filter(function (item) {
        return item.value > 0;
      }).map(function (item) {
        return {
          confirmations: item.confirmations,
          type: item.tokenSymbol,
          hash: item.hash,
          contractAddress: item.contractAddress,
          status: item.blockHash != null ? 1 : 0,
          value: new _bignumber.BigNumber(String(item.value)).dividedBy(new _bignumber.BigNumber(10).pow(Number(item.tokenDecimal))).toNumber(),
          address: item.to,
          date: item.timeStamp * 1000,
          direction: address.toLowerCase() === item.to.toLowerCase() ? 'in' : 'out'
        };
      });
      resolve(transactions);
    }).catch(function () {
      resolve([]);
    });
  });
};

var send = function send(contractAddress, to, amount, decimals) {
  var _getState3 = (0, _core.getState)(),
      address = _getState3.user.ethData.address;

  var options = {
    from: address,
    gas: '' + _appConfig2.default.services.web3.gas,
    gasPrice: '' + _appConfig2.default.services.web3.gasPrice
  };

  var tokenContract = new _web2.default.eth.Contract(_humanStandardTokenAbi2.default, contractAddress, options);
  var newAmount = new _bignumber.BigNumber(String(amount)).times(new _bignumber.BigNumber(10).pow(decimals)).integerValue();

  return new _promise2.default(function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(resolve, reject) {
      var receipt;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return tokenContract.methods.transfer(to, newAmount).send().on('transactionHash', function (hash) {
                var txId = _appConfig2.default.link.etherscan + '/tx/' + hash;
                _actions2.default.loader.show(true, true, txId);
              }).on('error', function (err) {
                reject(err);
              });

            case 2:
              receipt = _context3.sent;


              resolve(receipt);

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x7, _x8) {
      return _ref3.apply(this, arguments);
    };
  }());
};

var approve = function approve(contractAddress, amount, decimals, name) {
  var _getState4 = (0, _core.getState)(),
      address = _getState4.user.ethData.address;

  var newAmount = new _bignumber.BigNumber(String(amount)).times(new _bignumber.BigNumber(10).pow(decimals)).integerValue();
  var ERC20 = new _web2.default.eth.Contract(_humanStandardTokenAbi2.default, contractAddress);

  return new _promise2.default(function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(resolve, reject) {
      var result;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return ERC20.methods.approve(_appConfig2.default.token.contract, newAmount).send({
                from: address,
                gas: '' + _appConfig2.default.services.web3.gas,
                gasPrice: '' + _appConfig2.default.services.web3.gasPrice
              }).on('error', function (err) {
                reject(err);
              });

            case 3:
              result = _context4.sent;


              resolve(result);
              _context4.next = 10;
              break;

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4['catch'](0);

              reject(_context4.t0);

            case 10:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined, [[0, 7]]);
    }));

    return function (_x9, _x10) {
      return _ref4.apply(this, arguments);
    };
  }()).then(function () {
    _reducers2.default.user.setTokenApprove({ name: name, approve: true });
  });
};

var allowance = function allowance(contractAddress, name) {
  var _getState5 = (0, _core.getState)(),
      address = _getState5.user.ethData.address;

  var ERC20 = new _web2.default.eth.Contract(_humanStandardTokenAbi2.default, contractAddress);

  return new _promise2.default(function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(resolve, reject) {
      var allowance;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return ERC20.methods.allowance(address, _appConfig2.default.token.contract).call();

            case 2:
              allowance = _context5.sent;


              console.log('💸 allowance:', allowance);

              _reducers2.default.user.setTokenApprove({ name: name, approve: allowance > 0 });

              resolve(allowance);

            case 6:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined);
    }));

    return function (_x11, _x12) {
      return _ref5.apply(this, arguments);
    };
  }());
};

exports.default = {
  login: login,
  getBalance: getBalance,
  getTransaction: getTransaction,
  send: send,
  fetchBalance: fetchBalance,
  approve: approve,
  allowance: allowance
};

/***/ }),
/* 905 */,
/* 906 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(62);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(65);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var initWallet = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(privateKey) {
    var keyPair;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            keyPair = (0, _nimiq.ethKeyToKeyPair)(privateKey);
            return _context2.abrupt('return', new window.Nimiq.Wallet(keyPair));

          case 2:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function initWallet(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var init = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
    var _this = this;

    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return initNimiq();

          case 2:
            if (!initPromise) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt('return', initPromise);

          case 6:
            if (!isInitialized) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt('return', _promise2.default.resolve());

          case 8:

            initPromise = new _promise2.default(function () {
              var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(resolve) {
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        window.nim = $;

                        _context3.next = 3;
                        return window.Nimiq.Consensus.nano();

                      case 3:
                        $.consensus = _context3.sent;

                        $.blockchain = $.consensus.blockchain;
                        $.accounts = $.blockchain.accounts;
                        $.mempool = $.consensus.mempool;
                        $.network = $.consensus.network;

                        $.consensus.on('established', function () {
                          window.Nimiq.Log.i('Consensus', 'Current state: height=' + $.blockchain.height + ', headHash=' + $.blockchain.headHash);
                          resolve();
                        });
                        $.network.connect();

                      case 10:
                      case 'end':
                        return _context3.stop();
                    }
                  }
                }, _callee3, _this);
              }));

              return function (_x2) {
                return _ref4.apply(this, arguments);
              };
            }());

            return _context4.abrupt('return', initPromise);

          case 10:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function init() {
    return _ref3.apply(this, arguments);
  };
}();

var _reducers = __webpack_require__(27);

var _reducers2 = _interopRequireDefault(_reducers);

var _appConfig = __webpack_require__(18);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _nimiq = __webpack_require__(907);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $ = {};
var initNimiqPromise = void 0;
var isNimiqInitialized = false;
var initPromise = void 0;
var isInitialized = false;

var NETWORK = _appConfig2.default.entry === 'mainnet' ? 'main' : 'test';

var initNimiq = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!initNimiqPromise) {
              _context.next = 4;
              break;
            }

            return _context.abrupt('return', initNimiqPromise);

          case 4:
            if (!isNimiqInitialized) {
              _context.next = 6;
              break;
            }

            return _context.abrupt('return', _promise2.default.resolve());

          case 6:

            initNimiqPromise = new _promise2.default(function (resolve, reject) {
              if (!window.Nimiq) {
                console.error('Nimiq not present, add from CDN: https://cdn.nimiq.com/nimiq.js');
                reject();
              } else {
                window.Nimiq.init(function () {
                  isNimiqInitialized = true;
                  window.Nimiq.GenesisConfig.init(window.Nimiq.GenesisConfig.CONFIGS[NETWORK]);
                  resolve();
                });
              }
            });

            return _context.abrupt('return', initNimiqPromise);

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function initNimiq() {
    return _ref.apply(this, arguments);
  };
}();

var login = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(ethPrivateKey) {
    var data;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return init();

          case 2:
            _context5.next = 4;
            return initWallet(ethPrivateKey);

          case 4:
            $.wallet = _context5.sent;
            data = {
              balance: 0,
              address: $.wallet.address.toUserFriendlyAddress()
            };


            window.getNimAddress = function () {
              return data.address;
            };

            console.info('Logged in with Nimiq', data);
            _reducers2.default.user.setAuthData({ name: 'nimData', data: data });

            return _context5.abrupt('return', data);

          case 10:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined);
  }));

  return function login(_x3) {
    return _ref5.apply(this, arguments);
  };
}();

var getBalance = function () {
  var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
    var account, amount;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return init();

          case 2:
            _context6.next = 4;
            return $.consensus.getAccount($.wallet.address);

          case 4:
            account = _context6.sent;
            amount = window.Nimiq.Policy.satoshisToCoins(account.balance).toFixed(0);


            _reducers2.default.user.setBalance({ name: 'nimData', amount: amount });

            return _context6.abrupt('return', amount);

          case 8:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, undefined);
  }));

  return function getBalance() {
    return _ref6.apply(this, arguments);
  };
}();

var getTransaction = function getTransaction() {};

var send = function () {
  var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(from, address, amount) {
    var _prepareTransaction, addr, value, fee, height, tx;

    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return init();

          case 2:
            _prepareTransaction = (0, _nimiq.prepareTransaction)($, address, amount), addr = _prepareTransaction.addr, value = _prepareTransaction.value, fee = _prepareTransaction.fee, height = _prepareTransaction.height;
            tx = $.wallet.createTransaction(addr, value, fee, height);


            $.consensus.relayTransaction(tx);
            $.consensus.subscribeAccounts([tx.recipient]);

            window.Nimiq.Log.i('TX', 'Waiting for Nimiq transaction [' + tx.hash().toHex() + '] to confirm, please wait...');

            (0, _nimiq.followTransaction)($, tx).then(function () {
              return window.Nimiq.Log.i('TX', 'Nimiq transaction [' + tx.hash().toHex() + '] confirmed!');
            }).then(function () {
              return getBalance();
            });

            return _context7.abrupt('return', tx);

          case 9:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, undefined);
  }));

  return function send(_x4, _x5, _x6) {
    return _ref7.apply(this, arguments);
  };
}();

exports.default = {
  login: login,
  getBalance: getBalance,
  getTransaction: getTransaction,
  send: send
};

/***/ }),
/* 907 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareTransaction = exports.followTransaction = exports.ethKeyToKeyPair = undefined;

var _promise = __webpack_require__(62);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ethKeyToKeyPair = function ethKeyToKeyPair(ethKey) {
  if (!window.Nimiq) throw new Error('include Nimiq from CDN');

  var raw = ethKey.slice(0, 2) === '0x' ? ethKey.substring(2) : ethKey;
  var buf = Buffer.from(raw, 'hex');
  var privKey = new window.Nimiq.PrivateKey(buf);
  var publicKey = window.Nimiq.PublicKey.derive(privKey);

  return new window.Nimiq.KeyPair(privKey, publicKey);
};

var followTransaction = function followTransaction($, tx) {
  return new _promise2.default(function (resolve) {
    var id = $.mempool.on('transaction-mined', function (tx2) {
      if (tx.equals(tx2)) {
        $.mempool.off('transaction-mined', id);
        resolve();
      }
    });
  });
};

var prepareTransaction = function prepareTransaction($, address, amount) {
  var height = $.blockchain.height + 1;
  var addr = window.Nimiq.Address.fromUserFriendlyAddress(address);
  var value = window.Nimiq.Policy.coinsToSatoshis(amount);
  var fee = window.Nimiq.Policy.coinsToSatoshis(0);

  return { addr: addr, value: value, fee: fee, height: height };
};

exports.ethKeyToKeyPair = ethKeyToKeyPair;
exports.followTransaction = followTransaction;
exports.prepareTransaction = prepareTransaction;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),
/* 908 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(46);

var _keys2 = _interopRequireDefault(_keys);

var _promise = __webpack_require__(62);

var _promise2 = _interopRequireDefault(_promise);

var _reducers = __webpack_require__(27);

var _reducers2 = _interopRequireDefault(_reducers);

var _appConfig = __webpack_require__(18);

var _appConfig2 = _interopRequireDefault(_appConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkServers = function checkServers() {
  return _promise2.default.all((0, _keys2.default)(_appConfig2.default.apiAlternatives).map(function (provider) {
    return _promise2.default.race(_appConfig2.default.apiAlternatives[provider].map(function (server) {
      return new _promise2.default(function (resolve, reject) {
        fetch(server + '/status').then(function () {
          return resolve(server);
        }).catch(function (e) {
          return reject(e);
        });
      });
    })).then(function (chosen) {
      _reducers2.default.api.setApiServer(provider, chosen);
      console.log('[' + provider + '] ' + chosen + ' is OK, using it');
    });
  })).then(function () {
    console.log('All servers is OK.');
  });
};

exports.default = {
  checkServers: checkServers
};

/***/ }),
/* 909 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducers = __webpack_require__(27);

var _reducers2 = _interopRequireDefault(_reducers);

var _reactGtmModule = __webpack_require__(910);

var _reactGtmModule2 = _interopRequireDefault(_reactGtmModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addEvent = function addEvent(name) {
  return _reducers2.default.addEvent(name);
};
var dataEvent = function dataEvent(eventName) {

  window.dataLayer = window.dataLayer ? window.dataLayer : [];
  window.dataLayer.push({ 'event': eventName });

  console.log(window.dataLayer);
};

var tagManagerArgs = {
  gtmId: 'GTM-WK72GSV',
  dataLayerName: 'dataLayer'
};

_reactGtmModule2.default.initialize(tagManagerArgs);

exports.default = {
  addEvent: addEvent,
  dataEvent: dataEvent
};

/***/ }),
/* 910 */,
/* 911 */,
/* 912 */,
/* 913 */,
/* 914 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducers = __webpack_require__(27);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var set = function set(payload) {
  _reducers2.default.ipfs.set(payload);
};

var userJoined = function userJoined() {
  _reducers2.default.ipfs.userJoined();
};

var userLeft = function userLeft() {
  _reducers2.default.ipfs.userLeft();
};

exports.default = {
  set: set,
  userJoined: userJoined,
  userLeft: userLeft
};

/***/ }),
/* 915 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _stringify = __webpack_require__(166);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _EmergencySave = __webpack_require__(1039);

var _EmergencySave2 = _interopRequireDefault(_EmergencySave);

var _Button = __webpack_require__(33);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmergencySave = (_dec = (0, _reactCssModules2.default)(_EmergencySave2.default), _dec(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(EmergencySave, _Component);

  function EmergencySave() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, EmergencySave);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EmergencySave.__proto__ || (0, _getPrototypeOf2.default)(EmergencySave)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isShowEmergency: false
    }, _this.showEmergency = function () {
      _this.setState({
        isShowEmergency: !_this.state.isShowEmergency
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(EmergencySave, [{
    key: 'render',
    value: function render() {
      var isShowEmergency = this.state.isShowEmergency;
      var state = this.props.flow.state;


      return _react2.default.createElement(
        'div',
        { styleName: 'block' },
        _react2.default.createElement(
          'span',
          { styleName: 'button', onClick: this.showEmergency },
          'Information about swap'
        ),
        isShowEmergency && _react2.default.createElement(
          'pre',
          null,
          _react2.default.createElement(
            'code',
            null,
            (0, _stringify2.default)(state, false, 4)
          )
        )
      );
    }
  }]);
  return EmergencySave;
}(_react.Component), _class2.propTypes = {
  flow: _propTypes2.default.object
}, _temp2)) || _class);
exports.default = EmergencySave;

/***/ }),
/* 916 */,
/* 917 */,
/* 918 */,
/* 919 */,
/* 920 */,
/* 921 */,
/* 922 */,
/* 923 */,
/* 924 */,
/* 925 */,
/* 926 */,
/* 927 */,
/* 928 */,
/* 929 */,
/* 930 */,
/* 931 */,
/* 932 */,
/* 933 */,
/* 934 */,
/* 935 */,
/* 936 */,
/* 937 */,
/* 938 */,
/* 939 */,
/* 940 */,
/* 941 */,
/* 942 */,
/* 943 */,
/* 944 */,
/* 945 */,
/* 946 */,
/* 947 */,
/* 948 */,
/* 949 */,
/* 950 */,
/* 951 */,
/* 952 */,
/* 953 */,
/* 954 */,
/* 955 */,
/* 956 */,
/* 957 */,
/* 958 */,
/* 959 */,
/* 960 */,
/* 961 */,
/* 962 */,
/* 963 */,
/* 964 */,
/* 965 */,
/* 966 */,
/* 967 */,
/* 968 */,
/* 969 */,
/* 970 */,
/* 971 */,
/* 972 */,
/* 973 */,
/* 974 */,
/* 975 */,
/* 976 */,
/* 977 */,
/* 978 */,
/* 979 */,
/* 980 */,
/* 981 */,
/* 982 */,
/* 983 */,
/* 984 */,
/* 985 */,
/* 986 */,
/* 987 */,
/* 988 */,
/* 989 */,
/* 990 */,
/* 991 */,
/* 992 */,
/* 993 */,
/* 994 */,
/* 995 */,
/* 996 */,
/* 997 */,
/* 998 */,
/* 999 */,
/* 1000 */,
/* 1001 */,
/* 1002 */,
/* 1003 */,
/* 1004 */,
/* 1005 */,
/* 1006 */,
/* 1007 */,
/* 1008 */,
/* 1009 */,
/* 1010 */,
/* 1011 */,
/* 1012 */,
/* 1013 */,
/* 1014 */,
/* 1015 */,
/* 1016 */,
/* 1017 */,
/* 1018 */,
/* 1019 */,
/* 1020 */,
/* 1021 */,
/* 1022 */,
/* 1023 */,
/* 1024 */,
/* 1025 */,
/* 1026 */,
/* 1027 */,
/* 1028 */,
/* 1029 */,
/* 1030 */,
/* 1031 */,
/* 1032 */,
/* 1033 */,
/* 1034 */,
/* 1035 */,
/* 1036 */,
/* 1037 */,
/* 1038 */,
/* 1039 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"block":"FrwFdW","button":"_2yZ_HA"};

/***/ }),
/* 1040 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"qJheS4","fullWidth":"_2Gzkvz","brand":"_3zY6WO","green":"_s-GvI","white":"ewAS27","gray":"_9dfBig","disabled":"_1WzQpi"};

/***/ }),
/* 1041 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _crypto = __webpack_require__(101);

var _crypto2 = _interopRequireDefault(_crypto);

var _appConfig = __webpack_require__(18);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _bignumber = __webpack_require__(80);

var _Timer = __webpack_require__(140);

var _Timer2 = _interopRequireDefault(_Timer);

var _Button = __webpack_require__(33);

var _Button2 = _interopRequireDefault(_Button);

var _InlineLoader = __webpack_require__(141);

var _InlineLoader2 = _interopRequireDefault(_InlineLoader);

var _TimerButton = __webpack_require__(142);

var _TimerButton2 = _interopRequireDefault(_TimerButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BtcToEth = function (_Component) {
  (0, _inherits3.default)(BtcToEth, _Component);

  function BtcToEth(_ref) {
    var swap = _ref.swap;
    (0, _classCallCheck3.default)(this, BtcToEth);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BtcToEth.__proto__ || (0, _getPrototypeOf2.default)(BtcToEth)).call(this));

    _this.handleFlowStateUpdate = function (values) {
      _this.setState({
        flow: values
      });
    };

    _this.submitSecret = function () {
      var secret = _this.state.secret;


      _this.swap.flow.submitSecret(secret);
    };

    _this.updateBalance = function () {
      _this.swap.flow.syncBalance();
    };

    _this.addGasPrice = function () {
      var gwei = new _bignumber.BigNumber(String(_this.swap.flow.ethSwap.gasPrice)).plus(new _bignumber.BigNumber(1e9));
      _this.swap.flow.ethSwap.addGasPrice(gwei);
      _this.swap.flow.restartStep();
    };

    _this.tryRefund = function () {
      _this.swap.flow.tryRefund();
    };

    _this.getRefundTxHex = function () {
      var flow = _this.state.flow;


      if (flow.refundTxHex) {
        return flow.refundTxHex;
      } else if (flow.btcScriptValues) {
        _this.swap.flow.getRefundTxHex();
      }
    };

    _this.swap = swap;

    _this.state = {
      flow: _this.swap.flow.state,
      secret: _crypto2.default.randomBytes(32).toString('hex'),
      enabledButton: false
    };
    return _this;
  }

  (0, _createClass3.default)(BtcToEth, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.swap.on('state update', this.handleFlowStateUpdate);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.swap.off('state update', this.handleFlowStateUpdate);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      var _state = this.state,
          secret = _state.secret,
          flow = _state.flow,
          enabledButton = _state.enabledButton;


      return _react2.default.createElement(
        'div',
        null,
        this.swap.id && _react2.default.createElement(
          'strong',
          null,
          this.swap.sellAmount.toNumber(),
          ' ',
          this.swap.sellCurrency,
          ' \u27F6 ',
          this.swap.buyAmount.toNumber(),
          ' ',
          this.swap.buyCurrency
        ),
        !this.swap.id && (this.swap.isMy ? _react2.default.createElement(
          'h3',
          null,
          'This order doesn\'t have a buyer'
        ) : _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            'The order creator is offline. Waiting for him..'
          ),
          _react2.default.createElement(_InlineLoader2.default, null)
        )),
        !flow.isParticipantSigned && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            'We are waiting for a market maker. If it does not appear within 5 minutes, the swap will be canceled automatically.'
          ),
          _react2.default.createElement(_InlineLoader2.default, null)
        ),
        flow.isParticipantSigned && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            '2. Create a secret key'
          ),
          !flow.secretHash ? _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement('input', { type: 'text', placeholder: 'Secret Key', defaultValue: secret }),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              _TimerButton2.default,
              { brand: true, onClick: this.submitSecret },
              'Confirm'
            )
          ) : _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'div',
              null,
              'Save the secret key! Otherwise there will be a chance you loose your money!'
            ),
            _react2.default.createElement(
              'div',
              null,
              'Secret Key: ',
              _react2.default.createElement(
                'strong',
                null,
                flow.secret
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              'Secret Hash: ',
              _react2.default.createElement(
                'strong',
                null,
                flow.secretHash
              )
            )
          ),
          flow.step === 3 && !flow.isBalanceEnough && !flow.isBalanceFetching && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              'Not enough money for this swap. Please charge the balance'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'div',
                null,
                'Your balance: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  flow.balance
                ),
                ' ',
                this.swap.sellCurrency
              ),
              _react2.default.createElement(
                'div',
                null,
                'Required balance: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  this.swap.sellAmount.toNumber()
                ),
                ' ',
                this.swap.sellCurrency
              ),
              _react2.default.createElement(
                'div',
                null,
                'Your address: ',
                this.swap.flow.myBtcAddress
              ),
              _react2.default.createElement('hr', null),
              _react2.default.createElement(
                'span',
                null,
                flow.address
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              _Button2.default,
              { brand: true, onClick: this.updateBalance },
              'Continue'
            )
          ),
          flow.step === 3 && flow.isBalanceFetching && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'div',
              null,
              'Checking balance..'
            ),
            _react2.default.createElement(_InlineLoader2.default, null)
          ),
          (flow.step === 4 || flow.btcScriptValues) && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '3. Creating Bitcoin Script. Please wait, it will take a while'
            ),
            flow.btcScriptCreatingTransactionHash && _react2.default.createElement(
              'div',
              null,
              'Transaction:',
              _react2.default.createElement(
                'strong',
                null,
                _react2.default.createElement(
                  'a',
                  {
                    href: _appConfig2.default.link.bitpay + '/tx/' + flow.btcScriptCreatingTransactionHash,
                    target: '_blank',
                    rel: 'noopener noreferrer'
                  },
                  flow.btcScriptCreatingTransactionHash
                )
              )
            ),
            !flow.btcScriptValues && _react2.default.createElement(_InlineLoader2.default, null)
          ),
          flow.btcScriptValues && !flow.isFinished && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement('br', null),
            !flow.refundTxHex && _react2.default.createElement(
              _Button2.default,
              { brand: true, onClick: this.getRefundTxHex },
              ' Create refund hex'
            ),
            flow.refundTxHex && _react2.default.createElement(
              'div',
              null,
              'Refund hex transaction:',
              _react2.default.createElement(
                'code',
                null,
                flow.refundTxHex
              )
            )
          ),
          (flow.step === 5 || flow.isEthContractFunded) && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '4. ETH Owner received Bitcoin Script and Secret Hash. Waiting when he creates ETH Contract'
            ),
            !flow.isEthContractFunded && _react2.default.createElement(_InlineLoader2.default, null)
          ),
          flow.ethSwapCreationTransactionHash && _react2.default.createElement(
            'div',
            null,
            'Transaction:',
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: _appConfig2.default.link.etherscan + '/tx/' + flow.ethSwapCreationTransactionHash,
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                flow.ethSwapCreationTransactionHash
              )
            )
          ),
          (flow.step === 6 || flow.isEthWithdrawn) && _react2.default.createElement(
            'h3',
            null,
            '5. ETH Contract created and charged. Requesting withdrawal from ETH Contract. Please wait'
          ),
          flow.ethSwapWithdrawTransactionHash && _react2.default.createElement(
            'div',
            null,
            'Transaction:',
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: _appConfig2.default.link.etherscan + '/tx/' + flow.ethSwapWithdrawTransactionHash,
                  target: '_blank',
                  rel: 'noreferrer noopener'
                },
                flow.ethSwapWithdrawTransactionHash
              )
            )
          ),
          flow.step === 6 && _react2.default.createElement(_InlineLoader2.default, null),
          flow.isEthWithdrawn && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '6. Money was transferred to your wallet. Check the balance.'
            ),
            _react2.default.createElement(
              'h2',
              null,
              'Thank you for using Swap.Online!'
            )
          ),
          flow.step >= 5 && !flow.isFinished && _react2.default.createElement(
            'div',
            { style: { display: 'flex', alignItems: 'center' } },
            enabledButton && _react2.default.createElement(
              _Button2.default,
              { brand: true, onClick: this.tryRefund },
              'TRY REFUND'
            ),
            _react2.default.createElement(_Timer2.default, {
              lockTime: flow.btcScriptValues.lockTime * 1000,
              enabledButton: function enabledButton() {
                return _this2.setState({ enabledButton: true });
              }
            })
          )
        ),
        _react2.default.createElement('br', null),
        children
      );
    }
  }]);
  return BtcToEth;
}(_react.Component);

exports.default = BtcToEth;

/***/ }),
/* 1042 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"timer":"_2wnb2C"};

/***/ }),
/* 1043 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"ellipsis":"_2Zo-qQ","ellipsis1":"_2_LbWQ","ellipsis2":"_2fJ8Hd","ellipsis3":"_2Nlot5"};

/***/ }),
/* 1044 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _appConfig = __webpack_require__(18);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _bignumber = __webpack_require__(80);

var _InlineLoader = __webpack_require__(141);

var _InlineLoader2 = _interopRequireDefault(_InlineLoader);

var _TimerButton = __webpack_require__(142);

var _TimerButton2 = _interopRequireDefault(_TimerButton);

var _Button = __webpack_require__(33);

var _Button2 = _interopRequireDefault(_Button);

var _Timer = __webpack_require__(140);

var _Timer2 = _interopRequireDefault(_Timer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EthToBtc = function (_Component) {
  (0, _inherits3.default)(EthToBtc, _Component);

  function EthToBtc(_ref) {
    var swap = _ref.swap;
    (0, _classCallCheck3.default)(this, EthToBtc);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EthToBtc.__proto__ || (0, _getPrototypeOf2.default)(EthToBtc)).call(this));

    _this.handleFlowStateUpdate = function (values) {
      _this.setState({
        flow: values
      });
    };

    _this.signSwap = function () {
      _this.swap.flow.sign();
    };

    _this.confirmBTCScriptChecked = function () {
      _this.swap.flow.verifyBtcScript();
    };

    _this.updateBalance = function () {
      _this.swap.flow.syncBalance();
    };

    _this.tryRefund = function () {
      _this.swap.flow.tryRefund();
    };

    _this.toggleBitcoinScript = function () {
      _this.setState({
        isShowingBitcoinScript: !_this.state.isShowingBitcoinScript
      });
    };

    _this.addGasPrice = function () {
      var gwei = new _bignumber.BigNumber(String(_this.swap.flow.ethSwap.gasPrice)).plus(new _bignumber.BigNumber(1e9));
      _this.swap.flow.ethSwap.addGasPrice(gwei);
      _this.swap.flow.restartStep();
    };

    _this.swap = swap;

    _this.state = {
      flow: _this.swap.flow.state,
      enabledButton: false,
      isShowingBitcoinScript: false
    };
    return _this;
  }

  (0, _createClass3.default)(EthToBtc, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.swap.on('state update', this.handleFlowStateUpdate);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.swap.off('state update', this.handleFlowStateUpdate);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      var _state = this.state,
          flow = _state.flow,
          enabledButton = _state.enabledButton,
          isShowingBitcoinScript = _state.isShowingBitcoinScript;


      return _react2.default.createElement(
        'div',
        null,
        this.swap.id && _react2.default.createElement(
          'strong',
          null,
          this.swap.sellAmount.toNumber(),
          ' ',
          this.swap.sellCurrency,
          ' \u27F6 ',
          this.swap.buyAmount.toNumber(),
          ' ',
          this.swap.buyCurrency
        ),
        !this.swap.id && (this.swap.isMy ? _react2.default.createElement(
          'h3',
          null,
          'This order doesn\'t have a buyer'
        ) : _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            'The order creator is offline. Waiting for him..'
          ),
          _react2.default.createElement(_InlineLoader2.default, null)
        )),
        flow.isWaitingForOwner && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            'Waiting for other user when he connect to the order'
          ),
          _react2.default.createElement(_InlineLoader2.default, null)
        ),
        flow.step === 1 && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'div',
            null,
            'Confirmation of the transaction is necessary for crediting the reputation. If a user does not bring the deal to the end he gets a negative reputation.'
          ),
          _react2.default.createElement(
            _TimerButton2.default,
            { brand: true, onClick: this.signSwap },
            'Sign'
          ),
          (flow.isSignFetching || flow.signTransactionHash) && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h4',
              null,
              'Please wait. Confirmation processing'
            ),
            flow.signTransactionHash && _react2.default.createElement(
              'div',
              null,
              'Transaction:',
              _react2.default.createElement(
                'strong',
                null,
                _react2.default.createElement(
                  'a',
                  {
                    href: _appConfig2.default.link.etherscan + '/tx/' + flow.signTransactionHash,
                    target: '_blank',
                    rel: 'noopener noreferrer'
                  },
                  flow.signTransactionHash
                )
              )
            ),
            flow.isSignFetching && _react2.default.createElement(_InlineLoader2.default, null)
          )
        ),
        flow.isMeSigned && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            '2. Waiting BTC Owner creates Secret Key, creates BTC Script and charges it'
          ),
          flow.step === 2 && _react2.default.createElement(_InlineLoader2.default, null),
          flow.secretHash && flow.btcScriptValues && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '3. Bitcoin Script created and charged. Please check the information below'
            ),
            _react2.default.createElement(
              'div',
              null,
              'Secret Hash: ',
              _react2.default.createElement(
                'strong',
                null,
                flow.secretHash
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              'Script address:',
              _react2.default.createElement(
                'strong',
                null,
                flow.btcScriptCreatingTransactionHash && _react2.default.createElement(
                  'a',
                  {
                    href: _appConfig2.default.link.bitpay + '/tx/' + flow.btcScriptCreatingTransactionHash,
                    target: '_blank',
                    rel: 'noopener noreferrer'
                  },
                  flow.btcScriptCreatingTransactionHash
                )
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              _react.Fragment,
              null,
              flow.btcScriptValues && _react2.default.createElement(
                'span',
                { onClick: this.toggleBitcoinScript },
                'Show bitcoin script'
              ),
              isShowingBitcoinScript && _react2.default.createElement(
                'pre',
                null,
                _react2.default.createElement(
                  'code',
                  null,
                  '\n  bitcoinjs.script.compile([\n    bitcoin.core.opcodes.OP_RIPEMD160,\n    Buffer.from(\'' + flow.btcScriptValues.secretHash + '\', \'hex\'),\n    bitcoin.core.opcodes.OP_EQUALVERIFY,\n\n    Buffer.from(\'' + flow.btcScriptValues.recipientPublicKey + '\', \'hex\'),\n    bitcoin.core.opcodes.OP_EQUAL,\n    bitcoin.core.opcodes.OP_IF,\n\n    Buffer.from(\'' + flow.btcScriptValues.recipientPublicKey + '\', \'hex\'),\n    bitcoin.core.opcodes.OP_CHECKSIG,\n\n    bitcoin.core.opcodes.OP_ELSE,\n\n    bitcoin.core.script.number.encode(' + flow.btcScriptValues.lockTime + '),\n    bitcoin.core.opcodes.OP_CHECKLOCKTIMEVERIFY,\n    bitcoin.core.opcodes.OP_DROP,\n    Buffer.from(\'' + flow.btcScriptValues.ownerPublicKey + '\', \'hex\'),\n    bitcoin.core.opcodes.OP_CHECKSIG,\n\n    bitcoin.core.opcodes.OP_ENDIF,\n  ])\n                      '
                )
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            flow.step === 3 && _react2.default.createElement(
              _react.Fragment,
              null,
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                _TimerButton2.default,
                { brand: true, onClick: this.confirmBTCScriptChecked },
                'Everything is OK. Continue'
              )
            )
          ),
          flow.step === 4 && !flow.isBalanceEnough && !flow.isBalanceFetching && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              'Not enough money for this swap. Please fund the balance'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'div',
                null,
                'Your balance: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  flow.balance
                ),
                ' ',
                this.swap.sellCurrency
              ),
              _react2.default.createElement(
                'div',
                null,
                'Required balance: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  this.swap.sellAmount.toNumber()
                ),
                ' ',
                this.swap.sellCurrency
              ),
              _react2.default.createElement(
                'div',
                null,
                'Your address: ',
                this.swap.flow.myEthAddress
              ),
              _react2.default.createElement('hr', null),
              _react2.default.createElement(
                'span',
                null,
                flow.address
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              _Button2.default,
              { brand: true, onClick: this.updateBalance },
              'Continue'
            )
          ),
          flow.step === 4 && flow.isBalanceFetching && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'div',
              null,
              'Checking balance..'
            ),
            _react2.default.createElement(_InlineLoader2.default, null)
          ),
          (flow.step >= 5 || flow.isEthContractFunded) && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '4. Creating Ethereum Contract. Please wait, it will take a while'
            )
          ),
          flow.ethSwapCreationTransactionHash && _react2.default.createElement(
            'div',
            null,
            'Transaction:',
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: _appConfig2.default.link.etherscan + '/tx/' + flow.ethSwapCreationTransactionHash,
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                flow.ethSwapCreationTransactionHash
              )
            )
          ),
          flow.step === 5 && _react2.default.createElement(_InlineLoader2.default, null),
          flow.refundTransactionHash && _react2.default.createElement(
            'div',
            null,
            'Transaction:',
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: _appConfig2.default.link.etherscan + '/tx/' + flow.refundTransactionHash,
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                flow.refundTransactionHash
              )
            )
          ),
          (flow.step === 6 || flow.isEthWithdrawn) && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '5. Waiting BTC Owner adds Secret Key to ETH Contact'
            ),
            !flow.isEthWithdrawn && _react2.default.createElement(_InlineLoader2.default, null)
          ),
          (flow.step === 7 || flow.isBtcWithdrawn) && _react2.default.createElement(
            'h3',
            null,
            '6. BTC Owner successfully took money from ETH Contract and left Secret Key. Requesting withdrawal from BTC Script. Please wait'
          ),
          flow.btcSwapWithdrawTransactionHash && _react2.default.createElement(
            'div',
            null,
            'Transaction:',
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: _appConfig2.default.link.bitpay + '/tx/' + flow.btcSwapWithdrawTransactionHash,
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                flow.btcSwapWithdrawTransactionHash
              )
            )
          ),
          flow.step === 7 && _react2.default.createElement(_InlineLoader2.default, null),
          flow.isBtcWithdrawn && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '7. Money was transferred to your wallet. Check the balance.'
            ),
            _react2.default.createElement(
              'h2',
              null,
              'Thank you for using Swap.Online!'
            )
          ),
          flow.step >= 6 && !flow.isFinished && _react2.default.createElement(
            'div',
            { style: { display: 'flex', alignItems: 'center' } },
            enabledButton && _react2.default.createElement(
              _Button2.default,
              { brand: true, onClick: this.tryRefund },
              'TRY REFUND'
            ),
            _react2.default.createElement(_Timer2.default, {
              lockTime: (flow.btcScriptValues.lockTime - 5400) * 1000,
              enabledButton: function enabledButton() {
                return _this2.setState({ enabledButton: true });
              }
            })
          )
        ),
        _react2.default.createElement('br', null),
        children
      );
    }
  }]);
  return EthToBtc;
}(_react.Component);

exports.default = EthToBtc;

/***/ }),
/* 1045 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _appConfig = __webpack_require__(18);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _bignumber = __webpack_require__(80);

var _InlineLoader = __webpack_require__(141);

var _InlineLoader2 = _interopRequireDefault(_InlineLoader);

var _TimerButton = __webpack_require__(142);

var _TimerButton2 = _interopRequireDefault(_TimerButton);

var _Button = __webpack_require__(33);

var _Button2 = _interopRequireDefault(_Button);

var _Timer = __webpack_require__(140);

var _Timer2 = _interopRequireDefault(_Timer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EthTokenToBtc = function (_Component) {
  (0, _inherits3.default)(EthTokenToBtc, _Component);

  function EthTokenToBtc(_ref) {
    var swap = _ref.swap;
    (0, _classCallCheck3.default)(this, EthTokenToBtc);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EthTokenToBtc.__proto__ || (0, _getPrototypeOf2.default)(EthTokenToBtc)).call(this));

    _this.handleFlowStateUpdate = function (values) {
      _this.setState({
        flow: values
      });
    };

    _this.signSwap = function () {
      _this.swap.flow.sign();
    };

    _this.confirmBTCScriptChecked = function () {
      _this.swap.flow.verifyBtcScript();
    };

    _this.updateBalance = function () {
      _this.swap.flow.syncBalance();
    };

    _this.tryRefund = function () {
      _this.swap.flow.tryRefund();
    };

    _this.toggleBitcoinScript = function () {
      _this.setState({
        isShowingBitcoinScript: !_this.state.isShowingBitcoinScript
      });
    };

    _this.addGasPrice = function () {
      var gwei = new _bignumber.BigNumber(String(_this.swap.flow.ethSwap.gasPrice)).plus(new _bignumber.BigNumber(1e10));
      _this.swap.flow.ethSwap.addGasPrice(gwei);
      _this.swap.flow.restartStep();
    };

    _this.swap = swap;

    _this.state = {
      flow: _this.swap.flow.state,
      enabledButton: false
    };
    return _this;
  }

  (0, _createClass3.default)(EthTokenToBtc, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.swap.on('state update', this.handleFlowStateUpdate);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.swap.off('state update', this.handleFlowStateUpdate);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      var _state = this.state,
          flow = _state.flow,
          enabledButton = _state.enabledButton,
          isShowingBitcoinScript = _state.isShowingBitcoinScript;


      return _react2.default.createElement(
        'div',
        null,
        this.swap.id && _react2.default.createElement(
          'strong',
          null,
          this.swap.sellAmount.toNumber(),
          ' ',
          this.swap.sellCurrency,
          ' \u27F6 ',
          this.swap.buyAmount.toNumber(),
          ' ',
          this.swap.buyCurrency
        ),
        flow.isWaitingForOwner && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            'Waiting for other user when he connect to the order'
          ),
          _react2.default.createElement(_InlineLoader2.default, null)
        ),
        (flow.step === 1 || flow.isMeSigned) && _react2.default.createElement(
          'h3',
          null,
          '1. Please confirm your participation to begin the deal'
        ),
        flow.step === 1 && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'div',
            null,
            'Confirmation of the transaction is necessary for crediting the reputation. If a user does not bring the deal to the end he gets a negative reputation.'
          ),
          !flow.isSignFetching && !flow.isMeSigned && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              _TimerButton2.default,
              { brand: true, onClick: this.signSwap },
              'Confirm'
            )
          ),
          (flow.isSignFetching || flow.signTransactionHash) && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h4',
              null,
              'Please wait. Confirmation processing'
            ),
            flow.signTransactionHash && _react2.default.createElement(
              'div',
              null,
              'Transaction:',
              _react2.default.createElement(
                'strong',
                null,
                _react2.default.createElement(
                  'a',
                  {
                    href: _appConfig2.default.link.etherscan + '/tx/' + flow.signTransactionHash,
                    target: '_blank',
                    rel: 'noopener noreferrer'
                  },
                  flow.signTransactionHash
                )
              )
            ),
            flow.isSignFetching && _react2.default.createElement(_InlineLoader2.default, null)
          )
        ),
        flow.isMeSigned && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            '2. Waiting BTC Owner creates Secret Key, creates BTC Script and charges it'
          ),
          flow.step === 2 && _react2.default.createElement(_InlineLoader2.default, null),
          flow.secretHash && flow.btcScriptValues && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '3. Bitcoin Script created and charged. Please check the information below'
            ),
            _react2.default.createElement(
              'div',
              null,
              'Secret Hash: ',
              _react2.default.createElement(
                'strong',
                null,
                flow.secretHash
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              'Script address:',
              _react2.default.createElement(
                'strong',
                null,
                flow.btcScriptCreatingTransactionHash && _react2.default.createElement(
                  'a',
                  {
                    href: _appConfig2.default.link.bitpay + '/tx/' + flow.btcScriptCreatingTransactionHash,
                    target: '_blank',
                    rel: 'noopener noreferrer'
                  },
                  flow.btcScriptCreatingTransactionHash
                )
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              _react.Fragment,
              null,
              flow.btcScriptValues && _react2.default.createElement(
                'span',
                { onClick: this.toggleBitcoinScript },
                'Show bitcoin script'
              ),
              isShowingBitcoinScript && _react2.default.createElement(
                'pre',
                null,
                _react2.default.createElement(
                  'code',
                  null,
                  '\n  bitcoinjs.script.compile([\n    bitcoin.core.opcodes.OP_RIPEMD160,\n    Buffer.from(\'' + flow.btcScriptValues.secretHash + '\', \'hex\'),\n    bitcoin.core.opcodes.OP_EQUALVERIFY,\n\n    Buffer.from(\'' + flow.btcScriptValues.recipientPublicKey + '\', \'hex\'),\n    bitcoin.core.opcodes.OP_EQUAL,\n    bitcoin.core.opcodes.OP_IF,\n\n    Buffer.from(\'' + flow.btcScriptValues.recipientPublicKey + '\', \'hex\'),\n    bitcoin.core.opcodes.OP_CHECKSIG,\n\n    bitcoin.core.opcodes.OP_ELSE,\n\n    bitcoin.core.script.number.encode(' + flow.btcScriptValues.lockTime + '),\n    bitcoin.core.opcodes.OP_CHECKLOCKTIMEVERIFY,\n    bitcoin.core.opcodes.OP_DROP,\n    Buffer.from(\'' + flow.btcScriptValues.ownerPublicKey + '\', \'hex\'),\n    bitcoin.core.opcodes.OP_CHECKSIG,\n\n    bitcoin.core.opcodes.OP_ENDIF,\n  ])\n                      '
                )
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            flow.step === 3 && _react2.default.createElement(
              _react.Fragment,
              null,
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                _TimerButton2.default,
                { brand: true, onClick: this.confirmBTCScriptChecked },
                'Everything is OK. Continue'
              )
            )
          ),
          flow.step === 4 && !flow.isBalanceEnough && !flow.isBalanceFetching && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              'Not enough money for this swap. Please fund the balance'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'div',
                null,
                'Your balance: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  flow.balance
                ),
                ' ',
                this.swap.sellCurrency
              ),
              _react2.default.createElement(
                'div',
                null,
                'Required balance: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  this.swap.sellAmount.toNumber()
                ),
                ' ',
                this.swap.sellCurrency
              ),
              _react2.default.createElement(
                'div',
                null,
                'Your address: ',
                this.swap.flow.myEthAddress
              ),
              _react2.default.createElement('hr', null),
              _react2.default.createElement(
                'span',
                null,
                flow.address
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              _TimerButton2.default,
              { brand: true, onClick: this.updateBalance },
              'Continue'
            )
          ),
          flow.step === 4 && flow.isBalanceFetching && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'div',
              null,
              'Checking balance..'
            ),
            _react2.default.createElement(_InlineLoader2.default, null)
          ),
          (flow.step >= 5 || flow.isEthContractFunded) && _react2.default.createElement(
            'h3',
            null,
            '4. Creating Ethereum Contract. Please wait, it will take a while'
          ),
          flow.ethSwapCreationTransactionHash && _react2.default.createElement(
            'div',
            null,
            'Transaction:',
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: _appConfig2.default.link.etherscan + '/tx/' + flow.ethSwapCreationTransactionHash,
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                flow.ethSwapCreationTransactionHash
              )
            )
          ),
          flow.step === 5 && _react2.default.createElement(_InlineLoader2.default, null),
          flow.refundTransactionHash && _react2.default.createElement(
            'div',
            null,
            'Transaction:',
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: _appConfig2.default.link.etherscan + '/tx/' + flow.refundTransactionHash,
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                flow.refundTransactionHash
              )
            )
          ),
          (flow.step === 6 || flow.isEthWithdrawn) && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '5. Waiting BTC Owner adds Secret Key to ETH Contact'
            ),
            !flow.isEthWithdrawn && _react2.default.createElement(_InlineLoader2.default, null)
          ),
          (flow.step === 7 || flow.isBtcWithdrawn) && _react2.default.createElement(
            'h3',
            null,
            '6. BTC Owner successfully took money from ETH Contract and left Secret Key. Requesting withdrawal from BTC Script. Please wait'
          ),
          flow.btcSwapWithdrawTransactionHash && _react2.default.createElement(
            'div',
            null,
            'Transaction:',
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: _appConfig2.default.link.bitpay + '/tx/' + flow.btcSwapWithdrawTransactionHash,
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                flow.btcSwapWithdrawTransactionHash
              )
            )
          ),
          flow.step === 7 && _react2.default.createElement(_InlineLoader2.default, null),
          flow.isBtcWithdrawn && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '7. Money was transferred to your wallet. Check the balance.'
            ),
            _react2.default.createElement(
              'h2',
              null,
              'Thank you for using Swap.Online!'
            )
          ),
          flow.step >= 6 && !flow.isFinished && _react2.default.createElement(
            'div',
            { style: { display: 'flex', alignItems: 'center' } },
            enabledButton && _react2.default.createElement(
              _Button2.default,
              { brand: true, onClick: this.tryRefund },
              'TRY REFUND'
            ),
            _react2.default.createElement(_Timer2.default, {
              lockTime: (flow.btcScriptValues.lockTime - 5400) * 1000,
              enabledButton: function enabledButton() {
                return _this2.setState({ enabledButton: true });
              }
            })
          )
        ),
        _react2.default.createElement('br', null),
        !flow.isFinished && _react2.default.createElement(
          _Button2.default,
          { white: true, onClick: this.addGasPrice },
          'Add gas price'
        ),
        children
      );
    }
  }]);
  return EthTokenToBtc;
}(_react.Component);

exports.default = EthTokenToBtc;

/***/ }),
/* 1046 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _crypto = __webpack_require__(101);

var _crypto2 = _interopRequireDefault(_crypto);

var _appConfig = __webpack_require__(18);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _bignumber = __webpack_require__(80);

var _InlineLoader = __webpack_require__(141);

var _InlineLoader2 = _interopRequireDefault(_InlineLoader);

var _TimerButton = __webpack_require__(142);

var _TimerButton2 = _interopRequireDefault(_TimerButton);

var _Button = __webpack_require__(33);

var _Button2 = _interopRequireDefault(_Button);

var _Timer = __webpack_require__(140);

var _Timer2 = _interopRequireDefault(_Timer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BtcToEthToken = function (_Component) {
  (0, _inherits3.default)(BtcToEthToken, _Component);

  function BtcToEthToken(_ref) {
    var swap = _ref.swap;
    (0, _classCallCheck3.default)(this, BtcToEthToken);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BtcToEthToken.__proto__ || (0, _getPrototypeOf2.default)(BtcToEthToken)).call(this));

    _this.handleFlowStateUpdate = function (values) {
      _this.setState({
        flow: values
      });
    };

    _this.submitSecret = function () {
      var secret = _this.state.secret;


      _this.swap.flow.submitSecret(secret);
    };

    _this.updateBalance = function () {
      _this.swap.flow.syncBalance();
    };

    _this.addGasPrice = function () {
      var gwei = new _bignumber.BigNumber(String(_this.swap.flow.ethSwap.gasPrice)).plus(new _bignumber.BigNumber(1e9));
      _this.swap.flow.ethSwap.addGasPrice(gwei);
      _this.swap.flow.restartStep();
    };

    _this.getRefundTxHex = function () {
      var flow = _this.state.flow;


      if (flow.refundTxHex) {
        return flow.refundTxHex;
      } else if (flow.btcScriptValues) {
        _this.swap.flow.getRefundTxHex();
      }
    };

    _this.swap = swap;

    _this.state = {
      flow: _this.swap.flow.state,
      secret: _crypto2.default.randomBytes(32).toString('hex'),
      enabledButton: false
    };
    return _this;
  }

  (0, _createClass3.default)(BtcToEthToken, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.swap.on('state update', this.handleFlowStateUpdate);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.swap.off('state update', this.handleFlowStateUpdate);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      var _state = this.state,
          secret = _state.secret,
          flow = _state.flow,
          enabledButton = _state.enabledButton;


      return _react2.default.createElement(
        'div',
        null,
        this.swap.id && _react2.default.createElement(
          'strong',
          null,
          this.swap.sellAmount.toNumber(),
          ' ',
          this.swap.sellCurrency,
          ' \u27F6 ',
          this.swap.buyAmount.toNumber(),
          ' ',
          this.swap.buyCurrency
        ),
        flow.isWaitingForOwner && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            'We are waiting for a market maker. If it does not appear within 5 minutes, the swap will be canceled automatically.'
          ),
          _react2.default.createElement(_InlineLoader2.default, null)
        ),
        (flow.step === 1 || flow.isMeSigned) && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            '1. Waiting participant confirm this swap'
          ),
          _react2.default.createElement(_InlineLoader2.default, null)
        ),
        flow.isParticipantSigned && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            '2. Create a secret key'
          ),
          !flow.secretHash ? _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement('input', { type: 'text', placeholder: 'Secret Key', defaultValue: secret }),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              _TimerButton2.default,
              { brand: true, onClick: this.submitSecret },
              'Confirm'
            )
          ) : _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'div',
              null,
              'Save the secret key! Otherwise there will be a chance you loose your money!'
            ),
            _react2.default.createElement(
              'div',
              null,
              'Secret Key: ',
              _react2.default.createElement(
                'strong',
                null,
                flow.secret
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              'Secret Hash: ',
              _react2.default.createElement(
                'strong',
                null,
                flow.secretHash
              )
            )
          ),
          flow.step === 3 && !flow.isBalanceEnough && !flow.isBalanceFetching && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              'Not enough money for this swap. Please charge the balance'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'div',
                null,
                'Your balance: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  flow.balance
                ),
                ' ',
                this.swap.sellCurrency
              ),
              _react2.default.createElement(
                'div',
                null,
                'Required balance: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  this.swap.sellAmount.toNumber()
                ),
                ' ',
                this.swap.sellCurrency
              ),
              _react2.default.createElement(
                'div',
                null,
                'Your address: ',
                this.swap.flow.myBtcAddress
              ),
              _react2.default.createElement('hr', null),
              _react2.default.createElement(
                'span',
                null,
                flow.address
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              _TimerButton2.default,
              { brand: true, onClick: this.updateBalance },
              'Continue'
            )
          ),
          flow.step === 3 && flow.isBalanceFetching && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'div',
              null,
              'Checking balance..'
            ),
            _react2.default.createElement(_InlineLoader2.default, null)
          ),
          (flow.step === 4 || flow.btcScriptValues) && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '3. Creating Bitcoin Script. Please wait, it will take a while'
            ),
            flow.btcScriptCreatingTransactionHash && _react2.default.createElement(
              'div',
              null,
              'Transaction:',
              _react2.default.createElement(
                'strong',
                null,
                _react2.default.createElement(
                  'a',
                  {
                    href: _appConfig2.default.link.bitpay + '/tx/' + flow.btcScriptCreatingTransactionHash,
                    target: '_blank',
                    rel: 'noopener noreferrer'
                  },
                  flow.btcScriptCreatingTransactionHash
                )
              )
            ),
            !flow.btcScriptValues && _react2.default.createElement(_InlineLoader2.default, null)
          ),
          flow.btcScriptValues && !flow.isFinished && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement('br', null),
            !flow.refundTxHex && _react2.default.createElement(
              _Button2.default,
              { brand: true, onClick: this.getRefundTxHex },
              ' Create refund hex'
            ),
            flow.refundTxHex && _react2.default.createElement(
              'div',
              null,
              'Refund hex transaction:',
              _react2.default.createElement(
                'code',
                null,
                flow.refundTxHex
              )
            )
          ),
          (flow.step === 5 || flow.isEthContractFunded) && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '4. ETH Owner received Bitcoin Script and Secret Hash. Waiting when he creates ETH Contract'
            ),
            !flow.isEthContractFunded && _react2.default.createElement(_InlineLoader2.default, null)
          ),
          flow.ethSwapCreationTransactionHash && _react2.default.createElement(
            'div',
            null,
            'Transaction:',
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: _appConfig2.default.link.etherscan + '/tx/' + flow.ethSwapCreationTransactionHash,
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                flow.ethSwapCreationTransactionHash
              )
            )
          ),
          (flow.step === 6 || flow.isEthWithdrawn) && _react2.default.createElement(
            'h3',
            null,
            '5. ETH Contract created and charged. Requesting withdrawal from ETH Contract. Please wait'
          ),
          flow.ethSwapWithdrawTransactionHash && _react2.default.createElement(
            'div',
            null,
            'Transaction:',
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: _appConfig2.default.link.etherscan + '/tx/' + flow.ethSwapWithdrawTransactionHash,
                  target: '_blank',
                  rel: 'noreferrer noopener'
                },
                flow.ethSwapWithdrawTransactionHash
              )
            )
          ),
          flow.step === 6 && _react2.default.createElement(_InlineLoader2.default, null),
          flow.isEthWithdrawn && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '6. Money was transferred to your wallet. Check the balance.'
            ),
            _react2.default.createElement(
              'h2',
              null,
              'Thank you for using Swap.Online!'
            )
          ),
          flow.step >= 5 && !flow.isFinished && _react2.default.createElement(
            'div',
            { style: { display: 'flex', alignItems: 'center' } },
            enabledButton && _react2.default.createElement(
              _Button2.default,
              { brand: true, onClick: this.tryRefund },
              'TRY REFUND'
            ),
            _react2.default.createElement(_Timer2.default, {
              lockTime: flow.btcScriptValues.lockTime * 1000,
              enabledButton: function enabledButton() {
                return _this2.setState({ enabledButton: true });
              }
            })
          ),
          flow.finishSwap && this.removeOrder(this.swap.id)
        ),
        _react2.default.createElement('br', null),
        !flow.isFinished && _react2.default.createElement(
          _Button2.default,
          { green: true, onClick: this.addGasPrice },
          'Add gas price'
        ),
        children
      );
    }
  }]);
  return BtcToEthToken;
}(_react.Component);

exports.default = BtcToEthToken;

/***/ }),
/* 1047 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp, _initialiseProps;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(12);

var _actions2 = _interopRequireDefault(_actions);

var _helpers = __webpack_require__(11);

var _Title = __webpack_require__(265);

var _Title2 = _interopRequireDefault(_Title);

var _PageHeadline = __webpack_require__(143);

var _PageHeadline2 = _interopRequireDefault(_PageHeadline);

var _SubTitle = __webpack_require__(109);

var _SubTitle2 = _interopRequireDefault(_SubTitle);

var _Orders = __webpack_require__(1051);

var _Orders2 = _interopRequireDefault(_Orders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home(_ref) {
    var initialData = _ref.initialData,
        _ref$match$params = _ref.match.params,
        buy = _ref$match$params.buy,
        sell = _ref$match$params.sell;
    (0, _classCallCheck3.default)(this, Home);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this));

    _initialiseProps.call(_this);

    var _ref2 = initialData || {},
        buyCurrency = _ref2.buyCurrency,
        sellCurrency = _ref2.sellCurrency;

    _this.state = {
      buyCurrency: buy || buyCurrency || 'eth',
      sellCurrency: sell || sellCurrency || 'btc',
      view: 'saveKeys'
    };
    return _this;
  }

  (0, _createClass3.default)(Home, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps !== this.props) {
        this.setState();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var orderId = this.props.match.params.orderId;
      var _state = this.state,
          buyCurrency = _state.buyCurrency,
          sellCurrency = _state.sellCurrency;


      return _react2.default.createElement(
        'section',
        { style: { position: 'relative' } },
        _react2.default.createElement(
          _PageHeadline2.default,
          null,
          _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              _Title2.default,
              null,
              buyCurrency,
              '/',
              sellCurrency,
              ' exchange with 0% comission'
            ),
            _react2.default.createElement(
              _SubTitle2.default,
              null,
              'Choose the direction of exchange'
            )
          ),
          _react2.default.createElement(_Orders2.default, {
            handleSellCurrencySelect: this.handleSellCurrencySelect,
            handleBuyCurrencySelect: this.handleBuyCurrencySelect,
            buyCurrency: buyCurrency,
            sellCurrency: sellCurrency,
            flipCurrency: this.flipCurrency,
            orderId: orderId
          })
        )
      );
    }
  }]);
  return Home;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleBuyCurrencySelect = function (_ref3) {
    var value = _ref3.value;
    var _state2 = _this2.state,
        sellCurrency = _state2.sellCurrency,
        buyCurrency = _state2.buyCurrency;


    if (value === sellCurrency) {
      sellCurrency = buyCurrency;
    }

    _this2.handelReplaceHistory(sellCurrency, value);

    _this2.setState({
      buyCurrency: value,
      sellCurrency: sellCurrency
    });
  };

  this.handleSellCurrencySelect = function (_ref4) {
    var value = _ref4.value;
    var _state3 = _this2.state,
        sellCurrency = _state3.sellCurrency,
        buyCurrency = _state3.buyCurrency;


    if (value === buyCurrency) {
      buyCurrency = sellCurrency;
    }

    _this2.handelReplaceHistory(value, buyCurrency);

    _this2.setState({
      buyCurrency: buyCurrency,
      sellCurrency: value
    });
  };

  this.handelReplaceHistory = function (sellCurrency, buyCurrency) {
    var history = _this2.props.history;


    _this2.setFilter('' + buyCurrency + sellCurrency);
    history.replace(_helpers.links.exchange + '/' + buyCurrency + '-' + sellCurrency);
  };

  this.flipCurrency = function () {
    var _state4 = _this2.state,
        buyCurrency = _state4.buyCurrency,
        sellCurrency = _state4.sellCurrency;

    var value = sellCurrency;

    sellCurrency = buyCurrency;
    buyCurrency = value;

    _this2.handelReplaceHistory(sellCurrency, buyCurrency);

    _this2.setState({
      buyCurrency: buyCurrency,
      sellCurrency: sellCurrency
    });
  };

  this.setFilter = function (filter) {
    _actions2.default.core.setFilter(filter);
  };

  this.handleClickTelegram = function () {
    _actions2.default.analytics.dataEvent('orders-click-telegram-group');
    _actions2.default.analytics.dataEvent('orders-click-start-swap');
  };

  this.handleClickMailing = function () {
    _actions2.default.analytics.dataEvent('orders-click-start-swap');
    _actions2.default.analytics.dataEvent('orders-click-start-swap');
  };
}, _temp);
exports.default = Home;

/***/ }),
/* 1048 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"title":"_1Sjfw-"};

/***/ }),
/* 1049 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"headline":"_3j0ceJ"};

/***/ }),
/* 1050 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"subTitle":"_3J0EOu"};

/***/ }),
/* 1051 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redaction = __webpack_require__(25);

var _Row = __webpack_require__(1052);

var _Row2 = _interopRequireDefault(_Row);

var _Table = __webpack_require__(144);

var _Table2 = _interopRequireDefault(_Table);

var _MyOrders = __webpack_require__(1068);

var _MyOrders2 = _interopRequireDefault(_MyOrders);

var _SearchSwap = __webpack_require__(1071);

var _SearchSwap2 = _interopRequireDefault(_SearchSwap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filterMyOrders = function filterMyOrders(orders, peer) {
  return orders.filter(function (order) {
    return order.owner.peer === peer;
  });
};

var filterOrders = function filterOrders(orders, filter) {
  return orders.filter(function (order) {
    return order.isProcessing === false;
  }).filter(function (order) {
    return order.isMy ? '' + order.buyCurrency.toLowerCase() + order.sellCurrency.toLowerCase() === filter : '' + order.sellCurrency.toLowerCase() + order.buyCurrency.toLowerCase() === filter;
  }).sort(function (a, b) {
    return b.exchangeRate - a.exchangeRate;
  });
};

var Orders = (_dec = (0, _redaction.connect)(function (_ref) {
  var _ref$core = _ref.core,
      orders = _ref$core.orders,
      filter = _ref$core.filter,
      _ref$ipfs = _ref.ipfs,
      isOnline = _ref$ipfs.isOnline,
      peer = _ref$ipfs.peer;
  return {
    orders: filterOrders(orders, filter),
    myOrders: filterMyOrders(orders, peer),
    isOnline: isOnline
  };
}), _dec(_class = function (_Component) {
  (0, _inherits3.default)(Orders, _Component);

  function Orders() {
    (0, _classCallCheck3.default)(this, Orders);
    return (0, _possibleConstructorReturn3.default)(this, (Orders.__proto__ || (0, _getPrototypeOf2.default)(Orders)).apply(this, arguments));
  }

  (0, _createClass3.default)(Orders, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps !== this.props) {
        this.setState();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          sellCurrency = _props.sellCurrency,
          buyCurrency = _props.buyCurrency,
          handleSellCurrencySelect = _props.handleSellCurrencySelect,
          handleBuyCurrencySelect = _props.handleBuyCurrencySelect,
          flipCurrency = _props.flipCurrency;

      var titles = ['EXCHANGE', 'YOU BUY', 'YOU SELL', 'EXCHANGE RATE', 'ACTIONS'];
      var _props2 = this.props,
          isOnline = _props2.isOnline,
          orders = _props2.orders,
          myOrders = _props2.myOrders,
          orderId = _props2.orderId;


      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_MyOrders2.default, { myOrders: myOrders, update: this.updateState }),
        _react2.default.createElement(_SearchSwap2.default, {
          handleSellCurrencySelect: handleSellCurrencySelect,
          handleBuyCurrencySelect: handleBuyCurrencySelect,
          buyCurrency: buyCurrency,
          sellCurrency: sellCurrency,
          flipCurrency: flipCurrency
        }),
        _react2.default.createElement(
          'h3',
          null,
          'All orders'
        ),
        _react2.default.createElement(_Table2.default, {
          titles: titles,
          rows: orders,
          rowRender: function rowRender(row, index) {
            return _react2.default.createElement(_Row2.default, {
              key: index,
              orderId: orderId,
              row: row
            });
          },
          isLoading: !isOnline
        })
      );
    }
  }]);
  return Orders;
}(_react.Component)) || _class);
exports.default = Orders;

/***/ }),
/* 1052 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(65);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redaction = __webpack_require__(25);

var _actions = __webpack_require__(12);

var _actions2 = _interopRequireDefault(_actions);

var _helpers = __webpack_require__(11);

var _reactRouterDom = __webpack_require__(51);

var _Coins = __webpack_require__(185);

var _Coins2 = _interopRequireDefault(_Coins);

var _RequestButton = __webpack_require__(1062);

var _RequestButton2 = _interopRequireDefault(_RequestButton);

var _RemoveButton = __webpack_require__(449);

var _RemoveButton2 = _interopRequireDefault(_RemoveButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = (_dec = (0, _redaction.connect)({
  peer: 'ipfs.peer'
}), _dec(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(Row, _Component);

  function Row() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Row);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Row.__proto__ || (0, _getPrototypeOf2.default)(Row)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      balance: 0
    }, _this.checkBalance = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(sellCurrency) {
        var balance;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _actions2.default[sellCurrency.toLowerCase()].getBalance();

              case 2:
                balance = _context.sent;


                _this.setState({
                  balance: balance
                });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.removeOrder = function (orderId) {
      _actions2.default.core.removeOrder(orderId);
      _actions2.default.core.updateCore();
    }, _this.sendRequest = function (orderId) {
      _actions2.default.core.sendRequest(orderId);
      _actions2.default.core.updateCore();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Row, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props$row = this.props.row,
          sellCurrency = _props$row.sellCurrency,
          isMy = _props$row.isMy,
          buyCurrency = _props$row.buyCurrency;

      isMy ? this.checkBalance(sellCurrency) : this.checkBalance(buyCurrency);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var balance = this.state.balance;
      var _props = this.props,
          _props$row2 = _props.row,
          id = _props$row2.id,
          buyCurrency = _props$row2.buyCurrency,
          sellCurrency = _props$row2.sellCurrency,
          isMy = _props$row2.isMy,
          buyAmount = _props$row2.buyAmount,
          sellAmount = _props$row2.sellAmount,
          isRequested = _props$row2.isRequested,
          exchangeRate = _props$row2.exchangeRate,
          ownerPeer = _props$row2.owner.peer,
          peer = _props.peer,
          orderId = _props.orderId;

      var amount = isMy ? sellAmount : buyAmount;

      return _react2.default.createElement(
        'tr',
        { style: orderId === id ? { background: 'red' } : { color: 'green' } },
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(_Coins2.default, { names: [buyCurrency, sellCurrency] })
        ),
        _react2.default.createElement(
          'td',
          null,
          isMy ? buyAmount.toFixed(5) + ' ' + buyCurrency + ' ' : sellAmount.toFixed(5) + ' ' + sellCurrency + ' '
        ),
        _react2.default.createElement(
          'td',
          null,
          isMy ? sellAmount.toFixed(5) + ' ' + sellCurrency + ' ' : buyAmount.toFixed(5) + ' ' + buyCurrency + ' '
        ),
        _react2.default.createElement(
          'td',
          null,
          exchangeRate || buyAmount.dividedBy(sellAmount).toNumber().toFixed(5),
          isMy ? sellCurrency + '/' + buyCurrency : buyCurrency + '/' + sellCurrency
        ),
        _react2.default.createElement(
          'td',
          null,
          peer === ownerPeer ? _react2.default.createElement(_RemoveButton2.default, { onClick: function onClick() {
              return _this3.removeOrder(id);
            } }) : _react2.default.createElement(
            _react.Fragment,
            null,
            isRequested ? _react2.default.createElement(
              _react.Fragment,
              null,
              _react2.default.createElement(
                'div',
                { style: { color: 'red' } },
                'REQUESTING'
              ),
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: _helpers.links.swap + '/' + buyCurrency + '-' + sellCurrency + '/' + id },
                ' Go to the swap'
              )
            ) : balance > amount.toNumber() ? _react2.default.createElement(
              _reactRouterDom.Link,
              { to: _helpers.links.swap + '/' + buyCurrency + '-' + sellCurrency + '/' + id },
              _react2.default.createElement(_RequestButton2.default, { sendRequest: function sendRequest() {
                  return _this3.sendRequest(id);
                } })
            ) : _react2.default.createElement(
              'span',
              null,
              'Insufficient funds'
            )
          )
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            'a',
            { href: _helpers.links.exchange + '/' + buyCurrency.toLowerCase() + '-' + sellCurrency.toLowerCase() + '/' + id },
            ' link'
          )
        )
      );
    }
  }]);
  return Row;
}(_react.Component), _class2.propTypes = {
  row: _propTypes2.default.object
}, _temp2)) || _class);
exports.default = Row;

/***/ }),
/* 1053 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"coins":"_1TWvrk"};

/***/ }),
/* 1054 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"coin":"_1wYXYN","icon":"mK0HOH","letter":"_1Nd751"};

/***/ }),
/* 1055 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"text":"_3WoNsh"};

/***/ }),
/* 1056 */
/***/ (function(module, exports) {

module.exports = "https://testnet.swap.online/images/btc_8edde4.svg";

/***/ }),
/* 1057 */
/***/ (function(module, exports) {

module.exports = "https://testnet.swap.online/images/eth_aa4ec5.svg";

/***/ }),
/* 1058 */
/***/ (function(module, exports) {

module.exports = "https://testnet.swap.online/images/icx_d6bb3b.svg";

/***/ }),
/* 1059 */
/***/ (function(module, exports) {

module.exports = "https://testnet.swap.online/images/waves_de7e9b.svg";

/***/ }),
/* 1060 */
/***/ (function(module, exports) {

module.exports = "https://testnet.swap.online/images/xrp_3be55b.svg";

/***/ }),
/* 1061 */
/***/ (function(module, exports) {

module.exports = "https://testnet.swap.online/images/nim_e23886.svg";

/***/ }),
/* 1062 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _RequestButton = __webpack_require__(1063);

var _RequestButton2 = _interopRequireDefault(_RequestButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RequestButton = function RequestButton(_ref) {
  var sendRequest = _ref.sendRequest;
  return _react2.default.createElement('div', { styleName: 'button', onClick: sendRequest });
};

exports.default = (0, _reactCssModules2.default)(RequestButton, _RequestButton2.default, { allowMultiple: true });

/***/ }),
/* 1063 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"_2R1jZb"};

/***/ }),
/* 1064 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"removeButton":"_1Vm5zB","icon":"_1b1kpz"};

/***/ }),
/* 1065 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _delete = __webpack_require__(1066);

var _delete2 = _interopRequireDefault(_delete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RemoveIcon = function RemoveIcon(_ref) {
  var className = _ref.className;
  return _react2.default.createElement('img', { className: className, src: _delete2.default, alt: 'remove icon' });
};

exports.default = RemoveIcon;

/***/ }),
/* 1066 */
/***/ (function(module, exports) {

module.exports = "https://testnet.swap.online/images/delete_6ab99e.svg";

/***/ }),
/* 1067 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"table":"_16xGSI","color":"SMMD3c"};

/***/ }),
/* 1068 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(12);

var _actions2 = _interopRequireDefault(_actions);

var _Table = __webpack_require__(144);

var _Table2 = _interopRequireDefault(_Table);

var _RowFeeds = __webpack_require__(1069);

var _RowFeeds2 = _interopRequireDefault(_RowFeeds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyOrders = function (_PureComponent) {
  (0, _inherits3.default)(MyOrders, _PureComponent);

  function MyOrders() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MyOrders);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MyOrders.__proto__ || (0, _getPrototypeOf2.default)(MyOrders)).call.apply(_ref, [this].concat(args))), _this), _this.removeOrder = function (orderId) {
      _actions2.default.core.removeOrder(orderId);
      _actions2.default.core.updateCore();
    }, _this.acceptRequest = function (orderId, peer) {
      _actions2.default.core.acceptRequest(orderId, peer);
      _actions2.default.core.updateCore();
    }, _this.declineRequest = function (orderId, peer) {
      _actions2.default.core.declineRequest(orderId, peer);
      _actions2.default.core.updateCore();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MyOrders, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.setState();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var titles = ['EXCHANGE', 'YOU BUY', 'YOU SELL', 'EXCHANGE RATE', 'ACTIONS'];
      var myOrders = this.props.myOrders;


      if (myOrders.length === undefined || myOrders.length <= 0) {
        return null;
      }

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          'h3',
          { style: { marginTop: '50px' } },
          'Your orders'
        ),
        _react2.default.createElement(_Table2.default, {
          titles: titles,
          rows: myOrders,
          rowRender: function rowRender(row, index) {
            return _react2.default.createElement(_RowFeeds2.default, {
              key: index,
              row: row,
              declineRequest: _this2.declineRequest,
              acceptRequest: _this2.acceptRequest,
              removeOrder: _this2.removeOrder
            });
          }
        })
      );
    }
  }]);
  return MyOrders;
}(_react.PureComponent);

exports.default = MyOrders;

/***/ }),
/* 1069 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = __webpack_require__(11);

var _reactRouterDom = __webpack_require__(51);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _RowFeeds = __webpack_require__(1070);

var _RowFeeds2 = _interopRequireDefault(_RowFeeds);

var _Coins = __webpack_require__(185);

var _Coins2 = _interopRequireDefault(_Coins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RowFeeds = (_dec = (0, _reactCssModules2.default)(_RowFeeds2.default, { allowMultiple: true }), _dec(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(RowFeeds, _Component);

  function RowFeeds() {
    (0, _classCallCheck3.default)(this, RowFeeds);
    return (0, _possibleConstructorReturn3.default)(this, (RowFeeds.__proto__ || (0, _getPrototypeOf2.default)(RowFeeds)).apply(this, arguments));
  }

  (0, _createClass3.default)(RowFeeds, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps !== this.props) {
        this.setState();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$row = _props.row,
          requests = _props$row.requests,
          buyAmount = _props$row.buyAmount,
          buyCurrency = _props$row.buyCurrency,
          sellAmount = _props$row.sellAmount,
          sellCurrency = _props$row.sellCurrency,
          exchangeRate = _props$row.exchangeRate,
          id = _props$row.id,
          declineRequest = _props.declineRequest,
          acceptRequest = _props.acceptRequest,
          removeOrder = _props.removeOrder;


      return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(_Coins2.default, { names: [buyCurrency, sellCurrency] })
        ),
        _react2.default.createElement(
          'td',
          null,
          buyAmount.toFixed(5) + ' ' + buyCurrency
        ),
        _react2.default.createElement(
          'td',
          null,
          sellAmount.toFixed(5) + ' ' + sellCurrency
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            'a',
            { href: _helpers.links.swap + '/' + sellCurrency + '-' + buyCurrency + '/' + id },
            'Link on swap'
          )
        ),
        _react2.default.createElement(
          'td',
          null,
          (exchangeRate || buyAmount / sellAmount).toFixed(5) + ' ' + buyCurrency + '/' + sellCurrency
        ),
        _react2.default.createElement(
          'td',
          null,
          Boolean(requests && requests.length) ? _react2.default.createElement(
            'div',
            { styleName: 'buttons' },
            _react2.default.createElement(
              'div',
              { styleName: 'delete', onClick: function onClick() {
                  return declineRequest(id, requests[0].peer);
                } },
              'Decline'
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: _helpers.links.swap + '/' + sellCurrency + '-' + buyCurrency + '/' + id },
              _react2.default.createElement(
                'div',
                { styleName: 'accept', onClick: function onClick() {
                    return acceptRequest(id, requests[0].peer);
                  } },
                'Accept'
              )
            )
          ) : _react2.default.createElement(
            'div',
            { styleName: 'delete', onClick: function onClick() {
                return removeOrder(id);
              } },
            ' Delete order'
          )
        )
      );
    }
  }]);
  return RowFeeds;
}(_react.Component), _class2.propTypes = {
  row: _propTypes2.default.object
}, _temp)) || _class);
exports.default = RowFeeds;

/***/ }),
/* 1070 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"userTooltip":"_3fhX3C","buy":"_2e83r_","accept":"_2ClHjy","sell":"_3kCurQ","delete":"_1RcmYq","currency":"_3St5DH","coin":"_1b2RPo","buttons":"_3L8CPG","arrow":"_1U9SQc"};

/***/ }),
/* 1071 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _SearchSwap = __webpack_require__(1072);

var _SearchSwap2 = _interopRequireDefault(_SearchSwap);

var _CurrencySelect = __webpack_require__(450);

var _CurrencySelect2 = _interopRequireDefault(_CurrencySelect);

var _Flip = __webpack_require__(451);

var _Flip2 = _interopRequireDefault(_Flip);

var _Button = __webpack_require__(33);

var _Button2 = _interopRequireDefault(_Button);

var _actions = __webpack_require__(12);

var _actions2 = _interopRequireDefault(_actions);

var _helpers = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreateOfferButton = (_dec = (0, _reactCssModules2.default)(_SearchSwap2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(CreateOfferButton, _Component);

  function CreateOfferButton() {
    (0, _classCallCheck3.default)(this, CreateOfferButton);
    return (0, _possibleConstructorReturn3.default)(this, (CreateOfferButton.__proto__ || (0, _getPrototypeOf2.default)(CreateOfferButton)).apply(this, arguments));
  }

  (0, _createClass3.default)(CreateOfferButton, [{
    key: 'createOffer',
    value: function createOffer() {
      _actions2.default.modals.open(_helpers.constants.modals.Offer, {});
      _actions2.default.analytics.dataEvent('orderbook-click-createoffer-button');
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          buyCurrency = _props.buyCurrency,
          sellCurrency = _props.sellCurrency,
          flipCurrency = _props.flipCurrency,
          handleBuyCurrencySelect = _props.handleBuyCurrencySelect,
          handleSellCurrencySelect = _props.handleSellCurrencySelect;


      return _react2.default.createElement(
        'div',
        { styleName: 'choice' },
        _react2.default.createElement(
          'div',
          { styleName: 'row' },
          _react2.default.createElement(
            'p',
            { styleName: 'text' },
            'You want to buy'
          ),
          _react2.default.createElement(_CurrencySelect2.default, {
            styleName: 'currencySelect',
            selectedValue: buyCurrency,
            onSelect: handleBuyCurrencySelect
          })
        ),
        _react2.default.createElement(_Flip2.default, { onClick: flipCurrency }),
        _react2.default.createElement(
          'div',
          { styleName: 'row' },
          _react2.default.createElement(
            'p',
            { styleName: 'text' },
            'You want to sell'
          ),
          _react2.default.createElement(_CurrencySelect2.default, {
            styleName: 'currencySelect',
            selectedValue: sellCurrency,
            onSelect: handleSellCurrencySelect
          })
        ),
        _react2.default.createElement(
          'div',
          { styleName: 'row' },
          _react2.default.createElement(
            _Button2.default,
            { brand: true, onClick: this.createOffer },
            'Create offer'
          )
        )
      );
    }
  }]);
  return CreateOfferButton;
}(_react.Component)) || _class);
exports.default = CreateOfferButton;

/***/ }),
/* 1072 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"currencySelect":"_3zIboc","choice":"_1TXLKZ","row":"_2lapE0","text":"_11f2Sj"};

/***/ }),
/* 1073 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1074 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Option = __webpack_require__(1075);

var _Option2 = _interopRequireDefault(_Option);

var _CurrencyIcon = __webpack_require__(448);

var _CurrencyIcon2 = _interopRequireDefault(_CurrencyIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = function Option(_ref) {
  var icon = _ref.icon,
      title = _ref.title;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(_CurrencyIcon2.default, { styleName: 'icon', name: icon }),
    title
  );
};

exports.default = (0, _reactCssModules2.default)(Option, _Option2.default);

/***/ }),
/* 1075 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"icon":"wo-HER"};

/***/ }),
/* 1076 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class, _class2, _temp, _initialiseProps;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(44);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _DropDown = __webpack_require__(1077);

var _DropDown2 = _interopRequireDefault(_DropDown);

var _toggle = __webpack_require__(1078);

var _toggle2 = _interopRequireDefault(_toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropDown = (_dec = (0, _toggle2.default)(), _dec2 = (0, _reactCssModules2.default)(_DropDown2.default, { allowMultiple: true }), _dec(_class = _dec2(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(DropDown, _Component);

  function DropDown(_ref) {
    var initialValue = _ref.initialValue,
        selectedValue = _ref.selectedValue;
    (0, _classCallCheck3.default)(this, DropDown);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DropDown.__proto__ || (0, _getPrototypeOf2.default)(DropDown)).call(this));

    _initialiseProps.call(_this);

    _this.state = {
      selectedValue: initialValue || selectedValue || 0
    };
    return _this;
  }

  (0, _createClass3.default)(DropDown, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          items = _props.items,
          isToggleActive = _props.isToggleActive;


      var dropDownStyleName = (0, _classnames2.default)('dropDown', {
        'active': isToggleActive
      });

      return _react2.default.createElement(
        'div',
        { styleName: dropDownStyleName, className: className },
        _react2.default.createElement(
          'div',
          { styleName: 'selectedItem', onClick: this.toggle },
          _react2.default.createElement('div', { styleName: 'arrow' }),
          this.renderSelectedItem()
        ),
        isToggleActive && _react2.default.createElement(
          'div',
          { styleName: 'select' },
          items.map(function (item) {
            return _react2.default.createElement(
              'div',
              {
                key: item.value,
                styleName: 'option',
                onClick: function onClick() {
                  return _this2.handleOptionClick(item);
                }
              },
              _this2.renderItem(item)
            );
          })
        )
      );
    }
  }]);
  return DropDown;
}(_react.Component), _class2.propTypes = {
  initialValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  selectedValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    title: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired
  })),
  selectedItemRender: _propTypes2.default.func,
  itemRender: _propTypes2.default.func,
  onSelect: _propTypes2.default.func,
  isToggleActive: _propTypes2.default.bool.isRequired, // @toggle
  toggleOpen: _propTypes2.default.func.isRequired, // @toggle
  toggleClose: _propTypes2.default.func.isRequired // @toggle
}, _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.toggle = function () {
    var _props2 = _this3.props,
        isToggleActive = _props2.isToggleActive,
        toggleOpen = _props2.toggleOpen,
        toggleClose = _props2.toggleClose;


    if (isToggleActive) {
      toggleClose();
    } else {
      toggleOpen();
    }
  };

  this.handleOptionClick = function (item) {
    var _props3 = _this3.props,
        toggleClose = _props3.toggleClose,
        selectedValue = _props3.selectedValue,
        onSelect = _props3.onSelect;

    // if there is no passed `selectedValue` then change it

    if (typeof selectedValue === 'undefined') {
      _this3.setState({
        selectedValue: item.value
      });
    }

    // for example we'd like to change `selectedValue` manually
    if (typeof onSelect === 'function') {
      onSelect(item);
    }

    toggleClose();
  };

  this.renderSelectedItem = function () {
    var _props4 = _this3.props,
        items = _props4.items,
        selectedItemRender = _props4.selectedItemRender;


    var selectedValue = typeof _this3.props.selectedValue !== 'undefined' ? _this3.props.selectedValue : _this3.state.selectedValue;
    var selectedItem = items.find(function (_ref2) {
      var value = _ref2.value;
      return value === selectedValue;
    });

    if (typeof selectedItemRender === 'function') {
      return selectedItemRender(selectedItem);
    }

    return selectedItem.title;
  };

  this.renderItem = function (item) {
    var itemRender = _this3.props.itemRender;


    if (typeof itemRender === 'function') {
      return itemRender(item);
    }

    return item.title;
  };
}, _temp)) || _class) || _class);
exports.default = DropDown;

/***/ }),
/* 1077 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"dropDown":"_3TGsDm","active":"_241k3D","arrow":"_4VDBhE","selectedItem":"_30-6Oj","select":"_2ukQw7","option":"_1fOZbQ"};

/***/ }),
/* 1078 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(68);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { processClick: false };
  return function (Component) {
    return function (_PureComponent) {
      (0, _inherits3.default)(WrappedComponent, _PureComponent);

      function WrappedComponent() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, WrappedComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = WrappedComponent.__proto__ || (0, _getPrototypeOf2.default)(WrappedComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
          isToggleActive: false
        }, _this.toggleClose = function (event) {
          if (options.processClick) {
            event.stopPropagation();

            document.removeEventListener('click', _this.toggleClose);
          }

          _this.setState({
            isToggleActive: false
          });
        }, _this.toggleOpen = function (event) {
          var isToggleActive = _this.state.isToggleActive;


          if (isToggleActive) {
            return;
          }

          if (options.processClick) {
            event.stopPropagation();

            document.addEventListener('click', _this.toggleClose);
          }

          _this.setState({
            isToggleActive: true
          });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
      }

      (0, _createClass3.default)(WrappedComponent, [{
        key: 'render',
        value: function render() {

          return _react2.default.createElement(Component, (0, _extends3.default)({}, this.props, this.state, {
            toggleOpen: this.toggleOpen,
            toggleClose: this.toggleClose
          }));
        }
      }]);
      return WrappedComponent;
    }(_react.PureComponent);
  };
};

/***/ }),
/* 1079 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"trade-panel__change":"_2LOdkU"};

/***/ }),
/* 1080 */
/***/ (function(module, exports) {

module.exports = "https://testnet.swap.online/images/flip_d738de.svg";

/***/ }),
/* 1081 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(68);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _keys = __webpack_require__(46);

var _keys2 = _interopRequireDefault(_keys);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redaction = __webpack_require__(25);

var _helpers = __webpack_require__(11);

var _actions = __webpack_require__(12);

var _actions2 = _interopRequireDefault(_actions);

var _Table = __webpack_require__(144);

var _Table2 = _interopRequireDefault(_Table);

var _Confirm = __webpack_require__(1082);

var _Confirm2 = _interopRequireDefault(_Confirm);

var _SaveKeys = __webpack_require__(1084);

var _SaveKeys2 = _interopRequireDefault(_SaveKeys);

var _Title = __webpack_require__(265);

var _Title2 = _interopRequireDefault(_Title);

var _PageHeadline = __webpack_require__(143);

var _PageHeadline2 = _interopRequireDefault(_PageHeadline);

var _SubTitle = __webpack_require__(109);

var _SubTitle2 = _interopRequireDefault(_SubTitle);

var _controls = __webpack_require__(96);

var _Row = __webpack_require__(1093);

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wallet = (_dec = (0, _redaction.connect)(function (_ref) {
  var _ref$user = _ref.user,
      ethData = _ref$user.ethData,
      btcData = _ref$user.btcData,
      tokensData = _ref$user.tokensData,
      eosData = _ref$user.eosData,
      nimData = _ref$user.nimData;
  return {
    tokens: (0, _keys2.default)(tokensData).map(function (k) {
      return tokensData[k];
    }),
    items: [ethData, btcData, eosData /* eosData  nimData */]
  };
}), _dec(_class = function (_Component) {
  (0, _inherits3.default)(Wallet, _Component);

  function Wallet() {
    var _ref2;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Wallet);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = Wallet.__proto__ || (0, _getPrototypeOf2.default)(Wallet)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      view: 'off'
    }, _this.handleClear =  false ? function () {} : function (event) {
      event.preventDefault();
      window.localStorage.clear();
      window.location.reload();
    }, _this.handleDownload = function () {
      _actions2.default.user.downloadPrivateKeys();
      _this.changeView('checkKeys');
    }, _this.handleConfirm = function () {
      _this.changeView('checkKeys');
      localStorage.setItem(_helpers.constants.localStorage.privateKeysSaved, true);
    }, _this.handleImportKeys = function () {
      _actions2.default.modals.open(_helpers.constants.modals.ImportKeys, {});
    }, _this.changeView = function (view) {
      _this.setState({
        view: view
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Wallet, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (localStorage.getItem(_helpers.constants.localStorage.privateKeysSaved)) {
        this.changeView('checkKeys');
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _actions2.default.user.getBalances();
      _actions2.default.analytics.dataEvent('open-page-balances');
      // if (!localStorage.getItem(constants.localStorage.privateKeysSaved)) {
      //   actions.modals.open(constants.modals.PrivateKeys, {})
      // }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var view = this.state.view;
      var _props = this.props,
          items = _props.items,
          tokens = _props.tokens;

      var titles = ['Coin', 'Name', 'Balance', 'Address', ''];

      return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
          _PageHeadline2.default,
          null,
          _react2.default.createElement(
            _Title2.default,
            null,
            'SWAP.ONLINE - CRYPTOCURRENCY WALLET WITH ATOMIC SWAP EXCHANGE'
          ),
          _react2.default.createElement(
            _SubTitle2.default,
            null,
            'Check out our ',
            _react2.default.createElement(
              'a',
              { href: 'https://wiki.swap.online/en.pdf', target: '_balnk', rel: 'noreferrer noopener' },
              'project brief'
            ),
            ' and participate in smart airdrop.'
          )
        ),
        _react2.default.createElement(_Confirm2.default, {
          title: 'Are you sure ?',
          isConfirm: function isConfirm() {
            return _this2.handleConfirm();
          },
          isReject: function isReject() {
            return _this2.changeView('off');
          },
          animation: view === 'on'
        }),
        _react2.default.createElement(_Table2.default, {
          titles: titles,
          rows: [].concat(items, tokens),
          rowRender: function rowRender(row, index) {
            return _react2.default.createElement(_Row2.default, (0, _extends3.default)({ key: index }, row));
          }
        }),
        view === 'off' && _react2.default.createElement(_SaveKeys2.default, { isDownload: this.handleDownload, isChange: function isChange() {
            return _this2.changeView('on');
          } }),
        true && _react2.default.createElement(
          _controls.WithdrawButton,
          { onClick: this.handleClear },
          'Exit'
        ),
        _react2.default.createElement(
          _controls.WithdrawButton,
          { onClick: this.handleDownload },
          'Download keys'
        ),
        _react2.default.createElement(
          _controls.WithdrawButton,
          { onClick: this.handleImportKeys },
          'Import keys'
        )
      );
    }
  }]);
  return Wallet;
}(_react.Component)) || _class);
exports.default = Wallet;

/***/ }),
/* 1082 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Confirm = __webpack_require__(1083);

var _Confirm2 = _interopRequireDefault(_Confirm);

var _SubTitle = __webpack_require__(109);

var _SubTitle2 = _interopRequireDefault(_SubTitle);

var _Button = __webpack_require__(33);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Confirm = function Confirm(_ref) {
  var isConfirm = _ref.isConfirm,
      isReject = _ref.isReject,
      title = _ref.title,
      animation = _ref.animation;
  return _react2.default.createElement(
    'div',
    { styleName: animation ? 'confirm animation' : 'confirm' },
    _react2.default.createElement(
      _SubTitle2.default,
      null,
      title
    ),
    _react2.default.createElement(
      'div',
      { styleName: 'row' },
      _react2.default.createElement(
        _Button2.default,
        { brand: true, onClick: isConfirm },
        'Yes'
      ),
      _react2.default.createElement(
        _Button2.default,
        { brand: true, onClick: isReject },
        'No'
      )
    )
  );
};

exports.default = (0, _reactCssModules2.default)(Confirm, _Confirm2.default, { allowMultiple: true });

/***/ }),
/* 1083 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"confirm":"_3hz-0j","animation":"_2QfucO","open":"_1BY5jO","row":"_3sMVTN"};

/***/ }),
/* 1084 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redaction = __webpack_require__(25);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _SaveKeys = __webpack_require__(1085);

var _SaveKeys2 = _interopRequireDefault(_SaveKeys);

var _Field = __webpack_require__(1086);

var _Field2 = _interopRequireDefault(_Field);

var _Button = __webpack_require__(33);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SaveKeys = (_dec = (0, _redaction.connect)(function (_ref) {
  var _ref$user = _ref.user,
      ethData = _ref$user.ethData,
      btcData = _ref$user.btcData,
      eosData = _ref$user.eosData;
  return {
    btcData: btcData, ethData: ethData, eosData: eosData
  };
}), _dec2 = (0, _reactCssModules2.default)(_SaveKeys2.default), _dec(_class = _dec2(_class = function (_Component) {
  (0, _inherits3.default)(SaveKeys, _Component);

  function SaveKeys() {
    (0, _classCallCheck3.default)(this, SaveKeys);
    return (0, _possibleConstructorReturn3.default)(this, (SaveKeys.__proto__ || (0, _getPrototypeOf2.default)(SaveKeys)).apply(this, arguments));
  }

  (0, _createClass3.default)(SaveKeys, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          ethData = _props.ethData,
          btcData = _props.btcData,
          eosData = _props.eosData,
          isChange = _props.isChange,
          isDownload = _props.isDownload;


      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          'div',
          { styleName: 'title' },
          'These are your private keys. Download the keys by  clicking on ',
          _react2.default.createElement('br', null),
          'the button or take a screenshot of this page, then confirm it and click here. ',
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'span',
            { styleName: 'linked', onClick: isChange },
            'I saved the keys in a safe place'
          )
        ),
        _react2.default.createElement(
          'div',
          { styleName: 'row' },
          _react2.default.createElement(
            _Button2.default,
            { brand: true, onClick: isDownload },
            'Download'
          ),
          _react2.default.createElement(
            'div',
            { styleName: 'cell' },
            _react2.default.createElement(_Field2.default, {
              label: ethData.currency,
              privateKey: ethData.privateKey.toString()
            }),
            _react2.default.createElement(_Field2.default, {
              label: btcData.currency,
              privateKey: btcData.privateKey.toString()
            }),
            typeof eosData.masterPrivateKey === 'string' && _react2.default.createElement(_Field2.default, {
              label: eosData.currency,
              privateKey: eosData.masterPrivateKey.toString()
            })
          )
        )
      );
    }
  }]);
  return SaveKeys;
}(_react.Component)) || _class) || _class);
exports.default = SaveKeys;

/***/ }),
/* 1085 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"title":"_34whwW","row":"_1iYant","cell":"_3ZIa3Z","linked":"_1wQQoQ"};

/***/ }),
/* 1086 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Field = __webpack_require__(1087);

var _Field2 = _interopRequireDefault(_Field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Field = function Field(_ref) {
  var privateKey = _ref.privateKey,
      label = _ref.label;
  return _react2.default.createElement(
    'div',
    { styleName: 'row' },
    _react2.default.createElement(
      'strong',
      null,
      label,
      ':  '
    ),
    ' ',
    privateKey
  );
};

exports.default = (0, _reactCssModules2.default)(Field, _Field2.default);

/***/ }),
/* 1087 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"row":"_37f8Rw"};

/***/ }),
/* 1088 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"twoButtonsInRow":"_2KYO-l"};

/***/ }),
/* 1089 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"reloadButton":"_2NgnzZ","icon":"tps3tZ"};

/***/ }),
/* 1090 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reload = __webpack_require__(1091);

var _reload2 = _interopRequireDefault(_reload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReloadIcon = function ReloadIcon(_ref) {
  var className = _ref.className;
  return _react2.default.createElement('img', { className: className, src: _reload2.default, alt: 'reload icon' });
};

exports.default = ReloadIcon;

/***/ }),
/* 1091 */
/***/ (function(module, exports) {

module.exports = "https://testnet.swap.online/images/reload_d8d88b.svg";

/***/ }),
/* 1092 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"withdrawButton":"_2yf2Si"};

/***/ }),
/* 1093 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(12);

var _actions2 = _interopRequireDefault(_actions);

var _helpers = __webpack_require__(11);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Row = __webpack_require__(1094);

var _Row2 = _interopRequireDefault(_Row);

var _Coin = __webpack_require__(266);

var _Coin2 = _interopRequireDefault(_Coin);

var _WithdrawButton = __webpack_require__(454);

var _WithdrawButton2 = _interopRequireDefault(_WithdrawButton);

var _ReloadButton = __webpack_require__(453);

var _ReloadButton2 = _interopRequireDefault(_ReloadButton);

var _InlineLoader = __webpack_require__(141);

var _InlineLoader2 = _interopRequireDefault(_InlineLoader);

var _LinkAcount = __webpack_require__(1095);

var _LinkAcount2 = _interopRequireDefault(_LinkAcount);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = (_dec = (0, _reactCssModules2.default)(_Row2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(Row, _Component);

  function Row() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Row);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Row.__proto__ || (0, _getPrototypeOf2.default)(Row)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isBalanceFetching: false,
      viewText: false
    }, _this.handleReloadBalance = function () {
      var isBalanceFetching = _this.state.isBalanceFetching;


      if (isBalanceFetching) {
        return null;
      }

      _this.setState({
        isBalanceFetching: true
      });

      var _this$props = _this.props,
          currency = _this$props.currency,
          contractAddress = _this$props.contractAddress,
          decimals = _this$props.decimals;

      var action = void 0;

      currency = currency.toLowerCase();

      if (currency === 'eth') {
        action = _actions2.default.eth.getBalance;
        _actions2.default.analytics.dataEvent('balances-update-eth');
      } else if (currency === 'btc') {
        action = _actions2.default.btc.getBalance;
        _actions2.default.analytics.dataEvent('balances-update-btc');
      } else if (currency === 'eos') {
        action = _actions2.default.eos.getBalance;
        _actions2.default.analytics.dataEvent('balances-update-eos');
      } else if (currency !== undefined) {
        action = _actions2.default.token.getBalance;
        _actions2.default.analytics.dataEvent('balances-update-token');
      }

      action(contractAddress, currency, decimals).then(function () {
        _this.setState({
          isBalanceFetching: false
        });
      }, function () {
        _this.setState({
          isBalanceFetching: false
        });
      });
    }, _this.handleCopiedAddress = function () {
      _this.setState({ viewText: true });
      var el = document.createElement('textarea');
      el.value = _this.textAddress.innerText;
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setTimeout(function () {
        _this.setState({ viewText: false });
      }, 800);
    }, _this.handleEosLogin = function () {
      _actions2.default.modals.open(_helpers.constants.modals.Eos, {});
    }, _this.handleApproveToken = function (decimals, contractAddress, name) {
      _actions2.default.modals.open(_helpers.constants.modals.Approve, {
        contractAddress: contractAddress,
        decimals: decimals,
        name: name
      });
    }, _this.handleWithdraw = function () {
      var _this$props2 = _this.props,
          currency = _this$props2.currency,
          address = _this$props2.address,
          contractAddress = _this$props2.contractAddress,
          decimals = _this$props2.decimals,
          balance = _this$props2.balance;


      _actions2.default.analytics.dataEvent('balances-withdraw-' + currency.toLowerCase());
      _actions2.default.modals.open(_helpers.constants.modals.Withdraw, {
        currency: currency,
        address: address,
        contractAddress: contractAddress,
        decimals: decimals,
        balance: balance
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Row, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          contractAddress = _props.contractAddress,
          name = _props.name;


      if (name !== undefined) {
        _actions2.default.token.allowance(contractAddress, name);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          isBalanceFetching = _state.isBalanceFetching,
          viewText = _state.viewText;
      var _props2 = this.props,
          currency = _props2.currency,
          name = _props2.name,
          balance = _props2.balance,
          isBalanceFetched = _props2.isBalanceFetched,
          address = _props2.address,
          contractAddress = _props2.contractAddress,
          decimals = _props2.decimals,
          approve = _props2.approve,
          unconfirmedBalance = _props2.unconfirmedBalance;


      return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(_Coin2.default, { name: currency, size: 40 })
        ),
        _react2.default.createElement(
          'td',
          null,
          currency
        ),
        _react2.default.createElement(
          'td',
          { style: { minWidth: '80px' } },
          !isBalanceFetched || isBalanceFetching ? _react2.default.createElement(_InlineLoader2.default, null) : _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'span',
              null,
              balance
            ),
            ' ',
            _react2.default.createElement('br', null),
            currency === 'BTC' && unconfirmedBalance !== 0 && _react2.default.createElement(
              'span',
              { style: { fontSize: '12px', color: '#c9c9c9' } },
              'Unconfirmed ',
              unconfirmedBalance
            )
          )
        ),
        _react2.default.createElement(
          'td',
          { ref: function ref(td) {
              return _this2.textAddress = td;
            } },
          !contractAddress ? _react2.default.createElement(
            _LinkAcount2.default,
            { type: currency, address: address },
            address
          ) : !approve ? _react2.default.createElement(
            'button',
            { styleName: 'button', onClick: function onClick() {
                return _this2.handleApproveToken(decimals, contractAddress, name);
              } },
            'Approve'
          ) : _react2.default.createElement(
            _LinkAcount2.default,
            { type: currency, contractAddress: contractAddress, address: address },
            address
          ),
          currency === 'EOS' && address === '' && _react2.default.createElement(
            'button',
            { styleName: 'button', onClick: this.handleEosLogin },
            'Login'
          )
        ),
        _react2.default.createElement(
          'td',
          { style: { position: 'relative' } },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'button',
              { styleName: 'button', onClick: this.handleCopiedAddress },
              'Copy'
            ),
            _react2.default.createElement(_ReloadButton2.default, { styleName: 'reloadButton', onClick: this.handleReloadBalance }),
            _react2.default.createElement(
              _WithdrawButton2.default,
              { onClick: this.handleWithdraw },
              'Withdraw'
            ),
            viewText && _react2.default.createElement(
              'p',
              { styleName: 'copied' },
              'Address copied to clipboard'
            )
          )
        )
      );
    }
  }]);
  return Row;
}(_react.Component)) || _class);
exports.default = Row;

/***/ }),
/* 1094 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"reloadButton":"_3jFL5E","copied":"_3b4eD1","button":"_3gDOry"};

/***/ }),
/* 1095 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _appConfig = __webpack_require__(18);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _Href = __webpack_require__(186);

var _Href2 = _interopRequireDefault(_Href);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinkAccount = function LinkAccount(_ref) {
  var type = _ref.type,
      children = _ref.children,
      address = _ref.address,
      contractAddress = _ref.contractAddress;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    type.toLowerCase() === 'eth' && _react2.default.createElement(
      _Href2.default,
      { tab: _appConfig2.default.link.etherscan + '/address/' + address },
      children
    ),
    type.toLowerCase() === 'btc' && _react2.default.createElement(
      _Href2.default,
      { tab: _appConfig2.default.link.bitpay + '/address/' + address },
      children
    ),
    contractAddress !== undefined && _react2.default.createElement(
      _Href2.default,
      { tab: _appConfig2.default.link.etherscan + '/token/' + contractAddress + '?a=' + address },
      children
    ),
    type.toLowerCase() === 'eos' && _react2.default.createElement(
      _Href2.default,
      { tab: '' + _appConfig2.default.link.eos },
      children
    )
  );
};

exports.default = LinkAccount;

/***/ }),
/* 1096 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"link":"_1bLBL3"};

/***/ }),
/* 1097 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Listing = __webpack_require__(1098);

var _Listing2 = _interopRequireDefault(_Listing);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _listingScreen = __webpack_require__(1099);

var _listingScreen2 = _interopRequireDefault(_listingScreen);

var _Href = __webpack_require__(186);

var _Href2 = _interopRequireDefault(_Href);

var _controls = __webpack_require__(96);

var _FeedBack = __webpack_require__(1100);

var _FeedBack2 = _interopRequireDefault(_FeedBack);

var _forms = __webpack_require__(145);

var _SubTitle = __webpack_require__(109);

var _SubTitle2 = _interopRequireDefault(_SubTitle);

var _PageHeadline = __webpack_require__(143);

var _PageHeadline2 = _interopRequireDefault(_PageHeadline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Listing = function Listing() {
  return _react2.default.createElement(
    'div',
    { className: 'container' },
    _react2.default.createElement(
      _PageHeadline2.default,
      null,
      _react2.default.createElement(
        _SubTitle2.default,
        null,
        'Listing'
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      'Crypto Pink Sheets: ALL Coins Welcome To SWAP.Online!'
    ),
    _react2.default.createElement(
      'p',
      null,
      'OTC-approach-crypto market to be opened in Aug, 2018.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'There was one company in the U.S. in the year of 1913, the National Quotation Bureau. They brought to life very simple idea - to provide every entity with the ability to be quoted freely, without complicated safety and control proceedings. The list of the bond orders was primarily published on the yellow paper and the stock orders were published on the pink paper. The Pink Sheets, as the lists were immediately called by the traders. rapidly became very popular among the market players. Every firm opened in the U.S. or abroad was able to publish its securities quotations in the list of Pink Sheets. With the increasing requirements of NYSE and NASDAQ and growing demands of the SEC to the information regarding the company applying the market, the interest to the Pink Sheets arose very fast. In September, 1990, the NQB introduced the real-time Electronic Quotation Service, so the over-the-counter trading entered the Internet. By the year 2010 the operators of the Pink Sheets trading were acquisited by the OTC Market Group, Inc. In 2014, two of five U.S. stock trades were over-the-counter.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Wal-Mart was the Pink Sheet company in 1972 and earned there USD 1B.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Navistar International, the 12-billion-dollar-corporation, came to the Pink Sheets Market in 2006 leaving the NYSE due to some issues with the auditor board.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'In SWAP.Online we have noticed that Pink Sheets principles are very close to the initial meaning of cryptocurrencies. Both of them are based on the faith in transparency, decentralization, bilateral responsibility of buyer and seller. As we decided to make the exchange of crypto really',
      _react2.default.createElement(
        _Href2.default,
        { tab: 'https://wiki.swap.online/decentralised_exchanges_2018trends_eng/' },
        ' safe, rapid and decentralized'
      ),
      ', we couldn\u2019t go about this another way.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'SWAP.Online will be cryptocurrency Pink Sheets market.'
    ),
    _react2.default.createElement('img', { src: _listingScreen2.default, styleName: 'listingImg', alt: 'Orders book on swap.online' }),
    _react2.default.createElement(
      'p',
      null,
      'It\u2019s well known that even in traditional stock market, one willing to be quoted must meet the requirements of SEC, or as far as the OTC Market Group Inc. markets (OTCQX and OTCQB) are concerned, must show the big income and seek the support of the influential consulting agencies. Moreover, the information about the company audit must be provided annually to the SEC or SEC-approved regulators.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Some of the cryptocurrency \u2018fat cats\u2019 allow themselves to do the same. For example, Localbitcoins CEO said they would newer list a token of the project with less than USD1B capitalisation. Cryptobridge and some related centralized exchanges ask for the USD 23 thousand (in BTS equivalent) for the token owner to be listed.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'That is not about us. '
    ),
    _react2.default.createElement(
      'p',
      null,
      'As our transactions is peer-to-peer, based on the Atomic Swaps technology, we can add to the balances every token corresponding some our criterias. Obviously, clearly fraudulent projects are to be rejected from the very beginning. But all other start-ups on the different stages of development are welcome. '
    ),
    _react2.default.createElement(
      'p',
      null,
      'In contradiction to the widespread Ethereum-pegged exchanges, the main currency to be changed on tokens in our project is Bitcoin. It can be treated as our killer-feature: for the crypto-newbies and vast majority of small customers Bitcoin is much clearer and easy to buy via Localbitcoins etc.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'We offer two-level way of access to the balances. On the first stage, we analyze the level of project technical development, collect the basic information (name, ticker, logo) and add the token to trading balances.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Then, to start trading with Bitcoin, the project should publish the information about the collaboration with SWAP.Online on every social platform and on the web-site forum. With this information published, our developers will release the final version of the exchange to client\u2019s token. This option is available for the first ten projects only. '
    ),
    _react2.default.createElement(
      'p',
      null,
      'The conditions of delisting are discussed, but at the moment, we plan to expel twenty per cent worst tokens every month.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Thus, you token can start to be quoted in free and decentralized manner as quickly as possible for your unlimited profit.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'strong',
        null,
        'Stay with us.'
      ),
      ' ',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        null,
        'Grow with us.'
      ),
      ' ',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        null,
        'Earn with us.'
      ),
      ' ',
      _react2.default.createElement('br', null)
    ),
    _react2.default.createElement(_FeedBack2.default, { link: 'https://t.me/sashanoxon' })
  );
};

exports.default = (0, _reactCssModules2.default)(Listing, _Listing2.default);

/***/ }),
/* 1098 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"listingImg":"_11f0U6","listingForm":"_2o0mJW","listingBtn":"_3y6L25"};

/***/ }),
/* 1099 */
/***/ (function(module, exports) {

module.exports = "https://testnet.swap.online/images/listing-screen_fc16f6.png";

/***/ }),
/* 1100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FeedBack = __webpack_require__(1101);

var _FeedBack2 = _interopRequireDefault(_FeedBack);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _telegram = __webpack_require__(1102);

var _telegram2 = _interopRequireDefault(_telegram);

var _Href = __webpack_require__(186);

var _Href2 = _interopRequireDefault(_Href);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FeedBack = function FeedBack(_ref) {
  var link = _ref.link;
  return _react2.default.createElement(
    'div',
    { styleName: 'feedback' },
    _react2.default.createElement(
      'h2',
      { styleName: 'heading' },
      'Contacts'
    ),
    _react2.default.createElement(
      'div',
      { styleName: 'contact' },
      _react2.default.createElement('img', { src: _telegram2.default, alt: '' }),
      _react2.default.createElement(
        _Href2.default,
        { tab: link },
        link
      ),
      _react2.default.createElement(
        'span',
        { styleName: 'text' },
        'or'
      ),
      _react2.default.createElement(
        _Href2.default,
        { tab: 'mailto:team@swap.online' },
        'team@swap.online'
      ),
      _react2.default.createElement(
        'span',
        { styleName: 'text' },
        'to find out further actions'
      )
    )
  );
};

exports.default = (0, _reactCssModules2.default)(FeedBack, _FeedBack2.default);

/***/ }),
/* 1101 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"feedback":"_2qwouh","heading":"_1kFWUv","text":"_4ViCT0","contact":"_10Uaos"};

/***/ }),
/* 1102 */
/***/ (function(module, exports) {

module.exports = "https://testnet.swap.online/images/telegram_ebde6d.png";

/***/ }),
/* 1103 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"label":"_1AbkiC","inRow":"_2Hoger"};

/***/ }),
/* 1104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberInput = exports.Checkbox = exports.Radio = exports.Select = exports.TextArea = exports.Input = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = __webpack_require__(68);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(55);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = __webpack_require__(127);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactInputMask = __webpack_require__(1105);

var _reactInputMask2 = _interopRequireDefault(_reactInputMask);

var _classnames = __webpack_require__(44);

var _classnames2 = _interopRequireDefault(_classnames);

var _helpers = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setValue = function setValue(x, e) {
  return e.target.value;
};
var setBoolValue = function setBoolValue(x, e) {
  return Boolean(e.target.checked);
};

var validationClasses = function validationClasses(_ref, value, error) {
  var className = _ref.className,
      invalidClass = _ref.invalidClass,
      requiredClass = _ref.requiredClass;

  var _cx;

  return (0, _classnames2.default)(className, (_cx = {}, (0, _defineProperty3.default)(_cx, invalidClass || 'invalid', Boolean(error)), (0, _defineProperty3.default)(_cx, requiredClass || 'required', Boolean(error && value === '')), _cx));
};

var Input = function Input(props) {
  var valueLink = props.valueLink,
      checkedLink = props.checkedLink,
      pattern = props.pattern,
      mask = props.mask,
      maskChar = props.maskChar,
      maskReplace = props.maskReplace,
      rest = (0, _objectWithoutProperties3.default)(props, ['valueLink', 'checkedLink', 'pattern', 'mask', 'maskChar', 'maskReplace']);

  var link = valueLink || checkedLink;

  switch (props.type) {
    case 'checkbox':
      return _react2.default.createElement('input', (0, _extends3.default)({}, rest, {
        checked: Boolean(link.value),
        onChange: link.action(setBoolValue)
      }));
    case 'radio':
      return _react2.default.createElement('input', (0, _extends3.default)({}, rest, {
        checked: link.value === props.value,
        onChange: function onChange(e) {
          if (e.target.checked) {
            link.set(props.value);
          }
        }
      }));
    default:
      var className = validationClasses(rest, valueLink.value, valueLink.error);
      var node = Boolean(mask) ? _reactInputMask2.default : 'input';

      var nodeProps = (0, _assign2.default)({}, rest, {
        className: className,
        value: typeof valueLink.value !== 'undefined' ? String(valueLink.value) : '',
        onChange: valueLink.action(function (x, e) {
          var val = e.target.value;

          if (pattern && val) {
            val = val.replace(new RegExp('[^' + pattern + ']+', 'g'), '');
          }

          if (mask && val) {
            if (maskReplace) {
              return val.replace(maskReplace, '');
            } else if (maskReplace !== null && maskReplace !== false) {
              return val.replace(/[^0-9]+/g, '');
            }
          }
          return val;
        })
      });

      if (mask) {
        nodeProps.mask = mask;
        nodeProps.maskChar = maskChar;
      }

      return _react2.default.createElement(node, nodeProps);
  }
};

var NumberInput = function (_Component) {
  (0, _inherits3.default)(NumberInput, _Component);

  function NumberInput() {
    (0, _classCallCheck3.default)(this, NumberInput);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NumberInput.__proto__ || (0, _getPrototypeOf2.default)(NumberInput)).apply(this, arguments));

    _this.onChange = function (e) {
      var value = e.target.value;

      var asNumber = Number(value);

      _this.setValue(value);

      if (value && !isNaN(asNumber)) {
        _this.props.valueLink.update(function (x) {
          // Update link if value is changed
          if (asNumber !== Number(x)) {
            return asNumber;
          }
        });
      }
    };

    _this.onKeyPress = function (event) {
      var _this$props = _this.props,
          integer = _this$props.integer,
          positive = _this$props.positive;
      var charCode = event.charCode,
          ctrlKey = event.ctrlKey;


      var allowedCharCodes = (positive ? [] : [45]).concat(integer ? [] : [46]);

      if (ctrlKey) {
        return;
      }

      if (charCode && (charCode < 48 || charCode > 57) && allowedCharCodes.indexOf(charCode) < 0) {
        event.preventDefault();
      }
    };
    return _this;
  }

  (0, _createClass3.default)(NumberInput, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setAndConvert(this.props.valueLink.value);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var next = nextProps.valueLink;


      if (Number(next.value) !== Number(this.value)) {
        this.setAndConvert(next.value); // keep state being synced
      }
    }
  }, {
    key: 'setValue',
    value: function setValue(x) {
      // We're not using native state in order to avoid race condition.
      this.value = String(x);
      this.error = this.value === '' || isNaN(Number(x));

      this.forceUpdate();
    }
  }, {
    key: 'setAndConvert',
    value: function setAndConvert(x) {
      var value = Number(x);

      if (this.props.positive) {
        value = Math.abs(x);
      }
      if (this.props.integer) {
        value = Math.round(value);
      }

      this.setValue(value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          valueLink = _props.valueLink,
          props = (0, _objectWithoutProperties3.default)(_props, ['valueLink']);

      var error = valueLink.error || this.error;

      return _react2.default.createElement('input', (0, _extends3.default)({}, (0, _helpers.ignoreProps)(props, 'positive', 'integer'), {
        type: 'text',
        className: validationClasses(props, this.value, error),
        value: this.value,
        onKeyPress: this.onKeyPress,
        onChange: this.onChange
      }));
    }
  }]);
  return NumberInput;
}(_react.Component);

/**
 * Wrapper for standard <textarea/> to be compliant with React 0.14 valueLink semantic.
 * Simple supports for link validation - adds 'invalid' class if link has an error.
 *
 *     <TextArea valueLink={ linkToText } />
 */


var TextArea = function TextArea(_ref2) {
  var valueLink = _ref2.valueLink,
      props = (0, _objectWithoutProperties3.default)(_ref2, ['valueLink']);
  return _react2.default.createElement('textarea', (0, _extends3.default)({}, props, {
    className: validationClasses(props, valueLink.value, valueLink.error),
    value: valueLink.value,
    onChange: valueLink.action(setValue)
  }));
};

/**
 * Wrapper for standard <select/> to be compliant with React 0.14 valueLink semantic.
 * Regular <option/> tags must be used:
 *
 *     <Select valueLink={ linkToSelectedValue }>
 *         <option value="a">A</option>
 *         <option value="b">B</option>
 *     </Select>
 */
var Select = function Select(_ref3) {
  var valueLink = _ref3.valueLink,
      children = _ref3.children,
      props = (0, _objectWithoutProperties3.default)(_ref3, ['valueLink', 'children']);
  return _react2.default.createElement(
    'select',
    (0, _extends3.default)({}, props, {
      value: valueLink.value,
      onChange: valueLink.action(setValue)
    }),
    children
  );
};

/**
 * Simple custom <Radio/> tag implementation. Can be easily styled.
 * Intended to be used with offhand bool link:
 *
 *    <Radio checkedLink={ linkToValue.equals( optionValue ) />
 */
var Radio = function Radio(_ref4) {
  var _ref4$className = _ref4.className,
      className = _ref4$className === undefined ? 'radio' : _ref4$className,
      checkedLink = _ref4.checkedLink,
      children = _ref4.children;
  return _react2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)(className, { 'selected': checkedLink.value }),
      onClick: checkedLink.action(function () {
        return true;
      })
    },
    children
  );
};

/**
 * Simple custom <Checkbox /> tag implementation.
 * Takes any type of boolean link. Can be easily styled.
 *
 *     <Checkbox checkedLink={ boolLink } />
 */
var Checkbox = function Checkbox(_ref5) {
  var _ref5$className = _ref5.className,
      className = _ref5$className === undefined ? 'checkbox' : _ref5$className,
      checkedLink = _ref5.checkedLink,
      children = _ref5.children;
  return _react2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)(className, { 'selected': checkedLink.value }),
      onClick: checkedLink.action(function (x) {
        return !x;
      })
    },
    children
  );
};

exports.Input = Input;
exports.TextArea = TextArea;
exports.Select = Select;
exports.Radio = Radio;
exports.Checkbox = Checkbox;
exports.NumberInput = NumberInput;

/***/ }),
/* 1105 */,
/* 1106 */,
/* 1107 */,
/* 1108 */,
/* 1109 */,
/* 1110 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"_1aWblp","inputContainer":"_2di3Mb","disabled":"_3u8Uu2","withError":"_3RwSrH","input":"_3T0zd_","label":"_3xlNvF","error":"_3LmV0i"};

/***/ }),
/* 1111 */,
/* 1112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(68);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redaction = __webpack_require__(25);

var _actions = __webpack_require__(12);

var _actions2 = _interopRequireDefault(_actions);

var _Row = __webpack_require__(1113);

var _Row2 = _interopRequireDefault(_Row);

var _SwapsHistory = __webpack_require__(1117);

var _SwapsHistory2 = _interopRequireDefault(_SwapsHistory);

var _Table = __webpack_require__(144);

var _Table2 = _interopRequireDefault(_Table);

var _Filter = __webpack_require__(1124);

var _Filter2 = _interopRequireDefault(_Filter);

var _PageHeadline = __webpack_require__(143);

var _PageHeadline2 = _interopRequireDefault(_PageHeadline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filterHistory = function filterHistory(items, filter) {
  if (filter === 'sent') {
    return items.filter(function (_ref) {
      var direction = _ref.direction;
      return direction === 'out';
    });
  }

  if (filter === 'received') {
    return items.filter(function (_ref2) {
      var direction = _ref2.direction;
      return direction === 'in';
    });
  }

  return items;
};

var History = (_dec = (0, _redaction.connect)(function (_ref3) {
  var _ref3$history = _ref3.history,
      transactions = _ref3$history.transactions,
      filter = _ref3$history.filter,
      swapHistory = _ref3$history.swapHistory;
  return {
    items: filterHistory(transactions, filter),
    swapHistory: swapHistory
  };
}), _dec(_class = function (_Component) {
  (0, _inherits3.default)(History, _Component);

  function History() {
    (0, _classCallCheck3.default)(this, History);
    return (0, _possibleConstructorReturn3.default)(this, (History.__proto__ || (0, _getPrototypeOf2.default)(History)).apply(this, arguments));
  }

  (0, _createClass3.default)(History, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _actions2.default.analytics.dataEvent('open-page-history');
      _actions2.default.user.setTransactions();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          items = _props.items,
          swapHistory = _props.swapHistory;

      var titles = ['Coin', 'Status', 'Statement', 'Amount'];

      return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(_PageHeadline2.default, { subTitle: 'History' }),
        _react2.default.createElement(_SwapsHistory2.default, { orders: swapHistory }),
        _react2.default.createElement(
          'h3',
          null,
          'All transactions'
        ),
        _react2.default.createElement(_Filter2.default, null),
        _react2.default.createElement(_Table2.default, {
          titles: titles,
          rows: items,
          rowRender: function rowRender(row, index) {
            return _react2.default.createElement(_Row2.default, (0, _extends3.default)({ key: index }, row));
          }
        })
      );
    }
  }]);
  return History;
}(_react.Component)) || _class);
exports.default = History;

/***/ }),
/* 1113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(44);

var _classnames2 = _interopRequireDefault(_classnames);

var _momentWithLocalesEs = __webpack_require__(268);

var _momentWithLocalesEs2 = _interopRequireDefault(_momentWithLocalesEs);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Row = __webpack_require__(1115);

var _Row2 = _interopRequireDefault(_Row);

var _Coin = __webpack_require__(266);

var _Coin2 = _interopRequireDefault(_Coin);

var _LinkTransaction = __webpack_require__(1116);

var _LinkTransaction2 = _interopRequireDefault(_LinkTransaction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = function Row(_ref) {
  var type = _ref.type,
      date = _ref.date,
      direction = _ref.direction,
      hash = _ref.hash,
      value = _ref.value,
      confirmations = _ref.confirmations;

  var statusStyleName = (0, _classnames2.default)('status', {
    'in': direction === 'in',
    'out': direction !== 'in'
  });

  return _react2.default.createElement(
    'tr',
    null,
    _react2.default.createElement(
      'td',
      null,
      _react2.default.createElement(_Coin2.default, { name: type, size: 40 })
    ),
    _react2.default.createElement(
      'td',
      null,
      _react2.default.createElement(
        'div',
        { styleName: statusStyleName },
        direction === 'in' ? 'Received ' : 'Sent '
      ),
      _react2.default.createElement(
        'div',
        { styleName: 'date' },
        (0, _momentWithLocalesEs2.default)(date).format('LLLL')
      ),
      _react2.default.createElement(
        _LinkTransaction2.default,
        { type: type, styleName: 'address', hash: hash },
        hash
      )
    ),
    _react2.default.createElement(
      'td',
      null,
      _react2.default.createElement(
        'div',
        { styleName: confirmations > 0 ? 'confirm cell' : 'unconfirmed cell' },
        confirmations > 0 ? 'Confirm ' + confirmations : 'Unconfirmed'
      )
    ),
    _react2.default.createElement(
      'td',
      null,
      _react2.default.createElement(
        'div',
        { styleName: 'amount' },
        value,
        ' ',
        type.toUpperCase()
      )
    )
  );
};

exports.default = (0, _reactCssModules2.default)(Row, _Row2.default, { allowMultiple: true });

/***/ }),
/* 1114 */,
/* 1115 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"status":"B1fidj","in":"_2WudR1","out":"_3MGYaP","cell":"_3iy6qi","confirm":"_38S3z2","unconfirmed":"_2NV1PP","date":"_3qRLEP","address":"qb31A4","amount":"z9ksse"};

/***/ }),
/* 1116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _appConfig = __webpack_require__(18);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _Href = __webpack_require__(186);

var _Href2 = _interopRequireDefault(_Href);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinkTransaction = function LinkTransaction(_ref) {
  var type = _ref.type,
      children = _ref.children,
      hash = _ref.hash;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    type.toLowerCase() === 'eth' && _react2.default.createElement(
      _Href2.default,
      { tab: _appConfig2.default.link.etherscan + '/tx/' + hash },
      children
    ),
    type.toLowerCase() === 'btc' && _react2.default.createElement(
      _Href2.default,
      { tab: _appConfig2.default.link.bitpay + '/tx/' + hash },
      children
    ),
    type.toLowerCase() === 'noxon' && _react2.default.createElement(
      _Href2.default,
      { tab: _appConfig2.default.link.etherscan + '/tx/' + hash },
      children
    ),
    type.toLowerCase() === 'swap' && _react2.default.createElement(
      _Href2.default,
      { tab: _appConfig2.default.link.etherscan + '/tx/' + hash },
      children
    )
  );
};

exports.default = LinkTransaction;

/***/ }),
/* 1117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _values = __webpack_require__(1118);

var _values2 = _interopRequireDefault(_values);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Table = __webpack_require__(144);

var _Table2 = _interopRequireDefault(_Table);

var _RowHistory = __webpack_require__(1122);

var _RowHistory2 = _interopRequireDefault(_RowHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwapsHistory = function (_PureComponent) {
  (0, _inherits3.default)(SwapsHistory, _PureComponent);

  function SwapsHistory() {
    (0, _classCallCheck3.default)(this, SwapsHistory);
    return (0, _possibleConstructorReturn3.default)(this, (SwapsHistory.__proto__ || (0, _getPrototypeOf2.default)(SwapsHistory)).apply(this, arguments));
  }

  (0, _createClass3.default)(SwapsHistory, [{
    key: 'render',
    value: function render() {
      var orders = this.props.orders;

      var titles = ['Exchange', 'You buy', 'You sell', 'Exchange rate', 'Status', 'Link'];

      if ((0, _values2.default)(orders) === null || (0, _values2.default)(orders).length === 0) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { style: { marginBottom: '50px' } },
        _react2.default.createElement(
          'h3',
          null,
          'Swaps history'
        ),
        _react2.default.createElement(_Table2.default, {
          titles: titles,
          rows: (0, _values2.default)(orders).map(function (item) {
            return item;
          }),
          rowRender: function rowRender(row, index) {
            return _react2.default.createElement(_RowHistory2.default, {
              key: index,
              row: row
            });
          }
        })
      );
    }
  }]);
  return SwapsHistory;
}(_react.PureComponent);

exports.default = SwapsHistory;

/***/ }),
/* 1118 */,
/* 1119 */,
/* 1120 */,
/* 1121 */,
/* 1122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = __webpack_require__(11);

var _reactRouterDom = __webpack_require__(51);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _RowHistory = __webpack_require__(1123);

var _RowHistory2 = _interopRequireDefault(_RowHistory);

var _Coins = __webpack_require__(185);

var _Coins2 = _interopRequireDefault(_Coins);

var _Timer = __webpack_require__(140);

var _Timer2 = _interopRequireDefault(_Timer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RowHistory = function RowHistory(_ref) {
  var row = _ref.row;


  if (row === 'undefined') {
    return null;
  }

  var buyAmount = row.buyAmount,
      buyCurrency = row.buyCurrency,
      sellAmount = row.sellAmount,
      btcScriptValues = row.btcScriptValues,
      isRefunded = row.isRefunded,
      isMy = row.isMy,
      sellCurrency = row.sellCurrency,
      isFinished = row.isFinished,
      id = row.id;


  return _react2.default.createElement(
    'tr',
    null,
    _react2.default.createElement(
      'td',
      null,
      _react2.default.createElement(_Coins2.default, { names: [buyCurrency, sellCurrency] })
    ),
    _react2.default.createElement(
      'td',
      null,
      isMy ? sellAmount + ' ' + sellCurrency.toUpperCase() : buyAmount + ' ' + buyCurrency.toUpperCase()
    ),
    _react2.default.createElement(
      'td',
      null,
      isMy ? buyAmount + ' ' + buyCurrency.toUpperCase() : sellAmount + ' ' + sellCurrency.toUpperCase()
    ),
    _react2.default.createElement(
      'td',
      null,
      (sellAmount / buyAmount).toFixed(5),
      ' ' + sellCurrency + '/' + buyCurrency
    ),
    _react2.default.createElement(
      'td',
      null,
      btcScriptValues && !isRefunded && !isFinished ? _react2.default.createElement(_Timer2.default, {
        lockTime: btcScriptValues.lockTime * 1000,
        enabledButton: function enabledButton() {}
      }) : _react2.default.createElement(
        'span',
        null,
        'Refund not available'
      )
    ),
    _react2.default.createElement(
      'td',
      null,
      isFinished ? 'Finished' : 'Uncompleted'
    ),
    _react2.default.createElement(
      'td',
      null,
      isMy ? _react2.default.createElement(
        _reactRouterDom.Link,
        { to: _helpers.links.swap + '/' + sellCurrency + '-' + buyCurrency + '/' + id },
        'Link to the swap'
      ) : _react2.default.createElement(
        _reactRouterDom.Link,
        { to: _helpers.links.swap + '/' + buyCurrency + '-' + sellCurrency + '/' + id },
        'Link to the swap'
      )
    )
  );
};

RowHistory.propTypes = {
  row: _propTypes2.default.object
};

exports.default = (0, _reactCssModules2.default)(RowHistory, _RowHistory2.default, { allowMultiple: true });

/***/ }),
/* 1123 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"userTooltip":"_2Z_jhL","delete":"eDuZ67","currency":"_2vYSxF","coin":"_17Dby6","buy":"_35V0oz","sell":"_3BVZDc","buttons":"Plxv_t","arrow":"poSVpG"};

/***/ }),
/* 1124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(12);

var _actions2 = _interopRequireDefault(_actions);

var _redaction = __webpack_require__(25);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Filter = __webpack_require__(456);

var _Filter2 = _interopRequireDefault(_Filter);

var _FilterLink = __webpack_require__(1125);

var _FilterLink2 = _interopRequireDefault(_FilterLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Filter = (_dec = (0, _redaction.connect)(function (_ref) {
  var filter = _ref.history.filter;
  return {
    filter: filter
  };
}), _dec2 = (0, _reactCssModules2.default)(_Filter2.default), _dec(_class = _dec2(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(Filter, _Component);

  function Filter() {
    var _ref2;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Filter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = Filter.__proto__ || (0, _getPrototypeOf2.default)(Filter)).call.apply(_ref2, [this].concat(args))), _this), _this.handleChangeFilter = function (filter) {
      _actions2.default.filter.setFilter(filter);
      _actions2.default.analytics.dataEvent('history-click-' + filter);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Filter, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var filter = this.props.filter;


      return _react2.default.createElement(
        'div',
        { styleName: 'history-filter' },
        _react2.default.createElement(_FilterLink2.default, {
          name: 'All',
          onClick: function onClick() {
            return _this2.handleChangeFilter('all');
          },
          filter: filter
        }),
        _react2.default.createElement(_FilterLink2.default, {
          name: 'Sent',
          onClick: function onClick() {
            return _this2.handleChangeFilter('sent');
          },
          filter: filter
        }),
        _react2.default.createElement(_FilterLink2.default, {
          name: 'Received',
          onClick: function onClick() {
            return _this2.handleChangeFilter('received');
          },
          filter: filter
        })
      );
    }
  }]);
  return Filter;
}(_react.Component), _class2.propTypes = {
  filter: _propTypes2.default.string
}, _temp2)) || _class) || _class);
exports.default = Filter;

/***/ }),
/* 1125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Filter = __webpack_require__(456);

var _Filter2 = _interopRequireDefault(_Filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FilterLink = function FilterLink(_ref) {
  var name = _ref.name,
      filter = _ref.filter,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    'span',
    {
      styleName: filter === name.toLowerCase() ? 'history-filter__item  history-filter__item_active' : 'history-filter__item',
      onClick: onClick
    },
    name
  );
};

FilterLink.propTypes = {
  name: _propTypes2.default.string.isRequired,
  filter: _propTypes2.default.string.isRequired
};

exports.default = (0, _reactCssModules2.default)(FilterLink, _Filter2.default, { allowMultiple: true });

/***/ }),
/* 1126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NotFound;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NotFound() {
  return _react2.default.createElement(
    "div",
    { className: "container" },
    _react2.default.createElement(
      "h2",
      { className: "description__sub-title" },
      "Page not found!"
    )
  );
}

/***/ }),
/* 1127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redaction = __webpack_require__(25);

var _PageHeadline = __webpack_require__(143);

var _PageHeadline2 = _interopRequireDefault(_PageHeadline);

var _SubTitle = __webpack_require__(109);

var _SubTitle2 = _interopRequireDefault(_SubTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Affiliate = function Affiliate(_ref) {
  var address = _ref.address;
  return _react2.default.createElement(
    'section',
    { style: { height: '100%' } },
    _react2.default.createElement(
      _PageHeadline2.default,
      null,
      _react2.default.createElement(
        _SubTitle2.default,
        null,
        'Make up to $1000 per Client! Swap.Online Affiliate Program'
      )
    ),
    _react2.default.createElement('iframe', { width: '100%', height: '550px', title: 'wiki.swap.online', src: 'https://wiki.swap.online/affiliate.php?addr=' + address, frameBorder: '0' })
  );
};

exports.default = (0, _redaction.connect)(function (state) {
  return {
    address: state.user.ethData.address
  };
})(Affiliate);

/***/ }),
/* 1128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(377);

var _reactRouterRedux = __webpack_require__(373);

var _App = __webpack_require__(1129);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = (_temp = _class = function (_React$PureComponent) {
  (0, _inherits3.default)(Root, _React$PureComponent);

  function Root() {
    (0, _classCallCheck3.default)(this, Root);
    return (0, _possibleConstructorReturn3.default)(this, (Root.__proto__ || (0, _getPrototypeOf2.default)(Root)).apply(this, arguments));
  }

  (0, _createClass3.default)(Root, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          history = _props.history,
          store = _props.store,
          routes = _props.routes;

      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
          _reactRouterRedux.ConnectedRouter,
          { history: history },
          _react2.default.createElement(
            _App2.default,
            null,
            routes
          )
        )
      );
    }
  }]);
  return Root;
}(_react2.default.PureComponent), _class.propTypes = {
  store: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired,
  routes: _propTypes2.default.element.isRequired
}, _temp);
exports.default = Root;

/***/ }),
/* 1129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(147);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(12);

var _actions2 = _interopRequireDefault(_actions);

var _redaction = __webpack_require__(25);

var _momentWithLocalesEs = __webpack_require__(268);

var _momentWithLocalesEs2 = _interopRequireDefault(_momentWithLocalesEs);

var _helpers = __webpack_require__(11);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _App = __webpack_require__(1130);

var _App2 = _interopRequireDefault(_App);

__webpack_require__(1131);

var _newSwap = __webpack_require__(1132);

var _Core = __webpack_require__(1187);

var _Core2 = _interopRequireDefault(_Core);

var _Header = __webpack_require__(1188);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(1208);

var _Footer2 = _interopRequireDefault(_Footer);

var _Loader = __webpack_require__(273);

var _Loader2 = _interopRequireDefault(_Loader);

var _RequestLoader = __webpack_require__(1213);

var _RequestLoader2 = _interopRequireDefault(_RequestLoader);

var _ModalConductor = __webpack_require__(470);

var _ModalConductor2 = _interopRequireDefault(_ModalConductor);

var _WidthContainer = __webpack_require__(193);

var _WidthContainer2 = _interopRequireDefault(_WidthContainer);

var _NotificationConductor = __webpack_require__(1257);

var _NotificationConductor2 = _interopRequireDefault(_NotificationConductor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userLanguage = (navigator.userLanguage || navigator.language || 'en-gb').split('-')[0];
_momentWithLocalesEs2.default.locale(userLanguage);

var App = (_dec = (0, _redaction.connect)({
  ethAddress: 'user.ethData.address',
  btcAddress: 'user.btcData.address',
  // nimAddress: 'user.nimData.address',
  tokenAddress: 'user.tokensData.noxon.address',
  // eosAddress: 'user.eosData.address',
  isVisible: 'loader.isVisible'
}), _dec2 = (0, _reactCssModules2.default)(_App2.default), (0, _reactRouter.withRouter)(_class = _dec(_class = _dec2(_class = (_temp2 = _class2 = function (_React$Component) {
  (0, _inherits3.default)(App, _React$Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = App.__proto__ || (0, _getPrototypeOf2.default)(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      fetching: false,
      core: false
    }, _this.addCore = function () {
      (0, _newSwap.createSwapApp)();
      _this.setState({ core: !_this.state.core });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (!localStorage.getItem(_helpers.constants.localStorage.demoMoneyReceived)) {
        _actions2.default.user.getDemoMoney();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _actions2.default.user.sign();
        (0, _newSwap.createSwapApp)();
        _this2.setState({
          fetching: true
        });
      }, 1000);
    }
  }, {
    key: 'render',
    value: function render() {
      var fetching = this.state.fetching;
      var _props = this.props,
          children = _props.children,
          ethAddress = _props.ethAddress,
          btcAddress = _props.btcAddress,
          tokenAddress = _props.tokenAddress,
          history = _props.history;

      var isFetching = !ethAddress || !btcAddress || !tokenAddress || !fetching;

      if (isFetching) {
        return _react2.default.createElement(_Loader2.default, null);
      }

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_Header2.default, { history: history }),
        _react2.default.createElement(
          _WidthContainer2.default,
          { styleName: 'main' },
          children
        ),
        _react2.default.createElement(_Core2.default, null),
        _react2.default.createElement(_Footer2.default, null),
        _react2.default.createElement(_RequestLoader2.default, null),
        _react2.default.createElement(_ModalConductor2.default, null),
        _react2.default.createElement(_NotificationConductor2.default, null)
      );
    }
  }]);
  return App;
}(_react2.default.Component), _class2.propTypes = {
  children: _propTypes2.default.element.isRequired
}, _temp2)) || _class) || _class) || _class);
exports.default = App;

/***/ }),
/* 1130 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"main":"_3gjuKq"};

/***/ }),
/* 1131 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modal":"UVZ-gM","btn":"_2xXs60"};

/***/ }),
/* 1132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSwapApp = undefined;

var _web = __webpack_require__(154);

var _web2 = _interopRequireDefault(_web);

var _bitcoinjsLib = __webpack_require__(201);

var _bitcoinjsLib2 = _interopRequireDefault(_bitcoinjsLib);

var _appConfig = __webpack_require__(18);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _helpers = __webpack_require__(11);

var _actions = __webpack_require__(12);

var _actions2 = _interopRequireDefault(_actions);

var _swap = __webpack_require__(20);

var _swap2 = _interopRequireDefault(_swap);

var _swap3 = __webpack_require__(189);

var _swap4 = _interopRequireDefault(_swap3);

var _swap5 = __webpack_require__(462);

var _swap6 = _interopRequireDefault(_swap5);

var _swap7 = __webpack_require__(1158);

var _swap8 = _interopRequireDefault(_swap7);

var _swap9 = __webpack_require__(1169);

var _swap10 = __webpack_require__(1173);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.createOrder = function (_ref) {
  var buyCurrency = _ref.buyCurrency,
      sellCurrency = _ref.sellCurrency,
      buyAmount = _ref.buyAmount,
      sellAmount = _ref.sellAmount;

  var data = {
    buyCurrency: '' + buyCurrency,
    sellCurrency: '' + sellCurrency,
    buyAmount: Number(buyAmount),
    sellAmount: Number(sellAmount)
  };

  _swap2.default.services.orders.create(data);

  return 'Order create';
}; /* eslint-disable import/no-mutable-exports,max-len */


var createSwapApp = function createSwapApp() {
  _swap2.default.setup({
    network:  false ? 'mainnet' : 'testnet',

    env: {
      web3: _web2.default,
      bitcoin: _bitcoinjsLib2.default,
      Ipfs: window.Ipfs,
      IpfsRoom: window.IpfsRoom,
      storage: window.localStorage
    },

    services: [new _swap4.default({
      // TODO need init swapApp only after private keys created!!!!!!!!!!!!!!!!!!!
      eth: localStorage.getItem(_helpers.constants.privateKeyNames.eth),
      btc: localStorage.getItem(_helpers.constants.privateKeyNames.btc)
    }), new _swap6.default({
      repo: './data/messaging/DataBase',
      EXPERIMENTAL: {
        pubsub: true
      },
      config: {
        Addresses: {
          Swarm: [_appConfig2.default.ipfs.swarm]
        }
      }
    }), new _swap8.default()],

    swaps: [new _swap9.EthSwap({
      address: _appConfig2.default.eth.contract,
      gasLimit: 1e5,
      abi: [{ "constant": false, "inputs": [{ "name": "val", "type": "uint256" }], "name": "testnetWithdrawn", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_secret", "type": "bytes32" }, { "name": "_ownerAddress", "type": "address" }], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_participantAddress", "type": "address" }], "name": "getSecret", "outputs": [{ "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "participantSigns", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "swaps", "outputs": [{ "name": "secret", "type": "bytes32" }, { "name": "secretHash", "type": "bytes20" }, { "name": "createdAt", "type": "uint256" }, { "name": "balance", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_secretHash", "type": "bytes20" }, { "name": "_participantAddress", "type": "address" }], "name": "createSwap", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "ratingContractAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_ownerAddress", "type": "address" }], "name": "getBalance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_participantAddress", "type": "address" }], "name": "refund", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "createdAt", "type": "uint256" }], "name": "CreateSwap", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_secret", "type": "bytes32" }, { "indexed": false, "name": "addr", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }], "name": "Withdraw", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Close", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Refund", "type": "event" }],
      fetchBalance: function fetchBalance(address) {
        return _actions2.default.eth.fetchBalance(address);
      }
    }), new _swap9.BtcSwap({
      fetchBalance: function fetchBalance(address) {
        return _actions2.default.btc.fetchBalance(address);
      },
      fetchUnspents: function fetchUnspents(scriptAddress) {
        return _actions2.default.btc.fetchUnspents(scriptAddress);
      },
      broadcastTx: function broadcastTx(txRaw) {
        return _actions2.default.btc.broadcastTx(txRaw);
      }
    }), new _swap9.EthTokenSwap({
      name: _swap.constants.COINS.noxon,
      address: _appConfig2.default.token.contract,
      decimals: _appConfig2.default.tokens.noxon.decimals,
      abi: [{ "constant": false, "inputs": [{ "name": "_secret", "type": "bytes32" }, { "name": "_ownerAddress", "type": "address" }], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_participantAddress", "type": "address" }], "name": "getSecret", "outputs": [{ "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_ratingContractAddress", "type": "address" }], "name": "setReputationAddress", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "participantSigns", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_ownerAddress", "type": "address" }], "name": "abort", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "swaps", "outputs": [{ "name": "token", "type": "address" }, { "name": "secret", "type": "bytes32" }, { "name": "secretHash", "type": "bytes20" }, { "name": "createdAt", "type": "uint256" }, { "name": "balance", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_secretHash", "type": "bytes20" }, { "name": "_participantAddress", "type": "address" }, { "name": "_value", "type": "uint256" }, { "name": "_token", "type": "address" }], "name": "createSwap", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_ownerAddress", "type": "address" }], "name": "checkSign", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_participantAddress", "type": "address" }], "name": "close", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "ratingContractAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_participantAddress", "type": "address" }], "name": "sign", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_ownerAddress", "type": "address" }], "name": "getBalance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_participantAddress", "type": "address" }], "name": "refund", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [], "name": "Sign", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "createdAt", "type": "uint256" }], "name": "CreateSwap", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Withdraw", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Close", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Refund", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Abort", "type": "event" }],
      tokenAddress: _appConfig2.default.tokens.noxon.address,
      tokenAbi: [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_amount", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "getBurnPrice", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "manager", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "unlockEmission", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "balance", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "emissionlocked", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "acceptOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "lockEmission", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "burnAll", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_newManager", "type": "address" }], "name": "changeManager", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_newOwner", "type": "address" }], "name": "changeOwner", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "emissionPrice", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "addToReserve", "outputs": [{ "name": "", "type": "bool" }], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "burnPrice", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "tokenAddress", "type": "address" }, { "name": "amount", "type": "uint256" }], "name": "transferAnyERC20Token", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "remaining", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "NoxonInit", "outputs": [{ "name": "", "type": "bool" }], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [], "name": "acceptManagership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "buyer", "type": "address" }, { "indexed": false, "name": "ethers", "type": "uint256" }, { "indexed": false, "name": "_emissionedPrice", "type": "uint256" }, { "indexed": false, "name": "amountOfTokens", "type": "uint256" }], "name": "TokenBought", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "buyer", "type": "address" }, { "indexed": false, "name": "ethers", "type": "uint256" }, { "indexed": false, "name": "_burnedPrice", "type": "uint256" }, { "indexed": false, "name": "amountOfTokens", "type": "uint256" }], "name": "TokenBurned", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "etherReserved", "type": "uint256" }], "name": "EtherReserved", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_from", "type": "address" }, { "indexed": true, "name": "_to", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_owner", "type": "address" }, { "indexed": true, "name": "_spender", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "Approval", "type": "event" }],
      fetchBalance: function fetchBalance(address) {
        return _actions2.default.token.fetchBalance(address, _appConfig2.default.tokens.noxon.address, _appConfig2.default.tokens.noxon.decimals);
      }
    }), new _swap9.EthTokenSwap({
      name: _swap.constants.COINS.swap,
      address: _appConfig2.default.token.contract,
      decimals: _appConfig2.default.tokens.swap.decimals,
      abi: [{ "constant": false, "inputs": [{ "name": "_secret", "type": "bytes32" }, { "name": "_ownerAddress", "type": "address" }], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_participantAddress", "type": "address" }], "name": "getSecret", "outputs": [{ "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_ratingContractAddress", "type": "address" }], "name": "setReputationAddress", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "participantSigns", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_ownerAddress", "type": "address" }], "name": "abort", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "swaps", "outputs": [{ "name": "token", "type": "address" }, { "name": "secret", "type": "bytes32" }, { "name": "secretHash", "type": "bytes20" }, { "name": "createdAt", "type": "uint256" }, { "name": "balance", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_secretHash", "type": "bytes20" }, { "name": "_participantAddress", "type": "address" }, { "name": "_value", "type": "uint256" }, { "name": "_token", "type": "address" }], "name": "createSwap", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_ownerAddress", "type": "address" }], "name": "checkSign", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_participantAddress", "type": "address" }], "name": "close", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "ratingContractAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_participantAddress", "type": "address" }], "name": "sign", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_ownerAddress", "type": "address" }], "name": "getBalance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_participantAddress", "type": "address" }], "name": "refund", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [], "name": "Sign", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "createdAt", "type": "uint256" }], "name": "CreateSwap", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Withdraw", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Close", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Refund", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Abort", "type": "event" }],
      tokenAddress: _appConfig2.default.tokens.swap.address,
      tokenAbi: [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_amount", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "getBurnPrice", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "manager", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "unlockEmission", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "balance", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "emissionlocked", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "acceptOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "lockEmission", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "burnAll", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_newManager", "type": "address" }], "name": "changeManager", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_newOwner", "type": "address" }], "name": "changeOwner", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "emissionPrice", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "addToReserve", "outputs": [{ "name": "", "type": "bool" }], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "burnPrice", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "tokenAddress", "type": "address" }, { "name": "amount", "type": "uint256" }], "name": "transferAnyERC20Token", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "remaining", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "NoxonInit", "outputs": [{ "name": "", "type": "bool" }], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [], "name": "acceptManagership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "buyer", "type": "address" }, { "indexed": false, "name": "ethers", "type": "uint256" }, { "indexed": false, "name": "_emissionedPrice", "type": "uint256" }, { "indexed": false, "name": "amountOfTokens", "type": "uint256" }], "name": "TokenBought", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "buyer", "type": "address" }, { "indexed": false, "name": "ethers", "type": "uint256" }, { "indexed": false, "name": "_burnedPrice", "type": "uint256" }, { "indexed": false, "name": "amountOfTokens", "type": "uint256" }], "name": "TokenBurned", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "etherReserved", "type": "uint256" }], "name": "EtherReserved", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_from", "type": "address" }, { "indexed": true, "name": "_to", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_owner", "type": "address" }, { "indexed": true, "name": "_spender", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "Approval", "type": "event" }],
      fetchBalance: function fetchBalance(address) {
        return _actions2.default.token.fetchBalance(address, _appConfig2.default.tokens.swap.address, _appConfig2.default.tokens.swap.decimals);
      }
    })],

    flows: [_swap10.ETH2BTC, _swap10.BTC2ETH, (0, _swap10.ETHTOKEN2BTC)(_swap.constants.COINS.noxon), (0, _swap10.BTC2ETHTOKEN)(_swap.constants.COINS.noxon), (0, _swap10.ETHTOKEN2BTC)(_swap.constants.COINS.swap), (0, _swap10.BTC2ETHTOKEN)(_swap.constants.COINS.swap)]
  });
};

exports.createSwapApp = createSwapApp;

/***/ }),
/* 1133 */,
/* 1134 */,
/* 1135 */,
/* 1136 */,
/* 1137 */,
/* 1138 */,
/* 1139 */,
/* 1140 */,
/* 1141 */,
/* 1142 */,
/* 1143 */,
/* 1144 */,
/* 1145 */,
/* 1146 */,
/* 1147 */,
/* 1148 */,
/* 1149 */,
/* 1150 */,
/* 1151 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./": 189,
	"./SwapAuth": 269,
	"./SwapAuth.js": 269,
	"./btc": 460,
	"./btc.js": 460,
	"./eth": 461,
	"./eth.js": 461,
	"./index": 189,
	"./index.js": 189
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1151;

/***/ }),
/* 1152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(252);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(190);

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = __webpack_require__(108);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _swap = __webpack_require__(20);

var _swap2 = _interopRequireDefault(_swap);

var _ipfsPubsubRoom = __webpack_require__(1153);

var _ipfsPubsubRoom2 = _interopRequireDefault(_ipfsPubsubRoom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwapRoom = function (_ServiceInterface) {
  (0, _inherits3.default)(SwapRoom, _ServiceInterface);
  (0, _createClass3.default)(SwapRoom, null, [{
    key: 'name',
    get: function get() {
      return 'room';
    }
  }]);

  function SwapRoom(config) {
    (0, _classCallCheck3.default)(this, SwapRoom);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SwapRoom.__proto__ || (0, _getPrototypeOf2.default)(SwapRoom)).call(this));

    _this._handleUserOnline = function (peer) {
      if (peer !== _this.peer) {
        _this._events.dispatch('user online', peer);
      }
    };

    _this._handleUserOffline = function (peer) {
      if (peer !== _this.peer) {
        _this._events.dispatch('user offline', peer);
      }
    };

    _this._handleNewMessage = function (message) {
      var from = message.from,
          data = message.data;


      if (from === _this.peer) {
        return;
      }

      var parsedData = void 0;

      try {
        parsedData = JSON.parse(data.toString());
      } catch (err) {
        console.error('parse message data err:', err);
      }

      var _parsedData = parsedData,
          fromAddress = _parsedData.fromAddress,
          messages = _parsedData.messages,
          sign = _parsedData.sign;

      var recover = _this._recoverMessage(messages, sign);

      if (recover !== fromAddress) {
        console.error('Wrong message sign! Message from: ' + fromAddress + ', recover: ' + recover);
        return;
      }

      if (messages && messages.length) {
        messages.forEach(function (_ref) {
          var event = _ref.event,
              data = _ref.data;

          _this._events.dispatch(event, (0, _extends3.default)({
            fromPeer: from
          }, data || {}));
        });
      }
    };

    if (!config || (typeof config === 'undefined' ? 'undefined' : (0, _typeof3.default)(config)) !== 'object') {
      throw new Error('SwapRoomService: "config" of type object required');
    }

    _this._serviceName = 'room';
    _this._config = config;
    _this._events = new _swap.Events();
    _this.peer = null;
    _this.connection = null;
    _this.roomName = null;
    return _this;
  }

  (0, _createClass3.default)(SwapRoom, [{
    key: 'initService',
    value: function initService() {
      var _this2 = this;

      if (!_swap2.default.env.Ipfs) {
        throw new Error('SwapRoomService: Ipfs required');
      }
      if (!_swap2.default.env.IpfsRoom) {
        throw new Error('SwapRoomService: IpfsRoom required');
      }

      var ipfs = new _swap2.default.env.Ipfs(this._config);

      ipfs.once('error', function (err) {
        console.log('IPFS error!', err);
      });

      ipfs.once('ready', function () {
        return ipfs.id(function (err, info) {
          console.info('IPFS ready!');

          if (err) {
            throw err;
          }

          _this2._init({
            peer: info.id,
            ipfsConnection: ipfs
          });
        });
      });
    }
  }, {
    key: '_init',
    value: function _init(_ref2) {
      var peer = _ref2.peer,
          ipfsConnection = _ref2.ipfsConnection;

      this.peer = peer;
      this.roomName = _swap2.default.isMainNet() ? 'swap.online' : 'testnet.swap.online';

      console.log('Using room: ' + this.roomName);

      this.connection = (0, _ipfsPubsubRoom2.default)(ipfsConnection, this.roomName, {
        pollInterval: 5000
      });

      this.connection.on('peer joined', this._handleUserOnline);
      this.connection.on('peer left', this._handleUserOffline);
      this.connection.on('message', this._handleNewMessage);

      this._events.dispatch('ready');
    }
  }, {
    key: 'on',
    value: function on(eventName, handler) {
      this._events.subscribe(eventName, handler);
    }
  }, {
    key: 'off',
    value: function off(eventName, handler) {
      this._events.unsubscribe(eventName, handler);
    }
  }, {
    key: 'once',
    value: function once(eventName, handler) {
      this._events.once(eventName, handler);
    }
  }, {
    key: '_recoverMessage',
    value: function _recoverMessage(message, sign) {
      var hash = _swap2.default.env.web3.utils.soliditySha3((0, _stringify2.default)(message));
      var recover = _swap2.default.env.web3.eth.accounts.recover(hash, sign.signature);

      return recover;
    }
  }, {
    key: '_signMessage',
    value: function _signMessage(message) {
      var hash = _swap2.default.env.web3.utils.soliditySha3((0, _stringify2.default)(message));
      var sign = _swap2.default.env.web3.eth.accounts.sign(hash, _swap2.default.services.auth.accounts.eth.privateKey);

      return sign;
    }
  }, {
    key: 'sendMessage',
    value: function sendMessage() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (args.length === 1) {
        var messages = args[0];

        var sign = this._signMessage(messages);

        this.connection.broadcast((0, _stringify2.default)({
          fromAddress: _swap2.default.services.auth.accounts.eth.address,
          messages: messages,
          sign: sign
        }));
      } else {
        var peer = args[0],
            _messages = args[1];

        var _sign = this._signMessage(_messages);

        this.connection.sendTo(peer, (0, _stringify2.default)({
          fromAddress: _swap2.default.services.auth.accounts.eth.address,
          messages: _messages,
          sign: _sign
        }));
      }
    }
  }]);
  return SwapRoom;
}(_swap.ServiceInterface);

exports.default = SwapRoom;
module.exports = exports['default'];

/***/ }),
/* 1153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _species = __webpack_require__(1154);

var _species2 = _interopRequireDefault(_species);

var _symbol = __webpack_require__(386);

var _symbol2 = _interopRequireDefault(_symbol);

var _stringify = __webpack_require__(166);

var _stringify2 = _interopRequireDefault(_stringify);

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _getOwnPropertySymbols = __webpack_require__(1156);

var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);

var _create = __webpack_require__(390);

var _create2 = _interopRequireDefault(_create);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _keys = __webpack_require__(46);

var _keys2 = _interopRequireDefault(_keys);

var _defineProperty = __webpack_require__(237);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__(195);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : (0, _typeof3.default)(exports)) === 'object' && ( false ? 'undefined' : (0, _typeof3.default)(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : (0, _typeof3.default)(exports)) === 'object') exports["IpfsRoom"] = factory();else root["IpfsRoom"] = factory();
})(typeof self !== 'undefined' ? self : undefined, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/(0, _defineProperty2.default)(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 17);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports) {

      var g;

      // This works in non-strict mode
      g = function () {
        return this;
      }();

      try {
        // This works if eval is allowed (see CSP)
        g = g || Function("return this")() || (1, eval)("this");
      } catch (e) {
        // This works if the window reference is available
        if ((typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === "object") g = window;
      }

      // g can still be undefined, but nothing to do about it...
      // We return undefined, instead of nothing here, so it's
      // easier to handle this case. if(!global) { ...}

      module.exports = g;

      /***/
    },
    /* 1 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      module.exports = function drain(op, done) {
        var read, abort;

        function sink(_read) {
          read = _read;
          if (abort) return sink.abort()
          //this function is much simpler to write if you
          //just use recursion, but by using a while loop
          //we do not blow the stack if the stream happens to be sync.
          ;(function next() {
            var loop = true,
                cbed = false;
            while (loop) {
              cbed = false;
              read(null, function (end, data) {
                cbed = true;
                if (end = end || abort) {
                  loop = false;
                  if (done) done(end === true ? null : end);else if (end && end !== true) throw end;
                } else if (op && false === op(data) || abort) {
                  loop = false;
                  read(abort || true, done || function () {});
                } else if (!loop) {
                  next();
                }
              });
              if (!cbed) {
                loop = false;
                return;
              }
            }
          })();
        }

        sink.abort = function (err, cb) {
          if ('function' == typeof err) cb = err, err = true;
          abort = err || true;
          if (read) return read(abort, cb || function () {});
        };

        return sink;
      };

      /***/
    },
    /* 2 */
    /***/function (module, exports) {

      module.exports = function prop(key) {
        return key && ('string' == typeof key ? function (data) {
          return data[key];
        } : 'object' === (typeof key === 'undefined' ? 'undefined' : (0, _typeof3.default)(key)) && 'function' === typeof key.exec //regexp
        ? function (data) {
          var v = key.exec(data);return v && v[0];
        } : key);
      };

      /***/
    },
    /* 3 */
    /***/function (module, exports) {

      // Copyright Joyent, Inc. and other Node contributors.
      //
      // Permission is hereby granted, free of charge, to any person obtaining a
      // copy of this software and associated documentation files (the
      // "Software"), to deal in the Software without restriction, including
      // without limitation the rights to use, copy, modify, merge, publish,
      // distribute, sublicense, and/or sell copies of the Software, and to permit
      // persons to whom the Software is furnished to do so, subject to the
      // following conditions:
      //
      // The above copyright notice and this permission notice shall be included
      // in all copies or substantial portions of the Software.
      //
      // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
      // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
      // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
      // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
      // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
      // USE OR OTHER DEALINGS IN THE SOFTWARE.

      function EventEmitter() {
        this._events = this._events || {};
        this._maxListeners = this._maxListeners || undefined;
      }
      module.exports = EventEmitter;

      // Backwards-compat with node 0.10.x
      EventEmitter.EventEmitter = EventEmitter;

      EventEmitter.prototype._events = undefined;
      EventEmitter.prototype._maxListeners = undefined;

      // By default EventEmitters will print a warning if more than 10 listeners are
      // added to it. This is a useful default which helps finding memory leaks.
      EventEmitter.defaultMaxListeners = 10;

      // Obviously not all Emitters should be limited to 10. This function allows
      // that to be increased. Set to zero for unlimited.
      EventEmitter.prototype.setMaxListeners = function (n) {
        if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
        this._maxListeners = n;
        return this;
      };

      EventEmitter.prototype.emit = function (type) {
        var er, handler, len, args, i, listeners;

        if (!this._events) this._events = {};

        // If there is no 'error' event listener then throw.
        if (type === 'error') {
          if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
            er = arguments[1];
            if (er instanceof Error) {
              throw er; // Unhandled 'error' event
            } else {
              // At least give some kind of context to the user
              var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
              err.context = er;
              throw err;
            }
          }
        }

        handler = this._events[type];

        if (isUndefined(handler)) return false;

        if (isFunction(handler)) {
          switch (arguments.length) {
            // fast cases
            case 1:
              handler.call(this);
              break;
            case 2:
              handler.call(this, arguments[1]);
              break;
            case 3:
              handler.call(this, arguments[1], arguments[2]);
              break;
            // slower
            default:
              args = Array.prototype.slice.call(arguments, 1);
              handler.apply(this, args);
          }
        } else if (isObject(handler)) {
          args = Array.prototype.slice.call(arguments, 1);
          listeners = handler.slice();
          len = listeners.length;
          for (i = 0; i < len; i++) {
            listeners[i].apply(this, args);
          }
        }

        return true;
      };

      EventEmitter.prototype.addListener = function (type, listener) {
        var m;

        if (!isFunction(listener)) throw TypeError('listener must be a function');

        if (!this._events) this._events = {};

        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);

        if (!this._events[type])
          // Optimize the case of one listener. Don't need the extra array object.
          this._events[type] = listener;else if (isObject(this._events[type]))
          // If we've already got an array, just append.
          this._events[type].push(listener);else
          // Adding the second element, need to change to array.
          this._events[type] = [this._events[type], listener];

        // Check for listener leak
        if (isObject(this._events[type]) && !this._events[type].warned) {
          if (!isUndefined(this._maxListeners)) {
            m = this._maxListeners;
          } else {
            m = EventEmitter.defaultMaxListeners;
          }

          if (m && m > 0 && this._events[type].length > m) {
            this._events[type].warned = true;
            console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
            if (typeof console.trace === 'function') {
              // not supported in IE 10
              console.trace();
            }
          }
        }

        return this;
      };

      EventEmitter.prototype.on = EventEmitter.prototype.addListener;

      EventEmitter.prototype.once = function (type, listener) {
        if (!isFunction(listener)) throw TypeError('listener must be a function');

        var fired = false;

        function g() {
          this.removeListener(type, g);

          if (!fired) {
            fired = true;
            listener.apply(this, arguments);
          }
        }

        g.listener = listener;
        this.on(type, g);

        return this;
      };

      // emits a 'removeListener' event iff the listener was removed
      EventEmitter.prototype.removeListener = function (type, listener) {
        var list, position, length, i;

        if (!isFunction(listener)) throw TypeError('listener must be a function');

        if (!this._events || !this._events[type]) return this;

        list = this._events[type];
        length = list.length;
        position = -1;

        if (list === listener || isFunction(list.listener) && list.listener === listener) {
          delete this._events[type];
          if (this._events.removeListener) this.emit('removeListener', type, listener);
        } else if (isObject(list)) {
          for (i = length; i-- > 0;) {
            if (list[i] === listener || list[i].listener && list[i].listener === listener) {
              position = i;
              break;
            }
          }

          if (position < 0) return this;

          if (list.length === 1) {
            list.length = 0;
            delete this._events[type];
          } else {
            list.splice(position, 1);
          }

          if (this._events.removeListener) this.emit('removeListener', type, listener);
        }

        return this;
      };

      EventEmitter.prototype.removeAllListeners = function (type) {
        var key, listeners;

        if (!this._events) return this;

        // not listening for removeListener, no need to emit
        if (!this._events.removeListener) {
          if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
          return this;
        }

        // emit removeListener for all listeners on all events
        if (arguments.length === 0) {
          for (key in this._events) {
            if (key === 'removeListener') continue;
            this.removeAllListeners(key);
          }
          this.removeAllListeners('removeListener');
          this._events = {};
          return this;
        }

        listeners = this._events[type];

        if (isFunction(listeners)) {
          this.removeListener(type, listeners);
        } else if (listeners) {
          // LIFO order
          while (listeners.length) {
            this.removeListener(type, listeners[listeners.length - 1]);
          }
        }
        delete this._events[type];

        return this;
      };

      EventEmitter.prototype.listeners = function (type) {
        var ret;
        if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
        return ret;
      };

      EventEmitter.prototype.listenerCount = function (type) {
        if (this._events) {
          var evlistener = this._events[type];

          if (isFunction(evlistener)) return 1;else if (evlistener) return evlistener.length;
        }
        return 0;
      };

      EventEmitter.listenerCount = function (emitter, type) {
        return emitter.listenerCount(type);
      };

      function isFunction(arg) {
        return typeof arg === 'function';
      }

      function isNumber(arg) {
        return typeof arg === 'number';
      }

      function isObject(arg) {
        return (typeof arg === 'undefined' ? 'undefined' : (0, _typeof3.default)(arg)) === 'object' && arg !== null;
      }

      function isUndefined(arg) {
        return arg === void 0;
      }

      /***/
    },
    /* 4 */
    /***/function (module, exports, __webpack_require__) {

      /* eslint-disable node/no-deprecated-api */
      var buffer = __webpack_require__(26);
      var Buffer = buffer.Buffer;

      // alternative to using Object.keys for old browsers
      function copyProps(src, dst) {
        for (var key in src) {
          dst[key] = src[key];
        }
      }
      if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
        module.exports = buffer;
      } else {
        // Copy properties from require('buffer')
        copyProps(buffer, exports);
        exports.Buffer = SafeBuffer;
      }

      function SafeBuffer(arg, encodingOrOffset, length) {
        return Buffer(arg, encodingOrOffset, length);
      }

      // Copy static methods from Buffer
      copyProps(Buffer, SafeBuffer);

      SafeBuffer.from = function (arg, encodingOrOffset, length) {
        if (typeof arg === 'number') {
          throw new TypeError('Argument must not be a number');
        }
        return Buffer(arg, encodingOrOffset, length);
      };

      SafeBuffer.alloc = function (size, fill, encoding) {
        if (typeof size !== 'number') {
          throw new TypeError('Argument must be a number');
        }
        var buf = Buffer(size);
        if (fill !== undefined) {
          if (typeof encoding === 'string') {
            buf.fill(fill, encoding);
          } else {
            buf.fill(fill);
          }
        } else {
          buf.fill(0);
        }
        return buf;
      };

      SafeBuffer.allocUnsafe = function (size) {
        if (typeof size !== 'number') {
          throw new TypeError('Argument must be a number');
        }
        return Buffer(size);
      };

      SafeBuffer.allocUnsafeSlow = function (size) {
        if (typeof size !== 'number') {
          throw new TypeError('Argument must be a number');
        }
        return buffer.SlowBuffer(size);
      };

      /***/
    },
    /* 5 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var abortCb = __webpack_require__(12);

      module.exports = function values(array, onAbort) {
        if (!array) return function (abort, cb) {
          if (abort) return abortCb(cb, abort, onAbort);
          return cb(true);
        };
        if (!Array.isArray(array)) array = (0, _keys2.default)(array).map(function (k) {
          return array[k];
        });
        var i = 0;
        return function (abort, cb) {
          if (abort) return abortCb(cb, abort, onAbort);
          if (i >= array.length) cb(true);else cb(null, array[i++]);
        };
      };

      /***/
    },
    /* 6 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var drain = __webpack_require__(1);

      module.exports = function reduce(reducer, acc, cb) {
        if (!cb) cb = acc, acc = null;
        var sink = drain(function (data) {
          acc = reducer(acc, data);
        }, function (err) {
          cb(err, acc);
        });
        if (arguments.length === 2) return function (source) {
          source(null, function (end, data) {
            //if ended immediately, and no initial...
            if (end) return cb(end === true ? null : end);
            acc = data;sink(source);
          });
        };else return sink;
      };

      /***/
    },
    /* 7 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var tester = __webpack_require__(14);

      module.exports = function filter(test) {
        //regexp
        test = tester(test);
        return function (read) {
          return function next(end, cb) {
            var sync,
                loop = true;
            while (loop) {
              loop = false;
              sync = true;
              read(end, function (end, data) {
                if (!end && !test(data)) return sync ? loop = true : next(end, cb);
                cb(end, data);
              });
              sync = false;
            }
          };
        };
      };

      /***/
    },
    /* 8 */
    /***/function (module, exports, __webpack_require__) {

      /* WEBPACK VAR INJECTION */(function (global, module) {
        /**
        * lodash (Custom Build) <https://lodash.com/>
        * Build: `lodash modularize exports="npm" -o ./`
        * Copyright jQuery Foundation and other contributors <https://jquery.org/>
        * Released under MIT license <https://lodash.com/license>
        * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
        * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
        */

        /** Used as the size to enable large array optimizations. */
        var LARGE_ARRAY_SIZE = 200;

        /** Used to stand-in for `undefined` hash values. */
        var HASH_UNDEFINED = '__lodash_hash_undefined__';

        /** Used as references for various `Number` constants. */
        var MAX_SAFE_INTEGER = 9007199254740991;

        /** `Object#toString` result references. */
        var argsTag = '[object Arguments]',
            arrayTag = '[object Array]',
            boolTag = '[object Boolean]',
            dateTag = '[object Date]',
            errorTag = '[object Error]',
            funcTag = '[object Function]',
            genTag = '[object GeneratorFunction]',
            mapTag = '[object Map]',
            numberTag = '[object Number]',
            objectTag = '[object Object]',
            promiseTag = '[object Promise]',
            regexpTag = '[object RegExp]',
            setTag = '[object Set]',
            stringTag = '[object String]',
            symbolTag = '[object Symbol]',
            weakMapTag = '[object WeakMap]';

        var arrayBufferTag = '[object ArrayBuffer]',
            dataViewTag = '[object DataView]',
            float32Tag = '[object Float32Array]',
            float64Tag = '[object Float64Array]',
            int8Tag = '[object Int8Array]',
            int16Tag = '[object Int16Array]',
            int32Tag = '[object Int32Array]',
            uint8Tag = '[object Uint8Array]',
            uint8ClampedTag = '[object Uint8ClampedArray]',
            uint16Tag = '[object Uint16Array]',
            uint32Tag = '[object Uint32Array]';

        /**
         * Used to match `RegExp`
         * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
         */
        var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

        /** Used to match `RegExp` flags from their coerced string values. */
        var reFlags = /\w*$/;

        /** Used to detect host constructors (Safari). */
        var reIsHostCtor = /^\[object .+?Constructor\]$/;

        /** Used to detect unsigned integer values. */
        var reIsUint = /^(?:0|[1-9]\d*)$/;

        /** Used to identify `toStringTag` values supported by `_.clone`. */
        var cloneableTags = {};
        cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
        cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;

        /** Detect free variable `global` from Node.js. */
        var freeGlobal = (typeof global === 'undefined' ? 'undefined' : (0, _typeof3.default)(global)) == 'object' && global && global.Object === Object && global;

        /** Detect free variable `self`. */
        var freeSelf = (typeof self === 'undefined' ? 'undefined' : (0, _typeof3.default)(self)) == 'object' && self && self.Object === Object && self;

        /** Used as a reference to the global object. */
        var root = freeGlobal || freeSelf || Function('return this')();

        /** Detect free variable `exports`. */
        var freeExports = (typeof exports === 'undefined' ? 'undefined' : (0, _typeof3.default)(exports)) == 'object' && exports && !exports.nodeType && exports;

        /** Detect free variable `module`. */
        var freeModule = freeExports && (typeof module === 'undefined' ? 'undefined' : (0, _typeof3.default)(module)) == 'object' && module && !module.nodeType && module;

        /** Detect the popular CommonJS extension `module.exports`. */
        var moduleExports = freeModule && freeModule.exports === freeExports;

        /**
         * Adds the key-value `pair` to `map`.
         *
         * @private
         * @param {Object} map The map to modify.
         * @param {Array} pair The key-value pair to add.
         * @returns {Object} Returns `map`.
         */
        function addMapEntry(map, pair) {
          // Don't return `map.set` because it's not chainable in IE 11.
          map.set(pair[0], pair[1]);
          return map;
        }

        /**
         * Adds `value` to `set`.
         *
         * @private
         * @param {Object} set The set to modify.
         * @param {*} value The value to add.
         * @returns {Object} Returns `set`.
         */
        function addSetEntry(set, value) {
          // Don't return `set.add` because it's not chainable in IE 11.
          set.add(value);
          return set;
        }

        /**
         * A specialized version of `_.forEach` for arrays without support for
         * iteratee shorthands.
         *
         * @private
         * @param {Array} [array] The array to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Array} Returns `array`.
         */
        function arrayEach(array, iteratee) {
          var index = -1,
              length = array ? array.length : 0;

          while (++index < length) {
            if (iteratee(array[index], index, array) === false) {
              break;
            }
          }
          return array;
        }

        /**
         * Appends the elements of `values` to `array`.
         *
         * @private
         * @param {Array} array The array to modify.
         * @param {Array} values The values to append.
         * @returns {Array} Returns `array`.
         */
        function arrayPush(array, values) {
          var index = -1,
              length = values.length,
              offset = array.length;

          while (++index < length) {
            array[offset + index] = values[index];
          }
          return array;
        }

        /**
         * A specialized version of `_.reduce` for arrays without support for
         * iteratee shorthands.
         *
         * @private
         * @param {Array} [array] The array to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @param {*} [accumulator] The initial value.
         * @param {boolean} [initAccum] Specify using the first element of `array` as
         *  the initial value.
         * @returns {*} Returns the accumulated value.
         */
        function arrayReduce(array, iteratee, accumulator, initAccum) {
          var index = -1,
              length = array ? array.length : 0;

          if (initAccum && length) {
            accumulator = array[++index];
          }
          while (++index < length) {
            accumulator = iteratee(accumulator, array[index], index, array);
          }
          return accumulator;
        }

        /**
         * The base implementation of `_.times` without support for iteratee shorthands
         * or max array length checks.
         *
         * @private
         * @param {number} n The number of times to invoke `iteratee`.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Array} Returns the array of results.
         */
        function baseTimes(n, iteratee) {
          var index = -1,
              result = Array(n);

          while (++index < n) {
            result[index] = iteratee(index);
          }
          return result;
        }

        /**
         * Gets the value at `key` of `object`.
         *
         * @private
         * @param {Object} [object] The object to query.
         * @param {string} key The key of the property to get.
         * @returns {*} Returns the property value.
         */
        function getValue(object, key) {
          return object == null ? undefined : object[key];
        }

        /**
         * Checks if `value` is a host object in IE < 9.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
         */
        function isHostObject(value) {
          // Many host objects are `Object` objects that can coerce to strings
          // despite having improperly defined `toString` methods.
          var result = false;
          if (value != null && typeof value.toString != 'function') {
            try {
              result = !!(value + '');
            } catch (e) {}
          }
          return result;
        }

        /**
         * Converts `map` to its key-value pairs.
         *
         * @private
         * @param {Object} map The map to convert.
         * @returns {Array} Returns the key-value pairs.
         */
        function mapToArray(map) {
          var index = -1,
              result = Array(map.size);

          map.forEach(function (value, key) {
            result[++index] = [key, value];
          });
          return result;
        }

        /**
         * Creates a unary function that invokes `func` with its argument transformed.
         *
         * @private
         * @param {Function} func The function to wrap.
         * @param {Function} transform The argument transform.
         * @returns {Function} Returns the new function.
         */
        function overArg(func, transform) {
          return function (arg) {
            return func(transform(arg));
          };
        }

        /**
         * Converts `set` to an array of its values.
         *
         * @private
         * @param {Object} set The set to convert.
         * @returns {Array} Returns the values.
         */
        function setToArray(set) {
          var index = -1,
              result = Array(set.size);

          set.forEach(function (value) {
            result[++index] = value;
          });
          return result;
        }

        /** Used for built-in method references. */
        var arrayProto = Array.prototype,
            funcProto = Function.prototype,
            objectProto = Object.prototype;

        /** Used to detect overreaching core-js shims. */
        var coreJsData = root['__core-js_shared__'];

        /** Used to detect methods masquerading as native. */
        var maskSrcKey = function () {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
          return uid ? 'Symbol(src)_1.' + uid : '';
        }();

        /** Used to resolve the decompiled source of functions. */
        var funcToString = funcProto.toString;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /**
         * Used to resolve the
         * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
         * of values.
         */
        var objectToString = objectProto.toString;

        /** Used to detect if a method is native. */
        var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

        /** Built-in value references. */
        var Buffer = moduleExports ? root.Buffer : undefined,
            _Symbol = root.Symbol,
            Uint8Array = root.Uint8Array,
            getPrototype = overArg(_getPrototypeOf2.default, Object),
            objectCreate = _create2.default,
            propertyIsEnumerable = objectProto.propertyIsEnumerable,
            splice = arrayProto.splice;

        /* Built-in method references for those with the same name as other `lodash` methods. */
        var nativeGetSymbols = _getOwnPropertySymbols2.default,
            nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
            nativeKeys = overArg(_keys2.default, Object);

        /* Built-in method references that are verified to be native. */
        var DataView = getNative(root, 'DataView'),
            Map = getNative(root, 'Map'),
            Promise = getNative(root, 'Promise'),
            Set = getNative(root, 'Set'),
            WeakMap = getNative(root, 'WeakMap'),
            nativeCreate = getNative(Object, 'create');

        /** Used to detect maps, sets, and weakmaps. */
        var dataViewCtorString = toSource(DataView),
            mapCtorString = toSource(Map),
            promiseCtorString = toSource(Promise),
            setCtorString = toSource(Set),
            weakMapCtorString = toSource(WeakMap);

        /** Used to convert symbols to primitives and strings. */
        var symbolProto = _Symbol ? _Symbol.prototype : undefined,
            symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

        /**
         * Creates a hash object.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */
        function Hash(entries) {
          var index = -1,
              length = entries ? entries.length : 0;

          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }

        /**
         * Removes all key-value entries from the hash.
         *
         * @private
         * @name clear
         * @memberOf Hash
         */
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
        }

        /**
         * Removes `key` and its value from the hash.
         *
         * @private
         * @name delete
         * @memberOf Hash
         * @param {Object} hash The hash to modify.
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
         */
        function hashDelete(key) {
          return this.has(key) && delete this.__data__[key];
        }

        /**
         * Gets the hash value for `key`.
         *
         * @private
         * @name get
         * @memberOf Hash
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the entry value.
         */
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result = data[key];
            return result === HASH_UNDEFINED ? undefined : result;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined;
        }

        /**
         * Checks if a hash value for `key` exists.
         *
         * @private
         * @name has
         * @memberOf Hash
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
        }

        /**
         * Sets the hash `key` to `value`.
         *
         * @private
         * @name set
         * @memberOf Hash
         * @param {string} key The key of the value to set.
         * @param {*} value The value to set.
         * @returns {Object} Returns the hash instance.
         */
        function hashSet(key, value) {
          var data = this.__data__;
          data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
          return this;
        }

        // Add methods to `Hash`.
        Hash.prototype.clear = hashClear;
        Hash.prototype['delete'] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;

        /**
         * Creates an list cache object.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */
        function ListCache(entries) {
          var index = -1,
              length = entries ? entries.length : 0;

          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }

        /**
         * Removes all key-value entries from the list cache.
         *
         * @private
         * @name clear
         * @memberOf ListCache
         */
        function listCacheClear() {
          this.__data__ = [];
        }

        /**
         * Removes `key` and its value from the list cache.
         *
         * @private
         * @name delete
         * @memberOf ListCache
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
         */
        function listCacheDelete(key) {
          var data = this.__data__,
              index = assocIndexOf(data, key);

          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          return true;
        }

        /**
         * Gets the list cache value for `key`.
         *
         * @private
         * @name get
         * @memberOf ListCache
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the entry value.
         */
        function listCacheGet(key) {
          var data = this.__data__,
              index = assocIndexOf(data, key);

          return index < 0 ? undefined : data[index][1];
        }

        /**
         * Checks if a list cache value for `key` exists.
         *
         * @private
         * @name has
         * @memberOf ListCache
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }

        /**
         * Sets the list cache `key` to `value`.
         *
         * @private
         * @name set
         * @memberOf ListCache
         * @param {string} key The key of the value to set.
         * @param {*} value The value to set.
         * @returns {Object} Returns the list cache instance.
         */
        function listCacheSet(key, value) {
          var data = this.__data__,
              index = assocIndexOf(data, key);

          if (index < 0) {
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }

        // Add methods to `ListCache`.
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype['delete'] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;

        /**
         * Creates a map cache object to store key-value pairs.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */
        function MapCache(entries) {
          var index = -1,
              length = entries ? entries.length : 0;

          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }

        /**
         * Removes all key-value entries from the map.
         *
         * @private
         * @name clear
         * @memberOf MapCache
         */
        function mapCacheClear() {
          this.__data__ = {
            'hash': new Hash(),
            'map': new (Map || ListCache)(),
            'string': new Hash()
          };
        }

        /**
         * Removes `key` and its value from the map.
         *
         * @private
         * @name delete
         * @memberOf MapCache
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
         */
        function mapCacheDelete(key) {
          return getMapData(this, key)['delete'](key);
        }

        /**
         * Gets the map value for `key`.
         *
         * @private
         * @name get
         * @memberOf MapCache
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the entry value.
         */
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }

        /**
         * Checks if a map value for `key` exists.
         *
         * @private
         * @name has
         * @memberOf MapCache
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }

        /**
         * Sets the map `key` to `value`.
         *
         * @private
         * @name set
         * @memberOf MapCache
         * @param {string} key The key of the value to set.
         * @param {*} value The value to set.
         * @returns {Object} Returns the map cache instance.
         */
        function mapCacheSet(key, value) {
          getMapData(this, key).set(key, value);
          return this;
        }

        // Add methods to `MapCache`.
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype['delete'] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;

        /**
         * Creates a stack cache object to store key-value pairs.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */
        function Stack(entries) {
          this.__data__ = new ListCache(entries);
        }

        /**
         * Removes all key-value entries from the stack.
         *
         * @private
         * @name clear
         * @memberOf Stack
         */
        function stackClear() {
          this.__data__ = new ListCache();
        }

        /**
         * Removes `key` and its value from the stack.
         *
         * @private
         * @name delete
         * @memberOf Stack
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
         */
        function stackDelete(key) {
          return this.__data__['delete'](key);
        }

        /**
         * Gets the stack value for `key`.
         *
         * @private
         * @name get
         * @memberOf Stack
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the entry value.
         */
        function stackGet(key) {
          return this.__data__.get(key);
        }

        /**
         * Checks if a stack value for `key` exists.
         *
         * @private
         * @name has
         * @memberOf Stack
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */
        function stackHas(key) {
          return this.__data__.has(key);
        }

        /**
         * Sets the stack `key` to `value`.
         *
         * @private
         * @name set
         * @memberOf Stack
         * @param {string} key The key of the value to set.
         * @param {*} value The value to set.
         * @returns {Object} Returns the stack cache instance.
         */
        function stackSet(key, value) {
          var cache = this.__data__;
          if (cache instanceof ListCache) {
            var pairs = cache.__data__;
            if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              return this;
            }
            cache = this.__data__ = new MapCache(pairs);
          }
          cache.set(key, value);
          return this;
        }

        // Add methods to `Stack`.
        Stack.prototype.clear = stackClear;
        Stack.prototype['delete'] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;

        /**
         * Creates an array of the enumerable property names of the array-like `value`.
         *
         * @private
         * @param {*} value The value to query.
         * @param {boolean} inherited Specify returning inherited property names.
         * @returns {Array} Returns the array of property names.
         */
        function arrayLikeKeys(value, inherited) {
          // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
          // Safari 9 makes `arguments.length` enumerable in strict mode.
          var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];

          var length = result.length,
              skipIndexes = !!length;

          for (var key in value) {
            if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
              result.push(key);
            }
          }
          return result;
        }

        /**
         * Assigns `value` to `key` of `object` if the existing value is not equivalent
         * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
         * for equality comparisons.
         *
         * @private
         * @param {Object} object The object to modify.
         * @param {string} key The key of the property to assign.
         * @param {*} value The value to assign.
         */
        function assignValue(object, key, value) {
          var objValue = object[key];
          if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
            object[key] = value;
          }
        }

        /**
         * Gets the index at which the `key` is found in `array` of key-value pairs.
         *
         * @private
         * @param {Array} array The array to inspect.
         * @param {*} key The key to search for.
         * @returns {number} Returns the index of the matched value, else `-1`.
         */
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }

        /**
         * The base implementation of `_.assign` without support for multiple sources
         * or `customizer` functions.
         *
         * @private
         * @param {Object} object The destination object.
         * @param {Object} source The source object.
         * @returns {Object} Returns `object`.
         */
        function baseAssign(object, source) {
          return object && copyObject(source, keys(source), object);
        }

        /**
         * The base implementation of `_.clone` and `_.cloneDeep` which tracks
         * traversed objects.
         *
         * @private
         * @param {*} value The value to clone.
         * @param {boolean} [isDeep] Specify a deep clone.
         * @param {boolean} [isFull] Specify a clone including symbols.
         * @param {Function} [customizer] The function to customize cloning.
         * @param {string} [key] The key of `value`.
         * @param {Object} [object] The parent object of `value`.
         * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
         * @returns {*} Returns the cloned value.
         */
        function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
          var result;
          if (customizer) {
            result = object ? customizer(value, key, object, stack) : customizer(value);
          }
          if (result !== undefined) {
            return result;
          }
          if (!isObject(value)) {
            return value;
          }
          var isArr = isArray(value);
          if (isArr) {
            result = initCloneArray(value);
            if (!isDeep) {
              return copyArray(value, result);
            }
          } else {
            var tag = getTag(value),
                isFunc = tag == funcTag || tag == genTag;

            if (isBuffer(value)) {
              return cloneBuffer(value, isDeep);
            }
            if (tag == objectTag || tag == argsTag || isFunc && !object) {
              if (isHostObject(value)) {
                return object ? value : {};
              }
              result = initCloneObject(isFunc ? {} : value);
              if (!isDeep) {
                return copySymbols(value, baseAssign(result, value));
              }
            } else {
              if (!cloneableTags[tag]) {
                return object ? value : {};
              }
              result = initCloneByTag(value, tag, baseClone, isDeep);
            }
          }
          // Check for circular references and return its corresponding clone.
          stack || (stack = new Stack());
          var stacked = stack.get(value);
          if (stacked) {
            return stacked;
          }
          stack.set(value, result);

          if (!isArr) {
            var props = isFull ? getAllKeys(value) : keys(value);
          }
          arrayEach(props || value, function (subValue, key) {
            if (props) {
              key = subValue;
              subValue = value[key];
            }
            // Recursively populate clone (susceptible to call stack limits).
            assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
          });
          return result;
        }

        /**
         * The base implementation of `_.create` without support for assigning
         * properties to the created object.
         *
         * @private
         * @param {Object} prototype The object to inherit from.
         * @returns {Object} Returns the new object.
         */
        function baseCreate(proto) {
          return isObject(proto) ? objectCreate(proto) : {};
        }

        /**
         * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
         * `keysFunc` and `symbolsFunc` to get the enumerable property names and
         * symbols of `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {Function} keysFunc The function to get the keys of `object`.
         * @param {Function} symbolsFunc The function to get the symbols of `object`.
         * @returns {Array} Returns the array of property names and symbols.
         */
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
          var result = keysFunc(object);
          return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
        }

        /**
         * The base implementation of `getTag`.
         *
         * @private
         * @param {*} value The value to query.
         * @returns {string} Returns the `toStringTag`.
         */
        function baseGetTag(value) {
          return objectToString.call(value);
        }

        /**
         * The base implementation of `_.isNative` without bad shim checks.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a native function,
         *  else `false`.
         */
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }

        /**
         * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
         *
         * @private
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property names.
         */
        function baseKeys(object) {
          if (!isPrototype(object)) {
            return nativeKeys(object);
          }
          var result = [];
          for (var key in Object(object)) {
            if (hasOwnProperty.call(object, key) && key != 'constructor') {
              result.push(key);
            }
          }
          return result;
        }

        /**
         * Creates a clone of  `buffer`.
         *
         * @private
         * @param {Buffer} buffer The buffer to clone.
         * @param {boolean} [isDeep] Specify a deep clone.
         * @returns {Buffer} Returns the cloned buffer.
         */
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var result = new buffer.constructor(buffer.length);
          buffer.copy(result);
          return result;
        }

        /**
         * Creates a clone of `arrayBuffer`.
         *
         * @private
         * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
         * @returns {ArrayBuffer} Returns the cloned array buffer.
         */
        function cloneArrayBuffer(arrayBuffer) {
          var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array(result).set(new Uint8Array(arrayBuffer));
          return result;
        }

        /**
         * Creates a clone of `dataView`.
         *
         * @private
         * @param {Object} dataView The data view to clone.
         * @param {boolean} [isDeep] Specify a deep clone.
         * @returns {Object} Returns the cloned data view.
         */
        function cloneDataView(dataView, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
          return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }

        /**
         * Creates a clone of `map`.
         *
         * @private
         * @param {Object} map The map to clone.
         * @param {Function} cloneFunc The function to clone values.
         * @param {boolean} [isDeep] Specify a deep clone.
         * @returns {Object} Returns the cloned map.
         */
        function cloneMap(map, isDeep, cloneFunc) {
          var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
          return arrayReduce(array, addMapEntry, new map.constructor());
        }

        /**
         * Creates a clone of `regexp`.
         *
         * @private
         * @param {Object} regexp The regexp to clone.
         * @returns {Object} Returns the cloned regexp.
         */
        function cloneRegExp(regexp) {
          var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
          result.lastIndex = regexp.lastIndex;
          return result;
        }

        /**
         * Creates a clone of `set`.
         *
         * @private
         * @param {Object} set The set to clone.
         * @param {Function} cloneFunc The function to clone values.
         * @param {boolean} [isDeep] Specify a deep clone.
         * @returns {Object} Returns the cloned set.
         */
        function cloneSet(set, isDeep, cloneFunc) {
          var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
          return arrayReduce(array, addSetEntry, new set.constructor());
        }

        /**
         * Creates a clone of the `symbol` object.
         *
         * @private
         * @param {Object} symbol The symbol object to clone.
         * @returns {Object} Returns the cloned symbol object.
         */
        function cloneSymbol(symbol) {
          return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
        }

        /**
         * Creates a clone of `typedArray`.
         *
         * @private
         * @param {Object} typedArray The typed array to clone.
         * @param {boolean} [isDeep] Specify a deep clone.
         * @returns {Object} Returns the cloned typed array.
         */
        function cloneTypedArray(typedArray, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
          return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }

        /**
         * Copies the values of `source` to `array`.
         *
         * @private
         * @param {Array} source The array to copy values from.
         * @param {Array} [array=[]] The array to copy values to.
         * @returns {Array} Returns `array`.
         */
        function copyArray(source, array) {
          var index = -1,
              length = source.length;

          array || (array = Array(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }

        /**
         * Copies properties of `source` to `object`.
         *
         * @private
         * @param {Object} source The object to copy properties from.
         * @param {Array} props The property identifiers to copy.
         * @param {Object} [object={}] The object to copy properties to.
         * @param {Function} [customizer] The function to customize copied values.
         * @returns {Object} Returns `object`.
         */
        function copyObject(source, props, object, customizer) {
          object || (object = {});

          var index = -1,
              length = props.length;

          while (++index < length) {
            var key = props[index];

            var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

            assignValue(object, key, newValue === undefined ? source[key] : newValue);
          }
          return object;
        }

        /**
         * Copies own symbol properties of `source` to `object`.
         *
         * @private
         * @param {Object} source The object to copy symbols from.
         * @param {Object} [object={}] The object to copy symbols to.
         * @returns {Object} Returns `object`.
         */
        function copySymbols(source, object) {
          return copyObject(source, getSymbols(source), object);
        }

        /**
         * Creates an array of own enumerable property names and symbols of `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property names and symbols.
         */
        function getAllKeys(object) {
          return baseGetAllKeys(object, keys, getSymbols);
        }

        /**
         * Gets the data for `map`.
         *
         * @private
         * @param {Object} map The map to query.
         * @param {string} key The reference key.
         * @returns {*} Returns the map data.
         */
        function getMapData(map, key) {
          var data = map.__data__;
          return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
        }

        /**
         * Gets the native function at `key` of `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {string} key The key of the method to get.
         * @returns {*} Returns the function if it's native, else `undefined`.
         */
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : undefined;
        }

        /**
         * Creates an array of the own enumerable symbol properties of `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of symbols.
         */
        var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

        /**
         * Gets the `toStringTag` of `value`.
         *
         * @private
         * @param {*} value The value to query.
         * @returns {string} Returns the `toStringTag`.
         */
        var getTag = baseGetTag;

        // Fallback for data views, maps, sets, and weak maps in IE 11,
        // for data views in Edge < 14, and promises in Node.js.
        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
          getTag = function getTag(value) {
            var result = objectToString.call(value),
                Ctor = result == objectTag ? value.constructor : undefined,
                ctorString = Ctor ? toSource(Ctor) : undefined;

            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result;
          };
        }

        /**
         * Initializes an array clone.
         *
         * @private
         * @param {Array} array The array to clone.
         * @returns {Array} Returns the initialized clone.
         */
        function initCloneArray(array) {
          var length = array.length,
              result = array.constructor(length);

          // Add properties assigned by `RegExp#exec`.
          if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
            result.index = array.index;
            result.input = array.input;
          }
          return result;
        }

        /**
         * Initializes an object clone.
         *
         * @private
         * @param {Object} object The object to clone.
         * @returns {Object} Returns the initialized clone.
         */
        function initCloneObject(object) {
          return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
        }

        /**
         * Initializes an object clone based on its `toStringTag`.
         *
         * **Note:** This function only supports cloning values with tags of
         * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
         *
         * @private
         * @param {Object} object The object to clone.
         * @param {string} tag The `toStringTag` of the object to clone.
         * @param {Function} cloneFunc The function to clone values.
         * @param {boolean} [isDeep] Specify a deep clone.
         * @returns {Object} Returns the initialized clone.
         */
        function initCloneByTag(object, tag, cloneFunc, isDeep) {
          var Ctor = object.constructor;
          switch (tag) {
            case arrayBufferTag:
              return cloneArrayBuffer(object);

            case boolTag:
            case dateTag:
              return new Ctor(+object);

            case dataViewTag:
              return cloneDataView(object, isDeep);

            case float32Tag:case float64Tag:
            case int8Tag:case int16Tag:case int32Tag:
            case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:
              return cloneTypedArray(object, isDeep);

            case mapTag:
              return cloneMap(object, isDeep, cloneFunc);

            case numberTag:
            case stringTag:
              return new Ctor(object);

            case regexpTag:
              return cloneRegExp(object);

            case setTag:
              return cloneSet(object, isDeep, cloneFunc);

            case symbolTag:
              return cloneSymbol(object);
          }
        }

        /**
         * Checks if `value` is a valid array-like index.
         *
         * @private
         * @param {*} value The value to check.
         * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
         * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
         */
        function isIndex(value, length) {
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
        }

        /**
         * Checks if `value` is suitable for use as unique object key.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
         */
        function isKeyable(value) {
          var type = typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value);
          return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
        }

        /**
         * Checks if `func` has its source masked.
         *
         * @private
         * @param {Function} func The function to check.
         * @returns {boolean} Returns `true` if `func` is masked, else `false`.
         */
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }

        /**
         * Checks if `value` is likely a prototype object.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
         */
        function isPrototype(value) {
          var Ctor = value && value.constructor,
              proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

          return value === proto;
        }

        /**
         * Converts `func` to its source code.
         *
         * @private
         * @param {Function} func The function to process.
         * @returns {string} Returns the source code.
         */
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {}
            try {
              return func + '';
            } catch (e) {}
          }
          return '';
        }

        /**
         * This method is like `_.clone` except that it recursively clones `value`.
         *
         * @static
         * @memberOf _
         * @since 1.0.0
         * @category Lang
         * @param {*} value The value to recursively clone.
         * @returns {*} Returns the deep cloned value.
         * @see _.clone
         * @example
         *
         * var objects = [{ 'a': 1 }, { 'b': 2 }];
         *
         * var deep = _.cloneDeep(objects);
         * console.log(deep[0] === objects[0]);
         * // => false
         */
        function cloneDeep(value) {
          return baseClone(value, true, true);
        }

        /**
         * Performs a
         * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
         * comparison between two values to determine if they are equivalent.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
         * @example
         *
         * var object = { 'a': 1 };
         * var other = { 'a': 1 };
         *
         * _.eq(object, object);
         * // => true
         *
         * _.eq(object, other);
         * // => false
         *
         * _.eq('a', 'a');
         * // => true
         *
         * _.eq('a', Object('a'));
         * // => false
         *
         * _.eq(NaN, NaN);
         * // => true
         */
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }

        /**
         * Checks if `value` is likely an `arguments` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an `arguments` object,
         *  else `false`.
         * @example
         *
         * _.isArguments(function() { return arguments; }());
         * // => true
         *
         * _.isArguments([1, 2, 3]);
         * // => false
         */
        function isArguments(value) {
          // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
          return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
        }

        /**
         * Checks if `value` is classified as an `Array` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an array, else `false`.
         * @example
         *
         * _.isArray([1, 2, 3]);
         * // => true
         *
         * _.isArray(document.body.children);
         * // => false
         *
         * _.isArray('abc');
         * // => false
         *
         * _.isArray(_.noop);
         * // => false
         */
        var isArray = Array.isArray;

        /**
         * Checks if `value` is array-like. A value is considered array-like if it's
         * not a function and has a `value.length` that's an integer greater than or
         * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
         * @example
         *
         * _.isArrayLike([1, 2, 3]);
         * // => true
         *
         * _.isArrayLike(document.body.children);
         * // => true
         *
         * _.isArrayLike('abc');
         * // => true
         *
         * _.isArrayLike(_.noop);
         * // => false
         */
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction(value);
        }

        /**
         * This method is like `_.isArrayLike` except that it also checks if `value`
         * is an object.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an array-like object,
         *  else `false`.
         * @example
         *
         * _.isArrayLikeObject([1, 2, 3]);
         * // => true
         *
         * _.isArrayLikeObject(document.body.children);
         * // => true
         *
         * _.isArrayLikeObject('abc');
         * // => false
         *
         * _.isArrayLikeObject(_.noop);
         * // => false
         */
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }

        /**
         * Checks if `value` is a buffer.
         *
         * @static
         * @memberOf _
         * @since 4.3.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
         * @example
         *
         * _.isBuffer(new Buffer(2));
         * // => true
         *
         * _.isBuffer(new Uint8Array(2));
         * // => false
         */
        var isBuffer = nativeIsBuffer || stubFalse;

        /**
         * Checks if `value` is classified as a `Function` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a function, else `false`.
         * @example
         *
         * _.isFunction(_);
         * // => true
         *
         * _.isFunction(/abc/);
         * // => false
         */
        function isFunction(value) {
          // The use of `Object#toString` avoids issues with the `typeof` operator
          // in Safari 8-9 which returns 'object' for typed array and other constructors.
          var tag = isObject(value) ? objectToString.call(value) : '';
          return tag == funcTag || tag == genTag;
        }

        /**
         * Checks if `value` is a valid array-like length.
         *
         * **Note:** This method is loosely based on
         * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
         * @example
         *
         * _.isLength(3);
         * // => true
         *
         * _.isLength(Number.MIN_VALUE);
         * // => false
         *
         * _.isLength(Infinity);
         * // => false
         *
         * _.isLength('3');
         * // => false
         */
        function isLength(value) {
          return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }

        /**
         * Checks if `value` is the
         * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
         * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an object, else `false`.
         * @example
         *
         * _.isObject({});
         * // => true
         *
         * _.isObject([1, 2, 3]);
         * // => true
         *
         * _.isObject(_.noop);
         * // => true
         *
         * _.isObject(null);
         * // => false
         */
        function isObject(value) {
          var type = typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value);
          return !!value && (type == 'object' || type == 'function');
        }

        /**
         * Checks if `value` is object-like. A value is object-like if it's not `null`
         * and has a `typeof` result of "object".
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
         * @example
         *
         * _.isObjectLike({});
         * // => true
         *
         * _.isObjectLike([1, 2, 3]);
         * // => true
         *
         * _.isObjectLike(_.noop);
         * // => false
         *
         * _.isObjectLike(null);
         * // => false
         */
        function isObjectLike(value) {
          return !!value && (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) == 'object';
        }

        /**
         * Creates an array of the own enumerable property names of `object`.
         *
         * **Note:** Non-object values are coerced to objects. See the
         * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
         * for more details.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Object
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property names.
         * @example
         *
         * function Foo() {
         *   this.a = 1;
         *   this.b = 2;
         * }
         *
         * Foo.prototype.c = 3;
         *
         * _.keys(new Foo);
         * // => ['a', 'b'] (iteration order is not guaranteed)
         *
         * _.keys('hi');
         * // => ['0', '1']
         */
        function keys(object) {
          return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }

        /**
         * This method returns a new empty array.
         *
         * @static
         * @memberOf _
         * @since 4.13.0
         * @category Util
         * @returns {Array} Returns the new empty array.
         * @example
         *
         * var arrays = _.times(2, _.stubArray);
         *
         * console.log(arrays);
         * // => [[], []]
         *
         * console.log(arrays[0] === arrays[1]);
         * // => false
         */
        function stubArray() {
          return [];
        }

        /**
         * This method returns `false`.
         *
         * @static
         * @memberOf _
         * @since 4.13.0
         * @category Util
         * @returns {boolean} Returns `false`.
         * @example
         *
         * _.times(2, _.stubFalse);
         * // => [false, false]
         */
        function stubFalse() {
          return false;
        }

        module.exports = cloneDeep;

        /* WEBPACK VAR INJECTION */
      }).call(exports, __webpack_require__(0), __webpack_require__(19)(module));

      /***/
    },
    /* 9 */
    /***/function (module, exports) {

      // shim for using process in browser
      var process = module.exports = {};

      // cached from whatever global is present so that test runners that stub it
      // don't break things.  But we need to wrap it in a try catch in case it is
      // wrapped in strict mode code which doesn't define any globals.  It's inside a
      // function because try/catches deoptimize in certain engines.

      var cachedSetTimeout;
      var cachedClearTimeout;

      function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
      }
      function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
      }
      (function () {
        try {
          if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }
        try {
          if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();
      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }
      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
          }
        }
      }
      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;

      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }
        draining = false;
        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }
        if (queue.length) {
          drainQueue();
        }
      }

      function drainQueue() {
        if (draining) {
          return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while (len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }
          queueIndex = -1;
          len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }

      process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      };

      // v8 likes predictible objects
      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }
      Item.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      process.title = 'browser';
      process.browser = true;
      process.env = {};
      process.argv = [];
      process.version = ''; // empty string to avoid regexp issues
      process.versions = {};

      function noop() {}

      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.prependListener = noop;
      process.prependOnceListener = noop;

      process.listeners = function (name) {
        return [];
      };

      process.binding = function (name) {
        throw new Error('process.binding is not supported');
      };

      process.cwd = function () {
        return '/';
      };
      process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
      };
      process.umask = function () {
        return 0;
      };

      /***/
    },
    /* 10 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      module.exports = 'ipfs-pubsub-room/v2';

      /***/
    },
    /* 11 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var sources = __webpack_require__(31);
      var sinks = __webpack_require__(37);
      var throughs = __webpack_require__(43);

      exports = module.exports = __webpack_require__(51);

      exports.pull = exports;

      for (var k in sources) {
        exports[k] = sources[k];
      }for (var k in throughs) {
        exports[k] = throughs[k];
      }for (var k in sinks) {
        exports[k] = sinks[k];
      } /***/
    },
    /* 12 */
    /***/function (module, exports) {

      module.exports = function abortCb(cb, abort, onAbort) {
        cb(abort);
        onAbort && onAbort(abort === true ? null : abort);
        return;
      };

      /***/
    },
    /* 13 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var abortCb = __webpack_require__(12);

      module.exports = function once(value, onAbort) {
        return function (abort, cb) {
          if (abort) return abortCb(cb, abort, onAbort);
          if (value != null) {
            var _value = value;value = null;
            cb(null, _value);
          } else cb(true);
        };
      };

      /***/
    },
    /* 14 */
    /***/function (module, exports, __webpack_require__) {

      var prop = __webpack_require__(2);

      function id(e) {
        return e;
      }

      module.exports = function tester(test) {
        return 'object' === (typeof test === 'undefined' ? 'undefined' : (0, _typeof3.default)(test)) && 'function' === typeof test.test //regexp
        ? function (data) {
          return test.test(data);
        } : prop(test) || id;
      };

      /***/
    },
    /* 15 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      function id(e) {
        return e;
      }
      var prop = __webpack_require__(2);
      var filter = __webpack_require__(7);

      //drop items you have already seen.
      module.exports = function unique(field, invert) {
        field = prop(field) || id;
        var seen = {};
        return filter(function (data) {
          var key = field(data);
          if (seen[key]) return !!invert; //false, by default
          else seen[key] = true;
          return !invert; //true by default
        });
      };

      /***/
    },
    /* 16 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var Buffer = __webpack_require__(4).Buffer;

      module.exports = function (_message) {
        var message = _message;
        if (!Buffer.isBuffer(message)) {
          message = Buffer.from(message);
        }
        return message;
      };

      /***/
    },
    /* 17 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var diff = __webpack_require__(18);
      var EventEmitter = __webpack_require__(3);
      var timers = __webpack_require__(24);
      var clone = __webpack_require__(8);
      var Buffer = __webpack_require__(4).Buffer;

      var PROTOCOL = __webpack_require__(10);
      var Connection = __webpack_require__(30);
      var encoding = __webpack_require__(16);
      var directConnection = __webpack_require__(53);

      var DEFAULT_OPTIONS = {
        pollInterval: 1000
      };

      module.exports = function (ipfs, topic, options) {
        return new PubSubRoom(ipfs, topic, options);
      };

      var PubSubRoom = function (_EventEmitter) {
        (0, _inherits3.default)(PubSubRoom, _EventEmitter);

        function PubSubRoom(ipfs, topic, options) {
          (0, _classCallCheck3.default)(this, PubSubRoom);

          var _this = (0, _possibleConstructorReturn3.default)(this, (PubSubRoom.__proto__ || (0, _getPrototypeOf2.default)(PubSubRoom)).call(this));

          _this._ipfs = ipfs;
          _this._topic = topic;
          _this._options = (0, _assign2.default)({}, clone(DEFAULT_OPTIONS), clone(options));
          _this._peers = [];
          _this._connections = {};

          _this._handleDirectMessage = _this._handleDirectMessage.bind(_this);

          if (!_this._ipfs.pubsub) {
            throw new Error('This IPFS node does not have pubsub.');
          }

          if (_this._ipfs.isOnline()) {
            _this._start();
          } else {
            _this._ipfs.on('ready', _this._start.bind(_this));
          }

          _this._ipfs.on('stop', _this.leave.bind(_this));
          return _this;
        }

        (0, _createClass3.default)(PubSubRoom, [{
          key: 'getPeers',
          value: function getPeers() {
            return this._peers.slice(0);
          }
        }, {
          key: 'hasPeer',
          value: function hasPeer(peer) {
            return this._peers.indexOf(peer) >= 0;
          }
        }, {
          key: 'leave',
          value: function leave() {
            var _this2 = this;

            timers.clearInterval(this._interval);
            (0, _keys2.default)(this._connections).forEach(function (peer) {
              _this2._connections[peer].stop();
            });
            directConnection.emitter.removeListener(this._topic, this._handleDirectMessage);
            this.emit('stop');
          }
        }, {
          key: 'broadcast',
          value: function broadcast(_message) {
            var _this3 = this;

            var message = encoding(_message);
            this._ipfs.pubsub.publish(this._topic, message, function (err) {
              if (err) {
                _this3.emit('error', err);
              }
            });
          }
        }, {
          key: 'sendTo',
          value: function sendTo(peer, message) {
            var _this4 = this;

            var conn = this._connections[peer];
            if (!conn) {
              conn = new Connection(peer, this._ipfs, this);
              conn.on('error', function (err) {
                return _this4.emit('error', err);
              });
              this._connections[peer] = conn;

              conn.once('disconnect', function () {
                delete _this4._connections[peer];
                _this4._peers = _this4._peers.filter(function (p) {
                  return p !== peer;
                });
                _this4.emit('peer left', peer);
              });
            }

            // We should use the same sequence number generation as js-libp2p-floosub does:
            // const seqno = Buffer.from(utils.randomSeqno())

            // Until we figure out a good way to bring in the js-libp2p-floosub's randomSeqno
            // generator, let's use 0 as the sequence number for all private messages
            // const seqno = Buffer.from([0])
            var seqno = Buffer.from([0]);

            var msg = {
              to: peer,
              from: this._ipfs._peerInfo.id.toB58String(),
              data: Buffer.from(message).toString('hex'),
              seqno: seqno.toString('hex'),
              topicIDs: [this._topic],
              topicCIDs: [this._topic]
            };

            conn.push(Buffer.from((0, _stringify2.default)(msg)));
          }
        }, {
          key: '_start',
          value: function _start() {
            var _this5 = this;

            this._interval = timers.setInterval(this._pollPeers.bind(this), this._options.pollInterval);

            var listener = this._onMessage.bind(this);
            this._ipfs.pubsub.subscribe(this._topic, listener, function (err) {
              if (err) {
                _this5.emit('error', err);
              } else {
                _this5.emit('subscribed', _this5._topic);
              }
            });

            this.once('stop', function () {
              _this5._ipfs.pubsub.unsubscribe(_this5._topic, listener);
            });

            this._ipfs._libp2pNode.handle(PROTOCOL, directConnection.handler);

            directConnection.emitter.on(this._topic, this._handleDirectMessage);
          }
        }, {
          key: '_pollPeers',
          value: function _pollPeers() {
            var _this6 = this;

            this._ipfs.pubsub.peers(this._topic, function (err, _newPeers) {
              if (err) {
                _this6.emit('error', err);
                return; // early
              }

              var newPeers = _newPeers.sort();

              if (_this6._emitChanges(newPeers)) {
                _this6._peers = newPeers;
              }
            });
          }
        }, {
          key: '_emitChanges',
          value: function _emitChanges(newPeers) {
            var _this7 = this;

            var differences = diff(this._peers, newPeers);

            differences.added.forEach(function (addedPeer) {
              return _this7.emit('peer joined', addedPeer);
            });
            differences.removed.forEach(function (removedPeer) {
              return _this7.emit('peer left', removedPeer);
            });

            return differences.added.length > 0 || differences.removed.length > 0;
          }
        }, {
          key: '_onMessage',
          value: function _onMessage(message) {
            this.emit('message', message);
          }
        }, {
          key: '_handleDirectMessage',
          value: function _handleDirectMessage(message) {
            if (message.to === this._ipfs._peerInfo.id.toB58String()) {
              var m = (0, _assign2.default)({}, message);
              delete m.to;
              this.emit('message', m);
            }
          }
        }]);
        return PubSubRoom;
      }(EventEmitter);

      /***/
    },
    /* 18 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var cloneDeep = __webpack_require__(8);
      var debug = __webpack_require__(20)('hyperdiff');
      var pullAt = __webpack_require__(23);

      var isPresent = function isPresent(itemIndex) {
        return itemIndex !== -1;
      };

      function GET_INITIAL_STATE() {
        return { common: [], removed: [] };
      }

      function hasItemWithProps(collection, item, props) {
        return props.every(function (prop) {
          return item[prop] === collection[prop];
        });
      }

      function indexOf(collection, item, props) {
        return collection.indexOf(item);
      }

      function findIndexWithProps(collection, item, props) {
        return collection.findIndex(function (origItem) {
          return hasItemWithProps(origItem, item, props);
        });
      }

      function determinateCollections(orig, dist) {
        return { first: orig, second: cloneDeep(dist) };
      }

      function determinateFindIndex(props) {
        return props ? findIndexWithProps : indexOf;
      }

      function hyperdiff(orig, dist, props) {
        var _determinateCollectio = determinateCollections(orig, dist),
            first = _determinateCollectio.first,
            second = _determinateCollectio.second;

        var findIndex = determinateFindIndex(props);
        debug('preconditions first=%j second=%j findIndex=%s', first, second, findIndex.name);

        var results = first.reduce(function (acc, item, index) {
          var itemIndex = findIndex(second, item, props);
          var destination = isPresent(itemIndex) ? 'common' : 'removed';
          acc[destination].push(item);
          pullAt(second, itemIndex);
          debug('index=%s value=%s collection=%s', index, item, destination);
          return acc;
        }, GET_INITIAL_STATE());

        results.added = second;
        debug('added=%j removed=%j common%j', results.added, results.removed, results.common);
        return results;
      }

      module.exports = hyperdiff;

      /***/
    },
    /* 19 */
    /***/function (module, exports) {

      module.exports = function (module) {
        if (!module.webpackPolyfill) {
          module.deprecate = function () {};
          module.paths = [];
          // module.parent = undefined by default
          if (!module.children) module.children = [];
          Object.defineProperty(module, "loaded", {
            enumerable: true,
            get: function get() {
              return module.l;
            }
          });
          Object.defineProperty(module, "id", {
            enumerable: true,
            get: function get() {
              return module.i;
            }
          });
          module.webpackPolyfill = 1;
        }
        return module;
      };

      /***/
    },
    /* 20 */
    /***/function (module, exports, __webpack_require__) {

      /* WEBPACK VAR INJECTION */(function (process) {
        /**
        * This is the web browser implementation of `debug()`.
        *
        * Expose `debug()` as the module.
        */

        exports = module.exports = __webpack_require__(21);
        exports.log = log;
        exports.formatArgs = formatArgs;
        exports.save = save;
        exports.load = load;
        exports.useColors = useColors;
        exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();

        /**
         * Colors.
         */

        exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];

        /**
         * Currently only WebKit-based Web Inspectors, Firefox >= v31,
         * and the Firebug extension (any Firefox version) are known
         * to support "%c" CSS customizations.
         *
         * TODO: add a `localStorage` variable to explicitly enable/disable colors
         */

        function useColors() {
          // NB: In an Electron preload script, document will be defined but not fully
          // initialized. Since we know we're in Chrome, we'll just detect this case
          // explicitly
          if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
            return true;
          }

          // Internet Explorer and Edge do not support colors.
          if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
            return false;
          }

          // is webkit? http://stackoverflow.com/a/16459606/376773
          // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
          return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance ||
          // is firebug? http://stackoverflow.com/a/398120/376773
          typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) ||
          // is firefox >= v31?
          // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
          typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 ||
          // double check webkit in userAgent just in case we are in a worker
          typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
        }

        /**
         * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
         */

        exports.formatters.j = function (v) {
          try {
            return (0, _stringify2.default)(v);
          } catch (err) {
            return '[UnexpectedJSONParseError]: ' + err.message;
          }
        };

        /**
         * Colorize log arguments if enabled.
         *
         * @api public
         */

        function formatArgs(args) {
          var useColors = this.useColors;

          args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);

          if (!useColors) return;

          var c = 'color: ' + this.color;
          args.splice(1, 0, c, 'color: inherit');

          // the final "%c" is somewhat tricky, because there could be other
          // arguments passed either before or after the %c, so we need to
          // figure out the correct index to insert the CSS into
          var index = 0;
          var lastC = 0;
          args[0].replace(/%[a-zA-Z%]/g, function (match) {
            if ('%%' === match) return;
            index++;
            if ('%c' === match) {
              // we only are interested in the *last* %c
              // (the user may have provided their own)
              lastC = index;
            }
          });

          args.splice(lastC, 0, c);
        }

        /**
         * Invokes `console.log()` when available.
         * No-op when `console.log` is not a "function".
         *
         * @api public
         */

        function log() {
          // this hackery is required for IE8/9, where
          // the `console.log` function doesn't have 'apply'
          return 'object' === (typeof console === 'undefined' ? 'undefined' : (0, _typeof3.default)(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
        }

        /**
         * Save `namespaces`.
         *
         * @param {String} namespaces
         * @api private
         */

        function save(namespaces) {
          try {
            if (null == namespaces) {
              exports.storage.removeItem('debug');
            } else {
              exports.storage.debug = namespaces;
            }
          } catch (e) {}
        }

        /**
         * Load `namespaces`.
         *
         * @return {String} returns the previously persisted debug modes
         * @api private
         */

        function load() {
          var r;
          try {
            r = exports.storage.debug;
          } catch (e) {}

          // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
          if (!r && typeof process !== 'undefined' && 'env' in process) {
            r = process.env.DEBUG;
          }

          return r;
        }

        /**
         * Enable namespaces listed in `localStorage.debug` initially.
         */

        exports.enable(load());

        /**
         * Localstorage attempts to return the localstorage.
         *
         * This is necessary because safari throws
         * when a user disables cookies/localstorage
         * and you attempt to access it.
         *
         * @return {LocalStorage}
         * @api private
         */

        function localstorage() {
          try {
            return window.localStorage;
          } catch (e) {}
        }

        /* WEBPACK VAR INJECTION */
      }).call(exports, __webpack_require__(9));

      /***/
    },
    /* 21 */
    /***/function (module, exports, __webpack_require__) {

      /**
       * This is the common logic for both the Node.js and web browser
       * implementations of `debug()`.
       *
       * Expose `debug()` as the module.
       */

      exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
      exports.coerce = coerce;
      exports.disable = disable;
      exports.enable = enable;
      exports.enabled = enabled;
      exports.humanize = __webpack_require__(22);

      /**
       * Active `debug` instances.
       */
      exports.instances = [];

      /**
       * The currently active debug mode names, and names to skip.
       */

      exports.names = [];
      exports.skips = [];

      /**
       * Map of special "%n" handling functions, for the debug "format" argument.
       *
       * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
       */

      exports.formatters = {};

      /**
       * Select a color.
       * @param {String} namespace
       * @return {Number}
       * @api private
       */

      function selectColor(namespace) {
        var hash = 0,
            i;

        for (i in namespace) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0; // Convert to 32bit integer
        }

        return exports.colors[Math.abs(hash) % exports.colors.length];
      }

      /**
       * Create a debugger with the given `namespace`.
       *
       * @param {String} namespace
       * @return {Function}
       * @api public
       */

      function createDebug(namespace) {

        var prevTime;

        function debug() {
          // disabled?
          if (!debug.enabled) return;

          var self = debug;

          // set `diff` timestamp
          var curr = +new Date();
          var ms = curr - (prevTime || curr);
          self.diff = ms;
          self.prev = prevTime;
          self.curr = curr;
          prevTime = curr;

          // turn the `arguments` into a proper Array
          var args = new Array(arguments.length);
          for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i];
          }

          args[0] = exports.coerce(args[0]);

          if ('string' !== typeof args[0]) {
            // anything else let's inspect with %O
            args.unshift('%O');
          }

          // apply any `formatters` transformations
          var index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
            // if we encounter an escaped % then don't increase the array index
            if (match === '%%') return match;
            index++;
            var formatter = exports.formatters[format];
            if ('function' === typeof formatter) {
              var val = args[index];
              match = formatter.call(self, val);

              // now we need to remove `args[index]` since it's inlined in the `format`
              args.splice(index, 1);
              index--;
            }
            return match;
          });

          // apply env-specific formatting (colors, etc.)
          exports.formatArgs.call(self, args);

          var logFn = debug.log || exports.log || console.log.bind(console);
          logFn.apply(self, args);
        }

        debug.namespace = namespace;
        debug.enabled = exports.enabled(namespace);
        debug.useColors = exports.useColors();
        debug.color = selectColor(namespace);
        debug.destroy = destroy;

        // env-specific initialization logic for debug instances
        if ('function' === typeof exports.init) {
          exports.init(debug);
        }

        exports.instances.push(debug);

        return debug;
      }

      function destroy() {
        var index = exports.instances.indexOf(this);
        if (index !== -1) {
          exports.instances.splice(index, 1);
          return true;
        } else {
          return false;
        }
      }

      /**
       * Enables a debug mode by namespaces. This can include modes
       * separated by a colon and wildcards.
       *
       * @param {String} namespaces
       * @api public
       */

      function enable(namespaces) {
        exports.save(namespaces);

        exports.names = [];
        exports.skips = [];

        var i;
        var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
        var len = split.length;

        for (i = 0; i < len; i++) {
          if (!split[i]) continue; // ignore empty strings
          namespaces = split[i].replace(/\*/g, '.*?');
          if (namespaces[0] === '-') {
            exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
          } else {
            exports.names.push(new RegExp('^' + namespaces + '$'));
          }
        }

        for (i = 0; i < exports.instances.length; i++) {
          var instance = exports.instances[i];
          instance.enabled = exports.enabled(instance.namespace);
        }
      }

      /**
       * Disable debug output.
       *
       * @api public
       */

      function disable() {
        exports.enable('');
      }

      /**
       * Returns true if the given mode name is enabled, false otherwise.
       *
       * @param {String} name
       * @return {Boolean}
       * @api public
       */

      function enabled(name) {
        if (name[name.length - 1] === '*') {
          return true;
        }
        var i, len;
        for (i = 0, len = exports.skips.length; i < len; i++) {
          if (exports.skips[i].test(name)) {
            return false;
          }
        }
        for (i = 0, len = exports.names.length; i < len; i++) {
          if (exports.names[i].test(name)) {
            return true;
          }
        }
        return false;
      }

      /**
       * Coerce `val`.
       *
       * @param {Mixed} val
       * @return {Mixed}
       * @api private
       */

      function coerce(val) {
        if (val instanceof Error) return val.stack || val.message;
        return val;
      }

      /***/
    },
    /* 22 */
    /***/function (module, exports) {

      /**
       * Helpers.
       */

      var s = 1000;
      var m = s * 60;
      var h = m * 60;
      var d = h * 24;
      var y = d * 365.25;

      /**
       * Parse or format the given `val`.
       *
       * Options:
       *
       *  - `long` verbose formatting [false]
       *
       * @param {String|Number} val
       * @param {Object} [options]
       * @throws {Error} throw an error if val is not a non-empty string or a number
       * @return {String|Number}
       * @api public
       */

      module.exports = function (val, options) {
        options = options || {};
        var type = typeof val === 'undefined' ? 'undefined' : (0, _typeof3.default)(val);
        if (type === 'string' && val.length > 0) {
          return parse(val);
        } else if (type === 'number' && isNaN(val) === false) {
          return options.long ? fmtLong(val) : fmtShort(val);
        }
        throw new Error('val is not a non-empty string or a valid number. val=' + (0, _stringify2.default)(val));
      };

      /**
       * Parse the given `str` and return milliseconds.
       *
       * @param {String} str
       * @return {Number}
       * @api private
       */

      function parse(str) {
        str = String(str);
        if (str.length > 100) {
          return;
        }
        var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
        if (!match) {
          return;
        }
        var n = parseFloat(match[1]);
        var type = (match[2] || 'ms').toLowerCase();
        switch (type) {
          case 'years':
          case 'year':
          case 'yrs':
          case 'yr':
          case 'y':
            return n * y;
          case 'days':
          case 'day':
          case 'd':
            return n * d;
          case 'hours':
          case 'hour':
          case 'hrs':
          case 'hr':
          case 'h':
            return n * h;
          case 'minutes':
          case 'minute':
          case 'mins':
          case 'min':
          case 'm':
            return n * m;
          case 'seconds':
          case 'second':
          case 'secs':
          case 'sec':
          case 's':
            return n * s;
          case 'milliseconds':
          case 'millisecond':
          case 'msecs':
          case 'msec':
          case 'ms':
            return n;
          default:
            return undefined;
        }
      }

      /**
       * Short format for `ms`.
       *
       * @param {Number} ms
       * @return {String}
       * @api private
       */

      function fmtShort(ms) {
        if (ms >= d) {
          return Math.round(ms / d) + 'd';
        }
        if (ms >= h) {
          return Math.round(ms / h) + 'h';
        }
        if (ms >= m) {
          return Math.round(ms / m) + 'm';
        }
        if (ms >= s) {
          return Math.round(ms / s) + 's';
        }
        return ms + 'ms';
      }

      /**
       * Long format for `ms`.
       *
       * @param {Number} ms
       * @return {String}
       * @api private
       */

      function fmtLong(ms) {
        return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
      }

      /**
       * Pluralization helper.
       */

      function plural(ms, n, name) {
        if (ms < n) {
          return;
        }
        if (ms < n * 1.5) {
          return Math.floor(ms / n) + ' ' + name;
        }
        return Math.ceil(ms / n) + ' ' + name + 's';
      }

      /***/
    },
    /* 23 */
    /***/function (module, exports, __webpack_require__) {

      /* WEBPACK VAR INJECTION */(function (global) {
        /**
        * lodash (Custom Build) <https://lodash.com/>
        * Build: `lodash modularize exports="npm" -o ./`
        * Copyright jQuery Foundation and other contributors <https://jquery.org/>
        * Released under MIT license <https://lodash.com/license>
        * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
        * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
        */

        /** Used as the `TypeError` message for "Functions" methods. */
        var FUNC_ERROR_TEXT = 'Expected a function';

        /** Used to stand-in for `undefined` hash values. */
        var HASH_UNDEFINED = '__lodash_hash_undefined__';

        /** Used as references for various `Number` constants. */
        var INFINITY = 1 / 0,
            MAX_SAFE_INTEGER = 9007199254740991;

        /** `Object#toString` result references. */
        var argsTag = '[object Arguments]',
            funcTag = '[object Function]',
            genTag = '[object GeneratorFunction]',
            symbolTag = '[object Symbol]';

        /** Used to match property names within property paths. */
        var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            reIsPlainProp = /^\w*$/,
            reLeadingDot = /^\./,
            rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

        /**
         * Used to match `RegExp`
         * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
         */
        var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

        /** Used to match backslashes in property paths. */
        var reEscapeChar = /\\(\\)?/g;

        /** Used to detect host constructors (Safari). */
        var reIsHostCtor = /^\[object .+?Constructor\]$/;

        /** Used to detect unsigned integer values. */
        var reIsUint = /^(?:0|[1-9]\d*)$/;

        /** Detect free variable `global` from Node.js. */
        var freeGlobal = (typeof global === 'undefined' ? 'undefined' : (0, _typeof3.default)(global)) == 'object' && global && global.Object === Object && global;

        /** Detect free variable `self`. */
        var freeSelf = (typeof self === 'undefined' ? 'undefined' : (0, _typeof3.default)(self)) == 'object' && self && self.Object === Object && self;

        /** Used as a reference to the global object. */
        var root = freeGlobal || freeSelf || Function('return this')();

        /**
         * A faster alternative to `Function#apply`, this function invokes `func`
         * with the `this` binding of `thisArg` and the arguments of `args`.
         *
         * @private
         * @param {Function} func The function to invoke.
         * @param {*} thisArg The `this` binding of `func`.
         * @param {Array} args The arguments to invoke `func` with.
         * @returns {*} Returns the result of `func`.
         */
        function apply(func, thisArg, args) {
          switch (args.length) {
            case 0:
              return func.call(thisArg);
            case 1:
              return func.call(thisArg, args[0]);
            case 2:
              return func.call(thisArg, args[0], args[1]);
            case 3:
              return func.call(thisArg, args[0], args[1], args[2]);
          }
          return func.apply(thisArg, args);
        }

        /**
         * A specialized version of `_.map` for arrays without support for iteratee
         * shorthands.
         *
         * @private
         * @param {Array} [array] The array to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Array} Returns the new mapped array.
         */
        function arrayMap(array, iteratee) {
          var index = -1,
              length = array ? array.length : 0,
              result = Array(length);

          while (++index < length) {
            result[index] = iteratee(array[index], index, array);
          }
          return result;
        }

        /**
         * Appends the elements of `values` to `array`.
         *
         * @private
         * @param {Array} array The array to modify.
         * @param {Array} values The values to append.
         * @returns {Array} Returns `array`.
         */
        function arrayPush(array, values) {
          var index = -1,
              length = values.length,
              offset = array.length;

          while (++index < length) {
            array[offset + index] = values[index];
          }
          return array;
        }

        /**
         * Gets the value at `key` of `object`.
         *
         * @private
         * @param {Object} [object] The object to query.
         * @param {string} key The key of the property to get.
         * @returns {*} Returns the property value.
         */
        function getValue(object, key) {
          return object == null ? undefined : object[key];
        }

        /**
         * Checks if `value` is a host object in IE < 9.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
         */
        function isHostObject(value) {
          // Many host objects are `Object` objects that can coerce to strings
          // despite having improperly defined `toString` methods.
          var result = false;
          if (value != null && typeof value.toString != 'function') {
            try {
              result = !!(value + '');
            } catch (e) {}
          }
          return result;
        }

        /** Used for built-in method references. */
        var arrayProto = Array.prototype,
            funcProto = Function.prototype,
            objectProto = Object.prototype;

        /** Used to detect overreaching core-js shims. */
        var coreJsData = root['__core-js_shared__'];

        /** Used to detect methods masquerading as native. */
        var maskSrcKey = function () {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
          return uid ? 'Symbol(src)_1.' + uid : '';
        }();

        /** Used to resolve the decompiled source of functions. */
        var funcToString = funcProto.toString;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /**
         * Used to resolve the
         * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
         * of values.
         */
        var objectToString = objectProto.toString;

        /** Used to detect if a method is native. */
        var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

        /** Built-in value references. */
        var _Symbol2 = root.Symbol,
            propertyIsEnumerable = objectProto.propertyIsEnumerable,
            splice = arrayProto.splice,
            spreadableSymbol = _Symbol2 ? _Symbol2.isConcatSpreadable : undefined;

        /* Built-in method references for those with the same name as other `lodash` methods. */
        var nativeMax = Math.max;

        /* Built-in method references that are verified to be native. */
        var Map = getNative(root, 'Map'),
            nativeCreate = getNative(Object, 'create');

        /** Used to convert symbols to primitives and strings. */
        var symbolProto = _Symbol2 ? _Symbol2.prototype : undefined,
            symbolToString = symbolProto ? symbolProto.toString : undefined;

        /**
         * Creates a hash object.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */
        function Hash(entries) {
          var index = -1,
              length = entries ? entries.length : 0;

          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }

        /**
         * Removes all key-value entries from the hash.
         *
         * @private
         * @name clear
         * @memberOf Hash
         */
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
        }

        /**
         * Removes `key` and its value from the hash.
         *
         * @private
         * @name delete
         * @memberOf Hash
         * @param {Object} hash The hash to modify.
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
         */
        function hashDelete(key) {
          return this.has(key) && delete this.__data__[key];
        }

        /**
         * Gets the hash value for `key`.
         *
         * @private
         * @name get
         * @memberOf Hash
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the entry value.
         */
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result = data[key];
            return result === HASH_UNDEFINED ? undefined : result;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined;
        }

        /**
         * Checks if a hash value for `key` exists.
         *
         * @private
         * @name has
         * @memberOf Hash
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
        }

        /**
         * Sets the hash `key` to `value`.
         *
         * @private
         * @name set
         * @memberOf Hash
         * @param {string} key The key of the value to set.
         * @param {*} value The value to set.
         * @returns {Object} Returns the hash instance.
         */
        function hashSet(key, value) {
          var data = this.__data__;
          data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
          return this;
        }

        // Add methods to `Hash`.
        Hash.prototype.clear = hashClear;
        Hash.prototype['delete'] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;

        /**
         * Creates an list cache object.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */
        function ListCache(entries) {
          var index = -1,
              length = entries ? entries.length : 0;

          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }

        /**
         * Removes all key-value entries from the list cache.
         *
         * @private
         * @name clear
         * @memberOf ListCache
         */
        function listCacheClear() {
          this.__data__ = [];
        }

        /**
         * Removes `key` and its value from the list cache.
         *
         * @private
         * @name delete
         * @memberOf ListCache
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
         */
        function listCacheDelete(key) {
          var data = this.__data__,
              index = assocIndexOf(data, key);

          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          return true;
        }

        /**
         * Gets the list cache value for `key`.
         *
         * @private
         * @name get
         * @memberOf ListCache
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the entry value.
         */
        function listCacheGet(key) {
          var data = this.__data__,
              index = assocIndexOf(data, key);

          return index < 0 ? undefined : data[index][1];
        }

        /**
         * Checks if a list cache value for `key` exists.
         *
         * @private
         * @name has
         * @memberOf ListCache
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }

        /**
         * Sets the list cache `key` to `value`.
         *
         * @private
         * @name set
         * @memberOf ListCache
         * @param {string} key The key of the value to set.
         * @param {*} value The value to set.
         * @returns {Object} Returns the list cache instance.
         */
        function listCacheSet(key, value) {
          var data = this.__data__,
              index = assocIndexOf(data, key);

          if (index < 0) {
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }

        // Add methods to `ListCache`.
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype['delete'] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;

        /**
         * Creates a map cache object to store key-value pairs.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */
        function MapCache(entries) {
          var index = -1,
              length = entries ? entries.length : 0;

          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }

        /**
         * Removes all key-value entries from the map.
         *
         * @private
         * @name clear
         * @memberOf MapCache
         */
        function mapCacheClear() {
          this.__data__ = {
            'hash': new Hash(),
            'map': new (Map || ListCache)(),
            'string': new Hash()
          };
        }

        /**
         * Removes `key` and its value from the map.
         *
         * @private
         * @name delete
         * @memberOf MapCache
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
         */
        function mapCacheDelete(key) {
          return getMapData(this, key)['delete'](key);
        }

        /**
         * Gets the map value for `key`.
         *
         * @private
         * @name get
         * @memberOf MapCache
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the entry value.
         */
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }

        /**
         * Checks if a map value for `key` exists.
         *
         * @private
         * @name has
         * @memberOf MapCache
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }

        /**
         * Sets the map `key` to `value`.
         *
         * @private
         * @name set
         * @memberOf MapCache
         * @param {string} key The key of the value to set.
         * @param {*} value The value to set.
         * @returns {Object} Returns the map cache instance.
         */
        function mapCacheSet(key, value) {
          getMapData(this, key).set(key, value);
          return this;
        }

        // Add methods to `MapCache`.
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype['delete'] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;

        /**
         * Gets the index at which the `key` is found in `array` of key-value pairs.
         *
         * @private
         * @param {Array} array The array to inspect.
         * @param {*} key The key to search for.
         * @returns {number} Returns the index of the matched value, else `-1`.
         */
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }

        /**
         * The base implementation of `_.at` without support for individual paths.
         *
         * @private
         * @param {Object} object The object to iterate over.
         * @param {string[]} paths The property paths of elements to pick.
         * @returns {Array} Returns the picked elements.
         */
        function baseAt(object, paths) {
          var index = -1,
              isNil = object == null,
              length = paths.length,
              result = Array(length);

          while (++index < length) {
            result[index] = isNil ? undefined : get(object, paths[index]);
          }
          return result;
        }

        /**
         * The base implementation of `_.flatten` with support for restricting flattening.
         *
         * @private
         * @param {Array} array The array to flatten.
         * @param {number} depth The maximum recursion depth.
         * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
         * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
         * @param {Array} [result=[]] The initial result value.
         * @returns {Array} Returns the new flattened array.
         */
        function baseFlatten(array, depth, predicate, isStrict, result) {
          var index = -1,
              length = array.length;

          predicate || (predicate = isFlattenable);
          result || (result = []);

          while (++index < length) {
            var value = array[index];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                // Recursively flatten arrays (susceptible to call stack limits).
                baseFlatten(value, depth - 1, predicate, isStrict, result);
              } else {
                arrayPush(result, value);
              }
            } else if (!isStrict) {
              result[result.length] = value;
            }
          }
          return result;
        }

        /**
         * The base implementation of `_.get` without support for default values.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {Array|string} path The path of the property to get.
         * @returns {*} Returns the resolved value.
         */
        function baseGet(object, path) {
          path = isKey(path, object) ? [path] : castPath(path);

          var index = 0,
              length = path.length;

          while (object != null && index < length) {
            object = object[toKey(path[index++])];
          }
          return index && index == length ? object : undefined;
        }

        /**
         * The base implementation of `_.isNative` without bad shim checks.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a native function,
         *  else `false`.
         */
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }

        /**
         * The base implementation of `_.pullAt` without support for individual
         * indexes or capturing the removed elements.
         *
         * @private
         * @param {Array} array The array to modify.
         * @param {number[]} indexes The indexes of elements to remove.
         * @returns {Array} Returns `array`.
         */
        function basePullAt(array, indexes) {
          var length = array ? indexes.length : 0,
              lastIndex = length - 1;

          while (length--) {
            var index = indexes[length];
            if (length == lastIndex || index !== previous) {
              var previous = index;
              if (isIndex(index)) {
                splice.call(array, index, 1);
              } else if (!isKey(index, array)) {
                var path = castPath(index),
                    object = parent(array, path);

                if (object != null) {
                  delete object[toKey(last(path))];
                }
              } else {
                delete array[toKey(index)];
              }
            }
          }
          return array;
        }

        /**
         * The base implementation of `_.rest` which doesn't validate or coerce arguments.
         *
         * @private
         * @param {Function} func The function to apply a rest parameter to.
         * @param {number} [start=func.length-1] The start position of the rest parameter.
         * @returns {Function} Returns the new function.
         */
        function baseRest(func, start) {
          start = nativeMax(start === undefined ? func.length - 1 : start, 0);
          return function () {
            var args = arguments,
                index = -1,
                length = nativeMax(args.length - start, 0),
                array = Array(length);

            while (++index < length) {
              array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = array;
            return apply(func, this, otherArgs);
          };
        }

        /**
         * The base implementation of `_.slice` without an iteratee call guard.
         *
         * @private
         * @param {Array} array The array to slice.
         * @param {number} [start=0] The start position.
         * @param {number} [end=array.length] The end position.
         * @returns {Array} Returns the slice of `array`.
         */
        function baseSlice(array, start, end) {
          var index = -1,
              length = array.length;

          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : end - start >>> 0;
          start >>>= 0;

          var result = Array(length);
          while (++index < length) {
            result[index] = array[index + start];
          }
          return result;
        }

        /**
         * The base implementation of `_.toString` which doesn't convert nullish
         * values to empty strings.
         *
         * @private
         * @param {*} value The value to process.
         * @returns {string} Returns the string.
         */
        function baseToString(value) {
          // Exit early for strings to avoid a performance hit in some environments.
          if (typeof value == 'string') {
            return value;
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : '';
          }
          var result = value + '';
          return result == '0' && 1 / value == -INFINITY ? '-0' : result;
        }

        /**
         * Casts `value` to a path array if it's not one.
         *
         * @private
         * @param {*} value The value to inspect.
         * @returns {Array} Returns the cast property path array.
         */
        function castPath(value) {
          return isArray(value) ? value : stringToPath(value);
        }

        /**
         * Compares values to sort them in ascending order.
         *
         * @private
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @returns {number} Returns the sort order indicator for `value`.
         */
        function compareAscending(value, other) {
          if (value !== other) {
            var valIsDefined = value !== undefined,
                valIsNull = value === null,
                valIsReflexive = value === value,
                valIsSymbol = isSymbol(value);

            var othIsDefined = other !== undefined,
                othIsNull = other === null,
                othIsReflexive = other === other,
                othIsSymbol = isSymbol(other);

            if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
              return 1;
            }
            if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
              return -1;
            }
          }
          return 0;
        }

        /**
         * Gets the data for `map`.
         *
         * @private
         * @param {Object} map The map to query.
         * @param {string} key The reference key.
         * @returns {*} Returns the map data.
         */
        function getMapData(map, key) {
          var data = map.__data__;
          return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
        }

        /**
         * Gets the native function at `key` of `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {string} key The key of the method to get.
         * @returns {*} Returns the function if it's native, else `undefined`.
         */
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : undefined;
        }

        /**
         * Checks if `value` is a flattenable `arguments` object or array.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
         */
        function isFlattenable(value) {
          return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }

        /**
         * Checks if `value` is a valid array-like index.
         *
         * @private
         * @param {*} value The value to check.
         * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
         * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
         */
        function isIndex(value, length) {
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
        }

        /**
         * Checks if `value` is a property name and not a property path.
         *
         * @private
         * @param {*} value The value to check.
         * @param {Object} [object] The object to query keys on.
         * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
         */
        function isKey(value, object) {
          if (isArray(value)) {
            return false;
          }
          var type = typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value);
          if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
            return true;
          }
          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
        }

        /**
         * Checks if `value` is suitable for use as unique object key.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
         */
        function isKeyable(value) {
          var type = typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value);
          return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
        }

        /**
         * Checks if `func` has its source masked.
         *
         * @private
         * @param {Function} func The function to check.
         * @returns {boolean} Returns `true` if `func` is masked, else `false`.
         */
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }

        /**
         * Gets the parent value at `path` of `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {Array} path The path to get the parent value of.
         * @returns {*} Returns the parent value.
         */
        function parent(object, path) {
          return path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
        }

        /**
         * Converts `string` to a property path array.
         *
         * @private
         * @param {string} string The string to convert.
         * @returns {Array} Returns the property path array.
         */
        var stringToPath = memoize(function (string) {
          string = toString(string);

          var result = [];
          if (reLeadingDot.test(string)) {
            result.push('');
          }
          string.replace(rePropName, function (match, number, quote, string) {
            result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
          });
          return result;
        });

        /**
         * Converts `value` to a string key if it's not a string or symbol.
         *
         * @private
         * @param {*} value The value to inspect.
         * @returns {string|symbol} Returns the key.
         */
        function toKey(value) {
          if (typeof value == 'string' || isSymbol(value)) {
            return value;
          }
          var result = value + '';
          return result == '0' && 1 / value == -INFINITY ? '-0' : result;
        }

        /**
         * Converts `func` to its source code.
         *
         * @private
         * @param {Function} func The function to process.
         * @returns {string} Returns the source code.
         */
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {}
            try {
              return func + '';
            } catch (e) {}
          }
          return '';
        }

        /**
         * Gets the last element of `array`.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Array
         * @param {Array} array The array to query.
         * @returns {*} Returns the last element of `array`.
         * @example
         *
         * _.last([1, 2, 3]);
         * // => 3
         */
        function last(array) {
          var length = array ? array.length : 0;
          return length ? array[length - 1] : undefined;
        }

        /**
         * Removes elements from `array` corresponding to `indexes` and returns an
         * array of removed elements.
         *
         * **Note:** Unlike `_.at`, this method mutates `array`.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Array
         * @param {Array} array The array to modify.
         * @param {...(number|number[])} [indexes] The indexes of elements to remove.
         * @returns {Array} Returns the new array of removed elements.
         * @example
         *
         * var array = ['a', 'b', 'c', 'd'];
         * var pulled = _.pullAt(array, [1, 3]);
         *
         * console.log(array);
         * // => ['a', 'c']
         *
         * console.log(pulled);
         * // => ['b', 'd']
         */
        var pullAt = baseRest(function (array, indexes) {
          indexes = baseFlatten(indexes, 1);

          var length = array ? array.length : 0,
              result = baseAt(array, indexes);

          basePullAt(array, arrayMap(indexes, function (index) {
            return isIndex(index, length) ? +index : index;
          }).sort(compareAscending));

          return result;
        });

        /**
         * Creates a function that memoizes the result of `func`. If `resolver` is
         * provided, it determines the cache key for storing the result based on the
         * arguments provided to the memoized function. By default, the first argument
         * provided to the memoized function is used as the map cache key. The `func`
         * is invoked with the `this` binding of the memoized function.
         *
         * **Note:** The cache is exposed as the `cache` property on the memoized
         * function. Its creation may be customized by replacing the `_.memoize.Cache`
         * constructor with one whose instances implement the
         * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
         * method interface of `delete`, `get`, `has`, and `set`.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Function
         * @param {Function} func The function to have its output memoized.
         * @param {Function} [resolver] The function to resolve the cache key.
         * @returns {Function} Returns the new memoized function.
         * @example
         *
         * var object = { 'a': 1, 'b': 2 };
         * var other = { 'c': 3, 'd': 4 };
         *
         * var values = _.memoize(_.values);
         * values(object);
         * // => [1, 2]
         *
         * values(other);
         * // => [3, 4]
         *
         * object.a = 2;
         * values(object);
         * // => [1, 2]
         *
         * // Modify the result cache.
         * values.cache.set(object, ['a', 'b']);
         * values(object);
         * // => ['a', 'b']
         *
         * // Replace `_.memoize.Cache`.
         * _.memoize.Cache = WeakMap;
         */
        function memoize(func, resolver) {
          if (typeof func != 'function' || resolver && typeof resolver != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var memoized = function memoized() {
            var args = arguments,
                key = resolver ? resolver.apply(this, args) : args[0],
                cache = memoized.cache;

            if (cache.has(key)) {
              return cache.get(key);
            }
            var result = func.apply(this, args);
            memoized.cache = cache.set(key, result);
            return result;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }

        // Assign cache to `_.memoize`.
        memoize.Cache = MapCache;

        /**
         * Performs a
         * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
         * comparison between two values to determine if they are equivalent.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
         * @example
         *
         * var object = { 'a': 1 };
         * var other = { 'a': 1 };
         *
         * _.eq(object, object);
         * // => true
         *
         * _.eq(object, other);
         * // => false
         *
         * _.eq('a', 'a');
         * // => true
         *
         * _.eq('a', Object('a'));
         * // => false
         *
         * _.eq(NaN, NaN);
         * // => true
         */
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }

        /**
         * Checks if `value` is likely an `arguments` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an `arguments` object,
         *  else `false`.
         * @example
         *
         * _.isArguments(function() { return arguments; }());
         * // => true
         *
         * _.isArguments([1, 2, 3]);
         * // => false
         */
        function isArguments(value) {
          // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
          return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
        }

        /**
         * Checks if `value` is classified as an `Array` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an array, else `false`.
         * @example
         *
         * _.isArray([1, 2, 3]);
         * // => true
         *
         * _.isArray(document.body.children);
         * // => false
         *
         * _.isArray('abc');
         * // => false
         *
         * _.isArray(_.noop);
         * // => false
         */
        var isArray = Array.isArray;

        /**
         * Checks if `value` is array-like. A value is considered array-like if it's
         * not a function and has a `value.length` that's an integer greater than or
         * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
         * @example
         *
         * _.isArrayLike([1, 2, 3]);
         * // => true
         *
         * _.isArrayLike(document.body.children);
         * // => true
         *
         * _.isArrayLike('abc');
         * // => true
         *
         * _.isArrayLike(_.noop);
         * // => false
         */
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction(value);
        }

        /**
         * This method is like `_.isArrayLike` except that it also checks if `value`
         * is an object.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an array-like object,
         *  else `false`.
         * @example
         *
         * _.isArrayLikeObject([1, 2, 3]);
         * // => true
         *
         * _.isArrayLikeObject(document.body.children);
         * // => true
         *
         * _.isArrayLikeObject('abc');
         * // => false
         *
         * _.isArrayLikeObject(_.noop);
         * // => false
         */
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }

        /**
         * Checks if `value` is classified as a `Function` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a function, else `false`.
         * @example
         *
         * _.isFunction(_);
         * // => true
         *
         * _.isFunction(/abc/);
         * // => false
         */
        function isFunction(value) {
          // The use of `Object#toString` avoids issues with the `typeof` operator
          // in Safari 8-9 which returns 'object' for typed array and other constructors.
          var tag = isObject(value) ? objectToString.call(value) : '';
          return tag == funcTag || tag == genTag;
        }

        /**
         * Checks if `value` is a valid array-like length.
         *
         * **Note:** This method is loosely based on
         * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
         * @example
         *
         * _.isLength(3);
         * // => true
         *
         * _.isLength(Number.MIN_VALUE);
         * // => false
         *
         * _.isLength(Infinity);
         * // => false
         *
         * _.isLength('3');
         * // => false
         */
        function isLength(value) {
          return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }

        /**
         * Checks if `value` is the
         * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
         * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an object, else `false`.
         * @example
         *
         * _.isObject({});
         * // => true
         *
         * _.isObject([1, 2, 3]);
         * // => true
         *
         * _.isObject(_.noop);
         * // => true
         *
         * _.isObject(null);
         * // => false
         */
        function isObject(value) {
          var type = typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value);
          return !!value && (type == 'object' || type == 'function');
        }

        /**
         * Checks if `value` is object-like. A value is object-like if it's not `null`
         * and has a `typeof` result of "object".
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
         * @example
         *
         * _.isObjectLike({});
         * // => true
         *
         * _.isObjectLike([1, 2, 3]);
         * // => true
         *
         * _.isObjectLike(_.noop);
         * // => false
         *
         * _.isObjectLike(null);
         * // => false
         */
        function isObjectLike(value) {
          return !!value && (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) == 'object';
        }

        /**
         * Checks if `value` is classified as a `Symbol` primitive or object.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
         * @example
         *
         * _.isSymbol(Symbol.iterator);
         * // => true
         *
         * _.isSymbol('abc');
         * // => false
         */
        function isSymbol(value) {
          return (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
        }

        /**
         * Converts `value` to a string. An empty string is returned for `null`
         * and `undefined` values. The sign of `-0` is preserved.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to process.
         * @returns {string} Returns the string.
         * @example
         *
         * _.toString(null);
         * // => ''
         *
         * _.toString(-0);
         * // => '-0'
         *
         * _.toString([1, 2, 3]);
         * // => '1,2,3'
         */
        function toString(value) {
          return value == null ? '' : baseToString(value);
        }

        /**
         * Gets the value at `path` of `object`. If the resolved value is
         * `undefined`, the `defaultValue` is returned in its place.
         *
         * @static
         * @memberOf _
         * @since 3.7.0
         * @category Object
         * @param {Object} object The object to query.
         * @param {Array|string} path The path of the property to get.
         * @param {*} [defaultValue] The value returned for `undefined` resolved values.
         * @returns {*} Returns the resolved value.
         * @example
         *
         * var object = { 'a': [{ 'b': { 'c': 3 } }] };
         *
         * _.get(object, 'a[0].b.c');
         * // => 3
         *
         * _.get(object, ['a', '0', 'b', 'c']);
         * // => 3
         *
         * _.get(object, 'a.b.c', 'default');
         * // => 'default'
         */
        function get(object, path, defaultValue) {
          var result = object == null ? undefined : baseGet(object, path);
          return result === undefined ? defaultValue : result;
        }

        module.exports = pullAt;

        /* WEBPACK VAR INJECTION */
      }).call(exports, __webpack_require__(0));

      /***/
    },
    /* 24 */
    /***/function (module, exports, __webpack_require__) {

      /* WEBPACK VAR INJECTION */(function (global) {
        var apply = Function.prototype.apply;

        // DOM APIs, for completeness

        exports.setTimeout = function () {
          return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
        };
        exports.setInterval = function () {
          return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
        };
        exports.clearTimeout = exports.clearInterval = function (timeout) {
          if (timeout) {
            timeout.close();
          }
        };

        function Timeout(id, clearFn) {
          this._id = id;
          this._clearFn = clearFn;
        }
        Timeout.prototype.unref = Timeout.prototype.ref = function () {};
        Timeout.prototype.close = function () {
          this._clearFn.call(window, this._id);
        };

        // Does not start the time, just sets up the members needed.
        exports.enroll = function (item, msecs) {
          clearTimeout(item._idleTimeoutId);
          item._idleTimeout = msecs;
        };

        exports.unenroll = function (item) {
          clearTimeout(item._idleTimeoutId);
          item._idleTimeout = -1;
        };

        exports._unrefActive = exports.active = function (item) {
          clearTimeout(item._idleTimeoutId);

          var msecs = item._idleTimeout;
          if (msecs >= 0) {
            item._idleTimeoutId = setTimeout(function onTimeout() {
              if (item._onTimeout) item._onTimeout();
            }, msecs);
          }
        };

        // setimmediate attaches itself to the global object
        __webpack_require__(25);
        // On some exotic environments, it's not clear which object `setimmeidate` was
        // able to install onto.  Search each possibility in the same order as the
        // `setimmediate` library.
        exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
        exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;

        /* WEBPACK VAR INJECTION */
      }).call(exports, __webpack_require__(0));

      /***/
    },
    /* 25 */
    /***/function (module, exports, __webpack_require__) {

      /* WEBPACK VAR INJECTION */(function (global, process) {
        (function (global, undefined) {
          "use strict";

          if (global.setImmediate) {
            return;
          }

          var nextHandle = 1; // Spec says greater than zero
          var tasksByHandle = {};
          var currentlyRunningATask = false;
          var doc = global.document;
          var registerImmediate;

          function setImmediate(callback) {
            // Callback can either be a function or a string
            if (typeof callback !== "function") {
              callback = new Function("" + callback);
            }
            // Copy function arguments
            var args = new Array(arguments.length - 1);
            for (var i = 0; i < args.length; i++) {
              args[i] = arguments[i + 1];
            }
            // Store and register the task
            var task = { callback: callback, args: args };
            tasksByHandle[nextHandle] = task;
            registerImmediate(nextHandle);
            return nextHandle++;
          }

          function clearImmediate(handle) {
            delete tasksByHandle[handle];
          }

          function run(task) {
            var callback = task.callback;
            var args = task.args;
            switch (args.length) {
              case 0:
                callback();
                break;
              case 1:
                callback(args[0]);
                break;
              case 2:
                callback(args[0], args[1]);
                break;
              case 3:
                callback(args[0], args[1], args[2]);
                break;
              default:
                callback.apply(undefined, args);
                break;
            }
          }

          function runIfPresent(handle) {
            // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
            // So if we're currently running a task, we'll need to delay this invocation.
            if (currentlyRunningATask) {
              // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
              // "too much recursion" error.
              setTimeout(runIfPresent, 0, handle);
            } else {
              var task = tasksByHandle[handle];
              if (task) {
                currentlyRunningATask = true;
                try {
                  run(task);
                } finally {
                  clearImmediate(handle);
                  currentlyRunningATask = false;
                }
              }
            }
          }

          function installNextTickImplementation() {
            registerImmediate = function registerImmediate(handle) {
              process.nextTick(function () {
                runIfPresent(handle);
              });
            };
          }

          function canUsePostMessage() {
            // The test against `importScripts` prevents this implementation from being installed inside a web worker,
            // where `global.postMessage` means something completely different and can't be used for this purpose.
            if (global.postMessage && !global.importScripts) {
              var postMessageIsAsynchronous = true;
              var oldOnMessage = global.onmessage;
              global.onmessage = function () {
                postMessageIsAsynchronous = false;
              };
              global.postMessage("", "*");
              global.onmessage = oldOnMessage;
              return postMessageIsAsynchronous;
            }
          }

          function installPostMessageImplementation() {
            // Installs an event handler on `global` for the `message` event: see
            // * https://developer.mozilla.org/en/DOM/window.postMessage
            // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

            var messagePrefix = "setImmediate$" + Math.random() + "$";
            var onGlobalMessage = function onGlobalMessage(event) {
              if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
              }
            };

            if (global.addEventListener) {
              global.addEventListener("message", onGlobalMessage, false);
            } else {
              global.attachEvent("onmessage", onGlobalMessage);
            }

            registerImmediate = function registerImmediate(handle) {
              global.postMessage(messagePrefix + handle, "*");
            };
          }

          function installMessageChannelImplementation() {
            var channel = new MessageChannel();
            channel.port1.onmessage = function (event) {
              var handle = event.data;
              runIfPresent(handle);
            };

            registerImmediate = function registerImmediate(handle) {
              channel.port2.postMessage(handle);
            };
          }

          function installReadyStateChangeImplementation() {
            var html = doc.documentElement;
            registerImmediate = function registerImmediate(handle) {
              // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
              // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
              var script = doc.createElement("script");
              script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
              };
              html.appendChild(script);
            };
          }

          function installSetTimeoutImplementation() {
            registerImmediate = function registerImmediate(handle) {
              setTimeout(runIfPresent, 0, handle);
            };
          }

          // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
          var attachTo = _getPrototypeOf2.default && (0, _getPrototypeOf2.default)(global);
          attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

          // Don't get fooled by e.g. browserify environments.
          if ({}.toString.call(global.process) === "[object process]") {
            // For Node.js before 0.9
            installNextTickImplementation();
          } else if (canUsePostMessage()) {
            // For non-IE10 modern browsers
            installPostMessageImplementation();
          } else if (global.MessageChannel) {
            // For web workers, where supported
            installMessageChannelImplementation();
          } else if (doc && "onreadystatechange" in doc.createElement("script")) {
            // For IE 6–8
            installReadyStateChangeImplementation();
          } else {
            // For older browsers
            installSetTimeoutImplementation();
          }

          attachTo.setImmediate = setImmediate;
          attachTo.clearImmediate = clearImmediate;
        })(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);

        /* WEBPACK VAR INJECTION */
      }).call(exports, __webpack_require__(0), __webpack_require__(9));

      /***/
    },
    /* 26 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /* WEBPACK VAR INJECTION */
      (function (global) {
        /*!
        * The buffer module from node.js, for the browser.
        *
        * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
        * @license  MIT
        */
        /* eslint-disable no-proto */

        var base64 = __webpack_require__(27);
        var ieee754 = __webpack_require__(28);
        var isArray = __webpack_require__(29);

        exports.Buffer = Buffer;
        exports.SlowBuffer = SlowBuffer;
        exports.INSPECT_MAX_BYTES = 50;

        /**
         * If `Buffer.TYPED_ARRAY_SUPPORT`:
         *   === true    Use Uint8Array implementation (fastest)
         *   === false   Use Object implementation (most compatible, even IE6)
         *
         * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
         * Opera 11.6+, iOS 4.2+.
         *
         * Due to various browser bugs, sometimes the Object implementation will be used even
         * when the browser supports typed arrays.
         *
         * Note:
         *
         *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
         *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
         *
         *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
         *
         *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
         *     incorrect length in some situations.
        
         * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
         * get the Object implementation, which is slower but behaves correctly.
         */
        Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();

        /*
         * Export kMaxLength after typed array support is determined.
         */
        exports.kMaxLength = kMaxLength();

        function typedArraySupport() {
          try {
            var arr = new Uint8Array(1);
            arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function foo() {
                return 42;
              } };
            return arr.foo() === 42 && // typed array instances can be augmented
            typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
            arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
          } catch (e) {
            return false;
          }
        }

        function kMaxLength() {
          return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
        }

        function createBuffer(that, length) {
          if (kMaxLength() < length) {
            throw new RangeError('Invalid typed array length');
          }
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            // Return an augmented `Uint8Array` instance, for best performance
            that = new Uint8Array(length);
            that.__proto__ = Buffer.prototype;
          } else {
            // Fallback: Return an object instance of the Buffer class
            if (that === null) {
              that = new Buffer(length);
            }
            that.length = length;
          }

          return that;
        }

        /**
         * The Buffer constructor returns instances of `Uint8Array` that have their
         * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
         * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
         * and the `Uint8Array` methods. Square bracket notation works as expected -- it
         * returns a single octet.
         *
         * The `Uint8Array` prototype remains unmodified.
         */

        function Buffer(arg, encodingOrOffset, length) {
          if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
            return new Buffer(arg, encodingOrOffset, length);
          }

          // Common case.
          if (typeof arg === 'number') {
            if (typeof encodingOrOffset === 'string') {
              throw new Error('If encoding is specified then the first argument must be a string');
            }
            return allocUnsafe(this, arg);
          }
          return from(this, arg, encodingOrOffset, length);
        }

        Buffer.poolSize = 8192; // not used by this implementation

        // TODO: Legacy, not needed anymore. Remove in next major version.
        Buffer._augment = function (arr) {
          arr.__proto__ = Buffer.prototype;
          return arr;
        };

        function from(that, value, encodingOrOffset, length) {
          if (typeof value === 'number') {
            throw new TypeError('"value" argument must not be a number');
          }

          if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
            return fromArrayBuffer(that, value, encodingOrOffset, length);
          }

          if (typeof value === 'string') {
            return fromString(that, value, encodingOrOffset);
          }

          return fromObject(that, value);
        }

        /**
         * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
         * if value is a number.
         * Buffer.from(str[, encoding])
         * Buffer.from(array)
         * Buffer.from(buffer)
         * Buffer.from(arrayBuffer[, byteOffset[, length]])
         **/
        Buffer.from = function (value, encodingOrOffset, length) {
          return from(null, value, encodingOrOffset, length);
        };

        if (Buffer.TYPED_ARRAY_SUPPORT) {
          Buffer.prototype.__proto__ = Uint8Array.prototype;
          Buffer.__proto__ = Uint8Array;
          if (typeof _symbol2.default !== 'undefined' && _species2.default && Buffer[_species2.default] === Buffer) {
            // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
            (0, _defineProperty2.default)(Buffer, _species2.default, {
              value: null,
              configurable: true
            });
          }
        }

        function assertSize(size) {
          if (typeof size !== 'number') {
            throw new TypeError('"size" argument must be a number');
          } else if (size < 0) {
            throw new RangeError('"size" argument must not be negative');
          }
        }

        function alloc(that, size, fill, encoding) {
          assertSize(size);
          if (size <= 0) {
            return createBuffer(that, size);
          }
          if (fill !== undefined) {
            // Only pay attention to encoding if it's a string. This
            // prevents accidentally sending in a number that would
            // be interpretted as a start offset.
            return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
          }
          return createBuffer(that, size);
        }

        /**
         * Creates a new filled Buffer instance.
         * alloc(size[, fill[, encoding]])
         **/
        Buffer.alloc = function (size, fill, encoding) {
          return alloc(null, size, fill, encoding);
        };

        function allocUnsafe(that, size) {
          assertSize(size);
          that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
          if (!Buffer.TYPED_ARRAY_SUPPORT) {
            for (var i = 0; i < size; ++i) {
              that[i] = 0;
            }
          }
          return that;
        }

        /**
         * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
         * */
        Buffer.allocUnsafe = function (size) {
          return allocUnsafe(null, size);
        };
        /**
         * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
         */
        Buffer.allocUnsafeSlow = function (size) {
          return allocUnsafe(null, size);
        };

        function fromString(that, string, encoding) {
          if (typeof encoding !== 'string' || encoding === '') {
            encoding = 'utf8';
          }

          if (!Buffer.isEncoding(encoding)) {
            throw new TypeError('"encoding" must be a valid string encoding');
          }

          var length = byteLength(string, encoding) | 0;
          that = createBuffer(that, length);

          var actual = that.write(string, encoding);

          if (actual !== length) {
            // Writing a hex string, for example, that contains invalid characters will
            // cause everything after the first invalid character to be ignored. (e.g.
            // 'abxxcd' will be treated as 'ab')
            that = that.slice(0, actual);
          }

          return that;
        }

        function fromArrayLike(that, array) {
          var length = array.length < 0 ? 0 : checked(array.length) | 0;
          that = createBuffer(that, length);
          for (var i = 0; i < length; i += 1) {
            that[i] = array[i] & 255;
          }
          return that;
        }

        function fromArrayBuffer(that, array, byteOffset, length) {
          array.byteLength; // this throws if `array` is not a valid ArrayBuffer

          if (byteOffset < 0 || array.byteLength < byteOffset) {
            throw new RangeError('\'offset\' is out of bounds');
          }

          if (array.byteLength < byteOffset + (length || 0)) {
            throw new RangeError('\'length\' is out of bounds');
          }

          if (byteOffset === undefined && length === undefined) {
            array = new Uint8Array(array);
          } else if (length === undefined) {
            array = new Uint8Array(array, byteOffset);
          } else {
            array = new Uint8Array(array, byteOffset, length);
          }

          if (Buffer.TYPED_ARRAY_SUPPORT) {
            // Return an augmented `Uint8Array` instance, for best performance
            that = array;
            that.__proto__ = Buffer.prototype;
          } else {
            // Fallback: Return an object instance of the Buffer class
            that = fromArrayLike(that, array);
          }
          return that;
        }

        function fromObject(that, obj) {
          if (Buffer.isBuffer(obj)) {
            var len = checked(obj.length) | 0;
            that = createBuffer(that, len);

            if (that.length === 0) {
              return that;
            }

            obj.copy(that, 0, 0, len);
            return that;
          }

          if (obj) {
            if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
              if (typeof obj.length !== 'number' || isnan(obj.length)) {
                return createBuffer(that, 0);
              }
              return fromArrayLike(that, obj);
            }

            if (obj.type === 'Buffer' && isArray(obj.data)) {
              return fromArrayLike(that, obj.data);
            }
          }

          throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
        }

        function checked(length) {
          // Note: cannot use `length < kMaxLength()` here because that fails when
          // length is NaN (which is otherwise coerced to zero.)
          if (length >= kMaxLength()) {
            throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
          }
          return length | 0;
        }

        function SlowBuffer(length) {
          if (+length != length) {
            // eslint-disable-line eqeqeq
            length = 0;
          }
          return Buffer.alloc(+length);
        }

        Buffer.isBuffer = function isBuffer(b) {
          return !!(b != null && b._isBuffer);
        };

        Buffer.compare = function compare(a, b) {
          if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
            throw new TypeError('Arguments must be Buffers');
          }

          if (a === b) return 0;

          var x = a.length;
          var y = b.length;

          for (var i = 0, len = Math.min(x, y); i < len; ++i) {
            if (a[i] !== b[i]) {
              x = a[i];
              y = b[i];
              break;
            }
          }

          if (x < y) return -1;
          if (y < x) return 1;
          return 0;
        };

        Buffer.isEncoding = function isEncoding(encoding) {
          switch (String(encoding).toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'latin1':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return true;
            default:
              return false;
          }
        };

        Buffer.concat = function concat(list, length) {
          if (!isArray(list)) {
            throw new TypeError('"list" argument must be an Array of Buffers');
          }

          if (list.length === 0) {
            return Buffer.alloc(0);
          }

          var i;
          if (length === undefined) {
            length = 0;
            for (i = 0; i < list.length; ++i) {
              length += list[i].length;
            }
          }

          var buffer = Buffer.allocUnsafe(length);
          var pos = 0;
          for (i = 0; i < list.length; ++i) {
            var buf = list[i];
            if (!Buffer.isBuffer(buf)) {
              throw new TypeError('"list" argument must be an Array of Buffers');
            }
            buf.copy(buffer, pos);
            pos += buf.length;
          }
          return buffer;
        };

        function byteLength(string, encoding) {
          if (Buffer.isBuffer(string)) {
            return string.length;
          }
          if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
            return string.byteLength;
          }
          if (typeof string !== 'string') {
            string = '' + string;
          }

          var len = string.length;
          if (len === 0) return 0;

          // Use a for loop to avoid recursion
          var loweredCase = false;
          for (;;) {
            switch (encoding) {
              case 'ascii':
              case 'latin1':
              case 'binary':
                return len;
              case 'utf8':
              case 'utf-8':
              case undefined:
                return utf8ToBytes(string).length;
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return len * 2;
              case 'hex':
                return len >>> 1;
              case 'base64':
                return base64ToBytes(string).length;
              default:
                if (loweredCase) return utf8ToBytes(string).length; // assume utf8
                encoding = ('' + encoding).toLowerCase();
                loweredCase = true;
            }
          }
        }
        Buffer.byteLength = byteLength;

        function slowToString(encoding, start, end) {
          var loweredCase = false;

          // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
          // property of a typed array.

          // This behaves neither like String nor Uint8Array in that we set start/end
          // to their upper/lower bounds if the value passed is out of range.
          // undefined is handled specially as per ECMA-262 6th Edition,
          // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
          if (start === undefined || start < 0) {
            start = 0;
          }
          // Return early if start > this.length. Done here to prevent potential uint32
          // coercion fail below.
          if (start > this.length) {
            return '';
          }

          if (end === undefined || end > this.length) {
            end = this.length;
          }

          if (end <= 0) {
            return '';
          }

          // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
          end >>>= 0;
          start >>>= 0;

          if (end <= start) {
            return '';
          }

          if (!encoding) encoding = 'utf8';

          while (true) {
            switch (encoding) {
              case 'hex':
                return hexSlice(this, start, end);

              case 'utf8':
              case 'utf-8':
                return utf8Slice(this, start, end);

              case 'ascii':
                return asciiSlice(this, start, end);

              case 'latin1':
              case 'binary':
                return latin1Slice(this, start, end);

              case 'base64':
                return base64Slice(this, start, end);

              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return utf16leSlice(this, start, end);

              default:
                if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
                encoding = (encoding + '').toLowerCase();
                loweredCase = true;
            }
          }
        }

        // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
        // Buffer instances.
        Buffer.prototype._isBuffer = true;

        function swap(b, n, m) {
          var i = b[n];
          b[n] = b[m];
          b[m] = i;
        }

        Buffer.prototype.swap16 = function swap16() {
          var len = this.length;
          if (len % 2 !== 0) {
            throw new RangeError('Buffer size must be a multiple of 16-bits');
          }
          for (var i = 0; i < len; i += 2) {
            swap(this, i, i + 1);
          }
          return this;
        };

        Buffer.prototype.swap32 = function swap32() {
          var len = this.length;
          if (len % 4 !== 0) {
            throw new RangeError('Buffer size must be a multiple of 32-bits');
          }
          for (var i = 0; i < len; i += 4) {
            swap(this, i, i + 3);
            swap(this, i + 1, i + 2);
          }
          return this;
        };

        Buffer.prototype.swap64 = function swap64() {
          var len = this.length;
          if (len % 8 !== 0) {
            throw new RangeError('Buffer size must be a multiple of 64-bits');
          }
          for (var i = 0; i < len; i += 8) {
            swap(this, i, i + 7);
            swap(this, i + 1, i + 6);
            swap(this, i + 2, i + 5);
            swap(this, i + 3, i + 4);
          }
          return this;
        };

        Buffer.prototype.toString = function toString() {
          var length = this.length | 0;
          if (length === 0) return '';
          if (arguments.length === 0) return utf8Slice(this, 0, length);
          return slowToString.apply(this, arguments);
        };

        Buffer.prototype.equals = function equals(b) {
          if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
          if (this === b) return true;
          return Buffer.compare(this, b) === 0;
        };

        Buffer.prototype.inspect = function inspect() {
          var str = '';
          var max = exports.INSPECT_MAX_BYTES;
          if (this.length > 0) {
            str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
            if (this.length > max) str += ' ... ';
          }
          return '<Buffer ' + str + '>';
        };

        Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
          if (!Buffer.isBuffer(target)) {
            throw new TypeError('Argument must be a Buffer');
          }

          if (start === undefined) {
            start = 0;
          }
          if (end === undefined) {
            end = target ? target.length : 0;
          }
          if (thisStart === undefined) {
            thisStart = 0;
          }
          if (thisEnd === undefined) {
            thisEnd = this.length;
          }

          if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
            throw new RangeError('out of range index');
          }

          if (thisStart >= thisEnd && start >= end) {
            return 0;
          }
          if (thisStart >= thisEnd) {
            return -1;
          }
          if (start >= end) {
            return 1;
          }

          start >>>= 0;
          end >>>= 0;
          thisStart >>>= 0;
          thisEnd >>>= 0;

          if (this === target) return 0;

          var x = thisEnd - thisStart;
          var y = end - start;
          var len = Math.min(x, y);

          var thisCopy = this.slice(thisStart, thisEnd);
          var targetCopy = target.slice(start, end);

          for (var i = 0; i < len; ++i) {
            if (thisCopy[i] !== targetCopy[i]) {
              x = thisCopy[i];
              y = targetCopy[i];
              break;
            }
          }

          if (x < y) return -1;
          if (y < x) return 1;
          return 0;
        };

        // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
        // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
        //
        // Arguments:
        // - buffer - a Buffer to search
        // - val - a string, Buffer, or number
        // - byteOffset - an index into `buffer`; will be clamped to an int32
        // - encoding - an optional encoding, relevant is val is a string
        // - dir - true for indexOf, false for lastIndexOf
        function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
          // Empty buffer means no match
          if (buffer.length === 0) return -1;

          // Normalize byteOffset
          if (typeof byteOffset === 'string') {
            encoding = byteOffset;
            byteOffset = 0;
          } else if (byteOffset > 0x7fffffff) {
            byteOffset = 0x7fffffff;
          } else if (byteOffset < -0x80000000) {
            byteOffset = -0x80000000;
          }
          byteOffset = +byteOffset; // Coerce to Number.
          if (isNaN(byteOffset)) {
            // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
            byteOffset = dir ? 0 : buffer.length - 1;
          }

          // Normalize byteOffset: negative offsets start from the end of the buffer
          if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
          if (byteOffset >= buffer.length) {
            if (dir) return -1;else byteOffset = buffer.length - 1;
          } else if (byteOffset < 0) {
            if (dir) byteOffset = 0;else return -1;
          }

          // Normalize val
          if (typeof val === 'string') {
            val = Buffer.from(val, encoding);
          }

          // Finally, search either indexOf (if dir is true) or lastIndexOf
          if (Buffer.isBuffer(val)) {
            // Special case: looking for empty string/buffer always fails
            if (val.length === 0) {
              return -1;
            }
            return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
          } else if (typeof val === 'number') {
            val = val & 0xFF; // Search for a byte value [0-255]
            if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
              if (dir) {
                return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
              } else {
                return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
              }
            }
            return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
          }

          throw new TypeError('val must be string, number or Buffer');
        }

        function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
          var indexSize = 1;
          var arrLength = arr.length;
          var valLength = val.length;

          if (encoding !== undefined) {
            encoding = String(encoding).toLowerCase();
            if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
              if (arr.length < 2 || val.length < 2) {
                return -1;
              }
              indexSize = 2;
              arrLength /= 2;
              valLength /= 2;
              byteOffset /= 2;
            }
          }

          function read(buf, i) {
            if (indexSize === 1) {
              return buf[i];
            } else {
              return buf.readUInt16BE(i * indexSize);
            }
          }

          var i;
          if (dir) {
            var foundIndex = -1;
            for (i = byteOffset; i < arrLength; i++) {
              if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
                if (foundIndex === -1) foundIndex = i;
                if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
              } else {
                if (foundIndex !== -1) i -= i - foundIndex;
                foundIndex = -1;
              }
            }
          } else {
            if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
            for (i = byteOffset; i >= 0; i--) {
              var found = true;
              for (var j = 0; j < valLength; j++) {
                if (read(arr, i + j) !== read(val, j)) {
                  found = false;
                  break;
                }
              }
              if (found) return i;
            }
          }

          return -1;
        }

        Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
          return this.indexOf(val, byteOffset, encoding) !== -1;
        };

        Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
          return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
        };

        Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
          return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
        };

        function hexWrite(buf, string, offset, length) {
          offset = Number(offset) || 0;
          var remaining = buf.length - offset;
          if (!length) {
            length = remaining;
          } else {
            length = Number(length);
            if (length > remaining) {
              length = remaining;
            }
          }

          // must be an even number of digits
          var strLen = string.length;
          if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

          if (length > strLen / 2) {
            length = strLen / 2;
          }
          for (var i = 0; i < length; ++i) {
            var parsed = parseInt(string.substr(i * 2, 2), 16);
            if (isNaN(parsed)) return i;
            buf[offset + i] = parsed;
          }
          return i;
        }

        function utf8Write(buf, string, offset, length) {
          return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
        }

        function asciiWrite(buf, string, offset, length) {
          return blitBuffer(asciiToBytes(string), buf, offset, length);
        }

        function latin1Write(buf, string, offset, length) {
          return asciiWrite(buf, string, offset, length);
        }

        function base64Write(buf, string, offset, length) {
          return blitBuffer(base64ToBytes(string), buf, offset, length);
        }

        function ucs2Write(buf, string, offset, length) {
          return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
        }

        Buffer.prototype.write = function write(string, offset, length, encoding) {
          // Buffer#write(string)
          if (offset === undefined) {
            encoding = 'utf8';
            length = this.length;
            offset = 0;
            // Buffer#write(string, encoding)
          } else if (length === undefined && typeof offset === 'string') {
            encoding = offset;
            length = this.length;
            offset = 0;
            // Buffer#write(string, offset[, length][, encoding])
          } else if (isFinite(offset)) {
            offset = offset | 0;
            if (isFinite(length)) {
              length = length | 0;
              if (encoding === undefined) encoding = 'utf8';
            } else {
              encoding = length;
              length = undefined;
            }
            // legacy write(string, encoding, offset, length) - remove in v0.13
          } else {
            throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
          }

          var remaining = this.length - offset;
          if (length === undefined || length > remaining) length = remaining;

          if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
            throw new RangeError('Attempt to write outside buffer bounds');
          }

          if (!encoding) encoding = 'utf8';

          var loweredCase = false;
          for (;;) {
            switch (encoding) {
              case 'hex':
                return hexWrite(this, string, offset, length);

              case 'utf8':
              case 'utf-8':
                return utf8Write(this, string, offset, length);

              case 'ascii':
                return asciiWrite(this, string, offset, length);

              case 'latin1':
              case 'binary':
                return latin1Write(this, string, offset, length);

              case 'base64':
                // Warning: maxLength not taken into account in base64Write
                return base64Write(this, string, offset, length);

              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return ucs2Write(this, string, offset, length);

              default:
                if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
                encoding = ('' + encoding).toLowerCase();
                loweredCase = true;
            }
          }
        };

        Buffer.prototype.toJSON = function toJSON() {
          return {
            type: 'Buffer',
            data: Array.prototype.slice.call(this._arr || this, 0)
          };
        };

        function base64Slice(buf, start, end) {
          if (start === 0 && end === buf.length) {
            return base64.fromByteArray(buf);
          } else {
            return base64.fromByteArray(buf.slice(start, end));
          }
        }

        function utf8Slice(buf, start, end) {
          end = Math.min(buf.length, end);
          var res = [];

          var i = start;
          while (i < end) {
            var firstByte = buf[i];
            var codePoint = null;
            var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

            if (i + bytesPerSequence <= end) {
              var secondByte, thirdByte, fourthByte, tempCodePoint;

              switch (bytesPerSequence) {
                case 1:
                  if (firstByte < 0x80) {
                    codePoint = firstByte;
                  }
                  break;
                case 2:
                  secondByte = buf[i + 1];
                  if ((secondByte & 0xC0) === 0x80) {
                    tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                    if (tempCodePoint > 0x7F) {
                      codePoint = tempCodePoint;
                    }
                  }
                  break;
                case 3:
                  secondByte = buf[i + 1];
                  thirdByte = buf[i + 2];
                  if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                    tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                    if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                      codePoint = tempCodePoint;
                    }
                  }
                  break;
                case 4:
                  secondByte = buf[i + 1];
                  thirdByte = buf[i + 2];
                  fourthByte = buf[i + 3];
                  if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                    tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                    if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                      codePoint = tempCodePoint;
                    }
                  }
              }
            }

            if (codePoint === null) {
              // we did not generate a valid codePoint so insert a
              // replacement char (U+FFFD) and advance only 1 byte
              codePoint = 0xFFFD;
              bytesPerSequence = 1;
            } else if (codePoint > 0xFFFF) {
              // encode to utf16 (surrogate pair dance)
              codePoint -= 0x10000;
              res.push(codePoint >>> 10 & 0x3FF | 0xD800);
              codePoint = 0xDC00 | codePoint & 0x3FF;
            }

            res.push(codePoint);
            i += bytesPerSequence;
          }

          return decodeCodePointsArray(res);
        }

        // Based on http://stackoverflow.com/a/22747272/680742, the browser with
        // the lowest limit is Chrome, with 0x10000 args.
        // We go 1 magnitude less, for safety
        var MAX_ARGUMENTS_LENGTH = 0x1000;

        function decodeCodePointsArray(codePoints) {
          var len = codePoints.length;
          if (len <= MAX_ARGUMENTS_LENGTH) {
            return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
          }

          // Decode in chunks to avoid "call stack size exceeded".
          var res = '';
          var i = 0;
          while (i < len) {
            res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
          }
          return res;
        }

        function asciiSlice(buf, start, end) {
          var ret = '';
          end = Math.min(buf.length, end);

          for (var i = start; i < end; ++i) {
            ret += String.fromCharCode(buf[i] & 0x7F);
          }
          return ret;
        }

        function latin1Slice(buf, start, end) {
          var ret = '';
          end = Math.min(buf.length, end);

          for (var i = start; i < end; ++i) {
            ret += String.fromCharCode(buf[i]);
          }
          return ret;
        }

        function hexSlice(buf, start, end) {
          var len = buf.length;

          if (!start || start < 0) start = 0;
          if (!end || end < 0 || end > len) end = len;

          var out = '';
          for (var i = start; i < end; ++i) {
            out += toHex(buf[i]);
          }
          return out;
        }

        function utf16leSlice(buf, start, end) {
          var bytes = buf.slice(start, end);
          var res = '';
          for (var i = 0; i < bytes.length; i += 2) {
            res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
          }
          return res;
        }

        Buffer.prototype.slice = function slice(start, end) {
          var len = this.length;
          start = ~~start;
          end = end === undefined ? len : ~~end;

          if (start < 0) {
            start += len;
            if (start < 0) start = 0;
          } else if (start > len) {
            start = len;
          }

          if (end < 0) {
            end += len;
            if (end < 0) end = 0;
          } else if (end > len) {
            end = len;
          }

          if (end < start) end = start;

          var newBuf;
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            newBuf = this.subarray(start, end);
            newBuf.__proto__ = Buffer.prototype;
          } else {
            var sliceLen = end - start;
            newBuf = new Buffer(sliceLen, undefined);
            for (var i = 0; i < sliceLen; ++i) {
              newBuf[i] = this[i + start];
            }
          }

          return newBuf;
        };

        /*
         * Need to make sure that buffer isn't trying to write out of bounds.
         */
        function checkOffset(offset, ext, length) {
          if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
          if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
        }

        Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
          offset = offset | 0;
          byteLength = byteLength | 0;
          if (!noAssert) checkOffset(offset, byteLength, this.length);

          var val = this[offset];
          var mul = 1;
          var i = 0;
          while (++i < byteLength && (mul *= 0x100)) {
            val += this[offset + i] * mul;
          }

          return val;
        };

        Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
          offset = offset | 0;
          byteLength = byteLength | 0;
          if (!noAssert) {
            checkOffset(offset, byteLength, this.length);
          }

          var val = this[offset + --byteLength];
          var mul = 1;
          while (byteLength > 0 && (mul *= 0x100)) {
            val += this[offset + --byteLength] * mul;
          }

          return val;
        };

        Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 1, this.length);
          return this[offset];
        };

        Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 2, this.length);
          return this[offset] | this[offset + 1] << 8;
        };

        Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 2, this.length);
          return this[offset] << 8 | this[offset + 1];
        };

        Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 4, this.length);

          return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
        };

        Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 4, this.length);

          return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
        };

        Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
          offset = offset | 0;
          byteLength = byteLength | 0;
          if (!noAssert) checkOffset(offset, byteLength, this.length);

          var val = this[offset];
          var mul = 1;
          var i = 0;
          while (++i < byteLength && (mul *= 0x100)) {
            val += this[offset + i] * mul;
          }
          mul *= 0x80;

          if (val >= mul) val -= Math.pow(2, 8 * byteLength);

          return val;
        };

        Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
          offset = offset | 0;
          byteLength = byteLength | 0;
          if (!noAssert) checkOffset(offset, byteLength, this.length);

          var i = byteLength;
          var mul = 1;
          var val = this[offset + --i];
          while (i > 0 && (mul *= 0x100)) {
            val += this[offset + --i] * mul;
          }
          mul *= 0x80;

          if (val >= mul) val -= Math.pow(2, 8 * byteLength);

          return val;
        };

        Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 1, this.length);
          if (!(this[offset] & 0x80)) return this[offset];
          return (0xff - this[offset] + 1) * -1;
        };

        Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 2, this.length);
          var val = this[offset] | this[offset + 1] << 8;
          return val & 0x8000 ? val | 0xFFFF0000 : val;
        };

        Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 2, this.length);
          var val = this[offset + 1] | this[offset] << 8;
          return val & 0x8000 ? val | 0xFFFF0000 : val;
        };

        Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 4, this.length);

          return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
        };

        Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 4, this.length);

          return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
        };

        Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 4, this.length);
          return ieee754.read(this, offset, true, 23, 4);
        };

        Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 4, this.length);
          return ieee754.read(this, offset, false, 23, 4);
        };

        Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 8, this.length);
          return ieee754.read(this, offset, true, 52, 8);
        };

        Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
          if (!noAssert) checkOffset(offset, 8, this.length);
          return ieee754.read(this, offset, false, 52, 8);
        };

        function checkInt(buf, value, offset, ext, max, min) {
          if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
          if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
          if (offset + ext > buf.length) throw new RangeError('Index out of range');
        }

        Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
          value = +value;
          offset = offset | 0;
          byteLength = byteLength | 0;
          if (!noAssert) {
            var maxBytes = Math.pow(2, 8 * byteLength) - 1;
            checkInt(this, value, offset, byteLength, maxBytes, 0);
          }

          var mul = 1;
          var i = 0;
          this[offset] = value & 0xFF;
          while (++i < byteLength && (mul *= 0x100)) {
            this[offset + i] = value / mul & 0xFF;
          }

          return offset + byteLength;
        };

        Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
          value = +value;
          offset = offset | 0;
          byteLength = byteLength | 0;
          if (!noAssert) {
            var maxBytes = Math.pow(2, 8 * byteLength) - 1;
            checkInt(this, value, offset, byteLength, maxBytes, 0);
          }

          var i = byteLength - 1;
          var mul = 1;
          this[offset + i] = value & 0xFF;
          while (--i >= 0 && (mul *= 0x100)) {
            this[offset + i] = value / mul & 0xFF;
          }

          return offset + byteLength;
        };

        Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
          if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
          this[offset] = value & 0xff;
          return offset + 1;
        };

        function objectWriteUInt16(buf, value, offset, littleEndian) {
          if (value < 0) value = 0xffff + value + 1;
          for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
            buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
          }
        }

        Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = value & 0xff;
            this[offset + 1] = value >>> 8;
          } else {
            objectWriteUInt16(this, value, offset, true);
          }
          return offset + 2;
        };

        Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = value >>> 8;
            this[offset + 1] = value & 0xff;
          } else {
            objectWriteUInt16(this, value, offset, false);
          }
          return offset + 2;
        };

        function objectWriteUInt32(buf, value, offset, littleEndian) {
          if (value < 0) value = 0xffffffff + value + 1;
          for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
            buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
          }
        }

        Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset + 3] = value >>> 24;
            this[offset + 2] = value >>> 16;
            this[offset + 1] = value >>> 8;
            this[offset] = value & 0xff;
          } else {
            objectWriteUInt32(this, value, offset, true);
          }
          return offset + 4;
        };

        Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = value >>> 24;
            this[offset + 1] = value >>> 16;
            this[offset + 2] = value >>> 8;
            this[offset + 3] = value & 0xff;
          } else {
            objectWriteUInt32(this, value, offset, false);
          }
          return offset + 4;
        };

        Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) {
            var limit = Math.pow(2, 8 * byteLength - 1);

            checkInt(this, value, offset, byteLength, limit - 1, -limit);
          }

          var i = 0;
          var mul = 1;
          var sub = 0;
          this[offset] = value & 0xFF;
          while (++i < byteLength && (mul *= 0x100)) {
            if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
              sub = 1;
            }
            this[offset + i] = (value / mul >> 0) - sub & 0xFF;
          }

          return offset + byteLength;
        };

        Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) {
            var limit = Math.pow(2, 8 * byteLength - 1);

            checkInt(this, value, offset, byteLength, limit - 1, -limit);
          }

          var i = byteLength - 1;
          var mul = 1;
          var sub = 0;
          this[offset + i] = value & 0xFF;
          while (--i >= 0 && (mul *= 0x100)) {
            if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
              sub = 1;
            }
            this[offset + i] = (value / mul >> 0) - sub & 0xFF;
          }

          return offset + byteLength;
        };

        Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
          if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
          if (value < 0) value = 0xff + value + 1;
          this[offset] = value & 0xff;
          return offset + 1;
        };

        Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = value & 0xff;
            this[offset + 1] = value >>> 8;
          } else {
            objectWriteUInt16(this, value, offset, true);
          }
          return offset + 2;
        };

        Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = value >>> 8;
            this[offset + 1] = value & 0xff;
          } else {
            objectWriteUInt16(this, value, offset, false);
          }
          return offset + 2;
        };

        Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = value & 0xff;
            this[offset + 1] = value >>> 8;
            this[offset + 2] = value >>> 16;
            this[offset + 3] = value >>> 24;
          } else {
            objectWriteUInt32(this, value, offset, true);
          }
          return offset + 4;
        };

        Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
          if (value < 0) value = 0xffffffff + value + 1;
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = value >>> 24;
            this[offset + 1] = value >>> 16;
            this[offset + 2] = value >>> 8;
            this[offset + 3] = value & 0xff;
          } else {
            objectWriteUInt32(this, value, offset, false);
          }
          return offset + 4;
        };

        function checkIEEE754(buf, value, offset, ext, max, min) {
          if (offset + ext > buf.length) throw new RangeError('Index out of range');
          if (offset < 0) throw new RangeError('Index out of range');
        }

        function writeFloat(buf, value, offset, littleEndian, noAssert) {
          if (!noAssert) {
            checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
          }
          ieee754.write(buf, value, offset, littleEndian, 23, 4);
          return offset + 4;
        }

        Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
          return writeFloat(this, value, offset, true, noAssert);
        };

        Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
          return writeFloat(this, value, offset, false, noAssert);
        };

        function writeDouble(buf, value, offset, littleEndian, noAssert) {
          if (!noAssert) {
            checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
          }
          ieee754.write(buf, value, offset, littleEndian, 52, 8);
          return offset + 8;
        }

        Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
          return writeDouble(this, value, offset, true, noAssert);
        };

        Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
          return writeDouble(this, value, offset, false, noAssert);
        };

        // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
        Buffer.prototype.copy = function copy(target, targetStart, start, end) {
          if (!start) start = 0;
          if (!end && end !== 0) end = this.length;
          if (targetStart >= target.length) targetStart = target.length;
          if (!targetStart) targetStart = 0;
          if (end > 0 && end < start) end = start;

          // Copy 0 bytes; we're done
          if (end === start) return 0;
          if (target.length === 0 || this.length === 0) return 0;

          // Fatal error conditions
          if (targetStart < 0) {
            throw new RangeError('targetStart out of bounds');
          }
          if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
          if (end < 0) throw new RangeError('sourceEnd out of bounds');

          // Are we oob?
          if (end > this.length) end = this.length;
          if (target.length - targetStart < end - start) {
            end = target.length - targetStart + start;
          }

          var len = end - start;
          var i;

          if (this === target && start < targetStart && targetStart < end) {
            // descending copy from end
            for (i = len - 1; i >= 0; --i) {
              target[i + targetStart] = this[i + start];
            }
          } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
            // ascending copy from start
            for (i = 0; i < len; ++i) {
              target[i + targetStart] = this[i + start];
            }
          } else {
            Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
          }

          return len;
        };

        // Usage:
        //    buffer.fill(number[, offset[, end]])
        //    buffer.fill(buffer[, offset[, end]])
        //    buffer.fill(string[, offset[, end]][, encoding])
        Buffer.prototype.fill = function fill(val, start, end, encoding) {
          // Handle string cases:
          if (typeof val === 'string') {
            if (typeof start === 'string') {
              encoding = start;
              start = 0;
              end = this.length;
            } else if (typeof end === 'string') {
              encoding = end;
              end = this.length;
            }
            if (val.length === 1) {
              var code = val.charCodeAt(0);
              if (code < 256) {
                val = code;
              }
            }
            if (encoding !== undefined && typeof encoding !== 'string') {
              throw new TypeError('encoding must be a string');
            }
            if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
              throw new TypeError('Unknown encoding: ' + encoding);
            }
          } else if (typeof val === 'number') {
            val = val & 255;
          }

          // Invalid ranges are not set to a default, so can range check early.
          if (start < 0 || this.length < start || this.length < end) {
            throw new RangeError('Out of range index');
          }

          if (end <= start) {
            return this;
          }

          start = start >>> 0;
          end = end === undefined ? this.length : end >>> 0;

          if (!val) val = 0;

          var i;
          if (typeof val === 'number') {
            for (i = start; i < end; ++i) {
              this[i] = val;
            }
          } else {
            var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
            var len = bytes.length;
            for (i = 0; i < end - start; ++i) {
              this[i + start] = bytes[i % len];
            }
          }

          return this;
        };

        // HELPER FUNCTIONS
        // ================

        var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

        function base64clean(str) {
          // Node strips out invalid characters like \n and \t from the string, base64-js does not
          str = stringtrim(str).replace(INVALID_BASE64_RE, '');
          // Node converts strings with length < 2 to ''
          if (str.length < 2) return '';
          // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
          while (str.length % 4 !== 0) {
            str = str + '=';
          }
          return str;
        }

        function stringtrim(str) {
          if (str.trim) return str.trim();
          return str.replace(/^\s+|\s+$/g, '');
        }

        function toHex(n) {
          if (n < 16) return '0' + n.toString(16);
          return n.toString(16);
        }

        function utf8ToBytes(string, units) {
          units = units || Infinity;
          var codePoint;
          var length = string.length;
          var leadSurrogate = null;
          var bytes = [];

          for (var i = 0; i < length; ++i) {
            codePoint = string.charCodeAt(i);

            // is surrogate component
            if (codePoint > 0xD7FF && codePoint < 0xE000) {
              // last char was a lead
              if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                  // unexpected trail
                  if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                  continue;
                } else if (i + 1 === length) {
                  // unpaired lead
                  if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                  continue;
                }

                // valid lead
                leadSurrogate = codePoint;

                continue;
              }

              // 2 leads in a row
              if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
              }

              // valid surrogate pair
              codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
            } else if (leadSurrogate) {
              // valid bmp char, but last char was a lead
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            }

            leadSurrogate = null;

            // encode utf8
            if (codePoint < 0x80) {
              if ((units -= 1) < 0) break;
              bytes.push(codePoint);
            } else if (codePoint < 0x800) {
              if ((units -= 2) < 0) break;
              bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
            } else if (codePoint < 0x10000) {
              if ((units -= 3) < 0) break;
              bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
            } else if (codePoint < 0x110000) {
              if ((units -= 4) < 0) break;
              bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
            } else {
              throw new Error('Invalid code point');
            }
          }

          return bytes;
        }

        function asciiToBytes(str) {
          var byteArray = [];
          for (var i = 0; i < str.length; ++i) {
            // Node's code seems to be doing this and not & 0x7F..
            byteArray.push(str.charCodeAt(i) & 0xFF);
          }
          return byteArray;
        }

        function utf16leToBytes(str, units) {
          var c, hi, lo;
          var byteArray = [];
          for (var i = 0; i < str.length; ++i) {
            if ((units -= 2) < 0) break;

            c = str.charCodeAt(i);
            hi = c >> 8;
            lo = c % 256;
            byteArray.push(lo);
            byteArray.push(hi);
          }

          return byteArray;
        }

        function base64ToBytes(str) {
          return base64.toByteArray(base64clean(str));
        }

        function blitBuffer(src, dst, offset, length) {
          for (var i = 0; i < length; ++i) {
            if (i + offset >= dst.length || i >= src.length) break;
            dst[i + offset] = src[i];
          }
          return i;
        }

        function isnan(val) {
          return val !== val; // eslint-disable-line no-self-compare
        }

        /* WEBPACK VAR INJECTION */
      }).call(exports, __webpack_require__(0));

      /***/
    },
    /* 27 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      exports.byteLength = byteLength;
      exports.toByteArray = toByteArray;
      exports.fromByteArray = fromByteArray;

      var lookup = [];
      var revLookup = [];
      var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

      var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
      for (var i = 0, len = code.length; i < len; ++i) {
        lookup[i] = code[i];
        revLookup[code.charCodeAt(i)] = i;
      }

      // Support decoding URL-safe base64 strings, as Node.js does.
      // See: https://en.wikipedia.org/wiki/Base64#URL_applications
      revLookup['-'.charCodeAt(0)] = 62;
      revLookup['_'.charCodeAt(0)] = 63;

      function placeHoldersCount(b64) {
        var len = b64.length;
        if (len % 4 > 0) {
          throw new Error('Invalid string. Length must be a multiple of 4');
        }

        // the number of equal signs (place holders)
        // if there are two placeholders, than the two characters before it
        // represent one byte
        // if there is only one, then the three characters before it represent 2 bytes
        // this is just a cheap hack to not do indexOf twice
        return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;
      }

      function byteLength(b64) {
        // base64 is 4/3 + up to two characters of the original data
        return b64.length * 3 / 4 - placeHoldersCount(b64);
      }

      function toByteArray(b64) {
        var i, l, tmp, placeHolders, arr;
        var len = b64.length;
        placeHolders = placeHoldersCount(b64);

        arr = new Arr(len * 3 / 4 - placeHolders);

        // if there are placeholders, only get up to the last complete 4 chars
        l = placeHolders > 0 ? len - 4 : len;

        var L = 0;

        for (i = 0; i < l; i += 4) {
          tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
          arr[L++] = tmp >> 16 & 0xFF;
          arr[L++] = tmp >> 8 & 0xFF;
          arr[L++] = tmp & 0xFF;
        }

        if (placeHolders === 2) {
          tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
          arr[L++] = tmp & 0xFF;
        } else if (placeHolders === 1) {
          tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
          arr[L++] = tmp >> 8 & 0xFF;
          arr[L++] = tmp & 0xFF;
        }

        return arr;
      }

      function tripletToBase64(num) {
        return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
      }

      function encodeChunk(uint8, start, end) {
        var tmp;
        var output = [];
        for (var i = start; i < end; i += 3) {
          tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
          output.push(tripletToBase64(tmp));
        }
        return output.join('');
      }

      function fromByteArray(uint8) {
        var tmp;
        var len = uint8.length;
        var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
        var output = '';
        var parts = [];
        var maxChunkLength = 16383; // must be multiple of 3

        // go through the array every three bytes, we'll deal with trailing stuff later
        for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
          parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
        }

        // pad the end with zeros, but make sure to not forget the extra bytes
        if (extraBytes === 1) {
          tmp = uint8[len - 1];
          output += lookup[tmp >> 2];
          output += lookup[tmp << 4 & 0x3F];
          output += '==';
        } else if (extraBytes === 2) {
          tmp = (uint8[len - 2] << 8) + uint8[len - 1];
          output += lookup[tmp >> 10];
          output += lookup[tmp >> 4 & 0x3F];
          output += lookup[tmp << 2 & 0x3F];
          output += '=';
        }

        parts.push(output);

        return parts.join('');
      }

      /***/
    },
    /* 28 */
    /***/function (module, exports) {

      exports.read = function (buffer, offset, isLE, mLen, nBytes) {
        var e, m;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var nBits = -7;
        var i = isLE ? nBytes - 1 : 0;
        var d = isLE ? -1 : 1;
        var s = buffer[offset + i];

        i += d;

        e = s & (1 << -nBits) - 1;
        s >>= -nBits;
        nBits += eLen;
        for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

        m = e & (1 << -nBits) - 1;
        e >>= -nBits;
        nBits += mLen;
        for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

        if (e === 0) {
          e = 1 - eBias;
        } else if (e === eMax) {
          return m ? NaN : (s ? -1 : 1) * Infinity;
        } else {
          m = m + Math.pow(2, mLen);
          e = e - eBias;
        }
        return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
      };

      exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
        var e, m, c;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
        var i = isLE ? 0 : nBytes - 1;
        var d = isLE ? 1 : -1;
        var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;

        value = Math.abs(value);

        if (isNaN(value) || value === Infinity) {
          m = isNaN(value) ? 1 : 0;
          e = eMax;
        } else {
          e = Math.floor(Math.log(value) / Math.LN2);
          if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
          }
          if (e + eBias >= 1) {
            value += rt / c;
          } else {
            value += rt * Math.pow(2, 1 - eBias);
          }
          if (value * c >= 2) {
            e++;
            c /= 2;
          }

          if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
          } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
          } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
          }
        }

        for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

        e = e << mLen | m;
        eLen += mLen;
        for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

        buffer[offset + i - d] |= s * 128;
      };

      /***/
    },
    /* 29 */
    /***/function (module, exports) {

      var toString = {}.toString;

      module.exports = Array.isArray || function (arr) {
        return toString.call(arr) == '[object Array]';
      };

      /***/
    },
    /* 30 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var EventEmitter = __webpack_require__(3);
      var pull = __webpack_require__(11);
      var Pushable = __webpack_require__(52);

      var PROTOCOL = __webpack_require__(10);
      var encoding = __webpack_require__(16);

      module.exports = function (_EventEmitter2) {
        (0, _inherits3.default)(Connection, _EventEmitter2);

        function Connection(id, ipfs, room) {
          (0, _classCallCheck3.default)(this, Connection);

          var _this8 = (0, _possibleConstructorReturn3.default)(this, (Connection.__proto__ || (0, _getPrototypeOf2.default)(Connection)).call(this));

          _this8._id = id;
          _this8._ipfs = ipfs;
          _this8._room = room;
          _this8._connection = null;
          _this8._connecting = false;
          return _this8;
        }

        (0, _createClass3.default)(Connection, [{
          key: 'push',
          value: function push(message) {
            var _this9 = this;

            if (this._connection) {
              this._connection.push(encoding(message));
            } else {
              this.once('connect', function () {
                return _this9.push(message);
              });
              if (!this._connecting) {
                this._getConnection();
              }
            }
          }
        }, {
          key: 'stop',
          value: function stop() {
            if (this._connection) {
              this._connection.end();
            }
          }
        }, {
          key: '_getConnection',
          value: function _getConnection() {
            var _this10 = this;

            this._connecting = true;
            this._getPeerAddresses(this._id, function (err, peerAddresses) {
              if (err) {
                _this10.emit('error', err);
                return; // early
              }

              if (!peerAddresses.length) {
                _this10.emit('disconnect');
                return; // early
              }

              _this10._ipfs._libp2pNode.dial(peerAddresses[0], PROTOCOL, function (err, conn) {
                if (err) {
                  _this10.emit('disconnect');
                  return; // early
                }
                _this10._connecting = false;
                var pushable = Pushable();
                _this10._connection = pushable;
                pull(pushable, conn, pull.onEnd(function () {
                  delete _this10._connection;
                  _this10.emit('disconnect');
                }));
                _this10.emit('connect', pushable);
              });
            });
          }
        }, {
          key: '_getPeerAddresses',
          value: function _getPeerAddresses(peerId, callback) {
            this._ipfs.swarm.peers(function (err, peersAddresses) {
              if (err) {
                callback(err);
                return; // early
              }

              callback(null, peersAddresses.filter(function (peerAddress) {
                return peerAddress.peer.id.toB58String() === peerId;
              }).map(function (peerAddress) {
                return peerAddress.peer;
              }));
            });
          }
        }]);
        return Connection;
      }(EventEmitter);

      /***/
    },
    /* 31 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      module.exports = {
        keys: __webpack_require__(32),
        once: __webpack_require__(13),
        values: __webpack_require__(5),
        count: __webpack_require__(33),
        infinite: __webpack_require__(34),
        empty: __webpack_require__(35),
        error: __webpack_require__(36)

        /***/ };
    },
    /* 32 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var values = __webpack_require__(5);
      module.exports = function (object) {
        return values((0, _keys2.default)(object));
      };

      /***/
    },
    /* 33 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      module.exports = function count(max) {
        var i = 0;max = max || Infinity;
        return function (end, cb) {
          if (end) return cb && cb(end);
          if (i > max) return cb(true);
          cb(null, i++);
        };
      };

      /***/
    },
    /* 34 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      module.exports = function infinite(generate) {
        generate = generate || Math.random;
        return function (end, cb) {
          if (end) return cb && cb(end);
          return cb(null, generate());
        };
      };

      /***/
    },
    /* 35 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      //a stream that ends immediately.

      module.exports = function empty() {
        return function (abort, cb) {
          cb(true);
        };
      };

      /***/
    },
    /* 36 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      //a stream that errors immediately.

      module.exports = function error(err) {
        return function (abort, cb) {
          cb(err);
        };
      };

      /***/
    },
    /* 37 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      module.exports = {
        drain: __webpack_require__(1),
        onEnd: __webpack_require__(38),
        log: __webpack_require__(39),
        find: __webpack_require__(40),
        reduce: __webpack_require__(6),
        collect: __webpack_require__(41),
        concat: __webpack_require__(42)

        /***/ };
    },
    /* 38 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var drain = __webpack_require__(1);

      module.exports = function onEnd(done) {
        return drain(null, done);
      };

      /***/
    },
    /* 39 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var drain = __webpack_require__(1);

      module.exports = function log(done) {
        return drain(function (data) {
          console.log(data);
        }, done);
      };

      /***/
    },
    /* 40 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      function id(e) {
        return e;
      }
      var prop = __webpack_require__(2);
      var drain = __webpack_require__(1);

      module.exports = function find(test, cb) {
        var ended = false;
        if (!cb) cb = test, test = id;else test = prop(test) || id;

        return drain(function (data) {
          if (test(data)) {
            ended = true;
            cb(null, data);
            return false;
          }
        }, function (err) {
          if (ended) return; //already called back
          cb(err === true ? null : err, null);
        });
      };

      /***/
    },
    /* 41 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var reduce = __webpack_require__(6);

      module.exports = function collect(cb) {
        return reduce(function (arr, item) {
          arr.push(item);
          return arr;
        }, [], cb);
      };

      /***/
    },
    /* 42 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var reduce = __webpack_require__(6);

      module.exports = function concat(cb) {
        return reduce(function (a, b) {
          return a + b;
        }, '', cb);
      };

      /***/
    },
    /* 43 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      module.exports = {
        map: __webpack_require__(44),
        asyncMap: __webpack_require__(45),
        filter: __webpack_require__(7),
        filterNot: __webpack_require__(46),
        through: __webpack_require__(47),
        take: __webpack_require__(48),
        unique: __webpack_require__(15),
        nonUnique: __webpack_require__(49),
        flatten: __webpack_require__(50)

        /***/ };
    },
    /* 44 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      function id(e) {
        return e;
      }
      var prop = __webpack_require__(2);

      module.exports = function map(mapper) {
        if (!mapper) return id;
        mapper = prop(mapper);
        return function (read) {
          return function (abort, cb) {
            read(abort, function (end, data) {
              try {
                data = !end ? mapper(data) : null;
              } catch (err) {
                return read(err, function () {
                  return cb(err);
                });
              }
              cb(end, data);
            });
          };
        };
      };

      /***/
    },
    /* 45 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      function id(e) {
        return e;
      }
      var prop = __webpack_require__(2);

      module.exports = function asyncMap(map) {
        if (!map) return id;
        map = prop(map);
        var busy = false,
            abortCb,
            aborted;
        return function (read) {
          return function next(abort, cb) {
            if (aborted) return cb(aborted);
            if (abort) {
              aborted = abort;
              if (!busy) read(abort, function (err) {
                //incase the source has already ended normally,
                //we should pass our own error.
                cb(abort);
              });else read(abort, function (err) {
                //if we are still busy, wait for the mapper to complete.
                if (busy) abortCb = cb;else cb(abort);
              });
            } else read(null, function (end, data) {
              if (end) cb(end);else if (aborted) cb(aborted);else {
                busy = true;
                map(data, function (err, data) {
                  busy = false;
                  if (aborted) {
                    cb(aborted);
                    abortCb(aborted);
                  } else if (err) next(err, cb);else cb(null, data);
                });
              }
            });
          };
        };
      };

      /***/
    },
    /* 46 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var tester = __webpack_require__(14);
      var filter = __webpack_require__(7);

      module.exports = function filterNot(test) {
        test = tester(test);
        return filter(function (data) {
          return !test(data);
        });
      };

      /***/
    },
    /* 47 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      //a pass through stream that doesn't change the value.

      module.exports = function through(op, onEnd) {
        var a = false;

        function once(abort) {
          if (a || !onEnd) return;
          a = true;
          onEnd(abort === true ? null : abort);
        }

        return function (read) {
          return function (end, cb) {
            if (end) once(end);
            return read(end, function (end, data) {
              if (!end) op && op(data);else once(end);
              cb(end, data);
            });
          };
        };
      };

      /***/
    },
    /* 48 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      //read a number of items and then stop.

      module.exports = function take(test, opts) {
        opts = opts || {};
        var last = opts.last || false; // whether the first item for which !test(item) should still pass
        var ended = false;
        if ('number' === typeof test) {
          last = true;
          var n = test;test = function test() {
            return --n;
          };
        }

        return function (read) {

          function terminate(cb) {
            read(true, function (err) {
              last = false;cb(err || true);
            });
          }

          return function (end, cb) {
            if (ended && !end) last ? terminate(cb) : cb(ended);else if (ended = end) read(ended, cb);else read(null, function (end, data) {
              if (ended = ended || end) {
                //last ? terminate(cb) :
                cb(ended);
              } else if (!test(data)) {
                ended = true;
                last ? cb(null, data) : terminate(cb);
              } else cb(null, data);
            });
          };
        };
      };

      /***/
    },
    /* 49 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var unique = __webpack_require__(15);

      //passes an item through when you see it for the second time.
      module.exports = function nonUnique(field) {
        return unique(field, true);
      };

      /***/
    },
    /* 50 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var values = __webpack_require__(5);
      var once = __webpack_require__(13);

      //convert a stream of arrays or streams into just a stream.
      module.exports = function flatten() {
        return function (read) {
          var _read;
          return function (abort, cb) {
            if (abort) {
              //abort the current stream, and then stream of streams.
              _read ? _read(abort, function (err) {
                read(err || abort, cb);
              }) : read(abort, cb);
            } else if (_read) nextChunk();else nextStream();

            function nextChunk() {
              _read(null, function (err, data) {
                if (err === true) nextStream();else if (err) {
                  read(true, function (abortErr) {
                    // TODO: what do we do with the abortErr?
                    cb(err);
                  });
                } else cb(null, data);
              });
            }
            function nextStream() {
              _read = null;
              read(null, function (end, stream) {
                if (end) return cb(end);
                if (Array.isArray(stream) || stream && 'object' === (typeof stream === 'undefined' ? 'undefined' : (0, _typeof3.default)(stream))) stream = values(stream);else if ('function' != typeof stream) stream = once(stream);
                _read = stream;
                nextChunk();
              });
            }
          };
        };
      };

      /***/
    },
    /* 51 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      module.exports = function pull(a) {
        var length = arguments.length;
        if (typeof a === 'function' && a.length === 1) {
          var args = new Array(length);
          for (var i = 0; i < length; i++) {
            args[i] = arguments[i];
          }return function (read) {
            if (args == null) {
              throw new TypeError("partial sink should only be called once!");
            }

            // Grab the reference after the check, because it's always an array now
            // (engines like that kind of consistency).
            var ref = args;
            args = null;

            // Prioritize common case of small number of pulls.
            switch (length) {
              case 1:
                return pull(read, ref[0]);
              case 2:
                return pull(read, ref[0], ref[1]);
              case 3:
                return pull(read, ref[0], ref[1], ref[2]);
              case 4:
                return pull(read, ref[0], ref[1], ref[2], ref[3]);
              default:
                ref.unshift(read);
                return pull.apply(null, ref);
            }
          };
        }

        var read = a;

        if (read && typeof read.source === 'function') {
          read = read.source;
        }

        for (var i = 1; i < length; i++) {
          var s = arguments[i];
          if (typeof s === 'function') {
            read = s(read);
          } else if (s && (typeof s === 'undefined' ? 'undefined' : (0, _typeof3.default)(s)) === 'object') {
            s.sink(read);
            read = s.source;
          }
        }

        return read;
      };

      /***/
    },
    /* 52 */
    /***/function (module, exports) {

      module.exports = pullPushable;

      function pullPushable(separated, onClose) {
        if (typeof separated === 'function') {
          onClose = separated;
          separated = false;
        }

        // create a buffer for data
        // that have been pushed
        // but not yet pulled.
        var buffer = [];

        // a pushable is a source stream
        // (abort, cb) => cb(end, data)
        //
        // when pushable is pulled,
        // keep references to abort and cb
        // so we can call back after
        // .end(end) or .push(data)
        var abort, cb;
        function read(_abort, _cb) {
          if (_abort) {
            abort = _abort;
            // if there is already a cb waiting, abort it.
            if (cb) callback(abort);
          }
          cb = _cb;
          drain();
        }

        var ended;
        function end(end) {
          ended = ended || end || true;
          // attempt to drain
          drain();
        }

        function push(data) {
          if (ended) return;
          // if sink already waiting,
          // we can call back directly.
          if (cb) {
            callback(abort, data);
            return;
          }
          // otherwise buffer data
          buffer.push(data);
        }

        // Return functions separated from source { push, end, source }
        if (separated) {
          return { push: push, end: end, source: read, buffer: buffer };
        }

        // Return normal
        read.push = push;
        read.end = end;
        read.buffer = buffer;
        return read;

        // `drain` calls back to (if any) waiting
        // sink with abort, end, or next data.
        function drain() {
          if (!cb) return;

          if (abort) callback(abort);else if (!buffer.length && ended) callback(ended);else if (buffer.length) callback(null, buffer.shift());
        }

        // `callback` calls back to waiting sink,
        // and removes references to sink cb.
        function callback(err, val) {
          var _cb = cb;
          // if error and pushable passed onClose, call it
          // the first time this stream ends or errors.
          if (err && onClose) {
            var c = onClose;
            onClose = null;
            c(err === true ? null : err);
          }
          cb = null;
          _cb(err, val);
        }
      }

      /***/
    },
    /* 53 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var pull = __webpack_require__(11);
      var Buffer = __webpack_require__(4).Buffer;
      var EventEmitter = __webpack_require__(3);

      var emitter = new EventEmitter();

      function handler(protocol, conn) {
        conn.getPeerInfo(function (err, peerInfo) {
          if (err) {
            console.log(err);
            return;
          }

          var peerId = peerInfo.id.toB58String();

          pull(conn, pull.map(function (message) {
            var msg = void 0;
            try {
              msg = JSON.parse(message.toString());
            } catch (err) {
              emitter.emit('warning', err.message);
              return; // early
            }

            if (peerId !== msg.from) {
              emitter.emit('warning', 'no peerid match ' + msg.from);
              return; // early
            }

            var topicIDs = msg.topicIDs;
            if (!Array.isArray(topicIDs)) {
              emitter.emit('warning', 'no topic IDs');
              return; // early
            }

            msg.data = Buffer.from(msg.data, 'hex');
            msg.seqno = Buffer.from(msg.seqno, 'hex');

            topicIDs.forEach(function (topic) {
              emitter.emit(topic, msg);
            });

            return msg;
          }), pull.onEnd(function () {
            // do nothing
          }));
        });
      }

      exports = module.exports = {
        handler: handler,
        emitter: emitter

        /***/ };
    }]
    /******/)
  );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(38)(module)))

/***/ }),
/* 1154 */,
/* 1155 */,
/* 1156 */,
/* 1157 */,
/* 1158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SwapOrders = __webpack_require__(1159);

var _SwapOrders2 = _interopRequireDefault(_SwapOrders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SwapOrders2.default;
module.exports = exports['default'];

/***/ }),
/* 1159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(248);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _keys = __webpack_require__(74);

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = __webpack_require__(108);

var _extends3 = _interopRequireDefault(_extends2);

var _bignumber = __webpack_require__(171);

var _bignumber2 = _interopRequireDefault(_bignumber);

var _swap = __webpack_require__(20);

var _swap2 = _interopRequireDefault(_swap);

var _swap3 = __webpack_require__(462);

var _swap4 = _interopRequireDefault(_swap3);

var _aggregation2 = __webpack_require__(1160);

var _aggregation3 = _interopRequireDefault(_aggregation2);

var _events = __webpack_require__(464);

var _events2 = _interopRequireDefault(_events);

var _Order = __webpack_require__(1168);

var _Order2 = _interopRequireDefault(_Order);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getUniqueId = function () {
  var id = Date.now();
  return function () {
    return _swap2.default.services.room.peer + '-' + ++id;
  };
}();

var checkIncomeOrderFormat = function checkIncomeOrderFormat(order) {
  var format = {
    id: '?String',
    owner: (0, _extends3.default)({
      peer: 'String',
      reputation: _swap.util.typeforce.t.maybe(_swap.util.typeforce.isNumeric)
    }, function () {
      var result = {};
      (0, _keys2.default)(_swap.constants.COINS).forEach(function (key) {
        result[key] = _swap.util.typeforce.t.maybe({
          address: _swap.util.typeforce.isCoinAddress[_swap.constants.COINS[key]],
          publicKey: _swap.util.typeforce.isPublicKey[_swap.constants.COINS[key]]
        });
      });
      return result;
    }()),
    buyCurrency: _swap.util.typeforce.isCoinName,
    sellCurrency: _swap.util.typeforce.isCoinName,
    buyAmount: _swap.util.typeforce.isNumeric,
    sellAmount: _swap.util.typeforce.isNumeric,
    exchangeRate: _swap.util.typeforce.t.maybe(_swap.util.typeforce.isNumeric),
    isProcessing: '?Boolean',
    isRequested: '?Boolean'
  };

  var isValid = _swap.util.typeforce.check(format, order, true);

  if (!isValid) {
    console.log('Wrong income order format. Excepted:', format, 'got:', order);
  }

  return isValid;
};

var checkIncomeOrderOwner = function checkIncomeOrderOwner(_ref, fromPeer) {
  var peer = _ref.owner.peer;
  return peer === fromPeer;
};

var checkIncomeOrder = function checkIncomeOrder(order, fromPeer) {
  var isFormatValid = checkIncomeOrderFormat(order);
  var isOwnerValid = checkIncomeOrderOwner(order, fromPeer);

  return isFormatValid && isOwnerValid;
};

var SwapOrders = function (_aggregation) {
  (0, _inherits3.default)(SwapOrders, _aggregation);
  (0, _createClass3.default)(SwapOrders, null, [{
    key: 'name',
    get: function get() {
      return 'orders';
    }
  }]);

  function SwapOrders() {
    (0, _classCallCheck3.default)(this, SwapOrders);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SwapOrders.__proto__ || (0, _getPrototypeOf2.default)(SwapOrders)).call(this));

    _this._handleReady = function () {
      _this._persistMyOrders();
    };

    _this._handleUserOnline = function (peer) {
      var myOrders = _this.getMyOrders();

      if (myOrders.length) {
        // clean orders from other additional props
        myOrders = myOrders.map(function (item) {
          return _swap.util.pullProps(item, 'id', 'owner', 'buyCurrency', 'sellCurrency', 'buyAmount', 'exchangeRate', 'sellAmount', 'isRequested', 'isProcessing');
        });

        _swap2.default.services.room.sendMessage(peer, [{
          event: 'new orders',
          data: {
            orders: myOrders
          }
        }]);
      }
    };

    _this._handleUserOffline = function (peer) {
      var peerOrders = _this.getPeerOrders(peer);

      if (peerOrders.length) {
        peerOrders.forEach(function (_ref2) {
          var id = _ref2.id;

          _this._handleRemove(id);
        });
      }
    };

    _this._handleNewOrders = function (_ref3) {
      var fromPeer = _ref3.fromPeer,
          orders = _ref3.orders;

      // ductape to check if such orders already exist
      var filteredOrders = orders.filter(function (_ref4) {
        var id = _ref4.id,
            peer = _ref4.owner.peer;
        return !_this.getByKey(id) && peer === fromPeer;
      });

      _this._handleMultipleCreate({ orders: filteredOrders, fromPeer: fromPeer });
    };

    _this._handleNewOrder = function (_ref5) {
      var fromPeer = _ref5.fromPeer,
          order = _ref5.order;

      if (order && order.owner && order.owner.peer === fromPeer) {
        if (checkIncomeOrder(order, fromPeer)) {
          _this._handleCreate(order);
        }
      }
    };

    _this._handleRemoveOrder = function (_ref6) {
      var fromPeer = _ref6.fromPeer,
          orderId = _ref6.orderId;

      var order = _this.getByKey(orderId);

      if (order && order.owner && order.owner.peer === fromPeer) {
        _this._handleRemove(orderId);
      }
    };

    _this._serviceName = 'orders';
    _this._dependsOn = [_swap4.default];
    return _this;
  }

  (0, _createClass3.default)(SwapOrders, [{
    key: 'initService',
    value: function initService() {
      _swap2.default.services.room.on('ready', this._handleReady);
      _swap2.default.services.room.on('user online', this._handleUserOnline);
      _swap2.default.services.room.on('user offline', this._handleUserOffline);
      _swap2.default.services.room.on('new orders', this._handleNewOrders);
      _swap2.default.services.room.on('new order', this._handleNewOrder);
      _swap2.default.services.room.on('remove order', this._handleRemoveOrder);
    }
  }, {
    key: '_persistMyOrders',
    value: function _persistMyOrders() {
      var _this2 = this;

      this.getMyOrders().forEach(function (orderData) {
        _this2._handleCreate(orderData);
      });
    }

    /**
     *
     * @param {object} data
     * @param {string} data.id
     * @param {object} data.owner
     * @param {string} data.owner.peer
     * @param {number} data.owner.reputation
     * @param {object} data.owner.<currency>
     * @param {string} data.owner.<currency>.address
     * @param {string} data.owner.<currency>.publicKey
     * @param {string} data.buyCurrency
     * @param {string} data.sellCurrency
     * @param {number} data.buyAmount
     * @param {number} data.sellAmount
     * @param {boolean} data.isProcessing
     * @param {boolean} data.isRequested
     */

  }, {
    key: '_create',
    value: function _create(data) {
      var id = data.id,
          buyAmount = data.buyAmount,
          sellAmount = data.sellAmount,
          buyCurrency = data.buyCurrency,
          sellCurrency = data.sellCurrency,
          rest = (0, _objectWithoutProperties3.default)(data, ['id', 'buyAmount', 'sellAmount', 'buyCurrency', 'sellCurrency']);


      var order = new _Order2.default(this, (0, _extends3.default)({
        id: id || getUniqueId(),
        buyAmount: new _bignumber2.default(String(buyAmount)),
        sellAmount: new _bignumber2.default(String(sellAmount)),
        buyCurrency: buyCurrency.toUpperCase(),
        sellCurrency: sellCurrency.toUpperCase()
      }, rest));

      this.append(order, order.id);

      return order;
    }
  }, {
    key: '_handleCreate',
    value: function _handleCreate(data) {
      var order = this._create(data);

      if (order) {
        _events2.default.dispatch('new order', order);
      }
    }
  }, {
    key: '_handleMultipleCreate',
    value: function _handleMultipleCreate(_ref7) {
      var _this3 = this;

      var orders = _ref7.orders,
          fromPeer = _ref7.fromPeer;

      var newOrders = [];

      orders.forEach(function (data) {
        if (checkIncomeOrder(data, fromPeer)) {
          var order = _this3._create(data);

          newOrders.push(order);
        }
      });

      if (newOrders.length) {
        _events2.default.dispatch('new orders', newOrders);
      }
    }

    /**
     *
     * @param {string} orderId
     */

  }, {
    key: '_handleRemove',
    value: function _handleRemove(orderId) {
      try {
        var order = this.getByKey(orderId);

        if (order) {
          this.removeByKey(orderId);
          _events2.default.dispatch('remove order', order);
        }
      } catch (err) {}
    }
  }, {
    key: '_saveMyOrders',
    value: function _saveMyOrders() {
      var myOrders = this.items.filter(function (_ref8) {
        var peer = _ref8.owner.peer;
        return peer === _swap2.default.services.room.peer;
      });

      // clean orders from other additional props
      // TODO need to add functionality to sync `requests` for users who going offline / online
      // problem: when I going online and persisting my orders need to show only online users requests,
      // but then user comes online need to change status. Ofc we can leave this bcs developers can do this themselves
      // with filters - skip requests where user is offline, but it looks like not very good
      myOrders = myOrders.map(function (item) {
        return _swap.util.pullProps(item, 'id', 'owner', 'buyCurrency', 'sellCurrency', 'buyAmount', 'sellAmount', 'exchangeRate', 'participant', 'requests', 'isRequested', 'isProcessing');
      });

      _swap2.default.env.storage.setItem('myOrders', myOrders);
    }
  }, {
    key: 'getMyOrders',
    value: function getMyOrders() {
      return _swap2.default.env.storage.getItem('myOrders') || [];
    }
  }, {
    key: 'getPeerOrders',
    value: function getPeerOrders(peer) {
      return this.items.filter(function (_ref9) {
        var owner = _ref9.owner;
        return peer === owner.peer;
      });
    }

    /**
     *
     * @param {object} data
     * @param {string} data.buyCurrency
     * @param {string} data.sellCurrency
     * @param {number} data.buyAmount
     * @param {number} data.sellAmount
     */

  }, {
    key: 'create',
    value: function create(data) {
      var order = this._create((0, _extends3.default)({}, data, {
        owner: _swap2.default.services.auth.getPublicData()
      }));
      this._saveMyOrders();

      _swap2.default.services.room.sendMessage([{
        event: 'new order',
        data: {
          order: _swap.util.pullProps(order, 'id', 'owner', 'buyCurrency', 'exchangeRate', 'sellCurrency', 'buyAmount', 'sellAmount', 'isRequested', 'isProcessing')
        }
      }]);
    }

    /**
     *
     * @param {string} orderId
     */

  }, {
    key: 'remove',
    value: function remove(orderId) {
      this.removeByKey(orderId);
      _swap2.default.services.room.sendMessage([{
        event: 'remove order',
        data: {
          orderId: orderId
        }
      }]);
      this._saveMyOrders();
    }
  }, {
    key: 'on',
    value: function on(eventName, handler) {
      _events2.default.subscribe(eventName, handler);
      return this;
    }
  }, {
    key: 'off',
    value: function off(eventName, handler) {
      _events2.default.unsubscribe(eventName, handler);
      return this;
    }
  }]);
  return SwapOrders;
}((0, _aggregation3.default)(_swap.ServiceInterface, _swap.Collection));

exports.default = SwapOrders;
module.exports = exports['default'];

/***/ }),
/* 1160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOwnPropertyDescriptor = __webpack_require__(463);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _defineProperty = __webpack_require__(249);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertySymbols = __webpack_require__(1163);

var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);

var _getOwnPropertyNames = __webpack_require__(1165);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 Allows multiple extending
 */

var aggregation = function aggregation(baseClass) {
  for (var _len = arguments.length, mixins = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    mixins[_key - 1] = arguments[_key];
  }

  var base = function (_baseClass) {
    (0, _inherits3.default)(_Combined, _baseClass);

    function _Combined() {
      var _ref;

      (0, _classCallCheck3.default)(this, _Combined);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = _Combined.__proto__ || (0, _getPrototypeOf2.default)(_Combined)).call.apply(_ref, [this].concat(args)));

      mixins.forEach(function (mixin) {
        mixin.prototype._constructor.call(_this);
      });
      return _this;
    }

    return _Combined;
  }(baseClass);

  var copyProps = function copyProps(target, source) {
    (0, _getOwnPropertyNames2.default)(source).concat((0, _getOwnPropertySymbols2.default)(source)).forEach(function (prop) {
      if (prop.match(/^(?:_?constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/)) {
        return;
      }

      (0, _defineProperty2.default)(target, prop, (0, _getOwnPropertyDescriptor2.default)(source, prop));
    });
  };

  mixins.forEach(function (mixin) {
    copyProps(base.prototype, mixin.prototype);
    copyProps(base, mixin);
  });

  return base;
};

exports.default = aggregation;
module.exports = exports["default"];

/***/ }),
/* 1161 */,
/* 1162 */,
/* 1163 */,
/* 1164 */,
/* 1165 */,
/* 1166 */,
/* 1167 */,
/* 1168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(412);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _keys = __webpack_require__(74);

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = __webpack_require__(108);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

var _swap = __webpack_require__(20);

var _swap2 = _interopRequireDefault(_swap);

var _events = __webpack_require__(464);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Order = function () {

  /**
   *
   * @param {object}  parent
   * @param {object}  data
   * @param {string}  data.id
   * @param {object}  data.owner
   * @param {string}  data.owner.peer
   * @param {number}  data.owner.reputation
   * @param {object}  data.owner.<currency>
   * @param {string}  data.owner.<currency>.address
   * @param {string}  data.owner.<currency>.publicKey
   * @param {string}  data.buyCurrency
   * @param {string}  data.sellCurrency
   * @param {number}  data.buyAmount
   * @param {number}  data.sellAmount
   */
  function Order(parent, data) {
    (0, _classCallCheck3.default)(this, Order);

    this.id = data.id;
    this.isMy = null;
    this.owner = null;
    this.participant = null;
    this.buyCurrency = null;
    this.exchangeRate = null;
    this.sellCurrency = null;
    this.buyAmount = null;
    this.sellAmount = null;

    this.collection = parent;
    this.requests = []; // income requests
    this.isRequested = false; // outcome request status
    this.isProcessing = false; // if swap isProcessing

    this._update((0, _extends3.default)({}, data, {
      isMy: data.owner.peer === _swap2.default.services.room.peer
    }));

    this._onMount();
  }

  (0, _createClass3.default)(Order, [{
    key: '_onMount',
    value: function _onMount() {
      var _this = this;

      _swap2.default.services.room.on('request swap', function (_ref) {
        var orderId = _ref.orderId,
            participant = _ref.participant;

        if (orderId === _this.id && !_this.requests.find(function (_ref2) {
          var peer = _ref2.peer;
          return peer === participant.peer;
        })) {
          _this.requests.push(participant);

          _events2.default.dispatch('new order request', {
            orderId: orderId,
            participant: participant
          });
        }
      });
    }
  }, {
    key: '_update',
    value: function _update(values) {
      var _this2 = this;

      (0, _keys2.default)(values).forEach(function (key) {
        _this2[key] = values[key];
      });
    }
  }, {
    key: 'update',
    value: function update(values) {
      this._update(values);
      this.collection._saveMyOrders();

      _events2.default.dispatch('swap update', this, values);
    }

    /**
     *
     * @param callback - awaiting for response - accept / decline
     */

  }, {
    key: 'sendRequest',
    value: function sendRequest(callback) {
      var self = this;

      if (_swap2.default.services.room.peer === this.owner.peer) {
        console.warn('You are the owner of this Order. You can\'t send request to yourself.');
        return;
      }

      if (this.isRequested) {
        console.warn('You have already requested this swap.');
        return;
      }

      this.update({
        isRequested: true
      });

      _swap2.default.services.room.sendMessage(this.owner.peer, [{
        event: 'request swap',
        data: {
          orderId: this.id,
          // TODO why do we send this info?
          participant: _swap2.default.services.auth.getPublicData()
        }
      }]);

      _swap2.default.services.room.on('accept swap request', function (_ref3) {
        var orderId = _ref3.orderId;

        if (orderId === self.id) {
          this.unsubscribe();

          self.update({
            isProcessing: true,
            isRequested: false
          });

          callback(true);
        }
      });

      _swap2.default.services.room.on('decline swap request', function (_ref4) {
        var orderId = _ref4.orderId;

        if (orderId === self.id) {
          this.unsubscribe();

          self.update({
            isRequested: false
          });

          // TODO think about preventing user from sent requests every N seconds
          callback(false);
        }
      });
    }
  }, {
    key: 'acceptRequest',
    value: function acceptRequest(participantPeer) {
      var participant = this.requests.find(function (_ref5) {
        var peer = _ref5.peer;
        return peer === participantPeer;
      });

      this.update({
        isRequested: false,
        isProcessing: true,
        participant: participant,
        requests: []
      });

      _swap2.default.services.room.sendMessage(participantPeer, [{
        event: 'accept swap request',
        data: {
          orderId: this.id
        }
      }]);
    }
  }, {
    key: 'declineRequest',
    value: function declineRequest(participantPeer) {
      var index = void 0;

      this.requests.some(function (_ref6, _index) {
        var peer = _ref6.peer;

        if (peer === participantPeer) {
          index = _index;
        }
        return index !== undefined;
      });

      var requests = [].concat((0, _toConsumableArray3.default)(this.requests.slice(0, index)), (0, _toConsumableArray3.default)(this.requests.slice(index + 1)));

      this.update({
        isRequested: false,
        requests: requests
      });

      _swap2.default.services.room.sendMessage(participantPeer, [{
        event: 'decline swap request',
        data: {
          orderId: this.id
        }
      }]);
    }
  }]);
  return Order;
}();

exports.default = Order;
module.exports = exports['default'];

/***/ }),
/* 1169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EthTokenSwap = exports.BtcSwap = exports.EthSwap = undefined;

var _EthSwap = __webpack_require__(1170);

var _EthSwap2 = _interopRequireDefault(_EthSwap);

var _EthTokenSwap = __webpack_require__(1171);

var _EthTokenSwap2 = _interopRequireDefault(_EthTokenSwap);

var _BtcSwap = __webpack_require__(1172);

var _BtcSwap2 = _interopRequireDefault(_BtcSwap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.EthSwap = _EthSwap2.default;
exports.BtcSwap = _BtcSwap2.default;
exports.EthTokenSwap = _EthTokenSwap2.default;

/***/ }),
/* 1170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(78);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(79);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = __webpack_require__(172);

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _swap = __webpack_require__(20);

var _swap2 = _interopRequireDefault(_swap);

var _bignumber = __webpack_require__(171);

var _bignumber2 = _interopRequireDefault(_bignumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EthSwap = function (_SwapInterface) {
  (0, _inherits3.default)(EthSwap, _SwapInterface);

  /**
   *
   * @param {object}    options
   * @param {string}    options.address
   * @param {array}     options.abi
   * @param {number}    options.gasLimit
   * @param {function}  options.fetchBalance
   */
  function EthSwap(options) {
    (0, _classCallCheck3.default)(this, EthSwap);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EthSwap.__proto__ || (0, _getPrototypeOf2.default)(EthSwap)).call(this));

    _this.addGasPrice = function (value) {
      value = value.toNumber();
      _this.gasPrice = value;
    };

    if (typeof options.fetchBalance !== 'function') {
      throw new Error('EthSwap: "fetchBalance" required');
    }
    if (typeof options.address !== 'string') {
      throw new Error('EthSwap: "address" required');
    }
    if (!Array.isArray(options.abi)) {
      throw new Error('EthSwap: "abi" required');
    }

    _this.address = options.address;
    _this.abi = options.abi;

    _this._swapName = _swap.constants.COINS.eth;
    _this.gasLimit = options.gasLimit || 1e5;
    _this.gasPrice = options.gasPrice;
    _this.fetchBalance = options.fetchBalance;
    return _this;
  }

  (0, _createClass3.default)(EthSwap, [{
    key: '_initSwap',
    value: function _initSwap() {
      this.contract = new _swap2.default.env.web3.eth.Contract(this.abi, this.address);
    }

    /**
     *
     * @param {object} data
     * @param {string} data.secretHash
     * @param {string} data.participantAddress
     * @param {number} data.amount
     * @param {function} handleTransactionHash
     * @returns {Promise}
     */

  }, {
    key: 'create',
    value: function create(data, handleTransactionHash) {
      var _this2 = this;

      var secretHash = data.secretHash,
          participantAddress = data.participantAddress,
          amount = data.amount;


      var base = (0, _bignumber2.default)(10).pow(18);
      var newAmount = new _bignumber2.default(amount.toString()).times(base).integerValue().toNumber();

      return new _promise2.default(function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(resolve, reject) {
          var _contract$methods;

          var hash, params, values, receipt;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  hash = '0x' + secretHash.replace(/^0x/, '');
                  params = {
                    from: _swap2.default.services.auth.accounts.eth.address,
                    gas: _this2.gasLimit,
                    value: newAmount,
                    gasPrice: _this2.gasPrice
                  };
                  values = [hash, participantAddress];
                  _context.next = 5;
                  return (_contract$methods = _this2.contract.methods).createSwap.apply(_contract$methods, values).send(params).on('transactionHash', function (hash) {
                    if (typeof handleTransactionHash === 'function') {
                      handleTransactionHash(hash);
                    }
                  }).on('error', function (err) {
                    reject(err);
                  });

                case 5:
                  receipt = _context.sent;


                  resolve(receipt);

                case 7:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {string} value
     */

  }, {
    key: 'getBalance',


    /**
     *
     * @param {object} data
     * @param {string} data.ownerAddress
     * @returns {Promise}
     */
    value: function getBalance(data) {
      var _this3 = this;

      var ownerAddress = data.ownerAddress;


      return new _promise2.default(function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(resolve, reject) {
          var balance;
          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  balance = void 0;
                  _context2.prev = 1;
                  _context2.next = 4;
                  return _this3.contract.methods.getBalance(ownerAddress).call({
                    from: _swap2.default.services.auth.accounts.eth.address
                  });

                case 4:
                  balance = _context2.sent;
                  _context2.next = 10;
                  break;

                case 7:
                  _context2.prev = 7;
                  _context2.t0 = _context2['catch'](1);

                  reject(_context2.t0);

                case 10:

                  resolve(balance);

                case 11:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3, [[1, 7]]);
        }));

        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.ownerAddress
     * @param {string} data.participantAddress
     * @returns {Promise}
     */

  }, {
    key: 'checkSwapExists',
    value: function checkSwapExists(data) {
      var _this4 = this;

      var ownerAddress = data.ownerAddress,
          participantAddress = data.participantAddress;


      return new _promise2.default(function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(resolve, reject) {
          var swap, balance;
          return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  swap = void 0;
                  _context3.prev = 1;
                  _context3.next = 4;
                  return _this4.contract.methods.swaps(ownerAddress, participantAddress).call();

                case 4:
                  swap = _context3.sent;
                  _context3.next = 10;
                  break;

                case 7:
                  _context3.prev = 7;
                  _context3.t0 = _context3['catch'](1);

                  reject(_context3.t0);

                case 10:

                  console.log('swapExists', swap);

                  balance = parseInt(swap.balance);

                  resolve(balance);

                case 13:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this4, [[1, 7]]);
        }));

        return function (_x5, _x6) {
          return _ref3.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.ownerAddress
     * @param {BigNumber} data.expectedValue
     * @returns {Promise.<string>}
     */

  }, {
    key: 'checkBalance',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(data) {
        var ownerAddress, expectedValue, balance;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                ownerAddress = data.ownerAddress, expectedValue = data.expectedValue;
                _context4.next = 3;
                return this.getBalance({ ownerAddress: ownerAddress });

              case 3:
                balance = _context4.sent;

                if (!expectedValue.isGreaterThan(balance)) {
                  _context4.next = 6;
                  break;
                }

                return _context4.abrupt('return', 'Expected value: ' + expectedValue.toNumber() + ', got: ' + balance);

              case 6:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function checkBalance(_x7) {
        return _ref4.apply(this, arguments);
      }

      return checkBalance;
    }()

    /**
     *
     * @param {object} data
     * @param {string} data.secret
     * @param {string} data.ownerAddress
     * @param {function} handleTransactionHash
     * @returns {Promise}
     */

  }, {
    key: 'withdraw',
    value: function withdraw(data, handleTransactionHash) {
      var _this5 = this;

      var ownerAddress = data.ownerAddress,
          secret = data.secret;


      return new _promise2.default(function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(resolve, reject) {
          var _secret, params, receipt;

          return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _secret = '0x' + secret.replace(/^0x/, '');
                  params = {
                    from: _swap2.default.services.auth.accounts.eth.address,
                    gas: _this5.gasLimit,
                    gasPrice: _this5.gasPrice
                  };
                  _context5.next = 4;
                  return _this5.contract.methods.withdraw(_secret, ownerAddress).send(params).on('transactionHash', function (hash) {
                    if (typeof handleTransactionHash === 'function') {
                      handleTransactionHash(hash);
                    }
                  }).on('error', function (err) {
                    reject(err);
                  });

                case 4:
                  receipt = _context5.sent;


                  resolve(receipt);

                case 6:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, _this5);
        }));

        return function (_x8, _x9) {
          return _ref5.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.participantAddress
     * @param {function} handleTransactionHash
     * @returns {Promise}
     */

  }, {
    key: 'refund',
    value: function refund(data, handleTransactionHash) {
      var _this6 = this;

      var participantAddress = data.participantAddress;


      return new _promise2.default(function () {
        var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(resolve, reject) {
          var params, receipt;
          return _regenerator2.default.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  params = {
                    from: _swap2.default.services.auth.accounts.eth.address,
                    gas: _this6.gasLimit,
                    gasPrice: _this6.gasPrice
                  };
                  _context6.next = 3;
                  return _this6.contract.methods.refund(participantAddress).send(params).on('transactionHash', function (hash) {
                    if (typeof handleTransactionHash === 'function') {
                      handleTransactionHash(hash);
                    }
                  }).on('error', function (err) {
                    reject(err);
                  });

                case 3:
                  receipt = _context6.sent;


                  resolve(receipt);

                case 5:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, _this6);
        }));

        return function (_x10, _x11) {
          return _ref6.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.participantAddress
     * @returns {Promise}
     */

  }, {
    key: 'getSecret',
    value: function getSecret(data) {
      var _this7 = this;

      var participantAddress = data.participantAddress;


      return new _promise2.default(function () {
        var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(resolve, reject) {
          var secret, secretValue;
          return _regenerator2.default.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.prev = 0;
                  _context7.next = 3;
                  return _this7.contract.methods.getSecret(participantAddress).call({
                    from: _swap2.default.services.auth.accounts.eth.address
                  });

                case 3:
                  secret = _context7.sent;
                  secretValue = secret && !/^0x0+/.test(secret) ? secret : null;


                  resolve(secretValue);
                  _context7.next = 11;
                  break;

                case 8:
                  _context7.prev = 8;
                  _context7.t0 = _context7['catch'](0);

                  reject(_context7.t0);

                case 11:
                case 'end':
                  return _context7.stop();
              }
            }
          }, _callee7, _this7, [[0, 8]]);
        }));

        return function (_x12, _x13) {
          return _ref7.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.participantAddress
     * @param handleTransactionHash
     * @returns {Promise}
     */

  }, {
    key: 'close',
    value: function close(data, handleTransactionHash) {
      var _this8 = this;

      var participantAddress = data.participantAddress;


      return new _promise2.default(function () {
        var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(resolve, reject) {
          var params, result;
          return _regenerator2.default.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  params = {
                    from: _swap2.default.services.auth.accounts.eth.address,
                    gas: _this8.gasLimit,
                    gasPrice: _this8.gasPrice
                  };
                  _context8.prev = 1;
                  _context8.next = 4;
                  return _this8.contract.methods.close(participantAddress).send(params).on('transactionHash', function (hash) {
                    if (typeof handleTransactionHash === 'function') {
                      handleTransactionHash(hash);
                    }
                  }).on('error', function (err) {
                    reject(err);
                  });

                case 4:
                  result = _context8.sent;


                  resolve(result);
                  _context8.next = 11;
                  break;

                case 8:
                  _context8.prev = 8;
                  _context8.t0 = _context8['catch'](1);

                  reject(_context8.t0);

                case 11:
                case 'end':
                  return _context8.stop();
              }
            }
          }, _callee8, _this8, [[1, 8]]);
        }));

        return function (_x14, _x15) {
          return _ref8.apply(this, arguments);
        };
      }());
    }
  }]);
  return EthSwap;
}(_swap.SwapInterface);

exports.default = EthSwap;

// /**
//  *
//  * @param {object} data
//  * @param {string} data.participantAddress
//  * @param {function} handleTransactionHash
//  * @returns {Promise}
//  */
// sign(data, handleTransactionHash) {
//   const { participantAddress } = data
//
//   return new Promise(async (resolve, reject) => {
//     const params = {
//       from: SwapApp.services.auth.accounts.eth.address,
//       gas: this.gasLimit,
//     }
//
//     const receipt = await this.contract.methods.sign(participantAddress).send(params)
//       .on('transactionHash', (hash) => {
//         if (typeof handleTransactionHash === 'function') {
//           handleTransactionHash(hash)
//         }
//       })
//       .on('error', (err) => {
//         reject(err)
//       })
//
//     resolve(receipt)
//   })
// }

module.exports = exports['default'];

/***/ }),
/* 1171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(78);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(79);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = __webpack_require__(172);

var _promise2 = _interopRequireDefault(_promise);

var _values = __webpack_require__(250);

var _values2 = _interopRequireDefault(_values);

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _swap = __webpack_require__(20);

var _swap2 = _interopRequireDefault(_swap);

var _bignumber = __webpack_require__(171);

var _bignumber2 = _interopRequireDefault(_bignumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EthTokenSwap = function (_SwapInterface) {
  (0, _inherits3.default)(EthTokenSwap, _SwapInterface);

  /**
   *
   * @param {object}    options
   * @param {string}    options.name
   * @param {string}    options.address
   * @param {array}     options.abi
   * @param {string}    options.tokenAddress
   * @param {array}     options.tokenAbi
   * @param {number}    options.gasLimit
   * @param {function}  options.fetchBalance
   */
  function EthTokenSwap(options) {
    (0, _classCallCheck3.default)(this, EthTokenSwap);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EthTokenSwap.__proto__ || (0, _getPrototypeOf2.default)(EthTokenSwap)).call(this));

    if (!options.name) {
      throw new Error('EthTokenSwap: "name" required');
    }
    if (!(0, _values2.default)(_swap.constants.COINS).includes(options.name.toUpperCase())) {
      throw new Error('EthTokenSwap: "name" should be correct');
    }
    if (typeof options.address !== 'string') {
      throw new Error('EthTokenSwap: "address" required');
    }
    if (!Array.isArray(options.abi)) {
      throw new Error('EthTokenSwap: "abi" required');
    }
    if (typeof options.tokenAddress !== 'string') {
      throw new Error('EthTokenSwap: "tokenAddress" required');
    }
    if (!Array.isArray(options.tokenAbi)) {
      throw new Error('EthTokenSwap: "tokenAbi" required');
    }

    _this._swapName = options.name.toUpperCase();

    _this.address = options.address;
    _this.abi = options.abi;
    _this.decimals = options.decimals;
    _this.tokenAddress = options.tokenAddress;
    _this.tokenAbi = options.tokenAbi;

    _this.gasLimit = options.gasLimit || 3e6;
    _this.fetchBalance = options.fetchBalance;
    return _this;
  }

  (0, _createClass3.default)(EthTokenSwap, [{
    key: '_initSwap',
    value: function _initSwap() {
      this.contract = new _swap2.default.env.web3.eth.Contract(this.abi, this.address);
      this.ERC20 = new _swap2.default.env.web3.eth.Contract(this.tokenAbi, this.tokenAddress);
    }

    /**
     *
     * @param {object} data
     * @param {BigNumber} data.amount
     * @param {function} handleTransactionHash
     * @returns {Promise}
     */

  }, {
    key: 'approve',
    value: function approve(data, handleTransactionHash) {
      var _this2 = this;

      var amount = data.amount;

      var newAmount = new _bignumber2.default(String(amount)).times(new _bignumber2.default(10).pow(this.decimals)).decimalPlaces(this.decimals).toNumber();

      return new _promise2.default(function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(resolve, reject) {
          var result;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return _this2.ERC20.methods.approve(_this2.address, newAmount).send({
                    from: _swap2.default.services.auth.accounts.eth.address,
                    gas: _this2.gasLimit
                  }).on('transactionHash', function (hash) {
                    if (typeof handleTransactionHash === 'function') {
                      handleTransactionHash(hash);
                    }
                  }).on('error', function (err) {
                    reject(err);
                  });

                case 3:
                  result = _context.sent;


                  resolve(result);
                  _context.next = 10;
                  break;

                case 7:
                  _context.prev = 7;
                  _context.t0 = _context['catch'](0);

                  reject(_context.t0);

                case 10:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[0, 7]]);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.owner
     * @param {string} data.spender
     * @returns {Promise}
     */

  }, {
    key: 'checkAllowance',
    value: function checkAllowance(data) {
      var _this3 = this;

      var owner = data.owner,
          spender = data.spender;


      return new _promise2.default(function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(resolve, reject) {
          var result;
          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return _this3.ERC20.methods.allowance(owner, spender).call({
                    from: _swap2.default.services.auth.accounts.eth.address
                  });

                case 3:
                  result = _context2.sent;


                  resolve(result);
                  _context2.next = 10;
                  break;

                case 7:
                  _context2.prev = 7;
                  _context2.t0 = _context2['catch'](0);

                  reject(_context2.t0);

                case 10:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3, [[0, 7]]);
        }));

        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.secretHash
     * @param {string} data.participantAddress
     * @param {BigNumber} data.amount
     * @param {function} handleTransactionHash
     * @returns {Promise}
     */

  }, {
    key: 'create',
    value: function create(data, handleTransactionHash) {
      var _this4 = this;

      var secretHash = data.secretHash,
          participantAddress = data.participantAddress,
          amount = data.amount;

      var newAmount = new _bignumber2.default(String(amount)).times(new _bignumber2.default(10).pow(this.decimals)).decimalPlaces(this.decimals).toNumber();

      return new _promise2.default(function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(resolve, reject) {
          var hash, values, params, _contract$methods, result;

          return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  hash = '0x' + secretHash.replace(/^0x/, '');
                  values = [hash, participantAddress, newAmount, _this4.tokenAddress];
                  params = {
                    from: _swap2.default.services.auth.accounts.eth.address,
                    gas: _this4.gasLimit
                  };
                  _context3.prev = 3;
                  _context3.next = 6;
                  return (_contract$methods = _this4.contract.methods).createSwap.apply(_contract$methods, values).send(params).on('transactionHash', function (hash) {
                    if (typeof handleTransactionHash === 'function') {
                      handleTransactionHash(hash);
                    }
                  }).on('error', function (err) {
                    reject(err);
                  });

                case 6:
                  result = _context3.sent;

                  console.log('result', result);
                  resolve(result);
                  _context3.next = 14;
                  break;

                case 11:
                  _context3.prev = 11;
                  _context3.t0 = _context3['catch'](3);

                  reject(_context3.t0);

                case 14:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this4, [[3, 11]]);
        }));

        return function (_x5, _x6) {
          return _ref3.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.ownerAddress
     * @param {string} data.participantAddress
     * @returns {Promise}
     */

  }, {
    key: 'checkSwapExists',
    value: function checkSwapExists(data) {
      var _this5 = this;

      var ownerAddress = data.ownerAddress,
          participantAddress = data.participantAddress;


      return new _promise2.default(function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(resolve, reject) {
          var swap, balance;
          return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  swap = void 0;
                  _context4.prev = 1;
                  _context4.next = 4;
                  return _this5.contract.methods.swaps(ownerAddress, participantAddress).call();

                case 4:
                  swap = _context4.sent;
                  _context4.next = 10;
                  break;

                case 7:
                  _context4.prev = 7;
                  _context4.t0 = _context4['catch'](1);

                  reject(_context4.t0);

                case 10:

                  console.log('swapExists', swap);

                  balance = parseInt(swap.balance);

                  resolve(balance);

                case 13:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, _this5, [[1, 7]]);
        }));

        return function (_x7, _x8) {
          return _ref4.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.ownerAddress
     * @returns {Promise}
     */

  }, {
    key: 'getBalance',
    value: function getBalance(data) {
      var _this6 = this;

      var ownerAddress = data.ownerAddress;


      return new _promise2.default(function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(resolve, reject) {
          var balance;
          return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  balance = void 0;
                  _context5.prev = 1;
                  _context5.next = 4;
                  return _this6.contract.methods.getBalance(ownerAddress).call({
                    from: _swap2.default.services.auth.accounts.eth.address
                  });

                case 4:
                  balance = _context5.sent;
                  _context5.next = 10;
                  break;

                case 7:
                  _context5.prev = 7;
                  _context5.t0 = _context5['catch'](1);

                  reject(_context5.t0);

                case 10:
                  console.log('balance', balance);
                  resolve(balance);

                case 12:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, _this6, [[1, 7]]);
        }));

        return function (_x9, _x10) {
          return _ref5.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.ownerAddress
     * @param {BigNumber} data.expectedValue
     * @returns {Promise.<string>}
     */

  }, {
    key: 'checkBalance',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(data) {
        var ownerAddress, expectedValue, balance;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                ownerAddress = data.ownerAddress, expectedValue = data.expectedValue;
                _context6.next = 3;
                return this.getBalance({ ownerAddress: ownerAddress });

              case 3:
                balance = _context6.sent;

                if (!expectedValue.isGreaterThan(balance)) {
                  _context6.next = 6;
                  break;
                }

                return _context6.abrupt('return', 'Expected value: ' + expectedValue.toNumber() + ', got: ' + balance);

              case 6:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function checkBalance(_x11) {
        return _ref6.apply(this, arguments);
      }

      return checkBalance;
    }()

    /**
     *
     * @param {object} data
     * @param {string} data.secret
     * @param {string} data.ownerAddress
     * @param {function} handleTransactionHash
     * @returns {Promise}
     */

  }, {
    key: 'withdraw',
    value: function withdraw(data, handleTransactionHash) {
      var _this7 = this;

      var ownerAddress = data.ownerAddress,
          secret = data.secret;


      return new _promise2.default(function () {
        var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(resolve, reject) {
          var _secret, params, result;

          return _regenerator2.default.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _secret = '0x' + secret.replace(/^0x/, '');
                  params = {
                    from: _swap2.default.services.auth.accounts.eth.address,
                    gas: _this7.gasLimit
                  };
                  _context7.prev = 2;
                  _context7.next = 5;
                  return _this7.contract.methods.withdraw(_secret, ownerAddress).send(params).on('transactionHash', function (hash) {
                    if (typeof handleTransactionHash === 'function') {
                      handleTransactionHash(hash);
                    }
                  }).on('error', function (err) {
                    reject(err);
                  });

                case 5:
                  result = _context7.sent;


                  resolve(result);
                  _context7.next = 12;
                  break;

                case 9:
                  _context7.prev = 9;
                  _context7.t0 = _context7['catch'](2);

                  reject(_context7.t0);

                case 12:
                case 'end':
                  return _context7.stop();
              }
            }
          }, _callee7, _this7, [[2, 9]]);
        }));

        return function (_x12, _x13) {
          return _ref7.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.participantAddress
     * @param {function} handleTransactionHash
     * @returns {Promise}
     */

  }, {
    key: 'refund',
    value: function refund(data, handleTransactionHash) {
      var _this8 = this;

      var participantAddress = data.participantAddress;


      return new _promise2.default(function () {
        var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(resolve, reject) {
          var params, receipt;
          return _regenerator2.default.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  params = {
                    from: _swap2.default.services.auth.accounts.eth.address,
                    gas: _this8.gasLimit
                  };
                  _context8.next = 3;
                  return _this8.contract.methods.refund(participantAddress).send(params).on('transactionHash', function (hash) {
                    if (typeof handleTransactionHash === 'function') {
                      handleTransactionHash(hash);
                    }
                  }).on('error', function (err) {
                    reject(err);
                  });

                case 3:
                  receipt = _context8.sent;


                  resolve(receipt);

                case 5:
                case 'end':
                  return _context8.stop();
              }
            }
          }, _callee8, _this8);
        }));

        return function (_x14, _x15) {
          return _ref8.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.participantAddress
     * @returns {Promise}
     */

  }, {
    key: 'getSecret',
    value: function getSecret(data) {
      var _this9 = this;

      var participantAddress = data.participantAddress;


      return new _promise2.default(function () {
        var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(resolve, reject) {
          var secret, secretValue;
          return _regenerator2.default.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.prev = 0;
                  _context9.next = 3;
                  return _this9.contract.methods.getSecret(participantAddress).call({
                    from: _swap2.default.services.auth.accounts.eth.address
                  });

                case 3:
                  secret = _context9.sent;
                  secretValue = secret && !/^0x0+/.test(secret) ? secret : null;


                  resolve(secretValue);
                  _context9.next = 11;
                  break;

                case 8:
                  _context9.prev = 8;
                  _context9.t0 = _context9['catch'](0);

                  reject(_context9.t0);

                case 11:
                case 'end':
                  return _context9.stop();
              }
            }
          }, _callee9, _this9, [[0, 8]]);
        }));

        return function (_x16, _x17) {
          return _ref9.apply(this, arguments);
        };
      }());
    }
  }]);
  return EthTokenSwap;
}(_swap.SwapInterface);

exports.default = EthTokenSwap;

// /**
//  *
//  * @param {object} data
//  * @param {string} data.participantAddress
//  * @param {function} handleTransactionHash
//  * @returns {Promise}
//  */
// sign(data, handleTransactionHash) {
//   const { participantAddress } = data
//
//   return new Promise(async (resolve, reject) => {
//     const params = {
//       from: SwapApp.services.auth.accounts.eth.address,
//       gas: this.gasLimit,
//     }
//
//     try {
//       const result = await this.contract.methods.sign(participantAddress).send(params)
//         .on('transactionHash', (hash) => {
//           if (typeof handleTransactionHash === 'function') {
//             handleTransactionHash(hash)
//           }
//         })
//         .on('error', (err) => {
//           reject(err)
//         })
//
//       resolve(result)
//     }
//     catch (err) {
//       reject(err)
//     }
//   })
// }

module.exports = exports['default'];

/***/ }),
/* 1172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(190);

var _typeof3 = _interopRequireDefault(_typeof2);

var _promise = __webpack_require__(172);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(78);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(79);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _swap = __webpack_require__(20);

var _swap2 = _interopRequireDefault(_swap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BtcSwap = function (_SwapInterface) {
  (0, _inherits3.default)(BtcSwap, _SwapInterface);

  /**
   *
   * @param options
   * @param options.fetchBalance
   * @param options.fetchUnspents
   * @param options.broadcastTx
   */
  function BtcSwap(options) {
    (0, _classCallCheck3.default)(this, BtcSwap);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BtcSwap.__proto__ || (0, _getPrototypeOf2.default)(BtcSwap)).call(this));

    if (typeof options.fetchBalance !== 'function') {
      throw new Error('EthSwap: "fetchBalance" required');
    }
    if (typeof options.fetchUnspents !== 'function') {
      throw new Error('EthSwap: "fetchUnspents" required');
    }
    if (typeof options.broadcastTx !== 'function') {
      throw new Error('EthSwap: "broadcastTx" required');
    }

    _this._swapName = _swap.constants.COINS.btc;
    _this.fetchBalance = options.fetchBalance;
    _this.fetchUnspents = options.fetchUnspents;
    _this.broadcastTx = options.broadcastTx;
    return _this;
  }

  (0, _createClass3.default)(BtcSwap, [{
    key: '_initSwap',
    value: function _initSwap() {
      this.network = _swap2.default.isMainNet() ? _swap2.default.env.bitcoin.networks.bitcoin : _swap2.default.env.bitcoin.networks.testnet;
    }

    /**
     *
     * @param {object} data
     * @param {object} data.script
     * @param {*} data.txRaw
     * @param {string} data.secret
     * @private
     */

  }, {
    key: '_signTransaction',
    value: function _signTransaction(data) {
      var script = data.script,
          txRaw = data.txRaw,
          secret = data.secret;


      var hashType = _swap2.default.env.bitcoin.Transaction.SIGHASH_ALL;
      var signatureHash = txRaw.hashForSignature(0, script, hashType);
      var signature = _swap2.default.services.auth.accounts.btc.sign(signatureHash).toScriptSignature(hashType);

      var scriptSig = _swap2.default.env.bitcoin.script.scriptHash.input.encode([signature, _swap2.default.services.auth.accounts.btc.getPublicKeyBuffer(), Buffer.from(secret.replace(/^0x/, ''), 'hex')], script);

      txRaw.setInputScript(0, scriptSig);
    }

    /**
     *
     * @param {object} data
     * @param {string} data.secretHash
     * @param {string} data.ownerPublicKey
     * @param {string} data.recipientPublicKey
     * @param {number} data.lockTime
     * @returns {{scriptAddress: *, script: (*|{ignored})}}
     */

  }, {
    key: 'createScript',
    value: function createScript(data) {
      var secretHash = data.secretHash,
          ownerPublicKey = data.ownerPublicKey,
          recipientPublicKey = data.recipientPublicKey,
          lockTime = data.lockTime;


      var script = _swap2.default.env.bitcoin.script.compile([_swap2.default.env.bitcoin.opcodes.OP_RIPEMD160, Buffer.from(secretHash, 'hex'), _swap2.default.env.bitcoin.opcodes.OP_EQUALVERIFY, Buffer.from(recipientPublicKey, 'hex'), _swap2.default.env.bitcoin.opcodes.OP_EQUAL, _swap2.default.env.bitcoin.opcodes.OP_IF, Buffer.from(recipientPublicKey, 'hex'), _swap2.default.env.bitcoin.opcodes.OP_CHECKSIG, _swap2.default.env.bitcoin.opcodes.OP_ELSE, _swap2.default.env.bitcoin.script.number.encode(lockTime), _swap2.default.env.bitcoin.opcodes.OP_CHECKLOCKTIMEVERIFY, _swap2.default.env.bitcoin.opcodes.OP_DROP, Buffer.from(ownerPublicKey, 'hex'), _swap2.default.env.bitcoin.opcodes.OP_CHECKSIG, _swap2.default.env.bitcoin.opcodes.OP_ENDIF]);

      var scriptPubKey = _swap2.default.env.bitcoin.script.scriptHash.output.encode(_swap2.default.env.bitcoin.crypto.hash160(script));
      var scriptAddress = _swap2.default.env.bitcoin.address.fromOutputScript(scriptPubKey, this.network);

      return {
        scriptAddress: scriptAddress,
        script: script
      };
    }

    /**
     *
     * @param {object} data
     * @param {string} data.recipientPublicKey
     * @param {number} data.lockTime
     * @param {object} expected
     * @param {number} expected.value
     * @param {number} expected.lockTime
     * @param {string} expected.recipientPublicKey
     * @returns {Promise.<string>}
     */

  }, {
    key: 'checkScript',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(data, expected) {
        var recipientPublicKey, lockTime, _createScript, scriptAddress, script, unspents, totalUnspent, expectedValue;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                recipientPublicKey = data.recipientPublicKey, lockTime = data.lockTime;
                _createScript = this.createScript(data), scriptAddress = _createScript.scriptAddress, script = _createScript.script;
                _context.next = 4;
                return this.fetchUnspents(scriptAddress);

              case 4:
                unspents = _context.sent;
                totalUnspent = unspents.reduce(function (summ, _ref2) {
                  var satoshis = _ref2.satoshis;
                  return summ + satoshis;
                }, 0);
                expectedValue = expected.value.multipliedBy(1e8).integerValue();

                if (!expectedValue.isGreaterThan(totalUnspent)) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt('return', 'Expected script value: ' + expectedValue.toNumber() + ', got: ' + totalUnspent);

              case 9:
                if (!(expected.lockTime > lockTime)) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt('return', 'Expected script lockTime: ' + expected.lockTime + ', got: ' + lockTime);

              case 11:
                if (!(expected.recipientPublicKey !== recipientPublicKey)) {
                  _context.next = 13;
                  break;
                }

                return _context.abrupt('return', 'Expected script recipient publicKey: ' + expected.recipientPublicKey + ', got: ' + recipientPublicKey);

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function checkScript(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return checkScript;
    }()

    /**
     *
     * @param {object} data
     * @param {object} data.scriptValues
     * @param {BigNumber} data.amount
     * @param {function} handleTransactionHash
     * @returns {Promise}
     */

  }, {
    key: 'fundScript',
    value: function fundScript(data, handleTransactionHash) {
      var _this2 = this;

      var scriptValues = data.scriptValues,
          amount = data.amount;


      return new _promise2.default(function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(resolve, reject) {
          var _createScript2, scriptAddress, tx, unspents, fundValue, feeValue, totalUnspent, skipValue, txRaw, result;

          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _createScript2 = _this2.createScript(scriptValues), scriptAddress = _createScript2.scriptAddress;
                  tx = new _swap2.default.env.bitcoin.TransactionBuilder(_this2.network);
                  _context2.next = 5;
                  return _this2.fetchUnspents(_swap2.default.services.auth.accounts.btc.getAddress());

                case 5:
                  unspents = _context2.sent;
                  fundValue = amount.multipliedBy(1e8).integerValue().toNumber();
                  feeValue = 15000; // TODO how to get this value

                  totalUnspent = unspents.reduce(function (summ, _ref4) {
                    var satoshis = _ref4.satoshis;
                    return summ + satoshis;
                  }, 0);
                  skipValue = totalUnspent - fundValue - feeValue;

                  if (!(totalUnspent < feeValue + fundValue)) {
                    _context2.next = 12;
                    break;
                  }

                  throw new Error('Total less than fee: ' + totalUnspent + ' < ' + feeValue + ' + ' + fundValue);

                case 12:

                  unspents.forEach(function (_ref5) {
                    var txid = _ref5.txid,
                        vout = _ref5.vout;
                    return tx.addInput(txid, vout);
                  });
                  tx.addOutput(scriptAddress, fundValue);
                  tx.addOutput(_swap2.default.services.auth.accounts.btc.getAddress(), skipValue);
                  tx.inputs.forEach(function (input, index) {
                    tx.sign(index, _swap2.default.services.auth.accounts.btc);
                  });

                  txRaw = tx.buildIncomplete();


                  if (typeof handleTransactionHash === 'function') {
                    handleTransactionHash(txRaw.getId(), scriptAddress);
                  }

                  _context2.prev = 18;
                  _context2.next = 21;
                  return _this2.broadcastTx(txRaw.toHex());

                case 21:
                  result = _context2.sent;


                  resolve(result);
                  _context2.next = 28;
                  break;

                case 25:
                  _context2.prev = 25;
                  _context2.t0 = _context2['catch'](18);

                  reject(_context2.t0);

                case 28:
                  _context2.next = 33;
                  break;

                case 30:
                  _context2.prev = 30;
                  _context2.t1 = _context2['catch'](0);

                  reject(_context2.t1);

                case 33:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2, [[0, 30], [18, 25]]);
        }));

        return function (_x3, _x4) {
          return _ref3.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object|string} data - scriptValues or wallet address
     * @returns {Promise.<void>}
     */

  }, {
    key: 'getBalance',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(data) {
        var address, _createScript3, scriptAddress, unspents, totalUnspent;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                address = void 0;

                if (!(typeof data === 'string')) {
                  _context3.next = 5;
                  break;
                }

                address = data;
                _context3.next = 11;
                break;

              case 5:
                if (!((typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) === 'object')) {
                  _context3.next = 10;
                  break;
                }

                _createScript3 = this.createScript(data), scriptAddress = _createScript3.scriptAddress;


                address = scriptAddress;
                _context3.next = 11;
                break;

              case 10:
                throw new Error('Wrong data type');

              case 11:
                _context3.next = 13;
                return this.fetchUnspents(address);

              case 13:
                unspents = _context3.sent;
                totalUnspent = unspents && unspents.length && unspents.reduce(function (summ, _ref7) {
                  var satoshis = _ref7.satoshis;
                  return summ + satoshis;
                }, 0) || 0;
                return _context3.abrupt('return', totalUnspent);

              case 16:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getBalance(_x5) {
        return _ref6.apply(this, arguments);
      }

      return getBalance;
    }()

    /**
     *
     * @param {object} data
     * @param {object} data.scriptValues
     * @param {string} data.secret
     * @param {boolean} isRefund
     * @returns {Promise}
     */

  }, {
    key: 'getWithdrawRawTransaction',
    value: function () {
      var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(data, isRefund) {
        var scriptValues, secret, _createScript4, script, scriptAddress, tx, unspents, feeValue, totalUnspent, txRaw;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                scriptValues = data.scriptValues, secret = data.secret;
                _createScript4 = this.createScript(scriptValues), script = _createScript4.script, scriptAddress = _createScript4.scriptAddress;
                tx = new _swap2.default.env.bitcoin.TransactionBuilder(this.network);
                _context4.next = 5;
                return this.fetchUnspents(scriptAddress);

              case 5:
                unspents = _context4.sent;
                feeValue = 15000; // TODO how to get this value

                totalUnspent = unspents.reduce(function (summ, _ref9) {
                  var satoshis = _ref9.satoshis;
                  return summ + satoshis;
                }, 0);

                if (!(totalUnspent < feeValue)) {
                  _context4.next = 10;
                  break;
                }

                throw new Error('Total less than fee: ' + totalUnspent + ' < ' + feeValue);

              case 10:

                if (isRefund) {
                  tx.setLockTime(scriptValues.lockTime);
                }

                unspents.forEach(function (_ref10) {
                  var txid = _ref10.txid,
                      vout = _ref10.vout;
                  return tx.addInput(txid, vout, 0xfffffffe);
                });
                tx.addOutput(_swap2.default.services.auth.accounts.btc.getAddress(), totalUnspent - feeValue);

                txRaw = tx.buildIncomplete();


                this._signTransaction({
                  script: script,
                  secret: secret,
                  txRaw: txRaw
                });

                return _context4.abrupt('return', txRaw);

              case 16:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getWithdrawRawTransaction(_x6, _x7) {
        return _ref8.apply(this, arguments);
      }

      return getWithdrawRawTransaction;
    }()

    /**
     *
     * @param {object} data
     * @param {object} data.scriptValues
     * @param {string} data.secret
     * @param {boolean} isRefund
     * @returns {Promise}
     */

  }, {
    key: 'getWithdrawHexTransaction',
    value: function () {
      var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(data, isRefund) {
        var txRaw;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.getWithdrawRawTransaction(data, isRefund);

              case 2:
                txRaw = _context5.sent;
                return _context5.abrupt('return', txRaw.toHex());

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getWithdrawHexTransaction(_x8, _x9) {
        return _ref11.apply(this, arguments);
      }

      return getWithdrawHexTransaction;
    }()

    /**
     *
     * @param {object} data
     * @param {object} data.scriptValues
     * @param {string} data.secret
     * @returns {Promise}
     */

  }, {
    key: 'getRefundRawTransaction',
    value: function getRefundRawTransaction(data) {
      return this.getWithdrawRawTransaction(data, true);
    }

    /**
     *
     * @param {object} data
     * @param {object} data.scriptValues
     * @param {string} data.secret
     * @returns {Promise}
     */

  }, {
    key: 'getRefundHexTransaction',
    value: function () {
      var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(data) {
        var txRaw;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.getRefundRawTransaction(data);

              case 2:
                txRaw = _context6.sent;
                return _context6.abrupt('return', txRaw.toHex());

              case 4:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getRefundHexTransaction(_x10) {
        return _ref12.apply(this, arguments);
      }

      return getRefundHexTransaction;
    }()

    /**
     *
     * @param {object} data
     * @param {object} data.scriptValues
     * @param {string} data.secret
     * @param {function} handleTransactionHash
     * @param {boolean} isRefund
     * @returns {Promise}
     */

  }, {
    key: 'withdraw',
    value: function withdraw(data, handleTransactionHash, isRefund) {
      var _this3 = this;

      return new _promise2.default(function () {
        var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(resolve, reject) {
          var txRaw, result;
          return _regenerator2.default.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.prev = 0;
                  _context7.next = 3;
                  return _this3.getWithdrawRawTransaction(data, isRefund);

                case 3:
                  txRaw = _context7.sent;


                  if (typeof handleTransactionHash === 'function') {
                    handleTransactionHash(txRaw.getId());
                  }

                  _context7.next = 7;
                  return _this3.broadcastTx(txRaw.toHex());

                case 7:
                  result = _context7.sent;


                  resolve(result);
                  _context7.next = 14;
                  break;

                case 11:
                  _context7.prev = 11;
                  _context7.t0 = _context7['catch'](0);

                  reject(_context7.t0);

                case 14:
                case 'end':
                  return _context7.stop();
              }
            }
          }, _callee7, _this3, [[0, 11]]);
        }));

        return function (_x11, _x12) {
          return _ref13.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {object} data.scriptValues
     * @param {string} data.secret
     * @param {function} handleTransactionHash
     * @returns {Promise}
     */

  }, {
    key: 'refund',
    value: function refund(data, handleTransactionHash) {
      return this.withdraw(data, handleTransactionHash, true);
    }
  }]);
  return BtcSwap;
}(_swap.SwapInterface);

exports.default = BtcSwap;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),
/* 1173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BTC2ETHTOKEN = exports.ETHTOKEN2BTC = exports.BTC2ETH = exports.ETH2BTC = undefined;

var _ETH2BTC = __webpack_require__(1174);

var _ETH2BTC2 = _interopRequireDefault(_ETH2BTC);

var _BTC2ETH = __webpack_require__(1184);

var _BTC2ETH2 = _interopRequireDefault(_BTC2ETH);

var _ETHTOKEN2BTC = __webpack_require__(1185);

var _ETHTOKEN2BTC2 = _interopRequireDefault(_ETHTOKEN2BTC);

var _BTC2ETHTOKEN = __webpack_require__(1186);

var _BTC2ETHTOKEN2 = _interopRequireDefault(_BTC2ETHTOKEN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ETH2BTC = _ETH2BTC2.default;
exports.BTC2ETH = _BTC2ETH2.default;
exports.ETHTOKEN2BTC = _ETHTOKEN2BTC2.default;
exports.BTC2ETHTOKEN = _BTC2ETHTOKEN2.default;

/***/ }),
/* 1174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(78);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(79);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _get2 = __webpack_require__(191);

var _get3 = _interopRequireDefault(_get2);

var _crypto = __webpack_require__(192);

var _crypto2 = _interopRequireDefault(_crypto);

var _swap = __webpack_require__(20);

var _swap2 = _interopRequireDefault(_swap);

var _swap3 = __webpack_require__(128);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// move to BtcSwap
var ETH2BTC = function (_Flow) {
  (0, _inherits3.default)(ETH2BTC, _Flow);
  (0, _createClass3.default)(ETH2BTC, null, [{
    key: 'getName',
    value: function getName() {
      return _swap.constants.COINS.eth + '2' + _swap.constants.COINS.btc;
    }
  }]);

  function ETH2BTC(swap) {
    (0, _classCallCheck3.default)(this, ETH2BTC);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ETH2BTC.__proto__ || (0, _getPrototypeOf2.default)(ETH2BTC)).call(this, swap));

    _this._flowName = ETH2BTC.getName();

    _this.ethSwap = _swap2.default.swaps[_swap.constants.COINS.eth];
    _this.btcSwap = _swap2.default.swaps[_swap.constants.COINS.btc];

    _this.myBtcAddress = _swap2.default.services.auth.accounts.btc.getAddress();
    _this.myEthAddress = _swap2.default.services.auth.accounts.eth.address;

    _this.stepNumbers = {
      'sign': 1,
      'wait-lock-btc': 2,
      'verify-script': 3,
      'sync-balance': 4,
      'lock-eth': 5,
      'wait-withdraw-eth': 6, // aka getSecret
      'withdraw-btc': 7,
      'finish': 8,
      'end': 9
    };

    if (!_this.ethSwap) {
      throw new Error('BTC2ETH: "ethSwap" of type object required');
    }
    if (!_this.btcSwap) {
      throw new Error('BTC2ETH: "btcSwap" of type object required');
    }

    _this.state = {
      step: 0,

      signTransactionHash: null,
      isSignFetching: false,
      isMeSigned: false,

      secretHash: null,
      btcScriptValues: null,

      btcScriptVerified: false,

      isBalanceFetching: false,
      isBalanceEnough: false,
      balance: null,

      btcScriptCreatingTransactionHash: null,
      ethSwapCreationTransactionHash: null,

      isEthContractFunded: false,

      secret: null,

      isEthWithdrawn: false,
      isBtcWithdrawn: false,

      refundTransactionHash: null,
      isRefunded: false,

      isFinished: false
    };

    (0, _get3.default)(ETH2BTC.prototype.__proto__ || (0, _getPrototypeOf2.default)(ETH2BTC.prototype), '_persistSteps', _this).call(_this);
    _this._persistState();
    return _this;
  }

  (0, _createClass3.default)(ETH2BTC, [{
    key: '_persistState',
    value: function _persistState() {
      (0, _get3.default)(ETH2BTC.prototype.__proto__ || (0, _getPrototypeOf2.default)(ETH2BTC.prototype), '_persistState', this).call(this);
    }
  }, {
    key: '_getSteps',
    value: function _getSteps() {
      var _this2 = this;

      var flow = this;

      return [

      // 1. Sign swap to start

      function () {
        // this.sign()
      },

      // 2. Wait participant create, fund BTC Script

      function () {
        flow.swap.room.once('create btc script', function (_ref) {
          var scriptValues = _ref.scriptValues,
              btcScriptCreatingTransactionHash = _ref.btcScriptCreatingTransactionHash;

          flow.finishStep({
            secretHash: scriptValues.secretHash,
            btcScriptValues: scriptValues,
            btcScriptCreatingTransactionHash: btcScriptCreatingTransactionHash
          }, { step: 'wait-lock-btc', silentError: true });
        });

        flow.swap.room.sendMessage('request btc script');
        console.log('request btc script');
      },

      // 3. Verify BTC Script

      function () {
        console.log('waiting verify btc script');
        // this.verifyBtcScript()
      },

      // 4. Check balance

      function () {
        _this2.syncBalance();
      },

      // 5. Create ETH Contract

      (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _flow$swap, participant, buyAmount, sellAmount, ethSwapCreationTransactionHash, utcNow, getLockTime, scriptCheckResult, swapData;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _flow$swap = flow.swap, participant = _flow$swap.participant, buyAmount = _flow$swap.buyAmount, sellAmount = _flow$swap.sellAmount;
                ethSwapCreationTransactionHash = void 0;

                // TODO move this somewhere!

                utcNow = function utcNow() {
                  return Math.floor(Date.now() / 1000);
                };

                getLockTime = function getLockTime() {
                  return utcNow() + 3600 * 1;
                }; // 1 hour from now

                _context.next = 6;
                return flow.btcSwap.checkScript(flow.state.btcScriptValues, {
                  value: buyAmount,
                  recipientPublicKey: _swap2.default.services.auth.accounts.btc.getPublicKey(),
                  lockTime: getLockTime()
                });

              case 6:
                scriptCheckResult = _context.sent;

                if (!scriptCheckResult) {
                  _context.next = 11;
                  break;
                }

                console.error('Btc script check error:', scriptCheckResult);
                flow.swap.events.dispatch('btc script check error', scriptCheckResult);
                return _context.abrupt('return');

              case 11:
                swapData = {
                  participantAddress: participant.eth.address,
                  secretHash: flow.state.secretHash,
                  amount: sellAmount
                };
                _context.prev = 12;
                _context.next = 15;
                return _this2.ethSwap.create(swapData, function (hash) {
                  console.log('create ETH contract, hash=' + hash);
                  ethSwapCreationTransactionHash = hash;

                  flow.setState({
                    ethSwapCreationTransactionHash: hash
                  });

                  flow.swap.room.sendMessage('create eth contract', {
                    ethSwapCreationTransactionHash: ethSwapCreationTransactionHash
                  });
                });

              case 15:
                _context.next = 28;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context['catch'](12);

                if (!/known transaction/.test(_context.t0.message)) {
                  _context.next = 23;
                  break;
                }

                return _context.abrupt('return', console.error('known tx: ' + _context.t0.message));

              case 23:
                if (!/out of gas/.test(_context.t0.message)) {
                  _context.next = 27;
                  break;
                }

                return _context.abrupt('return', console.error('tx failed (wrong secret?): ' + _context.t0.message));

              case 27:
                return _context.abrupt('return', console.error(_context.t0));

              case 28:

                console.log('finish step');

                flow.finishStep({
                  isEthContractFunded: true
                });

              case 30:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[12, 17]]);
      })),

      // 6. Wait participant withdraw

      function () {
        var participant = flow.swap.participant;

        var timer = void 0;

        var checkSecretExist = function checkSecretExist() {
          timer = setTimeout((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var secret;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    secret = void 0;
                    _context2.prev = 1;
                    _context2.next = 4;
                    return flow.ethSwap.getSecret({
                      participantAddress: participant.eth.address
                    });

                  case 4:
                    secret = _context2.sent;
                    _context2.next = 9;
                    break;

                  case 7:
                    _context2.prev = 7;
                    _context2.t0 = _context2['catch'](1);

                  case 9:

                    if (secret) {
                      if (!flow.state.isEthWithdrawn) {
                        // redundant condition but who cares :D
                        flow.finishStep({
                          isEthWithdrawn: true,
                          secret: secret
                        }, { step: 'wait-withdraw-eth' });
                      }
                    } else {
                      checkSecretExist();
                    }

                  case 10:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee2, _this2, [[1, 7]]);
          })), 20 * 1000);
        };

        checkSecretExist();

        flow.swap.room.once('finish eth withdraw', function () {
          if (!flow.state.isEthWithdrawn) {
            clearTimeout(timer);
            timer = null;

            flow.finishStep({
              isEthWithdrawn: true
            }, { step: 'wait-withdraw-eth' });
          }
        });
      },

      // 7. Withdraw

      (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var participant, _flow$state, secret, btcScriptValues, balance;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                participant = flow.swap.participant;
                _flow$state = flow.state, secret = _flow$state.secret, btcScriptValues = _flow$state.btcScriptValues;

                console.log('secret withdraw 7', secret);
                console.log('btcScriptValues withdraw 7', btcScriptValues);

                if (btcScriptValues) {
                  _context3.next = 7;
                  break;
                }

                console.error('There is no "btcScriptValues" in state. No way to continue swap...');
                return _context3.abrupt('return');

              case 7:
                if (secret) {
                  _context3.next = 19;
                  break;
                }

                _context3.prev = 8;
                _context3.next = 11;
                return flow.ethSwap.getSecret({
                  participantAddress: participant.eth.address
                });

              case 11:
                secret = _context3.sent;


                flow.setState({
                  secret: secret
                });
                _context3.next = 19;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3['catch'](8);

                if (/known transaction/.test(_context3.t0.message)) {
                  _context3.next = 19;
                  break;
                }

                return _context3.abrupt('return', console.error(_context3.t0));

              case 19:
                if (secret) {
                  _context3.next = 30;
                  break;
                }

                _context3.next = 22;
                return flow.btcSwap.getBalance(btcScriptValues);

              case 22:
                balance = _context3.sent;


                console.log('balance', balance);

                if (!(balance === 0)) {
                  _context3.next = 28;
                  break;
                }

                console.log('Look like you already did withdraw');

                flow.finishStep({
                  isBtcWithdrawn: true
                });

                return _context3.abrupt('return');

              case 28:

                console.error('FAIL! secret: ' + secret + ', balance: ' + balance);
                return _context3.abrupt('return');

              case 30:
                _context3.next = 32;
                return flow.btcSwap.withdraw({
                  scriptValues: flow.state.btcScriptValues,
                  secret: secret
                }, function (hash) {
                  flow.setState({
                    btcSwapWithdrawTransactionHash: hash
                  });
                });

              case 32:

                flow.finishStep({
                  isBtcWithdrawn: true
                });

              case 33:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2, [[8, 15]]);
      })),

      // 8. Finish

      function () {
        flow.swap.room.sendMessage('swap finished');

        flow.finishStep({
          isFinished: true
        });
      },

      // 9. Finished!
      function () {}];
    }
  }, {
    key: '_checkSwapAlreadyExists',
    value: function _checkSwapAlreadyExists() {
      var participant = this.swap.participant;


      var swapData = {
        ownerAddress: _swap2.default.services.auth.accounts.eth.address,
        participantAddress: participant.eth.address
      };

      return this.ethSwap.checkSwapExists(swapData);
    }
  }, {
    key: 'sign',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
        var _this3 = this;

        var participant, isMeSigned, swapExists;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                participant = this.swap.participant;
                isMeSigned = this.state.isMeSigned;

                if (!isMeSigned) {
                  _context4.next = 4;
                  break;
                }

                return _context4.abrupt('return', this.swap.room.sendMessage('swap sign'));

              case 4:
                _context4.next = 6;
                return this._checkSwapAlreadyExists();

              case 6:
                swapExists = _context4.sent;

                if (!swapExists) {
                  _context4.next = 11;
                  break;
                }

                this.swap.room.sendMessage('swap exists');
                // TODO go to 6 step automatically here
                throw new Error('Cannot sign: swap with ' + participant.eth.address + ' already exists! Please refund it or drop ' + this.swap.id);

              case 11:

                this.setState({
                  isSignFetching: true
                });

                this.swap.room.once('request sign', function () {
                  _this3.swap.room.sendMessage('swap sign');
                });

                this.swap.room.sendMessage('swap sign');

                this.finishStep({
                  isMeSigned: true
                }, { step: 'sign' });

                return _context4.abrupt('return', true);

              case 16:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function sign() {
        return _ref5.apply(this, arguments);
      }

      return sign;
    }()
  }, {
    key: 'verifyBtcScript',
    value: function verifyBtcScript() {
      if (this.state.btcScriptVerified) return true;
      if (!this.state.btcScriptValues) throw new Error('No script, cannot verify');

      this.finishStep({
        btcScriptVerified: true
      }, { step: 'verify-script' });

      return true;
    }
  }, {
    key: 'syncBalance',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
        var sellAmount, balance, isEnoughMoney;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                sellAmount = this.swap.sellAmount;


                this.setState({
                  isBalanceFetching: true
                });

                _context5.next = 4;
                return this.ethSwap.fetchBalance(_swap2.default.services.auth.accounts.eth.address);

              case 4:
                balance = _context5.sent;
                isEnoughMoney = sellAmount.isLessThanOrEqualTo(balance);


                if (isEnoughMoney) {
                  this.finishStep({
                    balance: balance,
                    isBalanceFetching: false,
                    isBalanceEnough: true
                  }, { step: 'sync-balance' });
                } else {
                  this.setState({
                    balance: balance,
                    isBalanceFetching: false,
                    isBalanceEnough: false
                  });
                }

              case 7:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function syncBalance() {
        return _ref6.apply(this, arguments);
      }

      return syncBalance;
    }()
  }, {
    key: 'tryWithdraw',
    value: function () {
      var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(_secret) {
        var _this4 = this;

        var _state, secret, secretHash, isEthWithdrawn, isBtcWithdrawn, btcScriptValues, _secretHash, _btcSwap$createScript, scriptAddress, balance;

        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _state = this.state, secret = _state.secret, secretHash = _state.secretHash, isEthWithdrawn = _state.isEthWithdrawn, isBtcWithdrawn = _state.isBtcWithdrawn, btcScriptValues = _state.btcScriptValues;

                if (_secret) {
                  _context6.next = 3;
                  break;
                }

                throw new Error('Withdrawal is automatic. For manual withdrawal, provide a secret');

              case 3:
                if (btcScriptValues) {
                  _context6.next = 5;
                  break;
                }

                throw new Error('Cannot withdraw without script values');

              case 5:

                if (secret && secret != _secret) console.warn('Secret already known and is different. Are you sure?');

                if (isBtcWithdrawn) console.warn('Looks like money were already withdrawn, are you sure?');

                console.log('WITHDRAW using secret = ' + _secret);

                _secretHash = _crypto2.default.ripemd160(Buffer.from(_secret, 'hex')).toString('hex');


                if (secretHash != _secretHash) console.warn('Hash does not match!');

                _btcSwap$createScript = this.btcSwap.createScript(btcScriptValues), scriptAddress = _btcSwap$createScript.scriptAddress;
                _context6.next = 13;
                return this.btcSwap.getBalance(scriptAddress);

              case 13:
                balance = _context6.sent;


                console.log('address=' + scriptAddress + ', balance=' + balance);

                if (!(balance === 0)) {
                  _context6.next = 18;
                  break;
                }

                flow.finishStep({
                  isBtcWithdrawn: true
                }, { step: 'withdraw-btc' });

                throw new Error('Already withdrawn: address=' + scriptAddress + ',balance=' + balance);

              case 18:
                _context6.next = 20;
                return this.btcSwap.withdraw({
                  scriptValues: btcScriptValues,
                  secret: _secret
                }, function (hash) {
                  console.log('TX hash=' + hash);
                  _this4.setState({
                    btcSwapWithdrawTransactionHash: hash
                  });
                });

              case 20:

                console.log('TX withdraw sent: ' + this.state.btcSwapWithdrawTransactionHash);

                this.finishStep({
                  isBtcWithdrawn: true
                }, { step: 'withdraw-btc' });

              case 22:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function tryWithdraw(_x) {
        return _ref7.apply(this, arguments);
      }

      return tryWithdraw;
    }()
  }, {
    key: 'tryRefund',
    value: function tryRefund() {
      var _this5 = this;

      var participant = this.swap.participant;


      this.ethSwap.refund({
        participantAddress: participant.eth.address
      }, function (hash) {
        _this5.setState({
          refundTransactionHash: hash
        });
      }).then(function () {
        _this5.setState({
          isRefunded: true
        });
      });
    }
  }]);
  return ETH2BTC;
}(_swap3.Flow);

exports.default = ETH2BTC;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),
/* 1175 */,
/* 1176 */,
/* 1177 */,
/* 1178 */,
/* 1179 */,
/* 1180 */,
/* 1181 */,
/* 1182 */,
/* 1183 */,
/* 1184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(78);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(79);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _get2 = __webpack_require__(191);

var _get3 = _interopRequireDefault(_get2);

var _crypto = __webpack_require__(192);

var _crypto2 = _interopRequireDefault(_crypto);

var _swap = __webpack_require__(20);

var _swap2 = _interopRequireDefault(_swap);

var _swap3 = __webpack_require__(128);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BTC2ETH = function (_Flow) {
  (0, _inherits3.default)(BTC2ETH, _Flow);
  (0, _createClass3.default)(BTC2ETH, null, [{
    key: 'getName',
    value: function getName() {
      return _swap.constants.COINS.btc + '2' + _swap.constants.COINS.eth;
    }
  }]);

  function BTC2ETH(swap) {
    (0, _classCallCheck3.default)(this, BTC2ETH);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BTC2ETH.__proto__ || (0, _getPrototypeOf2.default)(BTC2ETH)).call(this, swap));

    _this.getRefundTxHex = function () {
      _this.btcSwap.getRefundHexTransaction({
        scriptValues: _this.state.btcScriptValues,
        secret: _this.state.secret
      }).then(function (txHex) {
        _this.setState({
          refundTxHex: txHex
        });
      });
    };

    _this._flowName = BTC2ETH.getName();

    _this.ethSwap = _swap2.default.swaps[_swap.constants.COINS.eth];
    _this.btcSwap = _swap2.default.swaps[_swap.constants.COINS.btc];

    _this.myBtcAddress = _swap2.default.services.auth.accounts.btc.getAddress();
    _this.myEthAddress = _swap2.default.services.auth.accounts.eth.address;

    _this.stepNumbers = {
      'sign': 1,
      'submit-secret': 2,
      'sync-balance': 3,
      'lock-btc': 4,
      'wait-lock-eth': 5,
      'withdraw-eth': 6,
      'finish': 7,
      'end': 8
    };

    if (!_this.ethSwap) {
      throw new Error('BTC2ETH: "ethSwap" of type object required');
    }
    if (!_this.btcSwap) {
      throw new Error('BTC2ETH: "btcSwap" of type object required');
    }

    _this.state = {
      step: 0,

      signTransactionHash: null,
      isSignFetching: false,
      isParticipantSigned: false,

      btcScriptCreatingTransactionHash: null,
      ethSwapCreationTransactionHash: null,

      secretHash: null,
      btcScriptValues: null,

      btcScriptVerified: false,

      isBalanceFetching: false,
      isBalanceEnough: false,
      balance: null,

      isEthContractFunded: false,
      scriptAddressHash: null,

      ethSwapWithdrawTransactionHash: null,
      isEthWithdrawn: false,

      refundTransactionHash: null,
      isRefunded: false,

      refundTxHex: null,
      isFinished: false
    };

    (0, _get3.default)(BTC2ETH.prototype.__proto__ || (0, _getPrototypeOf2.default)(BTC2ETH.prototype), '_persistSteps', _this).call(_this);
    _this._persistState();
    return _this;
  }

  (0, _createClass3.default)(BTC2ETH, [{
    key: '_persistState',
    value: function _persistState() {
      (0, _get3.default)(BTC2ETH.prototype.__proto__ || (0, _getPrototypeOf2.default)(BTC2ETH.prototype), '_persistState', this).call(this);

      // this.ethSwap.getBalance({
      //   ownerAddress: this.swap.participant.eth.address,
      // })
      //   .then((balance) => {
      //     console.log('balance:', balance)
      //   })
    }
  }, {
    key: '_getSteps',
    value: function _getSteps() {
      var _this2 = this;

      var flow = this;

      return [

      // 1. Signs

      function () {
        flow.swap.room.once('swap sign', function () {
          flow.finishStep({
            isParticipantSigned: true
          }, { step: 'sign', silentError: true });
        });

        flow.swap.room.once('swap exists', function () {
          console.log('swap already exists');
        });

        // if I came late and he ALREADY send this, I request AGAIN
        flow.swap.room.sendMessage('request sign');
      },
      // 2. Create secret, secret hash

      function () {
        // this.submitSecret()
      },

      // 3. Check balance

      function () {
        _this2.syncBalance();
      },

      // 4. Create BTC Script, fund, notify participant

      (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _flow$swap, sellAmount, participant, btcScriptCreatingTransactionHash, scriptAddressHash, utcNow, getLockTime, scriptValues;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _flow$swap = flow.swap, sellAmount = _flow$swap.sellAmount, participant = _flow$swap.participant;
                btcScriptCreatingTransactionHash = void 0, scriptAddressHash = void 0;

                // TODO move this somewhere!

                utcNow = function utcNow() {
                  return Math.floor(Date.now() / 1000);
                };

                getLockTime = function getLockTime() {
                  return utcNow() + 3600 * 3;
                }; // 3 hours from now

                scriptValues = {
                  secretHash: flow.state.secretHash,
                  ownerPublicKey: _swap2.default.services.auth.accounts.btc.getPublicKey(),
                  recipientPublicKey: participant.btc.publicKey,
                  lockTime: getLockTime()
                };
                _context.next = 7;
                return flow.btcSwap.fundScript({
                  scriptValues: scriptValues,
                  amount: sellAmount
                }, function (hash, scriptAddress) {
                  btcScriptCreatingTransactionHash = hash;
                  scriptAddressHash = scriptAddress;
                  flow.setState({
                    btcScriptCreatingTransactionHash: hash,
                    scriptAddress: scriptAddress
                  });
                });

              case 7:

                flow.swap.room.on('request btc script', function () {
                  flow.swap.room.sendMessage('create btc script', {
                    scriptValues: scriptValues,
                    btcScriptCreatingTransactionHash: btcScriptCreatingTransactionHash,
                    scriptAddressHash: scriptAddressHash
                  });
                });

                flow.swap.room.sendMessage('create btc script', {
                  scriptValues: scriptValues,
                  btcScriptCreatingTransactionHash: btcScriptCreatingTransactionHash,
                  scriptAddressHash: scriptAddressHash
                });

                flow.finishStep({
                  isBtcScriptFunded: true,
                  btcScriptValues: scriptValues
                });

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      })),

      // 5. Wait participant creates ETH Contract

      function () {
        var participant = flow.swap.participant;

        var timer = void 0;

        flow.swap.room.once('create eth contract', function (_ref2) {
          var ethSwapCreationTransactionHash = _ref2.ethSwapCreationTransactionHash;

          flow.setState({
            ethSwapCreationTransactionHash: ethSwapCreationTransactionHash
          });
        });

        var checkEthBalance = function checkEthBalance() {
          timer = setTimeout((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var balance;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return flow.ethSwap.getBalance({
                      ownerAddress: participant.eth.address
                    });

                  case 2:
                    balance = _context2.sent;


                    if (balance > 0) {
                      if (!flow.state.isEthContractFunded) {
                        // redundant condition but who cares :D
                        flow.finishStep({
                          isEthContractFunded: true
                        }, { step: 'wait-lock-eth' });
                      }
                    } else {
                      checkEthBalance();
                    }

                  case 4:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee2, _this2);
          })), 20 * 1000);
        };

        checkEthBalance();

        flow.swap.room.once('create eth contract', function () {
          if (!flow.state.isEthContractFunded) {
            clearTimeout(timer);
            timer = null;

            flow.finishStep({
              isEthContractFunded: true
            }, { step: 'wait-lock-eth' });
          }
        });
      },

      // 6. Withdraw

      (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var _flow$swap2, buyAmount, participant, data, balanceCheckResult;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _flow$swap2 = flow.swap, buyAmount = _flow$swap2.buyAmount, participant = _flow$swap2.participant;
                data = {
                  ownerAddress: participant.eth.address,
                  secret: flow.state.secret
                };
                _context3.next = 4;
                return flow.ethSwap.checkBalance({
                  ownerAddress: participant.eth.address,
                  expectedValue: buyAmount
                });

              case 4:
                balanceCheckResult = _context3.sent;

                if (!balanceCheckResult) {
                  _context3.next = 9;
                  break;
                }

                console.error('Waiting until deposit: ETH balance check error:', balanceCheckResult);
                flow.swap.events.dispatch('eth balance check error', balanceCheckResult);
                return _context3.abrupt('return');

              case 9:
                _context3.prev = 9;
                _context3.next = 12;
                return flow.ethSwap.withdraw(data, function (hash) {
                  flow.setState({
                    ethSwapWithdrawTransactionHash: hash
                  });
                });

              case 12:
                _context3.next = 25;
                break;

              case 14:
                _context3.prev = 14;
                _context3.t0 = _context3['catch'](9);

                if (!/known transaction/.test(_context3.t0.message)) {
                  _context3.next = 20;
                  break;
                }

                return _context3.abrupt('return', console.error('known tx: ' + _context3.t0.message));

              case 20:
                if (!/out of gas/.test(_context3.t0.message)) {
                  _context3.next = 24;
                  break;
                }

                return _context3.abrupt('return', console.error('tx failed (wrong secret?): ' + _context3.t0.message));

              case 24:
                return _context3.abrupt('return', console.error(_context3.t0));

              case 25:

                flow.swap.room.sendMessage('finish eth withdraw');

                flow.finishStep({
                  isEthWithdrawn: true
                });

              case 27:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2, [[9, 14]]);
      })),

      // 7. Finish

      function () {
        flow.swap.room.once('swap finished', function () {
          flow.finishStep({
            isFinished: true
          });
        });
      },

      // 8. Finished!
      function () {}];
    }
  }, {
    key: 'submitSecret',
    value: function submitSecret(secret) {
      if (this.state.secret) return true;
      if (!this.state.isParticipantSigned) throw new Error('Cannot proceed: participant not signed. step=' + this.state.step);

      var secretHash = _crypto2.default.ripemd160(Buffer.from(secret, 'hex')).toString('hex');

      this.finishStep({
        secret: secret,
        secretHash: secretHash
      }, { step: 'submit-secret' });

      return true;
    }
  }, {
    key: 'syncBalance',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
        var sellAmount, balance, isEnoughMoney;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                sellAmount = this.swap.sellAmount;


                this.setState({
                  isBalanceFetching: true
                });

                _context4.next = 4;
                return this.btcSwap.fetchBalance(this.myBtcAddress);

              case 4:
                balance = _context4.sent;
                isEnoughMoney = sellAmount.isLessThanOrEqualTo(balance);


                if (isEnoughMoney) {
                  this.finishStep({
                    balance: balance,
                    isBalanceFetching: false,
                    isBalanceEnough: true
                  }, { step: 'sync-balance' });
                } else {
                  console.error('Not enough money: ' + balance + ' < ' + sellAmount);
                  this.setState({
                    balance: balance,
                    isBalanceFetching: false,
                    isBalanceEnough: false
                  });
                }

              case 7:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function syncBalance() {
        return _ref5.apply(this, arguments);
      }

      return syncBalance;
    }()
  }, {
    key: 'tryRefund',
    value: function tryRefund() {
      var _this3 = this;

      return this.btcSwap.refund({
        scriptValues: this.state.btcScriptValues,
        secret: this.state.secret
      }, function (hash) {
        _this3.setState({
          refundTransactionHash: hash
        });
      }).then(function () {
        _this3.setState({
          isRefunded: true
        });
      });
    }
  }]);
  return BTC2ETH;
}(_swap3.Flow);

exports.default = BTC2ETH;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),
/* 1185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(78);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(79);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _get2 = __webpack_require__(191);

var _get3 = _interopRequireDefault(_get2);

var _crypto = __webpack_require__(192);

var _crypto2 = _interopRequireDefault(_crypto);

var _swap = __webpack_require__(20);

var _swap2 = _interopRequireDefault(_swap);

var _swap3 = __webpack_require__(128);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// move to BtcSwap
exports.default = function (tokenName) {
  var ETHTOKEN2BTC = function (_Flow) {
    (0, _inherits3.default)(ETHTOKEN2BTC, _Flow);
    (0, _createClass3.default)(ETHTOKEN2BTC, null, [{
      key: 'getName',
      value: function getName() {
        return tokenName.toUpperCase() + '2' + _swap.constants.COINS.btc;
      }
    }]);

    function ETHTOKEN2BTC(swap) {
      (0, _classCallCheck3.default)(this, ETHTOKEN2BTC);

      var _this = (0, _possibleConstructorReturn3.default)(this, (ETHTOKEN2BTC.__proto__ || (0, _getPrototypeOf2.default)(ETHTOKEN2BTC)).call(this, swap));

      _this._flowName = ETHTOKEN2BTC.getName();

      _this.ethTokenSwap = _swap2.default.swaps[tokenName.toUpperCase()];
      _this.btcSwap = _swap2.default.swaps[_swap.constants.COINS.btc];

      _this.myBtcAddress = _swap2.default.services.auth.accounts.btc.getAddress();
      _this.myEthAddress = _swap2.default.services.auth.accounts.eth.address;

      _this.stepNumbers = {
        'sign': 1,
        'wait-lock-btc': 2,
        'verify-script': 3,
        'sync-balance': 4,
        'lock-eth': 5,
        'wait-withdraw-eth': 6, // aka getSecret
        'withdraw-btc': 7,
        'finish': 8,
        'end': 9
      };

      if (!_this.ethTokenSwap) {
        throw new Error('ETHTOKEN2BTC: "ethTokenSwap" of type object required');
      }
      if (!_this.btcSwap) {
        throw new Error('ETHTOKEN2BTC: "btcSwap" of type object required');
      }

      _this.state = {
        step: 0,

        signTransactionHash: null,
        isSignFetching: false,
        isMeSigned: false,

        secretHash: null,
        btcScriptValues: null,

        btcScriptVerified: false,

        isBalanceFetching: false,
        isBalanceEnough: false,
        balance: null,

        btcScriptCreatingTransactionHash: null,
        ethSwapCreationTransactionHash: null,
        isEthContractFunded: false,

        secret: null,

        isEthWithdrawn: false,
        isBtcWithdrawn: false,

        refundTransactionHash: null,

        isFinished: false
      };

      (0, _get3.default)(ETHTOKEN2BTC.prototype.__proto__ || (0, _getPrototypeOf2.default)(ETHTOKEN2BTC.prototype), '_persistSteps', _this).call(_this);
      _this._persistState();
      return _this;
    }

    (0, _createClass3.default)(ETHTOKEN2BTC, [{
      key: '_persistState',
      value: function _persistState() {
        (0, _get3.default)(ETHTOKEN2BTC.prototype.__proto__ || (0, _getPrototypeOf2.default)(ETHTOKEN2BTC.prototype), '_persistState', this).call(this);
      }
    }, {
      key: '_getSteps',
      value: function _getSteps() {
        var _this2 = this;

        var flow = this;
        console.log('FLOW', flow);

        return [

        // 1. Sign swap to start

        function () {
          // this.sign()
        },

        // 2. Wait participant create, fund BTC Script

        function () {
          flow.swap.room.once('create btc script', function (_ref) {
            var scriptValues = _ref.scriptValues,
                btcScriptCreatingTransactionHash = _ref.btcScriptCreatingTransactionHash;

            flow.finishStep({
              secretHash: scriptValues.secretHash,
              btcScriptValues: scriptValues,
              btcScriptCreatingTransactionHash: btcScriptCreatingTransactionHash
            }, { step: 'wait-lock-btc', silentError: true });
          });

          flow.swap.room.sendMessage('request btc script');
        },

        // 3. Verify BTC Script

        function () {
          // this.verifyBtcScript()
        },

        // 4. Check balance

        function () {
          _this2.syncBalance();
        },

        // 5. Create ETH Contract

        (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          var _flow$swap, participant, buyAmount, sellAmount, ethSwapCreationTransactionHash, utcNow, getLockTime, scriptCheckResult, swapData;

          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _flow$swap = flow.swap, participant = _flow$swap.participant, buyAmount = _flow$swap.buyAmount, sellAmount = _flow$swap.sellAmount;
                  ethSwapCreationTransactionHash = void 0;

                  // TODO move this somewhere!

                  utcNow = function utcNow() {
                    return Math.floor(Date.now() / 1000);
                  };

                  getLockTime = function getLockTime() {
                    return utcNow() + 3600 * 1;
                  }; // 1 hour from now

                  _context.next = 6;
                  return flow.btcSwap.checkScript(flow.state.btcScriptValues, {
                    value: buyAmount,
                    recipientPublicKey: _swap2.default.services.auth.accounts.btc.getPublicKey(),
                    lockTime: getLockTime()
                  });

                case 6:
                  scriptCheckResult = _context.sent;

                  if (!scriptCheckResult) {
                    _context.next = 11;
                    break;
                  }

                  console.error('Btc script check error:', scriptCheckResult);
                  flow.swap.events.dispatch('btc script check error', scriptCheckResult);
                  return _context.abrupt('return');

                case 11:
                  swapData = {
                    participantAddress: participant.eth.address,
                    secretHash: flow.state.secretHash,
                    amount: sellAmount
                  };
                  _context.next = 14;
                  return flow.ethTokenSwap.approve({
                    amount: sellAmount
                  });

                case 14:
                  _context.next = 16;
                  return flow.ethTokenSwap.create(swapData, function (hash) {
                    ethSwapCreationTransactionHash = hash;

                    flow.setState({
                      ethSwapCreationTransactionHash: hash
                    });
                  });

                case 16:

                  flow.swap.room.sendMessage('create eth contract', {
                    ethSwapCreationTransactionHash: ethSwapCreationTransactionHash
                  });

                  flow.finishStep({
                    isEthContractFunded: true
                  });

                case 18:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        })),

        // 6. Wait participant withdraw

        function () {
          var participant = flow.swap.participant;

          var timer = void 0;

          var checkSecretExist = function checkSecretExist() {
            timer = setTimeout((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
              var secret;
              return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      secret = void 0;
                      _context2.prev = 1;
                      _context2.next = 4;
                      return flow.ethTokenSwap.getSecret({
                        participantAddress: participant.eth.address
                      });

                    case 4:
                      secret = _context2.sent;
                      _context2.next = 9;
                      break;

                    case 7:
                      _context2.prev = 7;
                      _context2.t0 = _context2['catch'](1);

                    case 9:

                      if (secret) {
                        if (!flow.state.isEthWithdrawn) {
                          // redundant condition but who cares :D
                          flow.finishStep({
                            isEthWithdrawn: true,
                            secret: secret
                          }, { step: 'wait-withdraw-eth' });
                        }
                      } else {
                        checkSecretExist();
                      }

                    case 10:
                    case 'end':
                      return _context2.stop();
                  }
                }
              }, _callee2, _this2, [[1, 7]]);
            })), 20 * 1000);
          };

          checkSecretExist();

          flow.swap.room.once('finish eth withdraw', function () {
            if (!flow.state.isEthWithdrawn) {
              clearTimeout(timer);
              timer = null;

              flow.finishStep({
                isEthWithdrawn: true
              }, { step: 'wait-withdraw-eth' });
            }
          });
        },

        // 7. Withdraw

        (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
          var participant, secret, data;
          return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  participant = flow.swap.participant;
                  secret = flow.state.secret;
                  data = {
                    participantAddress: participant.eth.address

                    // if there is no secret in state then request it
                  };

                  if (secret) {
                    _context3.next = 15;
                    break;
                  }

                  _context3.prev = 4;
                  _context3.next = 7;
                  return flow.ethTokenSwap.getSecret(data);

                case 7:
                  secret = _context3.sent;


                  flow.setState({
                    secret: secret
                  });
                  _context3.next = 15;
                  break;

                case 11:
                  _context3.prev = 11;
                  _context3.t0 = _context3['catch'](4);

                  // TODO notify user that smth goes wrong
                  if (!/known transaction/.test(_context3.t0.message)) console.error(_context3.t0);
                  return _context3.abrupt('return');

                case 15:
                  if (secret) {
                    _context3.next = 18;
                    break;
                  }

                  console.error('Secret required! Got ' + secret);
                  return _context3.abrupt('return');

                case 18:
                  _context3.next = 20;
                  return flow.btcSwap.withdraw({
                    scriptValues: flow.state.btcScriptValues,
                    secret: secret
                  }, function (hash) {
                    flow.setState({
                      btcSwapWithdrawTransactionHash: hash
                    });
                  });

                case 20:

                  flow.finishStep({
                    isBtcWithdrawn: true
                  });

                case 21:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this2, [[4, 11]]);
        })),

        // 8. Finish

        function () {
          flow.swap.room.sendMessage('swap finished');

          flow.finishStep({
            isFinished: true
          });
        },

        // 9. Finished!

        function () {}];
      }
    }, {
      key: '_checkSwapAlreadyExists',
      value: function _checkSwapAlreadyExists() {
        var participant = this.swap.participant;


        var swapData = {
          ownerAddress: _swap2.default.services.auth.accounts.eth.address,
          participantAddress: participant.eth.address
        };

        return this.ethTokenSwap.checkSwapExists(swapData);
      }
    }, {
      key: 'sign',
      value: function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
          var _this3 = this;

          var participant, isMeSigned, swapExists;
          return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  participant = this.swap.participant;
                  isMeSigned = this.state.isMeSigned;

                  if (!isMeSigned) {
                    _context4.next = 4;
                    break;
                  }

                  return _context4.abrupt('return', this.swap.room.sendMessage('swap sign'));

                case 4:
                  _context4.next = 6;
                  return this._checkSwapAlreadyExists();

                case 6:
                  swapExists = _context4.sent;

                  if (!swapExists) {
                    _context4.next = 11;
                    break;
                  }

                  this.swap.room.sendMessage('swap exists');
                  // TODO go to 6 step automatically here
                  throw new Error('Cannot sign: swap with ' + participant.eth.address + ' already exists! Please refund it or drop ' + this.swap.id);

                case 11:

                  this.setState({
                    isSignFetching: true
                  });

                  this.swap.room.once('request sign', function () {
                    _this3.swap.room.sendMessage('swap sign');
                  });

                  this.swap.room.sendMessage('swap sign');

                  this.finishStep({
                    isMeSigned: true
                  }, { step: 'sign' });

                  return _context4.abrupt('return', true);

                case 16:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function sign() {
          return _ref5.apply(this, arguments);
        }

        return sign;
      }()
    }, {
      key: 'verifyBtcScript',
      value: function verifyBtcScript() {
        if (this.state.btcScriptVerified) return true;
        if (!this.state.btcScriptValues) throw new Error('No script, cannot verify');

        this.finishStep({
          btcScriptVerified: true
        }, { step: 'verify-script' });

        return true;
      }
    }, {
      key: 'syncBalance',
      value: function () {
        var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
          var sellAmount, balance, isEnoughMoney;
          return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  sellAmount = this.swap.sellAmount;


                  this.setState({
                    isBalanceFetching: true
                  });

                  _context5.next = 4;
                  return this.ethTokenSwap.fetchBalance(_swap2.default.services.auth.accounts.eth.address);

                case 4:
                  balance = _context5.sent;
                  isEnoughMoney = sellAmount.isLessThanOrEqualTo(balance);


                  if (isEnoughMoney) {
                    this.finishStep({
                      balance: balance,
                      isBalanceFetching: false,
                      isBalanceEnough: true
                    }, { step: 'sync-balance' });
                  } else {
                    this.setState({
                      balance: balance,
                      isBalanceFetching: false,
                      isBalanceEnough: false
                    });
                  }

                case 7:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        function syncBalance() {
          return _ref6.apply(this, arguments);
        }

        return syncBalance;
      }()
    }, {
      key: 'tryWithdraw',
      value: function () {
        var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(_secret) {
          var _this4 = this;

          var _state, secret, secretHash, isEthWithdrawn, isBtcWithdrawn, btcScriptValues, _secretHash, _btcSwap$createScript, scriptAddress, balance;

          return _regenerator2.default.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _state = this.state, secret = _state.secret, secretHash = _state.secretHash, isEthWithdrawn = _state.isEthWithdrawn, isBtcWithdrawn = _state.isBtcWithdrawn, btcScriptValues = _state.btcScriptValues;

                  if (_secret) {
                    _context6.next = 3;
                    break;
                  }

                  throw new Error('Withdrawal is automatic. For manual withdrawal, provide a secret');

                case 3:
                  if (btcScriptValues) {
                    _context6.next = 5;
                    break;
                  }

                  throw new Error('Cannot withdraw without script values');

                case 5:

                  if (secret && secret != _secret) console.warn('Secret already known and is different. Are you sure?');

                  if (isBtcWithdrawn) console.warn('Looks like money were already withdrawn, are you sure?');

                  console.log('WITHDRAW using secret = ' + _secret);

                  _secretHash = _crypto2.default.ripemd160(Buffer.from(_secret, 'hex')).toString('hex');


                  if (secretHash != _secretHash) console.warn('Hash does not match!');

                  _btcSwap$createScript = this.btcSwap.createScript(btcScriptValues), scriptAddress = _btcSwap$createScript.scriptAddress;
                  _context6.next = 13;
                  return this.btcSwap.getBalance(scriptAddress);

                case 13:
                  balance = _context6.sent;


                  console.log('address=' + scriptAddress + ', balance=' + balance);

                  if (!(balance === 0)) {
                    _context6.next = 18;
                    break;
                  }

                  flow.finishStep({
                    isBtcWithdrawn: true
                  }, { step: 'withdraw-btc' });

                  throw new Error('Already withdrawn: address=' + scriptAddress + ',balance=' + balance);

                case 18:
                  _context6.next = 20;
                  return this.btcSwap.withdraw({
                    scriptValues: btcScriptValues,
                    secret: _secret
                  }, function (hash) {
                    console.log('TX hash=' + hash);
                    _this4.setState({
                      btcSwapWithdrawTransactionHash: hash
                    });
                  });

                case 20:

                  console.log('TX withdraw sent: ' + this.state.btcSwapWithdrawTransactionHash);

                  this.finishStep({
                    isBtcWithdrawn: true
                  }, { step: 'withdraw-btc' });

                case 22:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));

        function tryWithdraw(_x) {
          return _ref7.apply(this, arguments);
        }

        return tryWithdraw;
      }()
    }, {
      key: 'tryRefund',
      value: function () {
        var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
          var _this5 = this;

          var participant, _state2, secret, btcScriptValues;

          return _regenerator2.default.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  participant = this.swap.participant;
                  _state2 = this.state, secret = _state2.secret, btcScriptValues = _state2.btcScriptValues;


                  secret = 'c0809ce9f484fdcdfb2d5aabd609768ce0374ee97a1a5618ce4cd3f16c00a078';

                  _context7.prev = 3;

                  console.log('TRYING REFUND!');

                  _context7.prev = 5;
                  _context7.next = 8;
                  return this.ethTokenSwap.refund({
                    participantAddress: participant.eth.address
                  }, function (hash) {
                    _this5.setState({
                      refundTransactionHash: hash
                    });
                  });

                case 8:

                  console.log('SUCCESS REFUND!');
                  return _context7.abrupt('return');

                case 12:
                  _context7.prev = 12;
                  _context7.t0 = _context7['catch'](5);

                  console.err('REFUND FAILED!', _context7.t0);

                case 15:
                  _context7.next = 20;
                  break;

                case 17:
                  _context7.prev = 17;
                  _context7.t1 = _context7['catch'](3);

                  console.error('Mbe it\'s still under lockTime?! ' + _context7.t1);

                case 20:

                  if (!btcScriptValues) {
                    console.error('You can\'t do refund w/o btc script values! Try wait until lockTime expires on eth contract!');
                  }

                  if (secret) {
                    _context7.next = 32;
                    break;
                  }

                  _context7.prev = 22;
                  _context7.next = 25;
                  return this.ethTokenSwap.getSecret(data);

                case 25:
                  secret = _context7.sent;
                  _context7.next = 32;
                  break;

                case 28:
                  _context7.prev = 28;
                  _context7.t2 = _context7['catch'](22);

                  console.error('Can\'t receive secret from contract');
                  return _context7.abrupt('return');

                case 32:

                  console.log('TRYING WITHDRAW!');

                  _context7.prev = 33;
                  _context7.next = 36;
                  return this.btcSwap.withdraw({
                    scriptValues: this.state.btcScriptValues,
                    secret: secret
                  }, function (hash) {
                    _this5.setState({
                      btcSwapWithdrawTransactionHash: hash
                    });
                  });

                case 36:

                  console.log('SUCCESS WITHDRAW!');
                  _context7.next = 42;
                  break;

                case 39:
                  _context7.prev = 39;
                  _context7.t3 = _context7['catch'](33);

                  console.error('WITHDRAW FAILED!', _context7.t3);

                case 42:
                case 'end':
                  return _context7.stop();
              }
            }
          }, _callee7, this, [[3, 17], [5, 12], [22, 28], [33, 39]]);
        }));

        function tryRefund() {
          return _ref8.apply(this, arguments);
        }

        return tryRefund;
      }()
    }]);
    return ETHTOKEN2BTC;
  }(_swap3.Flow);

  return ETHTOKEN2BTC;
};

module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),
/* 1186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(78);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(79);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(19);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _get2 = __webpack_require__(191);

var _get3 = _interopRequireDefault(_get2);

var _crypto = __webpack_require__(192);

var _crypto2 = _interopRequireDefault(_crypto);

var _swap = __webpack_require__(20);

var _swap2 = _interopRequireDefault(_swap);

var _swap3 = __webpack_require__(128);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (tokenName) {
  var BTC2ETHTOKEN = function (_Flow) {
    (0, _inherits3.default)(BTC2ETHTOKEN, _Flow);
    (0, _createClass3.default)(BTC2ETHTOKEN, null, [{
      key: 'getName',
      value: function getName() {
        return _swap.constants.COINS.btc + '2' + tokenName.toUpperCase();
      }
    }]);

    function BTC2ETHTOKEN(swap) {
      (0, _classCallCheck3.default)(this, BTC2ETHTOKEN);

      var _this = (0, _possibleConstructorReturn3.default)(this, (BTC2ETHTOKEN.__proto__ || (0, _getPrototypeOf2.default)(BTC2ETHTOKEN)).call(this, swap));

      _this.getRefundTxHex = function () {
        _this.btcSwap.getRefundHexTransaction({
          scriptValues: _this.state.btcScriptValues,
          secret: _this.state.secret
        }).then(function (txHex) {
          _this.setState({
            refundTxHex: txHex
          });
        });
      };

      _this._flowName = BTC2ETHTOKEN.getName();

      _this.ethTokenSwap = _swap2.default.swaps[tokenName.toUpperCase()];
      _this.btcSwap = _swap2.default.swaps[_swap.constants.COINS.btc];

      _this.myBtcAddress = _swap2.default.services.auth.accounts.btc.getAddress();
      _this.myEthAddress = _swap2.default.services.auth.accounts.eth.address;

      _this.stepNumbers = {
        'sign': 1,
        'submit-secret': 2,
        'sync-balance': 3,
        'lock-btc': 4,
        'wait-lock-eth': 5,
        'withdraw-eth': 6,
        'finish': 7,
        'end': 8
      };

      if (!_this.ethTokenSwap) {
        throw new Error('BTC2ETH: "ethTokenSwap" of type object required');
      }
      if (!_this.btcSwap) {
        throw new Error('BTC2ETH: "btcSwap" of type object required');
      }

      _this.state = {
        step: 0,

        signTransactionHash: null,
        isSignFetching: false,
        isParticipantSigned: false,

        btcScriptCreatingTransactionHash: null,
        ethSwapCreationTransactionHash: null,

        secretHash: null,
        btcScriptValues: null,

        btcScriptVerified: false,

        isBalanceFetching: false,
        isBalanceEnough: false,
        balance: null,

        isEthContractFunded: false,

        ethSwapWithdrawTransactionHash: null,
        isEthWithdrawn: false,
        isBtcWithdrawn: false,

        refundTxHex: null,
        isFinished: false
      };

      (0, _get3.default)(BTC2ETHTOKEN.prototype.__proto__ || (0, _getPrototypeOf2.default)(BTC2ETHTOKEN.prototype), '_persistSteps', _this).call(_this);
      _this._persistState();
      return _this;
    }

    (0, _createClass3.default)(BTC2ETHTOKEN, [{
      key: '_persistState',
      value: function _persistState() {
        (0, _get3.default)(BTC2ETHTOKEN.prototype.__proto__ || (0, _getPrototypeOf2.default)(BTC2ETHTOKEN.prototype), '_persistState', this).call(this);
      }
    }, {
      key: '_getSteps',
      value: function _getSteps() {
        var _this2 = this;

        var flow = this;

        return [

        // 1. Signs

        function () {
          flow.swap.room.once('swap sign', function () {
            flow.finishStep({
              isParticipantSigned: true
            }, { step: 'sign', silentError: true });
          });

          flow.swap.room.once('swap exists', function () {
            console.log('swap already exists');
          });

          // if I came late and he ALREADY send this, I request AGAIN
          flow.swap.room.sendMessage('request sign');
        },

        // 2. Create secret, secret hash

        function () {
          // this.submitSecret()
        },

        // 3. Check balance

        function () {
          _this2.syncBalance();
        },

        // 4. Create BTC Script, fund, notify participant

        (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          var _flow$swap, sellAmount, participant, btcScriptValues, btcScriptCreatingTransactionHash, utcNow, getLockTime, scriptValues;

          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _flow$swap = flow.swap, sellAmount = _flow$swap.sellAmount, participant = _flow$swap.participant;
                  btcScriptValues = flow.state.btcScriptValues;
                  btcScriptCreatingTransactionHash = void 0;

                  // TODO move this somewhere!

                  utcNow = function utcNow() {
                    return Math.floor(Date.now() / 1000);
                  };

                  getLockTime = function getLockTime() {
                    return utcNow() + 3600 * 3;
                  }; // 3 hours from now

                  scriptValues = void 0;


                  if (!btcScriptValues) {
                    scriptValues = {
                      secretHash: flow.state.secretHash,
                      ownerPublicKey: _swap2.default.services.auth.accounts.btc.getPublicKey(),
                      recipientPublicKey: participant.btc.publicKey,
                      lockTime: getLockTime()
                    };

                    flow.setState({
                      btcScriptValues: scriptValues
                    });
                  } else {
                    scriptValues = btcScriptValues;
                  }

                  console.log('sellAmount', sellAmount);

                  _context.next = 10;
                  return flow.btcSwap.fundScript({
                    scriptValues: scriptValues,
                    amount: sellAmount
                  }, function (hash) {
                    btcScriptCreatingTransactionHash = hash;

                    flow.setState({
                      btcScriptCreatingTransactionHash: hash
                    });
                  });

                case 10:

                  flow.swap.room.on('request btc script', function () {
                    flow.swap.room.sendMessage('create btc script', {
                      scriptValues: scriptValues,
                      btcScriptCreatingTransactionHash: btcScriptCreatingTransactionHash
                    });
                  });

                  flow.swap.room.sendMessage('create btc script', {
                    scriptValues: scriptValues,
                    btcScriptCreatingTransactionHash: btcScriptCreatingTransactionHash
                  });

                  flow.finishStep({
                    isBtcScriptFunded: true,
                    btcScriptValues: scriptValues
                  });

                case 13:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        })),

        // 5. Wait participant creates ETH Contract

        function () {
          var participant = flow.swap.participant;

          var timer = void 0;

          flow.swap.room.once('create eth contract', function (_ref2) {
            var ethSwapCreationTransactionHash = _ref2.ethSwapCreationTransactionHash;

            flow.setState({
              ethSwapCreationTransactionHash: ethSwapCreationTransactionHash
            });
          });

          var checkEthBalance = function checkEthBalance() {
            timer = setTimeout((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
              var balance;
              return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return flow.ethTokenSwap.getBalance({
                        ownerAddress: participant.eth.address
                      });

                    case 2:
                      balance = _context2.sent;


                      if (balance > 0) {
                        if (!flow.state.isEthContractFunded) {
                          // redundant condition but who cares :D
                          flow.finishStep({
                            isEthContractFunded: true
                          }, { step: 'wait-lock-eth' });
                        }
                      } else {
                        checkEthBalance();
                      }

                    case 4:
                    case 'end':
                      return _context2.stop();
                  }
                }
              }, _callee2, _this2);
            })), 20 * 1000);
          };

          checkEthBalance();

          flow.swap.room.once('create eth contract', function () {
            if (!flow.state.isEthContractFunded) {
              clearTimeout(timer);
              timer = null;

              flow.finishStep({
                isEthContractFunded: true
              }, { step: 'wait-lock-eth' });
            }
          });
        },

        // 6. Withdraw

        (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
          var _flow$swap2, buyAmount, participant, data, balanceCheckResult;

          return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _flow$swap2 = flow.swap, buyAmount = _flow$swap2.buyAmount, participant = _flow$swap2.participant;
                  data = {
                    ownerAddress: participant.eth.address,
                    secret: flow.state.secret
                  };
                  _context3.next = 4;
                  return flow.ethTokenSwap.checkBalance({
                    ownerAddress: participant.eth.address,
                    expectedValue: buyAmount
                  });

                case 4:
                  balanceCheckResult = _context3.sent;

                  if (!balanceCheckResult) {
                    _context3.next = 9;
                    break;
                  }

                  console.error('Waiting until deposit: ETH balance check error:', balanceCheckResult);
                  flow.swap.events.dispatch('eth balance check error', balanceCheckResult);
                  return _context3.abrupt('return');

                case 9:
                  _context3.prev = 9;
                  _context3.next = 12;
                  return flow.ethTokenSwap.withdraw(data, function (hash) {
                    flow.setState({
                      ethSwapWithdrawTransactionHash: hash
                    });
                  });

                case 12:
                  _context3.next = 18;
                  break;

                case 14:
                  _context3.prev = 14;
                  _context3.t0 = _context3['catch'](9);

                  // TODO user can stuck here after page reload...
                  if (!/known transaction/.test(_context3.t0.message)) console.error(_context3.t0);
                  return _context3.abrupt('return');

                case 18:

                  flow.swap.room.sendMessage('finish eth withdraw');

                  flow.finishStep({
                    isEthWithdrawn: true
                  });

                case 20:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this2, [[9, 14]]);
        })),

        // 7. Finish

        function () {
          flow.swap.room.once('swap finished', function () {
            flow.finishStep({
              isFinished: true
            });
          });
        },

        // 8. Finished!
        function () {}];
      }
    }, {
      key: 'submitSecret',
      value: function submitSecret(secret) {
        if (this.state.secretHash) return true;
        if (!this.state.isParticipantSigned) throw new Error('Cannot proceed: participant not signed. step=' + this.state.step);

        var secretHash = _crypto2.default.ripemd160(Buffer.from(secret, 'hex')).toString('hex');

        this.finishStep({
          secret: secret,
          secretHash: secretHash
        }, { step: 'submit-secret' });

        return true;
      }
    }, {
      key: 'syncBalance',
      value: function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
          var sellAmount, balance, isEnoughMoney;
          return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  sellAmount = this.swap.sellAmount;


                  this.setState({
                    isBalanceFetching: true
                  });

                  _context4.next = 4;
                  return this.btcSwap.fetchBalance(_swap2.default.services.auth.accounts.btc.getAddress());

                case 4:
                  balance = _context4.sent;
                  isEnoughMoney = sellAmount.isLessThanOrEqualTo(balance);


                  if (isEnoughMoney) {
                    this.finishStep({
                      balance: balance,
                      isBalanceFetching: false,
                      isBalanceEnough: true
                    }, { step: 'sync-balance' });
                  } else {
                    this.setState({
                      balance: balance,
                      isBalanceFetching: false,
                      isBalanceEnough: false
                    });
                  }

                case 7:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function syncBalance() {
          return _ref5.apply(this, arguments);
        }

        return syncBalance;
      }()
    }, {
      key: 'tryRefund',
      value: function tryRefund() {
        var _this3 = this;

        return this.btcSwap.refund({
          scriptValues: this.state.btcScriptValues,
          secret: this.state.secret
        }, function (hash) {
          _this3.setState({
            refundTransactionHash: hash
          });
        }).then(function () {
          _this3.setState({
            isRefunded: true
          });
        });
      }
    }]);
    return BTC2ETHTOKEN;
  }(_swap3.Flow);

  return BTC2ETHTOKEN;
};

module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),
/* 1187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _swap = __webpack_require__(20);

var _swap2 = _interopRequireDefault(_swap);

var _actions = __webpack_require__(12);

var _actions2 = _interopRequireDefault(_actions);

var _appConfig = __webpack_require__(18);

var _appConfig2 = _interopRequireDefault(_appConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Core = function (_Component) {
  (0, _inherits3.default)(Core, _Component);

  function Core() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Core);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Core.__proto__ || (0, _getPrototypeOf2.default)(Core)).call.apply(_ref, [this].concat(args))), _this), _this.setIpfs = function () {
      setTimeout(function () {
        var isOnline = _swap2.default.services.room.connection._ipfs.isOnline();
        var peer = _swap2.default.services.room.peer;

        _swap2.default.services.room.connection.on('peer joined', _actions2.default.ipfs.userJoined);
        setTimeout(function () {
          _actions2.default.ipfs.set({
            isOnline: isOnline,
            peer: peer,
            server: _appConfig2.default.ipfs.server
          });
        }, 1000);
      }, 8000);
    }, _this.updateOrders = function () {
      var orders = _swap2.default.services.orders.items;

      _this.setState({});

      if (orders.length > 0) {
        _actions2.default.core.updateCore(orders);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Core, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextState) {
      if (nextState !== this.state) {
        this.setState();
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      _swap2.default.services.orders.on('new orders', this.updateOrders).on('new order', this.updateOrders).on('order update', this.updateOrders).on('remove order', this.updateOrders).on('new order request', this.updateOrders);
      this.setIpfs();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _swap2.default.services.orders.off('new orders', this.updateOrders).off('new order', this.updateOrders).off('order update', this.updateOrders).off('remove order', this.updateOrders).off('new order request', this.updateOrders);

      _swap2.default.services.room.connection.off('peer joined', _actions2.default.ipfs.userLeft);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return Core;
}(_react.Component);

exports.default = Core;

/***/ }),
/* 1188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Header = __webpack_require__(1189);

var _Header2 = _interopRequireDefault(_Header);

var _Nav = __webpack_require__(1190);

var _Nav2 = _interopRequireDefault(_Nav);

var _User = __webpack_require__(1192);

var _User2 = _interopRequireDefault(_User);

var _NavMobile = __webpack_require__(1202);

var _NavMobile2 = _interopRequireDefault(_NavMobile);

var _Logo = __webpack_require__(469);

var _Logo2 = _interopRequireDefault(_Logo);

var _WidthContainer = __webpack_require__(193);

var _WidthContainer2 = _interopRequireDefault(_WidthContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var history = _ref.history;
  return _react2.default.createElement(
    'div',
    { styleName: 'header' },
    _react2.default.createElement(
      _WidthContainer2.default,
      { styleName: 'container' },
      _react2.default.createElement(_Logo2.default, { withLink: true }),
      _react2.default.createElement(_NavMobile2.default, null),
      _react2.default.createElement(_Nav2.default, null),
      _react2.default.createElement(_User2.default, { history: history })
    )
  );
};

exports.default = (0, _reactCssModules2.default)(Header, _Header2.default);

/***/ }),
/* 1189 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"header":"qZaPkJ","container":"_1AYBnf"};

/***/ }),
/* 1190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(51);

var _helpers = __webpack_require__(11);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Nav = __webpack_require__(1191);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nav = [{ title: 'Wallet', link: _helpers.links.home, exact: true }, { title: 'Exchange', link: _helpers.links.exchange }, { title: 'History', link: _helpers.links.history }, { title: 'Affiliate', link: _helpers.links.affiliate }, { title: 'Listing', link: _helpers.links.listing }];

var Nav = (_dec = (0, _reactCssModules2.default)(_Nav2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(Nav, _Component);

  function Nav() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Nav);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Nav.__proto__ || (0, _getPrototypeOf2.default)(Nav)).call.apply(_ref, [this].concat(args))), _this), _this.handleScrollTo = function (scrollDuration) {
      var scrollStep = -window.scrollY / (scrollDuration / 15);
      var scrollInterval = setInterval(function () {
        window.scrollY !== 0 ? window.scrollBy(0, scrollStep) : clearInterval(scrollInterval);
      }, 15);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Nav, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { styleName: 'nav' },
        _react2.default.createElement(
          _react.Fragment,
          null,
          nav.map(function (_ref2) {
            var title = _ref2.title,
                link = _ref2.link,
                exact = _ref2.exact;
            return _react2.default.createElement(
              _reactRouterDom.NavLink,
              {
                onClick: function onClick() {
                  return _this2.handleScrollTo(500);
                },
                key: title,
                exact: exact,
                styleName: 'link',
                to: link,
                activeClassName: _Nav2.default.active
              },
              title
            );
          }),
          false && _react2.default.createElement(
            'a',
            { href: _helpers.links.test, styleName: 'link', target: '_blank', rel: 'noreferrer noopener' },
            'Testnet'
          )
        )
      );
    }
  }]);
  return Nav;
}(_react.Component)) || _class);
exports.default = Nav;

/***/ }),
/* 1191 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"nav":"_34R6Y0","link":"_16Gtic","active":"_2Mv-fo"};

/***/ }),
/* 1192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(12);

var _actions2 = _interopRequireDefault(_actions);

var _redaction = __webpack_require__(25);

var _helpers = __webpack_require__(11);

var _User = __webpack_require__(1193);

var _User2 = _interopRequireDefault(_User);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Sound = __webpack_require__(468);

var _Sound2 = _interopRequireDefault(_Sound);

var _UserAvatar = __webpack_require__(1194);

var _UserAvatar2 = _interopRequireDefault(_UserAvatar);

var _UserTooltip = __webpack_require__(1197);

var _UserTooltip2 = _interopRequireDefault(_UserTooltip);

var _AddOfferButton = __webpack_require__(1200);

var _AddOfferButton2 = _interopRequireDefault(_AddOfferButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = (_dec = (0, _redaction.connect)({
  feeds: 'feeds.items',
  peer: 'ipfs.peer'
}), _dec2 = (0, _reactCssModules2.default)(_User2.default), _dec(_class = _dec2(_class = function (_React$Component) {
  (0, _inherits3.default)(User, _React$Component);

  function User() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, User);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = User.__proto__ || (0, _getPrototypeOf2.default)(User)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      view: true
    }, _this.handleChangeView = function () {
      _this.setState({ view: true });
    }, _this.handleToggleTooltip = function () {
      _this.setState({
        view: !_this.state.view
      });
    }, _this.declineRequest = function (orderId, participantPeer) {
      _actions2.default.core.declineRequest(orderId, participantPeer);
      _actions2.default.core.updateCore();
    }, _this.acceptRequest = function (orderId, participantPeer) {
      _actions2.default.core.acceptRequest(orderId, participantPeer);
      _actions2.default.core.updateCore();
      _this.handleToggleTooltip();
    }, _this.autoAcceptRequest = function (orderId, participantPeer, link) {
      _this.acceptRequest(orderId, participantPeer);
      setTimeout(function () {
        _this.props.history.push(link);
      }, 1000);
    }, _this.soundClick = function () {
      var audio = new Audio();
      audio.src = _Sound2.default;
      audio.autoplay = true;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(User, [{
    key: 'render',
    value: function render() {
      var view = this.state.view;
      var _props = this.props,
          feeds = _props.feeds,
          peer = _props.peer;


      return _react2.default.createElement(
        'div',
        { styleName: 'user-cont' },
        _react2.default.createElement(_AddOfferButton2.default, null),
        _react2.default.createElement(_UserAvatar2.default, {
          isToggle: this.handleToggleTooltip,
          feeds: feeds,
          mePeer: peer,
          soundClick: this.soundClick,
          changeView: this.handleChangeView
        }),
        view && _react2.default.createElement(_UserTooltip2.default, {
          view: view,
          feeds: feeds,
          mePeer: peer,
          autoAcceptRequest: this.autoAcceptRequest,
          acceptRequest: this.acceptRequest,
          declineRequest: this.declineRequest
        })
      );
    }
  }]);
  return User;
}(_react2.default.Component)) || _class) || _class);
exports.default = User;

/***/ }),
/* 1193 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"user-cont":"_33Ia7P","hidden":"_3MuJfF"};

/***/ }),
/* 1194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _UserAvatar = __webpack_require__(1195);

var _UserAvatar2 = _interopRequireDefault(_UserAvatar);

var _avatar = __webpack_require__(1196);

var _avatar2 = _interopRequireDefault(_avatar);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserAvatar = (_dec = (0, _reactCssModules2.default)(_UserAvatar2.default, { allowMultiple: true }), _dec(_class = function (_Component) {
  (0, _inherits3.default)(UserAvatar, _Component);

  function UserAvatar() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, UserAvatar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = UserAvatar.__proto__ || (0, _getPrototypeOf2.default)(UserAvatar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      feeds: null,
      animation: 'user'
    }, _this.handleClick = function () {
      var isToggle = _this.props.isToggle;


      isToggle();
      _this.setState({
        animation: 'user'
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(UserAvatar, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var _props = this.props,
          feeds = _props.feeds,
          soundClick = _props.soundClick,
          changeView = _props.changeView;


      if (nextProps.feeds.length > feeds.length) {
        changeView();

        this.setState({
          feeds: nextProps.feeds,
          animation: 'user shake new'
        });

        setTimeout(function () {
          _this2.setState({
            animation: 'user new'
          });
        }, 820);

        soundClick();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var animation = this.state.animation;


      return _react2.default.createElement(
        'div',
        { styleName: animation, onClick: this.handleClick },
        _react2.default.createElement('img', { styleName: 'bell', src: _avatar2.default, alt: 'Bell' })
      );
    }
  }]);
  return UserAvatar;
}(_react.Component)) || _class);
exports.default = UserAvatar;

/***/ }),
/* 1195 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"user":"_3R8ezp","bell":"_18U74M","status":"_1EDMx_","new":"_3UWWZN","shake":"_3RMI-t"};

/***/ }),
/* 1196 */
/***/ (function(module, exports) {

module.exports = "https://testnet.swap.online/images/avatar_e241ff.svg";

/***/ }),
/* 1197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _controls = __webpack_require__(96);

var _helpers = __webpack_require__(11);

var _reactRouterDom = __webpack_require__(51);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _UserTooltip = __webpack_require__(1198);

var _UserTooltip2 = _interopRequireDefault(_UserTooltip);

var _arrowRight = __webpack_require__(1199);

var _arrowRight2 = _interopRequireDefault(_arrowRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserTooltip = function UserTooltip(_ref) {
  var feeds = _ref.feeds,
      mePeer = _ref.mePeer,
      acceptRequest = _ref.acceptRequest,
      view = _ref.view,
      autoAcceptRequest = _ref.autoAcceptRequest,
      declineRequest = _ref.declineRequest;
  return _react2.default.createElement(
    'div',
    { styleName: 'column' },
    view && feeds.length < 3 ? feeds.map(function (row) {
      var request = row.request,
          _row$content = row.content,
          buyAmount = _row$content.buyAmount,
          buyCurrency = _row$content.buyCurrency,
          sellAmount = _row$content.sellAmount,
          sellCurrency = _row$content.sellCurrency,
          id = row.id,
          ownerPeer = row.peer;


      return mePeer === ownerPeer && request.map(function (_ref2) {
        var peer = _ref2.peer,
            reputation = _ref2.reputation;
        return _react2.default.createElement(
          'div',
          { styleName: 'userTooltip' },
          _react2.default.createElement(
            'div',
            { key: peer },
            _react2.default.createElement(
              'div',
              { styleName: 'title' },
              'User with ',
              _react2.default.createElement(
                'b',
                null,
                reputation
              ),
              ' reputation wants to swap'
            ),
            _react2.default.createElement(
              'div',
              { styleName: 'currency' },
              _react2.default.createElement(
                'span',
                null,
                buyAmount.toString(),
                ' ',
                _react2.default.createElement(
                  'span',
                  { styleName: 'coin' },
                  buyCurrency
                )
              ),
              _react2.default.createElement(
                'span',
                { styleName: 'arrow' },
                _react2.default.createElement('img', { src: _arrowRight2.default, alt: '' })
              ),
              _react2.default.createElement(
                'span',
                null,
                sellAmount.toString(),
                ' ',
                _react2.default.createElement(
                  'span',
                  { styleName: 'coin' },
                  sellCurrency
                )
              )
            )
          ),
          _react2.default.createElement(_controls.TimerButton, { isButton: false, onClick: function onClick() {
              return autoAcceptRequest(id, peer, _helpers.links.swap + '/' + sellCurrency + '-' + buyCurrency + '/' + id);
            } }),
          _react2.default.createElement('span', { styleName: 'decline', onClick: function onClick() {
              return declineRequest(id, peer);
            } }),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: _helpers.links.swap + '/' + sellCurrency + '-' + buyCurrency + '/' + id },
            _react2.default.createElement('div', { styleName: 'checked', onClick: function onClick() {
                return acceptRequest(id, peer);
              } })
          )
        );
      });
    }) : _react2.default.createElement(
      'div',
      { styleName: 'feed' },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: _helpers.links.feed },
        ' Go to the feed page'
      )
    )
  );
};

UserTooltip.propTypes = {
  feeds: _propTypes2.default.array,
  mePeer: _propTypes2.default.string,
  acceptRequest: _propTypes2.default.func
};

exports.default = (0, _reactCssModules2.default)(UserTooltip, _UserTooltip2.default, { allowMultiple: true });

/***/ }),
/* 1198 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"column":"_1gVhNf","feed":"_2nP3zE","userTooltip":"ZUrxv8","title":"_3Wmf4W","currency":"n4WzMO","coin":"FTx5Zs","arrow":"_1HGghg","checked":"Rrpe2k","decline":"_1oOc8J","icon":"hRKJDr"};

/***/ }),
/* 1199 */
/***/ (function(module, exports) {

module.exports = "https://testnet.swap.online/images/arrow-right_861e95.svg";

/***/ }),
/* 1200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _helpers = __webpack_require__(11);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _AddOfferButton = __webpack_require__(1201);

var _AddOfferButton2 = _interopRequireDefault(_AddOfferButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddOfferButton = (_dec = (0, _reactCssModules2.default)(_AddOfferButton2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(AddOfferButton, _Component);

  function AddOfferButton() {
    (0, _classCallCheck3.default)(this, AddOfferButton);
    return (0, _possibleConstructorReturn3.default)(this, (AddOfferButton.__proto__ || (0, _getPrototypeOf2.default)(AddOfferButton)).apply(this, arguments));
  }

  (0, _createClass3.default)(AddOfferButton, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          'div',
          {
            styleName: 'button',
            onClick: function onClick() {
              return pinkClick();
            }
          },
          'Sign up'
        ),
        _react2.default.createElement('div', {
          styleName: 'buttonMobile',
          onClick: function onClick() {
            return pinkClick();
          }
        })
      );
    }
  }]);
  return AddOfferButton;
}(_react.Component)) || _class);
exports.default = AddOfferButton;

/***/ }),
/* 1201 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"_3-kNLg","buttonMobile":"_3jxypg"};

/***/ }),
/* 1202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(51);

var _helpers = __webpack_require__(11);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _NavMobile = __webpack_require__(1203);

var _NavMobile2 = _interopRequireDefault(_NavMobile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nav = [{ title: 'Wallet', link: _helpers.links.home, exact: true }, { title: 'Exchange', link: _helpers.links.exchange }, { title: 'History', link: _helpers.links.history }];

var NavMobile = function NavMobile() {
  return _react2.default.createElement(
    'div',
    { styleName: 'navMobile' },
    nav.map(function (_ref) {
      var title = _ref.title,
          link = _ref.link,
          exact = _ref.exact;
      return _react2.default.createElement(
        _reactRouterDom.NavLink,
        {
          exact: exact,
          key: title,
          styleName: 'linkMobile',
          to: link,
          activeClassName: _NavMobile2.default.active
        },
        title
      );
    }),
    false && _react2.default.createElement(
      'a',
      { styleName: 'linkMobile', target: '_blank', rel: 'noreferrer noopener', href: _helpers.links.testnet },
      ' Testnet'
    )
  );
};

exports.default = (0, _reactCssModules2.default)(NavMobile, _NavMobile2.default, { allowMultiple: true });

/***/ }),
/* 1203 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"navMobile":"_1ZWzG3","linkMobile":"_3lu4hS","active":"_3eJxZS","hide":"tZV82X","button":"_2LQQgA"};

/***/ }),
/* 1204 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"logo":"kQLHsU"};

/***/ }),
/* 1205 */
/***/ (function(module, exports) {

module.exports = "https://testnet.swap.online/images/logo_3436dc.svg";

/***/ }),
/* 1206 */
/***/ (function(module, exports) {

module.exports = "https://testnet.swap.online/images/logo-colored_eb1f60.svg";

/***/ }),
/* 1207 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"widthContainer":"_3BXipS","widthContainerIn":"_3Igl7j","relative":"_3gxpYb","fullHeight":"_1GF4SW","centeringContent":"_3RUiHP","main":"_3aO2EZ"};

/***/ }),
/* 1208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redaction = __webpack_require__(25);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Footer = __webpack_require__(1209);

var _Footer2 = _interopRequireDefault(_Footer);

var _Info = __webpack_require__(1210);

var _Info2 = _interopRequireDefault(_Info);

var _WidthContainer = __webpack_require__(193);

var _WidthContainer2 = _interopRequireDefault(_WidthContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = (_dec = (0, _redaction.connect)(function (_ref) {
  var _ref$ipfs = _ref.ipfs,
      server = _ref$ipfs.server,
      isOnline = _ref$ipfs.isOnline,
      onlineUsers = _ref$ipfs.onlineUsers;
  return {
    server: server,
    isOnline: isOnline,
    onlineUsers: onlineUsers
  };
}), _dec2 = (0, _reactCssModules2.default)(_Footer2.default), _dec(_class = _dec2(_class = function (_Component) {
  (0, _inherits3.default)(Footer, _Component);

  function Footer() {
    (0, _classCallCheck3.default)(this, Footer);
    return (0, _possibleConstructorReturn3.default)(this, (Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).apply(this, arguments));
  }

  (0, _createClass3.default)(Footer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onlineUsers = _props.onlineUsers,
          isOnline = _props.isOnline,
          server = _props.server;


      return _react2.default.createElement(
        'div',
        { styleName: 'footer' },
        _react2.default.createElement(
          _WidthContainer2.default,
          { styleName: 'container' },
          _react2.default.createElement(
            'span',
            { styleName: 'text' },
            'Need help? Join Telegram chat ',
            _react2.default.createElement(
              'a',
              { href: 'https://t.me/swaponline', target: '_blank', rel: 'noreferrer noopener' },
              '@swaponline'
            )
          ),
          _react2.default.createElement(_Info2.default, { serverAddress: server, onlineUsers: onlineUsers, isOnline: isOnline })
        )
      );
    }
  }]);
  return Footer;
}(_react.Component)) || _class) || _class);
exports.default = Footer;

/***/ }),
/* 1209 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"footer":"_3I8ngW","text":"_2mlrGY","container":"_19TQvN"};

/***/ }),
/* 1210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Info = __webpack_require__(1211);

var _Info2 = _interopRequireDefault(_Info);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Info = function Info(_ref) {
  var onlineUsers = _ref.onlineUsers,
      isOnline = _ref.isOnline,
      serverAddress = _ref.serverAddress;
  return _react2.default.createElement(
    'div',
    { styleName: 'title' },
    _react2.default.createElement(
      'span',
      { styleName: isOnline ? 'connect' : 'disconnect' },
      isOnline ? 'Connected ' : 'Loading or not available '
    ),
    'to IPFS signal ',
    serverAddress,
    ' / peers online: ',
    onlineUsers
  );
};

exports.default = (0, _reactCssModules2.default)(Info, _Info2.default, { allowMultiple: true });

/***/ }),
/* 1211 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"title":"_1C587Y","connect":"_34nV3E","disconnect":"_2UdlK9"};

/***/ }),
/* 1212 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"overlay":"_3V4vPK","loader":"_37qfX_","small":"_1Cc0hi","center":"_3wUrWW","loader1":"B8rIc7","loader2":"_2dF68e","loader3":"_1fAQsv","text":"_2mdCx-","link":"_1pQH11"};

/***/ }),
/* 1213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redaction = __webpack_require__(25);

var _Loader = __webpack_require__(273);

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RequestLoader = function RequestLoader(_ref) {
  var isVisible = _ref.isVisible,
      text = _ref.text,
      txId = _ref.txId;

  if (!isVisible) {
    return null;
  }

  return _react2.default.createElement(_Loader2.default, { text: text, txId: txId });
};

exports.default = (0, _redaction.connect)({
  isVisible: 'loader.isVisible',
  text: 'loader.text',
  txId: 'loader.txId'
})(RequestLoader);

/***/ }),
/* 1214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _OfferModal = __webpack_require__(1215);

var _OfferModal2 = _interopRequireDefault(_OfferModal);

var _WithdrawModal = __webpack_require__(1240);

var _WithdrawModal2 = _interopRequireDefault(_WithdrawModal);

var _PrivateKeysModal = __webpack_require__(1242);

var _PrivateKeysModal2 = _interopRequireDefault(_PrivateKeysModal);

var _EosModal = __webpack_require__(1246);

var _EosModal2 = _interopRequireDefault(_EosModal);

var _Approve = __webpack_require__(1250);

var _Approve2 = _interopRequireDefault(_Approve);

var _ImportKeys = __webpack_require__(1252);

var _ImportKeys2 = _interopRequireDefault(_ImportKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  OfferModal: _OfferModal2.default,
  WithdrawModal: _WithdrawModal2.default,
  PrivateKeysModal: _PrivateKeysModal2.default,
  ImportKeys: _ImportKeys2.default,
  EosModal: _EosModal2.default,
  Approve: _Approve2.default
};

/***/ }),
/* 1215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(12);

var _actions2 = _interopRequireDefault(_actions);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _OfferModal = __webpack_require__(1216);

var _OfferModal2 = _interopRequireDefault(_OfferModal);

var _Modal = __webpack_require__(194);

var _Modal2 = _interopRequireDefault(_Modal);

var _ConfirmOffer = __webpack_require__(1222);

var _ConfirmOffer2 = _interopRequireDefault(_ConfirmOffer);

var _AddOffer = __webpack_require__(1231);

var _AddOffer2 = _interopRequireDefault(_AddOffer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Offer = (_dec = (0, _reactCssModules2.default)(_OfferModal2.default), _dec(_class = (_temp2 = _class2 = function (_React$Component) {
  (0, _inherits3.default)(Offer, _React$Component);

  function Offer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Offer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Offer.__proto__ || (0, _getPrototypeOf2.default)(Offer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      view: 'editOffer', // editOffer / confirmOffer
      offer: {}
    }, _this.handleMoveToConfirmation = function (offer) {
      _this.setState({
        view: 'confirmOffer',
        offer: offer
      });
    }, _this.handleMoveToOfferEditing = function () {
      _actions2.default.analytics.dataEvent('orderbook-addoffer-click-confirm-button');
      _this.setState({
        view: 'editOffer'
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Offer, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          view = _state.view,
          offer = _state.offer;
      var name = this.props.name;


      var title = view === 'editOffer' ? 'Add offer' : 'Confirm offer';

      return _react2.default.createElement(
        _Modal2.default,
        { name: name, title: title },
        _react2.default.createElement(
          'div',
          { styleName: 'content' },
          view === 'editOffer' ? _react2.default.createElement(_AddOffer2.default, { initialData: offer, onNext: this.handleMoveToConfirmation }) : _react2.default.createElement(_ConfirmOffer2.default, { offer: offer, onBack: this.handleMoveToOfferEditing })
        )
      );
    }
  }]);
  return Offer;
}(_react2.default.Component), _class2.propTypes = {
  name: _propTypes2.default.string
}, _temp2)) || _class);
exports.default = Offer;

/***/ }),
/* 1216 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"content":"_2EHTMr"};

/***/ }),
/* 1217 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modal":"_3d-lMl","header":"utYl-8","headerContent":"_2FzjWy","title":"_1H7w4U","uppercase":"_1XykmZ","closeButton":"_3UgYwG","contentContainer":"_2OSr4P","content":"_2SEeRQ"};

/***/ }),
/* 1218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(68);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(55);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(44);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _CloseIcon = __webpack_require__(1219);

var _CloseIcon2 = _interopRequireDefault(_CloseIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CloseIcon = function CloseIcon(_ref) {
  var whiteColor = _ref.whiteColor,
      brandColor = _ref.brandColor,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['whiteColor', 'brandColor']);

  var styleName = (0, _classnames2.default)('button', {
    'whiteColor': whiteColor,
    'brandColor': brandColor
  });

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ styleName: styleName }, rest, { role: 'closeButton' }),
    _react2.default.createElement('div', { styleName: 'icon', role: 'closeIcon' })
  );
};

CloseIcon.propTypes = {
  whiteColor: _propTypes2.default.bool,
  brandColor: _propTypes2.default.bool
};

exports.default = (0, _reactCssModules2.default)(CloseIcon, _CloseIcon2.default, { allowMultiple: true });

/***/ }),
/* 1219 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"_3KAFwf","whiteColor":"_1qVzDl","icon":"_2g6BBl","brandColor":"_1ZJhlM"};

/***/ }),
/* 1220 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"overlay":"a_1CO5"};

/***/ }),
/* 1221 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"centringContainer":"_1uK09U","scrollable":"_1K6mUM","centringContent":"_1xMZgg"};

/***/ }),
/* 1222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(12);

var _actions2 = _interopRequireDefault(_actions);

var _helpers = __webpack_require__(11);

var _bignumber = __webpack_require__(80);

var _reactRouterDom = __webpack_require__(51);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ConfirmOffer = __webpack_require__(1223);

var _ConfirmOffer2 = _interopRequireDefault(_ConfirmOffer);

var _ButtonsInRow = __webpack_require__(452);

var _ButtonsInRow2 = _interopRequireDefault(_ButtonsInRow);

var _Button = __webpack_require__(33);

var _Button2 = _interopRequireDefault(_Button);

var _Coins = __webpack_require__(185);

var _Coins2 = _interopRequireDefault(_Coins);

var _Amounts = __webpack_require__(1224);

var _Amounts2 = _interopRequireDefault(_Amounts);

var _ExchangeRate = __webpack_require__(1228);

var _ExchangeRate2 = _interopRequireDefault(_ExchangeRate);

var _Fee = __webpack_require__(1230);

var _Fee2 = _interopRequireDefault(_Fee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfirmOffer = (_dec = (0, _reactCssModules2.default)(_ConfirmOffer2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(ConfirmOffer, _Component);

  function ConfirmOffer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ConfirmOffer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ConfirmOffer.__proto__ || (0, _getPrototypeOf2.default)(ConfirmOffer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      buyAmount: null,
      sellAmount: null,
      sellCurrency: null,
      buyCurrency: null,
      exchangeRate: null
    }, _this.handleConfirm = function () {
      _this.createOrder();
      _actions2.default.modals.close('OfferModal');
    }, _this.createOrder = function () {
      var _this$state = _this.state,
          buyAmount = _this$state.buyAmount,
          sellAmount = _this$state.sellAmount,
          buyCurrency = _this$state.buyCurrency,
          sellCurrency = _this$state.sellCurrency,
          exchangeRate = _this$state.exchangeRate;


      var data = {
        buyCurrency: '' + buyCurrency,
        sellCurrency: '' + sellCurrency,
        buyAmount: Number(buyAmount),
        sellAmount: Number(sellAmount),
        exchangeRate: Number(exchangeRate)
      };
      _actions2.default.analytics.dataEvent('orderbook-addoffer-click-confirm-button');
      _actions2.default.core.createOrder(data);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ConfirmOffer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props$offer = this.props.offer,
          sellAmount = _props$offer.sellAmount,
          buyAmount = _props$offer.buyAmount,
          sellCurrency = _props$offer.sellCurrency,
          buyCurrency = _props$offer.buyCurrency,
          exchangeRate = _props$offer.exchangeRate;

      sellAmount = new _bignumber.BigNumber(String(sellAmount));
      buyAmount = new _bignumber.BigNumber(String(buyAmount));
      this.setState({
        sellAmount: sellAmount,
        buyAmount: buyAmount,
        buyCurrency: buyCurrency,
        sellCurrency: sellCurrency,
        exchangeRate: exchangeRate
      });

      if (false) {
        if (sellCurrency === 'eth' && sellAmount > 0.1) {
          this.setState({
            sellAmount: 0.1,
            buyAmount: 0.007
          });
        } else if (sellCurrency === 'btc' && sellAmount > 0.007) {
          this.setState({
            sellAmount: 0.007,
            buyAmount: 0.1
          });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var onBack = this.props.onBack;
      var _state = this.state,
          buyAmount = _state.buyAmount,
          sellAmount = _state.sellAmount,
          buyCurrency = _state.buyCurrency,
          sellCurrency = _state.sellCurrency,
          exchangeRate = _state.exchangeRate;

      buyAmount = buyAmount.toNumber().toFixed(5);
      sellAmount = sellAmount.toNumber().toFixed(5);

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_Coins2.default, { styleName: 'coins', names: [buyCurrency, sellCurrency], size: 100 }),
        _react2.default.createElement(_Amounts2.default, { buyAmount: buyAmount, sellAmount: sellAmount, buyCurrency: buyCurrency, sellCurrency: sellCurrency }),
        _react2.default.createElement(_ExchangeRate2.default, { value: exchangeRate, buyCurrency: buyCurrency, sellCurrency: sellCurrency }),
        _react2.default.createElement(_Fee2.default, { amount: 0.0001, currency: sellCurrency }),
        _react2.default.createElement(
          _ButtonsInRow2.default,
          { styleName: 'buttonsInRow' },
          _react2.default.createElement(
            _Button2.default,
            { styleName: 'button', gray: true, onClick: onBack },
            'Back'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { styleName: 'link', to: _helpers.links.exchange + '/' + buyCurrency.toLowerCase() + '-' + sellCurrency.toLowerCase() },
            _react2.default.createElement(
              _Button2.default,
              { styleName: 'button', id: 'confirm', brand: true, onClick: this.handleConfirm },
              'Add'
            )
          )
        )
      );
    }
  }]);
  return ConfirmOffer;
}(_react.Component)) || _class);
exports.default = ConfirmOffer;

/***/ }),
/* 1223 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"coins":"_2SFTdv","buttonsInRow":"_3Z13ki","button":"_1IOrqN","link":"ilIyX_"};

/***/ }),
/* 1224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Amounts = __webpack_require__(1225);

var _Amounts2 = _interopRequireDefault(_Amounts);

var _Row = __webpack_require__(274);

var _Row2 = _interopRequireDefault(_Row);

var _Value = __webpack_require__(275);

var _Value2 = _interopRequireDefault(_Value);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Amounts = function Amounts(_ref) {
  var buyAmount = _ref.buyAmount,
      sellAmount = _ref.sellAmount,
      buyCurrency = _ref.buyCurrency,
      sellCurrency = _ref.sellCurrency;
  return _react2.default.createElement(
    _Row2.default,
    { title: 'Exchange' },
    _react2.default.createElement(_Value2.default, { value: sellAmount, currency: sellCurrency }),
    _react2.default.createElement('div', { styleName: 'arrow' }),
    _react2.default.createElement(_Value2.default, { value: buyAmount, currency: buyCurrency })
  );
};

exports.default = (0, _reactCssModules2.default)(Amounts, _Amounts2.default);

/***/ }),
/* 1225 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"arrow":"_1JeVyh"};

/***/ }),
/* 1226 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"row":"_3kZbpm","title":"_2-aWLd","content":"_2ALy7S"};

/***/ }),
/* 1227 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"value":"_1MvMZq","currency":"ka6sxH"};

/***/ }),
/* 1228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ExchangeRate = __webpack_require__(1229);

var _ExchangeRate2 = _interopRequireDefault(_ExchangeRate);

var _Row = __webpack_require__(274);

var _Row2 = _interopRequireDefault(_Row);

var _Value = __webpack_require__(275);

var _Value2 = _interopRequireDefault(_Value);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExchangeRate = function ExchangeRate(_ref) {
  var value = _ref.value,
      buyCurrency = _ref.buyCurrency,
      sellCurrency = _ref.sellCurrency;
  return _react2.default.createElement(
    _Row2.default,
    { title: 'Exchange rate' },
    _react2.default.createElement(_Value2.default, { value: 1, currency: buyCurrency }),
    _react2.default.createElement(
      'div',
      { styleName: 'equal' },
      '='
    ),
    _react2.default.createElement(_Value2.default, { value: value, currency: sellCurrency })
  );
};

exports.default = (0, _reactCssModules2.default)(ExchangeRate, _ExchangeRate2.default);

/***/ }),
/* 1229 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"equal":"_62CYy3"};

/***/ }),
/* 1230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Row = __webpack_require__(274);

var _Row2 = _interopRequireDefault(_Row);

var _Value = __webpack_require__(275);

var _Value2 = _interopRequireDefault(_Value);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fee = function Fee(_ref) {
  var amount = _ref.amount,
      currency = _ref.currency;
  return _react2.default.createElement(
    _Row2.default,
    { title: 'Miner fee' },
    _react2.default.createElement(_Value2.default, { value: amount, currency: currency })
  );
};

exports.default = Fee;

/***/ }),
/* 1231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(65);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _keys = __webpack_require__(46);

var _keys2 = _interopRequireDefault(_keys);

var _dec, _dec2, _class, _class2, _temp, _initialiseProps;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(12);

var _actions2 = _interopRequireDefault(_actions);

var _redaction = __webpack_require__(25);

var _swValuelink = __webpack_require__(81);

var _swValuelink2 = _interopRequireDefault(_swValuelink);

var _appConfig = __webpack_require__(18);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _bignumber = __webpack_require__(80);

var _AddOffer = __webpack_require__(1232);

var _AddOffer2 = _interopRequireDefault(_AddOffer);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Select = __webpack_require__(1233);

var _Select2 = _interopRequireDefault(_Select);

var _ExchangeRateGroup = __webpack_require__(1235);

var _ExchangeRateGroup2 = _interopRequireDefault(_ExchangeRateGroup);

var _SelectGroup = __webpack_require__(1238);

var _SelectGroup2 = _interopRequireDefault(_SelectGroup);

var _Button = __webpack_require__(33);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddOffer = (_dec = (0, _redaction.connect)(function (_ref) {
  var _ref$user = _ref.user,
      ethData = _ref$user.ethData,
      btcData = _ref$user.btcData,
      tokensData = _ref$user.tokensData;
  return {
    items: [ethData, btcData],
    tokens: (0, _keys2.default)(tokensData).map(function (k) {
      return tokensData[k];
    })
  };
}), _dec2 = (0, _reactCssModules2.default)(_AddOffer2.default, { allowMultiple: true }), _dec(_class = _dec2(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(AddOffer, _Component);

  function AddOffer(_ref2) {
    var initialData = _ref2.initialData;
    (0, _classCallCheck3.default)(this, AddOffer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AddOffer.__proto__ || (0, _getPrototypeOf2.default)(AddOffer)).call(this));

    _initialiseProps.call(_this);

    var _ref3 = initialData || {},
        exchangeRate = _ref3.exchangeRate,
        buyAmount = _ref3.buyAmount,
        sellAmount = _ref3.sellAmount,
        buyCurrency = _ref3.buyCurrency,
        sellCurrency = _ref3.sellCurrency;

    _this.state = {
      exchangeRate: exchangeRate || _appConfig2.default.exchangeRates.ethbtc,
      buyAmount: buyAmount || '',
      sellAmount: sellAmount || '',
      buyCurrency: buyCurrency || 'btc',
      sellCurrency: sellCurrency || 'eth',
      EventWasSend: false,
      min: 0.05
    };
    return _this;
  }

  (0, _createClass3.default)(AddOffer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var sellCurrency = this.state.sellCurrency;

      this.checkBalance(sellCurrency);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _state = this.state,
          sellCurrency = _state.sellCurrency,
          buyCurrency = _state.buyCurrency;

      this.getExchangeRate(sellCurrency, buyCurrency);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state2 = this.state,
          exchangeRate = _state2.exchangeRate,
          buyAmount = _state2.buyAmount,
          sellAmount = _state2.sellAmount,
          buyCurrency = _state2.buyCurrency,
          sellCurrency = _state2.sellCurrency,
          balance = _state2.balance,
          min = _state2.min;

      var linked = _swValuelink2.default.all(this, 'exchangeRate', 'buyAmount', 'sellAmount');
      var isDisabled = !exchangeRate || !buyAmount && !sellAmount || sellAmount > balance || sellAmount < min;

      if (sellCurrency === 'btc') {
        linked.sellAmount.check(function (value) {
          return value > 0.004;
        }, 'Amount must be greater than 0.004 ');
      } else {
        linked.sellAmount.check(function (value) {
          return value > min;
        }, 'Amount must be greater than ' + min + ' ');
      }

      linked.sellAmount.check(function (value) {
        return value < balance;
      }, 'Amount must be bigger your balance');

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_ExchangeRateGroup2.default, {
          label: 'Exchange rate',
          inputValueLink: linked.exchangeRate.onChange(this.handleExchangeRateChange),
          currency: false,
          id: 'exchangeRate',
          placeholder: 'Enter exchange rate amount',
          buyCurrency: buyCurrency,
          sellCurrency: sellCurrency
        }),
        _react2.default.createElement(_Select2.default, {
          changeBalance: this.changeBalance,
          balance: balance,
          currency: sellCurrency
        }),
        _react2.default.createElement(_SelectGroup2.default, {
          styleName: 'sellGroup',
          label: 'Sell',
          inputValueLink: linked.sellAmount.onChange(this.handleSellAmountChange),
          selectedCurrencyValue: sellCurrency,
          onCurrencySelect: this.handleSellCurrencySelect,
          id: 'sellAmount',
          placeholder: 'Enter sell amount'
        }),
        _react2.default.createElement(_SelectGroup2.default, {
          label: 'Buy',
          inputValueLink: linked.buyAmount.onChange(this.handleBuyAmountChange),
          selectedCurrencyValue: buyCurrency,
          onCurrencySelect: this.handleBuyCurrencySelect,
          id: 'buyAmount',
          placeholder: 'Enter buy amount'
        }),
        _react2.default.createElement(
          _Button2.default,
          {
            styleName: 'button',
            fullWidth: true,
            brand: true,
            disabled: isDisabled,
            onClick: this.handleNext
          },
          'Next'
        )
      );
    }
  }]);
  return AddOffer;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.changeExchangeRate = function (value) {
    _this2.setState({
      exchangeRate: value
    });
  };

  this.checkBalance = function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(sellCurrency) {
      var balance;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _actions2.default[sellCurrency].getBalance();

            case 2:
              balance = _context.sent;


              _this2.setState({
                balance: balance
              });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }));

    return function (_x) {
      return _ref4.apply(this, arguments);
    };
  }();

  this.getExchangeRate = function (sellCurrency, buyCurrency) {
    _actions2.default.user.setExchangeRate(sellCurrency, buyCurrency, _this2.changeExchangeRate);
  };

  this.handleExchangeRateChange = function (value) {
    var _state3 = _this2.state,
        buyAmount = _state3.buyAmount,
        sellAmount = _state3.sellAmount;


    if (value == 0 || !value) {
      // eslint-disable-line
      buyAmount = new _bignumber.BigNumber(0);
      sellAmount = new _bignumber.BigNumber(0);
    } else {
      buyAmount = new _bignumber.BigNumber(String(sellAmount) || 0).multipliedBy(value);
      sellAmount = new _bignumber.BigNumber(String(buyAmount) || 0).dividedBy(value);
    }

    _this2.setState({
      buyAmount: buyAmount,
      sellAmount: sellAmount
    });
  };

  this.handleBuyCurrencySelect = function (_ref5) {
    var value = _ref5.value;
    var _state4 = _this2.state,
        buyCurrency = _state4.buyCurrency,
        sellCurrency = _state4.sellCurrency,
        buyAmount = _state4.buyAmount,
        sellAmount = _state4.sellAmount;


    if (value === sellCurrency) {
      sellCurrency = buyCurrency;
    }

    buyCurrency = value;

    _this2.checkBalance(sellCurrency);
    _this2.getExchangeRate(sellCurrency, buyCurrency);

    var exchangeRate = _this2.state.exchangeRate;

    sellAmount = new _bignumber.BigNumber(String(buyAmount) || 0).multipliedBy(exchangeRate);

    _this2.setState({
      buyCurrency: buyCurrency,
      sellCurrency: sellCurrency,
      sellAmount: sellAmount
    });
  };

  this.handleSellCurrencySelect = function (_ref6) {
    var value = _ref6.value;
    var _state5 = _this2.state,
        buyCurrency = _state5.buyCurrency,
        sellCurrency = _state5.sellCurrency,
        sellAmount = _state5.sellAmount,
        buyAmount = _state5.buyAmount;


    if (value === buyCurrency) {
      buyCurrency = sellCurrency;
    }

    sellCurrency = value;

    _this2.checkBalance(sellCurrency);
    _this2.getExchangeRate(sellCurrency, buyCurrency);

    var exchangeRate = _this2.state.exchangeRate;

    buyAmount = new _bignumber.BigNumber(String(sellAmount) || 0).dividedBy(exchangeRate);

    _this2.setState({
      buyCurrency: buyCurrency,
      sellCurrency: sellCurrency,
      buyAmount: buyAmount
    });
  };

  this.handleBuyAmountChange = function (value) {
    var exchangeRate = _this2.state.exchangeRate;


    if (!_this2.EventWasSend) {
      _actions2.default.analytics.dataEvent('orderbook-addoffer-enter-ordervalue');
      _this2.EventWasSend = true;
    }

    _this2.setState({
      sellAmount: new _bignumber.BigNumber(String(value) || 0).dividedBy(exchangeRate || 0),
      buyAmount: new _bignumber.BigNumber(String(value))
    });
  };

  this.handleSellAmountChange = function (value) {
    var exchangeRate = _this2.state.exchangeRate;


    if (!_this2.EventWasSend) {
      _actions2.default.analytics.dataEvent('orderbook-addoffer-enter-ordervalue');
      _this2.EventWasSend = true;
    }

    _this2.setState({
      buyAmount: new _bignumber.BigNumber(String(value) || 0).multipliedBy(exchangeRate || 0),
      sellAmount: new _bignumber.BigNumber(String(value))
    });
  };

  this.handleNext = function () {
    var _state6 = _this2.state,
        exchangeRate = _state6.exchangeRate,
        buyAmount = _state6.buyAmount,
        sellAmount = _state6.sellAmount,
        balance = _state6.balance,
        min = _state6.min;
    var onNext = _this2.props.onNext;


    var isDisabled = !exchangeRate || !buyAmount || !sellAmount || sellAmount > balance || sellAmount < min;

    if (!isDisabled) {
      _actions2.default.analytics.dataEvent('orderbook-addoffer-click-next-button');
      onNext(_this2.state);
    }
  };

  this.changeBalance = function (value) {
    _this2.setState({
      sellAmount: value
    });
    _this2.handleSellAmountChange(value);
  };
}, _temp)) || _class) || _class);
exports.default = AddOffer;

/***/ }),
/* 1232 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"sellGroup":"EElyaT","button":"_3riRsA"};

/***/ }),
/* 1233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Select = __webpack_require__(1234);

var _Select2 = _interopRequireDefault(_Select);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _FieldLabel = __webpack_require__(187);

var _FieldLabel2 = _interopRequireDefault(_FieldLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Select = function Select(_ref) {
  var balance = _ref.balance,
      currency = _ref.currency,
      changeBalance = _ref.changeBalance;

  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      _FieldLabel2.default,
      { inRow: true },
      'Available amount'
    ),
    _react2.default.createElement(
      'div',
      { styleName: 'groupField' },
      _react2.default.createElement(
        'p',
        null,
        currency.toUpperCase(),
        ' ',
        balance ? balance.toFixed(3) : 0.00
      ),
      _react2.default.createElement(
        'div',
        { styleName: 'cell', onClick: function onClick() {
            return changeBalance(balance / 10);
          } },
        '1/10'
      ),
      _react2.default.createElement(
        'div',
        { styleName: 'cell', onClick: function onClick() {
            return changeBalance(balance / 4);
          } },
        '1/4'
      ),
      _react2.default.createElement(
        'div',
        { styleName: 'cell', onClick: function onClick() {
            return changeBalance(balance / 2);
          } },
        '1/2'
      ),
      _react2.default.createElement(
        'div',
        { styleName: 'cell', onClick: function onClick() {
            return changeBalance(balance);
          } },
        'ALL'
      )
    )
  );
};

exports.default = (0, _reactCssModules2.default)(Select, _Select2.default);

/***/ }),
/* 1234 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"groupField":"_1TBx4e","cell":"_1fGtMw"};

/***/ }),
/* 1235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ExchangeRateGroup = __webpack_require__(1236);

var _ExchangeRateGroup2 = _interopRequireDefault(_ExchangeRateGroup);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Group = __webpack_require__(473);

var _Group2 = _interopRequireDefault(_Group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExchangeRateGroup = function ExchangeRateGroup(_ref) {
  var className = _ref.className,
      label = _ref.label,
      id = _ref.id,
      inputValueLink = _ref.inputValueLink,
      placeholder = _ref.placeholder,
      buyCurrency = _ref.buyCurrency,
      sellCurrency = _ref.sellCurrency;
  return _react2.default.createElement(
    _Group2.default,
    {
      className: className,
      label: label,
      id: id,
      inputValueLink: inputValueLink,
      placeholder: placeholder },
    _react2.default.createElement(
      'span',
      { styleName: 'currencyRatio' },
      buyCurrency,
      ' / ',
      sellCurrency
    )
  );
};

exports.default = (0, _reactCssModules2.default)(ExchangeRateGroup, _ExchangeRateGroup2.default);

/***/ }),
/* 1236 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"currencyRatio":"_3uQetM"};

/***/ }),
/* 1237 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"groupField":"_2QVvGM","inputRoot":"_2gYR9R","inputContainer":"zgZs0H"};

/***/ }),
/* 1238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SelectGroup = __webpack_require__(1239);

var _SelectGroup2 = _interopRequireDefault(_SelectGroup);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Group = __webpack_require__(473);

var _Group2 = _interopRequireDefault(_Group);

var _CurrencySelect = __webpack_require__(450);

var _CurrencySelect2 = _interopRequireDefault(_CurrencySelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectGroup = function SelectGroup(_ref) {
  var className = _ref.className,
      label = _ref.label,
      id = _ref.id,
      inputValueLink = _ref.inputValueLink,
      placeholder = _ref.placeholder,
      selectedCurrencyValue = _ref.selectedCurrencyValue,
      onCurrencySelect = _ref.onCurrencySelect;
  return _react2.default.createElement(
    _Group2.default,
    {
      className: className,
      label: label,
      id: id,
      inputValueLink: inputValueLink,
      placeholder: placeholder },
    _react2.default.createElement(_CurrencySelect2.default, {
      styleName: 'currencySelect',
      selectedValue: selectedCurrencyValue,
      onSelect: onCurrencySelect
    })
  );
};

exports.default = (0, _reactCssModules2.default)(SelectGroup, _SelectGroup2.default);

/***/ }),
/* 1239 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"currencySelect":"gFvyga"};

/***/ }),
/* 1240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = __webpack_require__(11);

var _actions = __webpack_require__(12);

var _actions2 = _interopRequireDefault(_actions);

var _swValuelink = __webpack_require__(81);

var _swValuelink2 = _interopRequireDefault(_swValuelink);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _WithdrawModal = __webpack_require__(1241);

var _WithdrawModal2 = _interopRequireDefault(_WithdrawModal);

var _Modal = __webpack_require__(194);

var _Modal2 = _interopRequireDefault(_Modal);

var _FieldLabel = __webpack_require__(187);

var _FieldLabel2 = _interopRequireDefault(_FieldLabel);

var _Input = __webpack_require__(188);

var _Input2 = _interopRequireDefault(_Input);

var _Button = __webpack_require__(33);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WithdrawModal = (_dec = (0, _reactCssModules2.default)(_WithdrawModal2.default), _dec(_class = (_temp2 = _class2 = function (_React$Component) {
  (0, _inherits3.default)(WithdrawModal, _React$Component);

  function WithdrawModal() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, WithdrawModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = WithdrawModal.__proto__ || (0, _getPrototypeOf2.default)(WithdrawModal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isSubmitted: false,
      address: '',
      amount: ''
    }, _this.handleSubmit = function () {
      var _this$state = _this.state,
          to = _this$state.address,
          amount = _this$state.amount;
      var _this$props$data = _this.props.data,
          currency = _this$props$data.currency,
          contractAddress = _this$props$data.contractAddress,
          address = _this$props$data.address,
          decimals = _this$props$data.decimals,
          balance = _this$props$data.balance;


      if (!to || !amount || amount < 0.01 || amount > balance) {
        _this.setState({
          isSubmitted: true
        });
        return;
      }

      var action = void 0;

      switch (currency) {
        case 'ETH':
          action = _actions2.default.eth;
          break;

        case 'BTC':
          action = _actions2.default.btc;
          break;

        case 'NIM':
          action = _actions2.default.nimiq;
          break;

        case 'EOS':
          action = _actions2.default.eos;
          break;

        default:
          action = _actions2.default.token;
      }

      action.send(contractAddress || address, to, Number(amount), decimals).then(function () {
        _actions2.default.loader.hide();
        action.getBalance();

        _actions2.default.notifications.show(_helpers.constants.notifications.SuccessWithdraw, {
          amount: amount,
          currency: currency,
          address: to
        });
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(WithdrawModal, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          isSubmitted = _state.isSubmitted,
          address = _state.address,
          amount = _state.amount;
      var _props = this.props,
          name = _props.name,
          data = _props.data;
      var balance = data.balance;


      var linked = _swValuelink2.default.all(this, 'address', 'amount');
      var isDisabled = !address || !amount;

      if (isSubmitted) {
        linked.amount.check(function (value) {
          return value > 0.01;
        }, 'Amount must be greater than 0.05 ');
        linked.amount.check(function (value) {
          return value < balance;
        }, 'Amount must be bigger your balance');
      }

      return _react2.default.createElement(
        _Modal2.default,
        { name: name, title: 'Withdraw ' + data.currency.toUpperCase() },
        _react2.default.createElement(
          'p',
          { style: { fontSize: '16px' } },
          'Please notice, that you need to have minimum 0.01 amount ',
          _react2.default.createElement('br', null),
          ' of the ETH on your wallet, to use it for Ethereum miners fee'
        ),
        _react2.default.createElement(
          _FieldLabel2.default,
          { inRow: true },
          'Address'
        ),
        _react2.default.createElement(_Input2.default, { valueLink: linked.address, pattern: '0-9a-zA-Z' }),
        _react2.default.createElement(
          _FieldLabel2.default,
          { inRow: true },
          'Amount'
        ),
        _react2.default.createElement(_Input2.default, { valueLink: linked.amount, pattern: '0-9\\.' }),
        !linked.amount.error && _react2.default.createElement(
          'div',
          { styleName: 'note' },
          'No less than 0.01'
        ),
        _react2.default.createElement(
          _Button2.default,
          {
            styleName: 'button',
            brand: true,
            fullWidth: true,
            disabled: isDisabled,
            onClick: this.handleSubmit
          },
          'Transfer'
        )
      );
    }
  }]);
  return WithdrawModal;
}(_react2.default.Component), _class2.propTypes = {
  name: _propTypes2.default.string,
  data: _propTypes2.default.object
}, _temp2)) || _class);
exports.default = WithdrawModal;

/***/ }),
/* 1241 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"note":"_rh3p5","button":"_36O4pp"};

/***/ }),
/* 1242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redaction = __webpack_require__(25);

var _momentWithLocalesEs = __webpack_require__(268);

var _momentWithLocalesEs2 = _interopRequireDefault(_momentWithLocalesEs);

var _actions = __webpack_require__(12);

var _actions2 = _interopRequireDefault(_actions);

var _swValuelink = __webpack_require__(81);

var _swValuelink2 = _interopRequireDefault(_swValuelink);

var _helpers = __webpack_require__(11);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _PrivateKeysModal = __webpack_require__(1243);

var _PrivateKeysModal2 = _interopRequireDefault(_PrivateKeysModal);

var _Field = __webpack_require__(1244);

var _Field2 = _interopRequireDefault(_Field);

var _Modal = __webpack_require__(194);

var _Modal2 = _interopRequireDefault(_Modal);

var _Button = __webpack_require__(33);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrivateKeysModal = (_dec = (0, _redaction.connect)({
  ethData: 'user.ethData',
  btcData: 'user.btcData'
}), _dec2 = (0, _reactCssModules2.default)(_PrivateKeysModal2.default, { allowMultiple: true }), _dec(_class = _dec2(_class = (_temp2 = _class2 = function (_React$PureComponent) {
  (0, _inherits3.default)(PrivateKeysModal, _React$PureComponent);

  function PrivateKeysModal() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PrivateKeysModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PrivateKeysModal.__proto__ || (0, _getPrototypeOf2.default)(PrivateKeysModal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      view: 'saveKeys', // saveKeys, checkKeys
      ethValidated: false,
      btcValidated: false
    }, _this.changeView = function (view) {
      _this.setState({
        view: view
      });
    }, _this.close = function () {
      var name = _this.props.name;


      _helpers.localStorage.setItem(_helpers.constants.localStorage.privateKeysSaved, true);
      _actions2.default.modals.close(name);
    }, _this.getText = function () {
      var _this$props = _this.props,
          ethData = _this$props.ethData,
          btcData = _this$props.btcData;


      var text = '\n' + window.location.hostname + ' emergency instruction\n\r\n\n\r\n\n#ETHEREUM\n\r\n\n\r\n\nEthereum address: ' + ethData.address + '  \r\n\nPrivate key: ' + ethData.privateKey + '\r\n\n\r\n\n\r\n\nHow to access tokens and ethers: \r\n\n1. Go here https://www.myetherwallet.com/#send-transaction \r\n\n2. Select \'Private key\'\r\n\n3. paste private key to input and click "unlock"\r\n\n\r\n\n\r\n\n\r\n\n# BITCOIN\r\n\n\r\n\n\r\n\nBitcoin address: ' + btcData.address + '\r\n\nPrivate key: ' + btcData.privateKey + '\r\n\n\r\n\n\r\n\n1. Go to blockchain.info\r\n\n2. login\r\n\n3. Go to settings > addresses > import\r\n\n4. paste private key and click "Ok"\r\n\n\r\n\n\r\n\n* We don`t store your private keys and will not be able to restore them!\n    ';

      return text;
    }, _this.handleDownload = function () {
      var element = document.createElement('a');
      var text = _this.getText();
      var message = 'Check your browser downloads';

      element.setAttribute('href', 'data:text/plaincharset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', window.location.hostname + '_keys_' + (0, _momentWithLocalesEs2.default)().format('DD.MM.YYYY') + '.txt');

      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);

      _this.changeView('checkKeys');

      _actions2.default.notifications.show(_helpers.constants.notifications.Message, {
        message: message
      });
    }, _this.handleSendByEmail = function () {
      var text = _this.getText();

      window.open('mailto:?subject=Your_Subject&body=' + text);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PrivateKeysModal, [{
    key: 'render',
    value: function render() {
      var view = this.state.view;
      var _props = this.props,
          name = _props.name,
          ethData = _props.ethData,
          btcData = _props.btcData;


      var ethValidated = _swValuelink2.default.state(this, 'ethValidated');
      var btcValidated = _swValuelink2.default.state(this, 'btcValidated');
      var isValidated = ethValidated.value && btcValidated.value;

      return _react2.default.createElement(
        _Modal2.default,
        {
          styleName: 'modal',
          name: name,
          showCloseButton: false,
          whiteLogo: true,
          title: 'CAUTION!'
        },
        _react2.default.createElement(
          'div',
          { styleName: 'content' },
          view === 'saveKeys' ? _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'div',
              { styleName: 'title' },
              'Before you continue be sure to save your private keys!',
              _react2.default.createElement('br', null),
              'It`s very important because If you don`t',
              _react2.default.createElement('br', null),
              'there is a big chance you`ll loose your money.'
            ),
            _react2.default.createElement(
              'div',
              { styleName: 'subTitle' },
              'We don`t store your private keys and will not be able to restore them!'
            ),
            _react2.default.createElement(
              _Button2.default,
              { brand: true, styleName: 'button', onClick: this.handleDownload },
              'Download instruction'
            )
          ) : _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'div',
              { styleName: 'title' },
              'Please fill information below from instruction.txt file. We`d like to be sure that you saved the private keys before you can continue to the site.'
            ),
            _react2.default.createElement(_Field2.default, {
              label: ethData.currency,
              privateKey: ethData.privateKey,
              valueLink: ethValidated
            }),
            _react2.default.createElement(_Field2.default, {
              label: btcData.currency,
              privateKey: btcData.privateKey,
              valueLink: btcValidated
            }),
            isValidated && _react2.default.createElement(
              _Button2.default,
              { white: true, styleName: 'button', onClick: this.close },
              'GO TO THE SITE!'
            )
          )
        )
      );
    }
  }]);
  return PrivateKeysModal;
}(_react2.default.PureComponent), _class2.propTypes = {
  name: _propTypes2.default.string,
  ethData: _propTypes2.default.object.isRequired,
  btcData: _propTypes2.default.object.isRequired
}, _temp2)) || _class) || _class);
exports.default = PrivateKeysModal;

/***/ }),
/* 1243 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modal":"_3ixJuZ","content":"_3o3Tl_","title":"_1HvQwA","subTitle":"_2vKFTm","button":"_19cTFn"};

/***/ }),
/* 1244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _swValuelink = __webpack_require__(81);

var _swValuelink2 = _interopRequireDefault(_swValuelink);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Field = __webpack_require__(1245);

var _Field2 = _interopRequireDefault(_Field);

var _Input = __webpack_require__(188);

var _Input2 = _interopRequireDefault(_Input);

var _Button = __webpack_require__(33);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Field2 = (_dec = (0, _reactCssModules2.default)(_Field2.default), _dec(_class = (_temp2 = _class2 = function (_React$Component) {
  (0, _inherits3.default)(Field2, _React$Component);

  function Field2() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Field2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Field2.__proto__ || (0, _getPrototypeOf2.default)(Field2)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      error: false,
      success: false
    }, _this.handleCheck = function () {
      var _this$state = _this.state,
          value = _this$state.value,
          error = _this$state.error,
          success = _this$state.success;
      var _this$props = _this.props,
          valueLink = _this$props.valueLink,
          privateKey = _this$props.privateKey;


      if (error || success) {
        return;
      }

      if (value !== privateKey) {
        _this.setState({
          error: true
        });
      } else {
        valueLink.set(true);
        _this.setState({
          success: true
        });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Field2, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          error = _state.error,
          success = _state.success;
      var label = this.props.label;


      var linkedValue = _swValuelink2.default.state(this, 'value');

      return _react2.default.createElement(
        'div',
        { styleName: 'container' },
        _react2.default.createElement(
          'div',
          { styleName: 'section' },
          _react2.default.createElement(
            'div',
            { styleName: 'label' },
            label.toUpperCase()
          ),
          _react2.default.createElement(_Input2.default, {
            styleName: 'input',
            placeholder: 'Write private key here...',
            valueLink: linkedValue
          }),
          _react2.default.createElement(
            _Button2.default,
            {
              styleName: 'button',
              white: !success,
              green: success,
              onClick: this.handleCheck
            },
            success ? 'OK' : 'Check'
          )
        ),
        error && _react2.default.createElement(
          'div',
          { styleName: 'error' },
          'You should pass correct value! Reload page and enter key again'
        )
      );
    }
  }]);
  return Field2;
}(_react2.default.Component), _class2.propTypes = {
  label: _propTypes2.default.string.isRequired,
  privateKey: _propTypes2.default.string.isRequired,
  valueLink: _propTypes2.default.object.isRequired
}, _temp2)) || _class);
exports.default = Field2;

/***/ }),
/* 1245 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"_2VJQBX","section":"_3kogcs","label":"_2soNit","input":"BtOAgk","button":"guRICj","error":"vB1kUx"};

/***/ }),
/* 1246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(65);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _modal = __webpack_require__(276);

var _controls = __webpack_require__(96);

var _forms = __webpack_require__(145);

var _swValuelink = __webpack_require__(81);

var _swValuelink2 = _interopRequireDefault(_swValuelink);

var _actions = __webpack_require__(12);

var _actions2 = _interopRequireDefault(_actions);

var _helpers = __webpack_require__(11);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _EosModal = __webpack_require__(1249);

var _EosModal2 = _interopRequireDefault(_EosModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EosModal = (_dec = (0, _reactCssModules2.default)(_EosModal2.default), _dec(_class = function (_React$Component) {
  (0, _inherits3.default)(EosModal, _React$Component);

  function EosModal() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, EosModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EosModal.__proto__ || (0, _getPrototypeOf2.default)(EosModal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      accountName: '',
      privateKey: '',
      error: ''
    }, _this.handleSubmit = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var _this$state, accountName, privateKey;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$state = _this.state, accountName = _this$state.accountName, privateKey = _this$state.privateKey;


              _actions2.default.loader.show(true);

              _context.prev = 2;
              _context.next = 5;
              return _actions2.default.eos.init();

            case 5:
              _context.next = 7;
              return _actions2.default.eos.register(accountName, privateKey);

            case 7:
              _context.next = 9;
              return _actions2.default.eos.getBalance();

            case 9:

              _actions2.default.modals.close(_helpers.constants.modals.Eos);
              _context.next = 16;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context['catch'](2);

              console.error(_context.t0);
              _this.setState({ error: _context.t0.toString() });

            case 16:

              _actions2.default.loader.hide();

            case 17:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2, [[2, 12]]);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(EosModal, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          accountName = _state.accountName,
          privateKey = _state.privateKey,
          error = _state.error;
      var name = this.props.name;


      var linked = _swValuelink2.default.all(this, 'accountName', 'privateKey');
      var isDisabled = !accountName || !privateKey;

      return _react2.default.createElement(
        _modal.Modal,
        { name: name, title: 'EOS Login' },
        _react2.default.createElement(
          _forms.FieldLabel,
          { inRow: true },
          'Account name'
        ),
        _react2.default.createElement(_forms.Input, { valueLink: linked.accountName }),
        _react2.default.createElement(
          _forms.FieldLabel,
          { inRow: true },
          'Private key'
        ),
        _react2.default.createElement(_forms.Input, { valueLink: linked.privateKey }),
        error && _react2.default.createElement(
          'div',
          { styleName: 'error' },
          'Sorry, error occured during activation'
        ),
        _react2.default.createElement(
          _controls.Button,
          {
            styleName: 'button',
            brand: true,
            fullWidth: true,
            disabled: isDisabled,
            onClick: this.handleSubmit
          },
          'Login'
        )
      );
    }
  }]);
  return EosModal;
}(_react2.default.Component)) || _class);
exports.default = EosModal;

/***/ }),
/* 1247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = __webpack_require__(11);

var _classnames = __webpack_require__(44);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ModalContainer = __webpack_require__(1248);

var _ModalContainer2 = _interopRequireDefault(_ModalContainer);

var _Overlay = __webpack_require__(471);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Center = __webpack_require__(472);

var _Center2 = _interopRequireDefault(_Center);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalContainer = (_dec = (0, _reactCssModules2.default)(_ModalContainer2.default, { allowMultiple: true }), _dec(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(ModalContainer, _Component);

  function ModalContainer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ModalContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ModalContainer.__proto__ || (0, _getPrototypeOf2.default)(ModalContainer)).call.apply(_ref, [this].concat(args))), _this), _this.handleMount = function (el) {
      if (el) {
        setTimeout(function () {
          el.classList.add(_ModalContainer2.default.mounted);
        }, 0);
      }
    }, _this.close = function () {
      var _this$props = _this.props,
          disableClose = _this$props.disableClose,
          onClose = _this$props.onClose;


      if (!disableClose) {
        onClose();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ModalContainer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          fullWidth = _props.fullWidth;

      // TODO move overflow to Modal from Center

      var modalContainerStyleName = (0, _classnames2.default)('modalContainer', {
        'fullWidth': fullWidth
      });

      return _react2.default.createElement(
        _Overlay2.default,
        { onClick: this.close },
        _react2.default.createElement(
          _Center2.default,
          { scrollable: true },
          _react2.default.createElement(
            'div',
            {
              styleName: modalContainerStyleName,
              ref: this.handleMount,
              onClick: function onClick(event) {
                return event.stopPropagation();
              }
            },
            children
          )
        )
      );
    }
  }]);
  return ModalContainer;
}(_react.Component), _class2.propTypes = {
  children: _propTypes2.default.any.isRequired,
  fullWidth: _propTypes2.default.bool,
  disableClose: _propTypes2.default.bool,
  onClose: _propTypes2.default.func.isRequired
}, _temp2)) || _class);
exports.default = ModalContainer;

/***/ }),
/* 1248 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modalContainer":"_5wv85l","fullWidth":"_3v15t0","mounted":"_2elaml"};

/***/ }),
/* 1249 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"_3EXSN4","error":"vZrYLm"};

/***/ }),
/* 1250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(12);

var _actions2 = _interopRequireDefault(_actions);

var _helpers = __webpack_require__(11);

var _swValuelink = __webpack_require__(81);

var _swValuelink2 = _interopRequireDefault(_swValuelink);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Approve = __webpack_require__(1251);

var _Approve2 = _interopRequireDefault(_Approve);

var _modal = __webpack_require__(276);

var _controls = __webpack_require__(96);

var _forms = __webpack_require__(145);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Offer = (_dec = (0, _reactCssModules2.default)(_Approve2.default), _dec(_class = (_temp2 = _class2 = function (_React$Component) {
  (0, _inherits3.default)(Offer, _React$Component);

  function Offer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Offer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Offer.__proto__ || (0, _getPrototypeOf2.default)(Offer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      amount: 999999,
      isSubmitted: false
    }, _this.handleApprove = function () {
      var amount = _this.state.amount;
      var _this$props$data = _this.props.data,
          decimals = _this$props$data.decimals,
          contractAddress = _this$props$data.contractAddress,
          name = _this$props$data.name;

      var message = 'Your approve ' + amount + ' tokens on contract address ' + contractAddress;

      if (amount <= 0 || !amount) {
        _this.setState({
          isSubmitted: true
        });
        return;
      }

      _actions2.default.loader.show(true, true);

      _actions2.default.token.approve(contractAddress, amount, decimals, name).then(function () {
        _actions2.default.loader.hide();
        _actions2.default.notifications.show(_helpers.constants.notifications.Message, { message: message });
        _actions2.default.modals.close(_helpers.constants.modals.Approve);
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Offer, [{
    key: 'render',
    value: function render() {
      var name = this.props.name;
      var _state = this.state,
          amount = _state.amount,
          isSubmitted = _state.isSubmitted;

      var linked = _swValuelink2.default.all(this, 'amount');
      var isDisabled = !amount;

      if (isSubmitted) {
        linked.amount.check(function (value) {
          return value <= 0;
        }, 'Amount must be greater than 1 ');
      }

      return _react2.default.createElement(
        _modal.Modal,
        { name: name, title: 'Approve token' },
        _react2.default.createElement(
          'div',
          { styleName: 'content' },
          _react2.default.createElement(
            'p',
            null,
            'Please set the amount limit that the swap smart contract can deduct from your account. We do not recommend setting any limits.'
          ),
          _react2.default.createElement(
            _forms.FieldLabel,
            { inRow: true },
            'Amount'
          ),
          _react2.default.createElement(_forms.Input, { valueLink: linked.amount, type: 'number' }),
          _react2.default.createElement(
            _controls.Button,
            {
              styleName: 'button',
              brand: true,
              fullWidth: true,
              disabled: isDisabled,
              onClick: this.handleApprove
            },
            'Approve'
          )
        )
      );
    }
  }]);
  return Offer;
}(_react2.default.Component), _class2.propTypes = {
  name: _propTypes2.default.string
}, _temp2)) || _class);
exports.default = Offer;

/***/ }),
/* 1251 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"_2sLZn8","content":"_153K8d"};

/***/ }),
/* 1252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(12);

var _actions2 = _interopRequireDefault(_actions);

var _swValuelink = __webpack_require__(81);

var _swValuelink2 = _interopRequireDefault(_swValuelink);

var _helpers = __webpack_require__(11);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ImportKeys = __webpack_require__(1253);

var _ImportKeys2 = _interopRequireDefault(_ImportKeys);

var _Group = __webpack_require__(1254);

var _Group2 = _interopRequireDefault(_Group);

var _modal = __webpack_require__(276);

var _forms = __webpack_require__(145);

var _controls = __webpack_require__(96);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImportKeys = (_dec = (0, _reactCssModules2.default)(_ImportKeys2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(ImportKeys, _Component);

  function ImportKeys() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ImportKeys);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ImportKeys.__proto__ || (0, _getPrototypeOf2.default)(ImportKeys)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      ethKey: '',
      btcKey: '',

      isSubmittedEth: false,
      isSubmittedBtc: false,

      isImportedEth: false,
      isImportedBtc: false,

      isDisabled: true
    }, _this.handleEthImportKey = function () {
      var ethKey = _this.state.ethKey;


      if (!ethKey || ethKey.length < 40) {
        _this.setState({ isSubmittedEth: true });
        return;
      } else {
        _this.setState({ isDisabled: false });
      }

      try {
        _actions2.default.eth.login(ethKey);
        _this.setState({
          isImportedEth: true,
          isDisabled: false
        });
      } catch (e) {
        _this.setState({ isSubmittedEth: true });
      }
    }, _this.handleBtcImportKey = function () {
      var btcKey = _this.state.btcKey;


      if (!btcKey || btcKey.length < 27) {
        _this.setState({ isSubmittedBtc: true });
        return;
      } else {
        _this.setState({ isDisabled: false });
      }

      try {
        _actions2.default.btc.login(btcKey);
        _this.setState({
          isImportedBtc: true,
          isDisabled: false
        });
      } catch (e) {
        _this.setState({ isSubmittedBtc: true });
      }
    }, _this.handleImportKeys = function () {
      var isDisabled = _this.state.isDisabled;


      if (!isDisabled) {
        window.location.reload();
      }
    }, _this.handleCloseModal = function () {
      _actions2.default.modals.close(_this.props.name);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ImportKeys, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          isSubmittedEth = _state.isSubmittedEth,
          isSubmittedBtc = _state.isSubmittedBtc,
          isImportedEth = _state.isImportedEth,
          isImportedBtc = _state.isImportedBtc,
          isDisabled = _state.isDisabled;

      var linked = _swValuelink2.default.all(this, 'ethKey', 'btcKey');

      if (isSubmittedEth) {
        linked.ethKey.check(function (value) {
          return value !== '';
        }, 'Please enter ETH private key');
        linked.ethKey.check(function (value) {
          return value.length > 40;
        }, 'Please valid ETH private key');
      }

      if (isSubmittedBtc) {
        linked.btcKey.check(function (value) {
          return value !== '';
        }, 'Please enter BTC private key');
        linked.btcKey.check(function (value) {
          return value.length > 27;
        }, 'Please valid BTC private key');
      }

      return _react2.default.createElement(
        _modal.Modal,
        { name: this.props.name, title: 'Import keys' },
        _react2.default.createElement(
          'div',
          { styleName: 'modal' },
          _react2.default.createElement(
            'p',
            null,
            'This procedure will rewrite your private key. If you are not sure about it, we recommend to press cancel'
          ),
          _react2.default.createElement(
            _forms.FieldLabel,
            null,
            'Please enter eth private key'
          ),
          _react2.default.createElement(_Group2.default, {
            inputLink: linked.ethKey,
            placeholder: 'Key',
            disabled: isImportedEth,
            onClick: this.handleEthImportKey
          }),
          _react2.default.createElement(
            _forms.FieldLabel,
            null,
            'Please enter btc private key in WIF format'
          ),
          _react2.default.createElement(_Group2.default, {
            inputLink: linked.btcKey,
            placeholder: 'Key in WIF format',
            disabled: isImportedBtc,
            onClick: this.handleBtcImportKey
          }),
          _react2.default.createElement(
            _controls.Button,
            { brand: true, disabled: isDisabled, styleName: 'button', onClick: this.handleImportKeys },
            ' Confirm'
          ),
          _react2.default.createElement(
            _controls.Button,
            { gray: true, styleName: 'button', onClick: this.handleCloseModal },
            ' Cancel'
          )
        )
      );
    }
  }]);
  return ImportKeys;
}(_react.Component)) || _class);
exports.default = ImportKeys;

/***/ }),
/* 1253 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modal":"_25Ymyf","button":"_2VqYnV"};

/***/ }),
/* 1254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Group = __webpack_require__(1255);

var _Group2 = _interopRequireDefault(_Group);

var _forms = __webpack_require__(145);

var _controls = __webpack_require__(96);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Group = function Group(_ref) {
  var inputLink = _ref.inputLink,
      placeholder = _ref.placeholder,
      onClick = _ref.onClick,
      disabled = _ref.disabled;
  return _react2.default.createElement(
    'div',
    { styleName: 'group' },
    _react2.default.createElement(_forms.Input, { valueLink: inputLink, readOnly: disabled, placeholder: placeholder, styleName: 'input', pattern: '0-9a-zA-Z' }),
    _react2.default.createElement(
      _controls.Button,
      { brand: true, onClick: onClick, disabled: disabled, styleName: 'button' },
      ' Import'
    )
  );
};

exports.default = (0, _reactCssModules2.default)(Group, _Group2.default);

/***/ }),
/* 1255 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"group":"_3in6cA","input":"fWnzpt","button":"_2aNnxu"};

/***/ }),
/* 1256 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modalConductor":"qe8yZ6"};

/***/ }),
/* 1257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _keys = __webpack_require__(46);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redaction = __webpack_require__(25);

var _notifications = __webpack_require__(1258);

var _notifications2 = _interopRequireDefault(_notifications);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _NotificationConductor = __webpack_require__(1264);

var _NotificationConductor2 = _interopRequireDefault(_NotificationConductor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotificationConductor = (_dec = (0, _redaction.connect)({
  notifications: 'notifications'
}), _dec2 = (0, _reactCssModules2.default)(_NotificationConductor2.default), _dec(_class = _dec2(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(NotificationConductor, _Component);

  function NotificationConductor() {
    (0, _classCallCheck3.default)(this, NotificationConductor);
    return (0, _possibleConstructorReturn3.default)(this, (NotificationConductor.__proto__ || (0, _getPrototypeOf2.default)(NotificationConductor)).apply(this, arguments));
  }

  (0, _createClass3.default)(NotificationConductor, [{
    key: 'render',
    value: function render() {
      var notifications = this.props.notifications;


      var notificationNames = (0, _keys2.default)(notifications);
      var areNotificationsExist = Boolean(notificationNames.length);

      return areNotificationsExist && _react2.default.createElement(
        'div',
        { styleName: 'notificationConductor' },
        notificationNames.map(function (key) {
          var _notifications$key = notifications[key],
              name = _notifications$key.name,
              _notifications$key$da = _notifications$key.data,
              data = _notifications$key$da === undefined ? {} : _notifications$key$da;


          return _react2.default.createElement(_notifications2.default[name], {
            key: name,
            name: name,
            data: data
          });
        })
      );
    }
  }]);
  return NotificationConductor;
}(_react.Component), _class2.propTypes = {
  notifications: _propTypes2.default.object
}, _temp)) || _class) || _class);
exports.default = NotificationConductor;

/***/ }),
/* 1258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SuccessWithdraw = __webpack_require__(1259);

var _SuccessWithdraw2 = _interopRequireDefault(_SuccessWithdraw);

var _Message = __webpack_require__(1262);

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  SuccessWithdraw: _SuccessWithdraw2.default,
  Message: _Message2.default
};

/***/ }),
/* 1259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _SuccessWithdraw = __webpack_require__(1260);

var _SuccessWithdraw2 = _interopRequireDefault(_SuccessWithdraw);

var _Notification = __webpack_require__(474);

var _Notification2 = _interopRequireDefault(_Notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SuccessWithdraw = (_dec = (0, _reactCssModules2.default)(_SuccessWithdraw2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(SuccessWithdraw, _Component);

  function SuccessWithdraw() {
    (0, _classCallCheck3.default)(this, SuccessWithdraw);
    return (0, _possibleConstructorReturn3.default)(this, (SuccessWithdraw.__proto__ || (0, _getPrototypeOf2.default)(SuccessWithdraw)).apply(this, arguments));
  }

  (0, _createClass3.default)(SuccessWithdraw, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          _props$data = _props.data,
          amount = _props$data.amount,
          currency = _props$data.currency,
          address = _props$data.address;


      return _react2.default.createElement(
        _Notification2.default,
        { name: name },
        _react2.default.createElement(
          'span',
          { styleName: 'value' },
          amount,
          ' ',
          currency
        ),
        ' were successfully transferred to ',
        address,
        '!'
      );
    }
  }]);
  return SuccessWithdraw;
}(_react.Component)) || _class);
exports.default = SuccessWithdraw;

/***/ }),
/* 1260 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"value":"_3M190E"};

/***/ }),
/* 1261 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"_1rGs3i","mounted":"_3e2bwy","removed":"_359s7d","notification":"_2HVVjT","content":"_2sHyls"};

/***/ }),
/* 1262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Message = __webpack_require__(1263);

var _Message2 = _interopRequireDefault(_Message);

var _Notification = __webpack_require__(474);

var _Notification2 = _interopRequireDefault(_Notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = (_dec = (0, _reactCssModules2.default)(_Message2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(Message, _Component);

  function Message() {
    (0, _classCallCheck3.default)(this, Message);
    return (0, _possibleConstructorReturn3.default)(this, (Message.__proto__ || (0, _getPrototypeOf2.default)(Message)).apply(this, arguments));
  }

  (0, _createClass3.default)(Message, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          message = _props.data.message;


      return _react2.default.createElement(
        _Notification2.default,
        { name: name },
        _react2.default.createElement(
          'span',
          { styleName: 'value' },
          message
        )
      );
    }
  }]);
  return Message;
}(_react.Component)) || _class);
exports.default = Message;

/***/ }),
/* 1263 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"value":"xt8YYA"};

/***/ }),
/* 1264 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"notificationConductor":"_8T39zz"};

/***/ })
],[476]);