import React, { useCallback } from 'react';
import './Court.scss';
import { FlexBox } from "components/presentational/FlexBox/FlexBox";
import { Player } from "components/presentational/Player/Player";
import { Coordinates, handleRotateType } from 'components/containers/CourtContainer/CourtContainer';
import { PlayerState } from 'components/types/PlayerTypes';


export interface CourtPlayer {
  player: PlayerState;
  coordinates: Coordinates;
}

interface CourtFloorProps {
  courtPlayers: CourtPlayer[];
  handleRotate: handleRotateType;
}


interface CourtPlayerRendererProps {
  courtPlayers: CourtPlayer[];
}

const CourtPlayerRenderer = ({
  courtPlayers
}: CourtPlayerRendererProps) => {
  return  courtPlayers.length > 0 ? (
    <>
      {
        courtPlayers.map(({player, coordinates}) => (
          <Player player={player} coordinates={coordinates}/>
        ))
      }
    </>
  ) : null;
}

// 24m x 15m
export const CourtFloor = ({
  courtPlayers,
  handleRotate,
}: CourtFloorProps) => {
  return (
    <div className='CourtFloor'>
      <FlexBox>
        <FreeZone/>
        <FlexBox direction='column'>
          <Court courtPlayers={courtPlayers}/>
          <ServingArea/>
        </FlexBox>
        <FreeZone/>
      </FlexBox>
      <CourtFloorMenu isDisabled={!(courtPlayers.length > 0)}handleRotate={handleRotate}/>
    </div>
  );
}

interface CourtProps {
  courtPlayers: CourtPlayer[];
}

interface CourtFloorMenuProps {
  handleRotate: handleRotateType;
  isDisabled: boolean;
}

const CourtFloorMenu = ({
  handleRotate,
  isDisabled,
}: CourtFloorMenuProps) => {
  const handleClickForward = useCallback(() => {
    handleRotate()
  }, [handleRotate]);

  const handleClickBackward = useCallback(() => {
    handleRotate(false)
  }, [handleRotate]);

  return (
    <div className='CourtFloorMenu'>
      <FlexBox direction='column'>
        <button disabled={isDisabled} className='BackwardButton CourtFloorMenuButton'onClick={handleClickBackward}>Backward</button>
        <button disabled={isDisabled} className='ForwardButton CourtFloorMenuButton' onClick={handleClickForward}>Forward</button>
      </FlexBox>
    </div>
  );
}

// 18m x 9m
export const Court = ({
  courtPlayers,
}: CourtProps) => {
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
      <CourtPlayerRenderer courtPlayers={courtPlayers}/>
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