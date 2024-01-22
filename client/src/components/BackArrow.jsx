import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const BackArrow = () => {
  return (
    <Link
      to={"/"}
      className="absolute left-5 top-5 transition-all duration-300 hover:scale-110"
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </Link>
  );
};

export default BackArrow;
