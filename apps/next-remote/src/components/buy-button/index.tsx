import { HTMLAttributes } from 'react';

/* eslint-disable-next-line */
export interface BuyButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export function BuyButton({ children, ...props }: BuyButtonProps) {
  return (
    <button {...props} onClick={() => window.alert('alert from next-remote')}>
      {children || `Button`}
    </button>
  );
}

export default BuyButton;
