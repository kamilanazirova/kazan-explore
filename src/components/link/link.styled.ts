import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const StyledLink = styled.a<{
  contrast?: boolean;
  inheritColor?: boolean;
}>`
  font-weight: 400;

  &.active {
    color: yellow;
    text-decoration: underline;
  }

  &:hover {
    color: #767676;
  }
`;