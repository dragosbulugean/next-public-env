import { PublicEnv } from '../env';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PublicEnv />
      </head>
      <body>{children}</body>
    </html>
  );
}
