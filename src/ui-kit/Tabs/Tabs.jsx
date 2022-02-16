import { useState } from "react";
import { Tab } from "./Tab/Tab";
import styles from "./Tabs.module.scss";

// Для исползования табов нужно использовать хук useTabState
export const Tabs = ({
  config = [],
  renderChild = {},
  selectedTab,
  chooseTabCallback,
}) => {
  const { ExpandedItem } = renderChild;

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {config.map((item, index) => (
          <Tab
            selected={item.id == selectedTab}
            key={item.id}
            ExpandedItem={ExpandedItem}
            children={item.children}
            onClick={() => chooseTabCallback(item.id)}
            label={item.name}
            id={item.id}
          />
        ))}
      </div>
      <div className={styles.rect}></div>
    </div>
  );
};
