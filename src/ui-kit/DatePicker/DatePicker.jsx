import styles from "./DatePicker.module.scss";

import { default as DatePickerLib, registerLocale } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { useState } from "react";

import { classNames } from "../../utils/classNames";

export const DatePicker = ({
  value,
  name,
  placeholder,
  onChange,
  containerStyle,
  ...rest
}) => {
  const handleChange = (date) => {
    if (date) date = new Date(date).toJSON();
    onChange({ target: { value: date, name } });
  };

  if (value) {
    value = new Date(value);
  }

  const [isOpened, setIsOpened] = useState(false);
  const open = () => setIsOpened(true);
  const close = () => setIsOpened(false);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={styles.container}
      style={{ ...containerStyle }}>
      <DatePickerLib
        dateFormat="dd.MM.yy"
        placeholderText={placeholder}
        popperClassName={styles.popper}
        weekDayClassName={() => styles.weekDay}
        calendarClassName={styles.calendar}
        className={classNames(styles.input, styles["is-open-" + isOpened])}
        dayClassName={() => styles.day}
        onCalendarOpen={open}
        onCalendarClose={close}
        selected={value}
        onChange={handleChange}
        {...rest}
      />
    </div>
  );
};
