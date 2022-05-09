
import { Divider } from "@material-ui/core";
import { useEffect, useState } from "react";
import { OurTable, TableRow, Title, Button, Paper, Image } from "../../index";
import gradesService from "../../services/grades";

const GradesPage = () => {
  const [data, setData] = useState([]);
  const [weigthedGrades, setWeigthedGrades] = useState();
  const [Sum, setSum] = useState()

  useEffect(() => {
    const fetchData = async () => {
      let { data } = await gradesService
      .getAllByToken();
      setData(data);
    };
    fetchData();
  }, []);


  gradesService.WeigthGrades().then(x => {
    setWeigthedGrades(x[0]);
    setSum(x[1]);
  });
  
  

  const headerData = [
    "StudentID",
    "CourseName",
    "Course ID",
    "Grade",
    "ETCS",
    "",
  ];
  const headerWeigthedAverage = [
    "",
    "Student ID",
    "",
    "Total ECTS",
    "",
    "Weigthed Grades",
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
              
              <TableRow
                
                fourthColumn={"w.GPA."}
                fifthColumn={"Total"}
                />
              <TableRow
                
                fourthColumn={weigthedGrades}
                fifthColumn={Sum}
              />
            </OurTable>
            
          </Paper>
        </div>
      </div>
    </>
  );
};

export default GradesPage;
