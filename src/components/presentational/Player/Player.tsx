import React from 'react';
import { CourtPlayer } from '../Court/Court';
import { FlexBox } from '../FlexBox/FlexBox';
import './Player.scss';



interface PlayerProps extends CourtPlayer {}

export const Player = ({
  player,
  coordinates,
}: PlayerProps) => {
  return (
    <div
      className='Player'
      style={{
        top: `${coordinates.top}px`,
        right: `${coordinates.right}px`,
      }}>
      <FlexBox direction='column' alignItems='center'>
        <div className='NameTag'>
          <span>{player.name}</span>
        </div>
        <span className='Position'>{player.position[0]}</span>
      </FlexBox>
    </div>
  )
}
