import logo from './logo.svg';
import './App.css';
import Nav from './Component/Nav';

import Todo from './Component/Todo/Todo';
import { Routes, Route } from "react-router-dom";
import Home from './Component/Home';
import Covid from './Component/Covid19/Covid';
import User from './Component/Users/User';
import DetailUser from './Component/Users/DetailUser';
import Youtube from './Component/Youtube/Youtube';






const App = () => {

  

  
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Routes>
          {/* <Route path='/' element={<Home/>}>
            
          </Route>
          <Route path='/todo' element={<Todo/>}>
            
          </Route>
          <Route path='/covid' element={<Covid/>}>
            
          </Route>
          <Route path='/user' element={<User/>}>
            
          </Route>
          <Route path='/user/:id' element={<DetailUser/>}>
            
          </Route> */}
          <Route path='/' element={<Youtube/>}>
            
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
