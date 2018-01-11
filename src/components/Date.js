import React from 'react';
import DatePicker from 'material-ui/DatePicker';


const Date = (props) => {
  return(
    <div>
      <DatePicker hintText="Start date" mode="landscape"
        onChange={(event,date) => props.onChangeStartDate(date.getFullYear()+'-'+(date.getMonth()+1).toString()+
            '-'+date.getDate())}
        />
      <DatePicker hintText="End date" mode="landscape"
        onChange={(event,date) => props.onChangeEndDate(date.getFullYear()+'-'+(date.getMonth()+1).toString()+
            '-'+date.getDate())}
        />
    </div>
  )
}

export default Date;
