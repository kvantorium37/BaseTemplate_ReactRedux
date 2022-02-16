import styles from "./DropdownCell.module.scss";

export const DropdownCell = ({
  rowIndex,
  column,
  item,
  isExpanded,
  toggleExpand,
}) => {
  let value = item[column.dataIndex];
  const isExpandCell = column.key == "expand";
  value = isExpandCell ? isExpanded : value;
  const onExpandClick = isExpandCell ? toggleExpand : () => {};
  return (
    <div
      style={{ width: column.width, ...column.cellStyle }}
      className={styles.container}>
      {column.render
        ? column.render(value, item, rowIndex, onExpandClick)
        : value}
    </div>
  );
};
