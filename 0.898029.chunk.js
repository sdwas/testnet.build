webpackJsonp([0],{

/***/ 1228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(135);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _typeof2 = __webpack_require__(265);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ecc = __webpack_require__(1233);
var Fcbuffer = __webpack_require__(1234);
var EosApi = __webpack_require__(1240);
var assert = __webpack_require__(25);

var Structs = __webpack_require__(1235);
var AbiCache = __webpack_require__(1276);
var writeApiGen = __webpack_require__(1277);
var format = __webpack_require__(1243);
var schema = __webpack_require__(1242);
var pkg = __webpack_require__(1278);

var Eos = function Eos() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  config = Object.assign({}, {
    httpEndpoint: 'http://127.0.0.1:8888',
    debug: false,
    verbose: false,
    broadcast: true,
    sign: true
  }, config);

  var defaultLogger = {
    log: config.verbose ? console.log : null,
    error: console.error
  };
  config.logger = Object.assign({}, defaultLogger, config.logger);

  return createEos(config);
};

module.exports = Eos;

Object.assign(Eos, {
  version: pkg.version,
  modules: {
    format: format,
    api: EosApi,
    ecc: ecc,
    json: {
      api: EosApi.api,
      schema: schema
    },
    Fcbuffer: Fcbuffer
  },

  /** @deprecated */
  Testnet: function Testnet(config) {
    console.error('deprecated, change Eos.Testnet(..) to just Eos(..)');
    return Eos(config);
  },

  /** @deprecated */
  Localnet: function Localnet(config) {
    console.error('deprecated, change Eos.Localnet(..) to just Eos(..)');
    return Eos(config);
  }
});

function createEos(config) {
  var network = config.httpEndpoint != null ? EosApi(config) : null;
  config.network = network;

  var abiCache = AbiCache(network, config);
  config.abiCache = abiCache;

  if (!config.chainId) {
    config.chainId = 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f';
  }

  if (network) {
    checkChainId(network, config.chainId, config.logger);
  }

  if (config.mockTransactions != null) {
    if (typeof config.mockTransactions === 'string') {
      var mock = config.mockTransactions;
      config.mockTransactions = function () {
        return mock;
      };
    }
    assert.equal((0, _typeof3.default)(config.mockTransactions), 'function', 'config.mockTransactions');
  }

  var _Structs = Structs(config),
      structs = _Structs.structs,
      types = _Structs.types,
      fromBuffer = _Structs.fromBuffer,
      toBuffer = _Structs.toBuffer;

  var eos = mergeWriteFunctions(config, EosApi, structs);

  Object.assign(eos, { fc: {
      structs: structs,
      types: types,
      fromBuffer: fromBuffer,
      toBuffer: toBuffer,
      abiCache: abiCache
    } });

  Object.assign(eos, { modules: {
      format: format
    } });

  if (!config.signProvider) {
    config.signProvider = defaultSignProvider(eos, config);
  }

  return eos;
}

/**
  Merge in write functions (operations).  Tested against existing methods for
  name conflicts.

  @arg {object} config.network - read-only api calls
  @arg {object} EosApi - api[EosApi] read-only api calls
  @return {object} - read and write method calls (create and sign transactions)
  @throw {TypeError} if a funciton name conflicts
*/
function mergeWriteFunctions(config, EosApi, structs) {
  var network = config.network;


  var merge = Object.assign({}, network);

  var writeApi = writeApiGen(EosApi, network, structs, config, schema);
  throwOnDuplicate(merge, writeApi, 'Conflicting methods in EosApi and Transaction Api');
  Object.assign(merge, writeApi);

  return merge;
}

function throwOnDuplicate(o1, o2, msg) {
  for (var key in o1) {
    if (o2[key]) {
      throw new TypeError(msg + ': ' + key);
    }
  }
}

/**
  The default sign provider is designed to interact with the available public
  keys (maybe just one), the transaction, and the blockchain to figure out
  the minimum set of signing keys.

  If only one key is available, the blockchain API calls are skipped and that
  key is used to sign the transaction.
*/
var defaultSignProvider = function defaultSignProvider(eos, config) {
  return function _callee(_ref) {
    var sign = _ref.sign,
        buf = _ref.buf,
        transaction = _ref.transaction;

    var keyProvider, keys, pvt, sigs, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, key, keyMap, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _key, isPrivate, isPublic, pubkeys;

    return _regenerator2.default.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            keyProvider = config.keyProvider;

            if (keyProvider) {
              _context.next = 3;
              break;
            }

            throw new TypeError('This transaction requires a config.keyProvider for signing');

          case 3:
            keys = keyProvider;

            if (typeof keyProvider === 'function') {
              keys = keyProvider({ transaction: transaction });
            }

            // keyProvider may return keys or Promise<keys>
            _context.next = 7;
            return _regenerator2.default.awrap(Promise.resolve(keys));

          case 7:
            keys = _context.sent;


            if (!Array.isArray(keys)) {
              keys = [keys];
            }

            keys = keys.map(function (key) {
              try {
                // normalize format (WIF => PVT_K1_base58privateKey)
                return { private: ecc.PrivateKey(key).toString() };
              } catch (e) {
                // normalize format (EOSKey => PUB_K1_base58publicKey)
                return { public: ecc.PublicKey(key).toString() };
              }
              assert(false, 'expecting public or private keys from keyProvider');
            });

            if (keys.length) {
              _context.next = 12;
              break;
            }

            throw new Error('missing key, check your keyProvider');

          case 12:
            if (!(keys.length === 1 && keys[0].private)) {
              _context.next = 15;
              break;
            }

            pvt = keys[0].private;
            return _context.abrupt('return', sign(buf, pvt));

          case 15:
            if (!(config.httpEndpoint == null)) {
              _context.next = 37;
              break;
            }

            sigs = [];
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 20;

            for (_iterator = keys[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              key = _step.value;

              sigs.push(sign(buf, key.private));
            }
            _context.next = 28;
            break;

          case 24:
            _context.prev = 24;
            _context.t0 = _context['catch'](20);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 28:
            _context.prev = 28;
            _context.prev = 29;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 31:
            _context.prev = 31;

            if (!_didIteratorError) {
              _context.next = 34;
              break;
            }

            throw _iteratorError;

          case 34:
            return _context.finish(31);

          case 35:
            return _context.finish(28);

          case 36:
            return _context.abrupt('return', sigs);

          case 37:
            keyMap = new Map();

            // keys are either public or private keys

            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context.prev = 41;
            for (_iterator2 = keys[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              _key = _step2.value;
              isPrivate = _key.private != null;
              isPublic = _key.public != null;


              if (isPrivate) {
                keyMap.set(ecc.privateToPublic(_key.private), _key.private);
              } else {
                keyMap.set(_key.public, null);
              }
            }

            _context.next = 49;
            break;

          case 45:
            _context.prev = 45;
            _context.t1 = _context['catch'](41);
            _didIteratorError2 = true;
            _iteratorError2 = _context.t1;

          case 49:
            _context.prev = 49;
            _context.prev = 50;

            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }

          case 52:
            _context.prev = 52;

            if (!_didIteratorError2) {
              _context.next = 55;
              break;
            }

            throw _iteratorError2;

          case 55:
            return _context.finish(52);

          case 56:
            return _context.finish(49);

          case 57:
            pubkeys = Array.from(keyMap.keys());
            return _context.abrupt('return', eos.getRequiredKeys(transaction, pubkeys).then(function (_ref2) {
              var required_keys = _ref2.required_keys;

              if (!required_keys.length) {
                throw new Error('missing required keys for ' + JSON.stringify(transaction));
              }

              var pvts = [],
                  missingKeys = [];

              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (var _iterator3 = required_keys[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var requiredKey = _step3.value;

                  // normalize (EOSKey.. => PUB_K1_Key..)
                  requiredKey = ecc.PublicKey(requiredKey).toString();

                  var wif = keyMap.get(requiredKey);
                  if (wif) {
                    pvts.push(wif);
                  } else {
                    missingKeys.push(requiredKey);
                  }
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }

              if (missingKeys.length !== 0) {
                assert(typeof keyProvider === 'function', 'keyProvider function is needed for private key lookup');

                // const pubkeys = missingKeys.map(key => ecc.PublicKey(key).toStringLegacy())
                keyProvider({ pubkeys: missingKeys }).forEach(function (pvt) {
                  pvts.push(pvt);
                });
              }

              var sigs = [];
              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = undefined;

              try {
                for (var _iterator4 = pvts[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  var _pvt = _step4.value;

                  sigs.push(sign(buf, _pvt));
                }
              } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion4 && _iterator4.return) {
                    _iterator4.return();
                  }
                } finally {
                  if (_didIteratorError4) {
                    throw _iteratorError4;
                  }
                }
              }

              return sigs;
            }));

          case 59:
          case 'end':
            return _context.stop();
        }
      }
    }, null, this, [[20, 24, 28, 36], [29,, 31, 35], [41, 45, 49, 57], [50,, 52, 56]]);
  };
};

function checkChainId(network, chainId, logger) {
  network.getInfo({}).then(function (info) {
    if (info.chain_id !== chainId) {
      if (logger.error) {
        logger.error('chainId mismatch, signatures will not match transaction authority. ' + ('expected ' + chainId + ' !== actual ' + info.chain_id));
      }
    }
  }).catch(function (error) {
    if (logger.error) {
      logger.error(error);
    }
  });
}

/***/ }),

/***/ 1229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createHash = __webpack_require__(54);
var createHmac = __webpack_require__(105);

/** @namespace hash */

/** @arg {string|Buffer} data
    @arg {string} [encoding = null] - 'hex', 'binary' or 'base64'
    @return {string|Buffer} - Buffer when encoding is null, or string
*/
function sha1(data, encoding) {
    return createHash('sha1').update(data).digest(encoding);
}

/** @arg {string|Buffer} data
    @arg {string} [encoding = null] - 'hex', 'binary' or 'base64'
    @return {string|Buffer} - Buffer when encoding is null, or string
*/
function sha256(data, encoding) {
    return createHash('sha256').update(data).digest(encoding);
}

/** @arg {string|Buffer} data
    @arg {string} [encoding = null] - 'hex', 'binary' or 'base64'
    @return {string|Buffer} - Buffer when encoding is null, or string
*/
function sha512(data, encoding) {
    return createHash('sha512').update(data).digest(encoding);
}

function HmacSHA256(buffer, secret) {
    return createHmac('sha256', secret).update(buffer).digest();
}

function ripemd160(data) {
    return createHash('rmd160').update(data).digest();
}

// function hash160(buffer) {
//   return ripemd160(sha256(buffer))
// }
//
// function hash256(buffer) {
//   return sha256(sha256(buffer))
// }

//
// function HmacSHA512(buffer, secret) {
//   return crypto.createHmac('sha512', secret).update(buffer).digest()
// }

module.exports = {
    sha1: sha1,
    sha256: sha256,
    sha512: sha512,
    HmacSHA256: HmacSHA256,
    ripemd160: ripemd160
    // hash160: hash160,
    // hash256: hash256,
    // HmacSHA512: HmacSHA512
};

/***/ }),

/***/ 1230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var assert = __webpack_require__(25);
var ecurve = __webpack_require__(91);
var BigInteger = __webpack_require__(33);
var secp256k1 = ecurve.getCurveByName('secp256k1');

var hash = __webpack_require__(1229);
var keyUtils = __webpack_require__(1231);

var G = secp256k1.G;
var n = secp256k1.n;

module.exports = PublicKey;

/** @param {ecurve.Point} public key */
function PublicKey(Q) {
    if (typeof Q === 'string') {
        var publicKey = PublicKey.fromString(Q);
        assert(publicKey != null, 'Invalid public key');
        return publicKey;
    } else if (Buffer.isBuffer(Q)) {
        return PublicKey.fromBuffer(Q);
    } else if ((typeof Q === 'undefined' ? 'undefined' : _typeof(Q)) === 'object' && Q.Q) {
        return PublicKey(Q.Q);
    }

    assert.equal(typeof Q === 'undefined' ? 'undefined' : _typeof(Q), 'object', 'Invalid public key');
    assert.equal(_typeof(Q.compressed), 'boolean', 'Invalid public key');

    function toBuffer() {
        var compressed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Q.compressed;

        return Q.getEncoded(compressed);
    }

    var pubdata = void 0; // cache

    // /**
    //     @todo secp224r1
    //     @return {string} PUB_K1_base58pubkey..
    // */
    // function toString() {
    //     if(pubdata) {
    //         return pubdata
    //     }
    //     pubdata = `PUB_K1_` + keyUtils.checkEncode(toBuffer(), 'K1')
    //     return pubdata;
    // }

    /** @todo rename to toStringLegacy */
    function toString() {
        return 'EOS' + keyUtils.checkEncode(toBuffer());
    }

    function toUncompressed() {
        var buf = Q.getEncoded(false);
        var point = ecurve.Point.decodeFrom(secp256k1, buf);
        return PublicKey.fromPoint(point);
    }

    /** @deprecated */
    function child(offset) {
        console.error('Deprecated warning: PublicKey.child');

        assert(Buffer.isBuffer(offset), "Buffer required: offset");
        assert.equal(offset.length, 32, "offset length");

        offset = Buffer.concat([toBuffer(), offset]);
        offset = hash.sha256(offset);

        var c = BigInteger.fromBuffer(offset);

        if (c.compareTo(n) >= 0) throw new Error("Child offset went out of bounds, try again");

        var cG = G.multiply(c);
        var Qprime = Q.add(cG);

        if (secp256k1.isInfinity(Qprime)) throw new Error("Child offset derived to an invalid key, try again");

        return PublicKey.fromPoint(Qprime);
    }

    function toHex() {
        return toBuffer().toString('hex');
    }

    return {
        Q: Q,
        toString: toString,
        // toStringLegacy,
        toUncompressed: toUncompressed,
        toBuffer: toBuffer,
        child: child,
        toHex: toHex
    };
}

PublicKey.isValid = function (text) {
    try {
        PublicKey(text);
        return true;
    } catch (e) {
        return false;
    }
};

PublicKey.fromBinary = function (bin) {
    return PublicKey.fromBuffer(new Buffer(bin, 'binary'));
};

PublicKey.fromBuffer = function (buffer) {
    return PublicKey(ecurve.Point.decodeFrom(secp256k1, buffer));
};

PublicKey.fromPoint = function (point) {
    return PublicKey(point);
};

/**
    @arg {string} public_key - like PUB_K1_base58pubkey..
    @return PublicKey or `null` (invalid)
*/
PublicKey.fromString = function (public_key) {
    try {
        return PublicKey.fromStringOrThrow(public_key);
    } catch (e) {
        return null;
    }
};

/**
    @arg {string} public_key - like PUB_K1_base58pubkey..
    @throws {Error} if public key is invalid
    @return PublicKey
*/
PublicKey.fromStringOrThrow = function (public_key) {
    assert(typeof public_key === 'undefined' ? 'undefined' : _typeof(public_key), 'string', 'public_key');
    var match = public_key.match(/^PUB_([A-Za-z0-9]+)_([A-Za-z0-9]+)$/);
    if (match === null) {
        // legacy
        if (/^EOS/.test(public_key)) {
            public_key = public_key.substring(3);
        }
        return PublicKey.fromBuffer(keyUtils.checkDecode(public_key));
    }
    assert(match.length === 3, 'Expecting public key like: PUB_K1_base58pubkey..');

    var _match = _slicedToArray(match, 3),
        keyType = _match[1],
        keyString = _match[2];

    assert.equal(keyType, 'K1', 'K1 private key expected');
    return PublicKey.fromBuffer(keyUtils.checkDecode(keyString, keyType));
};

PublicKey.fromHex = function (hex) {
    return PublicKey.fromBuffer(new Buffer(hex, 'hex'));
};

PublicKey.fromStringHex = function (hex) {
    return PublicKey.fromString(new Buffer(hex, 'hex'));
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),

/***/ 1231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var base58 = __webpack_require__(267);
var assert = __webpack_require__(25);
var randomBytes = __webpack_require__(55);

var hash = __webpack_require__(1229);

module.exports = {
    random32ByteBuffer: random32ByteBuffer,
    addEntropy: addEntropy,
    cpuEntropy: cpuEntropy,
    entropyCount: function entropyCount() {
        return _entropyCount;
    },
    checkDecode: checkDecode,
    checkEncode: checkEncode
};

var entropyPos = 0,
    _entropyCount = 0;

var externalEntropyArray = randomBytes(101);

/**
    Additional forms of entropy are used.  A week random number generator can run out of entropy.  This should ensure even the worst random number implementation will be reasonably safe.

    @arg {number} [cpuEntropyBits = 0] generate entropy on the fly.  This is
    not required, entropy can be added in advanced via addEntropy or initialize().

    @arg {boolean} [safe = true] false for testing, otherwise this will be
    true to ensure initialize() was called.

    @return a random buffer obtained from the secure random number generator.  Additional entropy is used.
*/
function random32ByteBuffer() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$cpuEntropyBits = _ref.cpuEntropyBits,
        cpuEntropyBits = _ref$cpuEntropyBits === undefined ? 0 : _ref$cpuEntropyBits,
        _ref$safe = _ref.safe,
        safe = _ref$safe === undefined ? true : _ref$safe;

    assert(typeof cpuEntropyBits === 'undefined' ? 'undefined' : _typeof(cpuEntropyBits), 'number', 'cpuEntropyBits');
    assert(typeof safe === 'undefined' ? 'undefined' : _typeof(safe), 'boolean', 'boolean');

    if (safe) {
        assert(_entropyCount >= 128, 'Call initialize() to add entropy');
    }

    // if(entropyCount > 0) {
    //     console.log(`Additional private key entropy: ${entropyCount} events`)
    // }

    var hash_array = [];
    hash_array.push(randomBytes(32));
    hash_array.push(Buffer.from(cpuEntropy(cpuEntropyBits)));
    hash_array.push(externalEntropyArray);
    hash_array.push(browserEntropy());
    return hash.sha256(Buffer.concat(hash_array));
}

