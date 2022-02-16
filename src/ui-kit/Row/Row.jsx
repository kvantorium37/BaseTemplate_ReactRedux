import styles from "./Row.module.scss";

export const Row = ({
  alignItems,
  justifyContent = null,
  style,
  children,
  ...props
}) => {
  return (
    <div
      style={{ alignItems, justifyContent, ...style }}
      className={styles.container}
      {...props}>
      {children}
    </div>
  );
};
