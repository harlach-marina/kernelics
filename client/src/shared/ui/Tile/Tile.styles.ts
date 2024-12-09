import { css } from '@emotion/react';

import { Colors, MediaQueries } from 'shared/constants';

export const styles = {
  container: css`
    display: flex;
    padding: 18px 16px;
    background-color: ${Colors.backgroundWhite};
    box-shadow: -2px 0px 7px 1px #d7d7d7;
    border-radius: 4px;

    &:hover {
      box-shadow: -2px 0px 7px 1px #b8d7ed;
    }

    @media only screen and (min-width: ${MediaQueries.MEDIUM}) {
      padding: 24px 16px;
    }

    @media only screen and (min-width: ${MediaQueries.LARGE}) {
      padding: 36px 32px;
    }
  `,
};
