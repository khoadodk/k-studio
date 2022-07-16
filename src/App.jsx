import { ThemeProvider } from 'styled-components';
import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { AnimatePresence } from 'framer-motion';

import GlobalStyles from './styles/GlobalStyles';
import { dark } from './styles/Themes';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Shop from './components/sections/Shop';
import ScrollTriggerProxy from './components/ScrollTriggerProxy';
import Banner from './components/sections/Banner';

const App = () => {
  const containerRef = useRef(null);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <ScrollTriggerProxy />
          <AnimatePresence>
            <main
              className="App"
              data-scroll-container
              ref={containerRef}
            >
              <Home />
              <About />
              <Shop />
              <Banner />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
