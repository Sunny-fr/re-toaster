import React from 'react'

import './animations.scss'
import './assets.scss'
import './toast.scss'


function withAnimation (Wrapped) {
    return  (props) => (
        <Wrapped {...props}/>
        // <div className="animated bounce animation-anchor">
        //
        // </div>
    )
}

export const Leaves = withAnimation(({position = 'right'}) => {
    return (<div className={`leaves ${position}`}>
        <div className="leaf"/>
        <div className="leaf"/>
        <div className="leaf"/>
    </div>)
})

export const Background = withAnimation(() => {
    return (<div className="background"/>)
})

export const Buildings = withAnimation(() => {
    return (<div className="buildings">
        <div className="building"/>
        <div className="building"/>
        <div className="building"/>
    </div>)
})
export const Flower = withAnimation(({position = ''}) => {
    return (<div className={`flower ${position}`}>
        <div className="petal"/>
        <div className="petal"/>
        <div className="petal"/>
        <div className="petal"/>
        <div className="petal"/>
        <div className="heart"/>
    </div>)
})

export const Cloud = withAnimation(({position = ''}) => {
    return (<div className={`cloud ${position}`}>
        <div className="part"/>
        <div className="part"/>
        <div className="part"/>
    </div>)
})

export const Bird = withAnimation(({position = ''}) => {
    return (
        <div className={`bird ${position}`}>
            <div className={'wing right'}/>
            <div className={'wing left'}/>
        </div>
    )
})


export const SunSet = withAnimation(() => {
    return (<div className="sunset"/>)
})

export const Sea = withAnimation(() => {
    return (<div className="sea"/>)
})
