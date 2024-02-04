import CalendarHeatmap from 'react-calendar-heatmap';

import './styles.css';

import { FC } from 'react';

import { CalendarProps } from '@shared/ui/Calendar/Calendar.typings';

const Calendar: FC<CalendarProps> = ({ startDate, endDate, values }) => {
  return (
    <div className="calendar">
      <CalendarHeatmap
        startDate={startDate}
        endDate={endDate}
        values={values}
      />
    </div>
  );
};

export default Calendar;
