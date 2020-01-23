import React from 'react'

import './checkbox.scss'
function CheckBox ({checked, toggle}){

    return (
        <div className="checkbox" onClick={() => toggle(!checked)}>
            {checked && (<span className={'animated fadeIn fa fa-check'}/>)}
        </div>
    )
}

export default CheckBox