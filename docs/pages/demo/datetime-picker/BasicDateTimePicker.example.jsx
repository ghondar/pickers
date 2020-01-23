import React, { Fragment, useState } from 'react';
import { DateTimePicker } from '@material-ui/pickers';

function BasicDateTimePicker() {
  const [selectedDate, handleDateChange] = useState(new Date());
  const limits = {
    15: [[3, 5, 6, 7]],
  };

  return (
    <Fragment>
      <DateTimePicker
        mask="____/__/__ __:__"
        label="DateTimePicker"
        variant="outlined"
        limits={limits}
        value={selectedDate}
        onChange={handleDateChange}
      />
    </Fragment>
  );
}

export default BasicDateTimePicker;
