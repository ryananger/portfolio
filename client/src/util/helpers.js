import {mouse} from 'util';

var helpers = {
  rand: function(num) {
    return Math.floor(Math.random() * num);
  },
  getRandomCoordinates: function(distance, origin) {
    // generate a random angle in radians
    const angle = Math.random() * 2 * Math.PI;

    // calculate the new coordinates
    var newX = origin.x + distance * Math.cos(angle);
    var newY = origin.y + distance * Math.sin(angle);

    // edge check
    if (newY < 100) {
      newY = 100;
    }

    if (newY > window.innerHeight - 100) {
      newY = window.innerHeight - 100;
    }

    if (newX < 50) {
      newX = 50;
    }

    if (newX > window.innerWidth - 50) {
      newX = window.innerWidth - 50;
    }

    return {x: newX, y: newY};
  },
  updatePosition: function(vel, pos1, pos2, inc) {
    // calculate the angle between 1 and 2
    const deltaX = pos2.x - pos1.x;
    const deltaY = pos2.y - pos1.y;
    const angle  = (Math.atan2(deltaY, deltaX) * (180 / Math.PI)) + (inc || 0);

    // convert angle to radians
    const angleRad = (Math.PI / 180) * angle;

    // calculate new coordinates for 1
    const newX = pos1.x + vel * Math.cos(angleRad);
    const newY = pos1.y + vel * Math.sin(angleRad);

    return {x: newX, y: newY};
  },
  handleWidth: function(el, minW, fullW, range, setWidth) {
    if (!mouse.x && !mouse.y) {
      return;
    }

    var center = helpers.getCenter(el.current);
    var dist   = helpers.getDistance(center, {x: mouse.x, y: mouse.y});
    var rad    = fullW/2;

    if (dist > range) {
      setWidth(minW);
    } else {
      if (dist - rad < 0) {
        setWidth(fullW);
      } else {
        // fullW minus a percentage of the total size difference
        var percTraveled = helpers.sigFigs((dist - rad)/(range - rad), 2);
        var newWidth = helpers.sigFigs(fullW - ((fullW - minW) * percTraveled), 1);

        setWidth(newWidth);
      }
    }
  },
  getDistance: function(coord1, coord2) {
    const dx = coord2.x - coord1.x;
    const dy = coord2.y - coord1.y;

    const dist = helpers.sigFigs(Math.sqrt(dx * dx + dy * dy), 2);

    return dist;
  },
  getCenter: function(el) {
    if (!el) {return}

    const rect = el.getBoundingClientRect();

    const centerX = rect.left + rect.width/2 + window.scrollX;
    const centerY = rect.top + rect.height/2 + window.scrollY;

    return {x: centerX, y: centerY};
  },
  sigFigs: function(val, figs = 3) {
    var num = 1;

    for (var i = 0; i < figs; i++) {
      num += '0';
    }

    num = Number(num);

    return Math.floor(val * num)/num;
  }
};

export default helpers;