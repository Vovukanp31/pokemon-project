import React, {useEffect} from 'react';
import css from './home.module.css'
import {Link} from "react-router-dom";
import CardSlider from "../../components/card-slider/cardSlider";

const Home = () => {

    return (
        <div className={css.pokemonsCarousel}>
            <CardSlider/>
        </div>
    );
};

export default Home;