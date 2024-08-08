import styles from './Review.module.css';


// Review component passing in props from ReviewList.js
const Review = ({ review }) => {
    return (
        <div className={styles.container}>
            <p className={styles.rating}>{review.rating} Stars</p>
            <p className={styles.review}>{review.text}</p>
            <p>-{review.author_name}</p>
        </div>
    );
};



export default Review;