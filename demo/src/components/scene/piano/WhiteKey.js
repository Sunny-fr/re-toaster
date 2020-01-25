import React, {useState, useEffect} from 'react'
import store from '../../../store'
import {addToast} from '../../../lib'
//import {playNote, pressKey, releaseKey} from './core/core'

function WhiteKey({title = '', note = 'C4', keyChar= '',duration = '8n', controls, pressed=false}) {
    const [state, setState] = useState({
        pressed: false
    })
    const press = () => {
        setState({pressed: true})
        //playNote({note, duration})
        //pressKey({note})
        controls.press()
        store.dispatch(addToast({
            type: 'musicalNote',
            className: 'musical-toast',
            message: title,
            icon: 'fab fa-itunes-note'
        }))
    }
    const release = () =>{
        setState({pressed: false})
        controls.release()
    }

    useEffect(() => {
        if (pressed) {
            press()
        } else {
            release()
        }
    }, [pressed])

    return (<div
        onMouseDown={press} onMouseUp={release} onMouseLeave={release}
        className={`piano-key white-key ${state.pressed && 'key-pressed'}`}>
        <span className="keyboard-shortcut">{keyChar}</span>
    </div>)
}

export default WhiteKey