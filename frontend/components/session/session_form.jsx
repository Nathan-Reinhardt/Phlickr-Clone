import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            age: "",
            first_name: "",
            last_name: ""
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then( () => this.props.history.push[`/`]);
    }

    render() {
        const errorList = this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)

        const display = this.props.bool ? (
            <div className="log-in-container">
                <form className="log-in-form">
                    <label className="log-label">Log in to Phlickr</label>
                    <br/>
                    <input type="text"
                        placeholder="Email address"
                        value={this.state.email}
                        onChange={this.handleInput("email")}
                    />
                    <br/>
                    <input type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleInput("password")}
                    />
                    <br/>
                    <button onClick={this.handleSubmit}>Sign in</button>
                    <Link to={this.props.otherFormUrl}><h3>{this.props.otherForm}</h3></Link>
                </form>
            </div>
        ) : (
            <div className="sign-up-container">
                <label className="sign-label">Sign up for Phlickr</label>
                <form className="sign-up-form">
                    <br/>
                    <input type="text"
                        placeholder="First name"
                        value={this.state.first_name}
                        onChange={this.handleInput("first_name")}
                    />
                    <br/>
                    <input type="text"
                        placeholder="Last name"
                        value={this.state.last_name}
                        onChange={this.handleInput("last_name")}
                    />
                    <br/>
                    <input type="number"
                        placeholder="Your age"
                        value={this.state.age}
                        onChange={this.handleInput("age")}
                    />
                    <br/>
                    <input type="text"
                        placeholder="Email address"
                        value={this.state.email}
                        onChange={this.handleInput("email")}
                    />
                    <br/>
                    <input type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleInput("password")}
                    />
                    <br/>
                    <button onClick={this.handleSubmit}>{this.props.formType}</button>
                    <Link to={this.props.otherFormUrl}><h3>{this.props.otherForm}</h3></Link>
                </form>
            </div>
        );

        return (
            <div className="back-ground-session">
                <div className="session-form-container">
                    {display}
                </div>
            </div>
        )
    }
}

export default SessionForm;