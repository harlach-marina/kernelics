import { css } from '@emotion/react';

import { Colors, MediaQueries } from 'shared/constants';

export const styles = {
  button: css`
    font-weight: 500;
    text-transform: none;
    width: 120px;
    font-size: 18px;
    border-width: 2px;
    color: ${Colors.secondaryBlue};
    border-color: ${Colors.secondaryBlue};

    @media only screen and (min-width: ${MediaQueries.MEDIUM}) {
      width: 150px;
    }
  `,
};
