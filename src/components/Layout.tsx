import { MainLayoutStyle, WraaperBoxStyle } from '@styles/CommonLayoutStyle';
import Photo from '@components/Photo';
import Footer from './Footer';

const Layout = () => {
  return (
    <MainLayoutStyle>
      <WraaperBoxStyle>
        <Photo />
        <Footer />
      </WraaperBoxStyle>
    </MainLayoutStyle>
  );
};
export default Layout;
