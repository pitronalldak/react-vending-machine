import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import Actions from '../../actions/main';

class ProductComponent extends Component {
    setProductInBasket = () => {
        if (this.props.product.price <= this.props.balance) {
            this.props.setToBasket(this.props.product.id)
        }
    };

    render() {
        const {product, balance} = this.props;

        return (
            <div className="col-md-3">
                {product.amount > 0 ?
                    <div className={product.price <= balance ? 'panel-product active' : 'panel-product'}
                         onClick={this.setProductInBasket}
                    >
                        <p className="text-product">{product.title}</p>
                        <p className="text-product">{product.amount}</p>
                    </div>:
                    <div className="panel-product empty">
                    </div>
                }
                <p className="text-center">Price: {product.price}</p>
            </div>
        );
    }
}

ProductComponent.PropTypes = {
    product: PropTypes.object,
    balance: PropTypes.number.isRequired,
    setToBasket: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => (bindActionCreators(new Actions,dispatch));

export default connect(undefined, mapDispatchToProps)(ProductComponent);