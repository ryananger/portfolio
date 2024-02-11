import React, {useEffect, useState} from 'react';

const Hotkeys = function() {
  const style = st.hide ? {opacity: 0} : {opacity: 1};

  return (
    <div className='hotkeys h' style={style}>
      press &nbsp;
      <div className='hotkey v'>M</div>
      <div className='hotkey v'>1</div>
      <div className='hotkey v'>2</div>
      <div className='hotkey v'>3</div>
      <div className='hotkey v'>R</div>
      <div className='hotkey v'>h</div>
      &nbsp; to interface
    </div>
  )
};

export default Hotkeys;