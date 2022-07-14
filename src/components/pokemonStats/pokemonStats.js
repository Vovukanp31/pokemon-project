import React from 'react';
import ProgressBar from "../../constants/progressBar/progressBar";

const PokemonStats = ({stats}) => {

    const stat = {
        hp: stats[0].base_stat,
        attack: stats[1].base_stat,
        defence: stats[2].base_stat,
        specialAttack: stats[3].base_stat,
        specialDefence: stats[4].base_stat,
        speed: stats[5].base_stat
    }

    return (
        <div>
            hp --<ProgressBar bgColor={'red'} number={stat.hp} maxVal={255}/><br/>
            attack -- <ProgressBar bgColor={'blue'} number={stat.attack} maxVal={190}/><br/>
            defence --{stat.defence}<ProgressBar bgColor={'green'} number={stat.defence} maxVal={230}/><br/>
            special attack --<ProgressBar bgColor={'orange'} number={stat.specialAttack} maxVal={194}/><br/>
            special defence --<ProgressBar bgColor={'pink'} number={stat.specialDefence} maxVal={230}/><br/>
            speed -- <ProgressBar bgColor={'grey'} number={stat.speed} maxVal={180}/>
        </div>
    );
};

export default PokemonStats;