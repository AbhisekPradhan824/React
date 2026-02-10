import { TextField } from "@mui/material";
import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export function MaterialDemo() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="container-fluid">
        <div className="w-25">
          <h2>Departure</h2>
          <DatePicker />
        </div>
      </div>
    </LocalizationProvider>
  );
}
