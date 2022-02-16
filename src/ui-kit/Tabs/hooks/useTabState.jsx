import { useState } from "react";

export const useTabState = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const chooseTabCallback = (index) => () => setSelectedTab(index);

  return [selectedTab, chooseTabCallback];
};
