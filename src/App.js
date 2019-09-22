import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Home } from 'scenes'

import { theme } from 'shared/variables';
import { MenuContext } from 'store/contexts';

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <MenuContext.Provider value={[toggle, setToggle]}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </MenuContext.Provider>
  )
}

export { App };
