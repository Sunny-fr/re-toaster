"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var sortToasts = function sortToasts(a, b) {
    return b.time - a.time;
};

function ToasterComponent(_ref) {
    var toasts = _ref.toasts,
        dispatch = _ref.dispatch,
        theme = _ref.theme;

    var items = toasts.sort(sortToasts).map(function (toast, idx) {
        return _react2.default.createElement(_ToastComponent2.default, _extends({ theme: theme, dispatch: dispatch, key: toast.id, idx: idx }, toast));
    });
    return _react2.default.createElement(
        "div",
        null,
        items
    );
}

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