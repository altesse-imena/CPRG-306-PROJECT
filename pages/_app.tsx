// pages/_app.tsx
import '@/styles/globals.css'; // Import the global CSS file
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
