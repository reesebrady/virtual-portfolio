import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { AppTheme } from "./AppTheme";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <AppTheme>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppTheme>
  );
};

export default App;
