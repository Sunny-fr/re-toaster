import React, {PureComponent} from 'react'

/** REDUX **/
import {Provider} from 'react-redux'
import store from './store'
import Application from './layout/ApplicationLayout'
import {ToasterComponent, addToast} from './lib'


import {connect} from 'react-redux'
import Title from './layout/components/title/Title'
import CheckBox from './layout/components/checkbox/CheckBox'
import Scene from './components/scene/Scene'


const buttonStyle = {
    lineHeight: '40px',
    margin: 3,
    borderRadius: 3,
}






class ExampleComponent extends PureComponent {
    state = {
        checked: false
    }
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
        this.props.dispatch(addToast({type: 'customToast', className:'toast-custom', icon: 'fa fa-robot', message: 'custom toast message'}))
    }

    rainbow = (fn) => {
        this.rainbowInterval = setInterval(fn, 40)
    }
    rainbowOver = () => {
        if (this.rainbowInterval) {
            clearInterval(this.rainbowInterval)
        }
    }

    rainbowToast = (fn) => {
        if (this.state.checked) {
            this.rainbow(fn)
        }
    }

    render() {

        return (<div className="text-center">
            <button style={buttonStyle} onMouseEnter={() => this.rainbowToast(this.toastSuccess)}
                    onMouseLeave={this.rainbowOver} className="btn btn-success" onClick={this.toastSuccess}>Toast'hop !
            </button>
            <button style={buttonStyle} onMouseEnter={() => this.rainbowToast(this.toastDanger)}
                    onMouseLeave={this.rainbowOver} className="btn btn-danger" onClick={this.toastDanger}>Toast'hop !
            </button>
            <button style={buttonStyle} onMouseEnter={() => this.rainbowToast(this.toastWarning)}
                    onMouseLeave={this.rainbowOver} className="btn btn-warning" onClick={this.toastWarning}>Toast'hop !
            </button>
            <button style={buttonStyle} onMouseEnter={() => this.rainbowToast(this.toastInfo)}
                    onMouseLeave={this.rainbowOver} className="btn btn-info" onClick={this.toastInfo}>Toast'hop !
            </button>
            <button style={{...buttonStyle, backgroundColor: '#b35f9e'}}
                    onMouseEnter={() => this.rainbowToast(this.toastCustom)} onMouseLeave={this.rainbowOver}
                    className="btn btn-info" onClick={this.toastCustom}>Toast'hop !
            </button>

            <CheckBox checked={this.state.checked} toggle={(status) => this.setState({checked: status})} />


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
        customToast: {
            backgroundColor: '#b35f9e',
            right: 100
        },
        musicalNote: {
            "fontFamily":
                "'Corben', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif",

            backgroundColor: '#b35f9e',
            right: 100,
        },
    }
}

function App() {
    return (
        <Provider store={store}>
            <Application>
                <ToasterComponent theme={myCustomTheme}/>
                <Title>Hello Toasts !</Title>
                <Example/>
                <Scene />
            </Application>
        </Provider>
    )
}

export default App
