import React, {PureComponent} from 'react'
import {Background, Bird, Buildings, Cloud, Flower, Leaves, Sea, SunSet} from './assets/assets'
import PianoKeyBoard from './piano/PianoKeyBoard'
import Orientation from './orientation/Orientation'

class Scene extends PureComponent {
    render() {
        return (
            <Orientation>
                <Background/>
                <SunSet/>
                <Sea/>
                <Buildings/>
                <Flower position={'left'}/>
                <Flower/>
                <Leaves/>
                <Leaves position={'left'}/>
                <PianoKeyBoard/>
                <Bird/>
                <Bird position={'left-1'}/>
                <Bird position={'left-2'}/>
                <Cloud />
                <Cloud position={'right'} />
            </Orientation>
        )
    }
}

Scene.propTypes = {}
Scene.defaultProps = {}

export default Scene