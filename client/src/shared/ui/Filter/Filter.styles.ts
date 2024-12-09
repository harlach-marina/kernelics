import { css } from '@emotion/react';

import { Colors, MediaQueries } from 'shared/constants';

export const styles = {
  container: css`
    width: 100%;
    background: #ffffff;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 6px;
    overflow: hidden;

    & .MuiInputBase-root,
    .MuiFormLabel-root,
    .MuiFormLabel-root.Mui-focused {
      font-size: 20px;
    }

    & .MuiInputBase-root input::placeholder,
    .MuiFormLabel-root,
    .MuiFormLabel-root.Mui-focused {
      color: ${Colors.secondaryGary};
      opacity: 1;
    }

    & .MuiOutlinedInput-notchedOutline {
      border: none;
    }
  `,
  input: css`
    width: 90%;
  `,
  divider: css`
    height: 30px;
    background-color: none;
  `,
  filter: css`
    width: 40%;

    @media only screen and (min-width: ${MediaQueries.MEDIUM}) {
      width: 20%;
    }
  `,
};
