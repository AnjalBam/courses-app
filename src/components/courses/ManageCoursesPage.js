import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadCourses } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";

const ManageCoursePage = ({ courses, authors, loadAuthors, loadCourses }) => {
  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch(err => alert("Loading Courses Failed" + err));
    }

    if (authors.length === 0) {
      loadAuthors().catch(err => alert("Loading Authors Failed" + err));
    }
  }, []);

  return (
    <>
      <h2>Manage Course</h2>
    </>
  );
};

const mapStateToProps = state => {
  return {
    courses: state.courses,
    authors: state.authors,
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
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
