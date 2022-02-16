import styles from "./Arrow.module.scss";

import activeArrow from "../../../../assets/svg/arrow-accent.svg";
import defaultArrow from "../../../../assets/svg/arrow.svg";

export const Arrow = ({ isActive = false }) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.arrow}
        src={isActive ? activeArrow : defaultArrow}
      />
    </div>
  );
};
