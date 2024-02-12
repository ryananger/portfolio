import React, {useEffect, useState} from 'react';

const Debug = function() {
  const [show, setShow] = useState(false);
  const [debug, setDebug] = st.newState('debug', useState('null'));

  return (
    <>
    <div className='debug h'>
      {show && debug}
      <div onClick={()=>{setShow(!show)}}>debug</div>
    </div>
    </>

  )
};

export default Debug;