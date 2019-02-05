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

    handleInputChange = (event) => {
        let property = event.target.className;
        this.setState({
            [property]: event.target.value
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
            date of birth: ${this.state.dateOfBirth}
            gender: ${this.state.gender}
        `);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>
                <label>E-mail:
                        <input
                            type='email'
                            className='email'
                            onChange={this.handleInputChange}
                            required />
                </label>
                <label>Password:
                        <input
                            type='password'
                            className='password'
                            onChange={this.handleInputChange}
                            required />
                </label>
                <label>Date of Birth:
                        <input
                            type='date'
                            className='dateOfBirth'
                            onChange={this.handleInputChange} />
                </label>
                <input
                    type='radio'
                    className='gender'
                    name='gender'
                    value='male'
                    onChange={this.handleInputChange} /> Male
                <input
                    type='radio'
                    className='gender'
                    name='gender'
                    value='female'
                    onChange={this.handleInputChange} /> Female <br />
                <input
                    type='checkbox'
                    onClick={this.handleCheckboxClick}
                    required /> I agree to the terms <br />
                <input type='submit' />
            </form>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
