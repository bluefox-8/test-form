import React from "react";
import ReactDOM from "react-dom";
import "./styles";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            dateOfBirth: '',
            gender: '',
            isChecked: false
        }
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    handleDateChange = (event) => {
        this.setState({
            dateOfBirth: event.target.value
        });
    }

    handleRadioChange = (event) => {
        this.setState({
            gender: event.target.value
        });
    }

    handleCheckboxChange = () => {
        this.setState({
            isChecked: !this.state.isChecked
        });
    }

    handleSubmit = (event) => {
        alert(` 
            email: ${this.state.email}
            password: ${this.state.password}
            date of birth: ${this.state.dateOfBirth}
            gender: ${this.state.gender}
        `);
        event.preventDefault();
    }
    
    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>
                <label htmlFor='email'>E-mail:</label>
                <input type='email' id='email' onChange={this.handleEmailChange} required/> 
                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' onChange={this.handlePasswordChange} required /> 
                <label htmlFor='date'>Date of Birth:</label>
                <input type='date' id='date' onChange={this.handleDateChange}/> 
                <input type='radio' name='gender' value='male' onChange={this.handleRadioChange} /> Male
                <input type='radio' name='gender' value='female' onChange={this.handleRadioChange} /> Female <br/>
                <input type='checkbox' onClick={this.handleCheckboxChange} required /> I agree to the terms <br/>
                <input type='submit' />
            </form>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
