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
