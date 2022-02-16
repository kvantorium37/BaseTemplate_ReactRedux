import { goToCallback } from "../../../../utils/routing";
import styles from "./MenuItem.module.scss";
import { MenuSubitem } from "./MenuSubitem/MenuSubitem";

import { Text } from "../../../../ui-kit/Text/Text";
import { Link } from "../../../../ui-kit/Link/Link";
import { useLocation } from "react-router-dom";
import { classNames } from "../../../../utils/classNames";

export const MenuItem = ({ label, href = "", subItems = [] }) => {
  const location = useLocation();
  const isCurrentRoute = location.pathname == href;
  return (
    <div
      className={classNames(styles.item, styles["active--" + isCurrentRoute])}>
      <Link href={href} large color={isCurrentRoute ? "accent" : "black"}>
        {label}
      </Link>
      {isCurrentRoute &&
        subItems.map((subItem, index) => (
          <MenuSubitem key={index} label={subItem.label} href={subItem.href} />
        ))}
    </div>
  );
};
