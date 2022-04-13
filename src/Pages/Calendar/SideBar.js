import {Checkbox, FormGroup, FormControlLabel} from '@mui/material';
import { useState } from 'react'
import './Styles/SideBar.css'

const SideBar = () => {

  const [checkedStatus, setCheckedStatus] = useState('');
  
      return (
        <>    
        <div className = "SideBar">
        <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Course 1" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Course 2" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Course 3" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Course 4" />
      </FormGroup>
        </div>
        </>
      )
    };
    
    export default SideBar;