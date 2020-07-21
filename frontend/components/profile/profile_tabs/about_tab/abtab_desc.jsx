import React from 'react';
import MessageAboutContainer from './abtab_message_container';

class DescriptionAbout extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
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
        const description = document.getElementById("descTextArea").value
        this.props.updateDescription(description)
            .then( () => this.props.history.push[`/`])
    }

    render() {
        const display = this.state.boolean ? (
            <div className="dtbigger-cont">
                <div className="textarea-desc-cont">
                    <textarea id="descTextArea" className="desctextarea" cols="30" rows="10"></textarea>
                </div>
                <div className="dt-buttons-cont">
                    <button className="dt-save-but" onClick={this.handleSubmit}>Save</button>
                    <button className="dt-cancel-but" onClick={this.closeEdit}>Cancel</button>
                </div>
            </div>
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