import './Styles/TableHeader.css';

function Table(props) {
    return <table>
        {props.children}
    </table>
}
function Header(props)  {
    return  <tr>
            <th> {props.week} </th>
            <th> {props.date} </th>
            <th> {props.topic} </th>
            <th> {props.learningObjectives} </th>
            <th> {props.litterature} </th>
            <th> {props.pages} </th>
        </tr>
   
}

function TableRow(props, key, value) {
    return <tr>
            <td> {props.week} </td>
            <td> {props.date} </td>
            <td> Bippelop {props.topic} </td>
            <td> {props.learningObjectives} </td>
            <td> {props.litterature} </td>
            <td> {props.pages} </td>
        </tr>
}





const MyLessonPlanPage = () => {

      return (
        <>
        <Table>
        <Header 
        week="Week" 
        date="Date" 
        topic="Topic"
        litterature="Litterature"
        pages="Pages"
         /> 
        <TableRow
        week="Week" 
        date="Date" 
        topic="Topic"
        litterature="Litterature"
        pages="Pages"
        />
       </Table>
       
        </>
      )
    };
    
    export default MyLessonPlanPage;