/**
    Adds entropy.  This may be called many times while the amount of data saved
    is accumulatively reduced to 101 integers.  Data is retained in RAM for the
    life of this module.

    @example React <code>
    componentDidMount() {
        this.refs.MyComponent.addEventListener("mousemove", this.onEntropyEvent, {capture: false, passive: true})
    }
    componentWillUnmount() {
        this.refs.MyComponent.removeEventListener("mousemove", this.onEntropyEvent);
    }
    onEntropyEvent = (e) => {
        if(e.type === 'mousemove')
            key_utils.addEntropy(e.pageX, e.pageY, e.screenX, e.screenY)
        else
            console.log('onEntropyEvent Unknown', e.type, e)
    }
    </code>
*/
function addEntropy() {
    assert.equal(externalEntropyArray.length, 101, 'externalEntropyArray');

    for (var _len = arguments.length, ints = Array(_len), _key = 0; _key < _len; _key++) {
        ints[_key] = arguments[_key];
    }

    _entropyCount += ints.length;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = ints[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var i = _step.value;

            var pos = entropyPos++ % 101;
            var i2 = externalEntropyArray[pos] += i;
            if (i2 > 9007199254740991) externalEntropyArray[pos] = 0;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

/**
    This runs in just under 1 second and ensures a minimum of cpuEntropyBits
    bits of entropy are gathered.

    Based on more-entropy. @see https://github.com/keybase/more-entropy/blob/master/src/generator.iced

    @arg {number} [cpuEntropyBits = 128]
    @return {array} counts gathered by measuring variations in the CPU speed during floating point operations.
*/
function cpuEntropy() {
    var cpuEntropyBits = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 128;

    var collected = [];
    var lastCount = null;
    var lowEntropySamples = 0;
    while (collected.length < cpuEntropyBits) {
        var count = floatingPointCount();
        if (lastCount != null) {
            var delta = count - lastCount;
            if (Math.abs(delta) < 1) {
                lowEntropySamples++;
                continue;
            }
            // how many bits of entropy were in this sample
            var bits = Math.floor(log2(Math.abs(delta)) + 1);
            if (bits < 4) {
                if (bits < 2) {
                    lowEntropySamples++;
                }
                continue;
            }
            collected.push(delta);
        }
        lastCount = count;
    }
    if (lowEntropySamples > 10) {
        var pct = Number(lowEntropySamples / cpuEntropyBits * 100).toFixed(2);
        // Is this algorithm getting inefficient?
        console.warn('WARN: ' + pct + '% low CPU entropy re-sampled');
    }
    return collected;
}

/**
    @private
    Count while performing floating point operations during a fixed time
    (7 ms for example).  Using a fixed time makes this algorithm
    predictable in runtime.
*/
function floatingPointCount() {
    var workMinMs = 7;
    var d = Date.now();
    var i = 0,
        x = 0;
    while (Date.now() < d + workMinMs + 1) {
        x = Math.sin(Math.sqrt(Math.log(++i + x)));
    }
    return i;
}

var log2 = function log2(x) {
    return Math.log(x) / Math.LN2;
};

/**
    @private
    Attempt to gather and hash information from the browser's window, history, and supported mime types.  For non-browser environments this simply includes secure random data.  In any event, the information is re-hashed in a loop for 25 milliseconds seconds.

    @return {Buffer} 32 bytes
*/
function browserEntropy() {
    var entropyStr = Array(randomBytes(101)).join();
    try {
        entropyStr += new Date().toString() + " " + window.screen.height + " " + window.screen.width + " " + window.screen.colorDepth + " " + " " + window.screen.availHeight + " " + window.screen.availWidth + " " + window.screen.pixelDepth + navigator.language + " " + window.location + " " + window.history.length;

        for (var i = 0, mimeType; i < navigator.mimeTypes.length; i++) {
            mimeType = navigator.mimeTypes[i];
            entropyStr += mimeType.description + " " + mimeType.type + " " + mimeType.suffixes + " ";
        }
    } catch (error) {
        //nodejs:ReferenceError: window is not defined
        entropyStr += hash.sha256(new Date().toString());
    }

    var b = new Buffer(entropyStr);
    entropyStr += b.toString('binary') + " " + new Date().toString();

    var entropy = entropyStr;
    var start_t = Date.now();
    while (Date.now() - start_t < 25) {
        entropy = hash.sha256(entropy);
    }return entropy;
}

/**
  @arg {Buffer} keyBuffer data
  @arg {string} keyType = sha256x2, K1, etc
  @return {string} checksum encoded base58 string
*/
function checkEncode(keyBuffer) {
    var keyType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    assert(Buffer.isBuffer(keyBuffer), 'expecting keyBuffer<Buffer>');
    if (keyType === 'sha256x2') {
        // legacy
        var checksum = hash.sha256(hash.sha256(keyBuffer)).slice(0, 4);
        return base58.encode(Buffer.concat([keyBuffer, checksum]));
    } else {
        var check = [keyBuffer];
        if (keyType) {
            check.push(Buffer.from(keyType));
        }
        var _checksum = hash.ripemd160(Buffer.concat(check)).slice(0, 4);
        return base58.encode(Buffer.concat([keyBuffer, _checksum]));
    }
}

/**
  @arg {Buffer} keyString data
  @arg {string} keyType = sha256x2, K1, etc
  @return {string} checksum encoded base58 string
*/
function checkDecode(keyString) {
    var keyType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    assert(keyString != null, 'private key expected');
    var buffer = new Buffer(base58.decode(keyString));
    var checksum = buffer.slice(-4);
    var key = buffer.slice(0, -4);

    var newCheck = void 0;
    if (keyType === 'sha256x2') {
        // legacy
        newCheck = hash.sha256(hash.sha256(key)).slice(0, 4); // WIF (legacy)
    } else {
        var check = [key];
        if (keyType) {
            check.push(Buffer.from(keyType));
        }
        newCheck = hash.ripemd160(Buffer.concat(check)).slice(0, 4); //PVT
    }

    if (checksum.toString() !== newCheck.toString()) {
        throw new Error('Invalid checksum, ' + (checksum.toString('hex') + ' != ' + newCheck.toString('hex')));
    }

    return key;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),

/***/ 1232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var ecurve = __webpack_require__(91);
var Point = ecurve.Point;
var secp256k1 = ecurve.getCurveByName('secp256k1');
var BigInteger = __webpack_require__(33);
var assert = __webpack_require__(25);

var hash = __webpack_require__(1229);
var PublicKey = __webpack_require__(1230);
var keyUtils = __webpack_require__(1231);
var createHash = __webpack_require__(54);
var promiseAsync = __webpack_require__(1245);

var G = secp256k1.G;
var n = secp256k1.n;

module.exports = PrivateKey;

/**
  @typedef {string} wif - https://en.bitcoin.it/wiki/Wallet_import_format
  @typedef {string} pubkey - EOSKey..
  @typedef {ecurve.Point} Point
*/

/**
  @param {BigInteger} d
*/
function PrivateKey(d) {
    if (typeof d === 'string') {
        return PrivateKey.fromString(d);
    } else if (Buffer.isBuffer(d)) {
        return PrivateKey.fromBuffer(d);
    } else if ((typeof d === 'undefined' ? 'undefined' : _typeof(d)) === 'object' && BigInteger.isBigInteger(d.d)) {
        return PrivateKey(d.d);
    }

    if (!BigInteger.isBigInteger(d)) {
        throw new TypeError('Invalid private key');
    }

    /** @return {string} private key like PVT_K1_base58privatekey.. */
    function toString() {
        // todo, use PVT_K1_
        // return 'PVT_K1_' + keyUtils.checkEncode(toBuffer(), 'K1')
        return toWif();
    }

    /**
        @return  {wif}
    */
    function toWif() {
        var private_key = toBuffer();
        // checksum includes the version
        private_key = Buffer.concat([new Buffer([0x80]), private_key]);
        return keyUtils.checkEncode(private_key, 'sha256x2');
    }

    var public_key = void 0;

    /**
        @return {Point}
    */
    function toPublic() {
        if (public_key) {
            // cache
            // S L O W in the browser
            return public_key;
        }
        var Q = secp256k1.G.multiply(d);
        return public_key = PublicKey.fromPoint(Q);
    }

    function toBuffer() {
        return d.toBuffer(32);
    }

    /**
      ECIES
      @arg {string|Object} pubkey wif, PublicKey object
      @return {Buffer} 64 byte shared secret
    */
    function getSharedSecret(public_key) {
        public_key = PublicKey(public_key);
        var KB = public_key.toUncompressed().toBuffer();
        var KBP = Point.fromAffine(secp256k1, BigInteger.fromBuffer(KB.slice(1, 33)), // x
        BigInteger.fromBuffer(KB.slice(33, 65)) // y
        );
        var r = toBuffer();
        var P = KBP.multiply(BigInteger.fromBuffer(r));
        var S = P.affineX.toBuffer({ size: 32 });
        // SHA512 used in ECIES
        return hash.sha512(S);
    }

    // /** ECIES TODO unit test
    //   @arg {string|Object} pubkey wif, PublicKey object
    //   @return {Buffer} 64 byte shared secret
    // */
    // function getSharedSecret(public_key) {
    //     public_key = PublicKey(public_key).toUncompressed()
    //     var P = public_key.Q.multiply( d );
    //     var S = P.affineX.toBuffer({size: 32});
    //     // ECIES, adds an extra sha512
    //     return hash.sha512(S);
    // }

    /**
      @arg {string} name - child key name.
      @return {PrivateKey}
       @example activePrivate = masterPrivate.getChildKey('owner').getChildKey('active')
      @example activePrivate.getChildKey('mycontract').getChildKey('myperm')
    */
    function getChildKey(name) {
        // console.error('WARNING: getChildKey untested against eosd'); // no eosd impl yet
        var index = createHash('sha256').update(toBuffer()).update(name).digest();
        return PrivateKey(index);
    }

    function toHex() {
        return toBuffer().toString('hex');
    }

    return {
        d: d,
        toWif: toWif,
        toString: toString,
        toPublic: toPublic,
        toBuffer: toBuffer,
        getSharedSecret: getSharedSecret,
        getChildKey: getChildKey
    };
}

/** @private */
function parseKey(privateStr) {
    assert(typeof privateStr === 'undefined' ? 'undefined' : _typeof(privateStr), 'string', 'privateStr');
    var match = privateStr.match(/^PVT_([A-Za-z0-9]+)_([A-Za-z0-9]+)$/);

    if (match === null) {
        // legacy WIF - checksum includes the version
        var versionKey = keyUtils.checkDecode(privateStr, 'sha256x2');
        var version = versionKey.readUInt8(0);
        assert.equal(0x80, version, 'Expected version ' + 0x80 + ', instead got ' + version);
        var _privateKey = PrivateKey.fromBuffer(versionKey.slice(1));
        var _keyType = 'K1';
        var format = 'WIF';
        return { privateKey: _privateKey, format: format, keyType: _keyType };
    }

    assert(match.length === 3, 'Expecting private key like: PVT_K1_base58privateKey..');

    var _match = _slicedToArray(match, 3),
        keyType = _match[1],
        keyString = _match[2];

    assert.equal(keyType, 'K1', 'K1 private key expected');
    var privateKey = PrivateKey.fromBuffer(keyUtils.checkDecode(keyString, keyType));
    return { privateKey: privateKey, format: 'PVT', keyType: keyType };
}

PrivateKey.fromHex = function (hex) {
    return PrivateKey.fromBuffer(new Buffer(hex, 'hex'));
};

PrivateKey.fromBuffer = function (buf) {
    if (!Buffer.isBuffer(buf)) {
        throw new Error("Expecting parameter to be a Buffer type");
    }
    if (buf.length === 33 && buf[32] === 1) {
        // remove compression flag
        buf = buf.slice(0, -1);
    }
    if (32 !== buf.length) {
        throw new Error('Expecting 32 bytes, instead got ' + buf.length);
    }
    return PrivateKey(BigInteger.fromBuffer(buf));
};

/**
    @arg {string} seed - any length string.  This is private, the same seed
    produces the same private key every time.

    @return {PrivateKey}
*/
PrivateKey.fromSeed = function (seed) {
    // generate_private_key
    if (!(typeof seed === 'string')) {
        throw new Error('seed must be of type string');
    }
    return PrivateKey.fromBuffer(hash.sha256(seed));
};

/**
  @arg {wif} key
  @return {boolean} true if key is in the Wallet Import Format
*/
PrivateKey.isWif = function (text) {
    try {
        assert(parseKey(text).format === 'WIF');
        return true;
    } catch (e) {
        return false;
    }
};

/**
  @arg {wif|Buffer|PrivateKey} key
  @return {boolean} true if key is convertable to a private key object.
*/
PrivateKey.isValid = function (key) {
    try {
        PrivateKey(key);
        return true;
    } catch (e) {
        return false;
    }
};

/** @deprecated */
PrivateKey.fromWif = function (str) {
    console.log('PrivateKey.fromWif is deprecated, please use PrivateKey.fromString');
    return PrivateKey.fromString(str);
};

/**
    @throws {AssertError|Error} parsing key
    @arg {string} privateStr Eosio or Wallet Import Format (wif) -- a secret
*/
PrivateKey.fromString = function (privateStr) {
    return parseKey(privateStr).privateKey;
};

/**
  Create a new random private key.

  Call initialize() first to run some self-checking code and gather some CPU
  entropy.

  @arg {number} [cpuEntropyBits = 0] - additional CPU entropy, this already
  happens once so it should not be needed again.

  @return {Promise<PrivateKey>} - random private key
*/
PrivateKey.randomKey = function () {
    var cpuEntropyBits = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    return PrivateKey.initialize().then(function () {
        return PrivateKey.fromBuffer(keyUtils.random32ByteBuffer({ cpuEntropyBits: cpuEntropyBits }));
    });
};

/**
  @return {Promise<PrivateKey>} for testing, does not require initialize().
*/
PrivateKey.unsafeRandomKey = function () {
    return Promise.resolve(PrivateKey.fromBuffer(keyUtils.random32ByteBuffer({ safe: false })));
};

var initialized = false,
    unitTested = false;

/**
  Run self-checking code and gather CPU entropy.

  Initialization happens once even if called multiple times.

  @return {Promise}
*/
function initialize() {
    if (initialized) {
        return;
    }

    unitTest();
    keyUtils.addEntropy.apply(keyUtils, _toConsumableArray(keyUtils.cpuEntropy()));
    assert(keyUtils.entropyCount() >= 128, 'insufficient entropy');

    initialized = true;
}

PrivateKey.initialize = promiseAsync(initialize);

/**
  Unit test basic private and public key functionality.

  @throws {AssertError}
*/
function unitTest() {
    var pvt = PrivateKey(hash.sha256(''));

    var pvtError = 'key comparison test failed on a known private key';
    assert.equal(pvt.toWif(), '5KYZdUEo39z3FPrtuX2QbbwGnNP5zTd7yyr2SC1j299sBCnWjss', pvtError);
    assert.equal(pvt.toString(), '5KYZdUEo39z3FPrtuX2QbbwGnNP5zTd7yyr2SC1j299sBCnWjss', pvtError);
    // assert.equal(pvt.toString(), 'PVT_K1_2jH3nnhxhR3zPUcsKaWWZC9ZmZAnKm3GAnFD1xynGJE1Znuvjd', pvtError)

    var pub = pvt.toPublic();
    var pubError = 'pubkey string comparison test failed on a known public key';
    assert.equal(pub.toString(), 'EOS859gxfnXyUriMgUeThh1fWv3oqcpLFyHa3TfFYC4PK2HqhToVM', pubError);
    // assert.equal(pub.toString(), 'PUB_K1_859gxfnXyUriMgUeThh1fWv3oqcpLFyHa3TfFYC4PK2Ht7beeX', pubError)
    // assert.equal(pub.toStringLegacy(), 'EOS859gxfnXyUriMgUeThh1fWv3oqcpLFyHa3TfFYC4PK2HqhToVM', pubError)

    doesNotThrow(function () {
        return PrivateKey.fromString(pvt.toWif());
    }, 'converting known wif from string');
    doesNotThrow(function () {
        return PrivateKey.fromString(pvt.toString());
    }, 'converting known pvt from string');
    doesNotThrow(function () {
        return PublicKey.fromString(pub.toString());
    }, 'converting known public key from string');
    // doesNotThrow(() => PublicKey.fromString(pub.toStringLegacy()), 'converting known public key from string')

    unitTested = true;
}

/** @private */
var doesNotThrow = function doesNotThrow(cb, msg) {
    try {
        cb();
    } catch (error) {
        error.message = msg + ' ==> ' + error.message;
        throw error;
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),

/***/ 1233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var commonApi = __webpack_require__(1244);
var objectApi = __webpack_require__(1248);

var ecc = Object.assign({}, commonApi, objectApi);

module.exports = ecc;

/***/ }),

/***/ 1234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var Types = __webpack_require__(1249);
var Fcbuffer = __webpack_require__(1251);
var assert = __webpack_require__(25);

var create = Fcbuffer.create;

/**
  @typedef {object} SerializerConfig
  @property {boolean} [SerializerConfig.defaults = false] - Insert in defaults (like 0, false, '000...', or '') for any missing values.  This helps test and inspect what a definition should look like.  Do not enable in production.
  @property {boolean} [SerializerConfig.debug = false] - Prints lots of HEX and field-level information to help debug binary serialization.
  @property {object} [customTypes] - Add or overwrite low level types (see ./src/types.js `const types = {...}`).
*/

/**
  @typedef {object} CreateStruct
  @property {Array<String>} CreateStruct.errors - If any errors exists, no struts will be created.
  @property {Object} CreateStruct.struct - Struct objects keyed by definition name.
  @property {String} CreateStruct.struct.structName - Struct object that will serialize this type.
  @property {Struct} CreateStruct.struct.struct - Struct object that will serialize this type (see ./src/struct.js).
*/

/**
  @arg {object} definitions - examples https://github.com/EOSIO/eosjs-json/blob/master/schema
  @arg {SerializerConfig} config
  @return {CreateStruct}
*/

module.exports = function (definitions) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if ((typeof definitions === 'undefined' ? 'undefined' : _typeof(definitions)) !== 'object') {
    throw new TypeError('definitions is a required parameter');
  }

  if (config.customTypes) {
    definitions = Object.assign({}, definitions); //clone
    for (var key in config.customTypes) {
      // custom types overwrite definitions
      delete definitions[key];
    }
  }

  var types = Types(config);

  var _create = create(definitions, types),
      errors = _create.errors,
      structs = _create.structs;

  /** Extend with more JSON schema and type definitions */


  var _extend = function _extend(parent, child) {
    var combined = Object.assign({}, parent, child);

    var _create2 = create(combined, types),
        structs = _create2.structs,
        errors = _create2.errors;

    return {
      errors: errors,
      structs: structs,
      extend: function extend(child) {
        return _extend(combined, child);
      },
      fromBuffer: fromBuffer(types, structs),
      toBuffer: toBuffer(types, structs)
    };
  };

  return {
    errors: errors,
    structs: structs,
    types: types,
    extend: function extend(child) {
      return _extend(definitions, child);
    },

    /**
      @arg {string} typeName lookup struct or type by name
      @arg {Buffer} buf serialized data to be parsed
      @return {object} deserialized object
    */
    fromBuffer: fromBuffer(types, structs),

    /**
      @arg {string} typeName lookup struct or type by name
      @arg {Object} object for serialization
      @return {Buffer} serialized object
    */
    toBuffer: toBuffer(types, structs)
  };
};

var fromBuffer = function fromBuffer(types, structs) {
  return function (typeName, buf) {
    assert.equal(typeof typeName === 'undefined' ? 'undefined' : _typeof(typeName), 'string', 'typeName (type or struct name)');
    if (typeof buf === 'string') {
      buf = Buffer.from(buf, 'hex');
    }
    assert(Buffer.isBuffer(buf), 'expecting buf<hex|Buffer>');

    var type = types[typeName];
    if (type) {
      type = type();
    } else {
      type = structs[typeName];
    }
    assert(type, 'missing type or struct: ' + typeName);
    return Fcbuffer.fromBuffer(type, buf);
  };
};

var toBuffer = function toBuffer(types, structs) {
  return function (typeName, object) {
    assert.equal(typeof typeName === 'undefined' ? 'undefined' : _typeof(typeName), 'string', 'typeName (type or struct name)');
    assert.equal(typeof object === 'undefined' ? 'undefined' : _typeof(object), 'object', 'object');

    var type = types[typeName];
    if (type) {
      type = type();
    } else {
      type = structs[typeName];
    }
    assert(type, 'missing type or struct: ' + typeName);
    return Fcbuffer.toBuffer(type, object);
  };
};

module.exports.fromBuffer = Fcbuffer.fromBuffer;
module.exports.toBuffer = Fcbuffer.toBuffer;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),

/***/ 1235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var _slicedToArray2 = __webpack_require__(1236);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _typeof2 = __webpack_require__(265);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = __webpack_require__(1233),
    Signature = _require.Signature,
    PublicKey = _require.PublicKey;

var Fcbuffer = __webpack_require__(1234);
var ByteBuffer = __webpack_require__(465);
var assert = __webpack_require__(25);

var json = { schema: __webpack_require__(1242) };

var _require2 = __webpack_require__(1243),
    isName = _require2.isName,
    encodeName = _require2.encodeName,
    decodeName = _require2.decodeName,
    DecimalPad = _require2.DecimalPad,
    DecimalImply = _require2.DecimalImply,
    DecimalUnimply = _require2.DecimalUnimply,
    printAsset = _require2.printAsset,
    parseAsset = _require2.parseAsset;

/** Configures Fcbuffer for EOS specific structs and types. */


module.exports = function () {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var extendedSchema = arguments[1];

  var structLookup = function structLookup(lookupName, account) {
    var cachedCode = new Set(['eosio', 'eosio.token', 'eosio.null']);
    if (cachedCode.has(account)) {
      return structs[lookupName];
    }
    var abi = config.abiCache.abi(account);
    var struct = abi.structs[lookupName];
    if (struct != null) {
      return struct;
    }
    // TODO: move up (before `const struct = abi.structs[lookupName]`)
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = abi.abi.actions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var action = _step.value;
        var name = action.name,
            type = action.type;

        if (name === lookupName) {
          var _struct = abi.structs[type];
          if (_struct != null) {
            return _struct;
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    throw new Error('Missing ABI struct or action: ' + lookupName);
  };

  // If nodeos does not have an ABI setup for a certain action.type, it will throw
  // an error: `Invalid cast from object_type to string` .. forceActionDataHex
  // may be used to until native ABI is added or fixed.
  var forceActionDataHex = config.forceActionDataHex != null ? config.forceActionDataHex : true;

  var override = Object.assign({}, authorityOverride, abiOverride(structLookup), wasmCodeOverride(config), actionDataOverride(structLookup, forceActionDataHex), config.override);

  var eosTypes = {
    name: function name() {
      return [Name];
    },
    public_key: function public_key() {
      return [variant(PublicKeyEcc)];
    },

    symbol: function symbol() {
      return [_Symbol];
    },
    extended_symbol: function extended_symbol() {
      return [ExtendedSymbol];
    },

    asset: function asset() {
      return [Asset];
    }, // After Symbol: amount, precision, symbol, contract
    extended_asset: function extended_asset() {
      return [ExtendedAsset];
    }, // After Asset: amount, precision, symbol, contract

    signature: function signature() {
      return [variant(SignatureType)];
    }
  };

  var customTypes = Object.assign({}, eosTypes, config.customTypes);
  config = Object.assign({ override: override }, { customTypes: customTypes }, config);

  // Do not sort transaction actions
  config.sort = Object.assign({}, config.sort);
  config.sort['action.authorization'] = true;
  config.sort['signed_transaction.signature'] = true;
  config.sort['authority.accounts'] = true;
  config.sort['authority.keys'] = true;

  var schema = Object.assign({}, json.schema, extendedSchema);

  var _Fcbuffer = Fcbuffer(schema, config),
      structs = _Fcbuffer.structs,
      types = _Fcbuffer.types,
      errors = _Fcbuffer.errors,
      fromBuffer = _Fcbuffer.fromBuffer,
      toBuffer = _Fcbuffer.toBuffer;

  if (errors.length !== 0) {
    throw new Error(JSON.stringify(errors, null, 4));
  }

  return { structs: structs, types: types, fromBuffer: fromBuffer, toBuffer: toBuffer };
};

/**
  Name eos::types native.hpp
*/
var Name = function Name(validation) {
  return {
    fromByteBuffer: function fromByteBuffer(b) {
      var n = decodeName(b.readUint64(), false); // b is already in littleEndian
      // if(validation.debug) {
      //   console.error(`${n}`, '(Name.fromByteBuffer)')
      // }
      return n;
    },
    appendByteBuffer: function appendByteBuffer(b, value) {
      // if(validation.debug) {
      //   console.error(`${value}`, (Name.appendByteBuffer))
      // }
      b.writeUint64(encodeName(value, false)); // b is already in littleEndian
    },
    fromObject: function fromObject(value) {
      return value;
    },
    toObject: function toObject(value) {
      if (validation.defaults && value == null) {
        return '';
      }
      return value;
    }
  };
};

/**
  A variant is like having a version of an object.  A varint comes
  first and identifies which type of object this is.

  @arg {Array} variantArray array of types
*/
var variant = function variant() {
  for (var _len = arguments.length, variantArray = Array(_len), _key = 0; _key < _len; _key++) {
    variantArray[_key] = arguments[_key];
  }

  return function (validation, baseTypes, customTypes) {
    var variants = variantArray.map(function (Type) {
      return Type(validation, baseTypes, customTypes);
    });
    var staticVariant = baseTypes.static_variant(variants);

    return {
      fromByteBuffer: function fromByteBuffer(b) {
        return staticVariant.fromByteBuffer(b);
      },
      appendByteBuffer: function appendByteBuffer(b, value) {
        if (!Array.isArray(value)) {
          value = [0, value];
        }
        staticVariant.appendByteBuffer(b, value);
      },
      fromObject: function fromObject(value) {
        if (!Array.isArray(value)) {
          value = [0, value];
        }
        return staticVariant.fromObject(value)[1];
      },
      toObject: function toObject(value) {
        if (!Array.isArray(value)) {
          value = [0, value];
        }
        return staticVariant.toObject(value)[1];
      }
    };
  };
};

var PublicKeyEcc = function PublicKeyEcc(validation) {
  return {
    fromByteBuffer: function fromByteBuffer(b) {
      var bcopy = b.copy(b.offset, b.offset + 33);
      b.skip(33);
      var pubbuf = Buffer.from(bcopy.toBinary(), 'binary');
      return PublicKey.fromBuffer(pubbuf).toString();
    },
    appendByteBuffer: function appendByteBuffer(b, value) {
      // if(validation.debug) {
      //   console.error(`${value}`, 'PublicKeyType.appendByteBuffer')
      // }
      var buf = PublicKey.fromStringOrThrow(value).toBuffer();
      b.append(buf.toString('binary'), 'binary');
    },
    fromObject: function fromObject(value) {
      return value;
    },
    toObject: function toObject(value) {
      if (validation.defaults && value == null) {
        return 'EOS6MRy..';
      }
      return value;
    }
  };
};

/**
  Internal: precision, symbol
  External: symbol
  @example 'SYS'
*/
var _Symbol = function _Symbol(validation) {
  return {
    fromByteBuffer: function fromByteBuffer(b) {
      var bcopy = b.copy(b.offset, b.offset + 8);
      b.skip(8);

      var precision = bcopy.readUint8();
      var bin = bcopy.toBinary();

      var symbol = '';
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = bin[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var code = _step2.value;

          if (code == '\0') {
            break;
          }
          symbol += code;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return precision + ',' + symbol;
    },
    appendByteBuffer: function appendByteBuffer(b, value) {
      var _parseAsset = parseAsset(value),
          symbol = _parseAsset.symbol,
          precision = _parseAsset.precision;

      assert(precision != null, 'Precision unknown for symbol: ' + value);
      var pad = '\0'.repeat(7 - symbol.length);
      b.append(String.fromCharCode(precision) + symbol + pad);
    },
    fromObject: function fromObject(value) {
      assert(value != null, 'Symbol is required: ' + value);

      var _parseAsset2 = parseAsset(value),
          symbol = _parseAsset2.symbol,
          precision = _parseAsset2.precision;

      if (precision == null) {
        return symbol;
      } else {
        // Internal object, this can have the precision prefix
        return precision + ',' + symbol;
      }
    },
    toObject: function toObject(value) {
      if (validation.defaults && value == null) {
        return 'SYS';
      }
      // symbol only (without precision prefix)
      return parseAsset(value).symbol;
    }
  };
};

/**
  Internal: precision, symbol, contract
  External: symbol, contract
  @example 'SYS@contract'
*/
var ExtendedSymbol = function ExtendedSymbol(validation, baseTypes, customTypes) {
  var symbolType = customTypes.symbol(validation);
  var contractName = customTypes.name(validation);

  return {
    fromByteBuffer: function fromByteBuffer(b) {
      var symbol = symbolType.fromByteBuffer(b);
      var contract = contractName.fromByteBuffer(b);
      return symbol + '@' + contract;
    },
    appendByteBuffer: function appendByteBuffer(b, value) {
      assert.equal(typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value), 'string', 'Invalid extended symbol: ' + value);

      var _value$split = value.split('@'),
          _value$split2 = (0, _slicedToArray3.default)(_value$split, 2),
          symbol = _value$split2[0],
          contract = _value$split2[1];

      assert(contract != null, 'Missing @contract suffix in extended symbol: ' + value);

      symbolType.appendByteBuffer(b, symbol);
      contractName.appendByteBuffer(b, contract);
    },
    fromObject: function fromObject(value) {
      return value;
    },
    toObject: function toObject(value) {
      if (validation.defaults && value == null) {
        return 'SYS@contract';
      }
      return value;
    }
  };
};

/**
  Internal: amount, precision, symbol, contract
  @example '1.0000 SYS'
*/
var Asset = function Asset(validation, baseTypes, customTypes) {
  var amountType = baseTypes.int64(validation);
  var symbolType = customTypes.symbol(validation);

  return {
    fromByteBuffer: function fromByteBuffer(b) {
      var amount = amountType.fromByteBuffer(b);
      assert(amount != null, 'amount');

      var sym = symbolType.fromByteBuffer(b);

      var _parseAsset3 = parseAsset('' + sym),
          precision = _parseAsset3.precision,
          symbol = _parseAsset3.symbol;

      assert(precision != null, 'precision');
      assert(symbol != null, 'symbol');

      return DecimalUnimply(amount, precision) + ' ' + symbol;
    },
    appendByteBuffer: function appendByteBuffer(b, value) {
      var _parseAsset4 = parseAsset(value),
          amount = _parseAsset4.amount,
          precision = _parseAsset4.precision,
          symbol = _parseAsset4.symbol;

      assert(amount != null, 'amount');
      assert(precision != null, 'precision');
      assert(symbol != null, 'symbol');

      amountType.appendByteBuffer(b, DecimalImply(amount, precision));
      symbolType.appendByteBuffer(b, precision + ',' + symbol);
    },
    fromObject: function fromObject(value) {
      var _parseAsset5 = parseAsset(value),
          amount = _parseAsset5.amount,
          precision = _parseAsset5.precision,
          symbol = _parseAsset5.symbol;

      assert(amount != null, 'amount');
      assert(precision != null, 'precision');
      assert(symbol != null, 'symbol');

      return DecimalPad(amount, precision) + ' ' + symbol;
    },
    toObject: function toObject(value) {
      if (validation.defaults && value == null) {
        return '0.0001 SYS';
      }

      var _parseAsset6 = parseAsset(value),
          amount = _parseAsset6.amount,
          precision = _parseAsset6.precision,
          symbol = _parseAsset6.symbol;

      assert(amount != null, 'amount');
      assert(precision != null, 'precision');
      assert(symbol != null, 'symbol');

      return DecimalPad(amount, precision) + ' ' + symbol;
    }
  };
};

/**
  @example '1.0000 SYS@contract'
*/
var ExtendedAsset = function ExtendedAsset(validation, baseTypes, customTypes) {
  var assetType = customTypes.asset(validation);
  var contractName = customTypes.name(validation);

  return {
    fromByteBuffer: function fromByteBuffer(b) {
      var asset = assetType.fromByteBuffer(b);
      var contract = contractName.fromByteBuffer(b);
      return parseAsset(asset + '@' + contract);
    },
    appendByteBuffer: function appendByteBuffer(b, value) {
      assert.equal(typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value), 'object', 'expecting extended_asset object, got ' + (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)));

      var asset = printAsset(value);

      var _asset$split = asset.split('@'),
          _asset$split2 = (0, _slicedToArray3.default)(_asset$split, 2),
          contract = _asset$split2[1];

      assert.equal(typeof contract === 'undefined' ? 'undefined' : (0, _typeof3.default)(contract), 'string', 'Invalid extended asset: ' + value);

      // asset includes contract (assetType needs this)
      assetType.appendByteBuffer(b, asset);
      contractName.appendByteBuffer(b, contract);
    },
    fromObject: function fromObject(value) {
      // like: 1.0000 SYS@contract or 1 SYS@contract
      var asset = {};
      if (typeof value === 'string') {
        Object.assign(asset, parseAsset(value));
      } else if ((typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'object') {
        Object.assign(asset, value);
      } else {
        assert(false, 'expecting extended_asset<object|string>, got: ' + (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)));
      }

      var amount = asset.amount,
          precision = asset.precision,
          symbol = asset.symbol,
          contract = asset.contract;

      assert(amount != null, 'missing amount');
      assert(precision != null, 'missing precision');
      assert(symbol != null, 'missing symbol');
      assert(contract != null, 'missing contract');

      return { amount: amount, precision: precision, symbol: symbol, contract: contract };
    },
    toObject: function toObject(value) {
      if (validation.defaults && value == null) {
        return {
          amount: '1.0000',
          precision: 4,
          symbol: 'SYS',
          contract: 'eosio.token'
        };
      }

      assert.equal(typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value), 'object', 'expecting extended_asset object');
      var amount = value.amount,
          precision = value.precision,
          symbol = value.symbol,
          contract = value.contract;


      return {
        amount: DecimalPad(amount, precision),
        precision: precision,
        symbol: symbol,
        contract: contract
      };
    }
  };
};

var SignatureType = function SignatureType(validation, baseTypes) {
  var signatureType = baseTypes.fixed_bytes65(validation);
  return {
    fromByteBuffer: function fromByteBuffer(b) {
      var signatureBuffer = signatureType.fromByteBuffer(b);
      var signature = Signature.from(signatureBuffer);
      return signature.toString();
    },
    appendByteBuffer: function appendByteBuffer(b, value) {
      var signature = Signature.from(value);
      signatureType.appendByteBuffer(b, signature.toBuffer());
    },
    fromObject: function fromObject(value) {
      var signature = Signature.from(value);
      return signature.toString();
    },
    toObject: function toObject(value) {
      if (validation.defaults && value == null) {
        return 'SIG_K1_bas58signature..';
      }
      var signature = Signature.from(value);
      return signature.toString();
    }
  };
};

var authorityOverride = {
  /** shorthand `EOS6MRyAj..` */
  'authority.fromObject': function authorityFromObject(value) {
    if (PublicKey.fromString(value)) {
      return {
        threshold: 1,
        keys: [{ key: value, weight: 1 }]
      };
    }
    if (typeof value === 'string') {
      var _value$split3 = value.split('@'),
          _value$split4 = (0, _slicedToArray3.default)(_value$split3, 2),
          account = _value$split4[0],
          _value$split4$ = _value$split4[1],
          permission = _value$split4$ === undefined ? 'active' : _value$split4$;

      return {
        threshold: 1,
        accounts: [{
          permission: {
            actor: account,
            permission: permission
          },
          weight: 1
        }]
      };
    }
  }
};

var abiOverride = function abiOverride(structLookup) {
  return {
    'abi.fromObject': function abiFromObject(value) {
      if (typeof value === 'string') {
        return JSON.parse(value);
      }
      if (Buffer.isBuffer(value)) {
        return JSON.parse(value.toString());
      }
    },
    'setabi.abi.appendByteBuffer': function setabiAbiAppendByteBuffer(_ref) {
      var fields = _ref.fields,
          object = _ref.object,
          b = _ref.b;

      var ser = structLookup('abi_def', 'eosio');
      var b2 = new ByteBuffer(ByteBuffer.DEFAULT_CAPACITY, ByteBuffer.LITTLE_ENDIAN);
      ser.appendByteBuffer(b2, object.abi);
      b.writeVarint32(b2.offset); // length prefix
      b.append(b2.copy(0, b2.offset), 'binary');
    }
  };
};

