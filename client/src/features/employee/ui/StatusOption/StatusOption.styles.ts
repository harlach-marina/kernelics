import { css } from '@emotion/react';

export const styles = {
  option: (size?: string) => css`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: ${size || 'inherit'};
  `,
  indicator: (color: string, size?: string) => css`
    display: flex;

    & svg {
      font-size: ${size || 'inherit'};
      color: ${color};
    }
  `,
};
