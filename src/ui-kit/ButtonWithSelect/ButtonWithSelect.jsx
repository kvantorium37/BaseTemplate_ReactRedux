import { useRef, useState } from "react";
import { classNames } from "../../utils/classNames";
import { useBooleanState } from "../../utils/hooks/useBooleanState";
import { useOnClickOutside } from "../../utils/hooks/useOnClickOutside";
import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";
import styles from "./ButtonWithSelect.module.scss";

export const ButtonWithSelect = ({
  children,
  options = [],
  itemStyle = {},
  onChange = () => {},
  right = false,
  className,
  groupStyle = {},
  popupStyle = {},
  disabled = [],
  ...props
}) => {
  const popupRef = useRef(null);
  const [isShowPopup, toggle, open, close] = useBooleanState(false);
  useOnClickOutside(popupRef, close);

  return (
    <div
      ref={popupRef}
      onClick={toggle}
      className={classNames(
        styles.container,
        styles["right--" + right],
        props.className
      )}
      {...props}>
      {children}
      {isShowPopup && (
        <div style={popupStyle} className={styles.popup}>
          {options.map((suboptions = [], index) => (
            <div style={groupStyle} className={styles.group} key={index}>
              {suboptions.map((item, index) => (
                <Item
                  disabled={disabled.includes(item.value)}
                  style={itemStyle}
                  onChange={onChange}
                  key={index}
                  item={item}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Item = ({
  disabled = false,
  onChange,
  style = {},
  item = { icon: "", label: "", value: "", onClick: () => {} },
}) => {
  const { icon, label, value, onClick } = item;
  return (
    <Text
      large
      color={disabled ? "light-grey" : "dark-grey"}
      className={styles.item}
      style={style}
      onClick={() => onChange(value)}>
      {label}
      <Text medium className={styles.icon}>
        {icon}
      </Text>
    </Text>
  );
};
