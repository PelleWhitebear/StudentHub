import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { TimePicker } from '@mui/lab';
import moment from 'moment';
import { unstable_getThemeValue } from '@mui/system';
 


export const ChooseTime = (props) => {
    let [selectedTime, setSelectedTime] = useState(moment().format("HH:mm"))


    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack sx={{ width : '150px'}}>
                <TimePicker 
                    label='Time' 
                    renderInput={(params) => <TextField {...params}/>}
                    value={selectedTime}
                    onChange={(newValue) => {
                     setSelectedTime(newValue)
                     props.onChangeMethod(newValue)
                     }}
                />
            </Stack>
        </LocalizationProvider>
    ); 
};

export default ChooseTime;