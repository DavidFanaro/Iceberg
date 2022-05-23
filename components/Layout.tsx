import React, { ReactNode } from 'react';
import Background from './Background';
import NavButtonGroup from './Nav/NavButtonGroup';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Background />
    <NavButtonGroup />
    <div>{children}</div>
  </>
);

export default Layout;
