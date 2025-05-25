import React from "react";
import { Header } from "../Components/header/Header";
import { Baner } from "../Components/baner/Baner";
import { AboutUs } from "../Components/aboutUs/AboutUs";
import { Courses } from "../Components/courses/Courses";
import { Answers } from "../Components/answers/Answers";
import { StudentsWorks } from "../Components/studentsWorks/StudentsWorks";
import { Write } from "../Components/write/Write";
import { Footer } from "../Components/footer/Footer";

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
        <Answers />
        <StudentsWorks />
        <Write />
        {/* <iframe
          src='https://yandex.ru/map-widget/v1/?um=constructor%3A0325273e898f6e231c6438935d98054667e158f8508f1d1a78cbc188d94c0e49&amp;source=constructor'
          width='100%'
          height='350'
          frameborder='0'
        ></iframe> */}
        <Footer/>
      </main>
    </div>
  );
};
