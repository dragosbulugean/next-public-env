import { Suspense } from 'react';
import { PrintEnvAsync } from './components/print-env-async';

export default async function Home() {
  return (
    <div>
      <h1>server Home....</h1>
      <Suspense>
        <PrintEnvAsync />
      </Suspense>
    </div>
  );
}
