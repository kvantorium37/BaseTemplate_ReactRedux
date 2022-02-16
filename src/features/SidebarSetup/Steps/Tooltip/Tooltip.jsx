import styles from "./Tooltip.module.scss";

export const Tooltip = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
