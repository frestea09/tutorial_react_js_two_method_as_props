import React from 'react'
import Content from './Component/Content'
class App extends React.Component{
    constructor(){
        super()
        this.state = {
            name : 'ilman'
        }
        this.sayHello = this.sayHello.bind(this)
    }
    sayHello(){
        alert('Hello For Parrent')
    }
    render(){
        return(
            <div className='App'>
                <Content metode = {this.sayHello}/>
            </div>
        )
    }
}
export default App