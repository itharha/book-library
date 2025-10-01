import {Routes,Route} from 'react-router-dom';
 import './App.css';
  import Home from './Home.jsx';
   import Details from './Details.jsx' ;
   import  './Home.css'
   import Navbar from './Navbar.jsx';
   import  './Navbar.css';
import './details.css';
import Add from './Add.jsx';
import './add.css';
import Edit from'./Edit.jsx';
import './edit.css';



   function App() {
     return( 
      <>

 
      

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/details" element={<Details />} />
        <Route path="/details/:id" element={<Details />} />
         <Route path="/add" element={<Add/>} />
         <Route path="/edit/:id" element={<Edit/>} />
           <Route path="/edit" element={<Edit/>} />
      </Routes>

      </>
     );
    };

       export default App;
