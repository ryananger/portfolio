import React, {useEffect, useState} from 'react';

const OrbitInfo = function() {
  const style = !st.showMenu || st.page ? {opacity: 0} : {opacity: 1};

  return (
    <div className='orbitInfo h' style={style}>press <div className='hotkey orbitKey v'>O</div> to engage orbit</div>
  )
};

export default OrbitInfo;