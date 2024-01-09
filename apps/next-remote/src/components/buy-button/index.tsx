'use client';

import { HTMLAttributes } from 'react';

/* eslint-disable-next-line */
export interface BuyButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export function BuyButton({ children, onClick, ...props }: BuyButtonProps) {
  return (
    <>
      <button
        {...props}
        onClick={(event) => {
          if (typeof window !== 'undefined') {
            window.alert('from next-remote');
          }
          if (typeof onClick === 'function') {
            onClick(event);
          }
        }}
      >
        {children || `Button`}
      </button>
    </>
  );
}

export default BuyButton;
