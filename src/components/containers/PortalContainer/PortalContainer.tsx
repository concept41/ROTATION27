import { ReactNode, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';


interface PortalContainerProps {
  children: ReactNode;
  wrapperId?: string;
}

export const PortalContainer = ({ children, wrapperId = "PortalContainer" }: PortalContainerProps) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let isElementCreated = false;
    // check if element exists, if not, create it
    if (!element) {
      isElementCreated = true;
      element = createAndAppendPortalWrapper(wrapperId);
    }

    setWrapperElement(element);

    return () => {
      // if element was created, remove it
      if (isElementCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId, setWrapperElement]);

  return wrapperElement ? createPortal(children, document.getElementById(wrapperId)!) : null;
}

export const createAndAppendPortalWrapper = (wrapperId: string) => {
  // create element
  const element = document.createElement('div');
  // set id
  element.setAttribute('id', wrapperId);
  // append to body
  document.body.appendChild(element);
  return element;
}
