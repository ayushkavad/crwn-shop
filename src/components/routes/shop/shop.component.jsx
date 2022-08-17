import { useContext } from 'react';
import { ProductsContaxt } from '../../contaxts/products.contaxt';

const Shop = () => {
  const { product } = useContext(ProductsContaxt);
  return (
    <div>
      {product.map(({ id, name }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Shop;
