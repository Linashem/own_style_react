import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CoursesPage } from "./Containers/CoursesPage";
import { Home } from "./Containers/Home";
import { routes } from "./helper/routes";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.courses} element={<CoursesPage />} />
      </Routes>
    </div>
  );
}

export default App;
