import React from 'react'

export default props => {
    return (
        <div>
            <button onClick={props.onRem}>-</button>
            <button onClick={props.onAdd}>+</button>
        </div>
    )
}