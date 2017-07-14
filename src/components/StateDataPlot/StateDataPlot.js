import React from 'react';

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
       handleMouseEnter,
       handleMouseLeave,
       hoveredState
      } = props;

  let incomePct = (state[incomeMetric] - minIncomeMetric) / (maxIncomeMetric - minIncomeMetric),
      wellbeingPct = (state[wellbeingMetric] - minWellbeingMetric) / (maxWellbeingMetric - minWellbeingMetric),
      dataStateAttr = JSON.stringify(state),
      incomeCoord,
      wellbeingCoord;

  let circleClass = (hoveredState && state['state_abbrev'] != hoveredState['state_abbrev'] ? 'opaque' : '');

  if (props.graphType === 'scatter') {
    incomeCoord = incomePct * width + margin.left;
    wellbeingCoord = (1 - wellbeingPct) * height + margin.top;

    return (
      <g>
        <circle className={circleClass} cy={wellbeingCoord} cx={incomeCoord} r={4} />
        <circle className={circleClass} cy={wellbeingCoord} cx={incomeCoord} data-state={dataStateAttr} r={4} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
      </g>
    );
  } else {
    incomeCoord = (1 - incomePct) * height + margin.top;
    wellbeingCoord = (1 - wellbeingPct) * height + margin.top;
    let lineClass = circleClass;
    lineClass += ` ${incomeMetric}-${wellbeingMetric}`;
    lineClass += ` ${(wellbeingCoord > incomeCoord ? 'green' : 'red')}`;

    return (
      <g>
        <circle className={circleClass} cx={margin.left} cy={incomeCoord} r={3} data-state={dataStateAttr} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
        <circle className={circleClass} cx={margin.left + width} cy={wellbeingCoord} r={3} data-state={dataStateAttr} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
        <line x1={margin.left + 3} x2={margin.left + width - 3} y1={incomeCoord} data-state={dataStateAttr} y2={wellbeingCoord} className={lineClass} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>/>
      </g>
    );
  }
}
