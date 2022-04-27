import { OurTable, TableRow } from "../../Components/Global/OurTable";
import { useEffect , useState } from 'react';
import "../../Components/Global/Styles/Table.css";
import Title from "../../Components/Global/Title";

import { getData } from "../../backendClient";

const GradesPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async (url) => {
      let { data } = await getData(url);
      setData(data);
    };
    fetchData("lessonplan");
  }, []);

  const headerData = ["StudentID","Course ID", "Grade", "", "", ""];

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
              secondColumn={element.gradeDK}
              thirdColum={element.courseId}
              key={data.indexOf(element)}
            />
          ))}
        </OurTable>
      </div>
    </>
  );
};

export default GradesPage;
