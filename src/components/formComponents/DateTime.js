
import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
const DateTime = () => {

  const [selectedStartDate, setSelectedStartDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const [selectedEndDate, setSelectedEndDate] = React.useState(new Date('2014-08-18T21:11:54'));


  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
    console.log(date);
  };
  const handleEndDateChange = (date) => {
    setSelectedEndDate(date);
    console.log(date);
  };


  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Grid container justifyContent="space-around">
      <KeyboardDatePicker
        margin="normal"
        id="date-picker-dialog"
        label="Date picker dialog"
        format="MM/dd/yyyy"
        value={selectedStartDate}
        onChange={handleStartDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change start date',
        }}
      />
              <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedStartDate}
          onChange={handleStartDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
              <KeyboardDatePicker
        margin="normal"
        id="date-picker-dialog"
        label="Date picker dialog"
        format="MM/dd/yyyy"
        value={selectedEndDate}
        onChange={handleEndDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change end date',
        }}
      />
              <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedEndDate}
          onChange={handleEndDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
    </Grid>
  </MuiPickersUtilsProvider>
  );
};

export default DateTime;
