import React from "react";
import { Link, NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h1>Error page</h1>

      <NavLink to="/">
        <button>Go Home</button>
      </NavLink>
    </>
  );
};

export default Error;