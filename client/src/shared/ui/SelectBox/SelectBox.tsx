import { FC, ReactNode, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, SelectVariants } from '@mui/material';

interface SelectBoxProps {
  options: {
    value: string;
    title: string | ReactNode;
  }[];
  setSelectedOption: (value: string) => void;
  selectedOption: string;
  optionsLabel: string;
  variant?: SelectVariants;
}

export const SelectBox: FC<SelectBoxProps> = ({
  selectedOption,
  setSelectedOption,
  options,
  optionsLabel,
  variant = 'outlined',
}) => {
  const [open, setOpen] = useState(false);

  const handleOptionChange = (event: SelectChangeEvent<string>) => {
    setSelectedOption(event.target.value);
    setOpen(false);
  };

  return (
    <FormControl variant={variant} fullWidth>
      {!selectedOption && <InputLabel shrink={selectedOption !== ''}>{optionsLabel}</InputLabel>}
      <Select
        value={selectedOption}
        onChange={handleOptionChange}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}>
        {options.map(({ value, title }) => (
          <MenuItem key={value} value={value}>
            {title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
