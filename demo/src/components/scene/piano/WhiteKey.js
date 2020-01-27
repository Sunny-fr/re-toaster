import React, {useState, useEffect, useRef} from 'react'
import store from '../../../store'
import {addToast} from '../../../lib'
import themeFactory from './themeFactory'
import {getPosition} from './commons'

//import {playNote, pressKey, releaseKey} from './core/core'



function WhiteKey({title = '', note = 'C4', keyChar = '', duration = '8n', controls, pressed = false}) {
    const [state, setState] = useState({
        pressed: false
    })

    const keyRef = useRef(null)

    const instrumentAPI = {
        press: () => {
            setState({pressed: true})
            controls.press()
            const position = getPosition(keyRef.current)
            store.dispatch(addToast({
                type: 'musicalNote',
                className: 'musical-toast white-key',
                message: title,
                icon: 'fab fa-itunes-note',
                theme: themeFactory(position)
            }))
        },
        release: () => {
            setState({pressed: false})
            controls.release()
        }
    }

    useEffect(() => {
        if (pressed) {
            instrumentAPI.press()
        } else {
            instrumentAPI.release()
        }
    }, [pressed])


    return (<div
        ref={keyRef}
        onTouchStart={instrumentAPI.press}
        onTouchEnd={instrumentAPI.release}
        onTouchCancel={instrumentAPI.release}
        onMouseDown={instrumentAPI.press}
        onMouseUp={instrumentAPI.release}
        onMouseLeave={instrumentAPI.release}
        className={`piano-key white-key ${state.pressed && 'key-pressed'}`}>
        <span className="keyboard-shortcut">{keyChar}</span>
    </div>)
}

export default WhiteKey