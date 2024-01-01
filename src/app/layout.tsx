import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="grid min-h-screen grid-rows-[auto,1fr,auto] px-4 container m-auto">
        <header className="leading-[60px] font-bold text-center text-2xl">
          <h1>Case of Studies challenge</h1>
          <p className="text-xl font-light">
            Down here you can see some case of studies
          </p>
        </header>
        <main className="py-12">{children}</main>
        <footer className="text-center leading-[60px] opacity-75">
          Made for Jose
        </footer>
      </body>
    </html>
  );
}
