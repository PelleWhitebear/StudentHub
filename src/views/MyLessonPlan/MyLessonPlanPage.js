import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { OurTable, TableRow, Title } from "../../index";
import { getData } from "../../backendClient";
import { useState, useEffect } from "react";

import "../../components/Global/Styles/Table.css";

const MyLessonPlanPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async (url) => {
      let { data } = await getData(url);
      setData(data);
    };
    fetchData("lessonplan");
  }, []);

  const headerData = [
    "  Week  ",
    "  Date  ",
    "  Topic  ",
    "  Learning Objectives  ",
    "  Litterature  ",
    "  Pages  ",
  ];

  const uniqueCourses = [...new Set(data.map((item) => item.course))];

  const [courseTitle, setCourseTitle] = useState("Frontend Development");

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
              <InputLabel id="selectCourseLabel">Course</InputLabel>
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
                    {uniqueCourse}
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
