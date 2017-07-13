import React, {Component} from 'react';

export default function StateData(props) {
  let {incomeMetric, wellbeingMetric, minIncomeMetric, maxIncomeMetric, minWellbeingMetric, maxWellbeingMetric, height, width, margin, state} = props;
  let incomePct = (state[incomeMetric] - minIncomeMetric) / (maxIncomeMetric - minIncomeMetric),
      wellbeingPct = (state[wellbeingMetric] - minWellbeingMetric) / (maxWellbeingMetric - minWellbeingMetric);

  // if(['life_expectancy', 'index'].indexOf(wellbeingMetric) == -1) wellbeingYPct = 1 - wellbeingYPct;

  let incomeCoord = incomePct * width + margin.left,
      wellbeingCoord = (1 - wellbeingPct) * height + margin.top;

  return (
    <g>
      <circle cy={wellbeingCoord} cx={incomeCoord} r={3} fill='blue' />
    </g>

  );
}
