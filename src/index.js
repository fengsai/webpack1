import "@babel/polyfill"
import React, {Component} from "react"
import ReactDom from "react-dom"

class App extends Component
{
    render (){
        return <div>hello world</div>
    }
    
}

console.log(document.getElementById("root"))

ReactDom.render(<App/>,document.getElementById("root"))

