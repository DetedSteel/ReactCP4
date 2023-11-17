import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Product } from '../../types/app';
import ky from 'ky';
import styles from './productinfo.module.css';
import { Rate } from '../Rate/Rate';

export const ProductInfo: FC = () => {
  const params = useParams();
  const [product, setProduct] = useState<Product>();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const data: Product = await ky.get(`https://fakestoreapi.com/products/${params.id}`).json();
      setProduct(data);
    })();
  }, [params.id]);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1>{product?.title}</h1>
        <img src={product?.image} alt={product?.title} className={styles.image} />
        <p>Price: {product?.price}$</p>
        <p>Description: {product?.description}</p>
        <Rate rating={product?.rating.rate ?? 0} />
      </div>
      <button onClick={() => navigate(-1)} className={styles.btn}>
        Назад
      </button>
    </div>
  );
};
