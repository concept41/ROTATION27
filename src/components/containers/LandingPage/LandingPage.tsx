import React from 'react';
import { FlexBox } from "components/presentational/FlexBox/FlexBox";


import './LandingPage.scss';

export const LandingPagePath = "/";

export const LandingPage = () => {
  return (
    <div className='LandingPage'>
      <FlexBox direction='column'>
        <span>Placeholder for building components</span>
        <Floor/>
      </FlexBox>
    </div>
  );
}

// 24m x 15m
const Floor = () => {
  return (
    <div className='Floor'>
      <FlexBox>
        <FreeZone/>
        <FlexBox direction='column'>
          <Court/>
          <ServingArea/>
        </FlexBox>
        <FreeZone/>
      </FlexBox>
    </div>
  );
}

// 18m x 9m
const Court = () => {
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
const FrontCourtZone = () => {
  return (
    <div className='FrontCourtZone'></div>
  );
}

// 6m x 3m
const BackCourtZone = () => {
  return (
    <div className='BackCourtZone'></div>
  );
}

// 12m x 3m
const FreeZone = () => {
  return (
    <div className='FreeZone'></div>
  );
}

// 3m x 9m
const ServingArea = () => {
  return (
    <div className='ServingArea'></div>
  );
}
