import React, {PureComponent} from 'react'
import {debounce} from '../utils/utils'

class Orientation extends PureComponent {
    state = {
        relativeX: 0,
        relativeY: 0,
        keyBoardAnimated: false,
        maxAngle: 25
    }

    constructor(props) {
        super(props)
        this.rotation = React.createRef()
        this.rotate = debounce(this.rotate, 300)
    }

    getRelativePosition = (e) => {
        const bounds = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - bounds.left
        const y = -100 + e.clientY - bounds.top
        const pianoWidth = this.rotation.current.clientWidth
        const pianoHeight = this.rotation.current.clientHeight
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
        const {relativeX, relativeY, keyBoardAnimated, maxAngle} = this.state

        return (
            <div style={{textAlign: 'center'}}>
                <div className="piano-wrapper">
                    <div className={'piano-orientation-listener'}
                         ref={this.rotation}
                         onMouseMove={this.updatePosition}
                    >
                        <div className={`piano ${keyBoardAnimated ? 'keyboard-animated' : ''}`} style={{
                            transform: `
                                translateZ(-1px) rotateX(${-maxAngle * .5 + relativeY * maxAngle}deg) 
                                rotateY(${maxAngle * .5 - relativeX * maxAngle}deg) 
                            `
                        }}>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
    randomPosition(){
        return {
            x: Math.random(),
            y: Math.random()
        }
    }

    rotate = () => {
        const p = this.randomPosition()
        this.setState({
            relativeX: p.x, relativeY: p.y, keyBoardAnimated: true
        })
        if (this.keyboardAnimatedTimeout) clearTimeout(this.keyboardAnimatedTimeout)
        this.keyboardAnimatedTimeout = setTimeout(() => {
            this.setState({
                keyBoardAnimated: false
            })
        }, 250)
    }

    componentDidMount() {
        window.addEventListener('keydown', this.rotate)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', null)
        if (this.keyboardAnimatedTimeout) clearTimeout(this.keyboardAnimatedTimeout)
    }
}

Orientation.propTypes = {}
Orientation.defaultProps = {}

export default Orientation