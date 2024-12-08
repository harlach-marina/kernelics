import { css } from '@emotion/react';
import { MediaQueries } from 'shared/constants';

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
      color: #cccccc;
      opacity: 1;
    }

    & .MuiOutlinedInput-notchedOutline {
      border: none;
    }
  `,
  input: css`
    width: 90%;

    '& .muiinputbase-root ::placeholder': {
      color: 'blue';
    }
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
