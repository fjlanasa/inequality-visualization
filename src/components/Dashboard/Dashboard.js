import React from 'react';
import RadioButtonCollection from './../RadioButtonCollection/RadioButtonCollection';

export default function Dashboard(props) {
  let {handleChange, handleDashButtonSelect, handleClickOutDash, appState} = props;
  let incomeMetrics = ['income_inequality', 'median_income'],
      wellbeingMetrics = ['life_expectancy', 'teen_births', 'homicides', 'imprisonment', 'drop_outs'],
      graphTypes = ['scatter', 'slope'];

  return (
    <div className='data-selector-collection'>
      <div className={`${(appState.selectedDashButton === 'income' ? 'selected' : '')} data-selector income-metric`} data-selector='income' onClick={(appState.selectedDashButton ? handleClickOutDash : handleDashButtonSelect)} onMouseEnter={handleDashButtonSelect} onMouseLeave={handleClickOutDash} >
        <div className='selector-btn'><p>Income <span className='medium-up-label'>Metric</span></p></div>
        <RadioButtonCollection name='incomeMetric' options={incomeMetrics} handleChange={handleChange} {...appState}/>
      </div>
      <div className={`${(appState.selectedDashButton === 'wellbeing' ? 'selected' : '')} data-selector wellbeing-metic`} data-selector='wellbeing' onClick={(appState.selectedDashButton ? handleClickOutDash : handleDashButtonSelect)} onMouseEnter={handleDashButtonSelect} onMouseLeave={handleClickOutDash}>
        <div className='selector-btn'><p>Wellbeing <span className='medium-up-label'>Metric</span></p></div>
        <RadioButtonCollection name='wellbeingMetric' options={wellbeingMetrics} handleChange={handleChange} {...appState}/>
      </div>
      <div className={`${(appState.selectedDashButton === 'chart' ? 'selected' : '')} data-selector chart-type`} data-selector='chart' onClick={(appState.selectedDashButton ? handleClickOutDash : handleDashButtonSelect)} onMouseEnter={handleDashButtonSelect} onMouseLeave={handleClickOutDash}>
        <div className='selector-btn'><p>Graph <span className='medium-up-label'>Type</span></p></div>
        <RadioButtonCollection name='graphType' options={graphTypes} handleChange={handleChange} {...appState}/>
      </div>
    </div>
  );
}
