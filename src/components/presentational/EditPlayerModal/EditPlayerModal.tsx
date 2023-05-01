import React, { useCallback, useEffect, useState } from 'react';
import './EditPlayerModal.scss';
import { Modal } from 'components/presentational/Modal/Modal';
import { FlexBox } from "components/presentational/FlexBox/FlexBox";
import { Input } from 'components/presentational/Input/Input';
import { VOLLEYBALL_PLAYER_ABBREVIATED_POSITIONS} from 'components/types/VOLLEYBALL_PLAYER_POSITIONS.enum';
import { useAppDispatch, useAppSelector } from 'components/storage/reduxStorage';
import { PlayerPositionMultiSelect } from '../PlayerPositionMultiSelect/PlayerPositionMultiSelect';
import { FormSubmissionButton, FORM_SUBMISSION_BUTTON_COLOR } from '../FormSubmissionButton/FormSubmissionButton';
import { PlayerId } from 'components/types/PlayerTypes';
import { modifyPlayerAction } from 'components/storage/actions/modifyPlayerAction';
import { removePlayerCompositeAction } from 'components/storage/compositeActions/removePlayerCompositeAction';


export interface EditPlayerModalProps {
  isOpen: boolean;
  handleClose: () => void;
  playerToEdit: PlayerId | null;
}

export const EditPlayerModal = ({
  isOpen,
  handleClose,
  playerToEdit,
}: EditPlayerModalProps) => {
  // redux
  const dispatch = useAppDispatch();
  const players = useAppSelector((state) => state.players);

  // local state
  const [playerName, setPlayerName] = useState('');
  const [playerPositions, setPlayerPositions] = useState<VOLLEYBALL_PLAYER_ABBREVIATED_POSITIONS[]>([]);
  const [initialPlayerPositions, setInitialPlayerPositions] = useState<VOLLEYBALL_PLAYER_ABBREVIATED_POSITIONS[]>([]);

  // handlers
  const handleEditPlayer = useCallback(() => {
    if (playerToEdit) {
      dispatch(modifyPlayerAction({
        name: playerName,
        position: playerPositions,
        id: playerToEdit,
      }));
    }
    handleClose();
  }, [playerToEdit, playerName, playerPositions, handleClose, dispatch]);

  const handleDeletePlayer = useCallback(() => {
    if (playerToEdit) {
      removePlayerCompositeAction(dispatch, {
        id: playerToEdit,
      });
    }
    handleClose();
  }, [playerToEdit, handleClose, dispatch]);

  // set player to edit
  useEffect(() => {
    if (playerToEdit) {
      const player = players[playerToEdit];
      setPlayerName(player.name);
      setPlayerPositions(player.position);
      setInitialPlayerPositions(player.position);
    }
  }, [playerToEdit, players, setPlayerName, setPlayerPositions])

  return isOpen && playerToEdit ? (
    <Modal className='EditPlayerModal' isOpen={isOpen} handleClose={handleClose}>
      <FlexBox className='EditPlayerForm' direction='column'>
        <span className='FormTitle'>Edit a player</span>
        <FlexBox alignItems='center' className='FormInputContainer'>
          <Input label='name' initialValue={playerName} onChange={setPlayerName} className='FormInput'/>
        </FlexBox>
        <FlexBox alignItems='center' className='FormInputContainer'>
          <PlayerPositionMultiSelect
            className='EditPlayerPositionMultiSelect FormInput'
            handleChange={setPlayerPositions}
            initialPlayerPositions={initialPlayerPositions}/>
        </FlexBox>
        <FormSubmissionButton handleClick={handleEditPlayer}/>
        <FormSubmissionButton buttonText='delete' buttonColor={FORM_SUBMISSION_BUTTON_COLOR.RED} handleClick={handleDeletePlayer}/>
      </FlexBox>
    </Modal>
  ) : null;
}
