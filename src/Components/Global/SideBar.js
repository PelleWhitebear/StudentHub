import { Checkbox, FormControlLabel, Stack } from "@mui/material";
import "./Styles/SideBar.css";
import SymbolButton from "./SymbolButton";
import AddAppointment from "../../Pages/Calendar/components/addAppointment";

const SideBar = (props) => {
  return (
    <>
      <div className="SideBar">
        <br />
        <br />
        <AddAppointment />
        <Stack direction="column" spacing={4}>
          <br />
          <br />
          <h3>My Calendars</h3>
          {props?.courses?.map((element) => {
            return (
              <Stack key={props?.courses?.indexOf(element)}>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={element}
                />
              </Stack>
            );
          })}
        </Stack>
        <SymbolButton 
        symbol={props.symbol} />
      </div>
    </>
  );
};

export default SideBar;
