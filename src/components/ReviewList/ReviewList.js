
import styles from './ReviewList.module.css';
import Review from '../Review/Review';


// ReviewList component passing in props from map.js
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
