import React, {useEffect, useState, useRef} from 'react';
import st from 'ryscott-st';

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

      rendered.push(<div key={entry} className='badge' style={style}>{entry.replaceAll('-', ' ')}</div>);
    });

    return rendered;
  };

  const titleStyle = show ? {height: '0%', opacity: '0'} : {height: '100%', opacity: '1'};
  const infoStyle = show ? {height: '100%', opacity: '1'} : {height: '0%', opacity: '0'};

  useEffect(()=>{
    setShow(st.project === title);
  }, [st.project]);

  return (
    <div className='project v' onClick={()=>{st.setProject(title)}}>
      <div ref={titleEl} className='projectTitle v' style={titleStyle}>{title}</div>
      <div ref={infoEl} className='projectCard v' style={infoStyle}>
        <div className='projectInfo v'>
          <div className='projectCardHead h'/>
          <div className='projectText'>{info}</div>
          <b className='openButton grow' style={{opacity: show ? 1 : 0}} onClick={()=>{window.open(project.link, '_blank')}}>open</b>
        </div>
        <div className='badges h'>{renderStack()}</div>
      </div>
    </div>
  );
};

export default Project;