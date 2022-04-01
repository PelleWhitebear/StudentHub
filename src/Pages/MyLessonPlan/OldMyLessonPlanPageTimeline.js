//Timeline mui
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
//Accordion mui
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Styles/LessonPlan.css';
//Paper
import Paper from '@mui/material/Paper';

//Table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const numberOfAccordions = [1, 2, 3];


const AccordionTable = (
  <div>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
          <TableRow>
          <TableCell>Date </TableCell>
          <TableCell align="right">Topic</TableCell>
          <TableCell align="right">Learning Objectives</TableCell>
          <TableCell align="right">Litterature</TableCell>
          <TableCell align="right">Pages</TableCell>
          <TableCell align="right">Assignments</TableCell>
        </TableRow>

      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Hello
        </Typography>

      </AccordionDetails>
    </Accordion>
  </div>
);
const TableRows = (
  <div>
          <TableRow>
          <TableCell>Date</TableCell>
          <TableCell align="right">Topic</TableCell>
          <TableCell align="right">Learning Objectives</TableCell>
          <TableCell align="right">Litterature</TableCell>
          <TableCell align="right">Pages</TableCell>
          <TableCell align="right">Assignments</TableCell>
        </TableRow>
  </div>
);

function skipLastTimelineItem(number) {
  if (number != weeks.length) {
    return <TimelineConnector />;
  } else {
    return;
  }
}

const rowItems = weeks.map((number) =>
  <div className="row">
    <div>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          {skipLastTimelineItem(number)}
        </TimelineSeparator>
        <TimelineContent>Week {number}</TimelineContent>
      </TimelineItem>
    </div>

    <div>
      {TableRows}
    </div>

    {/*accordions*/}
  </div>

);




const MyLessonPlanPage = () => {
  return (
    <>

        <div className="row">
          
          <div>
          </div>
          <Paper >
          <div>
          <TableRow>
          <TableCell>Date </TableCell>
          <TableCell align="right">Topic</TableCell>
          <TableCell align="right">Learning Objectives</TableCell>
          <TableCell align="right">Litterature</TableCell>
          <TableCell align="right">Pages</TableCell>
          <TableCell align="right">Assignments</TableCell>
        </TableRow>
          </div>
          </Paper>
        </div>
      
    
        <div>
          <Timeline position="left">
            {rowItems}
          </Timeline>
        </div>
       
    </>
  )
};

export default MyLessonPlanPage;