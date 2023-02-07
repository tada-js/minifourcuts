import {
  PhotoDescriptionStyle,
  PhotoFrameStyle,
  PhotoImageStyle,
  PhotosStyle,
} from '@styles/PhotoLayoutStyle';
import firstImg from '@assets/img1.png';
import secondImg from '@assets/img2.png';
import thirdImg from '@assets/img3.png';
import fourthImg from '@assets/img4.png';

const Photo = () => {
  return (
    <PhotosStyle>
      <PhotoFrameStyle>
        <PhotoImageStyle src={firstImg} alt="첫 번째 이미지" />
        <PhotoDescriptionStyle>첫 번째 이미지 설명</PhotoDescriptionStyle>
      </PhotoFrameStyle>
      <PhotoFrameStyle>
        <PhotoImageStyle src={secondImg} alt="두 번째 이미지" />
        <PhotoDescriptionStyle>두 번째 이미지 설명</PhotoDescriptionStyle>
      </PhotoFrameStyle>
      <PhotoFrameStyle>
        <PhotoImageStyle src={thirdImg} alt="세 번째 이미지" />
        <PhotoDescriptionStyle>세 번째 이미지 설명</PhotoDescriptionStyle>
      </PhotoFrameStyle>
      <PhotoFrameStyle>
        <PhotoImageStyle src={fourthImg} alt="네 번째 이미지" />
        <PhotoDescriptionStyle>네 번째 이미지 설명</PhotoDescriptionStyle>
      </PhotoFrameStyle>
    </PhotosStyle>
  );
};
export default Photo;
