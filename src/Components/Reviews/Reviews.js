import React from 'react';
import UseReviewsHooks from '../Hooks/UseReviewsHooks';
import ReviewsCart from '../ReviewsCart/ReviewsCart';
import './Reviews.css';

const Reviews = () => {
    const [reviews] = UseReviewsHooks();
    return (
        <div className='full-main' >
            <div>

                <h3 class="brand-color text-center mt-5 mb-5 fw-bold">See, What Our Customer Say!</h3>
            </div>
            <div className='main'>
                {
                    reviews.map(review => <ReviewsCart
                        key={review.id}
                        review={review}
                    ></ReviewsCart>)
                }
            </div>
        </div >

    );
};

export default Reviews;