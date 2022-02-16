import { classNames } from "../../utils/classNames";
import styles from "./Button.module.scss";

export const Button = ({
  primary = false,
  secondary = true,
  children,
  disabled,
  onClick,
  ...props
}) => {
  let btnType = "secondary";

  if (primary) {
    btnType = "primary";
  }

  if (disabled) {
    btnType = "disabled";
  }

  const cn = classNames(styles.container, styles[btnType]);
  return (
    <div onClick={disabled ? () => {} : onClick} className={cn} {...props}>
      {children}
    </div>
  );
};
