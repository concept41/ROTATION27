import { useAppDispatch, useAppSelector } from 'components/storage/reduxStorage';
import React, { useCallback } from 'react';
import { FlexBox } from "../FlexBox/FlexBox";
import { FormSubmissionButton } from '../FormSubmissionButton/FormSubmissionButton';
import { Modal } from "../Modal/Modal";


interface SettingsModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

export const SettingsModal = ({
  isOpen,
  handleClose,
}: SettingsModalProps) => {
  // redux
  // const dispatch = useAppDispatch();
  const appState = useAppSelector(state => state);

  // What settings do we want?
  const logAppState = useCallback(() => {
    console.log(appState);
  }, [appState]);

  return isOpen ? (
    <Modal className='SettingsModal' isOpen={isOpen} handleClose={handleClose}>
      <FlexBox direction="column">
        <span className='SettingsTitle'>Settings</span>
        <FormSubmissionButton handleClick={logAppState}/>
      </FlexBox>
    </Modal>
  ) : null;
};
