import clsx from "clsx";

const Icon = ({ name, className, color }) => (
  <i className={clsx("fas", className, name)} style={{ color }}></i>
);

export default Icon;
