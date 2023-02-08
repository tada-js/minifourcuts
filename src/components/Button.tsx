import { ButtonStyle } from '@styles/CommonLayoutStyle';
import { CSSProperties } from 'styled-components';

interface Props {
  styleOverrides?: CSSProperties;
}

const Button = ({
  styleOverrides,
  ...rest
}: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <>
      <ButtonStyle {...rest}>프레임 색상 변경</ButtonStyle>
      <ButtonStyle {...rest}>프레임 설명 수정</ButtonStyle>
      <ButtonStyle {...rest}>프레임 날짜 수정</ButtonStyle>
    </>
  );
};
export default Button;
