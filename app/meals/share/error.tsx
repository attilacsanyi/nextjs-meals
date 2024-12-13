"use client";

const Error = ({ error }: { error: Error }) => {
  return (
    <main className="error">
      <h1>An error occurred</h1>
      <p>{error.message} Failed to create meal.</p>
    </main>
  );
};

export default Error;
