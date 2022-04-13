import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { DatePicker } from '@mui/lab';

 


export const ChooseDate = () => {
    let [selectedDate, setSelectedDate] = useState<Date | null>(null)

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack>
                <DatePicker 
                    label='Date' 
                    renderInput={(params) => <TextField {...params}/>}
                    value={selectedDate}
                    onChange={(newValue) => {
                     setSelectedDate(newValue)
                     }}
                />
            </Stack>
        </LocalizationProvider>
    ); 
};

export default ChooseDate;