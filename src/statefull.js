import React from "react"


class Example extends React.Component{
    constructor(props) {                 //props are used to receive parameters when components are called
            super(props);                // use super(props) while using constructors 
        this.state={                     //state is a built-in object of componnent,hence declared as object
            info : 'hello son'
        }
        
    }

    changeinfo=()=>{                             // function ton change state
        this.setState({info:'hello magane!'})    //setState is a method to change the state obj info
    }
    render(){
        return (
            <div>
            <h1>{this.props.mssg}</h1> 
            <h2>{this.state.info}</h2>
            <button type="button" onclick={this.changeinfo}>Click Me!</button> 
            </div>
        )                                           //onClick not working when exported
    }


    
}

class Statefull extends React.Component{
    render(){
        return (<>
            <Example mssg="Im your father" />
            <Example mssg="im your granddad" />
            </>
        )
    }
}

export default Statefull;