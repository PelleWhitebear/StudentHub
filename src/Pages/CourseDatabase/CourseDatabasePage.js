import axios from "axios";
import OurTable from "../../Components/Global/OurTable";
import TableRow from "../../Components/Global/OurTableRow";
import Searchbar from "../../Components/Global/Searchbar";

import { useState, useEffect } from "react";

import "../../Components/Global/Styles/Table.css";
import Title from "../../Components/Global/Title";
const CourseDatabasePage = () => {
  const [clicked, setClicked] = useState(false);

  function handleClick(courseId) {
    let url = "https://kurser.dtu.dk/course/".concat(courseId);
    window.open(url);
  }

  //useState for data of courses
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      // real request (axios)

      let { data } = await axios.get(
        "https://www.studenthub.bhsi.xyz/api/courseDatabase"
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
    "Instructor ID",
    " ",
  ];

  const [filter, setFilter] = useState("");

  return (
    <>
          <div className="minHeight">
      <Title title="Course Database" />
      <Searchbar
        helperText="Enter course title or ID"
        onChangeMethod={(e) => setFilter(e.target.value)}
      />
      <OurTable headerData={headerData}>
        {data?.map((element) => {
          if (element?.courseName.toLowerCase().includes(filter.toLowerCase()) || element?.id.toLowerCase().includes(filter.toLowerCase()))
            return (
              <TableRow
                firstColumn={element.id}
                method={() => handleClick(element.id)}
                secondColumn={element.courseName}
                thirdColumn={element.courseDescription}
                fourthColumn={element.ects}
                fifthColumn={element.instructorId}
                key={data.indexOf(element)}
              />
            );
        })}
      </OurTable>
      </div>
    </>
  );
};

export default CourseDatabasePage;
