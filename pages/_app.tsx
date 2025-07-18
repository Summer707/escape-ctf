import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import GlitchOverlay from '../components/GlitchOverlay';
import '../components/GlitchOverlay.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [showGlitch, setShowGlitch] = useState(false);

  useEffect(() => {
    const handleStart = () => setShowGlitch(true);
    const handleEnd = () => setTimeout(() => setShowGlitch(false), 700); // keep glitch for 700ms

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleEnd);
    router.events.on('routeChangeError', handleEnd);
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleEnd);
      router.events.off('routeChangeError', handleEnd);
    };
  }, [router.events]);

  return (
    <>
      <GlitchOverlay visible={showGlitch} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
