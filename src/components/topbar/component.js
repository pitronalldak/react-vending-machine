import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import Actions from '../../actions/main';

class TopBarComponent extends Component {

    handleUploadLink = (e) => {
        e.preventDefault();
        this.props.handleUploadLink();
    };

    render() {
        return (
            <div className="topbar">
                <div className="container">
                    <div className="link">
                        <a href="" onClick={this.handleUploadLink}>Upload products</a>
                    </div>
                </div>
            </div>
        );
    }
}

TopBarComponent.PropTypes = {
    children: PropTypes.element.isRequired
};

const mapDispatchToProps = (dispatch) => (bindActionCreators(new Actions,dispatch));

export default connect(undefined, mapDispatchToProps)(TopBarComponent);