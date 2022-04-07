
import { useState, useEffect } from "react";
import Grades from "./Components/Grades";

const GradesPage = () => {
const [gradesData, setGradeesData] = useState([])

useEffect(() => {
  getGrades();
}, []) 


async function getGrades() {

  try {

    setTimeout(() => {

      let grades = [{
        id: 1,
        courseId: 62332,
        courseName: "Compiler",
        grade: 7,
        ETCS: 5
      },
      {
        id: 2,
        courseId: 62577,
        courseName: "Data Koomunikation",
        grade: 10,
        ETCS: 5
      }]

      setGradeesData(grades)


    }, 1000)
  } catch (error){
    console.log(error)
  }
}

function loadGrades() {
  return gradesData.map(data => <Grades key={data.id}  {...data} />)
}


  return (
    <div>
      {loadGrades()}
    </div>
    
  )
};


export default GradesPage;