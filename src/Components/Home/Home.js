import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseReviewsHooks from '../Hooks/UseReviewsHooks';
import ReviewsCart from '../ReviewsCart/ReviewsCart';
import './Home.css';

const Home = () => {
    const [reviews] = UseReviewsHooks();
    const navigate = useNavigate();

    // Handle Navigate Route:
    const handleRoute = () => {
        navigate('/reviews');
    }
    return (
        <div>
            <div className='containerr'>
                <div className="details">
                    <h1>Your Car is <span>Here</span></h1>
                    <p className='about-car'>Luxury Car Rentals in Dubаi. Our Dubai luxury car  rental company is made for your comfort since you visit our office or even a website! We believe that the elite car rental process  should be as easy and comfortable as possible</p>
                </div>
                <div className="image">
                    <img className='pic' src="https://i.i-sgcm.com/new_cars/cars/21509/21509_m.jpg" alt="" />
                </div>
            </div>

            <div className='review-items'>
                <h1 className='recviewd'>Coustom Review (3)</h1>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                        {
                            reviews?.slice(0, 3).map(review => <ReviewsCart
                                review={review}
                            ></ReviewsCart>)
                        }
                    </div>
                </div>
                <div>
                    <button onClick={handleRoute} className='click-btn m-5'>See More Reviews..</button>
                </div>
            </div>

        </div>
    );
};

export default Home;