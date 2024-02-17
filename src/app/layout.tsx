
import React from 'react';
import './globals.css';
// import { AuthProvider } from '../../src/app/store/AuthContext';
import SessionProvider from './SessionProvider';
export const metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
  params: { session, ...params },
}: {
  children: React.ReactNode;
  params: any; // Adjust the type as needed for params
}) {
  return (
    <html lang="en" className="">
      <body className="h-full">
        {/* <AuthProvider> */}
        <SessionProvider>
        {children}
      </SessionProvider>
        
      </body>
    </html>
  );
}
