import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';


function MainMenu() {
    return (
      <BrowserRouter>
        <div className="main-menu">
          <div className="navbar">
            <Link to="/exercises">Задачи</Link>
            <Link to="/html">Html</Link>
            <Link to="/css">Css</Link>
            <Link to="/js">JavaScript</Link>
            <Link to="/react">React</Link>
            <Link to="/other">Другое</Link>

          </div>
          
          
        </div>
      </BrowserRouter>
      
    );
  }
  
  export default MainMenu;
  