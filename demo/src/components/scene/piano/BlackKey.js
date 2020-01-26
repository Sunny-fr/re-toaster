import React, {useEffect, useRef, useState} from 'react'
import store from '../../../store'
import {addToast} from '../../../lib'
import themeFactory from './themeFactory'
import {getPosition} from './commons'
//import {playNote, pressKey, releaseKey} from './core/core'

function BlackKey({title = '', note = 'C4', keyChar ='', duration = '8n', controls, pressed= false}) {
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
                className: 'musical-toast black-key',
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
        className={'black-key-placeholder'}>
        <div ref={keyRef}
             onMouseDown={instrumentAPI.press}
             onMouseUp={instrumentAPI.release}
             onMouseLeave={instrumentAPI.release}
             className={`piano-key black-key ${state.pressed && 'key-pressed'}`}>
            <span className="keyboard-shortcut">{keyChar}</span>
        </div>
    </div>)
}

export default BlackKey