import {Checkbox, FormGroup, FormControlLabel, Box, Drawer, Toolbar, Divider, List, Stack } from '@mui/material';
import { useState } from 'react'
import './Styles/SideBar.css'

const SideBar = (props) => {

  const [checkedStatus, setCheckedStatus] = useState('');
  
      return (
        <>    
        <div className = "SideBar">
        <br/>
          <Stack direction="column" spacing={4}>
            <br/>
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
        </div>
        </>
      )
    };
    
    export default SideBar;