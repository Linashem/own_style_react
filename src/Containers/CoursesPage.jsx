import React from "react";
import { Header } from "../Components/header/Header";
import { AboutUs } from "../Components/aboutUs/AboutUs";
import { Courses } from "../Components/courses/Courses";
import { CorursesList } from "../Components/corursesList/CorursesList";

export const CoursesPage = () => {
  return (
    <div>
      <Header />
      <main>
        <CorursesList />
      </main>
    </div>
  );
};
