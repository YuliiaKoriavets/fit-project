import { Box, TextField } from '@mui/material';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers';
// import DateRangeIcon from '@mui/icons-material/DateRange';
import { useState } from 'react';
import { HeadingStyled, DatePickerStyled } from './DiaryDateCalendar.styled';



export default function DiaryDateCalendar() {
  const [value, setValue] = useState(null);
  const now = dayjs().format('DD.MM.YYYY')
  console.log(now)
  // const styles = thema => ({input:{color:"red"}})
  // const viewDate = new Date(value).toLocaleDateString();
  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePickerStyled
        sx={{borderColor:"red"}}
          label={now}
          inputFormat='DD.MM.YYYY'
          minDate={dayjs('2023-01-01')}
          value={value}
          onChange={newValue => setValue(newValue)}
          // renderInput={({ inputRef, InputProps }) => (
            // <Box
            //   sx={{
            //     display: 'flex',
            //     alignItems: 'center',
            //     marginTop: {
            //       xs: '40px',
            //       md: '52px',
            //       lg: '0px',
            //     },
            //   }}
            // >
            //   <HeadingStyled ref={inputRef}>{value}</HeadingStyled>
            //   {InputProps?.endAdornment}
            // </Box>
          // )}
          renderInput={props => <TextField {...props} />}
        />
      </LocalizationProvider>
    </Box>
  );
}
