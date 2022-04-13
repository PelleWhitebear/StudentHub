import axios from "axios";
//MenutItem
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OurTimeline from "./components/OurTimeline";
import DummyBlock from "./components/DummyBlock"

import Paper from '@mui/material/Paper';

import { useState, useEffect } from "react";

import "./Styles/Table.css";

const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];


/* 
  Here comes table stuff
  */

function Table(props) {
  return <table>{props.children}</table>;
}

function Header(props) {
  return (
      <th > {props.value} </th>
  );
}

function TableRow(props) {
  return (
    <tr>
      <td> {props.weekNo} </td>
      <td> {props.date} </td>
      <td> {props.topic} </td>
      <td> {props.learningObjectives} </td>
      <td> {props.litterature} </td>
      <td> {props.pages} </td>
    </tr>
  );
}

const MyLessonPlanPage = () => {
  //useState for data of courses
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

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
    } catch (error) {
      //catch if error in getting data.
      console.log(error);
    }
  }

  function loadTableRows() {
    const tableRows = data.map((data) => 
    <TableRow key={data.course} {...data} />);
    return (
      <tbody> {tableRows} </tbody>
    );
  }

  const headerData = ["Week", "Date", "Topic", "Learning Objectives", "Litterature", "Pages"];

  function loadHeaderColumns() {
    const headerColumns = headerData.map((element) =>
     <Header value = {element}> </Header>);
     return (
       <thead className="tableHeader"> {headerColumns} </thead>
     );
  } 


  const [courseTitle, setCourseTitle] = useState("");
  const uniqueCourses = [...new Set(data.map((item) => item.course))];

  function loadCourses() {
    return uniqueCourses.map((uniqueCourses) => (
      <MenuItem key={uniqueCourses.course} value={uniqueCourses.course}>
        {" "}
        {uniqueCourses}{" "}
      </MenuItem>
    ));
  }

  const handleChange = (event) => {
    setCourseTitle(event.target.value);
  };


  return (
    <>
      <Paper >
      <div className="alignCenter">
        <Box>
          <FormControl sx={{ minWidth: 500 }}>
            <InputLabel id="select-course-label">Course</InputLabel>
            <Select value={courseTitle} label="Course" onChange={handleChange}>
              {loadCourses()}
            </Select>
          </FormControl>
        </Box>
      </div>

      <div className="alignCenter">
        <Table>
          {loadHeaderColumns()}
          {loadTableRows()}
        </Table>
      </div>
      </Paper>
    </>
  );
};

export default MyLessonPlanPage;
