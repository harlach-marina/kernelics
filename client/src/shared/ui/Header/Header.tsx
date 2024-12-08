import { FC, ReactNode } from 'react';
import { styles } from './Header.styles';

interface HeaderProps {
  title: string;
  children: ReactNode;
}

export const Header: FC<HeaderProps> = ({ title, children }) => {
  return (
    <header css={styles.container}>
      <h1 css={styles.title}>{title}</h1>
      <aside>
        {children}
      </aside>
    </header>
  );
};
