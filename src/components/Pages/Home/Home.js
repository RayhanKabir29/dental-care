import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <h2 className="text-danger">This is Home</h2>
        </div>
    );
};

export default Home;