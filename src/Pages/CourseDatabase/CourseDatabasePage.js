//Paper
import Paper from '@mui/material/Paper';

//Table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

//MenutItem
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Course from '../MyLessonPlan/Course'

import '../MyLessonPlan/Styles/LessonPlan.css';

import { useState, useEffect } from 'react';
import { Checkbox } from '@mui/material';


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
  createData("62597", "backend", 100, 100, 89.3),
  createData("CBS01", "ME", 59, 42, 89.3),
  createData("CBS01dfddddf", "ME", 59, 42, 89.3),
  createData("CBS01ddddd", "ME", 59, 42, 89.3),
  createData("CBS01dfdf", "ME", 59, 42, 89.3),
  createData("CBS01ddsddsv", "ME", 59, 42, 89.3),
  createData("CBddfdfS01", "ME", 59, 42, 89.3),
  createData("CBSdd01df", "ME", 59, 42, 89.3),
  createData("CBSddd01", "ME", 59, 42, 89.3),
  createData("CBS0dd1d", "ME", 59, 42, 89.3),
  createData("CBS0dd1", "ME", 59, 42, 89.3),
  createData("CBS01ddd", "ME", 59, 42, 89.3),
  createData("CBdddS01", "ME", 59, 42, 89.3),
  createData("CBS0ddddd1", "ME", 59, 42, 89.3),
  createData("CBS0d1", "ME", 59, 42, 89.3),
  createData("CBS01d", "ME", 59, 42, 89.3),
  createData("CBSddeeeed01", "ME", 59, 42, 89.3),
  createData("CBSeeee01", "ME", 59, 42,  89.3),
  createData("CBeSe01", "ME", 59, 42, 89.3),
  createData("CBSeee01", "ME", 59, 42, 89.3),
  createData("CBSeeeeeee01", "ME", 59, 42, 89.3),
  createData("CBS0eeee1", "ME", 59, 42, 89.3)
];

const checkboxClicked = (e) => {
  console.warn(e.target)
}

const CourseDatabasePage = () => {
  return (
    <>
    <div>
    
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
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