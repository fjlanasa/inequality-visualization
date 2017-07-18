import React from 'react';
import './AboutSection.css';

export default function AboutSection(props) {
  return (
    <div id='about'>
      <h2>About the Data</h2>
      <p className='about-content'>
        This data was originally gathered from <a href='https://www.equalitytrust.org.uk/notes-statistical-sources-and-methods' target="_blank" rel="noopener noreferrer">
        publicly available sources</a> by Professors Richard Wilkinson and Kate Pickett
        for publication in <a href='https://www.amazon.com/Spirit-Level-Equality-Societies-Stronger/dp/1608193411' target="_blank" rel="noopener noreferrer"> The
        Spirit Level</a> (2011). Their compiled spreadsheets can be downloaded for a small donation
        to <a href='https://www.equalitytrust.org.uk/civicrm/contribute/transact?reset=1&id=5' target="_blank" rel="noopener noreferrer"> The
        Equality Trust</a>.
      </p>
    </div>
  );
}
