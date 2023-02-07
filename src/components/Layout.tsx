import { MainLayoutStyle, WraaperBoxStyle } from '@styles/LayoutStyle';
import Photo from '@components/Photo';

const Layout = () => {
  return (
    <MainLayoutStyle>
      <WraaperBoxStyle>
        <Photo />
      </WraaperBoxStyle>
    </MainLayoutStyle>
  );
};
export default Layout;
