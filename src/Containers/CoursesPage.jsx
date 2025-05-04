import React, { useEffect } from "react";
import { Header } from "../Components/header/Header";
import { CorursesList } from "../Components/corursesList/CorursesList";

export const CoursesPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <Header />
      <main>
        <CorursesList />
      </main>
    </div>
  );
};
