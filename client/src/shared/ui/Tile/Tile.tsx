import { FC, ReactNode } from 'react';
import { styles } from './Tile.styles';

interface TileProps {
  children: ReactNode;
}

export const Tile: FC<TileProps> = ({ children }) => {
  return <section css={styles.container}>{children}</section>;
};
