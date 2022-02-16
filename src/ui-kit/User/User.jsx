import { Avatar } from "../Avatar/Avatar";
import { Text } from "../Text/Text";
import styles from "./User.module.scss";

// src – ссылка на иконку
// user – данные о пользователе

// size – Вид данных
// Если size = small – аватар + ИФ
// size = large - аватар + статус + доп инфа (строка снизу)
export const User = ({
  src,
  user = { name: "", info: "", status: "" },
  short = true,
  full = false,
}) => {
  let size = "small";
  if (full) size = "big";

  return (
    <div className={styles.container}>
      <Avatar status={user.status} src={src} size={size} />
      <div className={styles.info}>
        <Text bold large={full} style={{ marginBottom: 5 }}>
          {user.name}
        </Text>
        {full && (
          <Text light small color="dark-grey">
            {user.info}
          </Text>
        )}
      </div>
    </div>
  );
};
