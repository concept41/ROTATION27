import { PortalContainer } from "components/containers/PortalContainer/PortalContainer";
import React, { ReactNode } from "react";
import { FlexBox } from "../FlexBox/FlexBox";
import cx from 'classnames';
import "./Modal.scss";

export interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

export const Modal = ({
  className,
  children,
  isOpen,
  handleClose,
}: ModalProps) => {
  return isOpen ? (
    <PortalContainer>
      <FlexBox
        className={cx('Modal', className)}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <FlexBox
          className="ModalContent"
          alignItems="center"
          justify="center"
        >
          <ModalCloseButton handleClose={handleClose}/>
          {children}
        </FlexBox>
      </FlexBox>
    </PortalContainer>
  ): null;
}


interface ModalCloseButtonProps {
  handleClose: () => void;
}

const ModalCloseButton = ({ handleClose }: ModalCloseButtonProps) => {
  return (
    <button onClick={handleClose} className="ModalCloseButton">
      <span className='line1'></span>
      <span className='line2'></span>
    </button>
  )
}
