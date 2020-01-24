import React, { Fragment, useState } from 'react';
import { TimePicker } from '@ghondar/pickers';

function BasicTimePicker() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Fragment>
      <TimePicker autoOk label="12 hours" value={selectedDate} onChange={handleDateChange} />

      <TimePicker
        clearable
        ampm={false}
        label="24 hours"
        value={selectedDate}
        limits={[3, 5, 6, 7]}
        onChange={handleDateChange}
      />

      <TimePicker
        showTodayButton
        todayLabel="now"
        label="Step = 5"
        value={selectedDate}
        minutesStep={5}
        onChange={handleDateChange}
      />
    </Fragment>
  );
}

export default BasicTimePicker;
