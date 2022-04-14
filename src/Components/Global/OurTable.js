/*                firstColumn={element.props?.firstColumn}
            secondColumn={element.props?.secondColumn}
            thirdColumn={element.props?.thirdColumn}
            fourthColumn={element.props?.fourthColumn}
            fifthColumn={element.props?.fifthColumn}
            sixthColumn={element.props?.sixthColumn}

/* 
  Here comes table stuff
  */

function TableHeader(headerData) {
  return <th>{headerData.value}</th>;
}

function TableRow(rowData) {
  return (
    <tr>
       <td> {rowData.firstColumn} </td>
       <td> {rowData.secondColumn} </td>
       <td> {rowData.thirdColumn} </td>
       <td> {rowData.fourthColumn} </td>
       <td> {rowData.fifthColumn} </td>
       <td> {rowData.sixthColumn} </td>
    </tr>
  );
}

const OurTable = (props) => (
  <>
    <table>
        <thead>
        <tr className="tableHeader">{
      props.headerData?.map((element) => (
        <TableHeader 
        key={props.headerData.indexOf(element)} 
        value={element} />))
        }</tr>
       </thead>
       <tbody> {
           props.rowData?.map((element) => (
            <TableRow
            firstColumn={element.weekNo}
            secondColumn={element.date}
            thirdColumn={element.topic}
            fourthColumn={element.learningObjectives}
            fifthColumn={element.litterature}
            sixthColumn={element.pages} 
            key={props.rowData.indexOf(element)} 
            {...element} />
          ))
           } 
        </tbody>
     
    </table>
  </>
);
export default OurTable;
