import React from 'react';
import './FormSubmissionButton.scss';
import cx from 'classnames';


export enum FORM_SUBMISSION_BUTTON_COLOR {
  RED = 'red',
}

export interface FormSubmissionButtonProps {
  handleClick: () => void,
  buttonText?: string,
  buttonColor?: FORM_SUBMISSION_BUTTON_COLOR,
}

export const FormSubmissionButton = ({
  handleClick,
  buttonText = 'submit',
  buttonColor,
}: FormSubmissionButtonProps) => {
  const colorClassNames = !buttonColor ? {} : {
    [buttonColor]: true,
  }

  return (
    <button
      className={cx('FormSubmissionButton', {
        ...colorClassNames,
      })}
      onClick={handleClick}
    >
        {buttonText}
    </button>
  )
};
