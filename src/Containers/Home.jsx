import React from "react";
import { Header } from "../Components/header/Header";
import { Baner } from "../Components/baner/Baner";
import { AboutUs } from "../Components/aboutUs/AboutUs";
import { Courses } from "../Components/courses/Courses";
import { Answers } from "../Components/answers/Answers";

export const Home = () => {
  return (
    <div>
      <div className='header_baner'>
        <div className='header_block'>
          <Header />
        </div>
        <div className='baner_block'>
          <Baner />
        </div>
      </div>
      <main>
        <AboutUs />
        <Courses />
        <Answers/>
      </main>
    </div>
  );
};
