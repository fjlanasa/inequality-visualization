import React from 'react';

export default function StateData(props) {
  let {incomeMetric, wellbeingMetric, minIncomeMetric, maxIncomeMetric, minWellbeingMetric, maxWellbeingMetric, height, width, margin, state} = props;

  let incomePct = (state[incomeMetric] - minIncomeMetric) / (maxIncomeMetric - minIncomeMetric),
      wellbeingPct = (state[wellbeingMetric] - minWellbeingMetric) / (maxWellbeingMetric - minWellbeingMetric),
      incomeCoord,
      wellbeingCoord;

  if (props.graphType === 'scatter') {
    incomeCoord = incomePct * width + margin.left,
    wellbeingCoord = (1 - wellbeingPct) * height + margin.top;
    return (
      <g>
        <circle cy={wellbeingCoord} cx={incomeCoord} r={5} fill='blue' />
        <circle cy={wellbeingCoord} cx={incomeCoord} r={5} fill='blue' />
      </g>
    );
  } else {
    incomeCoord = (1 - incomePct) * height + margin.top,
    wellbeingCoord = (1 - wellbeingPct) * height + margin.top;
    return (
    <g>
      <circle cx={margin.left} cy={incomeCoord} r={3} fill='blue' />
      <circle cx={margin.left + width} cy={wellbeingCoord} r={3} fill='blue' />
      <line x1={margin.left} x2={margin.left + width} y1={incomeCoord} y2={wellbeingCoord} className={(wellbeingCoord > incomeCoord ? `red ${incomeMetric}-${wellbeingMetric}`: `green ${incomeMetric}-${wellbeingMetric}`)} />
    </g>
  );
  }
}
