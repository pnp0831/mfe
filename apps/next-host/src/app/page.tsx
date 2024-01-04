'use client';

// import dynamic from 'next/dynamic';
import NxWelcome from '../components/nx-welcome';
// eslint-disable-next-line @nx/enforce-module-boundaries
import BuyButton from '@nextRemote/src/components/buy-button';

// const BuyButton = dynamic(() => import('nextRemote'), {
//   ssr: false,
// });

export default async function Index() {
  // const { count } = useCount();
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div>
      <NxWelcome title="Next Host" />
      <BuyButton />
    </div>
  );
}
