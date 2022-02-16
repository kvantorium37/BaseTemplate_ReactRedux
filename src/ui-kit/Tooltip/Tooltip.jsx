import styles from "./Tooltip.module.scss";
import { classNames } from "../../utils/classNames";
import { Text } from "../Text/Text";
import { useEffect, useRef, useState } from "react";

export const Tooltip = ({
  isHide = false,
  parentRef,
  children,
  className,
  ...props
}) => {
  const [isShow, setIsShow] = useState(false);
  const show = () => setIsShow(true);
  const hide = () => setIsShow(false);

  useEffect(() => {
    if (parentRef) {
      bindParentHover(parentRef);
    }
  }, [parentRef]);

  const bindParentHover = (parentRef) => {
    const parent = parentRef.current;
    parent.style.position = "relative";

    parent.addEventListener("mouseover", show);
    parent.addEventListener("mousedown", hide);
    parent.addEventListener("mouseleave", hide);
  };

  const display = isShow ? "block" : "none";

  return (
    <div
      style={{ display }}
      className={classNames(styles.tooltip, className)}
      {...props}>
      <Text small color="dark-grey">
        {children}
      </Text>
    </div>
  );
};
