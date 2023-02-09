import {
  ChangeBoxStyle,
  MainLayoutStyle,
  WrapperBoxStyle,
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
        <WrapperBoxStyle>
          <Photo />
          <Footer />
        </WrapperBoxStyle>
      </MainLayoutStyle>
    </>
  );
};
export default Layout;
