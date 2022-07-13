import * as React from 'react';
import Container from '@mui/material/Container';
import YearSelect from './select';
import StudentTable from './table';
import MasterData from './masterData.json';
import HeaderAppBar from './AppBar';



function App() {
  const [year, setYear] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [studentDataSource,setStudentDataSource ]= React.useState([]);
  const yearDataSource = MasterData.map(data=>{
    return {
      text: data.year,
      value: data.year
    }
  });
  
   
  const yearHandleChange = (event) => {
    setYear(event.target.value );
    setStudentDataSource([]);
    setSubject('');
    
  };
  const subjectHandleChange = (event) => {
    setSubject(event.target.value );
    setStudentDataSource(MasterData.filter(x=>x.year==year)[0]?.studentsList);
  };

  let subjectDataSource = MasterData.filter(x=>x.year==year)[0]?.subject.map((data)=>{
    console.log(data);
    return {
      text: data,
      value: data
    }
  });
  
  
  return (
    <Container maxWidth="sm">
      <HeaderAppBar/>
      
     <YearSelect dataSource={yearDataSource}  onChange={yearHandleChange} selectText="Year"/>
     
     <YearSelect dataSource={subjectDataSource} onChange={subjectHandleChange} selectText="Subject" />
     <StudentTable dataSource={studentDataSource} />
    </Container>
  );
}


export default App;
