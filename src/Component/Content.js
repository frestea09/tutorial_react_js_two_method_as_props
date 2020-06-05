import React from 'react'

const Content = props =>{
    return(
        <div>
            <h3>Hello World</h3>
            <button onClick={props.metode}>Say Hello</button>
        </div>
    )
}
export default Content