import { useState } from "react";
import { useBooleanState } from "../../../utils/hooks/useBooleanState";
import { Row } from "../../Row/Row";
import { DropdownBaseItem } from "../DropdownBaseItem/DropdownBaseItem";
import { DropdownCell } from "../DropdownCell/DropdownCell";

export const DropdownRow = ({
  rowIndex,
  rowConfig = {},
  columns,
  item,
  expandable,
  updateRecord = () => {},
}) => {
  const [expanded, toggleExpand] = useBooleanState(false);

  let customRowStyle = {};
  if (rowConfig.style) {
    customRowStyle = rowConfig.style(item);
  }

  const handleUpdateRecord = (newRecord) => {
    updateRecord(newRecord, rowIndex);
  };

  // item.isExpanded = expanded;

  const { ExpandedRowRender } = expandable;
  const { onRowClick } = rowConfig;

  return (
    <DropdownBaseItem style={customRowStyle} expanded={expanded}>
      <Row
        onClick={onRowClick ? () => onRowClick(item) : toggleExpand}
        style={{
          padding: "24px 30px 26px 30px",
          ...rowConfig.styleRow,
        }}
        justifyContent="flex-start">
        {columns.map((column, i) => (
          <DropdownCell
            rowIndex={rowIndex}
            isExpanded={expanded}
            toggleExpand={toggleExpand}
            column={column}
            item={item}
            key={column.key}
          />
        ))}
      </Row>

      {expanded && (
        <ExpandedRowRender
          row={item}
          columns={columns}
          update={handleUpdateRecord}
          methods={{ toggleExpand }}
        />
      )}
    </DropdownBaseItem>
  );
};
