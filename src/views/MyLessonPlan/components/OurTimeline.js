//Timeline mui
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

  function skipConnectorLastNumber(props, weekLength) {
    if (props.number !== weekLength){
      return <TimelineConnector />;
    } else return;
    }
 

  function drawTimeline(props) { 
      return props.weeks.map((number) => (
        <div>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          {skipConnectorLastNumber(number, props.weeks.length)}
      
        </TimelineSeparator>
        <TimelineContent>Week {number}</TimelineContent>
      </TimelineItem>
    </div>
      ))};

  const OurTimeline = (props) => {
      return (
          <>
          {drawTimeline(props)}
          </>
      );
  }; 
  export default OurTimeline;