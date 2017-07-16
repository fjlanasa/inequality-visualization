import React, { Component } from 'react';
import './App.css';
import Graph from './../components/Graph/Graph';
import RadioButtonCollection from './../components/RadioButtonCollection/RadioButtonCollection';
import Tooltip from './../components/Tooltip/Tooltip';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDashButton: null,
      graphType: 'scatter',
      incomeMetric: 'income_inequality',
      wellbeingMetric: 'life_expectancy',
      hoveredState: null,
      tooltipStyle: null
    }

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClickOutDash = this.handleClickOutDash.bind(this);
    this.handleDashButtonClick = this.handleDashButtonClick.bind(this);
  }

  handleChange(e) {
    let newState = {}
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  handleMouseEnter(e) {
    this.setState({
      hoveredState: JSON.parse(e.target.dataset.state),
      tooltipStyle: {
        height: '100px',
        maxWidth: '250px',
        minWidth: '225px',
        left: e.pageX + (e.pageX > window.innerWidth / 2 ? -300 : 10),
        top: e.pageY + (e.pageY > window.innerHeight / 2 ? -115 : 10),
      }
    });
  }

  handleMouseLeave(e) {
    this.setState({hoveredState: null});
  }

  handleClickOutDash(e) {
    this.setState({selectedDashButton: null});
  }

  handleDashButtonClick(e) {
    e.stopPropagation();
    this.setState({selectedDashButton: e.currentTarget.dataset.selector});
  }

  render() {
    let incomeMetrics = ['income_inequality', 'median_income'],
        wellbeingMetrics = ['life_expectancy', 'teen_births', 'homicides', 'imprisonment', 'drop_outs'],
        graphTypes = ['scatter', 'slope'];

    return (
      <div onClick={this.handleClickOutDash}>
        <div className='data-selector-collection'>
          <div className={`${(this.state.selectedDashButton === 'income' ? 'selected' : '')} data-selector income-metric`} data-selector='income' onClick={this.handleDashButtonClick} onMouseEnter={this.handleClickOutDash}>
            <div className='selector-btn'>Income Metric</div>
            <RadioButtonCollection name='incomeMetric' options={incomeMetrics} handleChange={this.handleChange} {...this.state}/>
          </div>
          <div className={`${(this.state.selectedDashButton === 'wellbeing' ? 'selected' : '')} data-selector wellbeing-metic`} data-selector='wellbeing' onClick={this.handleDashButtonClick} onMouseEnter={this.handleClickOutDash}>
            <div className='selector-btn'>Wellbeing Metric</div>
            <RadioButtonCollection name='wellbeingMetric' options={wellbeingMetrics} handleChange={this.handleChange} {...this.state}/>
          </div>
          <div className={`${(this.state.selectedDashButton === 'chart' ? 'selected' : '')} data-selector chart-type`} data-selector='chart' onClick={this.handleDashButtonClick} onMouseEnter={this.handleClickOutDash}>
            <div className='selector-btn'>Graph Type</div>
            <RadioButtonCollection name='graphType' options={graphTypes} handleChange={this.handleChange} {...this.state}/>
          </div>
        </div>
        <Graph {...this.state} {...this.props} handleMouseEnter={this.handleMouseEnter} handleMouseLeave={this.handleMouseLeave}/>
        <Tooltip {...this.state} />
      </div>
    );
  }
}
