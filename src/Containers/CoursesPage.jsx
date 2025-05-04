import React from "react";
import { Header } from "../Components/header/Header";
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
