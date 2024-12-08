import { css } from '@emotion/react';
import { MediaQueries } from 'shared/constants';

export const styles = {
  container: css`
    display: grid;
    grid-template-columns: 1fr 3fr;
    column-gap: 20px;

    @media only screen and (min-width: ${MediaQueries.MEDIUM}) {
      grid-template-columns: 1fr 1fr;
    }
  `,
  image: css`
    max-width: 100px;
    min-width: 100px;
    min-height: 100px;
    max-height: 100px;
    border-radius: 50%;
    background: rgba(128, 128, 128, 0.3);

    @media only screen and (min-width: ${MediaQueries.MEDIUM}) {
      max-width: 150px;
      min-width: 150px;
      min-height: 150px;
      max-height: 150px;
    }

    @media only screen and (min-width: ${MediaQueries.LARGE}) {
      max-width: 170px;
      min-width: 170px;
      min-height: 170px;
      max-height: 170px;
    }
  `,
  content: css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 12px;
  `,
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
  header: css`
    font-size: 22px;
    font-weight: 500;
  `,
};
