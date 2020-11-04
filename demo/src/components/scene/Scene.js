import React, {PureComponent} from 'react'
import {Background, Bird, Buildings, Cloud, Flower, Leaves, Sea, SunSet} from './assets/assets'
import PianoKeyBoard from './piano/PianoKeyBoard'
import Orientation from './orientation/Orientation'
import {ToasterComponent} from '../../lib'
import {myCustomTheme} from './piano/commons'
import Application from '../../layout/ApplicationLayout'


class Scene extends PureComponent {
    render() {
        return (
            <Orientation>
                <ToasterComponent theme={myCustomTheme}/>
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


export default Scene