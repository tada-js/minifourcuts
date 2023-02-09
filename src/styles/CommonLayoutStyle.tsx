import styled, { CSSProperties } from 'styled-components';

export const MainLayoutStyle = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperBoxStyle = styled.div`
  max-width: 390px;
  width: 100%;
  box-shadow: 3px 3px rgba(155, 155, 155, 0.1), -4px 0 10px rgba(0, 0, 0, 0.2);
  background-color: #6b88aa;
`;

export const ChangeBoxStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

export const ButtonStyle = styled.button<{ styleOverrides?: CSSProperties }>`
  display: block;
  color: var(--main-white-color);
  background-color: var(--main-black-color);
  border: none;
  border-radius: 5px;
  margin: 0 auto;
  ${({ styleOverrides }) => ({ ...styleOverrides })}
  font-family: 'LeeSeoyun';
  font-size: 16px;

  &:hover {
    cursor: pointer;
  }
`;
