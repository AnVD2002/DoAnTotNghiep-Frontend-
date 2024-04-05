import React from 'react';
import './CartItems.css'

const CartItems = () => {
    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Product</p>
                <p>Tittle</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            <div>
                <div className="cartitems-format">
                    <img src="" alt="" className='carticon-product-icon'/>
                    <p></p>
                    <p></p>
                    <button className='cartitems-quantity'></button>
                    <p></p>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
};

export default CartItems;