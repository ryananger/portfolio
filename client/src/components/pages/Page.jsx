import React, {useEffect, useState, useRef} from 'react';

import st from 'ryscott-st';
import {helpers} from 'util';

import RandomString from './RandomString.jsx';

const Page = function({content}) {
  const [showContent, setShowContent] = useState(false);
  const page = st.page;
  const style = {
    opacity: showContent ? 1 : 0,
    alignItems: ['start', 'end'][helpers.rand(2)]
  };

  const headings = {
    info: '..HMSP.RA31415.24.info',
    projects: '..HMSP.RA31415.24.projects',
    contact: '..HMSP.RA31415.24.contact'
  };

  var renderHeadLines = function() {
    const x1 = st.mobile ? helpers.rand(80) + 220 : helpers.rand(200) + 240;
    const x2 = x1 + 4;

    return (
      <>
      <div className='headLine' style={{left: x1, width: '3px'}}/>
      <div className='headLine' style={{left: x2, width: '2px'}}/>
      </>
    )
  };

  useEffect(()=>{
    if (!page) {
      setShowContent(false);
    } else {
      setTimeout(()=>{
        setShowContent(true);
      }, 1000);
    }
  }, [page]);

  return (
    <div id='pageAnchor'>
      <div id='pageContainer' className='v'>
        <div className={'page v ' + (!page ? 'closedPage' : '')}>
          <div className='pageHead h'>
            <h4>{headings[page]}</h4>
            {renderHeadLines()}
            <div className='closeIcon' onClick={()=>{st.setShowMenu(false)}}/>
          </div>
          <div className='pageContent v' style={style}>
            {content}
          </div>
          {page && <RandomString />}
        </div>
      </div>
    </div>
  );
};

export default Page;