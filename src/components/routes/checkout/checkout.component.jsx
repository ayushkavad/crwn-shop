import { useContext } from 'react';
import { CartContaxt } from '../../contaxts/cart.contaxt';

const Checkout = () => {
  const { cartItem, addItemToCart } = useContext(CartContaxt);
  return (
    <div>
      {cartItem.map((cartItem) => {
        const { id, name, quantity } = cartItem;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <span>{quantity}</span>
            <span onClick={() => addItemToCart(cartItem)}>in</span>
            <span>de</span>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
