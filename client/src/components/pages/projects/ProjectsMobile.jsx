import React, {useEffect, useState} from 'react';
import st from 'ryscott-st';

import Project from './Project.jsx';

const Projects = function() {
  const [project, setProject] = st.newState('project', useState(null));

  var renderProjects = function() {
    var rendered = [];

    for (var key in projectInfo) {
      rendered.push(<Project key={key} title={key} project={projectInfo[key]}/>);
    }

    return rendered;
  };

  useEffect(()=>{}, [project]);

  return (
    <div className='projects f v'>
      {renderProjects()}
    </div>
  );
};

const projectInfo = {
  communitii: {
    info: 'social media app focused on community engagement',
    stack: 'REACT MONGO FIREBASE AWS',
    link: 'https://www.youtube.com/watch?v=BChyIZcNoKw'
  },
  inkgen: {
    info: 'tool that generates a random mandala from an input image',
    stack: 'HTML CSS REACT',
    link: 'https://gen.inkvessels.art'
  },
  jupiterFalls: {
    info: 'educational math game built for web and mobile platforms',
    stack: 'REACT-NATIVE AWS ADOBE-CS',
    link: 'https://jupiterfalls.earthpunk.art'
  },
  'ink.vessels': {
    info: 'illustration and design',
    stack: 'ADOBE-CS PEN PAPER',
    link: 'https://instagram.com/ink.vessels'
  }
};

export default Projects;