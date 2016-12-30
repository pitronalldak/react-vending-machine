import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import Actions from '../actions/main';
import TopBarComponent from './topbar/component';
import VendingPanelComponent from './vendingBoard/vendingPanelComponent';
import UserPanelComponent from './vendingBoard/userPanelComponent';
import UploadBoardComponent from './uploadBoard/component';

class BaseComponent extends Component {

    componentWillMount() {
        this.props.getProducts();
    }

    render() {
        const {showUploadPanel} = this.props;
        return (
            <div>
                <TopBarComponent />
                <div className="container wrapper">
                    {showUploadPanel ?
                        < UploadBoardComponent />:
                        <div className="row">
                            <VendingPanelComponent />
                            <UserPanelComponent />
                        </div>
                    }
                </div>
            </div>
        );
    }
}

BaseComponent.PropTypes = {
    showUploadPanel: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({showUploadPanel: state.showUploadPanel});
const mapDispatchToProps = (dispatch) => (bindActionCreators(new Actions,dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(BaseComponent);