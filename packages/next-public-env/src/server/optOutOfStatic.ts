import * as nextServer from 'next/server';
import { unstable_noStore as noStore } from 'next/cache';

export async function optOutOfStatic(useConnection?: boolean) {
  noStore();
  if (useConnection) {
    return nextServer.connection();
  }
}
