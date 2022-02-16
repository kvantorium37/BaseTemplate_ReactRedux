import { AvatarGroup } from "../../../ui-kit/AvatarGroup/AvatarGroup";
import { Text } from "../../../ui-kit/Text/Text";
import { Arrow } from "./Arrow/Arrow";
import { Step } from "./Step/Step";
import styles from "./Steps.module.scss";

export const Steps = () => {
  return (
    <div className={styles.container}>
      <Step count={1} isActive>
        <Text style={{ marginBottom: 15 }} color="accent">
          1st stage approval
        </Text>
        <Text style={{ marginBottom: 15 }} color="grey">
          HRBP, Rewards
        </Text>
        <AvatarGroup />
      </Step>
      <Arrow isActive />
      <Step count={2} />
      <Arrow />
      <Step count={3} />
    </div>
  );
};
