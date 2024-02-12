import React, {useEffect, useState, useRef} from 'react';

import 'styles';
import st from 'ryscott-st';
import {ax, helpers} from 'util';

import Page from './Page.jsx';
import Info from './Info.jsx';
import Projects from './Projects.jsx';
import ProjectsMobile from './ProjectsMobile.jsx';
import Contact from './Contact.jsx';
import Hotkeys from './Hotkeys.jsx';
import OrbitInfo from './OrbitInfo.jsx'
import Debug from './Debug.jsx';
import Stars from './Stars.jsx';
import Circle from './Circle.jsx';
import MenuCircle from './MenuCircle.jsx';

window.st = st;

st.mobile = window.innerWidth < 1100;

const App = function() {
  const [showMenu, setShowMenu] = st.newState('showMenu', useState(false));
  const [rotate, setRotate] = st.newState('rotate', useState(false));
  const [page, setPage] = st.newState('page', useState(null));
  const [hide, setHide] = st.newState('hide', useState(false));
  const center = {x: window.innerWidth/2, y: window.innerHeight/2};

  var pages = {
    info: <Info/>,
    projects: st.mobile ? <ProjectsMobile/> : <Projects/>,
    contact: <Contact/>
  };

  var renderMenu = function() {
    var rendered = [];
    var i = 0;
    var baseDist = st.mobile ? 100 : 250;

    for (var key in pages) {
      let coords = helpers.getRandomCoordinates(baseDist + (i*50), center);

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

  return (
    <div className='app v'>
      <Stars />
      {renderMenu()}
      <Circle id='homeCircle' tag='home beat' min={60} max={200}/>
      <Page setShowMenu={setShowMenu} content={pages[page]}/>

      <OrbitInfo />
      <Hotkeys />
      <Debug />
    </div>
  );
};

export default App;