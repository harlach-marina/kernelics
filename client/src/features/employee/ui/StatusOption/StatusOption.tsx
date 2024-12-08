import { FC } from 'react';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import { styles } from './StatusOption.styles';
import { statusView } from '../../constants/status';
import { Status } from 'entities/index';

interface OptionProps {
  title: string;
  value: Status;
}

export const StatusOption: FC<OptionProps> = ({ title, value }) => {
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
