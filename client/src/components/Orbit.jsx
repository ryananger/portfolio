import React, {useEffect, useState, useRef} from 'react';

import 'styles';
import st from 'ryscott-st';
import {helpers} from 'util';

var colors = ['#ffae97', '#ffcf97', '#97ffce', '#addfd1'];

st.inc = 91;

const Orbit = function({coords, index}) {
  const center = st.center;
  const frame = useRef(null);
  const defaultStyle = {
    position: 'fixed',
    top:  coords.y + 'px',
    left: coords.x + 'px',
    backgroundColor: colors[index],
    width: '16px',
    margin: '-8px'
  };

  const [style, setStyle] = useState(defaultStyle);

  const g = (1 - (Math.random()/5));
  const pos = useRef(coords);
  const vel = useRef(g * 18);
  const stableDist = st.mobile ? 100 : 250;
  const iterDist = st.mobile ? 50 : 24;

  var animate = function() {
    if (st.orbiting) {
      orbit(1.0005);
    } else {
      vel.current = 0.1;
      pos.current = coords;

      setStyle(defaultStyle);
    }

    requestAnimationFrame(animate);
  };

  var orbit = function(thrust) {
    let dist = helpers.getDistance(center, pos.current);

    let newVel = vel.current;

    if (dist < stableDist + (index * iterDist) - 3) {
      newVel *= thrust;
    } else if (dist > stableDist + (index*iterDist) + 3) {
      newVel *= 0.999;
    } else {
      //nothing
    }

    let gravityChange = helpers.updatePosition(g, pos.current, center);
    let newPos = helpers.updatePosition(newVel, gravityChange, center, st.inc);

    pos.current = newPos;
    vel.current = newVel;

    setStyle({...defaultStyle, left: newPos.x, top: newPos.y});
  };

  useEffect(()=>{
    frame.current = requestAnimationFrame(animate);
  }, []);

  useEffect(()=>{}, [style]);

  return (
    <div className='orbit circle' style={style}/>
  );
};

export default Orbit;