import TableHeader from './TableHeader'


const OurTable = (props) => {
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
        <tbody>
          {props.children}
        </tbody>
      </table>
      </div>
    </>
  );
};
export default OurTable;
