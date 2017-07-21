import React, {Component} from 'react';

/** REDUX **/
import {Provider} from 'react-redux'
import store from './store'
import Application from './layout/ApplicationLayout'
import {ToasterComponent, addToast} from '../../lib'
import {connect} from 'react-redux'


const buttonStyle = {
    lineHeight: '40px',
    margin: 3,
    borderRadius: 3
}


class ExampleComponent extends Component {
    toastSuccess = () => {
        this.props.dispatch(addToast({type: 'success', message: 'success message'}))
    }
    toastDanger = () => {
        this.props.dispatch(addToast({type: 'danger', message: 'error message'}))
    }
    toastWarning = () => {
        this.props.dispatch(addToast({type: 'warning', message: 'warning message'}))
    }
    toastInfo = () => {
        this.props.dispatch(addToast({type: 'info', message: 'info message'}))
    }
    toastCustom = () => {
        this.props.dispatch(addToast({type: 'customToast', message: 'custom toast message'}))
    }

    render() {
        return (<div className="text-center">
            <h1>Hello Toasts !</h1>

            <button style={buttonStyle} className="btn btn-success" onClick={this.toastSuccess}>Toast'hop !</button>
            <button style={buttonStyle} className="btn btn-danger" onClick={this.toastDanger}>Toast'hop !</button>
            <button style={buttonStyle} className="btn btn-warning" onClick={this.toastWarning}>Toast'hop !</button>
            <button style={buttonStyle} className="btn btn-info" onClick={this.toastInfo}>Toast'hop !</button>
            <button style={{...buttonStyle, backgroundColor: '#b35f9e'}} className="btn btn-info" onClick={this.toastCustom}>Toast'hop !</button>


        </div>)
    }
}

const Example = connect()(ExampleComponent)

//optional
const myCustomTheme = {
    delay: 2500,
    animationDelay: 400,
    container: {
        transition: `transform 400ms ease-out, visibility 400ms ease-out, opacity 400ms ease-out, top 400ms ease-out`
    },
    containerColors: {
        customToast: {backgroundColor: '#b35f9e'},
    }
}

function App() {
    return (
        <Provider store={store}>
            <Application>
                <ToasterComponent theme={myCustomTheme}/>
                <Example/>
            </Application>
        </Provider>
    );
}

export default App;
