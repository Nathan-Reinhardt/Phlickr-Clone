import React from 'react';
import MessageAboutContainer from './abtab_message_container';

class DescriptionAbout extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.currentUser.email,
            age: this.props.currentUser.age,
            first_name: this.props.currentUser.first_name,
            last_name: this.props.currentUser.last_name,
            description: this.props.currentUser.description,
            boolean: this.props.descBool
        }

        this.editDescription = this.editDescription.bind(this);
        this.closeEdit = this.closeEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    editDescription() {
        this.setState({ boolean: true })
    }

    closeEdit() {
        this.setState({ boolean: false })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ description: document.getElementById("descTextArea").value })
        const user = Object.assign({}, this.state);
        this.props.updateDescription(user)
            .then( () => this.props.history.push[`/`])
            .fail( () => console.log("I failed"));
    }

    render() {
        const display = this.state.boolean ? (
            <form className="dtbigger-cont">
                <div className="textarea-desc-cont">
                    <textarea id="descTextArea" className="desctextarea" cols="30" rows="10"></textarea>
                </div>
                <div className="dt-buttons-cont">
                    <button className="dt-save-but" onClick={this.handleSubmit}>Save</button>
                    <button className="dt-cancel-but" onClick={this.closeEdit}>Cancel</button>
                </div>
            </form>
        ) : (
            <div className="about-yourself-cont">
                <div className="desctext-cont">
                    <MessageAboutContainer bool={this.state.boolean}/>
                </div>
                <div className="descpencil-cont">
                    <button className="pencil-icon" onClick={this.editDescription}>.</button>
                </div>
            </div>
        );

        return (
            <div className="description-cont">
                {display}
            </div>
        );
    }
}

export default DescriptionAbout;