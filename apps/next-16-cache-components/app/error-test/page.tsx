import { PHASE_PRODUCTION_BUILD } from 'next/constants';
import { Suspense } from 'react';
import { setTimeout } from 'timers/promises';

export default async function ErrorTest() {
  if (process.env.NEXT_PHASE !== PHASE_PRODUCTION_BUILD) {
    throw new Error('This is a test error');
  }

  return (
    <div>
      <div>This will not be rendered</div>
      <Suspense>
        <Component />
      </Suspense>
    </div>
  );
}

async function Component() {
  await setTimeout(200);
  return <div>Test Component</div>;
}
