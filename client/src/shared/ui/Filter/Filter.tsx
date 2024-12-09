import { FC } from 'react';
import { TextField, InputAdornment, Divider, IconButton } from '@mui/material';
import { Clear, Search } from '@mui/icons-material';

import { SelectBox } from '../SelectBox';

import { styles } from './Filter.styles';

interface FilterProps {
  options: {
    value: string;
    title: string;
  }[];
  setSelectedOption: (value: string) => void;
  selectedOption: string;
  optionsLabel: string;
  setInput: (value: string) => void;
  input: string;
  inputLabel: string;
  resetFilter?: () => void;
}

export const Filter: FC<FilterProps> = ({
  selectedOption,
  setSelectedOption,
  options,
  optionsLabel,
  input,
  setInput,
  inputLabel,
  resetFilter,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleFilterReset = () => resetFilter && resetFilter();

  return (
    <div css={styles.container}>
      <TextField
        type="text"
        css={styles.input}
        variant="outlined"
        placeholder={inputLabel}
        value={input}
        onChange={handleInputChange}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
            endAdornment:
              !!resetFilter && (!!input || !!selectedOption) ? (
                <InputAdornment position="end">
                  <IconButton aria-label="Reset" onClick={handleFilterReset}>
                    <Clear />
                  </IconButton>
                </InputAdornment>
              ) : null,
          },
        }}
      />
      <Divider orientation="vertical" css={styles.divider} />
      <section css={styles.filter}>
        <SelectBox
          optionsLabel={optionsLabel}
          options={options}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </section>
    </div>
  );
};
