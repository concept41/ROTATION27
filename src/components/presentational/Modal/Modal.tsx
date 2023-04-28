import { PortalContainer } from "components/containers/PortalContainer/PortalContainer";
import React, { ReactNode } from "react";
import { FlexBox } from "../FlexBox/FlexBox";
import "./Modal.scss";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

export const Modal = ({
  children,
  isOpen,
  handleClose,
}: ModalProps) => {
  return isOpen ? (
    <PortalContainer>
      <FlexBox
        className="Modal"
        direction="column"
        alignItems="center"
        justify="center"
      >
        <FlexBox
          className="ModalContent"
          alignItems="center"
          justify="center"
        >
          <button onClick={handleClose} className="ModalCloseButton">
            <span className='line1'></span>
            <span className='line2'></span>
          </button>
          {children}
        </FlexBox>
      </FlexBox>
    </PortalContainer>
  ): null;
}
