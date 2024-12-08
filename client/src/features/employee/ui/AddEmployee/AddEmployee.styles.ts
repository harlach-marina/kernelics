import { css } from '@emotion/react';
import { MediaQueries } from 'shared/constants';

export const styles = {
  header: css`
    margin-top: 20px;
    font-size: 28px;
    line-height: normal;
    font-weight: 500;

    @media only screen and (min-width: ${MediaQueries.MEDIUM}) {
      font-size: 32px;
    }
  `,
  formFields: css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 20px auto 0;

    @media only screen and (min-width: ${MediaQueries.MEDIUM}) {
      flex-direction: row;
      margin: 80px auto 0;
    }
  `,
  select: css`
    width: 100%;

    @media only screen and (min-width: ${MediaQueries.MEDIUM}) {
      width: 40%;
    }
  `,
  footer: css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;
    margin-top: 30px;

    & button {
      padding: 7px 12px;
      text-transform: none;
      font-size: 16px;
    }

    @media only screen and (min-width: ${MediaQueries.SMALL}) {
      flex-direction: row;

      & button {
        padding: 10px 30px;
        font-size: 18px;
      }
    }

    @media only screen and (min-width: ${MediaQueries.MEDIUM}) {
      margin-top: 40px;
    }
  `,
};
