import styles from "./Col.module.scss";

export const Col = ({
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
