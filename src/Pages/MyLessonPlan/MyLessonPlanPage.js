import axios from "axios";
//MenutItem
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OurTable from "../../Components/Global/OurTable";
import TableRow from "../../Components/Global/OurTableRow";
import Title from "../../Components/Global/Title";

import { useState, useEffect } from "react";

import "../../Components/Global/Styles/Table.css";

const MyLessonPlanPage = () => {
  //useState for data of courses
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      // real request (axios)

      let { data } = await axios.get("https://www.studenthub.bhsi.xyz/api/lessonplan");
      setData(data);

      /*// Fake request
    setTimeout(() => {
      //list of courses
      let thisData = [
        { course: "Frontend", weekNo: "1", date: "1/4", topic:"Components", learningObjectives:"How to reuse components", litterature: "chapter 1-2", pages:20 },
        { course: "Backend", weekNo: "2", date: "8/4", topic:"Components", learningObjectives:"How to reuse components", litterature: "chapter 1-2", pages:20 },
        { course: "Frontend", weekNo: "3", date: "15/4", topic:"Components", learningObjectives:"How to reuse components", litterature: "chapter 1-2", pages:20 },
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
    "  Week  ",
    "  Date  ",
    "  Topic  ",
    "  Learning Objectives  ",
    "  Litterature  ",
    "  Pages  ",
  ];

  const uniqueCourses = [...new Set(data.map((item) => item.course))];

  function loadCourses() {
    return uniqueCourses.map((uniqueCourse) => (
      <MenuItem
        key={uniqueCourses.indexOf(uniqueCourse)}
        value={uniqueCourse.course}
      >
        {" "}
        {uniqueCourse}{" "}
      </MenuItem>
    ));
  }

  const [courseTitle, setCourseTitle] = useState("Frontend Development");

  useEffect(() => {
    getData();
  }, [data]);

  return (
    <>
    <div className="minHeight">
      <Title title="My Lessonplan" />
      <div className="alignCenter">
        <Box>
          <FormControl
            className="shadow"
            sx={{
              minWidth: 500,
              backgroundColor: "white",
            }}
          >
            <InputLabel id="select-course-label">Course</InputLabel>
            <Select
              value={courseTitle}
              label="Course"
              onChange={(e) => setCourseTitle(e.target.value)}
            >
              {uniqueCourses.map((uniqueCourse) => (
                <MenuItem
                  key={uniqueCourses.indexOf(uniqueCourse)}
                  value={uniqueCourse}
                >
                  {" "}
                  {uniqueCourse}{" "}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>

      <div className="alignCenter">
        <OurTable headerData={headerData}>
          {data?.map((element) => {
            if (element?.course === courseTitle)
              return (
                <TableRow
                  firstColumn={element.weekNo}
                  secondColumn={element.date}
                  thirdColumn={element.topic}
                  fourthColumn={element.learningObjectives}
                  fifthColumn={element.litterature}
                  sixthColumn={element.pages}
                  key={data.indexOf(element)}
                  {...element}
                />
              );
          })}
        </OurTable>
      </div>
      </div>
    </>
  );
};

export default MyLessonPlanPage;
