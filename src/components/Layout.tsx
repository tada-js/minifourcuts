import {
  FooterDateStyle,
  FooterStyle,
  FooterTitleStyle,
  MainLayoutStyle,
  WraaperBoxStyle,
} from '@styles/LayoutStyle';
import Photo from '@components/Photo';

const Layout = () => {
  return (
    <MainLayoutStyle>
      <WraaperBoxStyle>
        <Photo />
        <FooterStyle>
          <FooterTitleStyle>🎵Happy Poto Time🎵</FooterTitleStyle>
          <FooterDateStyle>📸2023.2.08📸</FooterDateStyle>
        </FooterStyle>
      </WraaperBoxStyle>
    </MainLayoutStyle>
  );
};
export default Layout;
