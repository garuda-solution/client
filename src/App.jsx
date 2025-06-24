import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/Router/AppRouter";

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
