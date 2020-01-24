import React from 'react'
import './common.css'
export default class ApplicationLayout extends React.Component {
    render() {
        return (<div className="core">
            <div className="container">
                {this.props.children}
            </div>
        </div>)
    }
}
