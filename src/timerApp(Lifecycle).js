import React from 'react'
import ReactDOM from 'react-dom/client'

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={
            date: new Date()
            
        }
    }

componentDidMount(){               //componentDidMount() is called after rendering the DOM elem
                                   //mounts a component
        this.timerId=setInterval(      //timerId is user-defined && setIntervals calls tick() every 1sec
        ()=>this.tick(),1000

    );
}

componentWillUnmount(){           //unmounts a component at the end(i.e. when shifted to new page) to free up space occupied by the component
    clearInterval(this.timerId);

}

tick(){
    this.setState({date:new Date()})      //fetches new date(i.e. time)
}
   

    render(){
   return(
        <div>
            <h1>Have A Great Day!!!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        </div>
    );
}
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock/>);
