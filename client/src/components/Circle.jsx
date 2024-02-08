import React, {useEffect, useState, useRef} from 'react';

import 'styles';
import st from 'ryscott-st';
import {ax, mouse, helpers} from 'util';

const Circle = function({min, max, range = 400, onClick}) {
  const [width, setWidth] = useState(min);
  const [style, setStyle] = useState({width: min});
  const minW = min;
  const fullW = max;
  const el = useRef(null);

  var animate = function() {
    if (st.showMenu) {
      requestAnimationFrame(animate);
      return;
    }

    helpers.handleWidth(el, minW, fullW, range, setWidth);

    requestAnimationFrame(animate);
  };

  useEffect(()=>{
    var frame = requestAnimationFrame(animate);
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
    <div id='homeCircle' ref={el} className='home beat circle' style={{...style, width: width, margin: `${-width/2}px`}} onClick={()=>{st.setShowMenu(!st.showMenu)}}/>
  );
};

export default Circle;