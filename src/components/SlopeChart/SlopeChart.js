import React from 'react';
import './SlopeChart.css';
import StateData from './../StateData/StateData';

export default function SlopeChart(props) {
  let margin = {
    left: 50,
    right: 50,
    top: 50,
    bottom: 50
  }

  let {data, incomeMetric, wellbeingMetric} = props;

  let height = 500 - margin.top - margin.bottom,
      width = 750 - margin.left - margin.right;

  let percentileLines = [0, .25, .5, .75, 1].map((pct, index) => {
    let yLineCoord = pct * height + margin.top;
    return (
      <line className='percentile-line' x1={margin.left} x2={margin.left + width} y1={yLineCoord} y2={yLineCoord} key={index} />
    );
  });

  let maxIncomeMetric = data[0][incomeMetric],
      minIncomeMetric = data[0][incomeMetric],
      maxWellbeingMetric = data[0][wellbeingMetric],
      minWellbeingMetric = data[0][wellbeingMetric],
      stateData = [];

  data.forEach((state) => {
    let stateIncomeMetric = state[incomeMetric],
        stateWellbeingMetric = state[wellbeingMetric];

    if (stateIncomeMetric && stateWellbeingMetric ) {
      stateData.push(state);
      if (stateIncomeMetric > maxIncomeMetric) maxIncomeMetric = stateIncomeMetric;
      if (stateIncomeMetric < minIncomeMetric) minIncomeMetric = stateIncomeMetric;
      if (stateWellbeingMetric > maxWellbeingMetric) maxWellbeingMetric = stateWellbeingMetric;
      if (stateWellbeingMetric < minWellbeingMetric) minWellbeingMetric = stateWellbeingMetric;
    }
  });

  stateData = stateData.map((state, index) => {
    let props = {incomeMetric,
                 wellbeingMetric,
                 minIncomeMetric,
                 maxIncomeMetric,
                 minWellbeingMetric,
                 maxWellbeingMetric,
                 height,
                 width,
                 margin,
                 state
               };
    return (
      <StateData
        {...props}
        key={index}
      />
    );
  });

  return (
    <div>
      <svg height={500} width={750}>
        <g className='axis-lines'>
          <line className='axis' x1={margin.left} x2={margin.left} y1={margin.top} y2={margin.top + height} />
          <line className='axis' x1={width + margin.left} x2={width + margin.left} y1={margin.top} y2={margin.top + height} />
        </g>
        <g className='percentile-lines'>
          {percentileLines}
        </g>
        <g className='state-data'>
          {stateData}
        </g>
      </svg>
    </div>
  );
}
