import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ErrorActions, ErrorSelectors } from "../../app/reducers/error";
import { Close } from "../Close/Close";
import { Text } from "../Text/Text";
import styles from "./ErrorMessage.module.scss";

export const ErrorMessage = () => {
  const dispatch = useDispatch();
  const message = useSelector(ErrorSelectors.message);

  const clearError = (e) => {
    e.stopPropagation();
    dispatch(ErrorActions.clearMessage());
  };

  if (message == "") {
    return null;
  }

  return (
    <div className={styles.container}>
      <Text large>{message}</Text>
      <Close
        onMouseDown={clearError}
        right={0}
        top={-10}
        // onClick={clearError}
      />
    </div>
  );
};
