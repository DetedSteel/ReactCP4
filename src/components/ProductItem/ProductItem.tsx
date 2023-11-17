import { FC } from 'react';
import { ProductCardProps } from '../../types/app';
import { Rate } from '../Rate/Rate';
import styles from './productitem.module.css'
import { Link } from 'react-router-dom';

export const ProductItem: FC<ProductCardProps> = ({ title, rate, id }) => {
  return (
    <div className={styles.container}>
      <Link to={`${id}`} className={styles.title}><h4>{title}</h4></Link>
      <Rate rating={rate} />
    </div>
  );
};
