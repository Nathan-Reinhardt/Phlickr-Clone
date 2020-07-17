import React from 'react';

class FormAbout extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const display = this.props.bool ? (
            <form>
                
            </form>
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

export default FormAbout;