var wasmCodeOverride = function wasmCodeOverride(config) {
  return {
    'setcode.code.fromObject': function setcodeCodeFromObject(_ref2) {
      var object = _ref2.object,
          result = _ref2.result;

      try {
        var code = object.code.toString();
        if (/^\s*\(module/.test(code)) {
          var binaryen = config.binaryen;

          assert(binaryen != null, 'required: config.binaryen = require("binaryen")');
          if (config.debug) {
            console.log('Assembling WASM..');
          }
          var wasm = Buffer.from(binaryen.parseText(code).emitBinary());
          result.code = wasm;
        } else {
          result.code = object.code;
        }
      } catch (error) {
        console.error(error, object.code);
        throw error;
      }
    }
  };
};

/**
  Nested serialized structure.  Nested struct may be in HEX or object format.
*/
var actionDataOverride = function actionDataOverride(structLookup, forceActionDataHex) {
  return {
    'action.data.fromByteBuffer': function actionDataFromByteBuffer(_ref3) {
      var fields = _ref3.fields,
          object = _ref3.object,
          b = _ref3.b,
          config = _ref3.config;

      var ser = (object.name || '') == '' ? fields.data : structLookup(object.name, object.account);
      if (ser) {
        b.readVarint32(); // length prefix (usefull if object.name is unknown)
        object.data = ser.fromByteBuffer(b, config);
      } else {
        // console.log(`Unknown Action.name ${object.name}`)
        var lenPrefix = b.readVarint32();
        var bCopy = b.copy(b.offset, b.offset + lenPrefix);
        b.skip(lenPrefix);
        object.data = Buffer.from(bCopy.toBinary(), 'binary');
      }
    },

    'action.data.appendByteBuffer': function actionDataAppendByteBuffer(_ref4) {
      var fields = _ref4.fields,
          object = _ref4.object,
          b = _ref4.b;

      var ser = (object.name || '') == '' ? fields.data : structLookup(object.name, object.account);
      if (ser) {
        var b2 = new ByteBuffer(ByteBuffer.DEFAULT_CAPACITY, ByteBuffer.LITTLE_ENDIAN);
        ser.appendByteBuffer(b2, object.data);
        b.writeVarint32(b2.offset);
        b.append(b2.copy(0, b2.offset), 'binary');
      } else {
        // console.log(`Unknown Action.name ${object.name}`)
        var data = typeof object.data === 'string' ? new Buffer(object.data, 'hex') : object.data;
        if (!Buffer.isBuffer(data)) {
          throw new TypeError('Unknown struct \'' + object.name + '\' for contract \'' + object.account + '\', locate this struct or provide serialized action.data');
        }
        b.writeVarint32(data.length);
        b.append(data.toString('binary'), 'binary');
      }
    },

    'action.data.fromObject': function actionDataFromObject(_ref5) {
      var fields = _ref5.fields,
          object = _ref5.object,
          result = _ref5.result;
      var data = object.data,
          name = object.name;

      var ser = (name || '') == '' ? fields.data : structLookup(name, object.account);
      if (ser) {
        if ((typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) === 'object') {
          result.data = ser.fromObject(data); // resolve shorthand
        } else if (typeof data === 'string') {
          var buf = new Buffer(data, 'hex');
          result.data = Fcbuffer.fromBuffer(ser, buf);
        } else {
          throw new TypeError('Expecting hex string or object in action.data');
        }
      } else {
        // console.log(`Unknown Action.name ${object.name}`)
        result.data = data;
      }
    },

    'action.data.toObject': function actionDataToObject(_ref6) {
      var fields = _ref6.fields,
          object = _ref6.object,
          result = _ref6.result,
          config = _ref6.config;

      var _ref7 = object || {},
          data = _ref7.data,
          name = _ref7.name;

      var ser = (name || '') == '' ? fields.data : structLookup(name, object.account);
      if (!ser) {
        // Types without an ABI will accept hex
        result.data = Buffer.isBuffer(data) ? data.toString('hex') : data;
        return;
      }

      if (forceActionDataHex) {
        var b2 = new ByteBuffer(ByteBuffer.DEFAULT_CAPACITY, ByteBuffer.LITTLE_ENDIAN);
        if (data) {
          ser.appendByteBuffer(b2, data);
        }
        result.data = b2.copy(0, b2.offset).toString('hex');
        // console.log('result.data', result.data)
        return;
      }

      // Serializable JSON
      result.data = ser.toObject(data, config);
    }
  };
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),

/***/ 1236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(1267);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(1270);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),

/***/ 1237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var randomBytes = __webpack_require__(55);
var ByteBuffer = __webpack_require__(465);
var crypto = __webpack_require__(136);
var assert = __webpack_require__(25);
var PublicKey = __webpack_require__(1230);
var PrivateKey = __webpack_require__(1232);
var hash = __webpack_require__(1229);

var Long = ByteBuffer.Long;

module.exports = {
    encrypt: encrypt,
    decrypt: decrypt

    /**
        Spec: http://localhost:3002/steem/@dantheman/how-to-encrypt-a-memo-when-transferring-steem
    
        @throws {Error|TypeError} - "Invalid Key, ..."
    
        @arg {PrivateKey} private_key - required and used for decryption
        @arg {PublicKey} public_key - required and used to calcualte the shared secret
        @arg {string} [nonce = uniqueNonce()] - assigned a random unique uint64
    
        @return {object}
        @property {string} nonce - random or unique uint64, provides entropy when re-using the same private/public keys.
        @property {Buffer} message - Plain text message
        @property {number} checksum - shared secret checksum
    */
};function encrypt(private_key, public_key, message) {
    var nonce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : uniqueNonce();

    return crypt(private_key, public_key, nonce, message);
}

/**
    Spec: http://localhost:3002/steem/@dantheman/how-to-encrypt-a-memo-when-transferring-steem

    @arg {PrivateKey} private_key - required and used for decryption
    @arg {PublicKey} public_key - required and used to calcualte the shared secret
    @arg {string} nonce - random or unique uint64, provides entropy when re-using the same private/public keys.
    @arg {Buffer} message - Encrypted or plain text message
    @arg {number} checksum - shared secret checksum

    @throws {Error|TypeError} - "Invalid Key, ..."

    @return {Buffer} - message
*/
function decrypt(private_key, public_key, nonce, message, checksum) {
    return crypt(private_key, public_key, nonce, message, checksum).message;
}

/**
    @arg {Buffer} message - Encrypted or plain text message (see checksum)
    @arg {number} checksum - shared secret checksum (null to encrypt, non-null to decrypt)
    @private
*/
function crypt(private_key, public_key, nonce, message, checksum) {
    private_key = PrivateKey(private_key);
    if (!private_key) throw new TypeError('private_key is required');

    public_key = PublicKey(public_key);
    if (!public_key) throw new TypeError('public_key is required');

    nonce = toLongObj(nonce);
    if (!nonce) throw new TypeError('nonce is required');

    if (!Buffer.isBuffer(message)) {
        if (typeof message !== 'string') throw new TypeError('message should be buffer or string');
        message = new Buffer(message, 'binary');
    }
    if (checksum && typeof checksum !== 'number') throw new TypeError('checksum should be a number');

    var S = private_key.getSharedSecret(public_key);
    var ebuf = new ByteBuffer(ByteBuffer.DEFAULT_CAPACITY, ByteBuffer.LITTLE_ENDIAN);
    ebuf.writeUint64(nonce);
    ebuf.append(S.toString('binary'), 'binary');
    ebuf = new Buffer(ebuf.copy(0, ebuf.offset).toBinary(), 'binary');
    var encryption_key = hash.sha512(ebuf);

    // D E B U G
    // console.log('crypt', {
    //     priv_to_pub: private_key.toPublic().toString(),
    //     pub: public_key.toString(),
    //     nonce: nonce.toString(),
    //     message: message.length,
    //     checksum,
    //     S: S.toString('hex'),
    //     encryption_key: encryption_key.toString('hex'),
    // })

    var iv = encryption_key.slice(32, 48);
    var key = encryption_key.slice(0, 32);

    // check is first 64 bit of sha256 hash treated as uint64_t truncated to 32 bits.
    var check = hash.sha256(encryption_key);
    check = check.slice(0, 4);
    var cbuf = ByteBuffer.fromBinary(check.toString('binary'), ByteBuffer.DEFAULT_CAPACITY, ByteBuffer.LITTLE_ENDIAN);
    check = cbuf.readUint32();

    if (checksum) {
        if (check !== checksum) throw new Error('Invalid key');
        message = cryptoJsDecrypt(message, key, iv);
    } else {
        message = cryptoJsEncrypt(message, key, iv);
    }
    return { nonce: nonce, message: message, checksum: check };
}

/** This method does not use a checksum, the returned data must be validated some other way.

    @arg {string|Buffer} message - ciphertext binary format
    @arg {string<utf8>|Buffer} key - 256bit
    @arg {string<utf8>|Buffer} iv - 128bit

    @return {Buffer}
*/
function cryptoJsDecrypt(message, key, iv) {
    assert(message, "Missing cipher text");
    message = toBinaryBuffer(message);
    var decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    // decipher.setAutoPadding(true)
    message = Buffer.concat([decipher.update(message), decipher.final()]);
    return message;
}

/** This method does not use a checksum, the returned data must be validated some other way.
    @arg {string|Buffer} message - plaintext binary format
    @arg {string<utf8>|Buffer} key - 256bit
    @arg {string<utf8>|Buffer} iv - 128bit

    @return {Buffer}
*/
function cryptoJsEncrypt(message, key, iv) {
    assert(message, "Missing plain text");
    message = toBinaryBuffer(message);
    var cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    // cipher.setAutoPadding(true)
    message = Buffer.concat([cipher.update(message), cipher.final()]);
    return message;
}

/** @return {string} unique 64 bit unsigned number string.  Being time based, this is careful to never choose the same nonce twice.  This value could be recorded in the blockchain for a long time.
*/
function uniqueNonce() {
    if (unique_nonce_entropy === null) {
        var b = new Uint8Array(randomBytes(2));
        unique_nonce_entropy = parseInt(b[0] << 8 | b[1], 10);
    }
    var long = Long.fromNumber(Date.now());
    var entropy = ++unique_nonce_entropy % 0xFFFF;
    // console.log('uniqueNonce date\t', ByteBuffer.allocate(8).writeUint64(long).toHex(0))
    // console.log('uniqueNonce entropy\t', ByteBuffer.allocate(8).writeUint64(Long.fromNumber(entropy)).toHex(0))
    long = long.shiftLeft(16).or(Long.fromNumber(entropy));
    // console.log('uniqueNonce final\t', ByteBuffer.allocate(8).writeUint64(long).toHex(0))
    return long.toString();
}
var unique_nonce_entropy = null;
// for(let i=1; i < 10; i++) key.uniqueNonce()

var toLongObj = function toLongObj(o) {
    return o ? Long.isLong(o) ? o : Long.fromString(o) : o;
};
var toBinaryBuffer = function toBinaryBuffer(o) {
    return o ? Buffer.isBuffer(o) ? o : new Buffer(o, 'binary') : o;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),

/***/ 1238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var ecdsa = __webpack_require__(1246);
var hash = __webpack_require__(1229);
var curve = __webpack_require__(91).getCurveByName('secp256k1');
var assert = __webpack_require__(25);
var BigInteger = __webpack_require__(33);
var keyUtils = __webpack_require__(1231);
var PublicKey = __webpack_require__(1230);
var PrivateKey = __webpack_require__(1232);

module.exports = Signature;

function Signature(r, s, i) {
    assert.equal(r != null, true, 'Missing parameter');
    assert.equal(s != null, true, 'Missing parameter');
    assert.equal(i != null, true, 'Missing parameter');

    /**
        Verify signed data.
         @arg {String|Buffer} data - full data
        @arg {pubkey|PublicKey} pubkey - EOSKey..
        @arg {String} [encoding = 'utf8'] - data encoding (if data is a string)
         @return {boolean}
    */
    function verify(data, pubkey) {
        var encoding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'utf8';

        if (typeof data === 'string') {
            data = Buffer.from(data, encoding);
        }
        assert(Buffer.isBuffer(data), 'data is a required String or Buffer');
        data = hash.sha256(data);
        return verifyHash(data, pubkey);
    }

    /**
        Verify a buffer of exactally 32 bytes in size (sha256(text))
         @arg {String|Buffer} dataSha256 - 32 byte buffer or string
        @arg {String|PublicKey} pubkey - EOSKey..
        @arg {String} [encoding = 'hex'] - dataSha256 encoding (if string)
         @return {boolean}
    */
    function verifyHash(dataSha256, pubkey) {
        var encoding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'hex';

        if (typeof dataSha256 === 'string') {
            dataSha256 = Buffer.from(dataSha256, encoding);
        }
        if (dataSha256.length !== 32 || !Buffer.isBuffer(dataSha256)) throw new Error("dataSha256: 32 bytes required");

        var publicKey = PublicKey(pubkey);
        assert(publicKey, 'pubkey required');

        return ecdsa.verify(curve, dataSha256, { r: r, s: s }, publicKey.Q);
    };

    /** @deprecated
         Verify hex data by converting to a buffer then hashing.
         @return {boolean}
    */
    function verifyHex(hex, pubkey) {
        console.log('Deprecated: use verify(data, pubkey, "hex")');

        var buf = Buffer.from(hex, 'hex');
        return verify(buf, pubkey);
    };

    /**
        Recover the public key used to create this signature using full data.
         @arg {String|Buffer} data - full data
        @arg {String} [encoding = 'utf8'] - data encoding (if string)
         @return {PublicKey}
    */
    function recover(data) {
        var encoding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'utf8';

        if (typeof data === 'string') {
            data = Buffer.from(data, encoding);
        }
        assert(Buffer.isBuffer(data), 'data is a required String or Buffer');
        data = hash.sha256(data);

        return recoverHash(data);
    };

    /**
        @arg {String|Buffer} dataSha256 - sha256 hash 32 byte buffer or hex string
        @arg {String} [encoding = 'hex'] - dataSha256 encoding (if string)
         @return {PublicKey}
    */
    function recoverHash(dataSha256) {
        var encoding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'hex';

        if (typeof dataSha256 === 'string') {
            dataSha256 = Buffer.from(dataSha256, encoding);
        }
        if (dataSha256.length !== 32 || !Buffer.isBuffer(dataSha256)) {
            throw new Error("dataSha256: 32 byte String or buffer requred");
        }

        var e = BigInteger.fromBuffer(dataSha256);
        var i2 = i;
        i2 -= 27;
        i2 = i2 & 3;
        var Q = ecdsa.recoverPubKey(curve, e, { r: r, s: s, i: i }, i2);
        return PublicKey.fromPoint(Q);
    };

    function toBuffer() {
        var buf;
        buf = new Buffer(65);
        buf.writeUInt8(i, 0);
        r.toBuffer(32).copy(buf, 1);
        s.toBuffer(32).copy(buf, 33);
        return buf;
    };

    function toHex() {
        return toBuffer().toString("hex");
    };

    var signatureCache = void 0;

    function toString() {
        if (signatureCache) {
            return signatureCache;
        }
        signatureCache = 'SIG_K1_' + keyUtils.checkEncode(toBuffer(), 'K1');
        return signatureCache;
    }

    return {
        r: r, s: s, i: i,
        toBuffer: toBuffer,
        verify: verify,
        verifyHash: verifyHash,
        verifyHex: verifyHex, // deprecated
        recover: recover,
        recoverHash: recoverHash,
        toHex: toHex,
        toString: toString,

        /** @deprecated use verify (same arguments and return) */
        verifyBuffer: function verifyBuffer() {
            console.log('Deprecated: use signature.verify instead (same arguments)');
            return verify.apply(undefined, arguments);
        },

        /** @deprecated use recover (same arguments and return) */
        recoverPublicKey: function recoverPublicKey() {
            console.log('Deprecated: use signature.recover instead (same arguments)');
            return recover.apply(undefined, arguments);
        },

        /** @deprecated use recoverHash (same arguments and return) */
        recoverPublicKeyFromBuffer: function recoverPublicKeyFromBuffer() {
            console.log('Deprecated: use signature.recoverHash instead (same arguments)');
            return recoverHash.apply(undefined, arguments);
        }
    };
}

/**
    Hash and sign arbitrary data.

    @arg {string|Buffer} data - full data
    @arg {wif|PrivateKey} privateKey
    @arg {String} [encoding = 'utf8'] - data encoding (if string)

    @return {Signature}
*/
Signature.sign = function (data, privateKey) {
    var encoding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'utf8';

    if (typeof data === 'string') {
        data = Buffer.from(data, encoding);
    }
    assert(Buffer.isBuffer(data), 'data is a required String or Buffer');
    data = hash.sha256(data);
    return Signature.signHash(data, privateKey);
};

/**
    Sign a buffer of exactally 32 bytes in size (sha256(text))

    @arg {string|Buffer} dataSha256 - 32 byte buffer or string
    @arg {wif|PrivateKey} privateKey
    @arg {String} [encoding = 'hex'] - dataSha256 encoding (if string)

    @return {Signature}
*/
Signature.signHash = function (dataSha256, privateKey) {
    var encoding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'hex';

    if (typeof dataSha256 === 'string') {
        dataSha256 = Buffer.from(dataSha256, encoding);
    }
    if (dataSha256.length !== 32 || !Buffer.isBuffer(dataSha256)) throw new Error("dataSha256: 32 byte buffer requred");

    privateKey = PrivateKey(privateKey);
    assert(privateKey, 'privateKey required');

    var der, e, ecsignature, i, lenR, lenS, nonce;
    i = null;
    nonce = 0;
    e = BigInteger.fromBuffer(dataSha256);
    while (true) {
        ecsignature = ecdsa.sign(curve, dataSha256, privateKey.d, nonce++);
        der = ecsignature.toDER();
        lenR = der[3];
        lenS = der[5 + lenR];
        if (lenR === 32 && lenS === 32) {
            i = ecdsa.calcPubKeyRecoveryParam(curve, e, ecsignature, privateKey.toPublic().Q);
            i += 4; // compressed
            i += 27; // compact  //  24 or 27 :( forcing odd-y 2nd key candidate)
            break;
        }
        if (nonce % 10 === 0) {
            console.log("WARN: " + nonce + " attempts to find canonical signature");
        }
    }
    return Signature(ecsignature.r, ecsignature.s, i);
};

Signature.fromBuffer = function (buf) {
    var i, r, s;
    assert(Buffer.isBuffer(buf), 'Buffer is required');
    assert.equal(buf.length, 65, 'Invalid signature length');
    i = buf.readUInt8(0);
    assert.equal(i - 27, i - 27 & 7, 'Invalid signature parameter');
    r = BigInteger.fromBuffer(buf.slice(1, 33));
    s = BigInteger.fromBuffer(buf.slice(33));
    return Signature(r, s, i);
};

Signature.fromHex = function (hex) {
    return Signature.fromBuffer(Buffer.from(hex, "hex"));
};

/**
    @arg {string} signature - like SIG_K1_base58signature..
    @return {Signature} or `null` (invalid)
*/
Signature.fromString = function (signature) {
    try {
        return Signature.fromStringOrThrow(signature);
    } catch (e) {
        return null;
    }
};

/**
    @arg {string} signature - like SIG_K1_base58signature..
    @throws {Error} invalid
    @return {Signature}
*/
Signature.fromStringOrThrow = function (signature) {
    assert(typeof signature === 'undefined' ? 'undefined' : _typeof(signature), 'string', 'signature');
    var match = signature.match(/^SIG_([A-Za-z0-9]+)_([A-Za-z0-9]+)$/);
    assert(match != null && match.length === 3, 'Expecting signature like: SIG_K1_base58signature..');

    var _match = _slicedToArray(match, 3),
        keyType = _match[1],
        keyString = _match[2];

    assert.equal(keyType, 'K1', 'K1 signature expected');
    return Signature.fromBuffer(keyUtils.checkDecode(keyString, keyType));
};

/**
    @arg {String|Signature} o - hex string
    @return {Signature}
*/
Signature.from = function (o) {
    var signature = o ? o.r && o.s && o.i ? o : typeof o === 'string' && o.length === 130 ? Signature.fromHex(o) : typeof o === 'string' && o.length !== 130 ? Signature.fromStringOrThrow(o) : Buffer.isBuffer(o) ? Signature.fromBuffer(o) : null : o; /*null or undefined*/

    if (!signature) {
        throw new TypeError('signature should be a hex string or buffer');
    }
    return signature;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),

/***/ 1239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

module.exports = function enforce(type, value) {
  // Copied from https://github.com/bitcoinjs/bitcoinjs-lib
  switch (type) {
    case 'Array':
      {
        if (Array.isArray(value)) return;
        break;
      }

    case 'Boolean':
      {
        if (typeof value === 'boolean') return;
        break;
      }

    case 'Buffer':
      {
        if (Buffer.isBuffer(value)) return;
        break;
      }

    case 'Number':
      {
        if (typeof value === 'number') return;
        break;
      }

    case 'String':
      {
        if (typeof value === 'string') return;
        break;
      }

    default:
      {
        if (getName(value.constructor) === getName(type)) return;
      }
  }

  throw new TypeError('Expected ' + (getName(type) || type) + ', got ' + value);
};

function getName(fn) {
  // Why not fn.name: https://kangax.github.io/compat-table/es6/#function_name_property
  var match = fn.toString().match(/function (.*?)\(/);
  return match ? match[1] : null;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),

/***/ 1240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var api = __webpack_require__(1253);
var apiGen = __webpack_require__(1256);
var processArgs = __webpack_require__(1241);

var EosApi = function EosApi(config) {
  return apiGen('v1', api, config);
};

Object.assign(EosApi, {
  processArgs: processArgs,
  api: api,

  /** @deprecated */
  Testnet: function Testnet(config) {
    console.error('deprecated, change EosApi.Testnet(..) to just EosApi(..)');
    return EosApi(config);
  },

  /** @deprecated */
  Localnet: function Localnet(config) {
    console.error('deprecated, change EosApi.Localnet(..) to just EosApi(..)');
    return EosApi(config);
  }
});

module.exports = EosApi;

/***/ }),

/***/ 1241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = processArgs;

/**
  @typedef {object} processedArgs - Normalized object containing arguments, and
  a chained promise and a callback.

  @property {object} params - normalized args only, parameters by name, no extra options or callback.

  @property {object} options - non-null or non-undefined return value from invocation of
  optionsFormatter(optionsParam).

  @property {function} callback -chained to optional callback provided in args.  Resolves
  or rejects returnPromise.

  @property {Promise} returnPromise - promise is returned when no callback is provided in
  args[args.length - 1].  Undefined when a callback is provided.
*/
/**
  Convert args array or object into a normalized value object.  Suppoorts extra
  options and(or) callback parameters.

  Per the Promise API feature promisifyAll (see also sb-promisify), the callback
  (if provided) must always be last.

  @arg {Array|object} args - User-provided parameter object or array of parameters
  @arg {Array} defParams - Names for the parameters.
  @arg {string} methodName - for error reporting
  @arg {function} [optionsFormatter(extraParam) = null] - optional callback used if an
    extra optional (non-callback) parameter is provided.


  @return {processedArgs} processedArgs
  @throws TypeError - when parameter count is not exact (after adjusting for
  options and callback)

  @example api.processArgs(args, ['account'], 'contract', optionsFormatter)
*/
function processArgs(args, defParams) {
  var methodName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'method';
  var optionsFormatter = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var params = {};
  var options = {};

  var expectedArgCount = defParams.length;

  // Extra callback argument?  Last per promisifyAll standard.
  var callbackArg = void 0;
  if (typeof args[args.length - 1] === 'function') {
    callbackArg = args[args.length - 1];
    args = args.slice(0, args.length - 1);
  }

  var callback = void 0;
  var returnPromise = void 0;
  if (callbackArg) {
    callback = function callback(err, result) {
      if (err) {
        callbackArg(err);
      } else {
        callbackArg(null, result);
      }
    };
  } else {
    returnPromise = new Promise(function (resolve, reject) {
      callback = function callback(err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      };
    });
  }

  // Look for the options parameter (after potential callback was removed)
  if (typeof optionsFormatter === 'function' && args.length > 0 && (_typeof(args[0]) === 'object' && args.length === 2 || args.length === expectedArgCount + 1)) {
    //An extra options argument
    options = optionsFormatter(args[args.length - 1]);
    if (options != null) {
      // It is valid, remove it to avoid parameter count an error below
      args = args.slice(0, args.length - 1);
    }
  }

  // Parameteters (args) can be ordered or an object
  if (args.length === 1 && _typeof(args[0]) === 'object') {
    params = args[0];
  } else {
    // give ordered paramaters names

    if (args.length > expectedArgCount) {
      // console.log('typeof defParams[expectedArgCount]', args)
      throw new TypeError(methodName + ' is expecting ' + expectedArgCount + ' parameters but ' + args.length + ' where provided');
    }

    // convert ordered parameters into a value object by parameter name
    var pos = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = defParams[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var defParam = _step.value;

        params[defParam] = args[pos];
        pos++;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
  return { params: params, options: options, callback: callback, returnPromise: returnPromise };
}

/***/ }),

/***/ 1242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var schema = Object.assign({}, __webpack_require__(1273), __webpack_require__(1274), __webpack_require__(1275));

module.exports = schema;

/***/ }),

/***/ 1243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray2 = __webpack_require__(1236);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _typeof2 = __webpack_require__(265);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var assert = __webpack_require__(25);

var _require = __webpack_require__(465),
    Long = _require.Long;

module.exports = {
  ULong: ULong,
  isName: isName,
  encodeName: encodeName, // encode human readable name to uint64 (number string)
  decodeName: decodeName, // decode from uint64 to human readable
  encodeNameHex: function encodeNameHex(name) {
    return Long.fromString(encodeName(name), true).toString(16);
  },
  decodeNameHex: function decodeNameHex(hex) {
    var littleEndian = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return decodeName(Long.fromString(hex, true, 16).toString(), littleEndian);
  },
  DecimalString: DecimalString,
  DecimalPad: DecimalPad,
  DecimalImply: DecimalImply,
  DecimalUnimply: DecimalUnimply,
  printAsset: printAsset,
  parseAsset: parseAsset

  /** @private */
};var signed = function signed(fn) {
  return function () {};
};

function ULong(value) {
  var unsigned = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

  if (typeof value === 'number') {
    // Some JSON libs use numbers for values under 53 bits or strings for larger.
    // Accomidate but double-check it..
    if (value > Number.MAX_SAFE_INTEGER) throw new TypeError('value parameter overflow');

    value = Long.fromString(String(value), unsigned, radix);
  } else if (typeof value === 'string') {
    value = Long.fromString(value, unsigned, radix);
  } else if (!Long.isLong(value)) {
    throw new TypeError('value parameter is a requied Long, Number or String');
  }
  return value;
}

function isName(str, err) {
  try {
    encodeName(str);
    return true;
  } catch (error) {
    if (err) {
      err(error);
    }
    return false;
  }
}

var charmap = '.12345abcdefghijklmnopqrstuvwxyz';
var charidx = function charidx(ch) {
  var idx = charmap.indexOf(ch);
  if (idx === -1) throw new TypeError('Invalid character: \'' + ch + '\'');

  return idx;
};

/** Original Name encode and decode logic is in github.com/eosio/eos  native.hpp */

