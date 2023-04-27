import React from 'react';
import { FlexBox } from "components/presentational/FlexBox/FlexBox";
import { CourtFloor } from "components/presentational/Court/Court";
import { Roster } from "components/presentational/Roster/Roster";


import './LandingPage.scss';

export const LandingPagePath = "/";

export const LandingPage = () => {
  return (
    <div className='LandingPage'>
      <FlexBox direction='column'>
        <span>Placeholder for building components</span>
        <FlexBox justify='center'>
          <CourtFloor/>
          <Roster/>
        </FlexBox>
      </FlexBox>
    </div>
  );
}

