import MenuItem from '@mui/material/MenuItem';

function Course (props) {
    //constant for different values of the course(props)
    const {id, title} = props;
  
      return (
        <div >
              <MenuItem value={title}> {title} </MenuItem>
        </div>
      )
    };
    
    export default Course