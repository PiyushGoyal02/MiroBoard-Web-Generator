import DrImage from '../Assets/DoctorImage.jpg'
import React from 'react'
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";



function BookAppointment({NextClickHandler}){
    return (
        <div>

            <div className='BookApp-Alignment'>
                <div className="BookAppointment-Div">

                    <div>
                        <h5 className="SignUp-Top-Hading">Book Appointment</h5>
                    </div>


                    {/* First Line */}
                    <div className='Doctor-Content-Single-Line-Div'>     {/*Main Display Flex*/}

                        <div className='Single-Content-Doctor'>   {/*Single Content Flex Colum*/}

                            <div className='DrDetails'>    {/*Single Image Line Display Flex*/}
                                <img className='DoctorImage' src={DrImage}></img>

                                <div>
                                    <div className='Dortor-Details'>
                                        <div>
                                            <h4>Aditya Goel</h4>
                                        </div>

                                        <div className='Specialist-StatusButton'> 
                                            <h5>Therapist-</h5>
                                            <button className='statusButton'>status</button> 
                                        </div>

                                        <div>
                                            <p className='TimeAndDate'>10:00 to 2:00-AM</p>
                                            <p className='TimeAndDate'>5:00 to 8:00-PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='AppoitmentButton-DetailsButton'>
                                <button onClick={NextClickHandler} className='Doo-Buttons'>Book</button>
                                <button className='Doo-Buttons'>Details</button>
                            </div>
                            
                        </div>


                        <div className='Single-Content-Doctor'>   {/*Single Content Flex Colum*/}

                            <div className='DrDetails'>    {/*Single Image Line Display Flex*/}
                                <img className='DoctorImage' src={DrImage}></img>

                                <div>
                                    <div className='Dortor-Details'>
                                        <div>
                                            <h4>Dhruv Mittal</h4>
                                        </div>

                                        <div className='Specialist-StatusButton'> 
                                            <h5>Cardiologist-</h5>
                                            <button className='statusButton'>status</button> 
                                        </div>

                                        <div>
                                        <p className='TimeAndDate'>10:00 to 2:00-AM</p>
                                            <p className='TimeAndDate'>5:00 to 8:00-PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='AppoitmentButton-DetailsButton'>
                                <button onClick={NextClickHandler} className='Doo-Buttons'>Book</button>
                                <button className='Doo-Buttons'>Details</button>
                            </div>
                            
                        </div>

                    </div>


                    {/* Second Line */}

                    <div className='Doctor-Content-Single-Line-Div'>     {/*Main Display Flex*/}

                        <div className='Single-Content-Doctor'>   {/*Single Content Flex Colum*/}

                            <div className='DrDetails'>    {/*Single Image Line Display Flex*/}
                                <img className='DoctorImage' src={DrImage}></img>

                                <div>
                                    <div className='Dortor-Details'>
                                        <div>
                                            <h4>Vaibhav Jindal</h4>
                                        </div>

                                        <div className='Specialist-StatusButton'> 
                                            <h5>Gynecologist-</h5>
                                            <button className='statusButton'>status</button> 
                                        </div>

                                        <div>
                                        <p className='TimeAndDate'>10:00 to 2:00-AM</p>
                                            <p className='TimeAndDate'>5:00 to 8:00-PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='AppoitmentButton-DetailsButton'>
                                <button onClick={NextClickHandler} className='Doo-Buttons'>Book</button>
                                <button className='Doo-Buttons'>Details</button>
                            </div>
                            
                        </div>


                        <div className='Single-Content-Doctor'>   {/*Single Content Flex Colum*/}

                            <div className='DrDetails'>    {/*Single Image Line Display Flex*/}
                                <img className='DoctorImage' src={DrImage}></img>

                                <div>
                                    <div className='Dortor-Details'>
                                        <div>
                                            <h4>Mayank Kansal</h4>
                                        </div>

                                        <div className='Specialist-StatusButton'> 
                                            <h5>Neurologist-</h5>
                                            <button className='statusButton'>status</button> 
                                        </div>

                                        <div>
                                        <p className='TimeAndDate'>10:00 to 2:00-AM</p>
                                            <p className='TimeAndDate'>5:00 to 8:00-PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='AppoitmentButton-DetailsButton'>
                                <button onClick={NextClickHandler} className='Doo-Buttons'>Book</button>
                                <button className='Doo-Buttons'>Details</button>
                            </div>
                            
                        </div>

                    </div>

                    {/* Third Line */}
                    
                    <div className='Doctor-Content-Single-Line-Div'>     {/*Main Display Flex*/}

                        <div className='Single-Content-Doctor'>   {/*Single Content Flex Colum*/}

                            <div className='DrDetails'>    {/*Single Image Line Display Flex*/}
                                <img className='DoctorImage' src={DrImage}></img>

                                <div>
                                    <div className='Dortor-Details'>
                                        <div>
                                            <h4>Ranjit Aggrawal</h4>
                                        </div>

                                        <div className='Specialist-StatusButton'> 
                                            <h5>Cardiologist-</h5>
                                            <button className='statusButton'>status</button> 
                                        </div>

                                        <div>
                                            <p className='TimeAndDate'>10:00 to 2:00-AM</p>
                                            <p className='TimeAndDate'>5:00 to 8:00-PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='AppoitmentButton-DetailsButton'>
                                <button onClick={NextClickHandler} className='Doo-Buttons'>Book</button>
                                <button className='Doo-Buttons'>Details</button>
                            </div>
                            
                        </div>


                        <div className='Single-Content-Doctor'>   {/*Single Content Flex Colum*/}

                            <div className='DrDetails'>    {/*Single Image Line Display Flex*/}
                                <img className='DoctorImage' src={DrImage}></img>

                                <div>
                                    <div className='Dortor-Details'>
                                        <div>
                                            <h4>Vinay Jain</h4>
                                        </div>

                                        <div className='Specialist-StatusButton'> 
                                            <h5>Skin-</h5>
                                            <button className='statusButton'>status</button> 
                                        </div>

                                        <div>
                                            <p className='TimeAndDate'>10:00 to 2:00-AM</p>
                                            <p className='TimeAndDate'>5:00 to 8:00-PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='AppoitmentButton-DetailsButton'>
                                <button onClick={NextClickHandler} className='Doo-Buttons'>Book</button>
                                <button className='Doo-Buttons'>Details</button>
                            </div>
                            
                        </div>

                    </div>
                    
                </div>
            </div>        
            {/* <div className='BookAppointment-NextButton'>
                <button className='NextButtonPages' onClick={NextClickHandler}>Next</button>
            </div> */}
        </div>            
    )
}

export default BookAppointment;