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
       handleMouseLeave
      } = props;

  let incomePct = (state[incomeMetric] - minIncomeMetric) / (maxIncomeMetric - minIncomeMetric),
      wellbeingPct = (state[wellbeingMetric] - minWellbeingMetric) / (maxWellbeingMetric - minWellbeingMetric),
      incomeCoord,
      wellbeingCoord;

  if (props.graphType === 'scatter') {
    incomeCoord = incomePct * width + margin.left,
    wellbeingCoord = (1 - wellbeingPct) * height + margin.top;
    return (
      <g>
        <circle cy={wellbeingCoord} cx={incomeCoord} r={4} />
        <circle cy={wellbeingCoord} cx={incomeCoord} data-state={JSON.stringify(state)} r={4} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
      </g>
    );
  } else {
    incomeCoord = (1 - incomePct) * height + margin.top,
    wellbeingCoord = (1 - wellbeingPct) * height + margin.top;
    let r = Math.round((255 * incomePct) / 100),
    g = Math.round((255 * (100 - incomePct)) / 100),
    b = 0;
    return (
      <g>
        <circle cx={margin.left} cy={incomeCoord} r={3} data-state={JSON.stringify(state)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
        <circle cx={margin.left + width} cy={wellbeingCoord} r={3} data-state={JSON.stringify(state)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
        <line x1={margin.left} x2={margin.left + width} y1={incomeCoord} data-state={JSON.stringify(state)} y2={wellbeingCoord} className={(wellbeingCoord > incomeCoord ? `green ${incomeMetric}-${wellbeingMetric}`: `red ${incomeMetric}-${wellbeingMetric}`)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>/>
      </g>
    );
  }
}
