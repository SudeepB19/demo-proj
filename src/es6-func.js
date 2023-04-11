import React from 'react'
import ReactDOM  from 'react-dom/client'

function getloc(loc){
    if(loc)
        return loc;
    else
        return "paradise";
}

const person={
    
    age:45,
    job:'actor',
    location:'toronto'
};

const testing= <div>
    <h1>{person.name?person.name:"ZEUS"}</h1>
    <p>age:{person.age}</p>
    <p>location:{getloc('cape')}</p>
    <p>job:{person.job}</p>
</div>

let root=ReactDOM.createRoot(document.getElementById('root'));
root.render(testing);
