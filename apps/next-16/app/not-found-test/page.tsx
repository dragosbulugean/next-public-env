import { notFound } from 'next/navigation';
import { setTimeout } from 'timers/promises';

export default async function NotFoundTest() {
  await setTimeout(100);
  notFound();
  return <div>This will not be rendered</div>;
}
