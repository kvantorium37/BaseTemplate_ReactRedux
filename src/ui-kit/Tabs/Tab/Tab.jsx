import { useEffect } from "react";
import { useSelector } from "react-redux";
import { SelectModelSelectors } from "../../../app/reducers/select-model";
import { classNames } from "../../../utils/classNames";
import { useBooleanState } from "../../../utils/hooks/useBooleanState";
import { Icon } from "../../Icon/Icon";
import { Row } from "../../Row/Row";
import { Text } from "../../Text/Text";
import styles from "./Tab.module.scss";

export const Tab = ({
  ExpandedItem,
  children = [],
  label,
  id,
  selected,
  onClick,
}) => {
  const childDepartments = useSelector(SelectModelSelectors.childDepartments);

  const [isExpanded, toggleExpand, , close] = useBooleanState(false);
  const isCanExpand = typeof ExpandedItem != "undefined";

  useEffect(() => {
    if (!selected) {
      close();
    }
  }, [selected]);

  let cn = "";
  if (selected) cn = "selected";
  cn = classNames(
    styles.container,
    styles["is-expand--" + isExpanded],
    styles[cn]
  );

  const isToggle = children.length > 0 && selected;

  if (isToggle) {
    let names = children.map((child) => {
      const isSelectedChild = childDepartments.includes(child.code);
      if (isSelectedChild) {
        return child.name;
      }
    });
    names = names.filter((n) => n != undefined);
    if (names.length == 1) {
      label += `: ${names[0]}`;
    }
    if (names.length > 1) {
      label += `: ${names.length} departments`;
    }
  }

  return (
    <div onClick={isToggle ? toggleExpand : onClick} className={cn}>
      <Text bold>
        <Row>
          {label}
          {isCanExpand && selected && (
            <Icon
              className={classNames(
                styles.expandArrow,
                styles["expanded--" + isExpanded]
              )}
              size={8}
              name={
                isExpanded || selected ? "expand-arrow-accent" : "expand-arrow"
              }
            />
          )}
        </Row>
      </Text>
      {isExpanded && (
        <div className={styles.expanded}>
          {children.map((child) => (
            <ExpandedItem {...child} />
          ))}
        </div>
      )}
    </div>
  );
};
