export default {
  'income_inequality': {
    formatted_label: 'Gini coefficient',
    description: 'State-level Gini coefficient based on household income (1999).',
    source: 'US Census Bureau.',
    format: function(value) {
      return value.toFixed(2);
    }
  },
  'median_income': {
    formatted_label: 'Median household income',
    description: 'State-level median household income (1999).',
    source: 'US Census Bureau.',
    format: function(value) {
      value = Math.round(value).toString();
      return `$${value.slice(0,2)},${value.slice(2)}`;
    }
  },
  'life_expectancy': {
    formatted_label: 'Life expectancy in years',
    description: 'Life expectancy at birth for men and women (2000).',
    source: 'US Census Bureau Population Division.',
    format: function(value) {
      return value.toFixed(2);
    }
  },
  'teen_births': {
    formatted_label: 'Teenage birth rate per 1,000',
    description: 'Births per 1000 women aged 15-19 years (2000).',
    source: 'US National Vital Statistics.',
    format: function(value) {
      return value.toFixed(2);
    }
  },
  'homicides': {
    formatted_label: 'Homicide rate per 100,000',
    description: 'Homicide rate per 100,000 (1999).',
    source: 'Federal Bureau of Investigation. Crime in the United States 1999.',
    format: function(value) {
      return value.toFixed(2);
    }
  },
  'imprisonment': {
    formatted_label: 'Prisoners per 100,000',
    description: 'Prisoners per 100,000 (1997-1998).',
    source: 'US Department of Justice BoJS. Incarceration rates for prisoners under State or Federal jurisdiction.',
    format: function(value) {
      return value.toFixed(2);
    }
  },
  'drop_outs': {
    formatted_label: 'High school drop out rate',
    description: 'Percentage of population aged 25 years and over with less than high school completion (2000).',
    source: 'US National Center for Education Statistics.',
    format: function(value) {
      return `${value.toFixed(2)}%`;
    }
  },
}
