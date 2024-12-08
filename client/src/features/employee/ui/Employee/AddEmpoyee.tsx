import { Dialog, DialogTitle, DialogContent, DialogContentText, Button, TextField } from '@mui/material';
import { useAppDispatch } from 'app/hooks';
import { createEmployee } from 'entities/employee';
import { Status, User } from 'features/employee/model/user';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { statusOptions } from './status';
import { SelectBox } from 'shared/ui';
import { styles } from './AddEmployees.styles';

interface AddEmployeeProps {
  handleClose: () => void;
}

export const AddEmpoyee: FC<AddEmployeeProps> = ({ handleClose }) => {
  const dispatch = useAppDispatch();
  const [employeeName, setEmployeeName] = useState<string>('');
  const [employeeStatus, setEmployeeStatus] = useState<Status>('Working');

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
      img: 'https://picsum.photos/id/338/200/200',
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
              options={statusOptions}
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
