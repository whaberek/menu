import React, { useContext } from 'react';
import { CSSTransition } from 'react-transition-group';

import { MenuMobile } from './components';

import { MenuContext } from 'store/contexts';

import './Menu.css';

function Menu() {
  const [toggle] = useContext(MenuContext);

  return (
    <>
      <CSSTransition
        in={toggle}
        appear={true}
        timeout={500}
        classNames="fade"
      >
        <MenuMobile />
      </CSSTransition>
    </>
  );
}

export { Menu };
