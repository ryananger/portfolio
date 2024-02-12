import React, {useEffect, useState, useRef} from 'react';

import 'styles';
import st from 'ryscott-st';
import {ax, mouse, helpers} from 'util';

import ToolTip from './ui/ToolTip.jsx';
import Orbit from './Orbit.jsx';

var colors = ['#ffae97', '#ffcf97', '#97ffce', '#addfd1'];

const MenuCircle = function({show, coords, page, index}) {
  const center = {x: window.innerWidth/2, y: window.innerHeight/2};
  const el    = useRef(null);
  const frame = useRef(null);
  const defaultStyle = {
    top:  show ? coords.y : center.y,
    left: show ? coords.x : center.x,
    backgroundColor: colors[index]
  };

  const [width, setWidth] = useState(16);
  const [style, setStyle] = useState({top: center.y, left: center.x});
  const [orbitOn, setOrbitOn] = useState(false);

  const minW  = 16;
  const fullW = 36;
  const range = 100;

  var mount = function() {
    setStyle(defaultStyle);
    setWidth(minW);
  };

  var animate = function() {
    if (st.orbiting) {
      setOrbitOn(true);
      setStyle({...style, top: center.y, left: center.x});

      requestAnimationFrame(animate);
      return;
    } else {
      setOrbitOn(false);
    }

    if ((st.mobile) || (mouse.over && mouse.over.id && mouse.over.id === 'homeCircle')) {
      requestAnimationFrame(animate);
      return;
    }

    if (el.current) {
      helpers.handleWidth(el, minW, fullW, range, setWidth);
    }

    requestAnimationFrame(animate);
  };

  var handlePage = function() {
    if (st.page) {
      var pageEl = document.getElementById('pageContainer');
      var rect = pageEl.getBoundingClientRect();

      if (!st.mobile) {
        var newY = (window.innerHeight*0.4) + (window.innerHeight * ((index)*10)/100);
        var transition = 'top 0.25s, left 0.25s, transform 0.25s';

        setStyle({...style, left: rect.left - 50, top: newY, transition: transition});
      } else {
        var newX = (window.innerWidth*0.25) + (window.innerWidth * ((index)*25)/100);

        var newStyle = {
          top: rect.top - 32,
          left: newX,
          width: width,
          margin: `${-width/2}px`,
          transition: 'top 0.25s, left 0.25s, transform 0.25s, width 0.5s, margin 0.5s'
        };

        setStyle({...style, ...newStyle});

        if (st.page === page) {
          setWidth(fullW);
        } else {
          setWidth(minW);
        }
      }
    }
  };

  useEffect(()=>{
    frame.current = requestAnimationFrame(animate);
  }, []);

  useEffect(mount, [show]);
  useEffect(handlePage, [st.page]);
  useEffect(()=>{
  }, [style]);

  return (
    <>
    {!orbitOn && <div ref={el} className='menuItem circle grow' style={{...style, width: width, margin: `${-width/2}px`}} onClick={()=>{st.setPage(page)}}/>}
    {orbitOn && <Orbit coords={coords} index={index}/>}
    {!st.mobile && <ToolTip index={index} text={page} parentEl={el}/>}
    </>
  );
};

export default MenuCircle;