// CSS and SASS files
import './index.scss';

// Remove the two following lines to remove the product hunt floating prompt
// Remove the following lines to remove the darkmode js
import Darkmode from 'darkmode-js';

function addDarkmodeWidget() {
  new Darkmode().showWidget();
}
window.addEventListener('load', addDarkmodeWidget);
