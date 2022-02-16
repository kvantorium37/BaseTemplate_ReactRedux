import { Avatar } from "../Avatar/Avatar";
import styles from "./AvatarGroup.module.scss";

import mockUsers from "./avatarGroupsMock.json";
export const AvatarGroup = ({ users = mockUsers }) => {
  return (
    <div className={styles.container}>
      {users.map((user, index) => (
        <div key={index} className={styles.avatar}>
          <Avatar src={user.avatar} />
        </div>
      ))}
    </div>
  );
};
