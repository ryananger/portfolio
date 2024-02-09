import React, {useEffect, useState, useRef} from 'react';

import {helpers} from 'util';

const Project = function({title, project}) {
  const [show, setShow] = useState(false);
  const titleEl = useRef(null);
  const infoEl  = useRef(null);

  const info  = project.info;
  const stack = project.stack;

  var renderStack = function() {
    var rendered = [];

    var split = stack.split(' ');

    split.map(function(entry, i) {
      var style = {};

      if (i !== 0) {
        style = {borderLeft: '1px solid'};
      }

      rendered.push(<div key={entry} className='badge' style={style}>{entry.replaceAll('-', ' ')}</div>)
    })

    return rendered;
  };

  useEffect(()=>{
    if (show) {
      infoEl.current.scrollIntoView({behavior: 'smooth', block: 'end'});
    } else {
      titleEl.current.scrollIntoView({behavior: 'smooth', block: 'end'});
    }
  }, [show]);

  return (
    <div className='project v' onClick={()=>{setShow(!show)}}>
      <div ref={titleEl} className='projectTitle v'>{title}</div>
      <div ref={infoEl} className='projectCard v'>
        <div className='projectInfo v'>
          <div className='projectCardHead h'/>
          <div className='projectText'>{info}</div>
          <b className='openButton grow' onClick={()=>{window.open(project.link, '_blank')}}>open</b>
        </div>
        <div className='badges h'>{renderStack()}</div>
      </div>
    </div>
  )
};

export default Project;