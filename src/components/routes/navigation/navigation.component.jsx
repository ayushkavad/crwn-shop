import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { SignOutUser } from '../../utils/firebase/firebase.utils';
import { UserContaxt } from '../../contaxts/user.contaxt';
import CartIcon from '../../cart-icon/cart-icon.component';
import CartDropDown from '../../cart-dropdown/cart-dropdown.component';
import '../navigation/navigation.styles.scss';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContaxt);

  const SignOutHandler = async () => {
    await SignOutUser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo" to="/">
          <CrownLogo />
        </Link>
        <div className="nav-link-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <Link className="nav-link" to="/auth" onClick={SignOutHandler}>
              SIGN OUT
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        <CartDropDown />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
