import React, {useEffect, useState, useRef} from 'react';

import 'styles';
import st from 'ryscott-st';
import {ax, mouse, helpers} from 'util';

import Star from './Star.jsx';

const Stars = function() {
  const [degrees, setDegrees] = useState(0);
  const [scale, setScale] = useState(1);
  const winX = window.innerWidth;

  var renderStars = function() {
    var rendered = [];
    var num = winX >= 1100 ? 150 : 50;

    for (var i = 0; i < num; i++) {
      var min = 1;
      var max = helpers.rand(6) + min + min;

      rendered.push(<Star key={i} min={min} max={max}/>);
    }

    return rendered;
  };

  return (
    <div className='stars'>
      {renderStars()}
    </div>
  )
};

export default Stars;