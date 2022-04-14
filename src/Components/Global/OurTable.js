import TableHeader from './TableHeader'


const OurTable = (props) => {

  return (
    <>
      <table>
        <thead>
          <tr className="tableHeader">
            {props.headerData?.map((element) => (
              <TableHeader
                key={props.headerData.indexOf(element)}
                value={element}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {" "}
          {props.children}
        </tbody>
      </table>
    </>
  );
};
export default OurTable;
