import React from 'react';
import ReactDOM from 'react-dom/client';

// const nameForm =
// <form>
//     <label>
//         Name : <input type="text" name="name" ></input>
//     </label>
//     <input type='submit' value='submit'></input>
    
// </form>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(nameForm );

class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        };

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value : event.target.value});
    }

    handleSubmit(event){
        alert('entered color is : '+ this.state.value );
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Color : 
                <select type='text' value={this.state.value} onChange={this.handleChange} >
                <option value='black'>black</option>
                <option value='blue'>blue </option>
                <option value='pink'>pink</option>
                </select>
                </label>
                <input type='Submit' value="submit"/>
            </form>
        )
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NameForm /> );

