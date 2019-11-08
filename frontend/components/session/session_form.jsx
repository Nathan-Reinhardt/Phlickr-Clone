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
        const errorList = this.props.errors.map((error, idx) => <li className="errors" key={idx}>{error}</li>)

        const display = this.props.bool ? (
            <div className="log-in-container">
                <form className="log-in-form">
                    <div className="ball-container">
                        <h1 className="blue-ball">.</h1>
                        <h1 className="pink-ball">.</h1>
                    </div>
                    <h1 className="log-label">Log in to Phlickr</h1>
                    {errorList}
                    <br/>
                    <input className="session-input" type="text"
                        placeholder="Email address"
                        value={this.state.email}
                        onChange={this.handleInput("email")}
                    />
                    <br/>
                    <input className="session-input-password" type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleInput("password")}
                    />
                    <br/>
                    <button className="form-l-btn" onClick={this.handleSubmit}>Sign in</button>
                    <h3 className="forgot-password">Forgot password?</h3>
                    <div className="form-line"></div>
                    <div className="form-bottom-container">
                        <h3 className="not-member">Not a Phlickr member?</h3>
                        <Link className="to-sign-up" to={this.props.otherFormUrl}><h3>Sign up here.</h3></Link>
                    </div>
                </form>
            </div>
        ) : (
            <div className="sign-up-container">
                <form className="sign-up-form">
                    <div className="ball-container">
                        <h1 className="blue-ball">.</h1>
                        <h1 className="pink-ball">.</h1>
                    </div>
                    <label className="sign-label">Sign up for Phlickr</label>
                    <br/>
                    <input className="session-input" type="text"
                        placeholder="First name"
                        value={this.state.first_name}
                        onChange={this.handleInput("first_name")}
                    />
                    <br/>
                    <input className="session-input" type="text"
                        placeholder="Last name"
                        value={this.state.last_name}
                        onChange={this.handleInput("last_name")}
                    />
                    <br/>
                    <input className="session-input" type="number"
                        placeholder="Your age"
                        value={this.state.age}
                        onChange={this.handleInput("age")}
                    />
                    <br/>
                    <input className="session-input" type="text"
                        placeholder="Email address"
                        value={this.state.email}
                        onChange={this.handleInput("email")}
                    />
                    <br/>
                    <input className="session-input" type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleInput("password")}
                    />
                    <br/>
                    <button className="form-s-btn" onClick={this.handleSubmit}>{this.props.formType}</button>
                    <Link to={this.props.otherFormUrl}><h3>{this.props.otherForm}</h3></Link>
                </form>
            </div>
        );

        return (
            <div className="session-form-container">
                {display}
            </div>
        )
    }
}

export default SessionForm;