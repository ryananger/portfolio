import React, {useEffect, useState, useRef} from 'react';

import {helpers} from 'util';

const RandomString = function() {
  const frame = useRef(null);
  const [string, setString] = useState('');

  var animate = function() {
    var str = '..';

    str += ['Za', 'i8', 'Yct', 'oi1'][helpers.rand(4)];
    str += helpers.rand(10000) + (10000*helpers.rand(8));
    str += '.' + helpers.rand(100) + '.' + helpers.rand(1000);

    setString(str);

    setTimeout(function() {
      requestAnimationFrame(animate);
    }, helpers.rand(4000));
  };

  useEffect(()=>{
    frame.current = requestAnimationFrame(animate);
  }, []);

  return (
    <div className='randomString'>{string}</div>
  );
};

export default RandomString;