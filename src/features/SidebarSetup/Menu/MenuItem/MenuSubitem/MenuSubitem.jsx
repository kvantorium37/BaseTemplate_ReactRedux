import { useLocation } from "react-router-dom";
import { Link } from "../../../../../ui-kit/Link/Link";
import { goToCallback } from "../../../../../utils/routing";
import styles from "./MenuSubitem.module.scss";

export const MenuSubitem = ({ label = "", href = "#" }) => {
  const location = useLocation();
  const isCurrentRoute = location.pathname.includes(href);

  return (
    <div className={styles.container}>
      <Link
        color={isCurrentRoute ? "accent" : "dark-grey"}
        href={href}
        textClassName={styles.link}>
        {label}
      </Link>
    </div>
  );
};
