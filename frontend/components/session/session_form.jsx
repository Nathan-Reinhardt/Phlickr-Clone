import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            age: null,
            first_name: "",
            last_name: ""
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        const display = this.props.bool ? (
            <form>
                <label>Email:
                    <input type="text"
                            value={this.state.email}
                            onChange={this.handleInput("email")}
                    />
                </label>
                <label>Password:
                    <input type="password"
                            value={this.state.password}
                            onChange={this.handleInput("password")}
                    />
                </label>
                <button onClick={this.handleSubmit}>{this.props.formType}</button>
            </form>
        ) : (
            <form>
                <label>First Name:
                    <input type="text"
                            value={this.state.first_name}
                            onChange={this.handleInput("first_name")}
                    />
                </label>
                <label>Last Name:
                    <input type="text"
                            value={this.state.last_name}
                            onChange={this.handleInput("last_name")}
                    />
                </label>
                <label>Age:
                    <input type="number"
                            value={this.state.age}
                            onChange={this.handleInput("age")}
                    />
                </label>
                <label>Email:
                    <input type="text"
                            value={this.state.email}
                            onChange={this.handleInput("email")}
                    />
                </label>
                <label>Password:
                    <input type="password"
                            value={this.state.password}
                            onChange={this.handleInput("password")}
                    />
                </label>
                <button onClick={this.handleSubmit}>{this.props.formType}</button>
            </form>
        );

        return (
            <div>
                <h2>{this.props.formHeader}</h2>
                {display}
                <Link to={this.props.otherFormUrl}><h3>{this.props.otherForm}</h3></Link>
                <h4>Errors</h4>
                <h4>{Array.from(this.props.errors)}</h4>
            </div>
        )
    }
}

export default SessionForm;