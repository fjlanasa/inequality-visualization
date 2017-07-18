import React, { Component } from 'react';
import './App.css';
import Graph from './../components/Graph/Graph';
import Tooltip from './../components/Tooltip/Tooltip';
import Dashboard from './../components/Dashboard/Dashboard';
import MetricDescriptionSection from './../components/MetricDescriptionSection/MetricDescriptionSection';
import AboutSection from './../components/AboutSection/AboutSection';

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

    this.handleStateMouseEnter = this.handleStateMouseEnter.bind(this);
    this.handleStateMouseLeave = this.handleStateMouseLeave.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClickOutDash = this.handleClickOutDash.bind(this);
    this.handleDashButtonSelect = this.handleDashButtonSelect.bind(this);
  }

  handleChange(e) {
    let newState = {}
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  handleStateMouseEnter(e) {
    let height = (window.innerWidth > 700 ? '100px' : '50px'),
        minWidth = (window.innerWidth > 700 ? '225px' : '115px'),
        maxWidth = (window.innerWidth > 700 ? '250px' : '140px'),
        leftAdjustment,
        topAdjustment;

    if (window.innerWidth > 700) {
      leftAdjustment = (e.pageX > window.innerWidth / 2 ? -300 : 10);
      topAdjustment = (e.pageY > window.innerHeight / 2 ? -115 : 10);
    } else {
      leftAdjustment = (e.pageX > window.innerWidth / 2 ? -130 : 10);
      topAdjustment = (e.pageY > window.innerHeight / 2 ? -60 : 10);
    }

    this.setState({
      hoveredState: JSON.parse(e.target.dataset.state),
      tooltipStyle: {
        height: height,
        maxWidth: maxWidth,
        minWidth: minWidth,
        left: e.pageX + leftAdjustment,
        top: e.pageY + topAdjustment
      }
    });
  }

  handleStateMouseLeave(e) {
    this.setState({hoveredState: null});
  }

  handleClickOutDash(e) {
    this.setState({selectedDashButton: null});
  }

  handleDashButtonSelect(e) {
    e.stopPropagation();
    this.setState({selectedDashButton: e.currentTarget.dataset.selector});
  }

  render() {
    return (
      <div onClick={this.handleClickOutDash}>
        <Dashboard handleClickOutDash={this.handleClickOutDash} handleDashButtonSelect={this.handleDashButtonSelect} handleChange={this.handleChange} appState={this.state}/>
        <div id='content'>
          <h1>Economic and Social Indicators Among US States</h1>
          <Graph {...this.state} {...this.props} handleStateMouseEnter={this.handleStateMouseEnter} handleStateMouseLeave={this.handleStateMouseLeave}/>
          <Tooltip {...this.state} />
          <MetricDescriptionSection {...this.state} />
          <AboutSection />
        </div>
      </div>
    );
  }
}
