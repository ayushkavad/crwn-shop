import { Routes, Route } from 'react-router-dom';
import Home from './components/routes/home/home.component';
import Navigation from './components/routes/navigation/navigation.component';
import Authentication from './components/routes/authentication/authentication.component';
import Shop from './components/routes/shop/shop.component';
import CheckOut from './components/routes/checkout/checkout.component';
import './categories.styles.scss';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
