import React from 'react';

const RightArrow = (props) => {
    return (
        <div onClick={props.nextSlide}>
            <img src="/images/rightarrow.png" className="nextArrow"/>
        </div>
    );
}

export default RightArrow;