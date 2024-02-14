import React, {useEffect, useState, useRef} from 'react';

import st from 'ryscott-st';

const ToolTip = function({text, index, parentEl}) {
  const center = {x: -40 + window.innerWidth/2, y: window.innerHeight/2};
  const [tip, setTip] = useState(center);
  const [mounted, setMounted] = useState(false);
  const tipEl = useRef(null);

  const pageY = -12 + (window.innerHeight*0.4) + (window.innerHeight * ((index)*10)/100);

  const style = {
    top: tip.y,
    left: tip.x,
    opacity: tip.x === center.x || !st.showMenu ? 0 : 1,
    width: tip.y === pageY ? 80 : 0
  };

  var handlePage = function() {
    if (st.page) {
      var el = document.getElementById('pageContainer');
      var rect = el.getBoundingClientRect();

      setTip({x: rect.left - 174, y: pageY});
    } else {
      setTip(center);
    }

    setMounted(false);
  };

  var handleMenu = function() {
    if (!st.showMenu) {
      setMounted(false);
      setTip(center);
    }
  };

  useEffect(()=>{
    window.addEventListener('mousemove', function(e) {
      if (st.page) {return}

      if (!mounted && e.target === parentEl.current) {
        var newX = Number(parentEl.current.style.left.replaceAll('px', '')) - 60;
        var newY = Number(parentEl.current.style.top.replaceAll('px', '')) - 72;

        setTip({x: newX, y: newY});
        setMounted(true);

      } else if (e.target !== parentEl.current) {
        setTip(center);
        setMounted(false);
      }
    });
  }, []);

  useEffect(handlePage, [st.page]);
  useEffect(handleMenu, [st.showMenu]);

  return (
    <div ref={tipEl} className='menuTip' style={style}>{text}</div>
  );
};

export default ToolTip;