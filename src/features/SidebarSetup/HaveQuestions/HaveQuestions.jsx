import { Avatar } from "../../../ui-kit/Avatar/Avatar";
import { Text } from "../../../ui-kit/Text/Text";
import styles from "./HaveQuestions.module.scss";

import logoWG from "../../../assets/svg/logo_Wargaming.svg";

export const HaveQuestions = () => {
  return (
    <div className={styles.container}>
      <Avatar src={logoWG} />
      <Text bold>Have questions?</Text>
    </div>
  );
};
