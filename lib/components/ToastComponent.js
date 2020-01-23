'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _toasterActions = require('../actions/toasterActions');

var _ToasterTheme = require('./ToasterTheme');

var _ToasterTheme2 = _interopRequireDefault(_ToasterTheme);

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOAST_ICON_MAP = {
    success: 'fa fa-check',
    error: 'fa fa-times',
    info: 'fa fa-info-circle'
};

var ToastComponent = function (_Component) {
    _inherits(ToastComponent, _Component);

    function ToastComponent() {
        _classCallCheck(this, ToastComponent);

        var _this = _possibleConstructorReturn(this, (ToastComponent.__proto__ || Object.getPrototypeOf(ToastComponent)).call(this));

        _this.state = { status: 'idle' };
        return _this;
    }

    _createClass(ToastComponent, [{
        key: 'getTheme',
        value: function getTheme() {
            return (0, _deepmerge2.default)(_ToasterTheme2.default, this.props.theme);
        }
    }, {
        key: 'render',
        value: function render() {
            var status = this.state.status;
            var _props = this.props,
                type = _props.type,
                icon = _props.icon,
                className = _props.className,
                idx = _props.idx,
                message = _props.message,
                toBeRemoved = _props.toBeRemoved;

            var theme = this.getTheme();
            var toastClassName = type;
            var iconClass = type && TOAST_ICON_MAP[type] ? TOAST_ICON_MAP[type] : icon;
            var css = (toBeRemoved ? 'fadeOutDown' : 'fadeInUp') + " " + toastClassName + " " + className;
            var style = _extends({}, theme.container, {
                top: 80 + 65 * idx + 'px'
            }, theme.containerColors[type], theme.containerTransitions[status] || {});
            return _react2.default.createElement(
                'div',
                { className: css, style: style },
                _react2.default.createElement(
                    'div',
                    { style: _extends({}, theme.icon) },
                    _react2.default.createElement('i', { className: iconClass })
                ),
                _react2.default.createElement(
                    'div',
                    { style: theme.messageContainer },
                    _react2.default.createElement('p', { style: theme.message, children: message })
                )
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var _getTheme = this.getTheme(),
                delay = _getTheme.delay,
                animationDelay = _getTheme.animationDelay;

            setTimeout(function () {
                return _this2.setState({ status: 'opening' });
            }, 20);
            setTimeout(function () {
                return _this2.setState({ status: 'closing' });
            }, delay - animationDelay);
            setTimeout(function () {
                return _this2.props.dispatch((0, _toasterActions.removeToast)(_this2.props.id));
            }, delay);
        }
    }]);

    return ToastComponent;
}(_react.Component);

ToastComponent.propTypes = {
    idx: _propTypes2.default.number,
    icon: _propTypes2.default.string,
    message: _propTypes2.default.string,
    type: _propTypes2.default.string,
    className: _propTypes2.default.string
};

ToastComponent.defaultProps = {
    idx: 1,
    icon: 'info',
    message: 'Hello',
    type: 'info',
    className: ''
};

exports.default = ToastComponent;