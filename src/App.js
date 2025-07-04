
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from 'react-router-dom';

function App() {

  const [alert,setalert] = useState(null) ;

  const showAlert= (message,type)=>{
    setalert({
      msg: message ,
      type : type 
    })
    setTimeout(() => {

      setalert(null);
      
    },1200);
  }
  const [Mode,setMode] = useState('light') ;
  const toggleMode = ()=> {

    if(Mode === 'light')
    {
      setMode('dark') ;
      document.body.style.backgroundColor = '#232556';
      showAlert("dark mode is on" , "success")
    }
    else{
      setMode('light') ;
      document.body.style.backgroundColor = 'white';
      showAlert("light mode is on" , "success")
    }

  }
  return (
    <>
         {/* <Router> */}
        
        <Navbar  title = "TextBuddy" About = "About" Mode={Mode} toggle={toggleMode} /> 
        <Alert  Title = {alert}  />
        <div className='container my-3' >
          <TextForm a={showAlert} heading="Enter the Text to Analyse :" mode={Mode} />
          {/* <About/> */}
         
         {/* <Routes> */}
          {/* <Route exact path="/" element={} /> */}
          {/* <Route exact path="/about" element={<About mode={Mode}/>} /> */}
        {/* </Routes> */}
          


        </div>
        {/* </Router>
         */}
    </>

    
  );
}

export default App;







// import { useState } from 'react';
// import './App.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from 'react-router-dom';

// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// import About from './components/About';
// import Alert from './components/Alert';

// function App() {
//   const [alert, setalert] = useState(null);
//   const [Mode, setMode] = useState('light');

//   const showAlert = (message, type) => {
//     setalert({ msg: message, type: type });
//     setTimeout(() => setalert(null), 1200);
//   };

//   const toggleMode = () => {
//     if (Mode === 'light') {
//       setMode('dark');
//       document.body.style.backgroundColor = '#232556';
//       showAlert('Dark mode is on', 'success');
//     } else {
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//       showAlert('Light mode is on', 'success');
//     }
//   };

//   return (
//     <Router>
//       <Navbar title="Ingole" toAbout="About" Mode={Mode} toggle={toggleMode} />
//       <Alert alert={alert} />
//       <div className='container my-3'>
//         <Routes>
//           <Route path="/" element={<TextForm a={showAlert} heading="Enter the Text to Analyse :" mode={Mode} />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }
// export default App;
