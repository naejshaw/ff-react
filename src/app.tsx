import React from 'react';
import {createRoot} from "react-dom/client";
import * as serviceWorker from './serviceWorker'
import {ThemeProvider} from 'styled-components'
import { Reset } from 'styled-reset';
import theme from './theme';
import 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Home from './pages/Home';

const App = () => (
  <>
    <ThemeProvider theme={theme}>
        <Reset />
        <Home />
    </ThemeProvider>
  </>
);



const root = createRoot(document.getElementById('app'));
root.render(<App />);

export default App;

serviceWorker.unregister()