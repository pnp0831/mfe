import dynamic from 'next/dynamic';

const BuyButton = dynamic(() => import('next-remote/buy-button'));

export default function Index() {
  return (
    <div>
      <BuyButton />
    </div>
  );
}
