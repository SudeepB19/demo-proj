import React from 'react'
import ReactDOM from 'react-dom/client'

class Books extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name : 'Tommy Shelby',
            action : 'kill a man'
        }
    }

    changecharacter=()=>{
        this.setState({name:'Arthur Shelby', action:'save a man'});
    }

    render(){
        return(
            <>
                <h1>My name is {this.state.name}</h1>
                <h2>And today I'm going to {this.state.action}</h2>
                <button type="button" onClick={this.changecharacter}>BANG!</button>
            </>
        )
    }
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Books />);