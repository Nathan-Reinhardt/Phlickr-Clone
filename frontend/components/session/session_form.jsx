import React from "react";
import { Link } from "react-router-dom";
import LogoDetailBarContainer from "../navbar/logo_bar_container";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            age: "",
            first_name: "",
            last_name: "",
            error1: "",
            error2: "",
            error3: "",
            error4: "",
            error5: ""
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
            .then( () => this.props.history.push[`/`])
            .fail( () => {
                // let stateKeys = Object.keys(this.state);
                // let errorKeys = stateKeys.slice(5);
                // let currentError = errorKeys[0];
                // console.log(this.state);
                const reduceErrors = this.props.errors;
                let ageTruthy = true;
                let emailTruthy = true;

                if (this.state.first_name === "") {
                    this.setState( { error1: "first name can't be blank" })
                }
                if (this.state.first_name !== "") {
                    this.setState( { error1: "" })
                }

                if (this.state.last_name === "") {
                    this.setState( { error2: "last name can't be blank" })
                }
                if (this.state.last_name !== "") {
                    this.setState( { error2: "" })
                }

                if (this.state.age === "") {
                    this.setState( { error3: "age can't be blank" })
                    ageTruthy = false;
                }
                if (this.state.age < 14 && this.state.age !== "") {
                    this.setState( { error3: "have to be 14 or older to sign up" })
                    ageTruthy = false;
                }
                if (this.state.age !== "" && ageTruthy) {
                    this.setState( { error3: "" })
                }

                if (this.state.email === "") {
                    this.setState( { error4: "email can't be blank" })
                    emailTruthy = false;
                }
                for (let i = 0; i < reduceErrors.length; i++) {
                    if (reduceErrors[i] === "Email has already been taken") {
                        this.setState( { error4: "email has already been taken" })
                        emailTruthy = false;
                    }
                }
                if (this.state.email !== "" && emailTruthy) {
                    this.setState( { error4: "" })
                }

                if (this.state.password === "") {
                    this.setState( { error5: "password can't be blank" })
                }
                else if (this.state.password.length < 6) {
                    this.setState( { error5: "minimum of 6 characters needed" })
                }
                if (this.state.password.length > 6) {
                    this.setState( { error5: "" })
                }
                // console.log(this.state);
            });
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
                    <li className="sign-err">{this.state.error1}</li>
                    <input className="session-input-s" type="text"
                        placeholder="Last name"
                        value={this.state.last_name}
                        onChange={this.handleInput("last_name")}
                    />
                    <li className="sign-err">{this.state.error2}</li>
                    <input className="session-input-s" type="number"
                        placeholder="Your age"
                        value={this.state.age}
                        onChange={this.handleInput("age")}
                    />
                    <li className="sign-err">{this.state.error3}</li>
                    <input className="session-input-s" type="text"
                        placeholder="Email address"
                        value={this.state.email}
                        onChange={this.handleInput("email")}
                    />
                    <li className="sign-err">{this.state.error4}</li>
                    <input className="session-input-s" type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleInput("password")}
                    />
                    <li className="sign-err">{this.state.error5}</li>
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
            <div className="back-ground-session">
                <LogoDetailBarContainer />
                <div className="session-form-container">
                    {display}
                </div>
            </div>
        )
    }
}

export default SessionForm;