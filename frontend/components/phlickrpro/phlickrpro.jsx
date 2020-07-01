import React from 'react';
import PhlickrProBarContainer from '../navbar/phlickrpro_bar_container';
import { Link } from 'react-router-dom';

class PhlickrPro extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="phlickrpro-page-container">
                <PhlickrProBarContainer />
                <div className="phlickr-pro-background">
                    <h1>hi</h1>
                </div>
            </div>
        );
    }
}

export default PhlickrPro;