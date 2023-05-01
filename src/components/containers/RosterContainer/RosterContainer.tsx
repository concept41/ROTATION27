import React, { useCallback } from 'react';
import { Roster } from 'components/presentational/Roster/Roster';
import { PlayerState } from 'components/types/PlayerTypes';
import { useAppDispatch, useAppSelector } from 'components/storage/reduxStorage';
import { rosterMovePlayerAction } from 'components/storage/actions/rosterMovePlayerAction';


export const RosterContainer = () => {
  // redux
  const roster = useAppSelector(state => state.roster);
  const players = useAppSelector(state => state.players);
  const dispatch = useAppDispatch();

  // handlers
  const createDetailedRoster: () => PlayerState[] = useCallback(() => {
    // uses order of ids in roster to pull in player states
    return roster.players.map(playerId => {
      return players[playerId];
    });
  }, [roster, players]);

  const movePlayer = useCallback((from: number, to: number) => {
    dispatch(rosterMovePlayerAction({
      from,
      to,
    }));
  }, [dispatch]);

  return (
    <Roster players={createDetailedRoster()} handleMove={movePlayer}/>
  );
}
