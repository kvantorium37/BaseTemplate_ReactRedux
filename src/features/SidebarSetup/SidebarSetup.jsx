import styles from "./SidebarSetup.module.scss";

import { Logo } from "./Logo/Logo";
import { Menu } from "./Menu/Menu";

export const SidebarSetup = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <Menu />
    </div>
  );
};
