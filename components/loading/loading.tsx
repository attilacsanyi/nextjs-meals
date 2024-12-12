import classes from "./loading.module.css";

const Loading = ({ children }: { children: React.ReactNode }) => {
  return <p className={classes.loading}>{children}</p>;
};

export default Loading;
