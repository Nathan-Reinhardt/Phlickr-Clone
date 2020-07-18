import React from 'react';

class MessageAbout extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const display = this.props.bool ? (
            <div>
                <h3>hi this is the users message</h3>
            </div>
        ) : (
            <div>
                <h3 className="placeholderdesc">write a little about yourself</h3>
            </div>
        );

        return (
            <div>
                {display}
            </div>
        );
    }
}

export default MessageAbout;