import { useState } from "react";
import { classNames } from "../../../../utils/classNames";
import { Tooltip } from "../Tooltip/Tooltip";
import styles from "./Step.module.scss";

export const Step = ({ count, isActive, children }) => {
  return (
    <div
      className={classNames(styles.container, isActive ? styles.active : "")}>
      {count}
      {children && (
        <div className={styles.tooltip}>
          <Tooltip>{children}</Tooltip>
        </div>
      )}
    </div>
  );
};
