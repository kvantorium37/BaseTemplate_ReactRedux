import { Link as RouterLink } from "react-router-dom";
import { classNames } from "../../utils/classNames";
import { Text } from "../Text/Text";

import styles from "./Icon.module.scss";

export const Icon = ({
  noEffects = false,
  name = "",
  size = 20,
  className,
  ...props
}) => {
  const additionStyle = noEffects
    ? { background: "none !important", padding: 0 }
    : {};
  return (
    <img
      style={{ width: size, height: 20, ...additionStyle }}
      src={`/assets/svg/${name}.svg`}
      className={classNames(
        styles.text,
        className,
        styles["no-effect--" + noEffects]
      )}
      {...props}
    />
  );
};
