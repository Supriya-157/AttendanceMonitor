import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function StudentRadioButton() {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="true" control={<Radio />} label="Present" />
        <FormControlLabel value="false" control={<Radio />} label="Absent" />
        
      </RadioGroup>
    </FormControl>
  );
}
