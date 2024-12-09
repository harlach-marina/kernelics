import { FC } from 'react';

import TripOriginIcon from '@mui/icons-material/TripOrigin';

import { Status } from 'entities/index';

import { statusView } from '../../constants/status';

import { styles } from './StatusOption.styles';

interface OptionProps {
  title: string;
  value: Status;
  fontSize?: string;
}

export const StatusOption: FC<OptionProps> = ({ title, value, fontSize }) => {
  const { color } = statusView[value];

  return (
    <section css={styles.option(fontSize)}>
      <div css={styles.indicator(color, fontSize)}>
        <TripOriginIcon />
      </div>
      <div>{title}</div>
    </section>
  );
};
