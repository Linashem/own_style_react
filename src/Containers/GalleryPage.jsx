import React, { useEffect } from "react";
import { Gallery } from "../Components/Gallery/Gallery";
import { Header } from "../Components/header/Header";

export const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <>
      <Header />
      <Gallery />
    </>
  );
};
