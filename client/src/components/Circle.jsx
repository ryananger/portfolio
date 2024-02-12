/* eslint-disable react/prop-types */
import React, {useEffect, useState, useRef} from 'react';

import st from 'ryscott-st';
import {helpers} from 'util';

const Circle = function({min, max}) {
  const [width, setWidth] = useState(min);
  const [style, setStyle] = useState({width: min});
  const minW = min;
  const fullW = st.mobile ? max*0.6 : max;
  const range = st.mobile ? 200 : 400;

  const el = useRef(null);

  var handleClick = function() {
    if (st.orbiting) {
      st.cancelOrbit();
    } else {
      st.setShowMenu(!st.showMenu);
    }
  };

  var animate = function() {
    if (st.showMenu) {
      requestAnimationFrame(animate);
      return;
    }

    helpers.handleWidth(el, minW, fullW, range, setWidth);

    requestAnimationFrame(animate);
  };

  useEffect(()=>{
    requestAnimationFrame(animate);
  }, []);

  useEffect(()=>{
    if (st.showMenu) {
      setStyle({...style, transition: 'width 0.1s'});
      setWidth(fullW);
    } else {
      setWidth(minW);
      setTimeout(()=>{
        setStyle({...style, transition: 'width 0s'});
      }, 100);
    }
  }, [st.showMenu]);

  return (
    <div id='homeCircle' ref={el} className='home beat circle' style={{...style, width: width, margin: `${-width/2}px`}} onClick={handleClick}/>
  );
};

export default Circle;