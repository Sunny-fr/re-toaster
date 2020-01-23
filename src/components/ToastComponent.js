import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {removeToast} from "../actions/toasterActions"
import baseTheme from './ToasterTheme'
import deepmerge from 'deepmerge'



const TOAST_ICON_MAP = {
    success: 'fa fa-check',
    error: 'fa fa-times',
    info: 'fa fa-info-circle'
}


class ToastComponent extends Component {
    constructor() {
        super()
        this.state = {status: 'idle'}
    }

    getTheme (){
        return deepmerge(baseTheme, this.props.theme)
    }

    render() {
        const {status} = this.state
        const {type, icon, className, idx, message, toBeRemoved} = this.props
        const theme = this.getTheme()
        const toastClassName = type
        let iconClass = type && TOAST_ICON_MAP[type] ? TOAST_ICON_MAP[type] : icon
        let css = (toBeRemoved ? 'fadeOutDown' : 'fadeInUp') + " " + toastClassName + " " + className
        let style = {
            ...theme.container,
            top: 80 + (65 * idx) + 'px',
            ...theme.containerColors[type],
            ...(theme.containerTransitions[status] || {} )
        }
        return (<div className={css} style={style}>
            <div style={{...theme.icon}}>
                <i className={iconClass}/>
            </div>
            <div style={theme.messageContainer}>
                <p style={theme.message} children={message}/>
            </div>
        </div>)
    }

    componentDidMount() {
        const  {delay, animationDelay} = this.getTheme()
        setTimeout(() => this.setState({status: 'opening'}), 20)
        setTimeout(() => this.setState({status: 'closing'}), delay - animationDelay)
        setTimeout(() => this.props.dispatch(removeToast(this.props.id)), delay)
    }

}

ToastComponent.propTypes = {
    idx: PropTypes.number,
    icon: PropTypes.string,
    message: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string
};

ToastComponent.defaultProps = {
    idx: 1,
    icon: 'info',
    message: 'Hello',
    type: 'info',
    className: ''
};

export default ToastComponent;
