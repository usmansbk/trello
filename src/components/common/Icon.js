import clsx from "clsx";

const Icon = ({ name, className }) => (
  <i className={clsx("fas", className, name)}></i>
);

export default Icon;
