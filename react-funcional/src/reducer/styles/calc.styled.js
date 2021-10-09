import styled from "styled-components";
import { Button, Input } from "antd";

export const ActionButton = styled(Button)`
  width: 200px;
`;

export const InputValue = styled(Input)`
  width: 400px;
  margin-bottom: 15px;
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -150px;
  margin-left: -200px;
`;

export const TitleApp = styled.h1`
  font-size: 25px;
  color: #005;
  text-align: center;
`;
export const ResultContainer = styled.div`
  margin-top: 7px;
`;
export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 5px;
`;
