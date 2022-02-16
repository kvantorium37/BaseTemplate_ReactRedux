import styles from "./Avatar.module.scss";

import { classNames } from "../../utils/classNames";

import { varColor } from "../../utils/styles";

import emptyAvatar from "../../assets/img/empty-avatar.png";

const CircleColors = {
  offline: "grey",
  online: "green",
};

export const Avatar = ({
  size = "small",
  src = emptyAvatar,
  status = "offline",
}) => {
  const circleColor = varColor(CircleColors[status]);

  return (
    <div
      style={{ borderColor: circleColor }}
      className={classNames(styles.container, styles[size])}>
      <img
        alt="avatar"
        src={src}
        className={classNames(styles.avatar, styles[size])}
      />
    </div>
  );
};
