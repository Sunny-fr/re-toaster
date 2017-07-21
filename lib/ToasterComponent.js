"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ToastComponent = require("./components/ToastComponent");

var _ToastComponent2 = _interopRequireDefault(_ToastComponent);

var _ToasterTheme = require("./components/ToasterTheme");

var _ToasterTheme2 = _interopRequireDefault(_ToasterTheme);

var _reactRedux = require("react-redux");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sortToasts = function sortToasts(a, b) {
    return b.time - a.time;
};

var ToasterComponent = function (_React$Component) {
    _inherits(ToasterComponent, _React$Component);

    function ToasterComponent() {
        _classCallCheck(this, ToasterComponent);

        return _possibleConstructorReturn(this, (ToasterComponent.__proto__ || Object.getPrototypeOf(ToasterComponent)).apply(this, arguments));
    }

    _createClass(ToasterComponent, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                toasts = _props.toasts,
                dispatch = _props.dispatch;

            var items = toasts.sort(sortToasts).map(function (toast, idx) {
                return _react2.default.createElement(_ToastComponent2.default, _extends({ theme: _this2.props.theme, dispatch: dispatch, key: toast.id, idx: idx }, toast));
            });
            return _react2.default.createElement(
                "div",
                null,
                items
            );
        }
    }]);

    return ToasterComponent;
}(_react2.default.Component);

ToasterComponent.propTypes = {
    theme: _propTypes2.default.object
};
ToasterComponent.defaultProps = {
    theme: _ToasterTheme2.default
};

exports.default = (0, _reactRedux.connect)(function (store) {
    return {
        toasts: store.toaster.toasts
    };
})(ToasterComponent);