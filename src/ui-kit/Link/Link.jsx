import { Link as RouterLink } from "react-router-dom";
import { classNames } from "../../utils/classNames";
import { Text } from "../Text/Text";

import styles from "./Link.module.scss";

export const Link = ({
  href = "",
  textClassName = "",
  children,
  ...textProps
}) => {
  return (
    <RouterLink to={href} className={styles.link}>
      <Text {...textProps} className={classNames(styles.text, textClassName)}>
        {children}
      </Text>
    </RouterLink>
  );
};
