import { css } from '@emotion/react';

export const styles = {
  option: css`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
  `,
  indicator: (color: string) => css`
    display: flex;

    & svg {
      font-size: 14px;
      color: ${color};
    }
  `,
};
