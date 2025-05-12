import React, { useEffect } from "react";
import { OneCourse } from "../Components/oneCourse/OneCourse";
import { Header } from "../Components/header/Header";

export const OneCoursePage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <div>
      <Header />
      <OneCourse />
    </div>
  );
};
