import st      from 'ryscott-st';
import ax      from './ax.js';
import helpers from './helpers.js';

var mouse = {
  x: null,
  y: null,
  over: null
};

window.addEventListener('mousemove', function(e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;

  var element = document.elementFromPoint(mouse.x, mouse.y);

  mouse.over = element ? element : null;
}, {passive: true});

var throttle;

var throttleKey = function() {
  var now = Date.now();
  var chk;

  if (throttle && now - throttle < 100) {
    chk = true;
  } else {
    chk = false;
  }

  throttle = Date.now();
  return chk;
}

window.addEventListener('keyup', function(e) {
  if (e.target.type === 'text') {return};

  if (throttleKey()) {
    return;
  }

  switch (e.key) {
    case 'f':
      break;
    case 'm':
      st.setShowMenu(!st.showMenu);
      break;
    case 'r':
      st.setRotate(!st.rotate);
      break;
    case '1':
    case '2':
    case '3':
      st.setPage(['info', 'projects', 'contact'][e.key - 1]);
      st.setShowMenu(true);
      break;
  }
});

export default mouse;