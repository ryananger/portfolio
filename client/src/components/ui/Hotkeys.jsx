import React from 'react';

import st from 'ryscott-st';

const Hotkeys = function() {
  const style = st.hide ? {opacity: 0} : {opacity: 1};

  if (st.mobile) {
    var handleClick = function() {
      st.setRotate(!st.rotate);
    };

    return (
      <div className='rotateButton h' style={style} onClick={handleClick}>rotate</div>
    );
  }

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
  );
};

export default Hotkeys;