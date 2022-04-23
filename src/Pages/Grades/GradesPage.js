import axios from "axios";

import Paper from "@mui/material/Paper";
import OurTable from "../../Components/Global/OurTable";
import TableRow from "../../Components/Global/OurTableRow";

import { useState, useEffect } from "react";

import "../../Components/Global/Styles/Table.css";
import Title from "../../Components/Global/Title"
const GradesPage = () => {
  //useState for data of courses
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      // real request (axios)

      let { data } = await axios.get(
        "http://localhost:8080"
        //"https://www.studenthub.bhsi.xyz/api/grades"
      );
      setData(data);
    } catch (error) {
      //catch if error in getting data.
      console.log(error);
    }
  }

  const headerData = [
    "Course ID",
    "Course Title",
    "Grade",
    "International Grade",
    " "
  ];

  return (
    <>
      <Title
        title="Grades" />
          <OurTable headerData={headerData}>
            {data?.map((element) => (
              /*The column names correspond 
                      to the ones in the database*/
              <TableRow
                firstColumn={element.gradeDK}
                secondColumn={element.courseId}
                key={data.indexOf(element)}
                {...element}
              />
            ))}
          </OurTable>
    </>
  );
};

export default GradesPage;
