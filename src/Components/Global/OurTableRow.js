const TableRow = (rowData, props) => {
 return (
    <tr>
      <td className="redirectStyle"
      onClick={props.onChange}> 
      {rowData.firstColumn} </td>
      <td> {rowData.secondColumn} </td>
      <td> {rowData.thirdColumn} </td>
      <td> {rowData.fourthColumn} </td>
      <td> {rowData.fifthColumn} </td>
      <td> {rowData.sixthColumn} </td>
    </tr>
  );
};
export default TableRow;
