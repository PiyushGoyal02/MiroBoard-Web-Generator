import './App.css';
import { Route, Routes, useNavigate, Link } from 'react-router-dom';
import Payment from './Components/Payment';
import MedicalRecords from './Components/MedicalRecords';
import Register from './Components/Register';
import BookAppointment from './Components/BookAppointment';
import Homepage from './Components/Homepage';
import axios from 'axios';
import { useState, useEffect } from 'react';
import sign from '../src/Assets/Sign.png'
import text from '../src/Assets/Text.png'
import black from '../src/Assets/BlackMan.jpg'
import { FaRegHeart } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

function App() {
  
  const [contentArray, setContentArray] = useState([])
  const navigator = useNavigate();
  const location = useLocation();
  const [zeroIndex, setZeroIndex] = useState(0);

  const extractValue = (htmlContent) => {
    const createElement = document.createElement('div');
    createElement.innerHTML = htmlContent;
    return createElement.textContent || createElement.innerText || '';
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/fetch-data');
        const value = response.data.data;
        const content = value.map(i => i.data.content);
        setContentArray(content.map(extractValue));
      } catch (error) {
        console.error('Error For Data Fetch:', error);
      }
    };
    fetchData();
  }, []);

  const RouteComponents = {
    Payment: Payment,
    Register: Register,
    MedicalRecords: MedicalRecords,
    BookAppointment: BookAppointment
  };

  useEffect(() => {
    // Extracting path and normalizing it
    const path = location.pathname.slice(1);
    console.log(path,"Path")
    const normalizedPath = path.toLowerCase().replace(/\s+/g, ""); // Replacing all spaces
    console.log(normalizedPath,"normalizedPath")
    const currentIndex = contentArray.findIndex(content =>
      content.toLowerCase().replace(/\s+/g, "") === normalizedPath
    );
    console.log(currentIndex,"currentIndex")

    if (currentIndex !== -2) {         // Update state if a valid index is found
      setZeroIndex(currentIndex);
    }

  }, [location.pathname, contentArray]);
  
  // Handler to navigate to the next content
  const NextClickHandler = () => {
    const newIndex = zeroIndex + 1;
    if (newIndex <= contentArray.length) {
      setZeroIndex(newIndex);
      const newPath = contentArray[newIndex];
      navigator(`/${newPath}`);
    }
  };

  if(zeroIndex > contentArray.length){
    return (
      <div>
        <p>Thank You</p>
      </div>
    )
  }

  // function NextClickHandler() {
  //   if (zeroIndex <= contentArray.length - 1) {
  //     setZeroIndex(zeroIndex + 1);
  //     navigator(`/${contentArray[zeroIndex].toLowerCase().replace(" ", "")}`, { state: { contentArray, zeroIndex: zeroIndex + 1 } });
  //   }
  // }

  return (
    <div>

      <div className="Top-Hading">
        <div className="sign-text">
            <img src={sign}></img>
            <img src={text}></img>
        </div>

        <div className="HomePageLinks">
          <Link className='span' to='/'>Home</Link>
            {contentArray.map(route => (
              <Link className='span' key={route} to={`/${route.replace(" ", "")}`}>{route}</Link>
            ))}
        </div>

          <div className="heartlogo-blackman">
            <div className="redheartdiv">
                <p className="redheart"><FaRegHeart/></p>
            </div>

            <div className="blackmandiv">
                <img className="blackman" src={black}></img>
            </div>
          </div>
    </div>

    {/* <div className='NextButtonDiv'>
      <button onClick={NextClickHandler} className='NextButton'>Next</button>
    </div> */}

    <Routes>
      <Route path='/' element={<Homepage NextClickHandler={NextClickHandler} />} />
      {contentArray.map(route => {
        const Component = RouteComponents[route];
        return (
          <Route
            key={route}
            path={`/${route.toLowerCase().replace(" ", "")}`}
            element={<Component NextClickHandler={NextClickHandler} />}
          />
        );
      })}
    </Routes>

    </div>
  );
}

export default App;
