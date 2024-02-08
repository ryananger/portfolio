import React, {useEffect, useState, useRef} from 'react';

import 'styles';
import st from 'ryscott-st';
import {ax, mouse, helpers} from 'util';

const Circle = function({min = 12, max = 150, range = 300, show, id, tag, random, coords, onClick}) {
  const [width, setWidth] = useState(min);
  const [style, setStyle] = useState({});
  const minW = min;
  const fullW = max;
  const el = useRef(null);

  const classString = `${tag || ''} circle`;

  var mount = function() {
    setStyle({width: width});
  };

  var animate = function() {
    helpers.handleWidth(el, minW, fullW, range, setWidth);

    requestAnimationFrame(animate);
  };

  useEffect(()=>{
    var frame = requestAnimationFrame(animate);
  }, []);

  useEffect(mount, [coords]);

  return (
    <>
    {!show && <div id={id || ''} ref={el} className={classString} style={{...style, width: width, margin: `${-width/2}px`}} onClick={onClick}/>}
    {show && <div id={id || ''} ref={el} className={classString} style={{...style, width: fullW, margin: `${-fullW/2}px`}} onClick={onClick}/>}
    </>
  );
};

export default Circle;