const TableRow = (rowData) => {
 return (
    <tr>
      <td> 
      <a href={rowData.url} 
      target="_blank"
      rel="noopener noreferrer">{rowData.firstColumn}</a> </td>
      <td> {rowData.secondColumn} </td>
      <td> {rowData.thirdColumn} </td>
      <td> {rowData.fourthColumn} </td>
      <td> {rowData.fifthColumn} </td>
      <td> {rowData.sixthColumn} </td>
    </tr>
  );
};
export default TableRow;
