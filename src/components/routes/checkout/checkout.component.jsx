import { useContext } from 'react';
import { CartContaxt } from '../../contaxts/cart.contaxt';
import CheckoutItem from '../../checkotu-item/checkout-item.compnent';
import './checkout.styles.scss';

const Checkout = () => {
  const { cartItem, cartTotal } = useContext(CartContaxt);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Discription</span>
        </div>
        <div className="header-block">
          <span>Quntity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItem.map((cartItem) => {
        return <CheckoutItem id={cartItem.id} cartItme={cartItem} />;
      })}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
