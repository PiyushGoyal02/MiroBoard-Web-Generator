import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Payment({NextClickHandler}){

    const [StringValue, setStringValue] = useState([]);     // This Stores All Paragraph Tag (Array Form)     

    const [formData, setFormData] = useState('')

    const RadioChangeHandler = (event) => {
        setFormData(event.target.value)
    }
    // console.log(formData)

    // This is used to trim the paragraph tag and then fetch the value of the paragraph tag.
    const extractText = (htmlString) => {
        const div = document.createElement('div');
        div.innerHTML = htmlString;
        return div.textContent || div.innerText || '';
    }

    useEffect(() => {
        const FetchPaymentData = async () => {
            try{

                const PaymentResponse = await axios.get('http://localhost:4000/fetch-paymentData');
                const responseData = PaymentResponse.data.data;
                // console.log(responseData,"responseData")
                const StringArray = responseData.map(val => val.data.content);
                // console.log(StringArray,"StringArray")
                setStringValue(StringArray.map(extractText));

            }catch(error){
                console.error('Error For Payment Data Fetch:', error);
            }
        }
        FetchPaymentData();
    },[]);

    return (
        
        <div>

            <div className="Payment-Container-Div">

                <div className="Payment-GateWay-TopDiv">

                    <div className="HealthCare-PatientInformation-Div">
                        <h1>Health Care Payment</h1>
                        <h3>Patient Information</h3>
                    </div>

                    <div className="Label-InputTag-MainDib">

                        <div className="InputLabelDiv">
                            <label className="Label-value" htmlFor="patient"> Patient Id:</label>
                            <input required  className="Input-Value" id="patient" type="text" placeholder="Enter Patient Id:"></input>
                        </div>

                        <div className="InputLabelDiv">
                            <label className="Label-value" htmlFor="patientname"> Patient Name:</label>
                            <input required  className="Input-Value" id="patientname" type="text" placeholder="Enter Patient Name"></input>
                        </div>

                        <div className="InputLabelDiv">
                            <label className="Label-value" htmlFor="drname"> Doctor Name</label>
                            <input required  className="Input-Value" id="drname" type="text" placeholder="Enter Dr.Name"></input>
                        </div>
                    </div>

                    <div>
                        <h2 className="HealthCare-Services">HealthCare Services Summary</h2>
                    </div>

                    <div className="Services-Payment">
                        <p>Consultation: $50</p>
                        <p>Lab Test: $100</p>
                        <p>Medication: $30</p>
                    </div>

                    <div>
                        <h2 className="Payment-Method">Payment Method</h2>
                    </div>

                    <div className='PaymentRadioDiv'>
                        {StringValue.map((val, index) => (
                            <div key={index} className='PaymentMethodRadioButtons'>
                                <label htmlFor='value'>{val}</label>
                                <input name='RadioValues' checked={formData === val} onChange={RadioChangeHandler} value={val} id='value' type='radio'></input>
                            </div>
                        ))}
                    </div>

                    {/* <div>
                        {
                            formData === 'Cash' ? <input className='inputTagss' type='number' placeholder='How Many Cash.'></input> :''
                        }
                    </div> */}

                    <div>
                        {formData === 'Cash' ? (
                            <div className='CashRadioButton'>
                                {/* <p>How Many Cash -</p> */}
                                <input className='inputTagss' type='number' placeholder='Enter Amount'/>
                            </div>
                        ) : formData === 'Card' ? (
                            <div className='AllPaymentRadioButtonsDetails'>
                                <div className='PaymentRadioButtonDetails'>
                                    <p>Card Number -</p>
                                    <input className='inputTagss' type='text' placeholder='Enter Card Number.' />
                                </div>

                                <div className='ExpireDate-CVVNumber-Div'>
                                    <div className='PaymentRadioButtonDetails'>
                                        <p>Expiry Date -</p>
                                        <input className='ExpireDateInput' type='text' placeholder='Month/Year' />
                                    </div>

                                    <div className='PaymentRadioButtonDetails'>
                                        <p>CVV Number -</p>
                                        <input className='ExpireDateInput' type='password' placeholder='Enter CVV Number.' />
                                    </div>
                                </div>
                            </div>
                        ) : formData === 'Insurance' ? (
                            <div>
                                <input type='text' className='inputTagss' placeholder='Personal Information'></input>
                                <input className='inputTagss' type='text' placeholder='Enter Insurance Number.' />
                                <input type='text' className='inputTagss' placeholder='Billing Statements'></input>
                            </div>
                        ) : (
                            ''
                            )}
                    </div>



                    <div className="Submit-Button-MainDiv">
                        <button onClick={NextClickHandler} className="Submit-Button">Submit</button>
                    </div>

                </div>
            </div>
            {/* <div className='PaymentNextButton'><button className='NextButtonPages' onClick={NextClickHandler}>Next Page</button></div> */}
        </div>
    )
}

export default Payment;



{/* <input className='inputTagss' type='text' placeholder='Enter Card Number.' /> */}
                                // <input type='text' className='inputTagss' placeholder='Card Expires'></input>
                                // <input type='text' className='inputTagss' placeholder='Authorized Signature Number'></input>