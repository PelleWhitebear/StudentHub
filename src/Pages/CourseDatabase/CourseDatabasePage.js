import axios from "axios";
//MenutItem
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Paper from "@mui/material/Paper";
import OurTable from "../../Components/Global/OurTable";
import TableRow from "../../Components/Global/OurTableRow";

import { useState, useEffect } from "react";

import "../../Components/Global/Styles/Table.css";
import Title from "../../Components/Global/Title"
const CourseDatabasePage = () => {
  //useState for data of courses
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      // real request (axios)

      let { data } = await axios.get(
        "http://www.studenthub.bhsi.xyz:8080/api/courseDatabase"
      );
      setData(data);
    } catch (error) {
      //catch if error in getting data.
      console.log(error);
    }
  }

  const headerData = [
    "ID",
    "Course Title",
    "Course Description",
    "ECTS",
    "Instructor",
  ];

  return (
    <>
      <Title
        title="Course Database" />
      <Paper>
          <OurTable headerData={headerData}>
            {data?.map((element) => (
              /*The column names correspond 
                      to the ones in the database*/
              <TableRow
                firstColumn={element.id}
                secondColumn={element.courseName}
                thirdColumn={element.courseDescription}
                fourthColumn={element.ects}
                fifthColumn={element.instructorId}
                key={data.indexOf(element)}
              />
            ))}
          </OurTable>
      </Paper>
    </>
  );
};

export default CourseDatabasePage;
