import React from 'react'
 

export default props => (
    <div>
        {/* {React.Children.map(props.children, child => {
            return React.cloneElement(child, props)
        })} */}
        {props.children.map((child, i) => {
            return React.cloneElement(child, {...props, key: i})
        })}
    </div>
)