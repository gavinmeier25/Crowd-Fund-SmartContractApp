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

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/gavinmeier/Projects/kickstart-contract/components/requestRow.js';


var RequestRow = function (_Component) {
  (0, _inherits3.default)(RequestRow, _Component);

  function RequestRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loading: false,
      errorMessage: '',
      loadingFinal: false
    }, _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              campaign = (0, _campaign2.default)(_this.props.address);
              _context.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context.sent;

              _this.setState({ loading: true, errorMessage: '' });
              _context.prev = 5;
              _context.next = 8;
              return campaign.methods.approveRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 8:
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context['catch'](5);

              _this.setState({ errorMessage: _context.t0.message });

            case 13:
              _this.setState({ loading: false });

            case 14:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2, [[5, 10]]);
    })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              campaign = (0, _campaign2.default)(_this.props.address);
              _context2.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context2.sent;

              _this.setState({ loadingFinal: true, errorMessage: '' });
              _context2.prev = 5;
              _context2.next = 8;
              return campaign.methods.finalizeRequest(_this.props.address).send({
                from: accounts[0]
              });

            case 8:
              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2['catch'](5);

              _this.setState({ errorMessage: _context2.t0.message });

            case 13:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[5, 10]]);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestRow, [{
    key: 'render',
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;
      var _props = this.props,
          id = _props.id,
          request = _props.request,
          approversCount = _props.approversCount;

      var readytoFinalize = request.approvalCount > request.approversCount / 2;
      return _react2.default.createElement(Row, { disabled: request.complete, positive: readytoFinalize && !request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, ' ', id, ' '), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, ' ', request.description, ' '), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, ' ', request.recipient), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _web2.default.utils.fromWei(request.value, 'ether')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, request.approvalCount, '/', approversCount), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, {
        color: 'green',
        basic: true,
        onClick: this.onApprove,
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, 'Approve')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, {
        color: 'teal',
        basic: true,
        onClick: this.onFinalize,
        loading: this.state.loadingFinal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, 'Finalize')));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIlRhYmxlIiwiTWVzc2FnZSIsIndlYjMiLCJDYW1wYWlnbiIsIlJlcXVlc3RSb3ciLCJzdGF0ZSIsImxvYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nRmluYWwiLCJvbkFwcHJvdmUiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJzZXRTdGF0ZSIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJtZXNzYWdlIiwib25GaW5hbGl6ZSIsImZpbmFsaXplUmVxdWVzdCIsIlJvdyIsIkNlbGwiLCJyZXF1ZXN0IiwiYXBwcm92ZXJzQ291bnQiLCJyZWFkeXRvRmluYWxpemUiLCJhcHByb3ZhbENvdW50IiwiY29tcGxldGUiLCJkZXNjcmlwdGlvbiIsInJlY2lwaWVudCIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVEsQUFBTyxBQUFPOztBQUN0QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFjOzs7Ozs7Ozs7SSxBQUVBOzs7Ozs7Ozs7Ozs7Ozs7b04sQUFDbkI7ZUFBUSxBQUNHLEFBQ1Q7b0JBRk0sQUFFUSxBQUNkO29CQUhNLEFBR1EsQTtBQUhSLEFBQ04sYUFLRixBLHFGQUFZLG1CQUFBO29CQUFBO29FQUFBO2tCQUFBOzJDQUFBO2lCQUNKO0FBREkseUJBQ08sd0JBQVMsTUFBQSxBQUFLLE1BRHJCLEFBQ08sQUFBb0I7OEJBRDNCO3FCQUVhLGNBQUEsQUFBSyxJQUZsQixBQUVhLEFBQVM7O2lCQUExQjtBQUZJLGtDQUdWOztvQkFBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVMsTUFBTSxjQUhuQixBQUdWLEFBQWMsQUFBNkI7OEJBSGpDOzhCQUFBOzhCQUtKLEFBQVMsUUFBVCxBQUFpQixlQUFlLE1BQUEsQUFBSyxNQUFyQyxBQUEyQyxJQUEzQyxBQUErQztzQkFDN0MsU0FORSxBQUtKLEFBQW9ELEFBQ2xELEFBQVM7QUFEeUMsQUFDeEQsZUFESTs7aUJBTEk7OEJBQUE7QUFBQTs7aUJBQUE7OEJBQUE7OENBU1I7O29CQUFBLEFBQUssU0FBUyxFQUFDLGNBQWMsWUFUckIsQUFTUixBQUFjLEFBQXFCOztpQkFFckM7b0JBQUEsQUFBSyxTQUFTLEVBQUMsU0FYTCxBQVdWLEFBQWMsQUFBUzs7aUJBWGI7aUJBQUE7OEJBQUE7O0FBQUE7K0JBQUE7QSxlQWFaLEEsc0ZBQWEsb0JBQUE7b0JBQUE7c0VBQUE7a0JBQUE7NkNBQUE7aUJBQ0w7QUFESyx5QkFDTSx3QkFBUyxNQUFBLEFBQUssTUFEcEIsQUFDTSxBQUFvQjsrQkFEMUI7cUJBRVksY0FBQSxBQUFLLElBRmpCLEFBRVksQUFBUzs7aUJBQTFCO0FBRkssbUNBR1g7O29CQUFBLEFBQUssU0FBUyxFQUFDLGNBQUQsQUFBZSxNQUFNLGNBSHhCLEFBR1gsQUFBYyxBQUFtQzsrQkFIdEM7K0JBQUE7OEJBS0gsQUFBUyxRQUFULEFBQWlCLGdCQUFnQixNQUFBLEFBQUssTUFBdEMsQUFBNEMsU0FBNUMsQUFBcUQ7c0JBQ25ELFNBTkMsQUFLSCxBQUEwRCxBQUN4RCxBQUFTO0FBRCtDLEFBQzlELGVBREk7O2lCQUxHOytCQUFBO0FBQUE7O2lCQUFBOytCQUFBO2dEQVNUOztvQkFBQSxBQUFLLFNBQVMsRUFBQyxjQUFjLGFBVHBCLEFBU1QsQUFBYyxBQUFxQjs7aUJBVDFCO2lCQUFBOytCQUFBOztBQUFBO2dDQUFBO0E7Ozs7OzZCQVlKO1VBQUEsQUFDQSxNQURBLEFBQ2MsdUJBRGQsQUFDQTtVQURBLEFBQ0ssT0FETCxBQUNjLHVCQURkLEFBQ0s7bUJBQzJCLEtBRmhDLEFBRXFDO1VBRnJDLEFBRUEsWUFGQSxBQUVBO1VBRkEsQUFFSSxpQkFGSixBQUVJO1VBRkosQUFFYSx3QkFGYixBQUVhLEFBQ3BCOztVQUFNLGtCQUFrQixRQUFBLEFBQVEsZ0JBQWdCLFFBQUEsQUFBUSxpQkFBeEQsQUFBeUUsQUFDekU7NkJBQ0csY0FBRCxPQUFLLFVBQVUsUUFBZixBQUF1QixVQUFVLFVBQVUsbUJBQW1CLENBQUMsUUFBL0QsQUFBdUU7b0JBQXZFO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNHLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFRLEtBQVIsSUFERixBQUNFLEFBQ0Esc0JBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQVEsYUFBUixBQUFnQixhQUZsQixBQUVFLEFBQ0Esc0JBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQVEsYUFIVixBQUdFLEFBQWdCLEFBQ2hCLDRCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLHVCQUFPLEFBQUssTUFBTCxBQUFXLFFBQVEsUUFBbkIsQUFBMkIsT0FKcEMsQUFJRSxBQUFPLEFBQWtDLEFBQ3pDLDJCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLGlCQUFBLEFBQWUsZUFBZ0IsS0FMakMsQUFLRSxBQUNBLGlDQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0k7QUFESjtBQUFBLGlCQUNJLEFBQVEsV0FBUixBQUFtQix1QkFDckIsQUFBQztlQUFELEFBQ1EsQUFDTjtlQUZGLEFBR0U7aUJBQVMsS0FIWCxBQUdnQixBQUNkO2lCQUFTLEtBQUEsQUFBSyxNQUpoQixBQUlzQjs7b0JBSnRCO3NCQUFBO0FBQUE7QUFDRSxPQURGLEVBUkosQUFNRSxBQUVFLEFBVUYsNkJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsaUJBQ0csQUFBUSxXQUFSLEFBQW1CLHVCQUNwQixBQUFDO2VBQUQsQUFDUSxBQUNOO2VBRkYsQUFHRTtpQkFBUyxLQUhYLEFBR2dCLEFBQ2Q7aUJBQVMsS0FBQSxBQUFLLE1BSmhCLEFBSXNCOztvQkFKdEI7c0JBQUE7QUFBQTtBQUNFLE9BREYsRUFyQk4sQUFDRSxBQWtCRSxBQUVFLEFBWVA7Ozs7O0FBckVxQyxBOztrQkFBbkIsQSIsImZpbGUiOiJyZXF1ZXN0Um93LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9nYXZpbm1laWVyL1Byb2plY3RzL2tpY2tzdGFydC1jb250cmFjdCJ9