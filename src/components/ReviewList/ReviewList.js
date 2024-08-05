import styles from './ReviewList.module.css';
import Review from '../Review/Review';

const ReviewList = ({ reviews }) => {
    return (
        <div className={styles.container}>
            {reviews.map((review) => (
                <Review key={review.id} review={review} />
            ))}
        </div>
    );
};


export default ReviewList;