import React from "react";
import ReactDOM from "react-dom";
import "./styles";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            date: '',
            radio: '',
            isChecked: false
        }
    }

    handleInputChange = (event) => {
        let property = event.target.getAttribute('type');
        this.setState({
            [property] : event.target.value
        });
    }

    handleCheckboxClick = () => {
        this.setState({
            isChecked: !this.state.isChecked
        });
    }

    handleSubmit = (event) => {
        alert(` 
            email: ${this.state.email}
            password: ${this.state.password}
            date of birth: ${this.state.date}
            gender: ${this.state.radio}
        `);
        event.preventDefault();
    }
    
    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>
                <label htmlFor='email'>E-mail:</label>
                <input 
                    type='email' 
                    id='email' 
                    onChange={this.handleInputChange} 
                    required/> 
                <label htmlFor='password'>Password:</label>
                <input 
                    type='password' 
                    id='password' 
                    onChange={this.handleInputChange} 
                    required /> 
                <label htmlFor='date'>Date of Birth:</label>
                <input 
                    type='date' 
                    id='date' 
                    onChange={this.handleInputChange}/> 
                <input 
                    type='radio' 
                    name='gender' 
                    value='male' 
                    onChange={this.handleInputChange} /> Male
                <input 
                    type='radio' 
                    name='gender' 
                    value='female' 
                    onChange={this.handleInputChange} /> Female <br/>
                <input 
                    type='checkbox' 
                    onClick={this.handleCheckboxClick} 
                    required /> I agree to the terms <br/>
                <input type='submit' />
            </form>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
