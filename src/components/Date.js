import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';


const Date = (props) => {
  return(
    <div>
      <DatePicker hintText="Start date" mode="landscape"
        onChange={(event,date) => props.onChangeStartDate(date)}
        />
      <DatePicker hintText="End date" mode="landscape"
        onChange={(event,date) => props.onChangeEndDate(date)}
        />
    </div>
  )
}

export default Date;
