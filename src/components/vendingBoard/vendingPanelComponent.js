import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

import ProductComponent from './productComponent';

class VendingPanelComponent extends Component {
    render() {
        const {products, basketProducts, balance} = this.props;
        return (
            <div className="col-md-9">
                <div className="panel-border">
                    <div className="row">
                        {products.map(product =>
                            < ProductComponent
                                key={product.id}
                                product={product}
                                balance={balance}
                            />
                        )}
                    </div>
                </div>
                <div className="panel-border">
                    {basketProducts.map((product, key) =>
                        <div className="panel-product basket" key={key}>
                            <p className="text-product">{product.title}</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

VendingPanelComponent.PropTypes = {
    products: PropTypes.array.isRequired,
    basketProducts: PropTypes.array.isRequired,
    balance: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
    products: state.products,
    balance: state.balance,
    basketProducts: state.basketProducts,
});

export default connect(mapStateToProps)(VendingPanelComponent);