/**
  Encode a name (a base32 string) to a number.

  For performance reasons, the blockchain uses the numerical encoding of strings
  for very common types like account names.

  @see types.hpp string_to_name

  @arg {string} name - A string to encode, up to 12 characters long.

  @return {string<uint64>} - compressed string (from name arg).  A string is
    always used because a number could exceed JavaScript's 52 bit limit.
*/
function encodeName(name) {
  var littleEndian = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (typeof name !== 'string') throw new TypeError('name parameter is a required string');

  if (name.length > 12) throw new TypeError('A name can be up to 12 characters long');

  var bitstr = '';
  for (var i = 0; i <= 12; i++) {
    // process all 64 bits (even if name is short)
    var c = i < name.length ? charidx(name[i]) : 0;
    var bitlen = i < 12 ? 5 : 4;
    var bits = Number(c).toString(2);
    if (bits.length > bitlen) {
      throw new TypeError('Invalid name ' + name);
    }
    bits = '0'.repeat(bitlen - bits.length) + bits;
    bitstr += bits;
  }

  var value = Long.fromString(bitstr, true, 2);

  // convert to LITTLE_ENDIAN
  var leHex = '';
  var bytes = littleEndian ? value.toBytesLE() : value.toBytesBE();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = bytes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var b = _step.value;

      var n = Number(b).toString(16);
      leHex += (n.length === 1 ? '0' : '') + n;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var ulName = Long.fromString(leHex, true, 16).toString();

  // console.log('encodeName', name, value.toString(), ulName.toString(), JSON.stringify(bitstr.split(/(.....)/).slice(1)))

  return ulName.toString();
}

/**
  @arg {Long|String|number} value uint64
  @return {string}
*/
function decodeName(value) {
  var littleEndian = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  value = ULong(value);

  // convert from LITTLE_ENDIAN
  var beHex = '';
  var bytes = littleEndian ? value.toBytesLE() : value.toBytesBE();
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = bytes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var b = _step2.value;

      var n = Number(b).toString(16);
      beHex += (n.length === 1 ? '0' : '') + n;
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  beHex += '0'.repeat(16 - beHex.length);

  var fiveBits = Long.fromNumber(0x1f, true);
  var fourBits = Long.fromNumber(0x0f, true);
  var beValue = Long.fromString(beHex, true, 16);

  var str = '';
  var tmp = beValue;

  for (var i = 0; i <= 12; i++) {
    var c = charmap[tmp.and(i === 0 ? fourBits : fiveBits)];
    str = c + str;
    tmp = tmp.shiftRight(i === 0 ? 4 : 5);
  }
  str = str.replace(/\.+$/, ''); // remove trailing dots (all of them)

  // console.log('decodeName', str, beValue.toString(), value.toString(), JSON.stringify(beValue.toString(2).split(/(.....)/).slice(1)))

  return str;
}

/**
  Normalize and validate decimal string (potentially large values).  Should
  avoid internationalization issues if possible but will be safe and
  throw an error for an invalid number.

  Normalization removes extra zeros or decimal.

  @return {string} value
*/
function DecimalString(value) {
  assert(value != null, 'value is required');
  value = value === 'object' && value.toString ? value.toString() : String(value);

  var neg = /^-/.test(value);
  if (neg) {
    value = value.substring(1);
  }

  if (value[0] === '.') {
    value = '0' + value;
  }

  var part = value.split('.');
  assert(part.length <= 2, 'invalid decimal ' + value);
  assert(/^\d+(,?\d)*\d*$/.test(part[0]), 'invalid decimal ' + value);

  if (part.length === 2) {
    assert(/^\d*$/.test(part[1]), 'invalid decimal ' + value);
    part[1] = part[1].replace(/0+$/, ''); // remove suffixing zeros
    if (part[1] === '') {
      part.pop();
    }
  }

  part[0] = part[0].replace(/^0*/, ''); // remove leading zeros
  if (part[0] === '') {
    part[0] = '0';
  }
  return (neg ? '-' : '') + part.join('.');
}

/**
  Ensure a fixed number of decimal places.  Safe for large numbers.

  @see ./format.test.js

  @example DecimalPad(10.2, 3) === '10.200'

  @arg {number|string|object.toString} value
  @arg {number} [precision = null] - number of decimal places (null skips padding)
  @return {string} decimal part is added and zero padded to match precision
*/
function DecimalPad(num, precision) {
  var value = DecimalString(num);
  if (precision == null) {
    return num;
  }

  assert(precision >= 0 && precision <= 18, 'Precision should be 18 characters or less');

  var part = value.split('.');

  if (precision === 0 && part.length === 1) {
    return part[0];
  }

  if (part.length === 1) {
    return part[0] + '.' + '0'.repeat(precision);
  } else {
    var pad = precision - part[1].length;
    assert(pad >= 0, 'decimal \'' + value + '\' exceeds precision ' + precision);
    return part[0] + '.' + part[1] + '0'.repeat(pad);
  }
}

/** Ensures proper trailing zeros then removes decimal place. */
function DecimalImply(value, precision) {
  return DecimalPad(value, precision).replace('.', '');
}

/**
  Put the decimal place back in its position and return the normalized number
  string (with any unnecessary zeros or an unnecessary decimal removed).

  @arg {string|number|value.toString} value 10000
  @arg {number} precision 4
  @return {number} 1.0000
*/
function DecimalUnimply(value, precision) {
  assert(value != null, 'value is required');
  value = value === 'object' && value.toString ? value.toString() : String(value);
  var neg = /^-/.test(value);
  if (neg) {
    value = value.substring(1);
  }
  assert(/^\d+$/.test(value), 'invalid whole number ' + value);
  assert(precision != null, 'precision required');
  assert(precision >= 0 && precision <= 18, 'Precision should be 18 characters or less');

  // Ensure minimum length
  var pad = precision - value.length;
  if (pad > 0) {
    value = '' + '0'.repeat(pad) + value;
  }

  var dotIdx = value.length - precision;
  value = value.slice(0, dotIdx) + '.' + value.slice(dotIdx);
  return (neg ? '-' : '') + DecimalPad(value, precision); // Normalize
}

/** @private for now, support for asset strings is limited
*/
function printAsset(_ref) {
  var amount = _ref.amount,
      precision = _ref.precision,
      symbol = _ref.symbol,
      contract = _ref.contract;

  assert.equal(typeof symbol === 'undefined' ? 'undefined' : (0, _typeof3.default)(symbol), 'string', 'symbol is a required string');

  if (amount != null && precision != null) {
    amount = DecimalPad(amount, precision);
  }

  var join = function join(e1, e2) {
    return e1 == null ? '' : e2 == null ? '' : e1 + e2;
  };

  if (amount != null) {
    // the amount contains the precision
    return join(amount, ' ') + symbol + join('@', contract);
  }

  return join(precision, ',') + symbol + join('@', contract);
}

/**
  Attempts to parse all forms of the asset strings (symbol, asset, or extended
  versions).  If the provided string contains any additional or appears to have
  invalid information an error is thrown.

  @return {object} {amount, precision, symbol, contract}
  @throws AssertionError
*/
function parseAsset(str) {
  var _str$split = str.split(' '),
      _str$split2 = (0, _slicedToArray3.default)(_str$split, 1),
      amountRaw = _str$split2[0];

  var amountMatch = amountRaw.match(/^(-?[0-9]+(\.[0-9]+)?)( |$)/);
  var amount = amountMatch ? amountMatch[1] : null;

  var precisionMatch = str.match(/(^| )([0-9]+),([A-Z]+)(@|$)/);
  var precisionSymbol = precisionMatch ? Number(precisionMatch[2]) : null;
  var precisionAmount = amount ? (amount.split('.')[1] || '').length : null;
  var precision = precisionSymbol != null ? precisionSymbol : precisionAmount;

  var symbolMatch = str.match(/(^| |,)([A-Z]+)(@|$)/);
  var symbol = symbolMatch ? symbolMatch[2] : null;

  var _str$split3 = str.split('@'),
      _str$split4 = (0, _slicedToArray3.default)(_str$split3, 2),
      contractRaw = _str$split4[1];

  var contract = /^[a-z0-5]+(\.[a-z0-5]+)*$/.test(contractRaw) ? contractRaw : null;

  var check = printAsset({ amount: amount, precision: precision, symbol: symbol, contract: contract });

  assert.equal(str, check, 'Invalid asset string: ' + str + ' !== ' + check);

  if (precision != null) {
    assert(precision >= 0 && precision <= 18, 'Precision should be 18 characters or less');
  }
  if (symbol != null) {
    assert(symbol.length <= 7, 'Asset symbol is 7 characters or less');
  }
  if (contract != null) {
    assert(contract.length <= 12, 'Contract is 12 characters or less');
  }

  return { amount: amount, precision: precision, symbol: symbol, contract: contract };
}

/***/ }),

/***/ 1244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Aes = __webpack_require__(1237);
var PrivateKey = __webpack_require__(1232);
var PublicKey = __webpack_require__(1230);
var Signature = __webpack_require__(1238);
var key_utils = __webpack_require__(1231);
var hash = __webpack_require__(1229);

/**
    [Wallet Import Format](https://en.bitcoin.it/wiki/Wallet_import_format)
    @typedef {string} wif
*/
/**
    EOSKey..
    @typedef {string} pubkey
*/

/** @namespace */
var ecc = {
    /**
      Initialize by running some self-checking code.  This should take a
      second to gather additional CPU entropy used during private key
      generation.
       Initialization happens once even if called multiple times.
       @return {Promise}
    */
    initialize: PrivateKey.initialize,

    /**
      Does not pause to gather CPU entropy.
      @return {Promise<PrivateKey>} test key
    */
    unsafeRandomKey: function unsafeRandomKey() {
        return PrivateKey.unsafeRandomKey().then(function (key) {
            return key.toString();
        });
    },

    /**
        @arg {number} [cpuEntropyBits = 0] gather additional entropy
        from a CPU mining algorithm.  This will already happen once by
        default.
         @return {Promise<wif>}
         @example
    ecc.randomKey().then(privateKey => {
    console.log('Private Key:\t', privateKey) // wif
    console.log('Public Key:\t', ecc.privateToPublic(privateKey)) // EOSkey...
    })
    */
    randomKey: function randomKey(cpuEntropyBits) {
        return PrivateKey.randomKey(cpuEntropyBits).then(function (key) {
            return key.toString();
        });
    },

    /**
         @arg {string} seed - any length string.  This is private.  The same
        seed produces the same private key every time.  At least 128 random
        bits should be used to produce a good private key.
        @return {wif}
         @example ecc.seedPrivate('secret') === wif
    */
    seedPrivate: function seedPrivate(seed) {
        return PrivateKey.fromSeed(seed).toString();
    },

    /**
        @arg {wif} wif
        @return {pubkey}
         @example ecc.privateToPublic(wif) === pubkey
    */
    privateToPublic: function privateToPublic(wif) {
        return PrivateKey(wif).toPublic().toString();
    },

    /**
        @arg {pubkey} pubkey - like EOSKey..
        @return {boolean} valid
         @example ecc.isValidPublic(pubkey) === true
    */
    isValidPublic: function isValidPublic(pubkey) {
        return PublicKey.isValid(pubkey);
    },

    /**
        @arg {wif} wif
        @return {boolean} valid
         @example ecc.isValidPrivate(wif) === true
    */
    isValidPrivate: function isValidPrivate(wif) {
        return PrivateKey.isValid(wif);
    },

    /**
        Create a signature using data or a hash.
         @arg {string|Buffer} data
        @arg {wif|PrivateKey} privateKey
        @arg {String} [encoding = 'utf8'] - data encoding (if string)
         @return {string} string signature
         @example ecc.sign('I am alive', wif)
    */
    sign: function sign(data, privateKey) {
        var encoding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'utf8';

        if (encoding === true) {
            throw new TypeError('API changed, use signHash(..) instead');
        } else {
            if (encoding === false) {
                console.log('Warning: ecc.sign hashData parameter was removed');
            }
        }
        return Signature.sign(data, privateKey, encoding).toString();
    },

    /**
        @arg {String|Buffer} dataSha256 - sha256 hash 32 byte buffer or string
        @arg {wif|PrivateKey} privateKey
        @arg {String} [encoding = 'hex'] - dataSha256 encoding (if string)
         @return {string} string signature
    */
    signHash: function signHash(dataSha256, privateKey) {
        var encoding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'hex';

        return Signature.signHash(dataSha256, privateKey, encoding).toString();
    },

    /**
        Verify signed data.
         @arg {string|Buffer} signature - buffer or hex string
        @arg {string|Buffer} data
        @arg {pubkey|PublicKey} pubkey
        @arg {boolean} [hashData = true] - sha256 hash data before verify
        @return {boolean}
         @example ecc.verify(signature, 'I am alive', pubkey) === true
    */
    verify: function verify(signature, data, pubkey) {
        var encoding = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'utf8';

        if (encoding === true) {
            throw new TypeError('API changed, use verifyHash(..) instead');
        } else {
            if (encoding === false) {
                console.log('Warning: ecc.verify hashData parameter was removed');
            }
        }
        signature = Signature.from(signature);
        return signature.verify(data, pubkey, encoding);
    },

    verifyHash: function verifyHash(signature, dataSha256, pubkey) {
        var encoding = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'hex';

        signature = Signature.from(signature);
        return signature.verifyHash(dataSha256, pubkey, encoding);
    },


    /**
        Recover the public key used to create the signature.
         @arg {String|Buffer} signature (EOSbase58sig.., Hex, Buffer)
        @arg {String|Buffer} data - full data
        @arg {String} [encoding = 'utf8'] - data encoding (if data is a string)
         @return {pubkey}
         @example ecc.recover(signature, 'I am alive') === pubkey
    */
    recover: function recover(signature, data) {
        var encoding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'utf8';

        if (encoding === true) {
            throw new TypeError('API changed, use recoverHash(signature, data) instead');
        } else {
            if (encoding === false) {
                console.log('Warning: ecc.recover hashData parameter was removed');
            }
        }
        signature = Signature.from(signature);
        return signature.recover(data, encoding).toString();
    },

    /**
        @arg {String|Buffer} signature (EOSbase58sig.., Hex, Buffer)
        @arg {String|Buffer} dataSha256 - sha256 hash 32 byte buffer or hex string
        @arg {String} [encoding = 'hex'] - dataSha256 encoding (if dataSha256 is a string)
         @return {PublicKey}
    */
    recoverHash: function recoverHash(signature, dataSha256) {
        var encoding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'hex';

        signature = Signature.from(signature);
        return signature.recoverHash(dataSha256, encoding).toString();
    },

    /** @arg {string|Buffer} data
        @arg {string} [encoding = 'hex'] - 'hex', 'binary' or 'base64'
        @return {string|Buffer} - Buffer when encoding is null, or string
         @example ecc.sha256('hashme') === '02208b..'
    */
    sha256: function sha256(data) {
        var encoding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'hex';
        return hash.sha256(data, encoding);
    }
};

module.exports = ecc;

/***/ }),

/***/ 1245:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
  Convert a synchronous function into a asynchronous one (via setTimeout)
  wrapping it in a promise.  This does not expect the function to have a
  callback paramter.

  @arg {function} func - non-callback function

  @example promiseAsync(myfunction)
*/
module.exports = function (func) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        try {
          resolve(func.apply(undefined, args));
        } catch (err) {
          reject(err);
        }
      });
    });
  };
};

/***/ }),

/***/ 1246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var assert = __webpack_require__(25); // from github.com/bitcoinjs/bitcoinjs-lib from github.com/cryptocoinjs/ecdsa
var crypto = __webpack_require__(1229);
var enforceType = __webpack_require__(1239);

var BigInteger = __webpack_require__(33);
var ECSignature = __webpack_require__(1247);

// https://tools.ietf.org/html/rfc6979#section-3.2
function deterministicGenerateK(curve, hash, d, checkSig, nonce) {

  enforceType('Buffer', hash);
  enforceType(BigInteger, d);

  if (nonce) {
    hash = crypto.sha256(Buffer.concat([hash, new Buffer(nonce)]));
  }

  // sanity check
  assert.equal(hash.length, 32, 'Hash must be 256 bit');

  var x = d.toBuffer(32);
  var k = new Buffer(32);
  var v = new Buffer(32);

  // Step B
  v.fill(1);

  // Step C
  k.fill(0);

  // Step D
  k = crypto.HmacSHA256(Buffer.concat([v, new Buffer([0]), x, hash]), k);

  // Step E
  v = crypto.HmacSHA256(v, k);

  // Step F
  k = crypto.HmacSHA256(Buffer.concat([v, new Buffer([1]), x, hash]), k);

  // Step G
  v = crypto.HmacSHA256(v, k);

  // Step H1/H2a, ignored as tlen === qlen (256 bit)
  // Step H2b
  v = crypto.HmacSHA256(v, k);

  var T = BigInteger.fromBuffer(v);

  // Step H3, repeat until T is within the interval [1, n - 1]
  while (T.signum() <= 0 || T.compareTo(curve.n) >= 0 || !checkSig(T)) {
    k = crypto.HmacSHA256(Buffer.concat([v, new Buffer([0])]), k);
    v = crypto.HmacSHA256(v, k);

    // Step H1/H2a, again, ignored as tlen === qlen (256 bit)
    // Step H2b again
    v = crypto.HmacSHA256(v, k);

    T = BigInteger.fromBuffer(v);
  }

  return T;
}

function sign(curve, hash, d, nonce) {

  var e = BigInteger.fromBuffer(hash);
  var n = curve.n;
  var G = curve.G;

  var r, s;
  var k = deterministicGenerateK(curve, hash, d, function (k) {
    // find canonically valid signature
    var Q = G.multiply(k);

    if (curve.isInfinity(Q)) return false;

    r = Q.affineX.mod(n);
    if (r.signum() === 0) return false;

    s = k.modInverse(n).multiply(e.add(d.multiply(r))).mod(n);
    if (s.signum() === 0) return false;

    return true;
  }, nonce);

  var N_OVER_TWO = n.shiftRight(1);

  // enforce low S values, see bip62: 'low s values in signatures'
  if (s.compareTo(N_OVER_TWO) > 0) {
    s = n.subtract(s);
  }

  return ECSignature(r, s);
}

function verifyRaw(curve, e, signature, Q) {
  var n = curve.n;
  var G = curve.G;

  var r = signature.r;
  var s = signature.s;

  // 1.4.1 Enforce r and s are both integers in the interval [1, n − 1]
  if (r.signum() <= 0 || r.compareTo(n) >= 0) return false;
  if (s.signum() <= 0 || s.compareTo(n) >= 0) return false;

  // c = s^-1 mod n
  var c = s.modInverse(n);

  // 1.4.4 Compute u1 = es^−1 mod n
  //               u2 = rs^−1 mod n
  var u1 = e.multiply(c).mod(n);
  var u2 = r.multiply(c).mod(n);

  // 1.4.5 Compute R = (xR, yR) = u1G + u2Q
  var R = G.multiplyTwo(u1, Q, u2);

  // 1.4.5 (cont.) Enforce R is not at infinity
  if (curve.isInfinity(R)) return false;

  // 1.4.6 Convert the field element R.x to an integer
  var xR = R.affineX;

  // 1.4.7 Set v = xR mod n
  var v = xR.mod(n);

  // 1.4.8 If v = r, output "valid", and if v != r, output "invalid"
  return v.equals(r);
}

function verify(curve, hash, signature, Q) {
  // 1.4.2 H = Hash(M), already done by the user
  // 1.4.3 e = H
  var e = BigInteger.fromBuffer(hash);
  return verifyRaw(curve, e, signature, Q);
}

/**
  * Recover a public key from a signature.
  *
  * See SEC 1: Elliptic Curve Cryptography, section 4.1.6, "Public
  * Key Recovery Operation".
  *
  * http://www.secg.org/download/aid-780/sec1-v2.pdf
  */
function recoverPubKey(curve, e, signature, i) {
  assert.strictEqual(i & 3, i, 'Recovery param is more than two bits');

  var n = curve.n;
  var G = curve.G;

  var r = signature.r;
  var s = signature.s;

  assert(r.signum() > 0 && r.compareTo(n) < 0, 'Invalid r value');
  assert(s.signum() > 0 && s.compareTo(n) < 0, 'Invalid s value');

  // A set LSB signifies that the y-coordinate is odd
  var isYOdd = i & 1;

  // The more significant bit specifies whether we should use the
  // first or second candidate key.
  var isSecondKey = i >> 1;

  // 1.1 Let x = r + jn
  var x = isSecondKey ? r.add(n) : r;
  var R = curve.pointFromX(isYOdd, x);

  // 1.4 Check that nR is at infinity
  var nR = R.multiply(n);
  assert(curve.isInfinity(nR), 'nR is not a valid curve point');

  // Compute -e from e
  var eNeg = e.negate().mod(n);

  // 1.6.1 Compute Q = r^-1 (sR -  eG)
  //               Q = r^-1 (sR + -eG)
  var rInv = r.modInverse(n);

  var Q = R.multiplyTwo(s, G, eNeg).multiply(rInv);
  curve.validate(Q);

  return Q;
}

/**
  * Calculate pubkey extraction parameter.
  *
  * When extracting a pubkey from a signature, we have to
  * distinguish four different cases. Rather than putting this
  * burden on the verifier, Bitcoin includes a 2-bit value with the
  * signature.
  *
  * This function simply tries all four cases and returns the value
  * that resulted in a successful pubkey recovery.
  */
function calcPubKeyRecoveryParam(curve, e, signature, Q) {
  for (var i = 0; i < 4; i++) {
    var Qprime = recoverPubKey(curve, e, signature, i);

    // 1.6.2 Verify Q
    if (Qprime.equals(Q)) {
      return i;
    }
  }

  throw new Error('Unable to find valid recovery factor');
}

module.exports = {
  calcPubKeyRecoveryParam: calcPubKeyRecoveryParam,
  deterministicGenerateK: deterministicGenerateK,
  recoverPubKey: recoverPubKey,
  sign: sign,
  verify: verify,
  verifyRaw: verifyRaw
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),

/***/ 1247:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var assert = __webpack_require__(25); // from https://github.com/bitcoinjs/bitcoinjs-lib
var enforceType = __webpack_require__(1239);

var BigInteger = __webpack_require__(33);

function ECSignature(r, s) {
  enforceType(BigInteger, r);
  enforceType(BigInteger, s);

  function toCompact(i, compressed) {
    if (compressed) i += 4;
    i += 27;

    var buffer = new Buffer(65);
    buffer.writeUInt8(i, 0);

    r.toBuffer(32).copy(buffer, 1);
    s.toBuffer(32).copy(buffer, 33);

    return buffer;
  }

  function toDER() {
    var rBa = r.toDERInteger();
    var sBa = s.toDERInteger();

    var sequence = [];

    // INTEGER
    sequence.push(0x02, rBa.length);
    sequence = sequence.concat(rBa);

    // INTEGER
    sequence.push(0x02, sBa.length);
    sequence = sequence.concat(sBa);

    // SEQUENCE
    sequence.unshift(0x30, sequence.length);

    return new Buffer(sequence);
  }

  function toScriptSignature(hashType) {
    var hashTypeBuffer = new Buffer(1);
    hashTypeBuffer.writeUInt8(hashType, 0);

    return Buffer.concat([toDER(), hashTypeBuffer]);
  }

  return { r: r, s: s, toCompact: toCompact, toDER: toDER, toScriptSignature: toScriptSignature };
}

// Import operations
ECSignature.parseCompact = function (buffer) {
  assert.equal(buffer.length, 65, 'Invalid signature length');
  var i = buffer.readUInt8(0) - 27;

  // At most 3 bits
  assert.equal(i, i & 7, 'Invalid signature parameter');
  var compressed = !!(i & 4);

  // Recovery param only
  i = i & 3;

  var r = BigInteger.fromBuffer(buffer.slice(1, 33));
  var s = BigInteger.fromBuffer(buffer.slice(33));

  return {
    compressed: compressed,
    i: i,
    signature: ECSignature(r, s)
  };
};

ECSignature.fromDER = function (buffer) {
  assert.equal(buffer.readUInt8(0), 0x30, 'Not a DER sequence');
  assert.equal(buffer.readUInt8(1), buffer.length - 2, 'Invalid sequence length');
  assert.equal(buffer.readUInt8(2), 0x02, 'Expected a DER integer');

  var rLen = buffer.readUInt8(3);
  assert(rLen > 0, 'R length is zero');

  var offset = 4 + rLen;
  assert.equal(buffer.readUInt8(offset), 0x02, 'Expected a DER integer (2)');

  var sLen = buffer.readUInt8(offset + 1);
  assert(sLen > 0, 'S length is zero');

  var rB = buffer.slice(4, offset);
  var sB = buffer.slice(offset + 2);
  offset += 2 + sLen;

  if (rLen > 1 && rB.readUInt8(0) === 0x00) {
    assert(rB.readUInt8(1) & 0x80, 'R value excessively padded');
  }

  if (sLen > 1 && sB.readUInt8(0) === 0x00) {
    assert(sB.readUInt8(1) & 0x80, 'S value excessively padded');
  }

  assert.equal(offset, buffer.length, 'Invalid DER encoding');
  var r = BigInteger.fromDERInteger(rB);
  var s = BigInteger.fromDERInteger(sB);

  assert(r.signum() >= 0, 'R value is negative');
  assert(s.signum() >= 0, 'S value is negative');

  return ECSignature(r, s);
};

// FIXME: 0x00, 0x04, 0x80 are SIGHASH_* boundary constants, importing Transaction causes a circular dependency
ECSignature.parseScriptSignature = function (buffer) {
  var hashType = buffer.readUInt8(buffer.length - 1);
  var hashTypeMod = hashType & ~0x80;

  assert(hashTypeMod > 0x00 && hashTypeMod < 0x04, 'Invalid hashType');

  return {
    signature: ECSignature.fromDER(buffer.slice(0, -1)),
    hashType: hashType
  };
};

module.exports = ECSignature;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),

/***/ 1248:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Aes = __webpack_require__(1237);
var PrivateKey = __webpack_require__(1232);
var PublicKey = __webpack_require__(1230);
var Signature = __webpack_require__(1238);
var key_utils = __webpack_require__(1231);

module.exports = {
    Aes: Aes, PrivateKey: PrivateKey, PublicKey: PublicKey,
    Signature: Signature, key_utils: key_utils
};

/***/ }),

/***/ 1249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var BN = __webpack_require__(17);

var _require = __webpack_require__(465),
    Long = _require.Long;

var assert = __webpack_require__(25);

