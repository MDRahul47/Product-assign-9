import React from 'react';
import './ReviewsCart.css';

const ReviewsCart = ({ review }) => {
    const { name, img, rating, comment } = review;
    return (
        <div className="containers">
            <div className="photo">
                <img className='data' src={img} alt="" />
            </div>
            <div className="info">
                <h1>{name}</h1>
                <p>{comment.slice(0, 120) + "..."}</p>
                <p>Ratting: {rating}</p>
            </div>
        </div>

    );
};

export default ReviewsCart;