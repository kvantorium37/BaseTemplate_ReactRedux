import styles from "./Text.module.scss";
import { classNames } from "../../utils/classNames";

export const Text = ({
  title = false,

  light = false,
  medium = false,
  bold = false,
  black = false,

  italic = false,

  small = false,
  large = false,
  color = null,
  activeRed = false,

  active = false,

  className = " ",
  children,
  style = {},
  nowrap = false,
  subtitle = false,
  ...props
}) => {
  let fontSize = 14;
  if (small) fontSize = 12;
  if (large) fontSize = 16;

  let fontWeight = 400;
  if (light) fontWeight = 300;
  if (medium) fontWeight = 500;
  if (bold) fontWeight = 600;
  if (black) fontWeight = 700;

  if (title) {
    fontSize = 38;
    fontWeight = 600;
  }
  if (subtitle) {
    fontSize = 20;
    fontWeight = 500;
  }

  const fontStyle = italic ? "italic" : "";

  return (
    <div
      className={classNames(
        styles.text,
        styles["nowrap-" + nowrap],
        styles["active-" + active],
        styles["active-red-" + activeRed],
        className
      )}
      style={{
        fontWeight,
        fontSize,
        fontStyle,
        color: color ? `var(--${color})` : null,
        marginBottom: title ? 40 : null,
        ...style,
      }}
      {...props}>
      {children}
    </div>
  );
};
