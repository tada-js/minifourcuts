import {
  ChangeBoxStyle,
  MainLayoutStyle,
  WraaperBoxStyle,
} from '@styles/CommonLayoutStyle';
import Photo from '@components/Photo';
import Footer from './Footer';
import Button from './Button';

const Layout = () => {
  return (
    <>
      <ChangeBoxStyle>
        <Button />
      </ChangeBoxStyle>
      <MainLayoutStyle>
        <WraaperBoxStyle>
          <Photo />
          <Footer />
        </WraaperBoxStyle>
      </MainLayoutStyle>
    </>
  );
};
export default Layout;
