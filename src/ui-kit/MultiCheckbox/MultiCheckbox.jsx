import { useEffect, useMemo, useState } from "react";
import { useBooleanState } from "../../utils/hooks/useBooleanState";
import { Checkbox } from "./Checkbox/Checkbox";
import styles from "./MultiCheckbox.module.scss";
import { calculateMainCheckbox } from "./utils/main-checkbox";
import { calculateAllValues } from "./utils/values";

export const MultiCheckbox = ({
  options,
  disabled = false,
  isMutli = false,
  singleCountLabel = "unit",
  multiCountLabel = "units",
  handleChangeShowGroup = () => {},
  handleChange = () => {},
}) => {
  const [isShowGroup, toggleShow] = useBooleanState(false);

  useEffect(() => {
    handleChangeShowGroup(isShowGroup);
  }, [isShowGroup]);

  const mainCheckbox = useMemo(() => {
    return calculateMainCheckbox(options, singleCountLabel, multiCountLabel);
  }, [options]);
  const currentValues = useMemo(() => {
    return calculateAllValues(options);
  }, [options]);

  const isMainChecked = currentValues.includes(true);

  // TODO: доделать передачу событий из мультичекбокса
  const toggleAll = () => {
    const newValues = new Array(options.length).fill(!isMainChecked);
    handleChange(
      newValues,
      options.map((o) => o.id)
    );
  };

  const toggleOne = (value, index) => {
    handleChange([value], [options[index].id]);
  };

  if (!isMutli)
    return (
      <Checkbox
        disabled={disabled}
        // lonely
        label={mainCheckbox.label}
        checked={isMainChecked}
      />
    );

  if (options.length == 1)
    return (
      <Checkbox
        disabled={disabled}
        onChange={(value) => toggleOne(value, 0)}
        lonely
        label={options[0].label}
        checked={options[0].checked}
      />
    );

  return (
    <div className={styles.container}>
      <Checkbox
        disabled={disabled}
        label={mainCheckbox.label}
        checked={mainCheckbox.checked}
        onClickCheck={toggleAll}
        onClickLabel={toggleShow}
        isShowGroup={isShowGroup}
        main
      />
      {isShowGroup &&
        options.map((option, index) => (
          <Checkbox
            onChange={(value) => toggleOne(value, index)}
            disabled={disabled}
            label={option.label}
            checked={option.checked}
          />
        ))}
    </div>
  );
};
