
import React from 'react';
function Homepage({NextClickHandler}){

    return (
        <div>
            <div className='HomePage-Home-Button'>
                <p>Home</p>
                <button className='NextButtonPages' onClick={NextClickHandler}>Next Page</button>
            </div>
        </div>
    )
}

export default Homepage;