
import styles from './ReviewList.module.css';
import Review from '../Review/Review';



const ReviewList = ({ reviews }) => {


    return (
        <div className={styles.container}>
            {reviews.map((review, index) => (
                <Review key={index} review={review} className={styles.review} />
            ))}
        </div>
    );
};


export default ReviewList;
