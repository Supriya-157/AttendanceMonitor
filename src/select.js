import * as React from 'react';

import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

export default function YearSelect(props) {  
  let {selectText, dataSource, selectedValue} = props;
    //const dataSource=props.dataSource;
    
  
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl style={{marginTop:"10px"}} fullWidth>
          <InputLabel id="demo-simple-select-label">{selectText}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedValue}
            label={selectText}
            onChange={props.onChange}
          >
            {dataSource?.map((data)=>{return <MenuItem value={data.value}>{data.text}</MenuItem>} )}
            
        
          </Select>
        </FormControl>
      </Box>
    );
  }