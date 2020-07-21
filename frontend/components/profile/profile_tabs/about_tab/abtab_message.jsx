import React from 'react';

class MessageAbout extends React.Component {
    
    constructor(props) {
        super(props);

        this.messageEmpty = this.messageEmpty.bind(this);
    }

    messageEmpty() {
        if (this.props.currentUser.description === "" || this.props.currentUser.description === null) {
            return true;
        }
        else {
            return false;
        }
    }

    render() {
        const display = this.messageEmpty ? (
            <div>
                <h3 className="placeholder-desc">Write a little about yourself</h3>
            </div>
        ) : (
            <div>
                <h3 className="real-desc">{this.props.currentUser.description}</h3>
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