import React from 'react';
import './Graph.css';
import StateDataPlot from './../StateDataPlot/StateDataPlot';
import LabelCollection from './../LabelCollection/LabelCollection';

export default function Graph(props) {
  let margin = {
    left: 100,
    right: 50,
    top: 75,
    bottom: 75
  }

  let {data, incomeMetric, wellbeingMetric, graphType, handleStateMouseEnter, handleStateMouseLeave, hoveredState, svgDimensions} = props,
      height = svgDimensions.height - margin.top - margin.bottom,
      width = svgDimensions.width - margin.left - margin.right;

  let xAxisLines = [.25, .5, .75].map((pct, index) => {
    let yLineCoord = pct * height + margin.top;
    return (
      <line className='percentile-line' x1={margin.left} x2={margin.left + width} y1={yLineCoord} y2={yLineCoord} key={index} />
    );
  });

  let maxIncomeMetric = data[0][incomeMetric],
      minIncomeMetric = data[0][incomeMetric],
      maxWellbeingMetric = data[0][wellbeingMetric],
      minWellbeingMetric = data[0][wellbeingMetric],
      stateDataPlots = [];

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

  let newProps = {
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
    handleStateMouseEnter,
    handleStateMouseLeave,
    hoveredState
   };

  stateDataPlots = stateDataPlots.map((state, index) => {
    return (
      <StateDataPlot
        {...newProps}
        state={state}
        key={index}
      />
    );
  });

  return (
    <div className='graph-container'>
      <svg viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}>
        <g className='border-lines'>
          <line className='percentile-line' x1={margin.left} x2={margin.left + width} y1={height + margin.top} y2={height + margin.top} className={(graphType === 'slope' ? 'x-axis-lines' : '')} />
          <line className='percentile-line' x1={margin.left} x2={margin.left + width} y1={margin.top} y2={margin.top} className={(graphType === 'slope' ? 'x-axis-lines' : '')}/>
          <line className='axis' x1={margin.left} x2={margin.left} y1={margin.top} y2={margin.top + height} />
          <line className='axis' x1={width + margin.left} x2={width + margin.left} y1={margin.top} y2={margin.top + height} />
        </g>
        <g className='x-axis-lines'>
          {xAxisLines}
        </g>
        <g className='state-data'>
          {stateDataPlots}
        </g>
        <g className='labels'>
          <LabelCollection position='y-left' {...newProps} />
          <LabelCollection position='y-right' {...newProps} />
          <LabelCollection position='x' {...newProps} />
        </g>
      </svg>
    </div>
  );
}
