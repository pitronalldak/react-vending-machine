import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import Actions from '../../actions/main';

class UserPanelComponent extends Component {
    state = {value: ''};

    handlePayment = () => {
        if (parseInt(this.state.value)) {
            const value = parseInt(this.state.value) + this.props.balance;
            this.props.setPayment(value);
            this.setState({value: ''});
        }
    };

    handleReturn = () => {
        this.props.setPayment(0)
    };

    handleOnChange = (event) => {
        this.setState({value: event.target.value});
    };

    render() {
        const {balance} = this.props;
        const {value} = this.state;
        return (
            <div className="col-md-3">
                <div className="user panel-border">
                    <div className="user-row">
                        <p className="text-user">
                            Balance
                        </p>
                        <p className="text-user">
                            {balance}
                        </p>
                        <button className="btn btn-success" onClick={this.handleReturn}>
                            return
                        </button>
                    </div>
                    <div className="user-row">
                        <p className="text-user">
                            insert money
                        </p>
                        <input onChange={this.handleOnChange} value={value}/>
                        <button className="btn btn-success" onClick={this.handlePayment}>
                            add
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

UserPanelComponent.PropTypes = {
    balance: PropTypes.number.isRequired,
    setPayment: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({balance: state.balance});
const mapDispatchToProps = (dispatch) => (bindActionCreators(new Actions,dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(UserPanelComponent);
