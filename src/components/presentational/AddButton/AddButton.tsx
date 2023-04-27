import { ButtonBehavior } from 'components/types/ComponentBehaviors';
import React from 'react';

import './AddButton.scss';


export const AddButton = ({handleClick}: ButtonBehavior) => {
  return (
    <button className='AddButton' onClick={handleClick}>
      <span className='line1'></span>
      <span className='line2'></span>
    </button>
  );
}
