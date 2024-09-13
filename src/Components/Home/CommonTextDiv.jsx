import React from 'react';

const CommonTextDiv = ({ blueText, title, desc, heroSect }) => {
    return (
        <div className='commonTextDiv flexColumnCenter'>
            {
                heroSect &&
                <p>
                    {desc}
                </p>
            }
            <h1>
                {title.split(blueText)[0]} 
                <span>{blueText}</span>
                {title.split(blueText)[1]}
            </h1>
            {
                !heroSect &&
                <p>
                    {desc}
                </p>
            }
        </div>
    );
};

export default CommonTextDiv;
