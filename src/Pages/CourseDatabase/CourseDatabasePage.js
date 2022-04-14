import axios from "axios";
//MenutItem
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Paper from "@mui/material/Paper";
import OurTable from "../../Components/Global/OurTable"
import TableRow from "../../Components/Global/OurTableRow"

import { useState, useEffect } from "react";

import "../../Components/Global/Styles/Table.css";

const CourseDatabasePage = () => {
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
    "ID",
    "Title",
    "Course Description",
    "ECTS",
    "Instructor"
  ];

  return (
    <>
        <Paper>
    <div className="alignCenter">

          <OurTable 
          headerData={headerData}>
                    {data?.map((element) => (
                      /*The column names correspond 
                      to the ones in the database*/
                      <TableRow
                        firstColumn={element.weekNo}
                        secondColumn={element.date}
                        thirdColumn={element.topic}
                        fourthColumn={element.learningObjectives}
                        fifthColumn={element.litterature}
                        key={data.indexOf(element)}
                        {...element}
                      />
                    ))}
         </OurTable>
         </div>
         </Paper>
    </>
  );
};

export default CourseDatabasePage;
