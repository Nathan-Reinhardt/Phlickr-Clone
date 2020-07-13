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
                    <div className="phlickr-pro-content-cont">
                        <div>
                            <h1></h1>
                        </div>
                        <div>
                            <h3></h3>
                        </div>
                        <div>
                            <h3></h3>
                        </div>
                        <div>
                            <Link>This is a link</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PhlickrPro;