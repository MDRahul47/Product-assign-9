import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className='container'>
                <div className="details">
                    <h1>Your Car is <span>Here</span></h1>
                    <p className='about-car'>Luxury Car Rentals in Dubаi. Our Dubai luxury car  rental company is made for your comfort since you visit our office or even a website! We believe that the elite car rental process  should be as easy and comfortable as possible</p>
                </div>
                <div className="image">
                    <img className='pic' src="https://i.i-sgcm.com/new_cars/cars/21509/21509_m.jpg" alt="" />
                </div>
            </div>

            <div>
                <h1 className='recview'>Coustom Review (3)</h1>
            </div>

        </div>
    );
};

export default Home;