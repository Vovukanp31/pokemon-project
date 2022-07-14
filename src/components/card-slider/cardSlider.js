import React, {useEffect, useRef, useState} from 'react';

import css from './cardSlider.module.css'
import {Link} from "react-router-dom";

const CardSlider = () => {

    useEffect(() => {
        const slides = Array.from(
            document.querySelectorAll(`.${css.slide}`)
        );
        console.log(slides);
        slides[0].classList.add(css.active)

        for (let slide of slides) {
            slide.addEventListener('click', () => {
                clearActiveSlides();
                slide.classList.add(css.active);
                console.log(slide);
            })
        }

        const clearActiveSlides = () => {

slides.forEach(slide => slide.classList.remove(css.active))
        }



        slides.forEach(element => {
            element.style.backgroundColor = 'salmon';
        });
    }, []);

    return (
        <div className={css.cardSliderContainer}>
<div className={css.cardSliderHeader}>Choose category</div>
            <div className={css.slide} style={{backgroundImage: "url('charizard.jpeg')"}}>
                <h3><Link to={'/pokemons'}>Pokemons</Link></h3>
            </div>
            <div className={css.slide} style={{backgroundImage: "url('bulbasaur.jpeg')"}}></div>
            <div className={css.slide} style={{backgroundImage: "url('squirtle.jpeg')"}}></div>
            <div className={css.slide} style={{backgroundImage: "url('purple.jpeg')"}}></div>
        </div>
    );
};

export default CardSlider;