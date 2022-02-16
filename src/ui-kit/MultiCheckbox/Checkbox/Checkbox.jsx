import styles from "./Checkbox.module.scss";

import { useBooleanState } from "../../../utils/hooks/useBooleanState";

import { Text } from "../../Text/Text";

import { classNames } from "../../../utils/classNames";

import check from "../../../assets/svg/check.svg";
import checkDisabled from "../../../assets/svg/check-disabled.svg";

import expandArrow from "../../../assets/svg/expand-arrow-black.svg";
import expandArrowAccent from "../../../assets/svg/expand-arrow-accent.svg";
import { useEffect } from "react";

export const Checkbox = ({
  isShowGroup = false,
  lonely = false,
  label,
  onClickCheck,
  onClickLabel,
  checked,
  disabled,
  main = false,
  onChange = () => {},
}) => {
  const [isChecked, toggleCheck, , , setCheck] = useBooleanState(checked);

  useEffect(() => {
    setCheck(checked);
  }, [checked]);

  const handleToggle = () => {
    const newValue = !isChecked;
    toggleCheck();
    onChange(newValue);
  };

  if (lonely) {
    onClickCheck = handleToggle;
    onClickLabel = handleToggle;
  } else {
    if (!onClickCheck) {
      onClickCheck = handleToggle;
    }
    if (!onClickLabel) {
      onClickLabel = handleToggle;
    }
  }

  if (disabled) {
    onClickCheck = () => {};
    onClickLabel = () => {};
  }

  const isGrey = disabled || !isChecked;
  return (
    <div
      className={classNames(
        styles.container,
        styles["disabled-" + isGrey],
        styles["main-" + (main || lonely)],
        styles["isShowGroup-" + isShowGroup]
      )}>
      <div
        onClick={onClickCheck}
        className={classNames(styles.square, styles["disabled-" + isGrey])}>
        {isChecked && (
          <img
            className={styles.check}
            src={disabled ? checkDisabled : check}
          />
        )}
      </div>
      <Text
        onClick={onClickLabel}
        medium
        nowrap
        color={isGrey ? "dark-grey" : isShowGroup && main ? "accent" : "black"}>
        {label}
      </Text>
      {main && (
        <div
          onClick={onClickLabel}
          className={classNames(
            styles.expand,
            styles["isShowGroup-" + isShowGroup]
          )}>
          <img src={isShowGroup ? expandArrowAccent : expandArrow} />
        </div>
      )}
    </div>
  );
};
