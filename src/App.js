import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CoursesPage } from "./Containers/CoursesPage";
import { Home } from "./Containers/Home";
import { routes } from "./helper/routes";
// import { CoursItem } from "./Components/coursItem/CoursItem";
import { GalleryPage } from "./Containers/GalleryPage";
import { OneCourse } from "./Components/oneCourse/OneCourse";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.courses} element={<CoursesPage />} />
        <Route path='/courses/:id' element={<OneCourse />} />
        <Route path={routes.gallery} element={<GalleryPage />} />
      </Routes>
    </div>
  );
}

export default App;
