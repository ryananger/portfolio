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

  if (throttle && now - throttle < 150) {
    chk = true;
  } else {
    chk = false;
  }

  throttle = Date.now();
  return chk;
}

var cancelOrbit = function() {
  st.inc = 70;

  setTimeout(function() {
    st.orbiting = false;
    st.setShowMenu(false);
  }, 1000);
};

st.cancelOrbit = cancelOrbit;

window.addEventListener('keyup', function(e) {
  if (e.target.type === 'text') {return};

  if (throttleKey()) {
    return;
  }

  switch (e.key) {
    case 'h':
      if (!st.hide) {
        st.setHide(true);
      } else {
        st.setHide(false);
      }
      break;
    case 'o':
      if (!st.orbiting && st.showMenu && !st.page) {
        st.orbiting = true;
        st.inc = 91;
      } else if (st.orbiting) {
        cancelOrbit();
      }
      break;
    case 'm':
      if (st.orbiting && st.showMenu) {
        cancelOrbit();
      } else {
        st.setShowMenu(!st.showMenu);
      }

      st.setPage(null);
      break;
    case 'r':
      st.setRotate(!st.rotate);
      break;
    case '1':
    case '2':
    case '3':
      if (st.orbiting) {return};

      st.setPage(['info', 'projects', 'contact'][e.key - 1]);
      st.setShowMenu(true);
      break;
  }
});

export default mouse;