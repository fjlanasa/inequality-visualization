import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SlopeChartContainer from './containers/SlopeChartContainer'
import registerServiceWorker from './registerServiceWorker';
import data from './inequality-data'

ReactDOM.render(<SlopeChartContainer data={data}/>, document.getElementById('root'));
registerServiceWorker();
