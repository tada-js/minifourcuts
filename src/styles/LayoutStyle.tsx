import styled from 'styled-components';

export const MainLayoutStyle = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WraaperBoxStyle = styled.div`
  max-width: 390px;
  width: 100%;
  box-shadow: 3px 3px rgba(155, 155, 155, 0.1), -4px 0 10px rgba(0, 0, 0, 0.2);
  background-color: #6b88aa;
`;

export const PhotosStyle = styled.div`
  margin-top: 30px;
`;

export const PhotoFrameStyle = styled.div`
  background-color: white;
  margin: 15px 20px;
  height: 200px;
  background-size: cover;
  text-align: center;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
`;

export const PhotoImageStyle = styled.img``;

export const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterTitleStyle = styled.p`
  padding: 20px;
  font-size: 25px;
  font-weight: 9000;
  color: white;
`;

export const FooterDateStyle = styled.time`
  padding: 20px;
  font-size: 15px;
  font-weight: 500;
  color: white;
`;
