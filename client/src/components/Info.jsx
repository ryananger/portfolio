import React, {useEffect, useState} from 'react';

import 'styles';
import {helpers} from 'util';

import GrowBar from './GrowBar.jsx';

const Info = function() {
  const skillInfo = {
    JAVASCRIPT: 10,
    HTML: 9,
    CSS: 9,
    REACT: 8,
    EXPRESS: 7,
    MONGO: 6,
    NODE: 6,
    AWS: 4
  };

  var renderBars = function() {
    var rendered = [];
    var i = 0;

    for (var key in skillInfo) {
      rendered.push(<GrowBar key={key} skill={key} num={skillInfo[key]} index={i}/>);
      i++;
    }

    return rendered;
  };

  return (
    <div className='info v'>
      <div className='h f'>
        <div className='infoMain'>
          RYAN ANGER, 34<br/>
          MiCHIGAN, USA, earth.42i8<br/>
          SOFTWARE ENGINEER (MERN)<br/>
          <br/>
          FUTURIST<br/>
          MUSICIAN<br/>
          ILLUSTRATOR<br/>
          USAF AIR TRAFFIC CONTROLLER<br/>
        </div>
        <div className='infoSkills v'>
          {renderBars()}
        </div>
      </div>
      <small id='asimov'>
        The true delight is in the finding out rather than in the knowing.<br/>
        <small>Isaac Asimov, ad.1988</small>
      </small>
    </div>
  )
};

export default Info;