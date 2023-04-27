import React from 'react';
import { FlexBox } from "components/presentational/FlexBox/FlexBox";


import './Roster.scss';

export const Roster = () => {
  return (
    <div className='Roster'>
      <FlexBox direction='column'>
        <span>Placeholder for roster</span>
        <FlexBox direction='column'>
          <RosterPlayer/>
        </FlexBox>
      </FlexBox>
    </div>
  );
}

export const RosterPlayer = () => {
  return (
    <div className='RosterPlayer'>
      <FlexBox>
        <div className='PlayerStatus'></div>
        <div className='PlayerName'>
          <span>Player 1</span>
        </div>
        <div className='PlayerPosition'>
          <span>OH</span>
        </div>
      </FlexBox>
    </div>
  )
}