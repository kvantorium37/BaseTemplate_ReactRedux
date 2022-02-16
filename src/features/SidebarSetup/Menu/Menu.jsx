import { useNavigationData } from "../../../navigation-data";
import styles from "./Menu.module.scss";
import { MenuItem } from "./MenuItem/MenuItem";

export const Menu = () => {
  const navigationData = useNavigationData();
  return (
    <div className={styles.container}>
      {navigationData.map((item, index) => (
        <MenuItem
          key={index}
          label={item.label}
          href={item.href}
          subItems={item.subItems}
        />
      ))}
    </div>
  );
};
