import Button from '../button/button.component';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContaxt } from '../contaxts/cart.contaxt';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

const CartDropDown = () => {
  const navigate = useNavigate();

  const goTocheckOutHandler = () => {
    navigate('/checkout');
  };
  const { cartItem } = useContext(CartContaxt);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItem.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goTocheckOutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
