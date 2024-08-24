"use client";
const ErrorArchive = ({ error }) => {
  return (
    <div id="error">
      <h2>Error Occured</h2>
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorArchive;
