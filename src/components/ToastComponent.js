import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {removeToast} from "../actions/toasterActions"
import baseTheme from './ToasterTheme'
import deepmerge from 'deepmerge'



const TOAST_ICON_MAP = {
    success: 'fa fa-check',
    error: 'fa fa-exclamation-triangle',
    info: 'fa fa-info-circle'
}


class ToastComponent extends Component {
    constructor() {
        super()
        this.state = {status: 'idle'}
    }

    getTheme (){
        const base = deepmerge(baseTheme, this.props.baseTheme)
        if (this.props.theme) return deepmerge(base, this.props.theme)
        return base
    }

    getStyle(){
        const {status} = this.state
        const theme = this.getTheme()
        const {type, idx} = this.props
        const top = theme.base.top + (theme.base.increment * idx)
        return {
            ...theme.container,
            top: top + 'px',
            ...theme.containerColors[type],
            ...(theme.containerTransitions[status] || {} )
        }
    }

    render() {
        const {type, icon, className, message, toBeRemoved} = this.props
        const theme = this.getTheme()
        const toastClassName = type
        const iconClass = type && TOAST_ICON_MAP[type] ? TOAST_ICON_MAP[type] : icon
        const css = (toBeRemoved ? 'fadeOutDown' : 'fadeInUp') + " " + toastClassName + " " + className
        const style = this.getStyle()

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
