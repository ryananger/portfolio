import React, {useEffect, useState, useRef} from 'react';

import 'styles';
import st from 'ryscott-st';
import {ax, helpers} from 'util';

import Page from './Page.jsx';
import Info from './Info.jsx';
import Stars from './Stars.jsx';
import Circle from './Circle.jsx';
import MenuCircle from './MenuCircle.jsx';

const App = function() {
  const [showMenu, setShowMenu] = useState(false);
  const [page, setPage] = st.newState('page', useState(null));
  const center = {x: window.innerWidth/2, y: window.innerHeight/2};

  var pages = {
    info: <Info/>,
    projects: 'SECRET mETRONOME FIGHT',
    contact: 'WORK IN PRoGRESS'
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
    setPage(null);
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

      <Circle id='homeCircle' tag='home beat' show={showMenu} min={60} max={200} onClick={()=>{setShowMenu(!showMenu)}}/>
      <Page setShowMenu={setShowMenu} content={pages[page]}/>
    </div>
  );
};

export default App;