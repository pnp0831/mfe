/* eslint-disable @nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}

declare module 'next-remote/buy-button' {
  // export * from '@next-remote/src/components/buy-button';
  // export { default } from '@next-remote/src/components/buy-button';

  const content: any;
  export const ReactComponent: any;
  export default content;
}
