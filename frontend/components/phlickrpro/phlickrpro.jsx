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
                        <div className="pro-title-cont">
                            <h1 className="pro-title-1">phlickr</h1>
                            <h1 className="pro-title-2">pro</h1>
                        </div>
                        <div className="pro-info-cont-1">
                            <h3 className="pro-info-1">
                                Advanced stats, ad-free browsing, automatic photo
                            </h3>
                        </div>
                        <div className="pro-info-cont-2">
                            <h3 className="pro-info-2">uploads, and more.</h3>
                        </div>
                        <div className="pro-get-started-link-cont">
                            <Link className="get-started-link">Get started</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PhlickrPro;