import * as nextServer from 'next/server';

// Cache the noStore function after first successful import
let noStoreCache: (() => void) | null = null;
let noStoreImportAttempted = false;

function tryGetNoStore(): (() => void) | null {
  if (noStoreImportAttempted) {
    return noStoreCache;
  }
  noStoreImportAttempted = true;
  try {
    // Use require for synchronous import
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const nextCache = require('next/cache');
    noStoreCache = nextCache.unstable_noStore;
    return noStoreCache;
  } catch {
    // next/cache not available (e.g., Pages Router or older Next.js versions)
    return null;
  }
}

export function optOutOfStatic(useConnection?: boolean): void | Promise<void> {
  // Try to call noStore synchronously
  const noStore = tryGetNoStore();
  if (noStore) {
    try {
      noStore();
    } catch {
      // noStore failed - this is fine for static pages
    }
  }

  if (useConnection) {
    try {
      return nextServer.connection();
    } catch {
      // connection() not available
    }
  }
}
