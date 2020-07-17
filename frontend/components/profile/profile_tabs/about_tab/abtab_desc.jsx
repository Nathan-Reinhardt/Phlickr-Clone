import React from 'react';
import FormAboutContainer from './abtab_form_container';

class DescriptionAbout extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            boolean: this.props.descBool
        }

        this.editDescription = this.editDescription.bind(this);
    }

    editDescription(e) {
        e.preventDefault();
        this.setState( { boolean: true })
    }

    render() {
        const display = this.props.currentUser ? (
            <div className="about-yourself-cont">
                <div className="desctext-cont">
                    <FormAboutContainer bool={this.state.boolean}/>
                </div>
                <div className="descpencil-cont">
                    <button id="descPencilCont" className="pencil-icon" onClick={this.editDescription}>.</button>
                </div>
            </div>
        ) : (
            null
        );

        return (
            <div className="description-cont">
                {display}
            </div>
        );
    }
}

export default DescriptionAbout;