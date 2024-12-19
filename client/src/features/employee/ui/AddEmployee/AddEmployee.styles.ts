import { css } from '@emotion/react';

import { Colors, MediaQueries } from 'shared/constants';

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
    height: auto;

    @media only screen and (min-width: ${MediaQueries.MEDIUM}) {
      flex-direction: row;
      margin: 70px auto 0;
      height: 50px;
    }

    & .MuiInputBase-root {
      font-size: 18px;
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

    @media only screen and (min-width: ${MediaQueries.SMALL}) {
      flex-direction: row;
    }

    @media only screen and (min-width: ${MediaQueries.MEDIUM}) {
      margin-top: 40px;
    }
  `,
  button: css`
    padding: 10px;
    width: 100%;
    text-transform: none;
    font-size: 16px;
    background-color: ${Colors.primaryBlue};
    color: ${Colors.backgroundWhite};

    @media only screen and (min-width: ${MediaQueries.SMALL}) {
      font-size: 18px;
    }
  `,
  buttonCancel: css`
    background-color: ${Colors.backgroundWhite};
    color: ${Colors.secondaryBlue};
    border-color: ${Colors.secondaryBlue};
  `,
};
