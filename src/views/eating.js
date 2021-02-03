import { useState } from 'react';
import { useFormik } from 'formik';
import DateFnsUtils from '@date-io/date-fns';
import TextField from '@material-ui/core/TextField';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

const Eating = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <h1>Eating</h1>
        <form noValidate autoComplete="off">
          <TextField required id="eating-type" label="Eating type" defaultValue="" />
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </form>
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default Eating;
