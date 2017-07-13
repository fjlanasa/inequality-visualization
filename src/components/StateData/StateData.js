import React, {Component} from 'react';

export default function StateData(props) {
  let {incomeMetric, wellbeingMetric, minIncomeMetric, maxIncomeMetric, minWellbeingMetric, maxWellbeingMetric, height, width, margin, state} = props;
  let incomeYPct = (state[incomeMetric] - minIncomeMetric) / (maxIncomeMetric - minIncomeMetric),
      wellbeingYPct = (state[wellbeingMetric] - minWellbeingMetric) / (maxWellbeingMetric - minWellbeingMetric);

  if(['life_expectancy', 'index'].indexOf(wellbeingMetric) == -1) wellbeingYPct = 1 - wellbeingYPct;

  let incomeYCoord = (1 - incomeYPct) * height + margin.top,
      wellbeingYCoord = (1 - wellbeingYPct) * height + margin.top;

  return (
    <g>
      <circle cx={margin.left} cy={incomeYCoord} r={3} fill='blue' />
      <circle cx={margin.left + width} cy={wellbeingYCoord} r={3} fill='blue' />
      <line x1={margin.left} x2={margin.left + width} y1={incomeYCoord} y2={wellbeingYCoord} className={(wellbeingYCoord > incomeYCoord ? 'red': 'green')} />
    </g>
  );
}
