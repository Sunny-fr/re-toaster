import React from 'react'
import ToastComponent from "./components/ToastComponent"
import {connect} from 'react-redux'

const sortToasts = (a, b) => b.time - a.time

class ToasterComponent extends React.Component {
    render() {
        const {toasts, dispatch} = this.props
        const items = toasts
            .sort(sortToasts)
            .map((toast, idx) => (
                <ToastComponent dispatch={dispatch} key={toast.id} idx={idx} {...toast}/>)
            )
        return (
            <div>
                {items}
            </div>
        )
    }
}

export default connect((store) => ({
    toasts: store.toaster.toasts
}))(ToasterComponent)
