import { Dialog, DialogTitle, DialogContent, DialogContentText, Button, TextField } from '@mui/material';
import { useAppDispatch } from 'app/hooks';
import { createEmployee, Status, User } from 'entities/employee';
import { ChangeEvent, FC, FormEvent, useMemo, useState } from 'react';
import { SelectBox } from 'shared/ui';
import { styles } from './AddEmployee.styles';
import { statusOptions } from '../../constants/status';
import { StatusOption } from '../StatusOption';

const IMG_MOCK = 'https://picsum.photos/id/338/200/200';

interface AddEmployeeProps {
  handleClose: () => void;
}

export const AddEmployee: FC<AddEmployeeProps> = ({ handleClose }) => {
  const dispatch = useAppDispatch();
  const [employeeName, setEmployeeName] = useState<string>('');
  const [employeeStatus, setEmployeeStatus] = useState<Status>('Working');

  const options = useMemo(() => {
    return statusOptions.map(({ value, title }) => {
      return {
        value,
        title: <StatusOption title={title} value={value as Status} />,
      };
    });
  }, []);

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    setEmployeeName(value);
  };

  const handleChangeStatus = (value: string) => {
    setEmployeeStatus(value as Status);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user: Omit<User, 'id'> = {
      name: employeeName,
      img: IMG_MOCK,
      status: employeeStatus,
    };
    await dispatch(createEmployee(user));
    handleClose();
  };

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: handleSubmit,
      }}>
      <DialogTitle css={styles.header}>Create a new Employee</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Fill in the form and press Create Employee button to create a new Employee. All fields are required.
        </DialogContentText>
        <main css={styles.formFields}>
          <TextField
            autoFocus
            required
            fullWidth
            variant="standard"
            id="employeeName"
            placeholder="Full name"
            value={employeeName}
            onChange={handleChangeName}
          />
          <section css={styles.select}>
            <SelectBox
              variant="standard"
              optionsLabel="Filter by status"
              options={options}
              selectedOption={employeeStatus}
              setSelectedOption={handleChangeStatus}
            />
          </section>
        </main>
        <footer css={styles.footer}>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" type="submit">
            Create Employee
          </Button>
        </footer>
      </DialogContent>
    </Dialog>
  );
};
