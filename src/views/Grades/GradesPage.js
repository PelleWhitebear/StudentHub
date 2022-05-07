import { useEffect , useState } from 'react';
import { OurTable, TableRow, Title } from "../../index";
import axios from "axios";

const GradesPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getGrades();
  }, []);

  const getGrades = async () =>{
    try {
      
        const token = localStorage.getItem("token")
      
      
      // real request (axios) 
      let { data } = await axios.get(`http://localhost:8080/api/grade/getGrades/${token}`);

      setData(data);

    } catch (error) { //catch if error in getting data.
      if(error.response){
        console.log(error.response)
      }else if(error.message){
        console.log(error.message)
      }else if(error.request){
        console.log(error.request)
      }
    }
  }

  const headerData = ["StudentID","CourseName","Course ID", "Grade", "ETCS", ""];

  return (
    <>
      <div className="minHeight">
        <Title title="Grades" />
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
      </div>
    </>
  );
};

export default GradesPage;
