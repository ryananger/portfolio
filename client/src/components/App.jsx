import React, {useEffect, useState, useRef} from 'react';

import 'styles';
import st from 'ryscott-st';
import {ax, helpers} from 'util';

import Page from './Page.jsx';
import Info from './Info.jsx';
import Star from './Star.jsx';
import Circle from './Circle.jsx';
import MenuCircle from './MenuCircle.jsx';

const App = function() {
  const [showMenu, setShowMenu] = useState(false);
  const [page, setPage] = st.newState('page', useState(null));
  const center = {x: window.innerWidth/2, y: window.innerHeight/2};

  var pages = {
    info: <Info/>,
    projects: 'SECRET mETRONOME FIGHT',
    contact: 'AFTEr PACK COMBO'
  };

  var renderStars = function() {
    var rendered = [];
    var num = window.innerWidth >= 1100 ? 150 : 50;

    console.log(num);

    for (var i = 0; i < num; i++) {
      var min = 1;
      var max = helpers.rand(6) + min + min;

      rendered.push(<Star key={i} min={min} max={max}/>);
    }

    return rendered;
  };

  var renderMenu = function() {
    var rendered = [];
    var i = 0;

    for (var key in pages) {
      rendered.push(<MenuCircle key={key} show={showMenu} coords={helpers.getRandomCoordinates(250 + (i*50), center)} page={key} index={i}/>);

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
        <div className='stars'>
          {renderStars()}
        </div>
        <div className='fallback v' onClick={()=>{setPage(page ? page + 1 : 1)}}>
          BEST EXPERIENCED ON DeSKTOP
        </div>
      </div>
    )
  }

  return (
    <div className='app v'>
      <div className='stars'>
        {renderStars()}
      </div>
      {renderMenu()}

      <Circle id='homeCircle' tag='home beat' show={showMenu} min={60} max={200} onClick={()=>{setShowMenu(!showMenu)}}/>
      <Page setShowMenu={setShowMenu} content={pages[page]}/>
    </div>
  );
};

export default App;