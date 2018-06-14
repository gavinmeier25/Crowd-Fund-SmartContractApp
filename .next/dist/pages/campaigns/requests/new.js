'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

var _layout = require('../../../components/layout');

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/gavinmeier/Projects/kickstart-contract/pages/campaigns/requests/new.js?entry';


var New = function (_Component) {
    (0, _inherits3.default)(New, _Component);

    function New() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, New);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = New.__proto__ || (0, _getPrototypeOf2.default)(New)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            description: '',
            value: '',
            recipient: '',
            loading: false,
            errorMessage: ''
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
                var campaign, _this$state, description, value, recipient, accounts;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                e.preventDefault();

                                campaign = (0, _campaign2.default)(_this.props.address);
                                _this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;

                                _this.setState({ loading: true, errorMessage: '' });

                                _context.prev = 4;
                                _context.next = 7;
                                return _web2.default.eth.getAccounts();

                            case 7:
                                accounts = _context.sent;
                                _context.next = 10;
                                return campaign.methods.createRequest(description, _web2.default.utils.toWei(value), recipient).send({
                                    from: accounts[0]
                                });

                            case 10:
                                console.log('pushing');
                                _routes.Router.pushRoute('/campaigns/' + _this.props.address + '/requests');
                                _context.next = 18;
                                break;

                            case 14:
                                _context.prev = 14;
                                _context.t0 = _context['catch'](4);

                                console.log(_context.t0.message);
                                _this.setState({ errorMessage: _context.t0.message });

                            case 18:
                                _this.setState({ loading: false });

                            case 19:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[4, 14]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(New, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, 'Create Request'), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'Description'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.description,
                onChange: function onChange(e) {
                    return _this3.setState({ description: e.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, 'Value in Ether'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.value,
                onChange: function onChange(e) {
                    return _this3.setState({ value: e.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, 'Recipient'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.recipient,
                onChange: function onChange(e) {
                    return _this3.setState({ recipient: e.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, 'Create')));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var address;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                address = props.query.address;
                                return _context2.abrupt('return', { address: address });

                            case 2:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return New;
}(_react.Component);

exports.default = New;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsIk5ldyIsInN0YXRlIiwiZGVzY3JpcHRpb24iLCJ2YWx1ZSIsInJlY2lwaWVudCIsImxvYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZVJlcXVlc3QiLCJ1dGlscyIsInRvV2VpIiwic2VuZCIsImZyb20iLCJjb25zb2xlIiwibG9nIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsInRhcmdldCIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVEsQUFBUSxBQUFNLEFBQU87O0FBQzdCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUSxBQUFNLEFBQWE7O0FBQzNCLEFBQU8sQUFBWTs7Ozs7Ozs7O0ksQUFFRTs7Ozs7Ozs7Ozs7Ozs7OzBNQUNqQixBO3lCQUFRLEFBQ1MsQUFDYjttQkFGSSxBQUVHLEFBQ1A7dUJBSEksQUFHTyxBQUNYO3FCQUpJLEFBSUssQUFDVDswQixBQUxJLEFBS1U7QUFMVixBQUNKLGlCQVVKLEE7aUdBQVcsaUJBQUEsQUFBTSxHQUFOOzBFQUFBOzs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDUDtrQ0FBQSxBQUFFLEFBRUk7O0FBSEMsMkNBR1Usd0JBQVMsTUFBQSxBQUFLLE1BSHhCLEFBR1UsQUFBb0I7OENBQ0ksTUFKbEMsQUFJdUMsT0FKdkMsQUFJQywwQkFKRCxBQUlDLGFBSkQsQUFJYyxvQkFKZCxBQUljLE9BSmQsQUFJcUIsd0JBSnJCLEFBSXFCLEFBQzVCOztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVMsTUFBTSxjQUx0QixBQUtQLEFBQWMsQUFBNkI7O2dEQUxwQztnREFBQTt1Q0FRb0IsY0FBQSxBQUFLLElBUnpCLEFBUW9CLEFBQVM7O2lDQUExQjtBQVJILG9EQUFBO2dEQUFBO2dEQVNHLEFBQVMsUUFBVCxBQUFpQixjQUFqQixBQUNGLGFBQ0EsY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUZULEFBRUYsQUFBaUIsUUFGZixBQUdGLFdBSEUsQUFJSjswQ0FDTyxTQWROLEFBU0csQUFJQyxBQUNFLEFBQVM7QUFEWCxBQUNKLGlDQUxHOztpQ0FPTjt3Q0FBQSxBQUFRLElBQVIsQUFBWSxBQUNaOytDQUFBLEFBQU8sMEJBQXdCLE1BQUEsQUFBSyxNQUFwQyxBQUEwQyxVQWpCdkM7Z0RBQUE7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBbUJIOzt3Q0FBQSxBQUFRLElBQUksWUFBWixBQUFnQixBQUNoQjtzQ0FBQSxBQUFLLFNBQVMsRUFBQyxjQUFjLFlBcEIxQixBQW9CSCxBQUFjLEFBQW1COztpQ0FFckM7c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0F0QlIsQUFzQlAsQUFBYyxBQUFTOztpQ0F0QmhCO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7Ozs7Ozs7aUNBeUJKO3lCQUNQOzttQ0FDQyxBQUFDOzs4QkFBRDtnQ0FBQSxBQUVJO0FBRko7QUFBQSxhQUFBLGtCQUVJLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxtQ0FBQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFHQSxnQ0FBQSxBQUFDO3VCQUNNLEtBQUEsQUFBSyxNQURaLEFBQ2tCLEFBQ2xCOzBCQUNJLHFCQUFBOzJCQUFLLE9BQUEsQUFBSyxTQUFTLEVBQUMsYUFBYSxFQUFBLEFBQUUsT0FBbkMsQUFBSyxBQUFjLEFBQXVCO0FBSDlDOzs4QkFBQTtnQ0FOUixBQUVJLEFBSUksQUFPSjtBQVBJO0FBQ0EsaUNBTUgsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBR0EsbUNBQUEsQUFBQzt1QkFDTSxLQUFBLEFBQUssTUFEWixBQUNrQixBQUNsQjswQkFDSSxxQkFBQTsyQkFBSyxPQUFBLEFBQUssU0FBUyxFQUFDLE9BQU8sRUFBQSxBQUFFLE9BQTdCLEFBQUssQUFBYyxBQUFpQjtBQUh4Qzs7OEJBQUE7Z0NBakJSLEFBYUksQUFJSSxBQU9KO0FBUEk7QUFDQSxpQ0FNSCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFHQSw4QkFBQSxBQUFDO3VCQUNNLEtBQUEsQUFBSyxNQURaLEFBQ2tCLEFBQ2xCOzBCQUNJLHFCQUFBOzJCQUFLLE9BQUEsQUFBSyxTQUFTLEVBQUMsV0FBVyxFQUFBLEFBQUUsT0FBakMsQUFBSyxBQUFjLEFBQXFCO0FBSDVDOzs4QkFBQTtnQ0E1QlIsQUF3QkksQUFJSSxBQU9KO0FBUEk7QUFDQSxpQ0FNSixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFFBQU8sU0FBUyxLQUFBLEFBQUssTUFBM0MsQUFBaUQ7OEJBQWpEO2dDQW5DSixBQW1DSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx5Q0FBTyxTQUFTLEtBQUEsQUFBSyxNQUF0QixBQUE0QixTQUFTLFNBQXJDOzhCQUFBO2dDQUFBO0FBQUE7ZUF2Q1QsQUFDQyxBQUVJLEFBb0NJLEFBSVY7Ozs7O21IQXpFOEIsQTs7Ozs7aUNBQ2pCO0EsMENBQVksTUFBTSxBLE1BQWxCLEE7a0VBQ0QsRUFBQyxTQUFELEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFWa0IsQTs7a0JBQVosQSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2dhdmlubWVpZXIvUHJvamVjdHMva2lja3N0YXJ0LWNvbnRyYWN0In0=