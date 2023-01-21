import * as React from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

export default function MaterialUIPickers() {
  const initialStartDate = new Date(1673596800 * 1000);
  const initialEndDate = new Date(1673596800 * 1000);
  const [startDate, setStartDate] = React.useState(dayjs(initialStartDate));
  const [endDate, setEndDate] = React.useState(dayjs(initialEndDate));

  const handleStartChange = (newValue) => {
    setStartDate(newValue);
  };

  const handleEndChange = (newValue) => {
    setEndDate(newValue);
  };

  console.log(
    "startDateValue send",
    new Date(startDate.toISOString()).getTime() / 1000
  );
  console.log("endDate send", new Date(endDate.toISOString()).getTime() / 1000);

  console.log("dayjs month", dayjs().month(-3).toString());

  const handleChange = (event) => {
    const { value } = event.target;
    if (value === "lweek") {
      setStartDate(dayjs().day(-7));
    } else if (value === "lmonth") {
      setStartDate(dayjs().month(-1));
    } else if (value === "ltmonth") {
      setStartDate(dayjs().month(-3));
    } else {
      return;
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3} direction="row">
        <DesktopDatePicker
          label="Start Date"
          inputFormat="DD/MM/YYYY"
          value={startDate}
          onChange={handleStartChange}
          renderInput={(params) => <TextField {...params} />}
          maxDate={new Date()}
          minDate={dayjs().month(-3).toString()}
        />
        <DesktopDatePicker
          label="End Date"
          inputFormat="DD/MM/YYYY"
          value={endDate}
          onChange={handleEndChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <FormControl style={{ width: "10vw" }}>
          <InputLabel id="demo-simple-select-label">Select Range</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Select Range"
            onChange={handleChange}
          >
            <MenuItem value="lweek">Last Week</MenuItem>
            <MenuItem value="lmonth">Last Month</MenuItem>
            <MenuItem value="ltmonth">Last Three Month</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" size="large">
          apply
        </Button>
      </Stack>
    </LocalizationProvider>
  );
}
