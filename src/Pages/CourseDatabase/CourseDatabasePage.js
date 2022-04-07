import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import '../MyLessonPlan/Styles/LessonPlan.css';
import { Checkbox } from '@mui/material';
import { useState, useEffect } from 'react';


function createData(courseNumber, courseName, passingPct, avgGrade,  courseRating) {
  return { courseNumber, courseName, passingPct, avgGrade, courseRating };
}

const columns = [
  { 
    field: 'courseNumber',
    headerName: 'Course number'
  },
  
  { 
    field: 'courseName',
    headerName: 'Course name'
  },
  
  { field: 'passingPct',
    headerName: 'Passing percentage'
  },
  
  { field: 'avgGrade',
    headerName: 'Average grade'
  },
  
  { field: 'courseRating',
    headerName: 'Rating'
  }
];

const rows = [
  createData("62597", "Backend", 80.4, 7.30, 77.69),
  createData("45678", "Front end", 100, 11.8, 100),
  createData("65464", "sjovt kursus", 64.32, 6.4, 80.3),
  createData("43465", "sjovere kursus", 89.1, 8.78, 95.6),
  createData("45643", "kursus 1", 100, 11.8, 100),
  createData("34567", "kursus 2", 56, 2, 100),
  createData("12345", "kursus 3", 34, 4, 100),
  createData("87654", "kursus 4", 23, 3, 100),
  createData("54321", "kedeligt kursus", 59, 42, 22),
  createData("89876", "kursus x", 59, 42, 13.2),
];

const CourseDatabasePage = () => {
  return (
    <>
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell padding ="checkbox">
              <Checkbox  color = "primary" value = "anil"/></TableCell>
              <TableCell align="center">Course number</TableCell>
              <TableCell align="left">Course name</TableCell>
              <TableCell align="left">Passing percentage</TableCell>
              <TableCell align="left">Average grade</TableCell>
              <TableCell align="left">Rating</TableCell>
            </TableRow>
          </TableHead>
            <TableBody>
              {rows.map((row) => (
                  <TableRow
                    key ={row.courseNumber}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell padding ="checkbox">
                    <Checkbox  color = "primary" value = "anil"/></TableCell>
                    <TableCell align="center" component="th" scope="row">{row.courseNumber}</TableCell>
                    <TableCell align="left">{row.courseName}</TableCell>
                    <TableCell align="left">{row.passingPct}</TableCell>
                    <TableCell align="left">{row.avgGrade}</TableCell>
                    <TableCell align="left">{row.courseRating}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
      </TableContainer>
    </div>
    </>
  );
}

export default CourseDatabasePage;