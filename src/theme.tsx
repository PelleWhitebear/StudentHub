import {createTheme} from '@mui/material';
import {red, orange, yellow, brown} from '@mui/material/colors';

const primaryColor = red[900]
const secondaryColor = orange[500]

const theme = createTheme({
        palette: {
          primary: {
            main: primaryColor,
          },
          secondary: {
            main: secondaryColor,
          },
        },
        components: {
            MuiTableCell: {
                styleOverrides: {
                    root: {
                        fontSize: '0.8rem'
                    }
                }
            },

        }

        

});

export default theme;



