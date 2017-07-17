import React from 'react';
import './LabelCollection.css';
import metricKey from './../../metricKey';

export default function LabelCollection(props) {
  let labels,
      {height, width, margin, incomeMetric, wellbeingMetric, maxIncomeMetric, minIncomeMetric, maxWellbeingMetric, minWellbeingMetric, graphType, position} = props;

  if (position === 'y-left') {
    labels = [0, .25, .5, .75, 1].map((pct, index) => {
      let yCoord = pct * height + margin.top,
          labelText = metricKey[wellbeingMetric].format(minWellbeingMetric + ((maxWellbeingMetric - minWellbeingMetric)  * (1 - pct))) || minWellbeingMetric;
      return (
        <text className={`axis-label ${wellbeingMetric}`} textAnchor='end' x={margin.left - 10} y={yCoord + 3} key={index}>{labelText}</text>
      );
    });
  } else if (position === 'y-right' && graphType === 'slope') {
    labels = [0, .25, .5, .75, 1].map((pct, index) => {
      let yCoord = pct * height + margin.top,
          labelText = metricKey[incomeMetric].format(minIncomeMetric + ((maxIncomeMetric - minIncomeMetric)  * (1 - pct))) || minIncomeMetric;
      return (
        <text className={`axis-label ${incomeMetric}`} x={margin.left + width + 10} y={yCoord + 3} key={index}>{labelText}</text>
      );
    });
  } else if (position === 'x' && graphType === 'scatter') {
    labels = [0, .25, .5, .75, 1].map((pct, index) => {
      let xCoord = pct * width + margin.left,
          labelText = metricKey[incomeMetric].format(minIncomeMetric + ((maxIncomeMetric - minIncomeMetric)  * pct)) || minIncomeMetric;
      return (
        <text className={`axis-label ${incomeMetric}`} x={xCoord - 5} y={height + margin.top + 15} key={index}>{labelText}</text>
      );
    });
  } else if (!position && graphType === 'scatter') {
    labels = (
      <g>
        <text textAnchor='middle' className={`axis-label ${incomeMetric}`} x={(width + margin.left + margin.right) / 2} y={height + margin.top + 40}>{metricKey[incomeMetric].formatted_label}</text>
        <text textAnchor='middle' transform={`rotate(-90 ${(margin.left / 3)} ${(height + margin.top + margin.bottom) / 2})`} className={`axis-label ${wellbeingMetric}`} x={margin.left / 3} y={(height + margin.top + margin.bottom) / 2}>{metricKey[wellbeingMetric].formatted_label}</text>
      </g>
    );
  } else if (!position && graphType === 'slope') {
    labels = (
      <g>
        <text textAnchor='middle' className={`axis-label ${wellbeingMetric}`} x={(width + margin.left + margin.right) * .1} y={height + margin.top + 40}>{metricKey[wellbeingMetric].formatted_label}</text>
        <text textAnchor='middle' className={`axis-label ${incomeMetric}`} x={(width + margin.left + margin.right) * .9} y={height + margin.top + 40}>{metricKey[incomeMetric].formatted_label}</text>
      </g>
    );
  } else {
    return null;
  }
  return (
    <g>
      {labels}
    </g>
  );
}
