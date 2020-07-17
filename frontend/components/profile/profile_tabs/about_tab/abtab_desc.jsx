import React from 'react';
import FormAboutContainer from './abtab_form_container';

class DescriptionAbout extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            boolean: this.props.descBool
        }
    }

    render() {
        const display = this.props.currentUser ? (
            <div className="about-yourself-cont">
                <div className="desctext-cont">
                    <FormAboutContainer bool={this.state.boolean}/>
                </div>
                <div id="descPencilCont" className="descpencil-cont">
                    <button className="pencil-icon">.</button>
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