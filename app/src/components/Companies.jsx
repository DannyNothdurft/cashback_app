import React from 'react'

// Data
import companies from '../data/companies.json';

function Companies() {
  return (
    <div className='companie-componente'>
        { companies.map( companie => {
            return (
                <a href={companie.link}>
                    <img
                        className='companie-img'
                        src={companie.img}
                        alt="Firmen Icon"
                    />
                </a>
            );
        } ) }
    </div>
  );
}

export default Companies;