var types = {
  bytes: function bytes() {
    return [bytebuf];
  },
  string: function string() {
    return [_string];
  },
  vector: function vector(type) {
    var sorted = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return [_vector, { type: type, sorted: sorted }];
  },
  optional: function optional(type) {
    return [_optional, { type: type }];
  },
  time: function time() {
    return [_time2];
  },
  map: function map(annotation) {
    return [_map, { annotation: annotation }];
  },
  static_variant: function static_variant(types) {
    return [_static_variant, { types: types }];
  },

  fixed_string16: function fixed_string16() {
    return [_string, { maxLen: 16 }];
  },
  fixed_string32: function fixed_string32() {
    return [_string, { maxLen: 32 }];
  },

  fixed_bytes16: function fixed_bytes16() {
    return [bytebuf, { len: 16 }];
  },
  fixed_bytes20: function fixed_bytes20() {
    return [bytebuf, { len: 20 }];
  },
  fixed_bytes28: function fixed_bytes28() {
    return [bytebuf, { len: 28 }];
  },
  fixed_bytes32: function fixed_bytes32() {
    return [bytebuf, { len: 32 }];
  },
  fixed_bytes33: function fixed_bytes33() {
    return [bytebuf, { len: 33 }];
  },
  fixed_bytes64: function fixed_bytes64() {
    return [bytebuf, { len: 64 }];
  },
  fixed_bytes65: function fixed_bytes65() {
    return [bytebuf, { len: 65 }];
  },

  uint8: function uint8() {
    return [intbuf, { bits: 8 }];
  },
  uint16: function uint16() {
    return [intbuf, { bits: 16 }];
  },
  uint32: function uint32() {
    return [intbuf, { bits: 32 }];
  },
  uint64: function uint64() {
    return [intbuf, { bits: 64 }];
  },
  uint128: function uint128() {
    return [bnbuf, { bits: 128 }];
  },
  uint224: function uint224() {
    return [bnbuf, { bits: 224 }];
  },
  uint256: function uint256() {
    return [bnbuf, { bits: 256 }];
  },
  uint512: function uint512() {
    return [bnbuf, { bits: 512 }];
  },

  varuint32: function varuint32() {
    return [intbuf, { bits: 32, variable: true }];
  },

  int8: function int8() {
    return [intbuf, { signed: true, bits: 8 }];
  },
  int16: function int16() {
    return [intbuf, { signed: true, bits: 16 }];
  },
  int32: function int32() {
    return [intbuf, { signed: true, bits: 32 }];
  },
  int64: function int64() {
    return [intbuf, { signed: true, bits: 64 }];
  },
  int128: function int128() {
    return [bnbuf, { signed: true, bits: 128 }];
  },
  int224: function int224() {
    return [bnbuf, { signed: true, bits: 224 }];
  },
  int256: function int256() {
    return [bnbuf, { signed: true, bits: 256 }];
  },
  int512: function int512() {
    return [bnbuf, { signed: true, bits: 512 }];
  },

  varint32: function varint32() {
    return [intbuf, { signed: true, bits: 32, variable: true }];
  },

  float64: function float64() {
    return [float, { bits: 64 }];
  }

  /*
    @arg {SerializerConfig} config
    @return {object} {[typeName]: function(args)}
  */
};module.exports = function (config) {
  config = Object.assign({ defaults: false, debug: false, customTypes: {} }, config);

  var allTypes = Object.assign({}, types, config.customTypes);

  var createTypeReducer = function createTypeReducer(baseTypes) {
    return function (customTypes, name) {
      customTypes[name] = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var type = createType(name, config, args, baseTypes, allTypes, customTypes);
        return type;
      };
      return customTypes;
    };
  };

  var baseTypes = Object.keys(types).reduce(createTypeReducer(), {});

  var customTypes = Object.keys(config.customTypes || {}).reduce(createTypeReducer(baseTypes), {});

  return Object.assign({}, baseTypes, customTypes, { config: config });
};

/**
    @args {string} typeName - matches types[]
    @args {string} config - Additional arguments for types
*/
function createType(typeName, config, args, baseTypes, allTypes, customTypes) {
  var Type = baseTypes ? allTypes[typeName] : types[typeName];

  var _Type = Type.apply(undefined, _toConsumableArray(args)),
      _Type2 = _slicedToArray(_Type, 2),
      fn = _Type2[0],
      _Type2$ = _Type2[1],
      v = _Type2$ === undefined ? {} : _Type2$;

  var validation = Object.assign(v, config);
  validation.typeName = typeName;
  var type = fn(validation, baseTypes, customTypes);
  type.typeName = typeName;
  return type;
}

var _map = function _map(validation) {
  var _validation$annotatio = _slicedToArray(validation.annotation, 2),
      type1 = _validation$annotatio[0],
      type2 = _validation$annotatio[1];

  if (!isSerializer(type1)) {
    throw new TypeError('map<type1, > unknown');
  }
  if (!isSerializer(type2)) {
    throw new TypeError('map<, type2> unknown');
  }

  return {
    fromByteBuffer: function fromByteBuffer(b) {
      var size = b.readVarint32();
      var result = {};
      for (var i = 0; i < size; i++) {
        result[type1.fromByteBuffer(b)] = type2.fromByteBuffer(b);
      }
      if (validation.debug) {
        console.log('0x' + size.toString(16), '(map.fromByteBuffer length)', result);
      }
      return result;
    },
    appendByteBuffer: function appendByteBuffer(b, value) {
      validate(value, validation);
      var keys = Object.keys(value);
      b.writeVarint32(keys.length);
      if (validation.debug) {
        console.log('0x' + keys.length.toString(16), '(map.appendByteBuffer length)', keys);
      }
      // if(sorted === true) {
      //   value = sortKeys(type1, Object.assign({}, value))
      // }
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var o = _step.value;

          var value2 = value[o];
          type1.appendByteBuffer(b, o);
          type2.appendByteBuffer(b, value2);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    },
    fromObject: function fromObject(value) {
      validate(value, validation);
      var result = {};
      // if(sorted === true) {
      //   value = sortKeys(type1, Object.assign({}, value))
      // }
      for (var o in value) {
        result[type1.fromObject(o)] = type2.fromObject(value[o]);
      }
      return result;
    },
    toObject: function toObject(value) {
      if (validation.defaults && value == null) {
        return _defineProperty({}, type1.toObject(null), type2.toObject(null));
      }
      validate(value, validation);
      var result = {};
      // if(sorted === true) {
      //   value = sortKey(type1, Object.assign({}, value))
      // }
      for (var o in value) {
        result[type1.toObject(o)] = type2.toObject(value[o]);
      }
      return result;
    }
  };
};

var _static_variant = function _static_variant(validation) {
  var types = validation.types;

  return {
    fromByteBuffer: function fromByteBuffer(b) {
      var typePosition = b.readVarint32();
      var type = types[typePosition];
      if (validation.debug) {
        console.error('static_variant id ' + typePosition + ' (0x' + typePosition.toString(16) + ')');
      }
      assert(type, 'static_variant invalid type position ' + typePosition);
      return [typePosition, type.fromByteBuffer(b)];
    },
    appendByteBuffer: function appendByteBuffer(b, object) {
      assert(Array.isArray(object) && object.length === 2, 'Required tuple');
      var typePosition = object[0];
      var type = types[typePosition];
      assert(type, 'type ' + typePosition);
      b.writeVarint32(typePosition);
      type.appendByteBuffer(b, object[1]);
    },
    fromObject: function fromObject(object) {
      assert(Array.isArray(object) && object.length === 2, 'Required tuple');
      var typePosition = object[0];
      var type = types[typePosition];
      assert(type, 'type ' + typePosition);
      return [typePosition, type.fromObject(object[1])];
    },
    toObject: function toObject(object) {
      if (validation.defaults && object == null) {
        return [0, types[0].toObject(null, debug)];
      }
      assert(Array.isArray(object) && object.length === 2, 'Required tuple');
      var typePosition = object[0];
      var type = types[typePosition];
      assert(type, 'type ' + typePosition);
      return [typePosition, type.toObject(object[1])];
    }
  };
};

