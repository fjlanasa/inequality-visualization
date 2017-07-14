import React from 'react';
import './Tooltip.css';

export default function Tooltip(props) {
  let {hoveredState, incomeMetric, wellbeingMetric, tooltipStyle} = props;
  return (
    <div className='tooltip' style={tooltipStyle}>
      <div>{hoveredState['state']}</div>
      <div>{hoveredState[incomeMetric]}</div>
      <div>{hoveredState[wellbeingMetric]}</div>
    </div>
  )
}
