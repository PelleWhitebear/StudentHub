import { Checkbox, FormControlLabel, Stack } from "@mui/material";
import "./Styles/SideBar.css";
import AddAppointment from "../../Pages/Calendar/components/addAppointment";
import SymbolButton from './SymbolButton'
import '../LoginForm/LoginForm.css'

const InputField = (props) => {
  return (
    <input onChange={props.onChange} type="input"></input>
    
  );

};
const SideBar = (props) => {

  return (
    <>
      <div className="SideBar">
        <br />
        <br />
        <AddAppointment />
        <Stack direction="column" spacing={2}>
          <br />
          <br />
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
        onChange={props.onChange} />
        <SymbolButton
        onClick={props.onClick}
        symbol={props.symbol} />
      </div>
    </>
  );
};

export default SideBar;
