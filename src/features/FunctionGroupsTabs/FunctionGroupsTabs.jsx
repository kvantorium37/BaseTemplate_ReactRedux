import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  ManageParticipants,
  selectFunctionGroup,
} from "../../app/reducers/manage-participants";

import { Tabs } from "../../ui-kit/Tabs/Tabs";

export const FunctionGroupsTabs = () => {
  const groups = useSelector((state) => state.manageParticipants.functions);
  const selected = useSelector(
    (state) => state.manageParticipants.selectedFunction
  );

  const dispatch = useDispatch();

  useEffect(() => {
    loadFunctionGroups();
  }, []);

  const loadFunctionGroups = () => {
    dispatch(ManageParticipants.getAllFunctions());
  };

  const selectGroup = (id) => {
    dispatch(selectFunctionGroup({ id }));
  };

  return (
    <Tabs
      selectedTab={selected}
      chooseTabCallback={selectGroup}
      config={groups}
    />
  );
};
