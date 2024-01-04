import { HTMLAttributes } from 'react';

/* eslint-disable-next-line */
export interface BuyButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export function BuyButton({ children, ...props }: BuyButtonProps) {
  return <button {...props}>{children || `Buy now!`}</button>;
}

export default BuyButton;
