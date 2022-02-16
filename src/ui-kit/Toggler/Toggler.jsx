import { useEffect } from "react";
import { classNames } from "../../utils/classNames";
import { useBooleanState } from "../../utils/hooks/useBooleanState";
import styles from "./Toggler.module.scss";

export const Toggler = ({ onClick, defaultToggled = false }) => {
  const [isToggled, toggle, a, b, setToggle] = useBooleanState(defaultToggled);

  useEffect(() => {
    setToggle(defaultToggled);
  }, [defaultToggled]);

  const activeClassName = "active_" + isToggled;

  const handleToggle = (e) => {
    e.stopPropagation();
    onClick(!isToggled);
    toggle();
  };
  return (
    <div
      onClick={handleToggle}
      className={classNames(styles.container, styles[activeClassName])}>
      <div className={classNames(styles.circle, styles[activeClassName])} />
    </div>
  );
};