var _vector = function _vector(validation) {
  var type = validation.type,
      sorted = validation.sorted;

  if (!isSerializer(type)) {
    throw new TypeError('vector type should be a serializer');
  }

  return {
    fromByteBuffer: function fromByteBuffer(b) {
      var size = b.readVarint32();
      if (validation.debug) {
        console.log('fromByteBuffer vector length', size, '(0x' + size.toString(16) + ')');
      }
      var result = [];
      for (var i = 0; i < size; i++) {
        result.push(type.fromByteBuffer(b));
      }
      return result;
    },
    appendByteBuffer: function appendByteBuffer(b, value) {
      if (value == null) {
        value = [];
      }
      validate(value, validation);
      b.writeVarint32(value.length);
      if (sorted === true) {
        value = sort(type, Object.assign([], value));
      }
      if (validation.debug) {
        console.log('0x' + value.length.toString(16), '(vector.appendByteBuffer length)', value);
      }
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = value[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var o = _step2.value;

          type.appendByteBuffer(b, o);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    },
    fromObject: function fromObject(value) {
      if (value == null) {
        value = [];
      }
      validate(value, validation);
      var result = [];
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = value[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var o = _step3.value;

          result.push(type.fromObject(o));
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      if (sorted === true) {
        result = sort(type, Object.assign([], result));
      }
      return result;
    },
    toObject: function toObject(value) {
      if (validation.defaults && value == null) {
        return [type.toObject(value)];
      }
      if (value == null) {
        value = [];
      }
      validate(value, validation);
      if (sorted === true) {
        value = sort(type, Object.assign([], value));
      }
      var result = [];
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = value[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var o = _step4.value;

          result.push(type.toObject(o));
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      return result;
    }
  };
};

var _optional = function _optional(validation) {
  var type = validation.type;

  if (!isSerializer(type)) {
    throw new TypeError('optional parameter should be a serializer');
  }

  return {
    fromByteBuffer: function fromByteBuffer(b) {
      if (!(b.readUint8() === 1)) {
        return null;
      }
      return type.fromByteBuffer(b);
    },
    appendByteBuffer: function appendByteBuffer(b, value) {
      if (value != null) {
        b.writeUint8(1);
        type.appendByteBuffer(b, value);
      } else {
        b.writeUint8(0);
      }
    },
    fromObject: function fromObject(value) {
      if (value == null) {
        return null;
      }
      return type.fromObject(value);
    },
    toObject: function toObject(value) {
      // toObject is only null save if defaults is true
      var resultValue = void 0;
      if (value == null && !validation.defaults) {
        resultValue = null;
      } else {
        resultValue = type.toObject(value);
      }
      return resultValue;
    }
  };
};

var intbufType = function intbufType(_ref2) {
  var _ref2$signed = _ref2.signed,
      signed = _ref2$signed === undefined ? false : _ref2$signed,
      bits = _ref2.bits,
      variable = _ref2.variable;
  return variable ? 'Varint' + bits + (signed ? 'ZigZag' : '') : '' + (signed ? 'Int' : 'Uint') + bits;
};

var intbuf = function intbuf(validation) {
  return {
    fromByteBuffer: function fromByteBuffer(b) {
      var value = b['read' + intbufType(validation)]();
      return Long.isLong(value) ? value.toString() : value;
    },
    appendByteBuffer: function appendByteBuffer(b, value) {
      // validateInt(value, validation)
      // value = typeof value === 'string' ? Long.fromString(value) : value
      b['write' + intbufType(validation)](value);
    },
    fromObject: function fromObject(value) {
      validateInt(value, validation);
      // if(validation.bits > 53 && typeof value === 'number')
      //     value = String(value)

      return value;
    },
    toObject: function toObject(value) {
      if (validation.defaults && value == null) {
        return validation.bits > 53 ? '0' : 0;
      }

      validateInt(value, validation);
      // if(validation.bits > 53 && typeof value === 'number')
      //     value = String(value)

      return Long.isLong(value) ? value.toString() : value;
    }
  };
};

/** Big Numbers (> 64 bits) */
var bnbuf = function bnbuf(validation) {
  var _validation$signed = validation.signed,
      signed = _validation$signed === undefined ? false : _validation$signed,
      bits = validation.bits;

  var size = bits / 8;
  return {
    fromByteBuffer: function fromByteBuffer(b) {
      var bcopy = b.copy(b.offset, b.offset + size);
      b.skip(size);

      var bn = new BN(bcopy.toHex(), 'hex');
      var buf = bn.toArrayLike(Buffer, 'le', size); // convert to little endian
      bn = new BN(buf.toString('hex'), 'hex');
      if (signed) {
        bn = bn.fromTwos(bits);
      }
      var value = bn.toString();
      validateInt(value, validation);
      return bits > 53 ? value : bn.toNumber();
    },
    appendByteBuffer: function appendByteBuffer(b, value) {
      validateInt(value, validation);
      var bn = new BN(value);
      if (signed) {
        bn = bn.toTwos(bits);
      }
      var buf = bn.toArrayLike(Buffer, 'le', size);
      b.append(buf.toString('binary'), 'binary');
    },
    fromObject: function fromObject(value) {
      validateInt(value, validation);
      return value;
    },
    toObject: function toObject(value) {
      if (validation.defaults && value == null) {
        return validation.bits > 53 ? '0' : 0;
      }
      validateInt(value, validation);
      return value;
    }
  };
};

var floatPoint = __webpack_require__(1250);

var float = function float(validation) {
  var bits = validation.bits;

  // assert(bits === 32 || bits === 64, 'unsupported float bit size: ' + bits)

  var sizeName = bits === 32 ? 'Float' : bits === 64 ? 'Double' : null;
  assert(sizeName, 'unsupported float bit size: ' + bits);
  var size = bits / 8;

  return {
    fromByteBuffer: function fromByteBuffer(b) {
      var bcopy = b.copy(b.offset, b.offset + size);
      b.skip(size);
      var fb = Buffer.from(bcopy.toBinary(), 'binary');
      return floatPoint['read' + sizeName + 'LE'](fb);
    },
    appendByteBuffer: function appendByteBuffer(b, value) {
      var output = [];
      floatPoint['write' + sizeName + 'LE'](output, value);
      b.append(output);
    },
    fromObject: function fromObject(value) {
      return value;
    },
    toObject: function toObject(value) {
      if (validation.defaults && value == null) {
        return 0.0;
      }
      return value;
    }
  };
};

var bytebuf = function bytebuf(validation) {
  var _bytebuf = {
    fromByteBuffer: function fromByteBuffer(b) {
      var len = validation.len;

      var bCopy = void 0;
      if (len == null) {
        var lenPrefix = b.readVarint32();
        bCopy = b.copy(b.offset, b.offset + lenPrefix);
        b.skip(lenPrefix);
      } else {
        bCopy = b.copy(b.offset, b.offset + len);
        b.skip(len);
      }
      return Buffer.from(bCopy.toBinary(), 'binary');
    },
    appendByteBuffer: function appendByteBuffer(b, value) {
      // value = _bytebuf.fromObject(value)

      var len = validation.len;

      if (len == null) {
        b.writeVarint32(value.length);
      }
      b.append(value.toString('binary'), 'binary');
    },
    fromObject: function fromObject(value) {
      if (typeof value === 'string') {
        value = Buffer.from(value, 'hex');
      }

      validate(value, validation);
      return value;
    },
    toObject: function toObject(value) {
      var defaults = validation.defaults,
          len = validation.len;

      if (defaults && value == null) {
        return Array(len ? len + 1 : 1).join('00');
      }
      validate(value, validation);
      return value.toString('hex');
    },
    compare: function compare(a, b) {
      return Buffer.compare(a, b);
    }
  };
  return _bytebuf;
};

var _string = function _string(validation) {
  return {
    fromByteBuffer: function fromByteBuffer(b) {
      return b.readVString();
    },
    appendByteBuffer: function appendByteBuffer(b, value) {
      validate(value, validation);
      b.writeVString(value.toString());
    },
    fromObject: function fromObject(value) {
      validate(value, validation);
      return value;
    },
    toObject: function toObject(value) {
      if (validation.defaults && value == null) {
        return '';
      }
      validate(value, validation);
      return value;
    }
  };
};

var _time2 = function _time2(validation) {
  var _time = {
    fromByteBuffer: function fromByteBuffer(b) {
      return b.readUint32();
    },
    appendByteBuffer: function appendByteBuffer(b, value) {
      // if(typeof value !== "number")
      //     value = _time.fromObject(value)

      validate(value, validation);
      b.writeUint32(value);
    },
    fromObject: function fromObject(value) {
      validate(value, validation);

      if (typeof value === 'number') {
        return value;
      }

      if (value.getTime) {
        return Math.floor(value.getTime() / 1000);
      }

      if (typeof value !== 'string') {
        throw new Error('Unknown date type: ' + value);
      }

      // Chrome assumes Zulu when missing, Firefox does not
      if (typeof value === 'string' && !/Z$/.test(value)) {
        value += 'Z';
      }

      return Math.floor(new Date(value).getTime() / 1000);
    },
    toObject: function toObject(value) {
      if (validation.defaults && value == null) {
        return new Date(0).toISOString().split('.')[0];
      }

      validate(value, validation);

      // if(typeof value === "string") {
      //     if(!/Z$/.test(value))
      //         value += "Z"
      //
      //     return value
      // }

      // if(value.getTime)
      //     return value.toISOString().split('.')[0] + 'Z'

      validateInt(value, spread(validation, { bits: 32 }));
      var int = parseInt(value);
      return new Date(int * 1000).toISOString().split('.')[0];
    }
  };
  return _time;
};

var validate = function validate(value, validation) {
  if (isEmpty(value)) {
    throw new Error('Required ' + validation.typeName);
  }

  if (validation.len != null) {
    if (value.length == null) {
      throw new Error('len validation requries a "length" property');
    }

    var len = validation.len;

    if (value.length !== len) {
      throw new Error(validation.typeName + ' length ' + value.length + ' does not equal ' + len);
    }
  }

  if (validation.maxLen != null) {
    var maxLen = validation.maxLen;

    if (value.length == null) {
      throw new Error('maxLen validation requries a "length" property');
    }

    if (value.length > maxLen) {
      throw new Error(validation.typeName + ' length ' + value.length + ' exceeds maxLen ' + maxLen);
    }
  }
};

var ZERO = new BN();
var ONE = new BN('1');

function validateInt(value, validation) {
  if (isEmpty(value)) {
    throw new Error('Required ' + validation.typeName);
  }
  var _validation$signed2 = validation.signed,
      signed = _validation$signed2 === undefined ? false : _validation$signed2,
      _validation$bits = validation.bits,
      bits = _validation$bits === undefined ? 54 : _validation$bits;


  value = String(value).trim();
  if (signed && !/^-?[0-9]+$/.test(value) || !signed && !/^[0-9]+$/.test(value)) {
    throw new Error('Number format ' + validation.typeName + ' ' + value);
  }

  var max = signed ? maxSigned(bits) : maxUnsigned(bits);
  var min = signed ? minSigned(bits) : ZERO;
  var i = new BN(value);

  // console.log('i.toString(), min.toString()', i.toString(), min.toString())
  if (i.cmp(min) < 0 || i.cmp(max) > 0) {
    throw new Error('Overflow ' + validation.typeName + ' ' + value + ', ' + ('max ' + max.toString() + ', min ' + min.toString() + ', signed ' + signed + ', bits ' + bits));
  }
}

var isSerializer = function isSerializer(type) {
  return (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && typeof type.fromByteBuffer === 'function' && typeof type.appendByteBuffer === 'function' && typeof type.fromObject === 'function' && typeof type.toObject === 'function';
};

var toString = function toString(value, encoding) {
  return value == null ? value : value.toString ? value.toString(encoding) : value;
};

var sort = function sort(type, values) {
  return type.compare ? values.sort(type.compare) : // custom compare
  values.sort();
};

var spread = function spread() {
  return Object.assign.apply(Object, arguments);
};
var isEmpty = function isEmpty(value) {
  return value == null;
};

// 1 << N === Math.pow(2, N)
var maxUnsigned = function maxUnsigned(bits) {
  return new BN(1).ishln(bits).isub(ONE);
};
var maxSigned = function maxSigned(bits) {
  return new BN(1).ishln(bits - 1).isub(ONE);
};
var minSigned = function minSigned(bits) {
  return new BN(1).ishln(bits - 1).ineg();
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),

/***/ 1250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/**
 * pure javascript functions to read and write 32-bit and 64-bit IEEE 754 floating-point
 *
 * Copyright (C) 2017 Andras Radics
 * Licensed under the Apache License, Version 2.0
 */



var isBigeCpu = false;
var readFloat32Array, writeFloat32Array, readFloat32ArrayRev, writeFloat32ArrayRev;
var readFloat64Array, writeFloat64Array, readFloat64ArrayRev, writeFloat64ArrayRev;


// test FloatArray existence with && to not throw off code coverage
(typeof Float32Array === 'function') && (function(){
    var _fp32 = new Float32Array(1);
    var _b32 = new Uint8Array(_fp32.buffer);

    _fp32[0] = -1;
    isBigeCpu = _b32[3] === 0;

    readFloat32Array = function readFloat32Array( buf, pos ) {
        pos = pos || 0;
        if (pos < 0 || pos + 4 > buf.length) return 0;
        _b32[0] = buf[pos++]; _b32[1] = buf[pos++]; _b32[2] = buf[pos++];_b32[3] = buf[pos];
        //_b32[0] = buf[pos+0]; _b32[1] = buf[pos+1]; _b32[2] = buf[pos+2]; _b32[3] = buf[pos+3];
        return _fp32[0];
    }

    readFloat32ArrayRev = function readFloat32ArrayRev( buf, pos ) {
        pos = pos || 0;
        if (pos < 0 || pos + 4 > buf.length) return 0;
        _b32[3] = buf[pos++]; _b32[2] = buf[pos++]; _b32[1] = buf[pos++]; _b32[0] = buf[pos];
        //_b32[3] = buf[pos+0]; _b32[2] = buf[pos+1]; _b32[1] = buf[pos+2]; _b32[0] = buf[pos+3];
        return _fp32[0];
    }

    writeFloat32Array = function writeFloat32Array( buf, v, pos ) {
        pos = pos || 0;
        _fp32[0] = v;
        buf[pos++] = _b32[0]; buf[pos++] = _b32[1]; buf[pos++] = _b32[2]; buf[pos] = _b32[3];
        //buf[pos+0] = _b32[0]; buf[pos+1] = _b32[1]; buf[pos+2] = _b32[2]; buf[pos+3] = _b32[3];
    }

    writeFloat32ArrayRev = function writeFloat32ArrayRev( buf, v, pos ) {
        pos = pos || 0;
        _fp32[0] = v;
        buf[pos++] = _b32[3]; buf[pos++] = _b32[2]; buf[pos++] = _b32[1]; buf[pos] = _b32[0];
        //buf[pos+0] = _b32[3]; buf[pos+1] = _b32[2]; buf[pos+2] = _b32[1]; buf[pos+3] = _b32[0];
    }
})();

(typeof Float64Array === 'function') && (function(){
    var _fp64 = new Float64Array(1);
    var _b64 = new Uint8Array(_fp64.buffer);

    readFloat64Array = function readFloat64Array( buf, pos ) {
        pos = pos || 0;
        if (pos < 0 || pos + 8 > buf.length) return 0;
        //_b64[0] = buf[pos++]; _b64[1] = buf[pos++]; _b64[2] = buf[pos++]; _b64[3] = buf[pos++];
        //_b64[4] = buf[pos++]; _b64[5] = buf[pos++]; _b64[6] = buf[pos++]; _b64[7] = buf[pos];
        _b64[0] = buf[pos+0]; _b64[1] = buf[pos+1]; _b64[2] = buf[pos+2]; _b64[3] = buf[pos+3];
        _b64[4] = buf[pos+4]; _b64[5] = buf[pos+5]; _b64[6] = buf[pos+6]; _b64[7] = buf[pos+7];
        return _fp64[0];
    }

    readFloat64ArrayRev = function readFloat64ArrayRev( buf, pos ) {
        pos = pos || 0;
        if (pos < 0 || pos + 8 > buf.length) return 0;
        //_b64[7] = buf[pos++]; _b64[6] = buf[pos++]; _b64[5] = buf[pos++]; _b64[4] = buf[pos++];
        //_b64[3] = buf[pos++]; _b64[2] = buf[pos++]; _b64[1] = buf[pos++]; _b64[0] = buf[pos];
        _b64[7] = buf[pos+0]; _b64[6] = buf[pos+1]; _b64[5] = buf[pos+2]; _b64[4] = buf[pos+3];
        _b64[3] = buf[pos+4]; _b64[2] = buf[pos+5]; _b64[1] = buf[pos+6]; _b64[0] = buf[pos+7];
        return _fp64[0];
    }

    writeFloat64Array = function writeFloat64Array( buf, v, pos ) {
        pos = pos || 0;
        _fp64[0] = v;
        buf[pos + 0] = _b64[0]; buf[pos + 1] = _b64[1]; buf[pos + 2] = _b64[2]; buf[pos + 3] = _b64[3];
        buf[pos + 4] = _b64[4]; buf[pos + 5] = _b64[5]; buf[pos + 6] = _b64[6]; buf[pos + 7] = _b64[7];
    }

    writeFloat64ArrayRev = function writeFloat64ArrayRev( buf, v, pos ) {
        pos = pos || 0;
        _fp64[0] = v;
        buf[pos + 0] = _b64[7]; buf[pos + 1] = _b64[6]; buf[pos + 2] = _b64[5]; buf[pos + 3] = _b64[4];
        buf[pos + 4] = _b64[3]; buf[pos + 5] = _b64[2]; buf[pos + 6] = _b64[1]; buf[pos + 7] = _b64[0];
    }
})();


// arithmetic operations preserve NaN, but logical ops (, >>, etc) convert them to zero
// Assemble the word to generate NaN if any reads are undefined (outside the bounds of the array).
function readWord( buf, offs, dirn ) {
    var a = buf[offs++], b = buf[offs++], c = buf[offs++], d = buf[offs];
    return (dirn === 'bige')
        ? (((((a * 256) + b) * 256) + c) * 256) + d
        : (((((d * 256) + c) * 256) + b) * 256) + a;
}

function writeWord( buf, v, offs, dirn ) {
    var a = (v >>> 24) & 0xff, b = (v >> 16) & 0xff, c = (v >> 8) & 0xff, d = (v) & 0xff;
    (dirn === 'bige')
        ? (buf[offs++] = a, buf[offs++] = b, buf[offs++] = c, buf[offs] = d)
        : (buf[offs++] = d, buf[offs++] = c, buf[offs++] = b, buf[offs] = a)
}

// write the two-word value [hi,lo] where hi holds the 32 msb bits and lo the 32 lsb bits
function writeDoubleWord( buf, hi, lo, offs, dirn ) {
    if (dirn === 'bige') {
        writeWord(buf, hi, offs, dirn);
        writeWord(buf, lo, offs + 4, dirn);
    }
    else {
        writeWord(buf, lo, offs, dirn);
        writeWord(buf, hi, offs + 4, dirn);
    }
}

// given an exponent n, return 2**n
// n is always an integer, faster to shift when possible
// Note that nodejs Math.pow() is faster than a lookup table (may be caching)
var _2eXp = new Array(); for (var i=0; i<1200; i++) _2eXp[i] = Math.pow(2, i);
var _2eXn = new Array(); for (var i=0; i<1200; i++) _2eXn[i] = Math.pow(2, -i);
function pow2( exp ) {
    return (exp >= 0) ? _2eXp[exp] : _2eXn[-exp];
    //return (exp >= 0) ? (exp <  31 ? (1 << exp) :        Math.pow(2, exp))
    //                  : (exp > -31 ? (1 / (1 << -exp)) : Math.pow(2, exp));
}


// getFloat() from qbson, https://github.com/andrasq/node-qbson:
/*
 * extract the 64-bit little-endian ieee 754 floating-point value
 *   see http://en.wikipedia.org/wiki/Double-precision_floating-point_format
 *   1 bit sign + 11 bits exponent + (1 implicit mantissa 1 bit) + 52 mantissa bits
 */
var _rshift32 = (1 / 0x100000000);      // >> 32 for floats
var _rshift20 = (1 / 0x100000);         // >> 20 for floats
var _lshift32 = (1 * 0x100000000);      // << 32
var _rshift52 = (1 * _rshift32 * _rshift20);    // >> 52
var _rshift1023 = pow2(-1023);          // 2^-1023
function readDouble( buf, offset, dirn ) {
    var w0 = readWord(buf, offset, dirn);
    var w1 = readWord(buf, offset + 4, dirn);
    var highWord, lowWord;
    (dirn === 'bige') ? (highWord = w0, lowWord = w1) : (highWord = w1, lowWord = w0);

    var mantissa = (highWord & 0x000FFFFF) * _lshift32 + lowWord;
    var exponent = (highWord & 0x7FF00000) >>> 20;
    var sign = (highWord >> 31) || 1;   // -1, 1, or 1 if NaN

    var value;
    if (exponent === 0x000) {
        // zero if !mantissa, else subnormal (non-normalized reduced precision small value)
        // recover negative zero -0.0 as distinct from 0.0
        // subnormals do not have an implied leading 1 bit and are positioned 1 bit to the left
        value = mantissa ? (mantissa * pow2(-52 + 1 -1023)) : 0.0;
    }
    else if (exponent < 0x7ff) {
        // normalized value with an implied leading 1 bit and 1023 biased exponent
        // test for NaN with (mantissa >= 0), and return 0 if NaN ie read from outside buffer bounds
        value = (mantissa >= 0) ? (1 + mantissa * _rshift52) * pow2(exponent - 1023) : 0.0;
    }
    else {
        // Infinity if zero mantissa (+/- per sign), NaN if nonzero mantissa
        value = mantissa ? NaN : Infinity;
    }

    return sign * value;
}

//
// Note: node-v9 prefers +28% (sign * value), node v6 doesnt care, node v8 likes +16% (-value : value)
//
// float32: 1 sign + 8 exponent + 24 mantissa (23 stored, 1 implied)
// see https://en.wikipedia.org/wiki/Single-precision_floating-point_format
//
// Exponent     Mantissa == 0   Mantissa > 0    Value
// 00           +0, -0          denormalized    2^(  1-127) * (0. + (mantissa / 2^23))
// 00.. FE                      normalized      2^(exp-127) * (1. + (mantissa / 2^23))
// FF           +/-Infinity     NaN             -
//
var _rshift23 = Math.pow(2, -23);      // >> 23 for floats
var _rshift127 = Math.pow(2, -127);    // 2^-127
function readFloat( buf, offset, dirn ) {
    var word = readWord(buf, offset, dirn);
    var mantissa = (word & 0x007FFFFF);
    var exponent = (word & 0x7F800000) >>> 23;
    var sign = (word >> 31) || 1;       // -1, 1, or 1 if NaN

    var value;
    if (exponent === 0x000) {
        value = mantissa ? mantissa * _rshift23 * 2 * _rshift127 : 0.0;
    }
    else if (exponent < 0xff) {
        value = (1 + mantissa * _rshift23) * pow2(exponent - 127) // * _rshift127;
    }
    else {
        value = mantissa ? NaN : Infinity;
    }

    return sign * value;
    //return (word >>> 31) ? -value : value;
}

// given a positive value v, normalize it to between 1 and less than 2 with a binary exponent
// The exponent is the number of bit places it was shifted, positive if v was >= 2.
// The special values 0, -0, NaN, +Infinity and -Infinity are not handled here.
// Looping is faster than (Math.log(v) / Math.LN2) in node-v6, v8, and v9.
// This function can account for half the time taken to write a double.
var _parts = { exp: 0, mant: 0 };
function normalize( v ) {
    var exp = 0;

    if (v >= 2) {
        exp = countDoublings(1, v);
        v *= pow2(-exp);
        // if doubled to exactly v/2, adjust up to v
        if (v >= 2) { v /= 2; exp += 1 }
    }
    else if (v < 1) {
        exp = countDoublings(v, 2);
        // avoid using pow2 exponents > 1023, they overflow to Infinity
        if (exp <= 1023) v *= pow2(exp);
        else { v *= pow2(exp - 100); v *= pow2(100); }
        exp = -exp;
    }

    // TODO: pass in num bits, and normalize straight to mantissa / denorm

    _parts.exp = exp;
    _parts.mant = v;
    return _parts;
}

// count how many doublings of a are needed for it be close to b.
// Returns a shift count that grows (a) to at least (b/2) but less than (b).
// Doubling 1 toward v ensures that (v >> n) >= 1 < 2,
// and doubling from v toward 2 ensures that (v << n) >= 1 < 2.
var _2e192 = Math.pow(2, 192);
function countDoublings( a, b ) {
    var n = 0;

    while (a * _2e192 < b) { a *= _2e192; n += 192 }
    while (a * 0x10000000000000000 < b) { a *= 0x10000000000000000; n += 64 }
    while (a * 0x10000 < b) { a *= 0x10000; n += 16 }
    while (a * 0x40 < b) { a *= 0x40; n += 6 }
    while (a * 2 < b) { a *= 2; n += 1 }

    return n;
}

// round the fraction in v and scale up to scale = 2^n bits
// https://blog.angularindepth.com/how-to-round-binary-fractions-625c8fa3a1af
// Rounding can cause the scaled value to exceed 2^n.
function roundMantissa( v, scale ) {
    v *= scale;
    // round to nearest, but round a 0.5 tie to even (0.5 to 0.0 and 1.5 to 2.0)
    // round all numbers with a fraction other than 1/2, and round up odd numbers with
    return ((v - Math.floor(v) !== 0.5) || (v & 1)) ? v + 0.5 : v;
}

// float32: 1 sign + 8 exponent + (1 implied mantissa 1 bit) + 23 stored mantissa bits
// NaN types: quiet Nan = x.ff.8xxx, signaling NaN = x.ff.0xx1 (msb zero, at least one other bit set)
// JavaScript built-in NaN is the non-signaling 7fc00000, but arithmetic can yield a negative NaN ffc00000.
function writeFloat( buf, v, offset, dirn ) {
    var norm, word, sign = 0;
    if (v < 0) { sign = 0x80000000; v = -v; }

    if (! (v && v < Infinity)) {
        if (v === 0) {                  // -0, +0
            word = (1/v < 0) ? 0x80000000 : 0x00000000;
        }
        else if (v === Infinity) {      // -Infinity, +Infinity
            word = sign | 0x7F800000;
        }
        else {                          // NaN - positive, non-signaling
            word = 0x7FC00000;
        }
        writeWord(buf, word, offset, dirn);
    }
    else {
        norm = normalize(v);            // separate exponent and mantissa
        norm.exp += 127;                // bias exponent

        if (norm.exp <= 0) {            // denormalized number
            if (norm.exp <= -25) {      // too small, underflow to zero.  -24 might round up though.
                norm.mant = 0;
                norm.exp = 0;
            } else {                    // denormalize
                norm.mant = roundMantissa(norm.mant, pow2(22 + norm.exp));
                norm.exp = 0;           // rounding can carry out and re-normalize the number
                if (norm.mant >= 0x800000) { norm.mant -= 0x800000; norm.exp += 1 }
            }
        } else {
            norm.mant = roundMantissa(norm.mant - 1, 0x800000);
            // if rounding overflowed into the hidden 1s place, hide it and adjust the exponent
            if (norm.mant >= 0x800000) { norm.mant -= 0x800000; norm.exp += 1 }
            if (norm.exp > 254) {       // overflow to Infinity
                norm.mant = 0;
                norm.exp = 255;
            }
        }

        word = sign | (norm.exp << 23) | norm.mant;
        writeWord(buf, word, offset, dirn);
    }
}

// double64: 1 bit sign + 11 bits exponent + (1 implied mantissa 1 bit) + 52 stored mantissa bits
// Writing doubles is simpler than floats, because the internal javascript 64-bit floats
// are identical to the stored representation, and thus will not overflow or underflow.
var doubleArray = [0, 0, 0, 0, 0, 0, 0, 0];
var doubleBuf = new Buffer(8);
var _2e52 = Math.pow(2, 52);
function writeDouble( buf, v, offset, dirn ) {
    var norm, highWord, lowWord, sign = 0;
    if (v < 0) { sign = 0x80000000; v = -v; }

    if (! (v && v < Infinity)) {
        if (v === 0) {                  // -0, +0
            highWord = (1/v < 0) ? 0x80000000 : 0;
            lowWord = 0;
        }
        else if (v === Infinity) {      // -Infinity, +Infinity
            highWord = (sign + 0x7FF00000);
            lowWord = 0;
        }
        else {                          // NaN - positive, non-signaling
            highWord = 0x7FF80000;
            lowWord = 0;
        }
        writeDoubleWord(buf, highWord, lowWord, offset, dirn);
    }
    else {
        norm = normalize(v);            // separate exponent and mantissa
        norm.exp += 1023;               // bias exponent

        if (norm.exp <= 0) {            // denormalized
            // JavaScript numbers can not hold values small enough to underflow
            // and no need to round, all bits will be written
            norm.mant *= pow2(51 + norm.exp);
            norm.exp = 0;
        }
        else {
            // no need to round, all bits will be written
            norm.mant = (norm.mant - 1) * _2e52;
        }

        highWord = sign | (norm.exp << 20) | (norm.mant / 0x100000000);
        lowWord = norm.mant >>> 0;
        writeDoubleWord(buf, highWord, lowWord, offset, dirn);
    }
}


;(function install() {
    var exports = typeof module === 'object' && module.exports || this;

    exports.readWord = readWord;
    exports.writeWord = writeWord;
    exports.writeDoubleWord = writeDoubleWord;

    exports.readFloat = readFloat;
    exports.writeFloat = writeFloat;
    exports.readDouble = readDouble;
    exports.writeDouble = writeDouble;

    // expose the implementation to the tests
    exports._useFloatArray = function( yesno ) {
        exports._usingFloatArray = yesno;
        if (yesno) {
            // software conversion is faster for float32 than Float32Array
            // Only read via Float32Array if yesno == 'full'.
            if (yesno == 'full') exports.readFloatLE = isBigeCpu ? readFloat32ArrayRev : readFloat32Array;
            exports.writeFloatLE = isBigeCpu ? writeFloat32ArrayRev : writeFloat32Array;
            if (yesno == 'full') exports.readFloatBE = isBigeCpu ? readFloat32Array : readFloat32ArrayRev;
            exports.writeFloatBE = isBigeCpu ? writeFloat32Array : writeFloat32ArrayRev;

            exports.readDoubleLE = isBigeCpu ? readFloat64ArrayRev : readFloat64Array;
            exports.writeDoubleLE = isBigeCpu ? writeFloat64ArrayRev : writeFloat64Array;
            exports.readDoubleBE = isBigeCpu ? readFloat64Array : readFloat64ArrayRev;
            exports.writeDoubleBE = isBigeCpu ? writeFloat64Array : writeFloat64ArrayRev;
        }
        else {
            exports._usingFloatArray = '';
            exports.readFloatLE = function readFloatLE( buf, offset ) { return exports.readFloat(buf, offset || 0, 'le'); }
            exports.writeFloatLE = function writeFloatLE( buf, v, offset ) { exports.writeFloat(buf, v, offset || 0, 'le'); };
            exports.readFloatBE = function readFloatBE( buf, offset ) { return exports.readFloat(buf, offset || 0, 'bige'); }
            exports.writeFloatBE = function writeFloatBE( buf, v, offset ) { exports.writeFloat(buf, v, offset || 0, 'bige'); }

            exports.readDoubleLE = function readDoubleLE( buf, offset ) { return exports.readDouble(buf, offset || 0, 'le'); }
            exports.writeDoubleLE = function writeDoubleLE( buf, v, offset ) { exports.writeDouble(buf, v, offset || 0, 'le'); }
            exports.readDoubleBE = function readDoubleBE( buf, offset ) { return exports.readDouble(buf, offset || 0, 'bige'); }
            exports.writeDoubleBE = function writeDoubleLE( buf, v, offset ) { exports.writeDouble(buf, v, offset || 0, 'bige'); }
        }
    }

    // expose the cpu endianism to the tests
    exports._getBigeCpu = function() { return isBigeCpu };
    exports._setBigeCpu = function(yesno) { isBigeCpu = yesno };

    // by default export the software conversion functions, then
    // if available, convert by casting a FloatArray to a byte array
    exports._useFloatArray(false);
    exports._useFloatArray(readFloat32Array && readFloat64Array && 'fastest');

    // accelerate access
    install.prototype = exports;

}).call(this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),

/***/ 1251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var ByteBuffer = __webpack_require__(465);
var Struct = __webpack_require__(1252);

module.exports = {
  create: create,
  toBuffer: toBuffer,
  fromBuffer: fromBuffer

  /**
    @summary Create a serializer for each definition.
    @return {CreateStruct}
  */
};function create(definitions, types) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : types.config;

  var errors = [];
  if (!config.sort) {
    config.sort = {};
  }

  // Basic structure validation
  for (var key in definitions) {
    var value = definitions[key];
    var base = value.base,
        fields = value.fields;

    var typeOfValue = typeof value === 'undefined' ? 'undefined' : _typeof(value);
    if (typeOfValue === 'object') {
      if (!base && !fields) {
        errors.push('Expecting ' + key + '.fields or ' + key + '.base');
        continue;
      }
      if (base && typeof base !== 'string') {
        errors.push('Expecting string ' + key + '.base');
      }
      if (fields) {
        if ((typeof fields === 'undefined' ? 'undefined' : _typeof(fields)) !== 'object') {
          errors.push('Expecting object ' + key + '.fields');
        } else {
          for (var field in fields) {
            if (typeof fields[field] !== 'string') {
              errors.push('Expecting string in ' + key + '.fields.' + field);
            }
          }
        }
      }
    } else if (typeOfValue !== 'string') {
      errors.push('Expecting object or string under ' + key + ', instead got ' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)));
      continue;
    }
  }

  // Keys with objects are structs
  var structs = {};
  for (var _key in definitions) {
    var _value = definitions[_key];
    if ((typeof _value === 'undefined' ? 'undefined' : _typeof(_value)) === 'object') {
      structs[_key] = Struct(_key, config);
    }
  }

  // Resolve user-friendly typedef names pointing to a native type (or another typedef)
  for (var _key2 in definitions) {
    var _value2 = definitions[_key2];
    if (typeof _value2 === 'string') {
      var type = types[_value2];
      if (type) {
        types[_key2] = type;
      } else {
        // example: key === 'fields' && value === field[]
        var struct = getTypeOrStruct(_key2, _value2); // type = vector(field)
        if (struct) {
          structs[_key2] = struct;
        } else {
          errors.push('Unrecognized type or struct ' + _key2 + '.' + _value2);
        }
      }
    }
  }

  // Structs can inherit another struct, they will share the same instance
  for (var _key3 in definitions) {
    var thisStruct = structs[_key3];
    if (!thisStruct) continue;
    var _value3 = definitions[_key3];
    if ((typeof _value3 === 'undefined' ? 'undefined' : _typeof(_value3)) === 'object' && _value3.base) {
      var base = _value3.base;
      var baseStruct = structs[base];
      if (!baseStruct) {
        errors.push('Missing ' + base + ' in ' + _key3 + '.base');
        continue;
      }
      thisStruct.add('', structPtr(baseStruct));
    }
  }

  // Create types from a string (ex vector[Type])
  function getTypeOrStruct(key, Type, typeArgs, fieldName) {
    var typeatty = parseType(Type);
    if (!typeatty) return null;
    var name = typeatty.name,
        annotation = typeatty.annotation,
        arrayType = typeatty.arrayType;

    var ret = void 0;
    if (annotation) {
      // any_type<field_name, type_name>
      var _type = types[name];
      if (_type == null) {
        errors.push('Missing ' + name + ' in ' + Type);
        return null;
      }
      var annTypes = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = annotation[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var annTypeName = _step.value;

          var annType = getTypeOrStruct(key, annTypeName, null, fieldName);
          if (!annType) {
            errors.push('Missing ' + annTypeName + ' in ' + Type);
            return null;
          }
          annTypes.push(annType);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      ret = _type(annTypes);
    } else if (arrayType == null) {
      // AnyType
      var fieldStruct = structs[name];
      if (fieldStruct) {
        return fieldStruct;
      }

      var _type2 = types[name];
      if (!_type2) {
        return null;
      }

      // types need to be instantiated
      ret = _type2(typeArgs);
    } else if (arrayType === '') {
      // AnyType[]
      var nameType = getTypeOrStruct(key, typeatty.name, null, fieldName);
      if (!nameType) {
        return null;
      }

      var sort = config.sort[key + '.' + fieldName] || false;
      // console.log('sort?', `${key}.${fieldName}`, sort, config.sort)
      ret = types.vector(nameType, sort);
    } else if (arrayType.length > 0) {
      // vector[Type]
      var arrayTs = getTypeOrStruct(key, typeatty.arrayType, null, fieldName);
      if (!arrayTs) {
        errors.push('Missing ' + typeatty.arrayType + ' in ' + Type);
        return null;
      }
      var baseTs = getTypeOrStruct(key, typeatty.name, arrayTs, fieldName);
      if (!baseTs) {
        errors.push('Missing ' + typeatty.name + ' in ' + Type);
        return null;
      }
      ret = baseTs;
    }
    return typeatty.optional ? types.optional(ret) : ret;
  }

  // Add all the fields.  Thanks to structPtr no need to look at base types.
  for (var _key4 in definitions) {
    var _thisStruct = structs[_key4];
    if (!_thisStruct) continue;
    var _value4 = definitions[_key4];
    if (!_value4.fields) continue;
    var fields = _value4.fields;

    for (var Field in fields) {
      var Type = fields[Field];
      var ts = getTypeOrStruct(_key4, Type, null, Field);
      if (!ts) {
        errors.push('Missing ' + Type + ' in ' + _key4 + '.fields.' + Field);
        continue;
      }
      _thisStruct.add(Field, ts);
    }
  }

  if (errors.length) {
    // 'structs' could contain invalid references
    return { errors: errors };
  }

  return { errors: errors, structs: structs };
}

var parseType = function parseType(name) {
  if (!name || typeof name !== 'string') {
    return null;
  }

  name = name.trim();

  var annotationMatch = name.match(/<(.*)>/);
  if (annotationMatch) {
    var annotation = annotationMatch ? annotationMatch[1].replace(/ /g, '').split(',') : null;

    name = name.replace(annotationMatch[0], '').trim();
    return { name: name, annotation: annotation };
  }

  var arrayMatch = name.match(/\[(.*)\]/);
  var arrayType = arrayMatch ? arrayMatch[1].trim() : null;

  if (arrayMatch) {
    name = name.replace(arrayMatch[0], '').trim();
  }

  var optional = false;
  if (/\?$/.test(name)) {
    name = name.substring(0, name.length - 1);
    optional = true;
  }
  return { name: name, arrayType: arrayType, optional: optional };
};

/**
  Base types all point to the same struct.

  Note, appendByteBuffer has no return type.
*/
var structPtr = function structPtr(type) {
  return {
    fromByteBuffer: function fromByteBuffer(b) {
      return type.fromByteBuffer(b);
    },
    appendByteBuffer: function appendByteBuffer(b, value) {
      type.appendByteBuffer(b, value);
    },
    fromObject: function fromObject(value) {
      return type.fromObject(value);
    },
    toObject: function toObject(value) {
      return type.toObject(value);
    }
  };
};

function toBuffer(type, value) {
  var struct = type.fromObject(value);
  return Buffer.from(toByteBuffer(type, struct).toBinary(), 'binary');
}

function fromBuffer(type, buffer) {
  var toObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var b = ByteBuffer.fromBinary(buffer.toString('binary'), ByteBuffer.LITTLE_ENDIAN);
  var struct = type.fromByteBuffer(b);
  return toObject ? type.toObject(struct) : struct;
}

function toByteBuffer(type, value) {
  var b = new ByteBuffer(ByteBuffer.DEFAULT_CAPACITY, ByteBuffer.LITTLE_ENDIAN);
  type.appendByteBuffer(b, value);
  return b.copy(0, b.offset);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),

/***/ 1252:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ByteBuffer = __webpack_require__(465);

/**
  @class Struct

  @arg {object} config.override = {
    'Message.data.appendByteBuffer': ({fields, object, b}) => {..}
  }
  Rare cases where specialized serilization is needed (ex A Message object has
  'type' and 'data' fields where object.type === 'transfer' can define
  serialization time Struct needed for 'data' .. This saves complexity for the
  end-user's working with json.  See override unit test.
*/
module.exports = function (name) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { debug: false };

  config = Object.assign({ override: {} }, config);
  var fields = {};
  var fieldOne = void 0,
      fieldOneName = void 0;

  return {
    compare: function compare(a, b) {
      var v1 = a[fieldOneName];
      var v2 = b[fieldOneName];

      if (!fieldOne || !fieldOne.compare) {
        return v1 > v2 ? 1 : v1 < v2 ? -1 : 0;
      }

      return fieldOne.compare(v1, v2);
    },


    /** @private */
    add: function add(fieldName, type) {
      fields[fieldName] = type;
      if (fieldOne == null) {
        fieldOne = type;
        fieldOneName = fieldName;
      }
    },


    // Complete list of fields, after resolving "base" inheritance
    fields: fields,

    fromByteBuffer: function fromByteBuffer(b) {
      var object = {};
      var field = null;
      try {
        for (field in fields) {
          var type = fields[field];
          try {
            var o1 = b.offset;
            if (field === '') {
              // structPtr
              object = type.fromByteBuffer(b, config);
            } else {
              var fromByteBuffer = config.override[name + '.' + field + '.fromByteBuffer'];
              if (fromByteBuffer) {
                fromByteBuffer({ fields: fields, object: object, b: b, config: config });
              } else {
                object[field] = type.fromByteBuffer(b, config);
              }
            }
            if (config.debug) {
              if (type.struct) {
                console.error(type.struct);
              } else {
                var value = void 0;
                try {
                  // human readable text
                  value = type.toObject(field === '' ? object : object[field], config);
                } catch (error) {
                  // console.error('fromByteBuffer debug error:', error)
                  value = '';
                }
                var _b = b.copy(o1, b.offset);
                console.error('fromByteBuffer', name + '.' + field, '\'' + value + '\'', _b.toHex());
              }
            }
          } catch (e) {
            console.error(e + ' in ' + name + '.' + field);
            b.printDebug();
            throw e;
          }
        }
      } catch (error) {
        error.message += ' in ' + name + '.' + field;
        throw error;
      }
      return object;
    },
    appendByteBuffer: function appendByteBuffer(b, object) {
      var field = null;
      try {
        for (field in fields) {
          var type = fields[field];
          if (field === '') {
            // structPtr
            type.appendByteBuffer(b, object);
          } else {
            var appendByteBuffer = config.override[name + '.' + field + '.appendByteBuffer'];
            if (appendByteBuffer) {
              appendByteBuffer({ fields: fields, object: object, b: b });
            } else {
              type.appendByteBuffer(b, object[field]);
            }
          }
        }
      } catch (error) {
        try {
          error.message += ' ' + name + '.' + field + ' = ' + JSON.stringify(object[field]);
        } catch (e) {
          // circular ref
          error.message += ' ' + name + '.' + field + ' = ' + object[field];
        }
        throw error;
      }
    },
    fromObject: function fromObject(serializedObject) {
      var fromObject_struct = config.override[name + '.fromObject'];
      if (fromObject_struct) {
        var ret = fromObject_struct(serializedObject);
        if (ret != null) {
          return ret;
        }
      }

      var result = {};
      var field = null;
      try {
        for (field in fields) {
          // if(config.debug) {
          //   console.error(name, field, '(fromObject)')
          // }
          var type = fields[field];
          if (field === '') {
            // structPtr
            var object = type.fromObject(serializedObject);
            Object.assign(result, object);
          } else {
            var fromObject = config.override[name + '.' + field + '.fromObject'];
            if (fromObject) {
              fromObject({ fields: fields, object: serializedObject, result: result });
            } else {
              var value = serializedObject[field];
              var _object = type.fromObject(value);
              result[field] = _object;
            }
          }
        }
      } catch (error) {
        error.message += ' ' + name + '.' + field;
        throw error;
      }

      return result;
    },
    toObject: function toObject() {
      var serializedObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var toObject_struct = config.override[name + '.toObject'];
      if (toObject_struct) {
        var ret = toObject_struct(serializedObject);
        if (ret != null) {
          return ret;
        }
      }

      var result = {};
      var field = null;
      try {
        // if (!fields) { return result }

        for (field in fields) {
          var type = fields[field];

          var toObject = config.override[name + '.' + field + '.toObject'];
          if (toObject) {
            toObject({ fields: fields, object: serializedObject, result: result, config: config });
          } else {
            if (field === '') {
              // structPtr
              var object = type.toObject(serializedObject, config);
              Object.assign(result, object);
            } else {
              var _object2 = type.toObject(serializedObject ? serializedObject[field] : null, config);
              result[field] = _object2;
            }
          }

          if (config.debug) {
            try {
              var b = new ByteBuffer(ByteBuffer.DEFAULT_CAPACITY, ByteBuffer.LITTLE_ENDIAN);
              if (serializedObject != null) {
                var value = serializedObject[field];
                if (value) {
                  var appendByteBuffer = config.override[name + '.' + field + '.appendByteBuffer'];
                  if (toObject && appendByteBuffer) {
                    appendByteBuffer({ fields: fields, object: serializedObject, b: b });
                  } else {
                    type.appendByteBuffer(b, value);
                  }
                }
              }
              b = b.copy(0, b.offset);
              console.error('toObject', name + '.' + field, '\'' + result[field] + '\'', b.toHex());
            } catch (error) {
              // work-around to prevent debug time crash
              error.message = name + '.' + field + ' ' + error.message;
              console.error(error);
            }
          }
        }
      } catch (error) {
        error.message += ' ' + name + '.' + field;
        throw error;
      }
      return result;
    }
  };
};

/***/ }),

/***/ 1253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  chain: __webpack_require__(1254),
  history: __webpack_require__(1255)
};

/***/ }),

/***/ 1254:
/***/ (function(module, exports) {

module.exports = {"get_currency_balance":{"params":{"code":"name","account":"name","symbol":"optional<string>"},"results":"asset[]"},"get_currency_stats":{"params":{"code":"name","symbol":"string"},"results":{"supply":"asset","max_supply":"asset","issuer":"account_name"}},"get_producers":{"brief":"Fetch smart contract data from producer.","params":{"json":{"type":"bool","default":false},"lower_bound":"string","limit":{"type":"uint32","default":"10"}},"results":{"rows":{"type":"vector","doc":"one row per item, either encoded as hex String or JSON object"},"total_producer_vote_weight":{"type":"float64","doc":"total vote"},"more":{"type":"string","doc":"fill lower_bound with this value to fetch more rows"}}},"get_info":{"brief":"Return general network information.","params":null,"results":{"server_version":"string","head_block_num":"uint32","last_irreversible_block_num":"uint32","last_irreversible_block_id":"block_id","head_block_id":"block_id","head_block_time":"time_point_sec","head_block_producer":"account_name","virtual_block_cpu_limit":"uint64","virtual_block_net_limit":"uint64","block_cpu_limit":"uint64","block_net_limit":"uint64"}},"get_block":{"brief":"Fetch a block from the blockchain.","params":{"block_num_or_id":"string"},"results":"variant","errors":{"unknown block":null}},"get_account":{"brief":"Fetch a blockchain account","params":{"account_name":"name"},"results":{"account_name":"name","privileged":"bool","last_code_update":"time_point","created":"time_point","ram_quota":"int64","net_weight":"int64","cpu_weight":"int64","net_limit":"int64","cpu_limit":"int64","ram_usage":"int64","permissions":"vector<permission>","total_resources":"variant","self_delegated_bandwidth":"variant","voter_info":"variant"}},"get_code":{"brief":"Fetch smart contract code","params":{"account_name":"name"},"results":{"account_name":"name","wast":"string","code_hash":"sha256","abi":"optional<abi_def>"}},"get_table_rows":{"brief":"Fetch smart contract data from an account.","params":{"json":{"type":"bool","default":false},"code":"name","scope":"name","table":"name","table_key":"string","lower_bound":{"type":"string","default":"0"},"upper_bound":{"type":"string","default":"-1"},"limit":{"type":"uint32","default":"10"}},"results":{"rows":{"type":"vector","doc":"one row per item, either encoded as hex String or JSON object"},"more":{"type":"bool","doc":"true if last element"}}},"get_abi":{"params":{"account_name":"name"},"results":{"account_name":"name","abi":"abi_def?"}},"abi_json_to_bin":{"brief":"Manually serialize json into binary hex.  The binayargs is usually stored in Action.data.","params":{"code":"name","action":"name","args":"bytes"},"results":{"binargs":"bytes"}},"abi_bin_to_json":{"brief":"Convert bin hex back into Abi json definition.","params":{"code":"name","action":"name","binargs":"bytes"},"results":{"args":"bytes","required_scope":"name[]","required_auth":"name[]"}},"get_required_keys":{"params":{"transaction":"transaction","available_keys":"set[public_key]"},"results":"Set[public_key]"},"push_block":{"brief":"Append a block to the chain database.","params":{"block":"signed_block"},"results":null},"push_transaction":{"brief":"Attempts to push the transaction into the pending queue.","params":{"signed_transaction":"signed_transaction"},"results":{"transaction_id":"fixed_bytes32","processed":"bytes"}},"push_transactions":{"brief":"Attempts to push transactions into the pending queue.","params":{"signed_transaction[]":"signed_transaction"},"results":"vector[push_transaction.results]"}}

/***/ }),

