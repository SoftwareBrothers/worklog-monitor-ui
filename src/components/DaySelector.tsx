import 'date-fns';
import React, { useState, FC } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

interface Props {
  defaultDay: Date;
  onChange: (date: Date) => void;
}

const DaySelector: FC<Props> = ({ defaultDay, onChange }) => {
  const [selected, setSelected] = useState<Date>(defaultDay);

  const handleDateChange = (date: MaterialUiPickersDate) => {
    if (!date) {
      return;
    }
    setSelected(date);
    onChange(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        format="dd.MM.yyy"
        id="date-picker"
        label="Pick date"
        value={selected}
        onChange={handleDateChange}
        disableFuture
      />
    </MuiPickersUtilsProvider>
  );
};

export default DaySelector;
