import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import CartNewData from '../Data';
import "./CartData.css";

const CartData = () => {
    const [cart, setCart] = useState(CartNewData);

    return (
        <div>
            <h1>Hello World</h1>

            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Discount Percentage</th>
                        <th>Discount Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.carts.map((cartElem) => (
                        <React.Fragment key={cartElem.id}>
                            {cartElem.products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.total}</td>
                                    <td>{product.discountPercentage}</td>
                                    <td>{product.discountedPrice}</td>
                                </tr>
                            ))}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CartData;
