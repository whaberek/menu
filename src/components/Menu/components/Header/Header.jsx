import React, { useContext } from 'react';

import { Button } from 'components';

import { MenuContext } from 'store/contexts';

function Header() {
  const [toggle, setToggle] = useContext(MenuContext);

  const toggleMenu = () => setToggle(!toggle);

  return (
    <Button
      onClick={() => toggleMenu()}
      label={`Toggle: ${toggle}`}
    />
  )
}

export { Header };
