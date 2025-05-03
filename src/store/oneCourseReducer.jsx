const defaultState = {
  course: "",
};

const takeCourse = "takeCourse";
export const oneCourseReducer = (state = defaultState, action) => {
  switch (action.type) {
    case takeCourse:
      return {
        ...state,
        course: action.payload,
      };

    default:
      return state;
  }
};
export const oneCourseActions = (payload) => ({
  type: takeCourse,
  payload,
});
