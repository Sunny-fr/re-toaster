'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var icon_message_commons = {
    float: 'left',
    minHeight: '60px',
    lineHeight: '60px'
};
var theme = {
    delay: 2500,
    animationDelay: 400,
    container: {
        padding: 0,
        backgroundColor: '#333',
        position: 'fixed',
        top: '60px',
        right: '80px',
        borderRadius: '3px',
        width: '300px',
        color: '#FFF',
        zIndex: 1050,
        visibility: 'hidden',
        boxShadow: '0 0 10px rgba(0, 0, 0, .3)',
        opacity: 0,
        transform: 'translate(0, 80px)',
        transition: 'transform 400ms ease-out, visibility 400ms ease-out, opacity 400ms ease-out, top 400ms ease-out'
    },
    containerTransitions: {
        opening: {
            opacity: 1,
            visibility: 'visible',
            transform: 'translate(0, 0)'
        },
        closing: {
            opacity: 0,
            visibility: 'hidden',
            transform: 'translate(0, 80px)'
        }
    },
    containerColors: {
        success: { backgroundColor: '#7CB342' },
        danger: { backgroundColor: '#EF5350' },
        warning: { backgroundColor: '#FDD835', color: '#333' },
        info: { backgroundColor: '#2196F3' }
    },
    icon: _extends({}, icon_message_commons, {
        width: '60px',
        textAlign: 'center',
        fontSize: '20px',
        borderRight: '1px solid rgba(255, 255, 255, .2)'
    }),
    messageContainer: _extends({}, icon_message_commons, {
        width: '240px'
    }),
    message: {
        display: 'inline-block',
        verticalAlign: 'middle',
        lineHeight: '20px',
        margin: 0,
        padding: '0 0 0 20px'
    }

};
exports.default = theme;