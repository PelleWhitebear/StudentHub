import axios from "axios";
//MenutItem
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import {useState, useEffect} from 'react';

import './Styles/Table.css';

  const headerData = [
    { weekNo: "Week", date: "Date", topic:"Topic", learningObjectives:"Learning Objectives", litterature: "Litterature", pages: "Pages" },
  ]

  /* 
  Here comes table stuff
  */

function Table(props) {
    return <table>
        {props.children}
    </table>
}

function Header(props)  {
    return  <tr>
            <th> {props.weekNo} </th>
            <th> {props.date} </th>
            <th> {props.topic} </th>
            <th> {props.learningObjectives} </th>
            <th> {props.litterature} </th>
            <th> {props.pages} </th>
        </tr>
}

function TableRow(props) {
    return <tr>
            <td> {props.weekNo} </td>
            <td> {props.date} </td>
            <td> {props.topic} </td>
            <td> {props.learningObjectives} </td>
            <td> {props.litterature} </td>
            <td> {props.pages} </td>
        </tr>
}


const MyLessonPlanPage = () => {

  //useState for data of courses
  const [data, setData] = useState([]);

useEffect(() => {
  getData();
}, []) 


async function getData() {
  try {
    // real request (axios)
  
    let { data } = await axios.get("http://localhost:8080/api/lessonplan");
    setData(data);
      
    /*// Fake request
    setTimeout(() => {
      //list of courses
      let thisData = [
        { course: "Frontend", week: "1", date: "1/4", topic:"Components", learningObjectives:"How to reuse components", litterature: "chapter 1-2", pages:20 },
        { course: "Backend", week: "2", date: "8/4", topic:"Components", learningObjectives:"How to reuse components", litterature: "chapter 1-2", pages:20 },
        { course: "Frontend", week: "3", date: "15/4", topic:"Components", learningObjectives:"How to reuse components", litterature: "chapter 1-2", pages:20 },
      ]
      //sets data in a useState
      setData(thisData);

    }, 20) //load time*/

  } catch (error) { //catch if error in getting data.
    console.log(error)
  }
}

function loadRowsToTable() {
    return data.map(data =>  <TableRow key={data.course} {...data} />
    );
  }

  const [courseTitle, setCourseTitle] = useState('');
  const uniqueCourses = [...new Set(data.map(item => item.course))];
  
  function loadCourses() {
  return uniqueCourses.map(uniqueCourses =>  <MenuItem key={uniqueCourses.course} value={uniqueCourses.course}> {uniqueCourses} </MenuItem> 
     );
    }


const handleChange = (event) => {
  setCourseTitle(event.target.value);
};
      return (
        <>
            <div className="alignCenter">
            <Box>
            <FormControl sx={{ minWidth: 500 }}>
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
            </div>

          <div className="alignCenter">
      <Table> 
        <Header 
        weekNo="Week" 
        date="Date" 
        topic="Topic"
        litterature="Litterature"
        learningObjectives="Learning Objectives"
        pages="Pages"
         /> 
        {loadRowsToTable()}
       </Table>
       </div> 
        </>
      )
    };
    
    export default MyLessonPlanPage;