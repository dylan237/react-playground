import styled from "styled-components";
import { Square } from "./Square";

export const StyledSquare = styled(Square)`
  flex: 0 0 33.333333%;
  .square-item {
    background: #fff;
    border: 1px solid #999;
    font-size: 16px;
    font-weight: bold;
    width: 100%;
    height: 100%;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
    cursor: pointer;
    &:foucus {
      outline: none;
    }
  }
`;
