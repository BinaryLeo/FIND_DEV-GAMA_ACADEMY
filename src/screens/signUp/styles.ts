import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const InputContainer = styled.View`
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

export const ScreenTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin-top: 5%;
  color: ${({ theme }) => theme.colors.text};
`;

export const BtnContainer = styled.View`
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  width: 80%;
`;

export const Image = styled.Image`
  width: 100%;
`;

export const BlurCard = styled.View`
  background-color: rgba(255, 255, 255, 0.3);
  width: 95%;
  padding: 5px;
  padding-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50%;
`;
