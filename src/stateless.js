import React from "react"


const ExComp=(props)=>{                             //this is a functional component
    return <h1>This is a stateless component</h1>
}

class Stateless extends React.Component{            // this is a class component
    render(){
    return  <ExComp />                              // callinf the functional component in the class component (i.e.nesting of component)
    }
  

    
}
export default Stateless;