import { FC, useMemo } from 'react';
import { Status, User } from 'entities/employee';
import { styles } from './Employee.styles';
import { SelectBox } from 'shared/ui';
import { useAppDispatch } from 'app/hooks';
import { updateEmployee } from 'entities/employee';
import { StatusOption } from '../StatusOption';
import { statusOptions } from '../../constants/status';

export const Employee: FC<User> = employee => {
  const dispatch = useAppDispatch();

  const { name, status, img } = employee;

  const options = useMemo(() => {
    return statusOptions.map(({ value, title }) => {
      return {
        value,
        title: <StatusOption title={title} value={value as Status} fontSize="14px" />,
      };
    });
  }, []);

  const handleChangeStatus = (value: string) => {
    dispatch(updateEmployee({ ...employee, status: value as Status }));
  };

  return (
    <section css={styles.container}>
      <img css={styles.image} src={`${img}.jpg`} alt="Profile" />
      <main css={styles.content}>
        <header css={styles.header}>{name}</header>
        <section>
          <SelectBox
            variant="standard"
            optionsLabel="Filter by status"
            options={options}
            selectedOption={status}
            setSelectedOption={handleChangeStatus}
          />
        </section>
      </main>
    </section>
  );
};