/***/ 1255:
/***/ (function(module, exports) {

module.exports = {"get_actions":{"params":{"account_name":"account_name","pos":"int32?","offset":"int32?"},"results":{"actions":"ordered_action_result[]","last_irreversible_block":"uint32","time_limit_exceeded_error":"bool?"},"structs":[{"name":"ordered_action_result","fields":{"global_action_seq":"uint64","account_action_seq":"int32","block_num":"uint32","block_time":"block_timestamp_type","action_trace":"variant"}}]},"get_controlled_accounts":{"params":{"controlling_account":"account_name"},"results":{"controlled_accounts":"account_name[]"}},"get_key_accounts":{"params":{"public_key":"public_key_type"},"results":{"account_names":"account_name[]"}},"get_transaction":{"brief":"Retrieve a transaction from the blockchain.","params":{"id":"transaction_id_type"},"results":{"id":"transaction_id_type","trx":"variant","block_time":"block_timestamp_type","block_num":"uint32","last_irreversible_block":"uint32","traces":"variant[]"}}}

/***/ }),

/***/ 1256:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1257);
var camelCase = __webpack_require__(1259);
var helpers = __webpack_require__(1266);
var processArgs = __webpack_require__(1241);

module.exports = apiGen;

function apiGen(version, definitions, config) {
  config = Object.assign({
    httpEndpoint: 'http://127.0.0.1:8888',
    verbose: false
  }, config);

  var defaultLogger = {
    log: config.verbose ? console.log : '',
    error: console.error
  };

  config.logger = Object.assign({}, defaultLogger, config.logger);

  var api = {};
  var _config = config,
      httpEndpoint = _config.httpEndpoint;


  for (var apiGroup in definitions) {
    for (var apiMethod in definitions[apiGroup]) {
      var methodName = camelCase(apiMethod);
      var url = httpEndpoint + '/' + version + '/' + apiGroup + '/' + apiMethod;
      api[methodName] = fetchMethod(methodName, url, definitions[apiGroup][apiMethod], config);
    }
  }

  var _loop = function _loop(helper) {
    // Insert `api` as the first parameter to all API helpers
    api[helper] = function () {
      var _helpers$api;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_helpers$api = helpers.api)[helper].apply(_helpers$api, [api].concat(args));
    };
  };

  for (var helper in helpers.api) {
    _loop(helper);
  }
  return Object.assign(api, helpers);
}

function fetchMethod(methodName, url, definition, config) {
  var logger = config.logger;


  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (args.length === 0) {
      console.log(usage(methodName, definition));
      return;
    }

    var optionsFormatter = function optionsFormatter(option) {
      if (typeof option === 'boolean') {
        return { broadcast: option };
      }
    };

    var processedArgs = processArgs(args, Object.keys(definition.params || []), methodName, optionsFormatter);

    var params = processedArgs.params,
        options = processedArgs.options,
        returnPromise = processedArgs.returnPromise;
    var callback = processedArgs.callback;


    var body = JSON.stringify(params);
    if (logger.log) {
      logger.log('api >', 'post', '\t', url, body);
    }
    var fetchConfiguration = { body: body, method: 'POST' };
    Object.assign(fetchConfiguration, config.fetchConfiguration);

    fetch(url, fetchConfiguration).then(function (response) {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        return response.text().then(function (bodyResp) {
          var error = new Error(bodyResp);
          error.status = response.status;
          error.statusText = response.statusText;
          throw error;
        });
      }
    }).then(function (objectResp) {
      if (logger.log) {
        logger.log('api <', 'response', '\t', url, JSON.stringify(objectResp));
      }
      try {
        callback(null, objectResp);
      } catch (callbackError) {
        if (logger.error) {
          logger.error('api <', 'result callback', ':', callbackError);
        }
      }
    }).catch(function (error) {
      var message = '';
      try {
        // nodeos format (fail safe)
        message = JSON.parse(error.message).error.details[0];
      } catch (e2) {}

      if (logger.error) {
        logger.error('api <', 'error', '\t', message, url, body);
        logger.error(error);
      }

      try {
        callback(error);
      } catch (callbackError) {
        if (logger.error) {
          logger.error('api <', 'error callback', ':', callbackError);
        }
      }
    });

    return returnPromise;
  };
}

function usage(methodName, definition) {
  var usage = '';
  var out = function out(str) {
    usage += str + '\n';
  };

  out('USAGE');
  out(methodName + ' - ' + definition.brief);

  out('\nPARAMETERS');
  if (definition.params) {
    out(JSON.stringify(definition.params, null, 2));
  } else {
    out('none');
  }

  out('\nRETURNS');
  if (definition.results) {
    out('' + JSON.stringify(definition.results, null, 2));
  } else {
    out('no data');
  }

  out('\nERRORS');
  if (definition.errors) {
    for (var error in definition.errors) {
      var errorDesc = definition.errors[error];
      out('' + error + (errorDesc ? ' - ' + errorDesc : ''));
    }
  } else {
    out('nothing special');
  }

  return usage;
}

/***/ }),

/***/ 1257:
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(1258);
module.exports = self.fetch.bind(self);


/***/ }),

/***/ 1258:
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = options.status === undefined ? 200 : options.status
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),

/***/ 1259:
/***/ (function(module, exports, __webpack_require__) {

var upperCase = __webpack_require__(1260)
var noCase = __webpack_require__(1261)

/**
 * Camel case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale, mergeNumbers) {
  var result = noCase(value, locale)

  // Replace periods between numeric entities with an underscore.
  if (!mergeNumbers) {
    result = result.replace(/ (?=\d)/g, '_')
  }

  // Replace spaces between words with an upper cased character.
  return result.replace(/ (.)/g, function (m, $1) {
    return upperCase($1, locale)
  })
}


/***/ }),

/***/ 1260:
/***/ (function(module, exports) {

/**
 * Special language-specific overrides.
 *
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 *
 * @type {Object}
 */
var LANGUAGES = {
  tr: {
    regexp: /[\u0069]/g,
    map: {
      '\u0069': '\u0130'
    }
  },
  az: {
    regexp: /[\u0069]/g,
    map: {
      '\u0069': '\u0130'
    }
  },
  lt: {
    regexp: /[\u0069\u006A\u012F]\u0307|\u0069\u0307[\u0300\u0301\u0303]/g,
    map: {
      '\u0069\u0307': '\u0049',
      '\u006A\u0307': '\u004A',
      '\u012F\u0307': '\u012E',
      '\u0069\u0307\u0300': '\u00CC',
      '\u0069\u0307\u0301': '\u00CD',
      '\u0069\u0307\u0303': '\u0128'
    }
  }
}

/**
 * Upper case a string.
 *
 * @param  {String} str
 * @return {String}
 */
module.exports = function (str, locale) {
  var lang = LANGUAGES[locale]

  str = str == null ? '' : String(str)

  if (lang) {
    str = str.replace(lang.regexp, function (m) { return lang.map[m] })
  }

  return str.toUpperCase()
}


/***/ }),

/***/ 1261:
/***/ (function(module, exports, __webpack_require__) {

var lowerCase = __webpack_require__(1262)

var NON_WORD_REGEXP = __webpack_require__(1263)
var CAMEL_CASE_REGEXP = __webpack_require__(1264)
var CAMEL_CASE_UPPER_REGEXP = __webpack_require__(1265)

/**
 * Sentence case a string.
 *
 * @param  {string} str
 * @param  {string} locale
 * @param  {string} replacement
 * @return {string}
 */
module.exports = function (str, locale, replacement) {
  if (str == null) {
    return ''
  }

  replacement = typeof replacement !== 'string' ? ' ' : replacement

  function replace (match, index, value) {
    if (index === 0 || index === (value.length - match.length)) {
      return ''
    }

    return replacement
  }

  str = String(str)
    // Support camel case ("camelCase" -> "camel Case").
    .replace(CAMEL_CASE_REGEXP, '$1 $2')
    // Support odd camel case ("CAMELCase" -> "CAMEL Case").
    .replace(CAMEL_CASE_UPPER_REGEXP, '$1 $2')
    // Remove all non-word characters and replace with a single space.
    .replace(NON_WORD_REGEXP, replace)

  // Lower case the entire string.
  return lowerCase(str, locale)
}


/***/ }),

/***/ 1262:
/***/ (function(module, exports) {

/**
 * Special language-specific overrides.
 *
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 *
 * @type {Object}
 */
var LANGUAGES = {
  tr: {
    regexp: /\u0130|\u0049|\u0049\u0307/g,
    map: {
      '\u0130': '\u0069',
      '\u0049': '\u0131',
      '\u0049\u0307': '\u0069'
    }
  },
  az: {
    regexp: /[\u0130]/g,
    map: {
      '\u0130': '\u0069',
      '\u0049': '\u0131',
      '\u0049\u0307': '\u0069'
    }
  },
  lt: {
    regexp: /[\u0049\u004A\u012E\u00CC\u00CD\u0128]/g,
    map: {
      '\u0049': '\u0069\u0307',
      '\u004A': '\u006A\u0307',
      '\u012E': '\u012F\u0307',
      '\u00CC': '\u0069\u0307\u0300',
      '\u00CD': '\u0069\u0307\u0301',
      '\u0128': '\u0069\u0307\u0303'
    }
  }
}

/**
 * Lowercase a string.
 *
 * @param  {String} str
 * @return {String}
 */
module.exports = function (str, locale) {
  var lang = LANGUAGES[locale]

  str = str == null ? '' : String(str)

  if (lang) {
    str = str.replace(lang.regexp, function (m) { return lang.map[m] })
  }

  return str.toLowerCase()
}


/***/ }),

/***/ 1263:
/***/ (function(module, exports) {

module.exports = /[^A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]+/g


/***/ }),

/***/ 1264:
/***/ (function(module, exports) {

module.exports = /([a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19])([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A])/g


/***/ }),

/***/ 1265:
/***/ (function(module, exports) {

module.exports = /([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A])([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A][a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A])/g


/***/ }),

/***/ 1266:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

  // Under "api:" all functions must take api as their 1st parameter
  api: {
    createTransaction: createTransaction
  }

  /**
    @typedef {object} headers
    @property {number} ref_block_num - Last irreversible block number.  The
    bit-wise AND operation is used to keep this value with the size of a Uint16
    size (a block num in the last 2^16 blocks).  Example:
    `get_info.last_irreversible_block_num & 0xFFFF`
  
    @property {number} ref_block_prefix - get_block.ref_block_prefix .. This is
    a 32 bit number identifier (identify the same block referenced in `ref_block_num`).
  
    @property {string} expiration - This is based on the head block time from the
    blockchain.  Be careful to suffix a Z if required (as with Firefox and JavaScript)
    to ensure this date string is interpreted as Zulu time.
  
    Example: `new Date(new Date(info.head_block_time + 'Z').getTime() + expireInSeconds * 1000).toISOString().split('.')[0]`
  */

  /**
    Consult the blockchain and gather information for use in a new signed transaction.
    For Transaction as Proof of Stake (TaPOS), 32 bits of a recent block Id is included.
    Because all transactions use TaPOS, this solves the nothing at stake attack.
  
    This is usually called for every transaction or maybe cached per block.  Although
    longer caching may be possible, a longer cache time increases the risk of a
    transaction replay attack.
  
    @arg {number} expireInSeconds - How many seconds until expiration
    @arg {function(error, headers)} callback {@link headers}
    @see {headers}
    @example eos.createTransaction(60, (error, headers) => {})
  */
};function createTransaction(api) {
  var expireInSeconds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;
  var callback = arguments[2];

  if (!callback) {
    throw new TypeError('callback parameter is required');
  }
  api.getInfo(checkError(callback, function (info) {
    var chainDate = new Date(info.head_block_time + 'Z');

    api.getBlock(info.last_irreversible_block_num, checkError(callback, function (block) {
      var expiration = new Date(chainDate.getTime() + expireInSeconds * 1000);

      var ref_block_num = info.last_irreversible_block_num & 0xFFFF;

      var headers = {
        expiration: expiration.toISOString().split('.')[0],
        ref_block_num: ref_block_num,
        ref_block_prefix: block.ref_block_prefix,
        net_usage_words: 0,
        max_cpu_usage_ms: 0,
        delay_sec: 0,
        context_free_actions: [],
        actions: [],
        signatures: [],
        transaction_extensions: []
      };
      callback(null, headers);
    }));
  }));
}

var checkError = function checkError(parentErr, parrentRes) {
  return function (error, result) {
    if (error) {
      parentErr(error);
    } else {
      parrentRes(result);
    }
  };
};

/***/ }),

/***/ 1267:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(1268), __esModule: true };

/***/ }),

/***/ 1268:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(266);
__webpack_require__(185);
module.exports = __webpack_require__(1269);


/***/ }),

/***/ 1269:
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(268);
var ITERATOR = __webpack_require__(34)('iterator');
var Iterators = __webpack_require__(106);
module.exports = __webpack_require__(20).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ 1270:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(1271), __esModule: true };

/***/ }),

/***/ 1271:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(266);
__webpack_require__(185);
module.exports = __webpack_require__(1272);


/***/ }),

/***/ 1272:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(56);
var get = __webpack_require__(269);
module.exports = __webpack_require__(20).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ 1273:
/***/ (function(module, exports) {

module.exports = {"name":"uint64","checksum160":"fixed_bytes20","checksum256":"fixed_bytes32","checksum512":"fixed_bytes64","signature":"fixed_bytes65","public_key":"fixed_bytes33","message_type":"fixed_string16","symbol":"uint64","symbol_code":"uint64","field_name":"string","account_name":"name","permission_name":"name","type_name":"string","token_name":"name","table_name":"name","scope_name":"name","action_name":"name","time_point":"int64","time_point_sec":"time","timestamp":"uint32","block_timestamp_type":"timestamp","block_id":"fixed_bytes32","checksum_type":"fixed_bytes32","checksum256_type":"fixed_bytes32","checksum512_type":"fixed_bytes64","checksum160_type":"fixed_bytes20","sha256":"fixed_bytes32","sha512":"fixed_bytes64","sha160":"fixed_bytes20","weight_type":"uint16","block_num_type":"uint32","share_type":"int64","digest_type":"checksum_type","context_free_type":"bytes","unsigned_int":"varuint32","bool":"uint8","extensions_type":{"base":"","fields":{"type":"uint16","data":"bytes"}},"transaction_header":{"base":"","fields":{"expiration":"time","ref_block_num":"uint16","ref_block_prefix":"uint32","net_usage_words":"unsigned_int","max_cpu_usage_ms":"uint8","delay_sec":"unsigned_int"}},"transaction":{"base":"transaction_header","fields":{"context_free_actions":"action[]","actions":"action[]","transaction_extensions":"extensions_type[]"}},"signed_transaction":{"base":"transaction","fields":{"signatures":"signature[]","context_free_data":"bytes[]"}},"fields":"field_def[]","field_def":{"fields":{"name":"field_name","type":"type_name"}},"asset":{"fields":{"amount":"share_type","sym":"symbol"}},"producer_key":{"fields":{"producer_name":"account_name","block_signing_key":"public_key"}},"producer_schedule":{"fields":{"version":"uint32","producers":"producer_key[]"}},"chain_config":{"fields":{"target_block_size":"uint32","max_block_size":"uint32","target_block_acts_per_scope":"uint32","max_block_acts_per_scope":"uint32","target_block_acts":"uint32","max_block_acts":"uint32","real_threads":"uint64","max_storage_size":"uint64","max_transaction_lifetime":"uint32","max_authority_depth":"uint16","max_transaction_exec_time":"uint32","max_inline_depth":"uint16","max_inline_action_size":"uint32","max_generated_transaction_size":"uint32"}},"type_def":{"base":"","fields":{"new_type_name":"type_name","type":"type_name"}},"struct_def":{"base":"","fields":{"name":"type_name","base":"type_name","fields":"field_def[]"}},"clause_pair":{"base":"","fields":{"id":"string","body":"string"}},"error_message":{"base":"","fields":{"error_code":"uint64","error_msg":"string"}},"abi_def":{"base":"","fields":{"version":"string","types":"type_def[]","structs":"struct_def[]","actions":"action_def[]","tables":"table_def[]","ricardian_clauses":"clause_pair[]","error_messages":"error_message[]","abi_extensions":"extensions_type[]"}},"table_def":{"base":"","fields":{"name":"table_name","index_type":"type_name","key_names":"field_name[]","key_types":"type_name[]","type":"type_name"}},"action":{"base":"","fields":{"account":"account_name","name":"action_name","authorization":"permission_level[]","data":"bytes"}},"action_def":{"base":"","fields":{"name":"action_name","type":"type_name","ricardian_contract":"string"}},"block_header":{"base":"","fields":{"previous":"checksum256","timestamp":"timestamp","transaction_mroot":"checksum256","action_mroot":"checksum256","block_mroot":"checksum256","producer":"account_name","schedule_version":"uint32","new_producers":"producer_schedule?"}},"packed_transaction":{"fields":{"signatures":"signature[]","compression":"uint8","packed_context_free_data":"bytes","packed_trx":"bytes"}},"nonce":{"action":{"name":"nonce","account":"eosio.null"},"fields":{"value":"string"}}}

/***/ }),

/***/ 1274:
/***/ (function(module, exports) {

module.exports = {"account_name":"name","action_name":"name","authority":{"base":"","fields":{"threshold":"uint32","keys":"key_weight[]","accounts":"permission_level_weight[]","waits":"wait_weight[]"}},"bidname":{"base":"","action":{"name":"bidname","account":"eosio"},"fields":{"bidder":"account_name","newname":"account_name","bid":"asset"}},"blockchain_parameters":{"base":"","fields":{"max_block_net_usage":"uint64","target_block_net_usage_pct":"uint32","max_transaction_net_usage":"uint32","base_per_transaction_net_usage":"uint32","net_usage_leeway":"uint32","context_free_discount_net_usage_num":"uint32","context_free_discount_net_usage_den":"uint32","max_block_cpu_usage":"uint32","target_block_cpu_usage_pct":"uint32","max_transaction_cpu_usage":"uint32","min_transaction_cpu_usage":"uint32","max_transaction_lifetime":"uint32","deferred_trx_expiration_window":"uint32","max_transaction_delay":"uint32","max_inline_action_size":"uint32","max_inline_action_depth":"uint16","max_authority_depth":"uint16"}},"buyram":{"base":"","action":{"name":"buyram","account":"eosio"},"fields":{"payer":"account_name","receiver":"account_name","quant":"asset"}},"buyrambytes":{"base":"","action":{"name":"buyrambytes","account":"eosio"},"fields":{"payer":"account_name","receiver":"account_name","bytes":"uint32"}},"canceldelay":{"base":"","action":{"name":"canceldelay","account":"eosio"},"fields":{"canceling_auth":"permission_level","trx_id":"transaction_id_type"}},"claimrewards":{"base":"","action":{"name":"claimrewards","account":"eosio"},"fields":{"owner":"account_name"}},"connector":{"base":"","fields":{"balance":"asset","weight":"float64"}},"delegatebw":{"base":"","action":{"name":"delegatebw","account":"eosio"},"fields":{"from":"account_name","receiver":"account_name","stake_net_quantity":"asset","stake_cpu_quantity":"asset","transfer":"bool"}},"delegated_bandwidth":{"base":"","fields":{"from":"account_name","to":"account_name","net_weight":"asset","cpu_weight":"asset"}},"deleteauth":{"base":"","action":{"name":"deleteauth","account":"eosio"},"fields":{"account":"account_name","permission":"permission_name"}},"eosio_global_state":{"base":"blockchain_parameters","fields":{"max_ram_size":"uint64","total_ram_bytes_reserved":"uint64","total_ram_stake":"int64","last_producer_schedule_update":"block_timestamp_type","last_pervote_bucket_fill":"uint64","pervote_bucket":"int64","perblock_bucket":"int64","total_unpaid_blocks":"uint32","total_activated_stake":"int64","thresh_activated_stake_time":"uint64","last_producer_schedule_size":"uint16","total_producer_vote_weight":"float64","last_name_close":"block_timestamp_type"}},"exchange_state":{"base":"","fields":{"supply":"asset","base":"connector","quote":"connector"}},"key_weight":{"base":"","fields":{"key":"public_key","weight":"weight_type"}},"linkauth":{"base":"","action":{"name":"linkauth","account":"eosio"},"fields":{"account":"account_name","code":"account_name","type":"action_name","requirement":"permission_name"}},"namebid_info":{"base":"","fields":{"newname":"account_name","high_bidder":"account_name","high_bid":"int64","last_bid_time":"uint64"}},"newaccount":{"base":"","action":{"name":"newaccount","account":"eosio"},"fields":{"creator":"account_name","name":"account_name","owner":"authority","active":"authority"}},"onerror":{"base":"","action":{"name":"onerror","account":"eosio"},"fields":{"sender_id":"uint128","sent_trx":"bytes"}},"permission_level":{"base":"","fields":{"actor":"account_name","permission":"permission_name"}},"permission_level_weight":{"base":"","fields":{"permission":"permission_level","weight":"weight_type"}},"permission_name":"name","producer_info":{"base":"","fields":{"owner":"account_name","total_votes":"float64","producer_key":"public_key","is_active":"bool","url":"string","unpaid_blocks":"uint32","last_claim_time":"uint64","location":"uint16"}},"producer_key":{"base":"","fields":{"producer_name":"account_name","block_signing_key":"public_key"}},"refund":{"base":"","action":{"name":"refund","account":"eosio"},"fields":{"owner":"account_name"}},"refund_request":{"base":"","fields":{"owner":"account_name","request_time":"time_point_sec","net_amount":"asset","cpu_amount":"asset"}},"regproducer":{"base":"","action":{"name":"regproducer","account":"eosio"},"fields":{"producer":"account_name","producer_key":"public_key","url":"string","location":"uint16"}},"regproxy":{"base":"","action":{"name":"regproxy","account":"eosio"},"fields":{"proxy":"account_name","isproxy":"bool"}},"require_auth":{"base":"","action":{"name":"reqauth","account":"eosio"},"fields":{"from":"account_name"}},"rmvproducer":{"base":"","action":{"name":"rmvproducer","account":"eosio"},"fields":{"producer":"account_name"}},"sellram":{"base":"","action":{"name":"sellram","account":"eosio"},"fields":{"account":"account_name","bytes":"uint64"}},"set_account_limits":{"base":"","action":{"name":"setalimits","account":"eosio"},"fields":{"account":"account_name","ram_bytes":"int64","net_weight":"int64","cpu_weight":"int64"}},"set_global_limits":{"base":"","action":{"name":"setglimits","account":"eosio"},"fields":{"cpu_usec_per_period":"int64"}},"set_producers":{"base":"","action":{"name":"setprods","account":"eosio"},"fields":{"schedule":"producer_key[]"}},"setabi":{"base":"","action":{"name":"setabi","account":"eosio"},"fields":{"account":"account_name","abi":"bytes"}},"setcode":{"base":"","action":{"name":"setcode","account":"eosio"},"fields":{"account":"account_name","vmtype":"uint8","vmversion":"uint8","code":"bytes"}},"setparams":{"base":"","action":{"name":"setparams","account":"eosio"},"fields":{"params":"blockchain_parameters"}},"setpriv":{"base":"","action":{"name":"setpriv","account":"eosio"},"fields":{"account":"account_name","is_priv":"int8"}},"setram":{"base":"","action":{"name":"setram","account":"eosio"},"fields":{"max_ram_size":"uint64"}},"total_resources":{"base":"","fields":{"owner":"account_name","net_weight":"asset","cpu_weight":"asset","ram_bytes":"uint64"}},"transaction_id_type":"checksum256","undelegatebw":{"base":"","action":{"name":"undelegatebw","account":"eosio"},"fields":{"from":"account_name","receiver":"account_name","unstake_net_quantity":"asset","unstake_cpu_quantity":"asset"}},"unlinkauth":{"base":"","action":{"name":"unlinkauth","account":"eosio"},"fields":{"account":"account_name","code":"account_name","type":"action_name"}},"unregprod":{"base":"","action":{"name":"unregprod","account":"eosio"},"fields":{"producer":"account_name"}},"updateauth":{"base":"","action":{"name":"updateauth","account":"eosio"},"fields":{"account":"account_name","permission":"permission_name","parent":"permission_name","auth":"authority"}},"user_resources":{"base":"","fields":{"owner":"account_name","net_weight":"asset","cpu_weight":"asset","ram_bytes":"uint64"}},"voteproducer":{"base":"","action":{"name":"voteproducer","account":"eosio"},"fields":{"voter":"account_name","proxy":"account_name","producers":"account_name[]"}},"voter_info":{"base":"","fields":{"owner":"account_name","proxy":"account_name","producers":"account_name[]","staked":"int64","last_vote_weight":"float64","proxied_vote_weight":"float64","is_proxy":"bool"}},"wait_weight":{"base":"","fields":{"wait_sec":"uint32","weight":"weight_type"}},"weight_type":"uint16"}

/***/ }),

/***/ 1275:
/***/ (function(module, exports) {

module.exports = {"account":{"base":"","fields":{"balance":"asset"}},"account_name":"name","create":{"base":"","action":{"name":"create","account":"eosio.token"},"fields":{"issuer":"account_name","maximum_supply":"asset"}},"currency_stats":{"base":"","fields":{"supply":"asset","max_supply":"asset","issuer":"account_name"}},"issue":{"base":"","action":{"name":"issue","account":"eosio.token"},"fields":{"to":"account_name","quantity":"asset","memo":"string"}},"transfer":{"base":"","action":{"name":"transfer","account":"eosio.token"},"fields":{"from":"account_name","to":"account_name","quantity":"asset","memo":"string"}}}

/***/ }),

/***/ 1276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var _typeof2 = __webpack_require__(265);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var assert = __webpack_require__(25);
var Structs = __webpack_require__(1235);

module.exports = AbiCache;

