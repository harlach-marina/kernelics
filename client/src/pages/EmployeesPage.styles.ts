import { css } from '@emotion/react';
import { MediaQueries } from 'shared/constants';

export const styles = {
  button: css`
    font-weight: 500;
    text-transform: none;
    padding: 5px 10px;
    font-size: 18px;
    border-width: 2px;
    color: #109cf1;

    @media only screen and (min-width: ${MediaQueries.MEDIUM}) {
      padding: 5px 42px;
    }
  `,
};
