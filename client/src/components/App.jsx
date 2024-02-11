import React, {useEffect, useState, useRef} from 'react';

import 'styles';
import st from 'ryscott-st';
import {ax, helpers} from 'util';

import Page from './Page.jsx';
import Info from './Info.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import Hotkeys from './Hotkeys.jsx';
import OrbitInfo from './OrbitInfo.jsx'
import Stars from './Stars.jsx';
import Circle from './Circle.jsx';
import MenuCircle from './MenuCircle.jsx';

window.st = st;

const App = function() {
  const [showMenu, setShowMenu] = st.newState('showMenu', useState(false));
  const [rotate, setRotate] = st.newState('rotate', useState(false));
  const [page, setPage] = st.newState('page', useState(null));
  const [hide, setHide] = st.newState('hide', useState(false));
  const center = {x: window.innerWidth/2, y: window.innerHeight/2};

  var pages = {
    info: <Info/>,
    projects: <Projects/>,
    contact: <Contact/>
  };

  var renderMenu = function() {
    var rendered = [];
    var i = 0;

    for (var key in pages) {
      let coords = helpers.getRandomCoordinates(250 + (i*50), center);

      rendered.push(<MenuCircle key={key} show={showMenu} coords={coords} page={key} index={i}/>);

      i++;
    }

    return rendered;
  };

  useEffect(()=>{
    if (!showMenu) {
      setPage(null);
    }
  }, [showMenu]);

  if (window.innerWidth < 1100) {
    return (
      <div className='app v'>
        <Stars />
        <div className='fallback v' onClick={()=>{setPage(page ? page + 1 : 1)}}>
          BEST EXPERIENCED ON DeSKTOP
        </div>
      </div>
    )
  }

  return (
    <div className='app v'>
      <Stars />
      {renderMenu()}
      <OrbitInfo />
      <Hotkeys />
      <Circle id='homeCircle' tag='home beat' min={60} max={200}/>
      <Page setShowMenu={setShowMenu} content={pages[page]}/>
    </div>
  );
};

export default App;