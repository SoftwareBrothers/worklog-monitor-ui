import 'date-fns';
import React, { useState, FC } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { makeStyles } from '@material-ui/styles';

interface Props {
  defaultDay: Date | null;
  onChange: (date: Date | null) => void;
}

const DaySelector: FC<Props> = ({ defaultDay, onChange }) => {
  const [selected, setSelected] = useState<Date | null>(defaultDay);

  const handleDateChange = (date: MaterialUiPickersDate) => {
    setSelected(date);
    onChange(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        variant="inline"
        format="dd.MM.yyy"
        id="date-picker"
        label="Pick date"
        value={selected}
        onChange={handleDateChange}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DaySelector;
