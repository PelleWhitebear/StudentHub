import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { deleteAppointmentFromFirebase } from '../../services/firebase';



function SimpleDialog(props) {
  const choices = ['Delete', 'Edit', ];
  const { onClose, selectedValue, open, appointmentId } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    if(value === 'Delete'){
        deleteAppointmentFromFirebase(appointmentId)
    }
    if(value === 'Edit'){

    }
  };

  return (    
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Appointment</DialogTitle>
      <List sx={{ pt: 0 }}>
        {choices.map((choice) => (
          <ListItem button onClick={() => handleListItemClick(choice)} key={choice}>
            <ListItemText primary={choice} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}


export default function SimpleDialogDemo(props) {

  const [open, setOpen] = React.useState(true);
  const [selectedValue, setSelectedValue] = React.useState();
  const [appointmentId, setAppointmentId] = React.useState(props);


  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
     
    <div>


      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        appointmentId={appointmentId}
      />
    </div>
  );
}

