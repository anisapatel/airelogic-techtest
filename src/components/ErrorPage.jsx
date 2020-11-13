import React from "react";
import { Link } from "@reach/router";

const ErrorPage = () => {
  return (
    <div>
      <p>The page you were looking for was not found!</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ErrorPage;
