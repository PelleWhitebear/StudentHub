import axios from "axios";
//MenutItem
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Paper from "@mui/material/Paper";
import OurTable from "../../Components/Global/OurTable"

import { useState, useEffect } from "react";

import "./Styles/Table.css";

const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];



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

  const headerData = [
    "Week",
    "Date",
    "Topic",
    "Learning Objectives",
    "Litterature",
    "Pages"
  ];

  const databaseHeaders = [
    "weekNo",
    "date",
    "topic",
    "learningObjectives",
    "litterature",
    "pages"
  ];

  const uniqueCourses = [...new Set(data.map((item) => item.course))];

  function loadCourses() {
    return uniqueCourses.map((uniqueCourses) => (
      <MenuItem key={uniqueCourses.course} value={uniqueCourses.course}>
        {" "}
        {uniqueCourses}{" "}
      </MenuItem>
    ));
  }



  const [courseTitle, setCourseTitle] = useState(uniqueCourses[0]);

  useEffect(() => {
    getData();
  }, [data]) 
  

  const handleChange = (event) => {
    setCourseTitle(event.target.value);
  };

  return (
    <>
      <Paper>
        <div className="alignCenter">
          <Box>
            <FormControl sx={{ minWidth: 500 }}>
              <InputLabel id="select-course-label">Course</InputLabel>
              <Select
                value={courseTitle}
                label="Course"
                onChange={handleChange}
                onSelect = {handleChange}
              >
                {loadCourses()}
              </Select>
            </FormControl>
          </Box>
        </div>

        <div className="alignCenter">
          <OurTable 
          headerData={headerData}
          rowData={data}
          firstColumn="weekNo"
          secondColumn="date"
          thirdColumn="topic"
          fourthColumn="learningObjectives"
          fifthColumn="litterature"
          sixthColumn="pages"
         /> 
        </div>
      </Paper>
    </>
  );
};

export default MyLessonPlanPage;
