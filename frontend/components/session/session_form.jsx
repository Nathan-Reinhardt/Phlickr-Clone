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
        this.demoUser = this.demoUser.bind(this);
    }

    demoUser(e) {
        e.preventDefault();
        const demo = {
            email: "demo@demo.com",
            password: "password"
        }
        this.props.demoUser(demo)
            .then( () => this.props.history.push[`/`]);
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
                    <button className="log-demo" onClick={this.demoUser}>Demo</button>
                    <h3 className="forgot-password">Forgot password?</h3>
                    <div className="form-line"></div>
                    <div className="form-bottom-container">
                        <h3 className="not-member">Not a Phlickr member?</h3>
                        <Link className="to-sign-up" to={this.props.otherFormUrl}><h3>Sign up here.</h3></Link>
                    </div>
                    <div className="help-container">
                        <h3 className="h-english">English</h3>
                        <h3 className="h-help">Help</h3>
                        <h3 className="h-privacy">Privacy</h3>
                        <h3 className="h-terms">Terms</h3>
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
                    <h1 className="sign-label">Sign up for Phlickr</h1>
                    <br/>
                    <input className="session-input-s" type="text"
                        placeholder="First name"
                        value={this.state.first_name}
                        onChange={this.handleInput("first_name")}
                    />
                    <br/>
                    <input className="session-input-s" type="text"
                        placeholder="Last name"
                        value={this.state.last_name}
                        onChange={this.handleInput("last_name")}
                    />
                    <br/>
                    <input className="session-input-s" type="number"
                        placeholder="Your age"
                        value={this.state.age}
                        onChange={this.handleInput("age")}
                    />
                    <br/>
                    <input className="session-input-s" type="text"
                        placeholder="Email address"
                        value={this.state.email}
                        onChange={this.handleInput("email")}
                    />
                    <br/>
                    <input className="session-input-s" type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleInput("password")}
                    />
                    <br/>
                    <button className="form-s-btn" onClick={this.handleSubmit}>Sign up</button>
                    <button className="log-demo" onClick={this.demoUser}>Demo</button>
                    <h3 className="form-condition">By signing up, you agree with Phlickr's</h3>
                    <div className="condition-container">
                        <h3 className="terms-service">Terms of Services</h3>
                        <h3 className="and">and</h3>
                        <h3 className="priv-pol">Privacy Policy</h3>
                    </div>
                    <div className="form-line"></div>
                    <div className="form-bottom-container">
                        <h3 className="already-member">Already a Phlickr member?</h3>
                        <Link className="to-log-in" to={this.props.otherFormUrl}><h3>Log in here.</h3></Link>
                    </div>
                    <div className="help-container">
                        <h3 className="h-english">English</h3>
                        <h3 className="h-help">Help</h3>
                        <h3 className="h-privacy">Privacy</h3>
                        <h3 className="h-terms">Terms</h3>
                    </div>
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