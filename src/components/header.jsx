import React from 'react';


function Header() {
    return (
      <div className="heading">
        <h2>knowledge base</h2>
        <input type="text" placeholder="Search" className="heading-input"/>
        <div className="heading-links">
            <a href="https://github.com/DmitryChuhnin" className="heading-link">GitHub</a>
            <a href="https://github.com/DmitryChuhnin" className="heading-link">Site</a>
        </div>
        
      </div>
    );
  }
  
  export default Header;
  