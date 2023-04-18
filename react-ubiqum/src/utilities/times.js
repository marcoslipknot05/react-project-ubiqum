export const hasConflict = (course, selected) => {

const hasConflict = (course, selected) => (
    selected.some(selection => courseConflict(course, selection))
);

const courseConflict = (course1, course2) => (
    getCourseTerm(course1) === getCourseTerm(course2)
    && timeConflict(course1, course2)
  );

}