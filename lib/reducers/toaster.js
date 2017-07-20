"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var defaultState = {
    toasts: []
};

function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments[1];


    switch (action.type) {
        case "ADD_TOAST":
            {
                return _extends({}, state, {
                    toasts: state.toasts.concat(action.payload.toast)
                });
            }
        case "REMOVE_TOAST":
            {
                return _extends({}, state, {
                    toasts: state.toasts.filter(function (toast) {
                        return toast.id !== action.payload.toastId;
                    })
                });
            }
        case "TO_BE_REMOVED_TOAST":
            {

                var toast = _extends({}, state.toasts.find(function (toast) {
                    return toast.id === action.payload.toastId;
                }), {
                    toBeRemoved: true
                });

                return _extends({}, state, {
                    toasts: state.toasts.filter(function (toast) {
                        return toast.id !== action.payload.toastId;
                    }).concat(toast)
                });
            }
        default:
            return state;

    }
}