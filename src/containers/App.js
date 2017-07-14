import React, { Component } from 'react';
import Graph from './../components/Graph/Graph';
import RadioButtonCollection from './../components/RadioButtonCollection/RadioButtonCollection';
import Tooltip from './../components/Tooltip/Tooltip';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphType: 'scatter',
      incomeMetric: 'income_inequality',
      wellbeingMetric: 'life_expectancy',
      hoveredState: null,
      tooltipPosition: null
    }

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let newState = {}
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  handleMouseEnter(e) {
    this.setState({
      hoveredState: JSON.parse(e.target.dataset.state),
      tooltipPosition: {
        left: e.pageX + 10,
        top: e.pageY - 10
      }
    });
  }

  handleMouseLeave(e) {
    this.setState({hoveredState: null});
  }

  render() {
    let incomeMetrics = ['income_inequality', 'median_income'],
        wellbeingMetrics = ['life_expectancy', 'teen_births', 'homicides', 'imprisonment', 'drop_outs'],
        graphTypes = ['scatter', 'slope'],
        tooltip = null;

    if (this.state.hoveredState) tooltip = <Tooltip {...this.state} />

    return (
      <div>
        <div className='data-selector income-metric'>
          <RadioButtonCollection name='incomeMetric' options={incomeMetrics} handleChange={this.handleChange} {...this.state}/>
        </div>
        <div className='data-selector wellbeing-metric'>
          <RadioButtonCollection name='wellbeingMetric' options={wellbeingMetrics} handleChange={this.handleChange} {...this.state}/>
        </div>
        <div className='data-selector chart-type'>
          <RadioButtonCollection name='graphType' options={graphTypes} handleChange={this.handleChange} {...this.state}/>
        </div>
        <Graph {...this.state} {...this.props} handleMouseEnter={this.handleMouseEnter} handleMouseLeave={this.handleMouseLeave}/>
        {tooltip}
      </div>
    );
  }
}
