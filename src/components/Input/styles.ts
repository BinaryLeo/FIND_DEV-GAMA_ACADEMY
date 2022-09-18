import styled from "styled-components/native";

export const Container = styled.View`
  min-width: 100%;
  margin-top: 10px;
`;

export const InputTitle = styled.Text`
  font-weight: 600;
  padding-left: 8px;
  margin: 5px 0px;
  color: ${({ theme }) => theme.colors.text};
`;

export const NativeInput = styled.TextInput`
  outline: none;
  border: 1px solid #c2c2c2;
  border-radius: 10px;
  padding: 2px 10px;
  font-size: 16px;
  height: 50px;
  color: #575757;
  background-color: #d9d9d9;
`;
