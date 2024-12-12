"use client";

const Error = ({ error }: { error: Error }) => {
  return (
    <main className="error">
      <h1>An error occurred</h1>
      <p>{error.message} Please try again later.</p>
    </main>
  );
};

export default Error;
