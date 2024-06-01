import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

function Register({NextClickHandler}){

    return (
        <div>

            <div className='SignUp-Box-Alignment'>
                <div className="SignUp-Box-Div">

                    <div>
                        <h5 className="SignUp-Top-Hading">Register Your Details</h5>
                    </div>

                    <form>

                        <div className="Content-Div">
                            <div className="FirstName-Div">
                                <label className="labelsTagss" htmlFor="firstName"> First Name </label>
                                <input required className='inputTagss' type="text" id="firstName" placeholder="Enter First Name"></input>
                            </div>

                            <div className="LastName-Div">
                                <label className="labelsTagss" htmlFor="lastName"> Last Name </label>
                                <input required type="text" className="inputTagss" id="LastName" placeholder="Enter Last Name"></input>
                            </div>
                        </div>

                        <div className="Content-Div">
                            <div className="FirstName-Div">
                                <label className="labelsTagss" htmlFor="email"> Email Address </label>
                                <input required type="email" className="inputTagss" id="email" placeholder="Enter Your Email"></input>
                            </div>

                            <div className="LastName-Div">
                                <label className="labelsTagss" htmlFor="dateOfBirth"> Date Of Birth </label>
                                <input required type="date" className="inputTagss DateOfBirthInputTag" id="dateOfBirth" placeholder="Enter Your DOB"></input>
                            </div>
                        </div>

                        <div className="Content-Div">
                            <div className="FirstName-Div">
                                <div className="labelTag-Eye">
                                    <label className="labelsTagss" htmlFor="phoneNo"> Phone No. </label>
                                </div>
                                <input required className="inputTagss" type='text' id="phoneNo" placeholder="Enter Your Number"></input>
                            </div>

                            <div className="LastName-Div">
                                <div className="labelTag-Eye">
                                    <label className="labelsTagss" htmlFor="gender"> Sex </label>
                                </div>
                                {/* <input required className="inputTagss" type='text' id="confirmPass" ></input> */}
                                <select required className='inputTagss' id="gender">
                                    <option value="audi">Select your Gender</option>
                                    <option value="volvo">Men</option>
                                    <option value="saab">Female</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <input className='InputDescriptionRegister' type='text' placeholder='Description'></input>
                        </div>

                        <div className='buttonSignup'>
                            <button className='SignUp-Button' onClick={NextClickHandler}>Register</button>
                        </div>

                        {/* <div className='Line-OR-TopDiv'>
                            <div className='LeftLine'></div>
                            <p>OR</p>
                            <div className='RightLine'></div>
                        </div> */}

                    </form>

                    {/* <div className="buttonSignup">
                        <button className='google-Button-SignUp'><FcGoogle /> Sign up with Google</button>    
                    </div>  */}

                </div>
            </div>

        </div>
    )
}

export default Register;