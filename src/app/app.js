import React from 'react';
import Main from './Main';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {render} from 'react-dom';

// Needed for onTouchTap (http://stackoverflow.com/a/34015469/988941).
injectTapEventPlugin();

render(<Main/>, document.getElementById('app'));
