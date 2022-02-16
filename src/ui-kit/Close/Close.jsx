import { Text } from "../Text/Text";
import styles from "./Close.module.scss";

export const Close = ({ onClick, right, top, ...props }) => {
  return (
    <Text
      onClick={onClick}
      className={styles.close}
      large
      style={{ right, top }}
      {...props}>
      &times;
    </Text>
  );
};
