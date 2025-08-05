import React from 'react';

function Box ({numOfBox, text, color}){

    const boxes = [];
    for(let i = 0;i<numOfBox;i++){
        boxes.push(<div className='boxClass'>text</div>)
    }

        return (
            <div>
                <div className='boxes'></div>
            </div>
        );
    
}

export default Box;