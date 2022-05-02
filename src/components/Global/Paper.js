import MuiPaper from "@mui/material/Paper";

const Paper = (props) => {
  return (
    <>
      <MuiPaper sx={{
          minHeight:"675px",
          padding: "8px"
          }}>
        <br />
        {props.children}
        <br />
      </MuiPaper>
    </>
  );
};

export default Paper;
