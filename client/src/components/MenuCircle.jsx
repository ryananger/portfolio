import React, {useEffect, useState, useRef} from 'react';

import 'styles';
import st from 'ryscott-st';
import {ax, mouse, helpers} from 'util';

import ToolTip from './ToolTip.jsx';

const MenuCircle = function({show, coords, page, index}) {
  const center = {x: window.innerWidth/2, y: window.innerHeight/2};
  const el    = useRef(null);
  const svgEl = useRef(null);
  const frame = useRef(null);

  const [width, setWidth] = useState(16);
  const [style, setStyle] = useState({top: center.y, left: center.x});

  const minW  = 16;
  const fullW = 36;
  const range = 100;

  var mount = function() {
    var colors = ['#ffae97', '#ffcf97', '#97ffce', '#addfd1'];

    let style = {
      position: 'fixed',
      top:  show ? coords.y : center.y,
      left: show ? coords.x : center.x,
      backgroundColor: colors[index]
    };

    setStyle(style);
    setWidth(minW);
  };

  var animate = function() {
    if (mouse.over && mouse.over.id && mouse.over.id === 'homeCircle') {
      requestAnimationFrame(animate);
      return;
    }

    helpers.handleWidth(el, minW, fullW, range, setWidth);
    requestAnimationFrame(animate);
  };

  var handlePage = function() {
    if (st.page) {
      var pageEl = document.getElementById('pageContainer');
      var rect = pageEl.getBoundingClientRect();
      var newY = (window.innerHeight*0.4) + (window.innerHeight * ((index)*10)/100);

      setStyle({...style, left: rect.left - 50, top: newY});
    }
  };

  useEffect(()=>{
    frame.current = requestAnimationFrame(animate);
  }, []);

  useEffect(mount, [show]);
  useEffect(handlePage, [st.page]);
  useEffect(()=>{}, [style]);

  return (
    <>
    <div ref={el} className='menuItem circle grow anchor' style={{...style, width: width, margin: `${-width/2}px`}} onClick={()=>{st.setPage(page)}}/>
    <ToolTip index={index} text={page} parentEl={el}/>
    </>
  );
};

export default MenuCircle;