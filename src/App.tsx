import { ThemeProvider } from "@mui/material";
import customTheme from "./theme";
import { RenderRoutes} from './routes/routes' 




export const App = () => {

    return (
      <ThemeProvider theme = {customTheme}>
      <RenderRoutes />
      </ThemeProvider>
    );
  };
  export default App;