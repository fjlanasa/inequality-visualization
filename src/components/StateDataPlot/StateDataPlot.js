import React from 'react';
import './StateDataPlot.css';

export default function StateData(props) {
  let {incomeMetric,
       wellbeingMetric,
       minIncomeMetric,
       maxIncomeMetric,
       minWellbeingMetric,
       maxWellbeingMetric,
       height,
       width,
       margin,
       state,
       handleStateMouseEnter,
       handleStateMouseLeave,
       hoveredState
      } = props;

      let incomeRange = maxIncomeMetric - minIncomeMetric,
          wellbeingRange = maxWellbeingMetric - minWellbeingMetric,
          incomePct = (state[incomeMetric] - minIncomeMetric) / incomeRange,
          wellbeingPct = (state[wellbeingMetric] - minWellbeingMetric) / wellbeingRange,
          dataStateAttr = JSON.stringify(state),
          incomeCoord,
          wellbeingCoord;

  let circleClass = (hoveredState && state.state_abbrev !== hoveredState.state_abbrev ? 'opaque' : '');

  if (props.graphType === 'scatter') {
    incomeCoord = incomePct * width + margin.left;
    wellbeingCoord = (1 - wellbeingPct) * height + margin.top;

    return (
      <g>
        <circle className={circleClass} cy={wellbeingCoord} cx={incomeCoord} r={4} />
        <circle className={circleClass} cy={wellbeingCoord} cx={incomeCoord} data-state={dataStateAttr} r={4} onMouseEnter={handleStateMouseEnter} onMouseLeave={handleStateMouseLeave}/>
      </g>
    );
  } else {
    incomeCoord = (1 - incomePct) * height + margin.top;
    wellbeingCoord = (1 - wellbeingPct) * height + margin.top;
    let lineClass = circleClass;
    lineClass += ` ${incomeMetric}-${wellbeingMetric}`;
    lineClass += ` ${(wellbeingCoord < incomeCoord ? 'green' : 'red')}`;

    return (
      <g>
        <circle className={circleClass} cx={margin.left} cy={wellbeingCoord} r={3} data-state={dataStateAttr} onMouseEnter={handleStateMouseEnter} onMouseLeave={handleStateMouseLeave}/>
        <circle className={circleClass} cx={margin.left + width} cy={incomeCoord} r={3} data-state={dataStateAttr} onMouseEnter={handleStateMouseEnter} onMouseLeave={handleStateMouseLeave}/>
        <line x1={margin.left + 3} x2={margin.left + width - 3} y1={wellbeingCoord} data-state={dataStateAttr} y2={incomeCoord} className={lineClass} onMouseEnter={handleStateMouseEnter} onMouseLeave={handleStateMouseLeave}/>/>
      </g>
    );
  }
}
