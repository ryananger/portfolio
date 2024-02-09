import React, {useEffect, useState} from 'react';
import st from 'ryscott-st';

import {helpers} from 'util';
import Project from './Project.jsx';

const Projects = function() {
  var renderProjects = function(mod) {
    var rendered = [];
    var i = 0;
    var tag = mod ? 'bottom' : 'top';

    for (var key in projectInfo) {
      if (!mod && i < 2) {
        rendered.push(<Project key={key} title={key} project={projectInfo[key]}/>);
      } else if (mod && i >= 2) {
        rendered.push(<Project key={key} title={key} project={projectInfo[key]}/>);
      }

      i++;
    }

    return (
      <div className={'projectsRow h ' + tag}>
        {rendered}
      </div>
    );
  };

  return (
    <div className='projects f v'>
      {renderProjects(0)}
      {renderProjects(1)}
    </div>
  )
};

const projectInfo = {
  communitii: {
    info: 'social media app focused on community engagement',
    stack: 'REACT MONGO FIREBASE',
    link: 'https://www.youtube.com/watch?v=BChyIZcNoKw'
  },
  inkgen: {
    info: 'tool that generates a random mandala from an input image',
    stack: 'HTML CSS REACT',
    link: 'https://gen.inkvessels.art'
  },
  jupiterFalls: {
    info: 'educational math game built for web and mobile platforms',
    stack: 'REACT-NATIVE ADOBE-CS',
    link: 'https://jupiterfalls.earthpunk.art'
  },
  'ink.vessels': {
    info: 'illustration and design',
    stack: 'ADOBE-CS PEN PAPER',
    link: 'https://instagram.com/ink.vessels'
  }
};

export default Projects;