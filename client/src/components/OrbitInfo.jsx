import React, {useEffect, useState} from 'react';

const OrbitInfo = function() {
  const style = !st.showMenu || st.page || st.hide ? {opacity: 0, pointerEvents: 'none'} : {opacity: 1};

  if (st.mobile) {
    var handleClick = function() {
      if (st.orbiting) {
        st.cancelOrbit();
      } else {
        st.orbiting = true;
        st.inc = 91;
      }
    }

    return (
      <div className='orbitButton h' style={style} onClick={handleClick}>orbit</div>
    );
  }

  return (
    <div className='orbitInfo h' style={style}>press <div className='hotkey orbitKey v'>O</div> to engage orbit</div>
  )
};

export default OrbitInfo;