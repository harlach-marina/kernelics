import { css } from '@emotion/react';

import { Colors, MediaQueries } from 'shared/constants';

export const styles = {
  container: css`
    width: 100%;
    max-width: 1400px;
    margin: 42px auto;
  `,
  list: css`
    margin: 0 20px;
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 20px;

    @media only screen and (min-width: ${MediaQueries.SMALL}) {
      grid-template-columns: 1fr 1fr;
      column-gap: 20px;
      row-gap: 20px;
      margin: 0 20px;
    }

    @media only screen and (min-width: ${MediaQueries.MEDIUM}) {
      margin: 0 40px;
    }

    @media only screen and (min-width: ${MediaQueries.LARGE}) {
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 50px;
      row-gap: 50px;
    }
  `,
  filter: css`
    display: flex;
    flex-direction: column-reverse;
    gap: 10px;
    margin: 0 20px 20px;

    @media only screen and (min-width: ${MediaQueries.MEDIUM}) {
      flex-direction: row;
      margin-bottom: 104px;
      margin: 0 40px 40px;
    }
  `,
  buttonCreate: css`
    background-color: ${Colors.primaryBlue};
    font-weight: 600;
    text-transform: none;
    padding: 10px 30px;
    font-size: 20px;

    & .MuiButton-endIcon svg {
      font-size: 36px;
    }

    @media only screen and (min-width: ${MediaQueries.MEDIUM}) {
      padding: 18px 50px;
      font-size: 26px;
    }
  `,
  iconPlus: css`
    font-size: 40px;
  `,
};
