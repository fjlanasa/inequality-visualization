import React, {Component} from 'react';

export default function StateData(props) {
  let {incomeMetric, wellbeingMetric, minIncomeMetric, maxIncomeMetric, minWellbeingMetric, maxWellbeingMetric, height, width, margin, state} = props;
  let incomeYPct = (state[incomeMetric] - minIncomeMetric) / (maxIncomeMetric - minIncomeMetric),
      wellbeingYPct = (state[wellbeingMetric] - minWellbeingMetric) / (maxWellbeingMetric - minWellbeingMetric);

  if(['life_expectancy', 'index'].indexOf(wellbeingMetric) == -1) wellbeingYPct = 1 - wellbeingYPct;

  let incomeYCoord = (1 - incomeYPct) * height + margin.top,
      wellbeingYCoord = (1 - wellbeingYPct) * width + margin.left;

  return (
    <g>
      <circle cx={wellbeingYCoord} cy={incomeYCoord} r={3} fill='blue' />
    </g>

  );
}
