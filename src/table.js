import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import StudentRadioButton from './radioButton';
import { styled } from '@mui/material/styles';
import student from './student.json';
import TablePagination from '@mui/material/TablePagination';
import MasterData from './masterData.json';
import { Divider } from '@mui/material';

function createData(id,name, attendance) {
    return { id,name, attendance };
  }
  
  /*const rows = [
    createData(1,'Anil',null),
    createData(2,'Bharath',null),
    createData(3,'Chandana',null),
    createData(4,'Darshan',null),
  ];*/
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
  export default function StudentTable(props) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const {selectYear,dataSource} = props;
    const rows = dataSource;
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
    return (
     <> <TableContainer component={Paper} style={{marginTop:"10px"}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Serial No.</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Attendance</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row) => (
              <StyledTableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="right">{row.name}</StyledTableCell>
                <StyledTableCell align="right">
                <StudentRadioButton/>
                </StyledTableCell>
              </StyledTableRow>
            ))}
           {  (rows.length == 0)&&
            <StyledTableRow><StyledTableCell style={{textAlign:"center"}} colSpan={3} >No records found </StyledTableCell></StyledTableRow>
          }
              
          </TableBody>
        </Table>
      </TableContainer>
    
      
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /></>
    );
  }