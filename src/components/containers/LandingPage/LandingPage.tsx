import React from 'react';
import './LandingPage.scss';
import { FlexBox } from "components/presentational/FlexBox/FlexBox";
import { RosterContainer } from '../RosterContainer/RosterContainer';
import { CourtFloorContainer } from '../CourtContainer/CourtContainer';



export const LandingPagePath = "/";

export const LandingPage = () => {
  return (
    <div className='LandingPage'>
      <FlexBox direction='column'>
        <h1 className='title'>ROTATION28</h1>
        <FlexBox justify='center'>
          <CourtFloorContainer/>
          <RosterContainer/>
        </FlexBox>
      </FlexBox>
    </div>
  );
}

