import { useState, useEffect } from 'react';
import styles from './ReviewList.module.css';
import Review from '../Review/Review';
import { chopShopReviews } from '../Location/map';




const ReviewList = () => {

  const reviews = chopShopReviews;

    return (
        <div className={styles.container}>
            {reviews.map((review, index) => (
                <Review key={index} review={review} className={styles.review} />
            ))}
        </div>
    );
};


export default ReviewList;
