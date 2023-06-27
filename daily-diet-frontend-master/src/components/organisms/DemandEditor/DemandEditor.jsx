import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, FormContainer, Input } from "./DemandEditorStyles";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../../store/auth";
import { currentCategoryRemoved } from "../../../store/helpers";
import { calculateMacrosAmount } from "../../../utils/calculators";
import { notify } from "../../../store/utils";
import Item from "../../molecules/Item/Item";

const DemandEditor = ({ noMarginTop }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();

  const currentUser = useSelector((state) =>
    state.user.authData.currentUser ? state.user.authData.currentUser : ""
  );

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [user?.credential, currentUser]);

  const { bmr, tdee } = useSelector((state) =>
    state.user.authData.currentUser?.profile.bmr
      ? state.user.authData.currentUser.profile
      : { bmr: 0, tdee: 0 }
  );

  const { protein, carbs, fat } = useSelector((state) =>
    state.user.authData.currentUser?.profile
      ? state.user.authData.currentUser.profile.demandPercentage
      : { protein: 0, carbs: 0, fat: 0 }
  );

  const {
    register: registerDemand,
    handleSubmit: handleSubmitDemand,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      protein: "",
      carbs: "",
      fat: "",
    },
  });

  const setDemand = async ({ protein, carbs, fat }) => {
    if (protein + carbs + fat === 100) {
      const demandAmount = calculateMacrosAmount(tdee, protein, carbs, fat);

      const data = {
        weight: currentUser.profile.weight,
        height: currentUser.profile.height,
        age: currentUser.profile.age,
        activity: currentUser.profile.activity,
        bmr,
        tdee,
        demandPercentage: { protein, carbs, fat },
        demandAmount,
      };

      dispatch(updateProfile({ id: user.clientId, profile: data }));

      dispatch(currentCategoryRemoved());
    } else {
      notify("Something is missing");
    }
  };

  return (
    <FormContainer noMarginTop={noMarginTop}>
      <Item
        primary={"Demand"}
        secondary={"adjustment"}
        margin={"1rem 0.5rem"}
      />
      {user?.credential && (
        <>
          <Form onSubmit={handleSubmitDemand(setDemand)}>
            <Input
              type="number"
              placeholder={`Protein ${protein}%`}
              {...registerDemand("protein", {
                valueAsNumber: true,
                max: 100,
                min: 1,
                required: true,
                maxLength: 3,
                pattern: /\d+/,
              })}
            />
            <Input
              type="number"
              placeholder={`Carbs ${carbs}%`}
              {...registerDemand("carbs", {
                valueAsNumber: true,
                max: 100,
                min: 1,
                required: true,
                maxLength: 3,
                pattern: /\d+/,
              })}
            />
            <Input
              type="number"
              placeholder={`Fat ${fat}%`}
              {...registerDemand("fat", {
                valueAsNumber: true,
                max: 100,
                min: 1,
                required: true,
                maxLength: 3,
                pattern: /\d+/,
              })}
            />
            <Button type="submit">Update</Button>
          </Form>
          <Button
            warning
            onClick={() => setDemand({ protein: 20, carbs: 50, fat: 30 })}
          >
            Default
          </Button>
        </>
      )}
    </FormContainer>
  );
};

export default DemandEditor;
