import { classNames } from "../../utils/classNames";
import styles from "./Input.module.scss";

export const Input = ({
  className,
  value,
  onChange,
  placeholder = "",
  name = "",
  children,
  ...props
}) => {
  const cn = classNames(styles.input, className);
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      className={cn}
      {...props}
    />
  );
};
