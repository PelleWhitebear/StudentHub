import {Checkbox, FormGroup, FormControlLabel, Box, Drawer, Toolbar, Divider, List, Stack } from '@mui/material';
import { useState } from 'react'
import './Styles/SideBar.css'

const SideBar = () => {

  const [checkedStatus, setCheckedStatus] = useState('');
  
      return (
        <>    
        <div className = "SideBar">
        <br/>
          <Stack direction="column" spacing={2}>
            <br/>
            <Stack>
              <div>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Course 1"  />
              </div>
            </Stack>
            <Stack>
              <div>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Course 2"  />
              </div>
            </Stack>
            <Stack>
              <div>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Course 3"  />
              </div>
            </Stack>
            <Stack>
              <div>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Course 4"  />
              </div>
            </Stack>
            <Stack>
              <div>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Course 5"  />
              </div>
            </Stack>
            <Stack>
              <div>
                <FormControlLabel control={<Checkbox defaultChecked />} label="My appointments"  />
              </div>
            </Stack>
          </Stack>
        </div>
        </>
      )
    };
    
    export default SideBar;