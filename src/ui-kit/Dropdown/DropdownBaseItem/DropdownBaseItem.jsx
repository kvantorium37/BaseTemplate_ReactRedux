import { classNames } from "../../../utils/classNames";
import styles from "./DropdownBaseItem.module.scss";

export const DropdownBaseItem = ({ expanded, children, style, ...props }) => {
  return (
    <div
      className={classNames(styles.container, styles["expanded-" + expanded])}
      style={style}
      {...props}>
      {children}
    </div>
  );
};
