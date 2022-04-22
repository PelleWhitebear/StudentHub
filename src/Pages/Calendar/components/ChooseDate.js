import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { DatePicker } from '@mui/lab';
import moment from 'moment';
 


export const ChooseDate = (props) => {
    let [selectedDate, setSelectedDate] = useState(moment().format("DD-MM-YYYY"))

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack>
                <DatePicker 
                    label='Date' 
                    renderInput={(params) => <TextField {...params}/>}
                    value={selectedDate}
                    onChange={(newValue) => {
                     setSelectedDate(newValue);
                     props.onChangeMethod(newValue) 
                     }}
                />
            </Stack>
        </LocalizationProvider>
    ); 
};

export default ChooseDate;