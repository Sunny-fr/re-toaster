import React from 'react'
//import PropTypes from 'prop-types'
import './piano.scss'
import {KEYBOARD_KEYS} from './constants'
import BlackKey from './BlackKey'
import WhiteKey from './WhiteKey'
import {keyBoardKey} from './core/core'


class PianoKeyBoard extends React.PureComponent {
    state = {
        keys: {}
    }
    render() {
        const {keys} = this.state
        return (
            <div className="piano-keys">
                {Object.values(keys).map(key => {
                    const Key = key.tone === 'semi' ? BlackKey : WhiteKey
                    return (
                        <Key {...key} key={key.id}/>
                    )
                })}
            </div>
        )
    }

    setUpKeys = () => {
        const keyMapping = KEYBOARD_KEYS.reduce((s, k) => {
            return {
                ...s,
                [k.keyChar]: {
                    ...k,
                    pressed: false,
                    controls: keyBoardKey({note: k.note})
                }
            }
        }, {})
        this.setState({
            keys: keyMapping
        })
    }

    updateStatus = (e, type) => {
        const { keys } = this.state
        const index = e.key
        const matched = keys[index]
        if (!keys[index]) {
            return
        }
        this.setState({
            keys: {
                ...this.state.keys,
                [index]: {
                    ...matched,
                    pressed: type === 'keydown'
                }
            }
        })
    }

    componentDidMount() {
        this.setUpKeys()
        window.addEventListener('keydown', (e) => this.updateStatus(e, 'keydown'))
        window.addEventListener('keyup', (e) => this.updateStatus(e, 'keyup'))
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', null)
        window.removeEventListener('keyup', null)
    }
}

export default PianoKeyBoard

