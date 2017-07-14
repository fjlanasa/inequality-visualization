import React from 'react';
import './Graph.css';
import StateDataPlot from './../StateDataPlot/StateDataPlot';

export default function Graph(props) {
  let margin = {
    left: 50,
    right: 50,
    top: 50,
    bottom: 50
  }

  let {data, incomeMetric, wellbeingMetric, graphType} = props,
      height = 500 - margin.top - margin.bottom,
      width = 750 - margin.left - margin.right;

  let xAxisLines = [0, .25, .5, .75, 1].map((pct, index) => {
    let yLineCoord = pct * height + margin.top;
    return (
      <line className='percentile-line' x1={margin.left} x2={margin.left + width} y1={yLineCoord} y2={yLineCoord} key={index} />
    );
  });

  let maxIncomeMetric = data[0][incomeMetric],
      minIncomeMetric = data[0][incomeMetric],
      maxWellbeingMetric = data[0][wellbeingMetric],
      minWellbeingMetric = data[0][wellbeingMetric],
      stateDataPlots = [],
      xSeries = [],
      ySeries = [],
      series = [],
      leastSquaresLine;

  data.forEach((state) => {
    let stateIncomeMetric = state[incomeMetric],
        stateWellbeingMetric = state[wellbeingMetric];

    if (stateIncomeMetric && stateWellbeingMetric ) {
      stateDataPlots.push(state);
      if (stateIncomeMetric > maxIncomeMetric) maxIncomeMetric = stateIncomeMetric;
      if (stateIncomeMetric < minIncomeMetric) minIncomeMetric = stateIncomeMetric;
      if (stateWellbeingMetric > maxWellbeingMetric) maxWellbeingMetric = stateWellbeingMetric;
      if (stateWellbeingMetric < minWellbeingMetric) minWellbeingMetric = stateWellbeingMetric;
    }
  });

  stateDataPlots = stateDataPlots.map((state, index) => {
    let props = {
      incomeMetric,
      wellbeingMetric,
      graphType,
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
      <StateDataPlot
        {...props}
        key={index}
      />
    );
  });

  return (
    <div>
      <svg height={500} width={750}>
        <g className='y-axis-lines'>
          <line className='axis' x1={margin.left} x2={margin.left} y1={margin.top} y2={margin.top + height} />
          <line className='axis' x1={width + margin.left} x2={width + margin.left} y1={margin.top} y2={margin.top + height} />
        </g>
        <g className='x-axis-lines'>
          {xAxisLines}
        </g>
        <g className='state-data'>
          {stateDataPlots}
        </g>
      </svg>
    </div>
  );
}
