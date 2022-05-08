import { useEffect, useState } from "react";
import { OurTable, TableRow, Title, Button, Paper, Image } from "../../index";
import gradesService from "../../services/grades";

const GradesPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let { data } = await gradesService.getAll();
      setData(data);
    };
    fetchData();
  }, []);

  const headerData = [
    "StudentID",
    "CourseName",
    "Course ID",
    "Grade",
    "ETCS",
    "",
  ];

  return (
    <>
      <Title title="Grades" />
      <div className="rows alignCenter minHeight minWidth">
        <div>
          <Paper>
          <div className="alignCenter">
              <Button
                url="https://cn.inside.dtu.dk/cnnet/Grades/Grades.aspx"
                buttonText="Download as pdf"
              />
            </div>

          </Paper>
        </div>

        <div>
          <Paper>
            <OurTable headerData={headerData}>
              {data?.map((element) => (
                /*The column names correspond 
                      to the ones in the database*/
                <TableRow
                  firstColumn={element.studentId}
                  secondColumn={element.course.courseName}
                  thirdColumn={element.courseId}
                  fourthColumn={element.gradeDK}
                  fifthColumn={element.course.ects}
                  key={data.indexOf(element)}
                />
              ))}
            </OurTable>
          </Paper>
        </div>
      </div>
    </>
  );
};

export default GradesPage;
