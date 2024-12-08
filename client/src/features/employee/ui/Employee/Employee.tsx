import { FC, useMemo } from 'react';
import { Status, User } from '../../model/user';
import { statusOptions, statusView } from './status';
import { styles } from './Employee.styles';
import { SelectBox } from 'shared/ui';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import { useAppDispatch } from 'app/hooks';
import { updateEmployee } from 'entities/employee';

interface OptionProps {
  title: string;
  value: Status;
}

const Option: FC<OptionProps> = ({ title, value }) => {
  const { color } = statusView[value];

  return (
    <section css={styles.option}>
      <div css={styles.indicator(color)}>
        <TripOriginIcon />
      </div>
      <div>{title}</div>
    </section>
  );
};

export const Employee: FC<User> = employee => {
  const dispatch = useAppDispatch();

  const { name, status, img } = employee;

  const options = useMemo(() => {
    return statusOptions.map(({ value, title }) => {
      return {
        value,
        title: <Option title={title} value={value as Status} />,
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
