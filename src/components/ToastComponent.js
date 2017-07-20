import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {removeToast} from "../actions/toasterActions"
import theme from './ToasterTheme'

const TOAST_DELAY = 2500
const ANIMATION_DELAY = 500

const TOAST_ICON_MAP = {
    success: 'fa fa-check',
    error: 'fa fa-times',
    info: 'fa fa-info-circle'
}

class ToastComponent extends Component {
    constructor() {
        super()
        this.state = {
            status: 'idle'
        }
    }

    getMarkup() {
        return this.props.message
    }

    render() {
        const {status} = this.state
        const {type, icon, className, idx, toBeRemoved} = this.props
        const toastClassName = type
        let iconClass = icon || TOAST_ICON_MAP[type]
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
                <p style={theme.message} dangerouslySetInnerHTML={{__html: this.getMarkup()}}/>
            </div>
        </div>)
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({status: 'opening'})
        }, 20)
        setTimeout(() => {
            this.setState({status: 'closing'})
        }, TOAST_DELAY - ANIMATION_DELAY)
        setTimeout(() => {
            this.props.dispatch(removeToast(this.props.id))
        }, TOAST_DELAY)
    }

}

ToastComponent
    .propTypes = {
    idx: PropTypes.number,
    icon: PropTypes.string,
    message: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string
};

ToastComponent
    .defaultProps = {
    idx: 1,
    icon: 'info',
    message: 'Hello',
    type: 'info',
    className: ''
};

export default ToastComponent;
