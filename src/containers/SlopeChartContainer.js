import React, { Component } from 'react';
import SlopeChart from './../components/SlopeChart/SlopeChart';
import RadioButtonCollection from './../components/RadioButtonCollection/RadioButtonCollection';

export default class SlopeChartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incomeMetric: 'income_inequality',
      wellbeingMetric: 'life_expectancy'
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let newState = {}
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  render() {
    let incomeMetrics = ['income_inequality', 'median_income'],
        wellbeingMetrics = ['life_expectancy', 'teen_births', 'homicides', 'imprisonment', 'drop_outs'];

    return (
      <div>
        <div className='data-selector income-metric'>
          <RadioButtonCollection name='incomeMetric' options={incomeMetrics} handleChange={this.handleChange} {...this.state}/>
        </div>
        <div className='data-selector wellbeing-metric'>
          <RadioButtonCollection name='wellbeingMetric' options={wellbeingMetrics} handleChange={this.handleChange} {...this.state}/>
        </div>
        <SlopeChart {...this.state} data={this.props.data} />
      </div>
    );
  }
}
