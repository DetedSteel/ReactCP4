import { FC, useEffect, useState } from 'react';
import { Product } from '../../types/app';
import ky from 'ky';
import { ProductItem } from '../ProductItem/ProductItem';
import styles from './app.module.css'
import { Outlet } from 'react-router-dom';

export const App: FC = () => {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    (async () => {
      const data: Product[] = await ky.get('https://fakestoreapi.com/products').json();
      setProducts(data);
    })();
  }, []);

  return (
    <div className={styles.container}>
      {products?.map(e => (
        <ProductItem key={e.id} id={e.id} title={e.title} rate={Math.round(e.rating.rate)}/>
      ))}
      <Outlet/>
    </div>
  );
};
