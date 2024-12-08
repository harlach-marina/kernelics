import { Employees } from 'features';
import { Header } from 'shared/ui';
import { Button } from '@mui/material';
import { styles } from './EmployeesPage.styles';

export const EmployeesPage = () => {
  return (
    <>
      <Header title="Employees">
        <Button css={styles.button} variant="outlined">
          Log out
        </Button>
      </Header>
      <Employees />
    </>
  );
};