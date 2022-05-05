import { Checkbox, FormControlLabel, Stack } from "@mui/material";
import "./Styles/SideBar.css";
import AddAppointment from "./addAppointment";
import '../LoginForm/LoginForm.css'
import { InputField, SymbolButton } from "../../index";



const SideBar = (props) => {

  return (
    <>
      <div className="SideBar">
        <AddAppointment />
        <Stack direction="column" spacing={1}>
          <h3>My Calendars</h3>
          {props?.data?.map((element) => {
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
        <InputField
        inputLabel={props.inputLabel}
        onChange={props.onChange} />
        <SymbolButton
        onClick={props.onClick}
        symbol={props.symbol} />

      </div>
    </>
  );
};

export default SideBar;
