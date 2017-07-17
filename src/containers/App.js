import React, { Component } from 'react';
import './App.css';
import Graph from './../components/Graph/Graph';
import Tooltip from './../components/Tooltip/Tooltip';
import Dashboard from './../components/Dashboard/Dashboard';
import MetricDescriptionSection from './../components/MetricDescriptionSection/MetricDescriptionSection';

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
        <Graph {...this.state} {...this.props} handleStateMouseEnter={this.handleStateMouseEnter} handleStateMouseLeave={this.handleStateMouseLeave}/>
        <Tooltip {...this.state} />
        <MetricDescriptionSection {...this.state} />
      </div>
    );
  }
}
