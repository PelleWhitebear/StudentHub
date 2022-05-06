export const TableHeader = (headerData) => {
  return (
     <th>{headerData.value}</th>
   );
 };

export const TableRow = (rowData) => {
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

export const OurTable = (props) => {
  return (
    <>
    <div className="alignCenter">
      <table>
        <thead className="tableHeader">
          <tr>
            {props.headerData?.map((element) => (
              <TableHeader
                key={props.headerData.indexOf(element)}
                value={element}
              />
            ))}
          </tr>
        </thead>
        <tbody >
          {props.children}
          
        </tbody>
      </table>
      </div>
    </>
  );
};
export default OurTable;
