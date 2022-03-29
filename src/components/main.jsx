import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


import SectionMenu from './sectionmenu';
import NotFound from './notfound';



function MainWindow() {
    return (
      <div className="main-window">
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<SectionMenu name="Hello!"/>}/>
                <Route exact path="/exercises" element={<SectionMenu name="Ex!"/>}/>
                <Route exact path="/html" element={<SectionMenu name="Html"/>}/>
                <Route exact path="/css" element={<SectionMenu name="Css"/>}/>
                <Route exact path="/js" element={<SectionMenu name="JS"/>}/>
                <Route exact path="/react" element={<SectionMenu name="Ract"/>}/>
                <Route exact path="/other" element={<SectionMenu name="Other"/>}/>
                <Route exact path="/notfound" element={<NotFound/>}/>
                <Route exact path="*" element={<NotFound/>}/>
            </Routes>
            
        </BrowserRouter>
      </div>
    );
  }
  
  export default MainWindow;
