import styled from "styled-components";
import { Game } from "./Game";

const getColor = ({ color }) => `color: ${color}`;

export const StyledGame = styled(Game)`
  .btn {
    ${getColor}
  }
  .game {
    margin: 30px;
  }
  .history {
    margin-top: 30px;
    &__item {
      margin-bottom: 10px;
    }
  }
`;
