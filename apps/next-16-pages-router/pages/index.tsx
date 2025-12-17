import { getPublicEnv } from '../env';
import type { GetServerSideProps } from 'next';

// Use getServerSideProps to ensure runtime env variables are read at request time
export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

export default function Home() {
  const env = getPublicEnv();

  return (
    <div>
      <h1>Pages Router Example</h1>
      <div id="__NEXT_PUBLIC_ENV__">{JSON.stringify(env)}</div>
    </div>
  );
}
