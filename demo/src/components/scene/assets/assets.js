import React from 'react'

import './assets.scss'

export function Leaves({position = 'right'}) {
    return (<div className={`leaves ${position}`}>
        <div className="leaf"/>
        <div className="leaf"/>
        <div className="leaf"/>
    </div>)
}

export function Background() {
    return (<div className="background"/>)
}

export function Buildings() {
    return (<div className="buildings">
        <div className="building"/>
        <div className="building"/>
        <div className="building"/>
    </div>)
}
export function Flower({position}) {
    return (<div className={`flower ${position}`}>
        <div className="petal"/>
        <div className="petal"/>
        <div className="petal"/>
        <div className="petal"/>
        <div className="petal"/>
        <div className="heart"/>
    </div>)
}

export function Cloud({position}) {
    return (<div className={`cloud ${position}`}>
        <div className="part"/>
        <div className="part"/>
        <div className="part"/>
    </div>)
}

export function Bird({position}) {
    return (
        <div className={`bird ${position}`}>
            <div className={'wing right'}/>
            <div className={'wing left'}/>
        </div>
    )
}

export function SunSet() {
    return (<div className="sunset"/>)
}

export function Sea() {
    return (<div className="sea"/>)
}
