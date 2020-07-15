import React from 'react';

class DescriptionAbout extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const display = this.props.descBool ? (
            <div>
                
            </div>
            
        ) : (
            <div className="about-yourself-cont">
                <div className="desctext-cont">
                    <h2>test</h2>
                </div>
                <div className="descpencil-cont">
                    <button className="pencil-icon">.</button>
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