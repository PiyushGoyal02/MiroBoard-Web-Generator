
import React from 'react';
function Homepage({NextClickHandler}){

    return (
        <div>
            <div className='HomePage-Home-Button'>
                <p className='Healee-Patient-Journey-Designer'>Healee Patient Journey Designer</p>
                <a className='AnchorTagMiroBoard' href="https://miro.com/app/board/uXjVKFzLB5o=/?userEmail=goyalp3542@gmail.com&shareBoard=namangarg2025@u.northwestern.edu&track=true&utm_source=notification&utm_medium=email&utm_campaign=request-for-access&utm_content=open-sharing-settings&flow_feature=access_board&flow_type=request">Use miro board to design:</a>
                <button className='NextButtonPages' onClick={NextClickHandler}>Get Started</button>
            </div>
        </div>
    )
}

export default Homepage;