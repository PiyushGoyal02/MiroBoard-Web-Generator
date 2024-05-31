import { useNavigate } from 'react-router-dom';

import React from 'react';
function Thankyou({NextClickHandler}){

    const Navigate = useNavigate();

    function HomeClickHandler(){
        Navigate('/')
    }

    return (
        <div>
            <div className='HomePage-Home-Button'>
                <p className='Healee-Patient-Journey-Designer'>Thank you For Using Healee</p>
                <div className='MiroBoardLink-Hading'>
                    {/* <span>Use miro board to design -</span> */}
                    <a className='AnchorTagMiroBoard' href="https://miro.com/app/board/uXjVKFzLB5o=/?userEmail=goyalp3542@gmail.com&shareBoard=namangarg2025@u.northwestern.edu&track=true&utm_source=notification&utm_medium=email&utm_campaign=request-for-access&utm_content=open-sharing-settings&flow_feature=access_board&flow_type=request">Click here to open the Miro board for designing</a>
                </div>
                <button className='NextButtonPages' onClick={HomeClickHandler}> Back To Home</button>
            </div>
        </div>
    )
}

export default Thankyou;