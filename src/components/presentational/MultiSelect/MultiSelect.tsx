import React from 'react';
import './MultiSelect.scss';

export interface MultiSelectOptionProps {
  label: string;
  value: string;
  selected: boolean;
}

export interface MultiSelectProps {
  options: MultiSelectOptionProps[];
  placeholder?: string;
  handleSelect: (value: string, selected: boolean) => void;
}

export const MultiSelect = ({
  placeholder = 'select options:',
  options,
  handleSelect,
}: MultiSelectProps) => {
  return (
    <div className='MultiSelect'>
      <span>{placeholder}</span>
      <div className='selected'>
        {
          options
            .filter(({ selected }) => selected)
            .map(({ label, value }) => {
            return (
              <div className='option' key={value} onClick={() => handleSelect(value, false)}>{label}</div>
            )
          })
        }
      </div>
      <br/>
      <div className='unselected'>
        {
          options
            .filter(({ selected }) => !selected)
            .map(({ label, value }) => {
            return (
              <div className='option' key={value} onClick={() => handleSelect(value, true)}>{label}</div>
            )
          })
        }
      </div>
    </div>
  )
}
