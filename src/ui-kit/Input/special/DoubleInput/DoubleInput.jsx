import { Input } from "../../Input";

import NumberFormat from "react-number-format";
import { useEffect, useRef, useState } from "react";
import { useBooleanState } from "../../../../utils/hooks/useBooleanState";
import { useOnClickOutside } from "../../../../utils/hooks/useOnClickOutside";

import styles from "./DoubleInput.module.scss";
import { Text } from "../../../Text/Text";
import { classNames } from "../../../../utils/classNames";

export const DoubleInput = ({
  value = "",
  bordered = false,
  onChange,
  name = "",
  placeholder = "Add value",
  decimalScale = 2,
  onFocus = () => {},
  onBlur = () => {},
  ...props
}) => {
  const [width, setWidth] = useState();

  const inputRef = useRef(null);
  const bufferRef = useRef(null);

  useEffect(() => {
    calculateWidth();
  }, [bufferRef, placeholder]);

  const handleChange = ({ value }) => {
    onChange({ target: { value, name } });
  };

  const clearValue = () => {
    handleChange({ value: "" });
  };

  useEffect(() => {
    calculateWidth();
  }, [value]);

  const calculateWidth = () => {
    if (bufferRef.current) {
      const width = bufferRef.current.clientWidth;
      setWidth(width);
    }
  };

  const isEmpty = value + "" == "";

  return (
    <div
      className={classNames(styles.container, styles["bordered--" + bordered])}>
      <NumberFormat
        ref={inputRef}
        className={styles.input}
        onValueChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        style={{ width }}
        placeholder={placeholder}
        displayType={"input"}
        fixedDecimalScale
        decimalScale={decimalScale}
        onClick={(e) => e.stopPropagation()}
      />
      {!isEmpty && (
        <Text
          onClick={clearValue}
          color={"grey"}
          large
          className={styles.clear}>
          &times;
        </Text>
      )}
      <div className={styles.buffer} ref={bufferRef}>
        <Text large medium style={{ width: "max-content" }}>
          {!isEmpty ? parseFloat(value).toFixed(decimalScale) : placeholder}
        </Text>
      </div>
    </div>
  );
};
