import React from 'react';
import { FlexBox } from "components/presentational/FlexBox/FlexBox";


import './Roster.scss';
import { VOLLEYBALL_PLAYER_POSITIONS } from 'components/types/VOLLEYBALL_PLAYER_POSITIONS.enum';
import { AddButton } from '../AddButton/AddButton';

export const Roster = () => {
  const handleClick = () => console.log('fuck u');

  return (
    <div className='Roster'>
      <FlexBox direction='column' alignItems='center'>
        <span className='RosterTitle'>Placeholder for roster</span>
        <FlexBox direction='column' alignItems='center'>
          <RosterPlayer name='elias'/>
        </FlexBox>
        <FlexBox justify='center'>
          <AddButton handleClick={handleClick}/>
        </FlexBox>
      </FlexBox>
    </div>
  );
}

interface RosterPlayer {
  name: string;
}

export const RosterPlayer = ({ name }: RosterPlayer) => {
  return (
    <div className='RosterPlayer'>
      <div className='innerContainer'>
        <FlexBox>
          <div className='PlayerStatus'></div>
          <FlexBox
            direction='column'
            alignItems='center'
            className='PlayerName'
          >
            <span>{name}</span>
          </FlexBox>
          <RosterPlayerPositionTag position={VOLLEYBALL_PLAYER_POSITIONS.OP}/>
        </FlexBox>
      </div>
    </div>
  )
}

interface RosterPlayerPositionTagProps {
  position: VOLLEYBALL_PLAYER_POSITIONS;
}

const RosterPlayerPositionTag = ({ position }: RosterPlayerPositionTagProps) => {
  return (
    <FlexBox
      direction='column'
      alignItems='center'
      className={`PlayerPosition ${position}`}
    >
      <span>{`${position}`}</span>
    </FlexBox>
  );
}
