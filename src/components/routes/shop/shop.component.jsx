import { useContext } from 'react';
import { ProductsContaxt } from '../../contaxts/products.contaxt';
import ProductCard from '../../product-card/product-card.component';
import './shop.styles.scss';

const Shop = () => {
  const { product } = useContext(ProductsContaxt);
  return (
    <div className="products-container">
      {product.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
