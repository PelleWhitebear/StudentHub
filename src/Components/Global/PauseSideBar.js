import {Checkbox, FormControlLabel, Stack } from '@mui/material';
import './Styles/SideBar.css'
import Button from './SymbolButton'
import AddAppointment from '../../Pages/Calendar/components/addAppointment'


const SideBar = (props) => {

      return (
        <>    
        <div className = "SideBar">
        <br/>
        <br/>
        <AddAppointment/>
          <Stack direction="column" spacing={4}>
            <br/>
            <br />
            <h3>My Calendars</h3>
            <Stack>
              <div>
                <FormControlLabel control={<Checkbox defaultChecked />} label={props.firstCourse}  />
              </div>
            </Stack>
            <Stack>
              <div>
                <FormControlLabel control={<Checkbox defaultChecked />} label={props.secondCourse}  />
              </div>
            </Stack>
            <Stack>
              <div>
                <FormControlLabel control={<Checkbox defaultChecked />} label={props.thirdCourse}  />
              </div>
            </Stack>
            <Stack>
              <div>
                <FormControlLabel control={<Checkbox defaultChecked />} label={props.fourthCourse}  />
              </div>
            </Stack>
            <Stack>
              <div>
                <FormControlLabel control={<Checkbox defaultChecked />} label={props.fifthCourse}  />
              </div>
            </Stack>
            <Stack>
              <div>
                <FormControlLabel control={<Checkbox defaultChecked />} label={props.myAppointments}  />
              </div>
            </Stack>
          </Stack>
          <Button symbol="+" />
        </div>
        </>
      )
    };
    
    export default SideBar;