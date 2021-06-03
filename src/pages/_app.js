import { useEffect } from 'react';
import Router from 'next/router';
// Google Analytics
import { initGA, logPageView } from 'analytics';

// Fonts
import "@fontsource/inter/500.css";
import "@fontsource/ibm-plex-sans/400.css";

// AOS - Animation Effects
import AOS from 'aos';
import 'aos/dist/aos.css';

// Rellax - Parallex
import Rellax from 'rellax';

// Load other package css file
import 'react-multi-carousel/lib/styles.css';
import 'react-modal-video/css/modal-video.min.css';
import 'rc-drawer/assets/index.css';

export default function CustomApp({ Component, pageProps }) {

  useEffect(() => {
    const rellax = new Rellax('.rellax', {breakpoints:[576, 768, 1201]});
    AOS.init();
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return <Component {...pageProps} />;
}
