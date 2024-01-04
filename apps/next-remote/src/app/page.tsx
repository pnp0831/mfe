import BuyButton from './components/buy-button';
import NxWelcome from './components/nx-welcome';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div>
      <NxWelcome title="Next Remote" />
      <BuyButton />
    </div>
  );
}
