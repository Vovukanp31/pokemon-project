import React from 'react';

const Ability = ({ability: {name, url}}) => {
    return (
        <div>
            {name}
            {url}
        </div>
    );
};

export default Ability;