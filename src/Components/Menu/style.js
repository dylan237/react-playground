import styled from "styled-components";
import { AMenu } from "@plugin/antd";

const getSideBasingColor = ({ theme }) => theme.sideBasing;
const getSideBasingSelectedColor = ({ theme }) => theme.sideSelectedBasing;
const getMainColor = ({ theme }) => theme.main;
const getWhite = ({ theme }) => theme.white;

// TODO: 參考 style/main -> .side-menu
export const StyledMenu = styled(AMenu)`
  border: none;
  padding: 15px 0;
  background-color: ${(prop) => getSideBasingColor(prop)};
  > .ant-menu-item {
    display: flex;
    align-items: center;
    height: 50px;
    border-width: 0 5px 0 5px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0);
    background-color: ${(prop) => getSideBasingColor(prop)};
    font-size: 14px;
    color: ${(prop) => getWhite(prop)};
  }
  > .ant-menu-item-selected {
    border-left-color: ${(prop) => getMainColor(prop)};
    background-color: ${(prop) => getSideBasingSelectedColor(prop)} !important;
  }
`;
