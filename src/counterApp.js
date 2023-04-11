import React from 'react'
import  ReactDOM from 'react-dom/client'

let numb=0;

const add=()=>{
    numb++;
    console.log("+1 clicked & count=",numb,"thanks ");
    renderApp();
};

const sub=()=>{
    numb--;
    console.log("-1 clicked!!& count=",numb,"thanks");
    renderApp();
};



const root = ReactDOM.createRoot(document.getElementById('root'));


const renderApp=()=>{
    const countingApp=(
        <div>
            <h1>COUNT:{numb}</h1>
            <button onClick={add}>+1</button>
            <button onClick={sub}>-1</button>
            
        </div>
    );
    root.render(countingApp);


}
renderApp();


