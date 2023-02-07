import styled from 'styled-components';

export const PhotosStyle = styled.div`
  margin-top: 30px;
`;

export const PhotoFrameStyle = styled.div`
  position: relative;
  background-color: white;
  margin: 15px 20px;
  height: 200px;
  background-size: cover;
  text-align: center;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
`;

export const PhotoImageStyle = styled.img``;

export const PhotoDescriptionStyle = styled.span`
  width: fit-content;
  background-color: #333;
  color: white;
  padding: 0 20px;
  margin-bottom: 5px;
  border-radius: 10px;
  position: absolute;
  bottom: 0;
  transform: translate(-50%);
  left: 50%;
`;
