import Image from 'next/image';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
    return (
    <div className={styles.card}>
    <img
        src={product.image}
        alt={product.title}
        width={250}
        height={160}
        style={{ borderRadius: '8px' }}
    />
    <h2>{product.title}</h2>
    <p className={styles.price}>{product.price}</p>
    <p>{product.description}</p>
    <p className={styles.reviews}>⭐⭐⭐⭐⭐ ({product.rating.score}) - {product.rating.reviews} avaliações</p>
    </div>
    );
}
