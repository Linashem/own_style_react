import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CoursesPage } from "./Containers/CoursesPage";
import { Home } from "./Containers/Home";
import { routes } from "./helper/routes";
import { GalleryPage } from "./Containers/GalleryPage";
import { OneCoursePage } from "./Containers/OneCoursePage";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.courses} element={<CoursesPage />} />
        <Route path={routes.oneCourse} element={<OneCoursePage />} />
        <Route path={routes.gallery} element={<GalleryPage />} />
      </Routes>
    </div>
  );
}

export default App;
