import React, {useEffect, useState} from 'react';

import Hotkeys from './Hotkeys.jsx';

const Info = function() {
  return (
    <div className='contact f v'>
      <div className='contactMain v f'>
        <div className='h' style={{width: '100%'}}><b>Email:</b> <a href='mailto:ryan.anger.314@gmail.com'>ryan.anger.314@gmail.com</a></div>
        <div className='h' style={{width: '100%'}}><b>Phone:</b> <a href='tel:17345307883'>734-530-7883</a></div>
        <div className='h' style={{width: '100%'}}><b>LinkedIn:</b> <a href='https://linkedin.com/in/ryscott89'>linkedin.com/in/ryscott89</a></div>
        <div className='h' style={{width: '100%'}}><b>GitHub:</b> <a href='https://github.com/ryananger'>github.com/ryananger</a></div>
        <div className='h' style={{width: '100%'}}><b>Resume:</b> <a href='https://docs.google.com/document/d/1IPqpl7-mlfBT8mdvCxSqdyoSIJqduUxeeRUuEle7KH8/edit?usp=sharing'>docs.google.com/doc/d/RA31415</a></div>
      </div>
      <Hotkeys />
      <div className='asimov v'>
        it's all a WORK IN PRoGRESS
      </div>
    </div>
  )
};

export default Info;