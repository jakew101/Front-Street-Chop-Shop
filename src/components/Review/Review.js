import styles from './Review.module.css';

const Review = ({ review }) => {
    return (
        <div className={styles.container}>
            <p className={styles.rating}>{review.rating} Stars</p>
            <p className={styles.review}>{review.review}</p>
            <p>-{review.name}</p>
        </div>
    );
};



export default Review;