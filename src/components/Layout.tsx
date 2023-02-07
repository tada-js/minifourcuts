import { ReactNode } from 'react';
import { MainLayoutStyle, WraaperBoxStyle } from '../styles/LayoutStyle';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MainLayoutStyle>
      <WraaperBoxStyle>{children}</WraaperBoxStyle>
    </MainLayoutStyle>
  );
};
export default Layout;
