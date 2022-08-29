import './checkout-item.styles.scss';
import { useContext } from 'react';
import { CartContaxt } from '../contaxts/cart.contaxt';

const CheckoutItem = ({ cartItme }) => {
  const { name, imageUrl, price, quantity } = cartItme;
  const { clearItemFormCart, addItemToCart, removeItemToCart } =
    useContext(CartContaxt);

  const clearItemHendler = () => {
    clearItemFormCart(cartItme);
  };

  const addItemHendler = () => {
    addItemToCart(cartItme);
  };
  const removeItemHendler = () => {
    removeItemToCart(cartItme);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHendler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHendler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHendler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
