import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker';
import data from './inequality-data'

ReactDOM.render(<App data={data} svgDimensions={{width: 750, height: 500}} />, document.getElementById('root'));
registerServiceWorker();
