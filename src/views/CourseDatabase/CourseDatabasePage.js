import { useState, useEffect } from "react";
import { Title , Searchbar, OurTable, TableRow } from "../../index";
import courseDatabaseService from '../../services/courseDatabase'

const CourseDatabasePage = () => {
  //useState for data of courses
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let { data } = await courseDatabaseService
      .getAllByToken();
      setData(data);
    };
    fetchData();
  }, []);


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
            if (
              element?.courseName
                .toLowerCase()
                .includes(filter.toLowerCase()) ||
              element?.id.toLowerCase().includes(filter.toLowerCase())
            )
              return (
                <TableRow
                  firstColumn={element.id}
                  url={"https://kurser.dtu.dk/course/".concat(element.id)}
                  methodInput={element.id}
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
