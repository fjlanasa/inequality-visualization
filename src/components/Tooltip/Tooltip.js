import React from 'react';
import './Tooltip.css';

export default function Tooltip(props) {
  let {hoveredState, incomeMetric, wellbeingMetric, tooltipPosition} = props;
  return (
    <div className='tooltip' style={tooltipPosition}>
      <div>{hoveredState['state']}</div>
      <div>{hoveredState[incomeMetric]}</div>
      <div>{hoveredState[wellbeingMetric]}</div>
    </div>
  )
}
