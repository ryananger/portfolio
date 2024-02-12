import React, {useState} from 'react';
import st from 'ryscott-st';

const Debug = function() {
  const [show, setShow] = useState(false);
  const [debug, setDebug] = st.newState('debug', useState('null'));

  if (st.hide) {
    return;
  }

  return (
    <>
      <div className='debug h'>
        {show && debug}
        <div onClick={()=>{setShow(!show)}}>cursor</div>
      </div>
    </>

  );
};

export default Debug;