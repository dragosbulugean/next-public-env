import React from 'react';

const setupFunctionString =
  'function i(n){window.__NEXT_PUBLIC_ENV||Object.defineProperty(window,"__NEXT_PUBLIC_ENV",{value:Object.freeze(n),enumerable:!0})}';

/**
 * A script element component for Pages Router that injects environment variables
 * into the window object. Use this in your custom _document.tsx within the <Head> component.
 *
 * @example
 * // _document.tsx
 * import { Html, Head, Main, NextScript } from 'next/document';
 * import { PublicEnvScript } from '../env';
 *
 * export default function Document() {
 *   return (
 *     <Html>
 *       <Head>
 *         <PublicEnvScript />
 *       </Head>
 *       <body>
 *         <Main />
 *         <NextScript />
 *       </body>
 *     </Html>
 *   );
 * }
 */
export const PublicEnvScript: React.FC<{ config: string; nonce?: string }> = ({
  config,
  nonce,
}) => {
  const scriptContent = `(${setupFunctionString})(${config});`;

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: scriptContent,
      }}
      type="text/javascript"
      nonce={nonce}
    />
  );
};
