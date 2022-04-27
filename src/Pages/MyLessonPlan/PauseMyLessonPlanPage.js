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

import Course from './Course.js'

import './Styles/LessonPlan.css';

import { useState, useEffect } from 'react';

function createData(weekNo, date, topic, learningObjectives, litterature, pages) {
  return { weekNo, date, topic, learningObjectives, litterature, pages };
}


const rows = [
  createData('1', '3/2', 'UI', 'bla bla bla bla bla bla bla', 'Chapter 1-2', '100'),
  createData('2', '10/2', 'UI', 'bla bla bla bla bla bla bla'),
  createData('3', '17/2', 'UI', 'bla bla bla bla bla bla bla'),
  createData('4', '24/2', 'UI', 'bla bla bla bla bla bla bla', 'Chapter 2-4', '52'),
  createData('5', '3/3', 'UI', 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla', 'Chapter 4-5', '110'),
  createData('6', '10/3', 'UI', 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla', 'Chapter 4-6', '230'),
  createData('7', '17/3', 'UI', 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla', 'Chapter 7', '40'),
  createData('8', '24/3', 'UI', 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'),
  createData('9', '31/3', 'UI', 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'),
  createData('10', '7/4', 'UI', 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla', 'Chapter 8', '13'),
  createData('11', '14/4', 'UI', 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla', 'Chapter 10', '20'),
  createData('12', '21/4', 'UI', 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla', 'Chapter 13', '15'),
  createData('13', '28/4', 'UI', 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'),
];



const MyLessonPlanPage = () => {

  //useState for data of courses
const [courseData, setCourses] = useState([]);


useEffect(() => {
  getCourses();
}, [courseData]) 


  
async function getCourses() {
  try {
    // real request (axios)
  
    // Fake request
    setTimeout(() => {
      //list of courses
      let courseData = [
        {
            id: 1,
            title: 'Frontend',
        },
        {
            id: 2,
            title: 'Backend',
        },
        {
            id: 3,
            title: 'Datacommunication',
        },
        {
          id: 4,
          title: 'Swift Development',
        },
        {
        id: 5,
        title: 'CDIO',
        },
        {
          id: 6,
          title: 'Algorithms',
          }
      ]
      //sets data in a useState
      setCourses(courseData);

    }, 20) //load time

  } catch (error) { //catch if error in getting data.
    console.log(error)
  }
} 

function loadCourses() {
  return courseData.map(courseData =>  <MenuItem key={courseData.id} value={courseData.title}> {courseData.title} </MenuItem> 
     );
}


const [courseTitle, setCourseTitle] = useState('');

const handleChange = (event) => {
  setCourseTitle(event.target.value);
};

  return (
    <>

<Paper>
<Box>
  <FormControl sx={{ minWidth: 200 }}>
        <InputLabel id="select-course-label">Course</InputLabel>
        
        <Select
          value={courseTitle}
          label="Course"
          onChange={handleChange}
        >
          {loadCourses()}

        </Select>

        
      </FormControl>
    </Box>

<div className="row">
  <div>
 
  </div>
<div>
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Week</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Topic</TableCell>
            <TableCell align="left">Learning Objectives</TableCell>
            <TableCell align="left">Litterature</TableCell>
            <TableCell align="left">Pages</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key ={row.weekNo}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {row.weekNo}

              </TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">{row.topic}</TableCell>
              <TableCell align="left">{row.learningObjectives}</TableCell>
              <TableCell align="left">{row.litterature}</TableCell>
              <TableCell align="left">{row.pages}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</div>
</div>
</Paper>

       
    </>
  )
};

export default MyLessonPlanPage;