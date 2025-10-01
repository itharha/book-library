import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar() {
  return (
  
<div className='header'>
   <h1 className='title'>BookAr</h1>
<ul  className='navbar'>   
    <li><Link to="/">📚Home</Link> </li>
    <li><Link to="/details">📖Details</Link> </li>
   <li><Link to="/add"> ➕Add</Link> </li>
     <li><Link to="/edit">🖊️Edit</Link> </li>
</ul>
    </div>
    
  );
}

export default Navbar;