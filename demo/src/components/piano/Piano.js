import React, {PureComponent, useState} from 'react'
import PropTypes from 'prop-types'
import Tone  from "tone";
import './piano.scss'
import './assets.scss'
import {addToast} from 're-toaster'
import store from '../../store'



function playNote({note = 'C4', duration = '8n', callback}){
    const sound = new Tone.Synth().toMaster();
    sound.triggerAttackRelease(note, duration);
    if (callback) callback()
}
function WhiteKey({title='',note = 'C4', duration = '8n'}) {
    const [state, setState] = useState({
        pressed: false
    })
    const press = () => {
        setState({pressed: true})
        playNote({note, duration})
        store.dispatch(addToast({type: 'musicalNote', className:'musical-toast', message: title, icon: 'fab fa-itunes-note'}))
    }
    const release = () => setState({pressed: false})
    return (<div
        onMouseDown={press} onMouseUp={release} onMouseLeave={release}
        className={`piano-key white-key ${state.pressed && 'key-pressed'}`}/>)
}

function BlackKey({title= '', note = 'C4', duration = '8n'}) {
    const [state, setState] = useState({
        pressed: false
    })
    const press = () => {
        setState({pressed: true})
        playNote({note, duration})
        store.dispatch(addToast({type: 'musicalNote',className:'musical-toast', message: title, icon: 'fab fa-itunes-note'}))
    }
    const release = () => setState({pressed: false})


    return (<div className={'black-key-placeholder'}>
        <div onMouseDown={press} onMouseUp={release} onMouseLeave={release}
             className={`piano-key black-key ${state.pressed && 'key-pressed'}`}/>
    </div>)
}

function PianoKeyBoard(){
    return(<div className="piano-keys">
        <WhiteKey title={'Fa'} note={'F4'}/>
        <BlackKey title={'Fa #'} note={'F#4'}/>
        <WhiteKey title={'Sol'} note={'G4'}/>
        <BlackKey title={'Sol #'} note={'G#4'}/>
        <WhiteKey title={'La'} note={'A4'}/>
        <BlackKey title={'La #'} note={'A#4'}/>
        <WhiteKey title={'Si'} note={'B4'}/>
        <WhiteKey title={'Do'} note={'C5'}/>
        <BlackKey title={'Do #'} note={'C#5'}/>
        <WhiteKey title={'Ré'} note={'D5'}/>
        <BlackKey title={'Ré #'} note={'D#5'}/>
        <WhiteKey title={'Mi'} note={'E5'}/>
    </div>)
}

function Leaves({position= 'right'}) {
    return (<div className={`leaves ${position}`}>
        <div className="leaf"/>
        <div className="leaf"/>
        <div className="leaf"/>
    </div>)
}
function Background(){
    return(<div className="background">

    </div>)
}
function Bird({position}) {
    return (
        <div className={`bird ${position}`}>
            <div className={"wing -right"}/>
            <div className={"wing -left"}/>
        </div>
    )
}
function SunSet(){
    return(<div className="sunset">

    </div>)
}
function Sea(){
    return(<div className="sea">

    </div>)
}

class Piano extends PureComponent {
    state = {
        relativeX: 0,
        relativeY: 0
    }

    constructor(props) {
        super(props)
        this.piano = React.createRef()
    }

    getRelativePosition = (e) => {
        const bounds = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - bounds.left
        const y = -100 + e.clientY - bounds.top
        const pianoWidth = this.piano.current.clientWidth
        const pianoHeight = this.piano.current.clientHeight
        return ({
            x: x / pianoWidth,
            y: y / pianoHeight
        })
    }

    updatePosition = (e) => {
        const p = this.getRelativePosition(e)
        this.setState({
            relativeX: p.x, relativeY: p.y
        })
    }

    render() {
        const {relativeX, relativeY} = this.state
        const maxAngle = 35

        return (
            <div style={{textAlign: 'center'}}>
                <div className="piano-wrapper">
                    <div className={'piano-orientation-listener'}
                         ref={this.piano}
                         onMouseMove={this.updatePosition}
                    >
                        <div className="piano" style={{
                            //transform: ` translateZ(1px) rotateX(0deg) rotateY(75deg) `
                            transform: `
                        translateZ(-1px) rotateX(${-maxAngle*.5 + relativeY * maxAngle}deg) 
                        rotateY(${maxAngle*.5 - relativeX * maxAngle}deg) 
                        `
                        }}>
                            <Background />
                            <SunSet/>
                            <Sea/>
                            <Leaves/>
                            <Leaves position={'left'}/>
                            <PianoKeyBoard />
                            <Bird />
                            <Bird position={'left-1'} />
                            <Bird position={'left-2'} />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

Piano.propTypes = {}
Piano.defaultProps = {}

export default Piano
