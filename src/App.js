
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Homepage from './Components/Homepage';
import Last from './Components/Last';
import Navbar from './Components/Navbar';
import Signup from './Signup';
// import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <Navbar/>
  
      <Routes>
        <Route path='/Signup' element={<Signup/>}></Route>
      </Routes>
   
      <Header/>
      <Homepage/>
      <Last/>
      <Footer/>
    </div>
  );
}

export default App;
