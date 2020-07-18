import React from 'react';
import MessageAboutContainer from './abtab_message_container';

class DescriptionAbout extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            boolean: this.props.descBool
        }

        this.editDescription = this.editDescription.bind(this);
    }

    editDescription() {
        this.setState({ boolean: true })
    }

    render() {
        const display = this.state.boolean ? (
            <div className="about-yourself-cont">
                
            </div>
        ) : (
            <div className="about-yourself-cont">
                <div className="desctext-cont">
                    <MessageAboutContainer bool={this.state.boolean}/>
                </div>
                <div className="descpencil-cont">
                    <button id="descPencilCont" className="pencil-icon" onClick={this.editDescription}>.</button>
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