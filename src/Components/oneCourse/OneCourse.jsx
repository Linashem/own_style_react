import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { coursesPageData } from "../../helper/constants";
import { useDispatch, useSelector } from "react-redux";
import { oneCourseActions } from "../../store/oneCourseReducer";

export const OneCourse = () => {
  const courseData = useSelector((state) => state.course);

  const { id } = useParams();
  //   const [course, setCourse] = useState();
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(oneCourseActions(coursesPageData));
  //   }, [id]);
  //   useEffect(() => {
  //     setCourse(coursesPageData.id);
  //   }, [id]);
  return (
    <div>
      {" "}
      <h2>{courseData.text}</h2> <img src={courseData.imgSrc} alt='' />
    </div>
  );
};
