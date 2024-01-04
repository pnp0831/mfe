'use client';

// import dynamic from 'next/dynamic';
import NxWelcome from './nx-welcome';

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
      {/* <BuyButton /> */}
    </div>
  );
}
