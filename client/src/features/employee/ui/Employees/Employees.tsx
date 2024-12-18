import { useCallback, useDeferredValue, useEffect, useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import { getEmployees, selectEmployees, Status, User } from 'entities/employee';
import { Tile, Filter } from 'shared/ui';

import { AddEmployee } from '../AddEmployee/AddEmployee';
import { Employee } from '../Employee';
import { statusOptions } from '../../constants/status';

import { styles } from './Employees.styles';

export const Employees = () => {
  const dispatch = useAppDispatch();
  const employees = useAppSelector(selectEmployees);

  const [employeeFilterName, setEmployeeFilterName] = useState<string>('');
  const [employeeFilterStatus, setEmployeeFilterStatus] = useState<Status | ''>('');
  const [filteredEmployees, setFilteredEmployees] = useState<User[]>([]);
  const deferredFilteredEmployees = useDeferredValue(filteredEmployees);

  const [openDialog, setOpenDialog] = useState(false);

  const checkSubstring = ({ value, targetValue }: { value: string; targetValue?: string }) => {
    return !targetValue || value.toLocaleLowerCase().includes(targetValue.trim().toLocaleLowerCase());
  };

  const filterEmployees = useCallback(
    ({
      employees,
      filterName,
      filterStatus,
    }: {
      employees: User[];
      filterName: string;
      filterStatus?: Status | '';
    }) => {
      const filteredEmployees = employees.filter(({ name, status }) => {
        const hasName = checkSubstring({ value: name, targetValue: filterName });
        const hasSatus = status === filterStatus || filterStatus === '';

        return hasName && hasSatus;
      });

      setFilteredEmployees(filteredEmployees);
    },
    [],
  );

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  useEffect(() => {
    filterEmployees({ employees, filterName: employeeFilterName, filterStatus: employeeFilterStatus });
  }, [filterEmployees, employees, employeeFilterName, employeeFilterStatus]);

  const handleCreate = () => {
    setOpenDialog(true);
  };

  const closeDialog = () => {
    setOpenDialog(false);
  };

  const handleChangeFilterName = (value: string) => {
    setEmployeeFilterName(value);
  };

  const handleChangeFilterStatus = (value: string) => {
    setEmployeeFilterStatus(value as Status);
  };

  const handleFilterReset = () => {
    setEmployeeFilterName('');
    setEmployeeFilterStatus('');
  };

  return (
    <main css={styles.container}>
      <section css={styles.filter}>
        <Button css={styles.buttonCreate} variant="contained" endIcon={<AddIcon />} onClick={handleCreate}>
          Create
        </Button>
        <Filter
          input={employeeFilterName}
          setInput={handleChangeFilterName}
          inputLabel="Type to search"
          selectedOption={employeeFilterStatus}
          setSelectedOption={handleChangeFilterStatus}
          resetFilter={handleFilterReset}
          optionsLabel="Filter by status"
          options={statusOptions}
        />
      </section>
      {deferredFilteredEmployees?.length > 0 && (
        <section css={styles.list}>
          {deferredFilteredEmployees.map(employee => (
            <Tile key={employee.id}>
              <Employee {...employee} />
            </Tile>
          ))}
        </section>
      )}
      {openDialog && <AddEmployee handleClose={closeDialog} />}
    </main>
  );
};
