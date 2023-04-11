import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

var user={
  name:'John',
  age:21,
  loc:'blore',
  job:'actor'
}
var text=<div>
           <h1>{user.name}</h1>
           <p>age:{user.age}</p>
           <p>loc:{user.loc}</p>
           <p>job:{user.job}</p>
          </div>

// var net=<div>
//           <h2>Netflix tv series</h2>
//           <ol>
//             <li>Peaky Blinders</li>
//             <li>Vikings</li>
//             <li>breaking bad</li>
//           </ol>
//          </div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  text
);

