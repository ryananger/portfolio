import React, {useEffect, useState, useRef} from 'react';

import 'styles';
import st from 'ryscott-st';
import {ax, mouse, helpers} from 'util';

const center = {x: -40 + window.innerWidth/2, y: window.innerHeight/2};

var last = null;

const ToolTip = function({text, index, parentEl}) {
  const [tip, setTip] = useState(center);
  const tipEl = useRef(null);
  const frame = useRef(null);

  var animate = function() {
    if (mouse.over && mouse.over.id && mouse.over.id === 'homeCircle') {
      requestAnimationFrame(animate);
      return;
    }

    if (!st.page && mouse.over === parentEl.current) {
      if (Date.now() - last > 1000) {
        setTip({x: mouse.x - 100, y: mouse.y + 20});
        last = Date.now();
      }
    } else if (!st.page) {
      setTip(center);
    }

    requestAnimationFrame(animate);
  };

  var handlePage = function() {
    if (st.page) {
      var el = document.getElementById('pageContainer');
      var rect = el.getBoundingClientRect();
      var newY = (window.innerHeight*0.4) + (window.innerHeight * ((index)*10)/100);

      setTip({x: rect.left - 174, y: newY - 12});
    } else {
      setTip(center);
    }
  };

  useEffect(()=>{
    frame.current = requestAnimationFrame(animate);
  }, []);

  useEffect(handlePage, [st.page]);

  return (
    <div ref={tipEl} className='menuTip' style={{top: tip.y, left: tip.x, opacity: tip.x === center.x || !st.showMenu ? 0 : 1}}>{text}</div>
  );
};

export default ToolTip;