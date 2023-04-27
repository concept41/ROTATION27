import React from 'react';
import { FlexBox } from "components/presentational/FlexBox/FlexBox";
import { Player } from "components/presentational/Player/Player";

import './Court.scss';


// 24m x 15m
export const CourtFloor = () => {
  return (
    <div className='CourtFloor'>
      <FlexBox>
        <FreeZone/>
        <FlexBox direction='column'>
          <Court/>
          <ServingArea/>
        </FlexBox>
        <FreeZone/>
      </FlexBox>
      <Player />
    </div>
  );
}

// 18m x 9m
export const Court = () => {
  return (
    <div className='Court'>
      <FlexBox direction='column'>
        <FlexBox className='FrontCourt'>
          <FrontCourtZone/>
          <FrontCourtZone/>
          <FrontCourtZone/>
        </FlexBox>
        <FlexBox>
          <BackCourtZone/>
          <BackCourtZone/>
          <BackCourtZone/>
        </FlexBox>
      </FlexBox>
    </div>
  );
}

// 3m x 3m
export const FrontCourtZone = () => {
  return (
    <div className='FrontCourtZone'></div>
  );
}

// 6m x 3m
export const BackCourtZone = () => {
  return (
    <div className='BackCourtZone'></div>
  );
}

// 12m x 3m
export const FreeZone = () => {
  return (
    <div className='FreeZone'></div>
  );
}

// 3m x 9m
export const ServingArea = () => {
  return (
    <div className='ServingArea'></div>
  );
}