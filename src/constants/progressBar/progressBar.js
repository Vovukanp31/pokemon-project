import React from 'react';

const ProgressBar = ({bgColor, number, maxVal}) => {

    const maxValue = 255;

    const percentConverter = (stat) => {
        const converted = Math.floor((stat / maxVal) * 100);
        return converted;
    }

    const progress = percentConverter(number);


    const containerStyles = {
        height: 20,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 2
    }

    const fillerStyles = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgColor,
        borderRadius: 'inherit',
        textAlign: 'center'
    }

    const labelStyles = {
        color: 'white',
        fontWeight: 'bold'
    }
    const wrapper = {
        maxWidth: '30%'
    }
    return (
        <div style={wrapper}>
            <div style={containerStyles}>
                <div style={fillerStyles}>
                    <span style={labelStyles}>{`${number}`}</span>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;