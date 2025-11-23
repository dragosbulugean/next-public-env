import { connection } from 'next/server';
import { ClientComponent } from './client-component';

export default async function Home() {
  return (
    <div>
      <div>hello</div>
      <ServerComponent />
    </div>
  );
}

async function ServerComponent() {
  await connection();

  return <ClientComponent />;
}
