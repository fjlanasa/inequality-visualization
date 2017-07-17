import React from 'react';
import './MetricDescriptionSection.css';
import metricKey from './../../metricKey';

export default function MetricDescriptionSection(props) {
  let {wellbeingMetric, incomeMetric} = props;
  return (
    <div className='metric-description-section'>
      <div className={`metric-description ${wellbeingMetric}`}>
        <h3>{metricKey[wellbeingMetric].formatted_label}</h3>
        <ul>
          <li>{metricKey[wellbeingMetric].description}</li>
          <li>Source: {metricKey[wellbeingMetric].source}</li>
        </ul>
      </div>
      <div className={`metric-description ${incomeMetric}`}>
        <h3>{metricKey[incomeMetric].formatted_label}</h3>
        <ul>
          <li>{metricKey[incomeMetric].description}</li>
          <li>Source: {metricKey[incomeMetric].source}</li>
        </ul>
      </div>
    </div>
  );
}
