import { css } from '@emotion/react';
import { MediaQueries } from 'shared/constants';

export const styles = {
  container: css`
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 16px 20px;

    @media only screen and (min-width: ${MediaQueries.MEDIUM}) {
      padding: 16px 30px 20px 34px;
    }
  `,
  title: css`
    font-size: 28px;
    font-weight: 600;
    line-height: normal;
    margin: 0;
    color: #109cf1;

    @media only screen and (min-width: ${MediaQueries.MEDIUM}) {
      font-size: 36px;
      font-weight: 700;
    }
  `,
};
