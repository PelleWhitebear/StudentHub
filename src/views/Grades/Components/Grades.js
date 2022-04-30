function Grades (props) {
    //constant for different values of the announcements(props)
    const {courseId, courseName, grade, ETCS} = props;
  
      return (
        <div>
            <p>{courseId}</p>
            <p>{courseName}</p>
            <p>{grade}</p>
            <p>{ETCS}</p>
            <br/>
        </div>
      )
    };
    
    export default Grades