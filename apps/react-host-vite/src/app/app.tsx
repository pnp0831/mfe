import { Route, Routes, Link } from 'react-router-dom';
import NxWelcome from '@mfe/libs/nx-welcome';

import { Suspense, lazy } from 'react';

const BuyButton = lazy(() => import('next-remote/buy-button'));

export function App() {
  return (
    <>
      <NxWelcome title="React Host Vite" />

      <br />
      <hr />
      <br />

      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/react-module">React Component / Module</Link>
          </li>
          <li>
            <Link to="/react-app">React App ( include router )</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route
          path="/react-module"
          element={
            <div>
              <Suspense fallback={<div>loading....</div>}>
                <BuyButton>Button load from next-remote</BuyButton>
              </Suspense>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
