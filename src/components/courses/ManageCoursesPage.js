import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadCourses } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";

const ManageCoursePage = ({
  courses,
  authors,
  loadAuthors,
  loadCourses,
  ...props
}) => {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch(err => alert("Loading Courses Failed" + err));
    }

    if (authors.length === 0) {
      loadAuthors().catch(err => alert("Loading Authors Failed" + err));
    }
  }, []);

  const handleChange = event => {
    const { name, value } = event.target;
    setCourse(prevCourse => ({
      [name]: name === "authorId" ? parseInt(value, 10) : value,
    }));
  };

  return (
    <CourseForm
      course={course}
      errors={errors}
      authors={authors}
      onChange={handleChange}
    />
  );
};

const mapStateToProps = state => {
  return {
    courses: state.courses,
    authors: state.authors,
    course: newCourse,
  };
};

const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
};

ManageCoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
