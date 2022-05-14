import React, { ReactNode } from 'react';
import Background from './Background';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Background />
    <div>{children}</div>
  </>
);

export default Layout;
