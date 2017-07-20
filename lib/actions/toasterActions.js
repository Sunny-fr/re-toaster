"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.addToast = addToast;
exports.removeToast = removeToast;

var _Unique = require("../utils/Unique");

var _Unique2 = _interopRequireDefault(_Unique);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addToast(params) {
    var id = new _Unique2.default().gen();
    var time = new Date().getTime();
    var toast = _extends({}, params, { id: id, time: time, toBeRemoved: false });
    return function (dispatch) {
        dispatch({ type: "ADD_TOAST", payload: { toast: toast } });
    };
}
function removeToast(toastId) {
    return function (dispatch) {
        dispatch({ type: "REMOVE_TOAST", payload: { toastId: toastId } });
    };
}