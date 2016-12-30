import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import Actions from '../../actions/main';

const headTitle = ['id', 'title','price', 'amount'];

class UploadBoardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: this.props.products,
            isEditable: false
        }
    }

    handleChange = () => {
        this.setState({isEditable: true});
    };

    handleChangeAmount =(productId, key) => (
        ()=> {
            let products = this.state.products;
            if (key === 'add' && products.find(p => p.id === productId).amount < 10) {
                products.find(p => p.id === productId).amount ++;
            }
            if (key === 'remove' && products.find(p => p.id === productId).amount > 0) {
                products.find(p => p.id === productId).amount --;
            }
            this.setState({products});
        }
    );

    handleOnBlur = (productId, key) => (
        (event) => {
            let products = this.state.products;
            products.find(p => p.id === productId)[key] = event.target.value;
            this.setState({products});
        }

    );

    renderRowInput = (productId, value, key) => (
        <th>
            <input
                onBlur={this.handleOnBlur(productId, key)}
                defaultValue={value}
                disabled={!this.state.isEditable}
            />
        </th>
    );

    handleSave = () => {
        this.props.setProducts(this.state.products);
        this.setState({isEditable: false});
    };

    render() {
        const {products, isEditable} = this.state;
        return (
            <div className="row">
                <div className="col-md-6">
                    <div className="panel-upload-board">
                        <table className="table">
                            <thead>
                                <tr>
                                    {headTitle.map(title => <th key={title}>{title}</th>)}
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(product =>
                                    <tr key={product.id}>
                                        <th>
                                            {product.id}
                                        </th>
                                        {this.renderRowInput(product.id, product.title, 'title')}
                                        {this.renderRowInput(product.id, product.price, 'price')}
                                        <th>
                                            {product.amount}
                                        </th>
                                        <th>
                                            <button
                                                disabled={!isEditable}
                                                className="btn"
                                                onClick={this.handleChangeAmount(product.id, 'remove')}
                                            > -
                                            </button>
                                        </th>
                                        <th>
                                            <button
                                                disabled={!isEditable}
                                                className="btn"
                                                onClick={this.handleChangeAmount(product.id, 'add')}
                                            > +
                                            </button>
                                        </th>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="upload-board                                                                                                                                            ">
                        {isEditable ?
                            < button className="btn btn-warning" onClick={this.handleSave}>Save</button> :
                            <button className="btn btn-warning" onClick={this.handleChange}>Change</button>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

UploadBoardComponent.PropTypes = {
    products: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({products: state.products});
const mapDispatchToProps = (dispatch) => (bindActionCreators(new Actions,dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(UploadBoardComponent);