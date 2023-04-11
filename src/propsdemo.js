import React from 'react'
import ReactDom from 'react-dom/client'

class A extends React.Component{
    render(){
        return(
        <h1>The manufacturer of my bike is {this.props.pack.man} and model is{this.props.pack.mod}</h1>)
    }
}

class B extends React.Component{
    render(){
        const bike={
            man:"suzuki",
            mod:"buza"
        }
        return(
            <>
                <h1>MY RIDE</h1>
                <A pack={bike} />
            </>
        )
    }
}


const root=ReactDom.createRoot(document.getElementById('root'));
root.render(<B />);
