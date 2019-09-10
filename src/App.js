import React, { useState } from 'react';

import { Home } from 'scenes'
import { MenuContext } from 'store/contexts';

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <MenuContext.Provider value={[toggle, setToggle]}>
      <Home />
    </MenuContext.Provider>
  )
}

export { App };