function AbiCache(network, config) {
  // Help (or "usage") needs {defaults: true}
  config = Object.assign({}, { defaults: true }, config);
  var cache = {};

  /**
    Asynchronously fetch and cache an ABI from the blockchain.
     @arg {string} account - blockchain account with deployed contract
    @arg {boolean} [force = true] false when ABI is immutable.
  */
  function abiAsync(account) {
    var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    assert.equal(typeof account === 'undefined' ? 'undefined' : (0, _typeof3.default)(account), 'string', 'account string required');

    if (force == false && cache[account] != null) {
      return Promise.resolve(cache[account]);
    }

    if (network == null) {
      var _abi = cache[account];
      assert(_abi, 'Missing ABI for account: ' + account + ', provide httpEndpoint or add to abiCache');
      return Promise.resolve(_abi);
    }

    return network.getAbi(account).then(function (code) {
      assert(code.abi, 'Missing ABI for account: ' + account);
      return abi(account, code.abi);
    });
  }

  /**
    Synchronously set or fetch an ABI from local cache.
     @arg {string} account - blockchain account with deployed contract
    @arg {string} [abi] - blockchain ABI json data.  Null to fetch or non-null to cache
  */
  function abi(account, abi) {
    assert.equal(typeof account === 'undefined' ? 'undefined' : (0, _typeof3.default)(account), 'string', 'account string required');
    if (abi) {
      assert.equal(typeof abi === 'undefined' ? 'undefined' : (0, _typeof3.default)(abi), 'object', 'abi');
      if (Buffer.isBuffer(abi)) {
        abi = JSON.parse(abi);
      }
      var schema = abiToFcSchema(abi);
      var structs = Structs(config, schema); // structs = {structs, types}
      return cache[account] = Object.assign({ abi: abi, schema: schema }, structs);
    }
    var c = cache[account];
    if (c == null) {
      throw new Error('Abi \'' + account + '\' is not cached');
    }
    return c;
  }

  return {
    abiAsync: abiAsync,
    abi: abi
  };
}

function abiToFcSchema(abi) {
  // customTypes
  // For FcBuffer
  var abiSchema = {};

  // convert abi types to Fcbuffer schema
  if (abi.types) {
    // aliases
    abi.types.forEach(function (e) {
      abiSchema[e.new_type_name] = e.type;
    });
  }

  if (abi.structs) {
    abi.structs.forEach(function (e) {
      var fields = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = e.fields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var field = _step.value;

          fields[field.name] = field.type;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      abiSchema[e.name] = { base: e.base, fields: fields };
      if (e.base === '') {
        delete abiSchema[e.name].base;
      }
    });
  }

  return abiSchema;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),

/***/ 1277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var _slicedToArray2 = __webpack_require__(1236);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _regenerator = __webpack_require__(135);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _typeof2 = __webpack_require__(265);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var assert = __webpack_require__(25);
var ecc = __webpack_require__(1233);
var Fcbuffer = __webpack_require__(1234);
var createHash = __webpack_require__(54);

var _require = __webpack_require__(1240),
    processArgs = _require.processArgs;

var Structs = __webpack_require__(1235);

module.exports = writeApiGen;

var sign = ecc.sign;


function writeApiGen(Network, network, structs, config, schemaDef) {
  if (typeof config.chainId !== 'string') {
    throw new TypeError('config.chainId is required');
  }

  var writeApi = WriteApi(Network, network, config, structs.transaction);
  var reserveFunctions = new Set(['transaction', 'contract']);
  var merge = {};

  // sends transactions, also a action collecting wrapper functions
  merge.transaction = writeApi.genTransaction(structs, merge);

  // Immediate send operations automatically calls merge.transaction
  for (var type in schemaDef) {
    var schema = schemaDef[type];
    if (schema.action == null) {
      continue;
    }
    var actionName = schema.action.name;
    if (reserveFunctions.has(actionName)) {
      throw new TypeError('Conflicting Api function: ' + type);
    }

    var struct = structs[type];
    if (struct == null) {
      continue;
    }
    var definition = schemaFields(schemaDef, type);
    merge[actionName] = writeApi.genMethod(type, definition, merge.transaction, schema.action.account);
  }

  /**
    Immedate send contract actions.
     @example eos.contract('mycontract', [options], [callback])
    @example eos.contract('mycontract').then(mycontract => mycontract.myaction(...))
  */
  merge.contract = function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _processArgs = processArgs(args, ['account'], 'contract', optionsFormatter),
        params = _processArgs.params,
        options = _processArgs.options,
        returnPromise = _processArgs.returnPromise,
        callback = _processArgs.callback;

    var account = params.account;

    // sends transactions via its own transaction function

    writeApi.genContractActions(account).then(function (r) {
      callback(null, r);
    }).catch(function (r) {
      callback(r);
    });

    return returnPromise;
  };

  return merge;
}

function WriteApi(Network, network, config, Transaction) {
  /**
    @arg {array} [args.contracts]
    @arg {callback|object} args.transaction tr => {tr.transfer .. }
    @arg {object} [args.options]
    @arg {function} [args.callback]
  */
  var genTransaction = function genTransaction(structs, merge) {
    return function _callee() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var contracts, options, callback, isContractArray, accounts, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, action, abiPromises, cachedCode, arg, contractPromises, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, account;

      return _regenerator2.default.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              contracts = void 0, options = void 0, callback = void 0;


              if (args[args.length - 1] == null) {
                // callback may be undefined
                args = args.slice(0, args.length - 1);
              }

              isContractArray = isStringArray(args[0]);

              if (!isContractArray) {
                _context.next = 8;
                break;
              }

              contracts = args[0];
              args = args.slice(1);
              _context.next = 39;
              break;

            case 8:
              if (!(typeof args[0] === 'string')) {
                _context.next = 13;
                break;
              }

              contracts = [args[0]];
              args = args.slice(1);
              _context.next = 39;
              break;

            case 13:
              if (!((0, _typeof3.default)(args[0]) === 'object' && (0, _typeof3.default)(Array.isArray(args[0].actions)))) {
                _context.next = 39;
                break;
              }

              // full transaction, lookup ABIs used by each action
              accounts = new Set(); // make a unique list

              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 18;
              for (_iterator = args[0].actions[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                action = _step.value;

                accounts.add(action.account);
              }

              _context.next = 26;
              break;

            case 22:
              _context.prev = 22;
              _context.t0 = _context['catch'](18);
              _didIteratorError = true;
              _iteratorError = _context.t0;

            case 26:
              _context.prev = 26;
              _context.prev = 27;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 29:
              _context.prev = 29;

              if (!_didIteratorError) {
                _context.next = 32;
                break;
              }

              throw _iteratorError;

            case 32:
              return _context.finish(29);

            case 33:
              return _context.finish(26);

            case 34:
              abiPromises = [];
              // Eos contract operations are cached (efficient and offline transactions)

              cachedCode = new Set(['eosio', 'eosio.token', 'eosio.null']);

              accounts.forEach(function (account) {
                if (!cachedCode.has(account)) {
                  abiPromises.push(config.abiCache.abiAsync(account));
                }
              });
              _context.next = 39;
              return _regenerator2.default.awrap(Promise.all(abiPromises));

            case 39:

              if (args.length > 1 && typeof args[args.length - 1] === 'function') {
                callback = args.pop();
              }

              if (args.length > 1 && (0, _typeof3.default)(args[args.length - 1]) === 'object') {
                options = args.pop();
              }

              assert.equal(args.length, 1, 'transaction args: contracts<string|array>, transaction<callback|object>, [options], [callback]');
              arg = args[0];

              if (!contracts) {
                _context.next = 67;
                break;
              }

              assert(!callback, 'callback with contracts are not supported');
              assert.equal('function', typeof arg === 'undefined' ? 'undefined' : (0, _typeof3.default)(arg), 'provide function callback following contracts array parameter');

              contractPromises = [];
              _iteratorNormalCompletion2 = true;
              _didIteratorError2 = false;
              _iteratorError2 = undefined;
              _context.prev = 50;

              for (_iterator2 = contracts[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                account = _step2.value;

                // setup wrapper functions to collect contract api calls
                contractPromises.push(genContractActions(account, merge.transaction));
              }

              _context.next = 58;
              break;

            case 54:
              _context.prev = 54;
              _context.t1 = _context['catch'](50);
              _didIteratorError2 = true;
              _iteratorError2 = _context.t1;

            case 58:
              _context.prev = 58;
              _context.prev = 59;

              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }

            case 61:
              _context.prev = 61;

              if (!_didIteratorError2) {
                _context.next = 64;
                break;
              }

              throw _iteratorError2;

            case 64:
              return _context.finish(61);

            case 65:
              return _context.finish(58);

            case 66:
              return _context.abrupt('return', Promise.all(contractPromises).then(function (actions) {
                var merges = {};
                actions.forEach(function (m, i) {
                  merges[contracts[i]] = m;
                });
                var param = isContractArray ? merges : merges[contracts[0]];
                // collect and invoke api calls
                return trMessageCollector(arg, options, param);
              }));

            case 67:
              if (!(typeof arg === 'function')) {
                _context.next = 69;
                break;
              }

              return _context.abrupt('return', trMessageCollector(arg, options, merge));

            case 69:
              if (!((typeof arg === 'undefined' ? 'undefined' : (0, _typeof3.default)(arg)) === 'object')) {
                _context.next = 71;
                break;
              }

              return _context.abrupt('return', transaction(arg, options, callback));

            case 71:
              throw new Error('first transaction argument unrecognized', arg);

            case 72:
            case 'end':
              return _context.stop();
          }
        }
      }, null, this, [[18, 22, 26, 34], [27,, 29, 33], [50, 54, 58, 66], [59,, 61, 65]]);
    };
  };

  function genContractActions(account) {
    var transaction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    return config.abiCache.abiAsync(account).then(function (cache) {
      assert(Array.isArray(cache.abi.actions) && cache.abi.actions.length, 'No actions');

      var contractMerge = {};
      contractMerge.transaction = transaction ? transaction : genTransaction(cache.structs, contractMerge);

      cache.abi.actions.forEach(function (_ref) {
        var name = _ref.name,
            type = _ref.type;

        var definition = schemaFields(cache.schema, type);
        contractMerge[name] = genMethod(type, definition, contractMerge.transaction, account, name);
      });

      contractMerge.fc = cache;

      return contractMerge;
    });
  }

  function genMethod(type, definition, transactionArg) {
    var account = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'eosio.token';
    var name = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : type;

    return function () {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      if (args.length === 0) {
        console.log(usage(type, definition, Network, account, config));
        return;
      }

      // Special case like multi-action transactions where this lib needs
      // to be sure the broadcast is off.
      var optionOverrides = {};
      var lastArg = args[args.length - 1];
      if ((typeof lastArg === 'undefined' ? 'undefined' : (0, _typeof3.default)(lastArg)) === 'object' && (0, _typeof3.default)(lastArg.__optionOverrides) === 'object') {
        // pop() fixes the args.length
        Object.assign(optionOverrides, args.pop().__optionOverrides);
      }

      var processedArgs = processArgs(args, Object.keys(definition), type, optionsFormatter);

      var options = processedArgs.options;
      var params = processedArgs.params,
          returnPromise = processedArgs.returnPromise,
          callback = processedArgs.callback;


      var optionDefaults = { // From config and configDefaults
        broadcast: config.broadcast,
        sign: config.sign

        // internal options (ex: multi-action transaction)
      };options = Object.assign({}, optionDefaults, options, optionOverrides);
      if (optionOverrides.noCallback && !returnPromise) {
        throw new Error('Callback during a transaction are not supported');
      }

      var addDefaultAuths = options.authorization == null;

      var authorization = [];
      if (options.authorization) {
        if (typeof options.authorization === 'string') {
          options.authorization = [options.authorization];
        }
        options.authorization.forEach(function (auth) {
          if (typeof auth === 'string') {
            var _auth$split = auth.split('@'),
                _auth$split2 = (0, _slicedToArray3.default)(_auth$split, 2),
                actor = _auth$split2[0],
                _auth$split2$ = _auth$split2[1],
                permission = _auth$split2$ === undefined ? 'active' : _auth$split2$;

            authorization.push({ actor: actor, permission: permission });
          } else if ((typeof auth === 'undefined' ? 'undefined' : (0, _typeof3.default)(auth)) === 'object') {
            authorization.push(auth);
          }
        });
        assert.equal(authorization.length, options.authorization.length, 'invalid authorization in: ' + JSON.stringify(options.authorization));
      }

      var tr = {
        actions: [{
          account: account,
          name: name,
          authorization: authorization,
          data: params
        }]
      };

      if (addDefaultAuths) {
        var fieldKeys = Object.keys(definition);
        var f1 = fieldKeys[0];

        if (definition[f1] === 'account_name') {
          // Default authorization (since user did not provide one)
          tr.actions[0].authorization.push({
            actor: params[f1],
            permission: 'active'
          });
        }
      }

      tr.actions[0].authorization.sort(function (a, b) {
        return a.actor > b.actor ? 1 : a.actor < b.actor ? -1 : 0;
      });

      // multi-action transaction support
      if (!optionOverrides.messageOnly) {
        transactionArg(tr, options, callback);
      } else {
        callback(null, tr);
      }

      return returnPromise;
    };
  }

  /**
    Transaction Message Collector
     Wrap merge.functions adding optionOverrides that will suspend
    transaction broadcast.
  */
  function trMessageCollector(trCallback) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var merges = arguments[2];

    assert.equal('function', typeof trCallback === 'undefined' ? 'undefined' : (0, _typeof3.default)(trCallback), 'trCallback');
    assert.equal('object', typeof options === 'undefined' ? 'undefined' : (0, _typeof3.default)(options), 'options');
    assert.equal('object', typeof merges === 'undefined' ? 'undefined' : (0, _typeof3.default)(merges), 'merges');
    assert(!Array.isArray(merges), 'merges should not be an array');
    assert.equal('function', typeof transaction === 'undefined' ? 'undefined' : (0, _typeof3.default)(transaction), 'transaction');

    var messageList = [];
    var messageCollector = {};

    var wrap = function wrap(opFunction) {
      return function () {
        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        // call the original function but force-disable a lot of stuff
        var ret = opFunction.apply(undefined, args.concat([{
          __optionOverrides: {
            broadcast: false,
            messageOnly: true,
            noCallback: true
          }
        }]));
        if (ret == null) {
          // double-check (code can change)
          throw new Error('Callbacks can not be used when creating a multi-action transaction');
        }
        messageList.push(ret);
      };
    };

    // merges can be an object of functions (as in the main eos contract)
    // or an object of contract names with functions under those
    for (var key in merges) {
      var value = merges[key];
      var variableName = key.replace(/\./, '_');
      if (typeof value === 'function') {
        // Native operations (eos contract for example)
        messageCollector[variableName] = wrap(value);
      } else if ((typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'object') {
        // other contract(s) (currency contract for example)
        if (messageCollector[variableName] == null) {
          messageCollector[variableName] = {};
        }
        for (var key2 in value) {
          if (key2 === 'transaction') {
            continue;
          }
          messageCollector[variableName][key2] = wrap(value[key2]);
        }
      }
    }

    var promiseCollector = void 0;
    try {
      // caller will load this up with actions
      promiseCollector = trCallback(messageCollector);
    } catch (error) {
      promiseCollector = Promise.reject(error);
    }

    return Promise.resolve(promiseCollector).then(function () {
      return Promise.all(messageList).then(function (resolvedMessageList) {
        var actions = [];
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = resolvedMessageList[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var m = _step3.value;

            var _m$actions = (0, _slicedToArray3.default)(m.actions, 1),
                action = _m$actions[0];

            actions.push(action);
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        var trObject = {};
        trObject.actions = actions;
        return transaction(trObject, options);
      });
    });
  }

  function transaction(arg, options, callback) {
    var defaultExpiration = config.expireInSeconds ? config.expireInSeconds : 60;
    var optionDefault = { expireInSeconds: defaultExpiration, broadcast: true, sign: true };
    options = Object.assign({} /*clone*/, optionDefault, options);

    var returnPromise = void 0;
    if (typeof callback !== 'function') {
      returnPromise = new Promise(function (resolve, reject) {
        callback = function callback(err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        };
      });
    }

    if ((typeof arg === 'undefined' ? 'undefined' : (0, _typeof3.default)(arg)) !== 'object') {
      throw new TypeError('First transaction argument should be an object or function');
    }

    if (!Array.isArray(arg.actions)) {
      throw new TypeError('Expecting actions array');
    }

    if (config.logger.log || config.logger.error) {
      // wrap the callback with the logger
      var superCallback = callback;
      callback = function callback(error, tr) {
        if (error && config.logger.error) {
          config.logger.error(error);
        }
        if (config.logger.log) {
          config.logger.log(JSON.stringify(tr));
        }
        superCallback(error, tr);
      };
    }

    arg.actions.forEach(function (action) {
      if (!Array.isArray(action.authorization)) {
        throw new TypeError('Expecting action.authorization array', action);
      }
    });

    if (options.sign && typeof config.signProvider !== 'function') {
      throw new TypeError('Expecting config.signProvider function (disable using {sign: false})');
    }

    var argHeaders = null;
    if ( // minimum required headers
    arg.expiration != null && arg.ref_block_num != null && arg.ref_block_prefix != null) {
      var expiration = arg.expiration,
          ref_block_num = arg.ref_block_num,
          ref_block_prefix = arg.ref_block_prefix,
          _arg$net_usage_words = arg.net_usage_words,
          net_usage_words = _arg$net_usage_words === undefined ? 0 : _arg$net_usage_words,
          _arg$max_cpu_usage_ms = arg.max_cpu_usage_ms,
          max_cpu_usage_ms = _arg$max_cpu_usage_ms === undefined ? 0 : _arg$max_cpu_usage_ms,
          _arg$delay_sec = arg.delay_sec,
          delay_sec = _arg$delay_sec === undefined ? 0 : _arg$delay_sec;

      argHeaders = {
        expiration: expiration,
        ref_block_num: ref_block_num,
        ref_block_prefix: ref_block_prefix,
        net_usage_words: net_usage_words,
        max_cpu_usage_ms: max_cpu_usage_ms,
        delay_sec: delay_sec
      };
    }

    var headers = void 0;
    if (argHeaders) {
      headers = function headers(expireInSeconds, callback) {
        return callback(null, argHeaders);
      };
    } else if (config.transactionHeaders) {
      if ((0, _typeof3.default)(config.transactionHeaders) === 'object') {
        headers = function headers(exp, callback) {
          return callback(null, config.transactionHeaders);
        };
      } else {
        assert.equal((0, _typeof3.default)(config.transactionHeaders), 'function', 'config.transactionHeaders');
        headers = config.transactionHeaders;
      }
    } else {
      assert(network, 'Network is required, provide httpEndpoint or own transaction headers');
      headers = network.createTransaction;
    }
    headers(options.expireInSeconds, checkError(callback, config.logger, function _callee2(rawTx) {
      var defaultHeaders, txObject, buf, tr, transactionId, sigs, chainIdBuf, signBuf;
      return _regenerator2.default.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // console.log('rawTx', rawTx)
              assert.equal(typeof rawTx === 'undefined' ? 'undefined' : (0, _typeof3.default)(rawTx), 'object', 'expecting transaction header object');
              assert.equal((0, _typeof3.default)(rawTx.expiration), 'string', 'expecting expiration: iso date time string');
              assert.equal((0, _typeof3.default)(rawTx.ref_block_num), 'number', 'expecting ref_block_num number');
              assert.equal((0, _typeof3.default)(rawTx.ref_block_prefix), 'number', 'expecting ref_block_prefix number');

              defaultHeaders = {
                net_usage_words: 0,
                max_cpu_usage_ms: 0,
                delay_sec: 0
              };


              rawTx = Object.assign({}, defaultHeaders, rawTx);

              rawTx.actions = arg.actions;

              // Resolve shorthand
              txObject = Transaction.fromObject(rawTx);
              buf = Fcbuffer.toBuffer(Transaction, txObject);
              tr = Transaction.toObject(txObject);
              transactionId = createHash('sha256').update(buf).digest().toString('hex');
              sigs = [];

              if (options.sign) {
                chainIdBuf = new Buffer(config.chainId, 'hex');
                signBuf = Buffer.concat([chainIdBuf, buf, new Buffer(new Uint8Array(32))]);

                sigs = config.signProvider({ transaction: tr, buf: signBuf, sign: sign });
                if (!Array.isArray(sigs)) {
                  sigs = [sigs];
                }
              }

              // sigs can be strings or Promises
              Promise.all(sigs).then(function (sigs) {
                sigs = [].concat.apply([], sigs); // flatten arrays in array

                for (var i = 0; i < sigs.length; i++) {
                  var sig = sigs[i];
                  // normalize (hex to base58 format for example)
                  if (typeof sig === 'string' && sig.length === 130) {
                    sigs[i] = ecc.Signature.from(sig).toString();
                  }
                }

                var packedTr = {
                  compression: 'none',
                  transaction: tr,
                  signatures: sigs
                };

                var mock = config.mockTransactions ? config.mockTransactions() : null;
                if (mock != null) {
                  assert(/pass|fail/.test(mock), 'mockTransactions should return a string: pass or fail');
                  if (mock === 'pass') {
                    callback(null, {
                      transaction_id: transactionId,
                      mockTransaction: true,
                      broadcast: false,
                      transaction: packedTr
                    });
                  }
                  if (mock === 'fail') {
                    var error = '[push_transaction mock error] \'fake error\', digest \'' + buf.toString('hex') + '\'';

                    if (config.logger.error) {
                      config.logger.error(error);
                    }

                    callback(error);
                  }
                  return;
                }

                if (!options.broadcast || !network) {
                  callback(null, {
                    transaction_id: transactionId,
                    broadcast: false,
                    transaction: packedTr
                  });
                } else {
                  network.pushTransaction(packedTr, function (error, processedTransaction) {
                    if (!error) {
                      callback(null, Object.assign({
                        broadcast: true,
                        transaction: packedTr,
                        transaction_id: transactionId
                      }, processedTransaction));
                    } else {
                      if (config.logger.error) {
                        config.logger.error('[push_transaction error] \'' + error.message + '\', transaction \'' + buf.toString('hex') + '\'');
                      }
                      callback(error.message);
                    }
                  });
                }
              }).catch(function (error) {
                if (config.logger.error) {
                  config.logger.error(error);
                }
                callback(error);
              });

            case 14:
            case 'end':
              return _context2.stop();
          }
        }
      }, null, this);
    }));
    return returnPromise;
  }

  // return WriteApi
  return {
    genTransaction: genTransaction,
    genContractActions: genContractActions,
    genMethod: genMethod
  };
}

var isStringArray = function isStringArray(o) {
  return Array.isArray(o) && o.length > 0 && o.findIndex(function (o) {
    return typeof o !== 'string';
  }) === -1;
};

// Normalize the extra optional options argument
var optionsFormatter = function optionsFormatter(option) {
  if ((typeof option === 'undefined' ? 'undefined' : (0, _typeof3.default)(option)) === 'object') {
    return option; // {debug, broadcast, etc} (etc my overwrite tr below)
  }
  if (typeof option === 'boolean') {
    // broadcast argument as a true false value, back-end cli will use this shorthand
    return { broadcast: option };
  }
};

function usage(type, definition, Network, account, config) {
  var usage = '';
  var out = function out() {
    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    usage += str + '\n';
  };
  out('CONTRACT');
  out(account);
  out();

  out('FUNCTION');
  out(type);
  out();

  var struct = void 0;
  if (account === 'eosio' || account === 'eosio.token') {
    var _Structs = Structs(Object.assign({ defaults: true, network: Network }, config)),
        structs = _Structs.structs;

    struct = structs[type];

    out('PARAMETERS');
    out(JSON.stringify(definition, null, 4));
    out();

    out('EXAMPLE');
    out(JSON.stringify(struct.toObject(), null, 4));
  } else {
    var cache = config.abiCache.abi(account);
    out('PARAMETERS');
    out(JSON.stringify(schemaFields(cache.schema, type), null, 4));
    out();

    struct = cache.structs[type];
    out('EXAMPLE');
    out(JSON.stringify(struct.toObject(), null, 4));
  }
  if (struct == null) {
    throw TypeError('Unknown type: ' + type);
  }
  return usage;
}

var checkError = function checkError(parentErr, logger, parrentRes) {
  return function (error, result) {
    if (error) {
      if (logger.error) {
        logger.error('error', error);
      }
      parentErr(error);
    } else {
      Promise.resolve(parrentRes(result)).catch(function (error) {
        parentErr(error);
      });
    }
  };
};

function schemaFields(schema, type) {
  var _schema$type = schema[type],
      base = _schema$type.base,
      fields = _schema$type.fields;

  var def = {};
  if (base && base !== '') {
    Object.assign(def, schemaFields(schema, base));
  }
  Object.assign(def, fields);
  return def;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),

/***/ 1278:
/***/ (function(module, exports) {

module.exports = {"_from":"eosjs","_id":"eosjs@15.0.3","_inBundle":false,"_integrity":"sha512-SkQ1YgmVOzyn/iS/k51AE4vz+nydhuk9kKVXCzLGAvVi6trDWO3uP7TLPKQ4ItbUBbATHdWJpNojgq68yI8PSg==","_location":"/eosjs","_phantomChildren":{"bigi":"1.4.2","browserify-aes":"1.2.0","bs58":"4.0.1","bytebuffer":"5.0.1","create-hash":"1.2.0","create-hmac":"1.1.7","ecurve":"1.0.6","randombytes":"2.0.6"},"_requested":{"type":"tag","registry":true,"raw":"eosjs","name":"eosjs","escapedName":"eosjs","rawSpec":"","saveSpec":null,"fetchSpec":"latest"},"_requiredBy":["#DEV:/","#USER"],"_resolved":"https://registry.npmjs.org/eosjs/-/eosjs-15.0.3.tgz","_shasum":"ccd2951e5aa45df2ee3e4180859274847d81a3ed","_spec":"eosjs","_where":"/Users/nikitadementev/Desktop/work/swap.react","author":"","babel":{"presets":["es2015"],"plugins":["syntax-async-functions","transform-regenerator",["transform-runtime",{"polyfill":false,"regenerator":true}]]},"bugs":{"url":"https://github.com/EOSIO/eosjs/issues"},"bundleDependencies":false,"dependencies":{"babel-runtime":"^6.26.0","binaryen":"^37.0.0","create-hash":"^1.1.3","eosjs-api":"6.3.0","eosjs-ecc":"4.0.1","fcbuffer":"2.2.0"},"deprecated":false,"description":"General purpose library for the EOS blockchain.","devDependencies":{"babel-cli":"^6.26.0","babel-core":"^6.26.3","babel-plugin-syntax-async-functions":"^6.13.0","babel-plugin-transform-regenerator":"^6.26.0","babel-plugin-transform-runtime":"^6.23.0","babel-preset-es2015":"^6.24.1","browserify":"^14.4.0","camel-case":"^3.0.0","coveralls":"^3.0.0","eosjs-keygen":"^1.3.2","jsdoc-to-markdown":"^3.0.4","mocha":"^3.4.2","nyc":"^11.4.1"},"files":["README.md","docs","lib"],"homepage":"https://github.com/EOSIO/eosjs#readme","keywords":["EOS","Blockchain"],"license":"MIT","main":"lib/index.js","name":"eosjs","repository":{"type":"git","url":"git+https://github.com/EOSIO/eosjs.git"},"scripts":{"build":"babel --copy-files src --out-dir lib","build_browser":"npm run build && browserify -o lib/eos.js -s Eos lib/index.js","build_browser_test":"npm run build && browserify -o dist/test.js lib/*.test.js","coverage":"nyc --reporter=html npm test","coveralls":"npm run coverage && cat ./coverage/lcov.info | ./node_modules/.bin/coveralls","docs":"jsdoc2md src/format.js > docs/index.md","minimize":"uglifyjs lib/eos.js -o lib/eos.min.js --source-map --compress --mangle","prepublishOnly":"npm run build_browser && npm run test_lib && npm run minimize && npm run docs","test":"mocha --use_strict src/*.test.js","test_lib":"mocha --use_strict lib/*.test.js"},"version":"15.0.3"}

/***/ })

});