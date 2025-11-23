import { getPublicEnvAsync } from '../../env';

export async function PrintEnvAsync() {
  const env = await getPublicEnvAsync();
  return <div id="__NEXT_PUBLIC_ENV__">{JSON.stringify(env)}</div>;
}
