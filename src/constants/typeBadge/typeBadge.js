import React from 'react';

import css from './typeBadge.module.css'

const TypeBadge = ({type: {name}}) => {

    let badgeColor;

    if (name === 'bug') {
        badgeColor = '#29CA4F';
    } else if (name === 'dark') {
        badgeColor = '#5A5979'
    } else if (name === 'dragon') {
        badgeColor = '#60CBD9'
    } else if (name === 'electric') {
        badgeColor = '#FBFA74'
    } else if (name === 'fairy') {
        badgeColor = '#EA1369'
    } else if (name === 'fighting') {
        badgeColor = '#EF6138'
    } else if (name === 'fire') {
        badgeColor = '#FD4C5A'
    } else if (name === 'flying') {
        badgeColor = '#93B2C7'
    } else if (name === 'ghost') {
        badgeColor = '#906790'
    } else if (name === 'grass') {
        badgeColor = '#27CB4F'
    } else if (name === 'ground') {
        badgeColor = '#6E491F'
    } else if (name === 'ice') {
        badgeColor = '#D7F1FA'
    } else if (name === 'normal') {
        badgeColor = '#CA98A7'
    } else if (name === 'poison') {
        badgeColor = '#9B69D9'
    } else if (name === 'psychic') {
        badgeColor = '#F81D8F'
    } else if (name === 'rock') {
        badgeColor = '#8B3E21'
    } else if (name === 'steel') {
        badgeColor = '#42BD94'
    } else if (name === 'water') {
        badgeColor = '#86A8FC'
    } else {
        badgeColor = 'black'
    }

    return (
        <div className={css.typeBadge} style={{backgroundColor: badgeColor}}>
            {name}
        </div>
    );
};

export default TypeBadge;