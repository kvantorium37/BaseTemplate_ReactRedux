import styles from "./Dropdown.module.scss";
import { DropdownHeader } from "./DropdownHeader/DropdownHeader";
import { DropdownRow } from "./DropdownRow/DropdownRow";

const defaultRowConfig = {
  style: () => ({
    backgroundColor: "var(--white)",
    color: "var(--black)",
  }),
};

export const Dropdown = ({
  columns = [],
  rowConfig = defaultRowConfig,
  data = [],
  expandable,

  updateRecord = () => {},
}) => {
  return (
    <div className={styles.container}>
      <DropdownHeader config={columns} />
      {data.map((item, index) => (
        <DropdownRow
          rowIndex={index}
          updateRecord={updateRecord}
          rowConfig={rowConfig}
          key={item.key}
          expandable={expandable}
          columns={columns}
          item={item}
        />
      ))}
    </div>
  );
};
