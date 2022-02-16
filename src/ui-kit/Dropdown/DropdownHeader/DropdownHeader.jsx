import { Text } from "../../Text/Text";
import styles from "./DropdownHeader.module.scss";

export const DropdownHeader = ({ config }) => {
  return (
    <div className={styles.container}>
      {config.map((item) => (
        <Text
          key={item.key}
          color="grey"
          style={{
            width: item.width,
            textAlign: item.align ? item.align : "left",
          }}>
          {item.title}
        </Text>
      ))}
    </div>
  );
};
