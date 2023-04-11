import React from 'react'
import  ReactDOM  from 'react-dom'

// class Books extends React.Component{
//     render(){
//         return <h1>these are the books i have read</h1>
//     }
// }

// let root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Books />);

class Books extends React.Component{
    constructor(){
        super();
        this.person={
            author:"J.K Rowlings"
        }
    }
    render(){
        return <h1>The author of Harry Potter is {this.person.author}</h1>
    }
}

let root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Books />);