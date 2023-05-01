import React, { useCallback, useState } from 'react';
import './AddPlayerModal.scss';
import { Modal } from 'components/presentational/Modal/Modal';
import { FlexBox } from "components/presentational/FlexBox/FlexBox";
import { Input } from 'components/presentational/Input/Input';
import { VOLLEYBALL_PLAYER_ABBREVIATED_POSITIONS} from 'components/types/VOLLEYBALL_PLAYER_POSITIONS.enum';
import { useAppDispatch } from 'components/storage/reduxStorage';
import { addPlayerCompositeAction } from 'components/storage/compositeActions/addPlayerCompositeAction';
import { PlayerPositionMultiSelect } from '../PlayerPositionMultiSelect/PlayerPositionMultiSelect';
import { FormSubmissionButton } from '../FormSubmissionButton/FormSubmissionButton';


export interface AddPlayerModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

export const AddPlayerModal = ({ isOpen, handleClose }: AddPlayerModalProps) => {
  // redux
  const dispatch = useAppDispatch();

  // local state
  const [newPlayerName, setNewPlayerName] = useState('');
  const [newPlayerPositions, setNewPlayerPositions] = useState<VOLLEYBALL_PLAYER_ABBREVIATED_POSITIONS[]>([]);

  // handlers
  const handleAddPlayer = useCallback(() => {
    addPlayerCompositeAction(dispatch, {
      name: newPlayerName,
      position: newPlayerPositions,
    });
    handleClose();
  }, [newPlayerName, newPlayerPositions, handleClose, dispatch]);

  return isOpen ? (
    <Modal className='AddPlayerModal' isOpen={isOpen} handleClose={handleClose}>
      <FlexBox className='AddPlayerForm' direction='column'>
        <span className='FormTitle'>add a player</span>
        <FlexBox alignItems='center' className='FormInputContainer'>
          <Input label='name' initialValue='' onChange={setNewPlayerName} className='FormInput'/>
        </FlexBox>
        <FlexBox alignItems='center' className='FormInputContainer'>
          <PlayerPositionMultiSelect
            className='AddPlayerPositionMultiSelect FormInput'
            handleChange={setNewPlayerPositions}/>
        </FlexBox>
        <FormSubmissionButton handleClick={handleAddPlayer}/>
      </FlexBox>
    </Modal>
  ) : null;
}
