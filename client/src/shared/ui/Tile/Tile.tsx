import { FC, memo, ReactNode } from 'react';

import { styles } from './Tile.styles';

interface TileProps {
  children: ReactNode;
}

export const Tile: FC<TileProps> = memo(({ children }) => {
  return <section css={styles.container}>{children}</section>;
});
