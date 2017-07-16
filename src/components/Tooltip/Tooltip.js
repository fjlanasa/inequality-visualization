import React from 'react';
import './Tooltip.css';
import metricKey from './../../metricKey';

export default function Tooltip(props) {
  let {hoveredState, incomeMetric, wellbeingMetric, tooltipStyle} = props;
  if (hoveredState) {
    return (
      <div className='tooltip' style={tooltipStyle}>
        <div><strong>{hoveredState.state}</strong></div>
        <div>{`${metricKey[incomeMetric].formatted_label}: ${hoveredState[incomeMetric]}`}</div>
        <div>{`${metricKey[wellbeingMetric].formatted_label}: ${hoveredState[wellbeingMetric]}`}</div>
      </div>
    );
  } else {
    return null;
  }
}
