# Next.js 16 Pages Router Example

This example demonstrates how to use `@archbee/next-public-env` with the Pages Router.

## Setup

### 1. Create your env configuration

```ts
// env.ts
import { createPublicEnv } from '@archbee/next-public-env';

export const { PublicEnvScript, getPublicEnv } = createPublicEnv(
  {
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  },
  {
    schema: (z) => ({
      NEXT_PUBLIC_APP_NAME: z.string(),
    }),
  },
);
```

### 2. Add `PublicEnvScript` to your `_document.tsx`

```tsx
import { Html, Head, Main, NextScript } from 'next/document';
import { PublicEnvScript } from '../env';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <PublicEnvScript />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

### 3. Use `getServerSideProps` for runtime env variables

For true "build once, deploy many" behavior where env variables are read at request time (not build time), use `getServerSideProps`:

```tsx
import { getPublicEnv } from '../env';
import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

export default function Page() {
  const env = getPublicEnv();
  return <div>{env.NEXT_PUBLIC_APP_NAME}</div>;
}
```

Without `getServerSideProps`, the page will be statically generated at build time, and env variables will be baked into the HTML at build time.
