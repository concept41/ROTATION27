import React, { useCallback, useEffect, useState } from "react";
import { CourtFloor } from "components/presentational/Court/Court";
import { useAppSelector } from "components/storage/reduxStorage";
import { rotateArray } from "components/utilities/rotateArray";

export interface Coordinates {
  top: number,
  right: number,
}

const DEFAULT_ROTATION_SYSTEM: Coordinates[] = [
  { top: 100, right: 50 },
  { top: 100, right: 200 },
  { top: 100, right: 350 },
  { top: 300, right: 350 },
  { top: 300, right: 200 },
  { top: 300, right: 50 },
];

export type handleRotateType = (forward?: boolean) => void;

export const CourtFloorContainer = () => {
  // test here then move into redux
  const players = useAppSelector((state) => state.players);
  const roster = useAppSelector((state) => state.roster);
  const orderedPlayers = useCallback(() => {
    return roster.players.map(playerId => {
      return players[playerId];
    });
  }, [players, roster]);

  // rotation system
  const rotationSystem = DEFAULT_ROTATION_SYSTEM;

  // rotation
  const [numRotations, setNumRotations] = useState(0);
  
  // courtPlayers
  const [courtPlayers, setCourtPlayers] = useState([
    ...DEFAULT_ROTATION_SYSTEM.map(coordinate => {
      return {
        coordinates: coordinate,
        player: {
          id: '',
          name: '',
          position: [],
        },
      }
    })
  ]);

  // handlers
  const handleRotate: handleRotateType = useCallback((forward: boolean = true) => {
    const directionToRotate = forward ? 1 : -1;
    const intermediateNumRotations = numRotations + (1 * directionToRotate);
    const newNumRotations = intermediateNumRotations < 0 ?
      (roster.players.length - 1) - intermediateNumRotations :
      intermediateNumRotations;
    setNumRotations(newNumRotations);
    const newCourtPlayers = rotateArray(orderedPlayers(), numRotations)
      .slice(0, 6)
      .map((player, index) => {
        return {
          coordinates: rotationSystem[index],
          player,
        }
      });
    setCourtPlayers(newCourtPlayers);
  }, [numRotations, setNumRotations, roster, setCourtPlayers, orderedPlayers]);

  useEffect(() => {
    const orderedPlayersResult = orderedPlayers();

    if(orderedPlayersResult.length > 0) {
      const newCourtPlayers = rotateArray(orderedPlayers(), numRotations)
        .slice(0, 6)
        .map((player, index) => {
          return {
            coordinates: rotationSystem[index],
            player,
          }
        });
      setCourtPlayers(newCourtPlayers);
    } else {
      setCourtPlayers([]);
    }
  }, [numRotations, orderedPlayers])

  return (
    <>
      <CourtFloor courtPlayers={courtPlayers} handleRotate={handleRotate}/>
    </>
  )
}
