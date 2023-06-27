import React from "react";
import Card3 from "../../molecules/Card3/Card3";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import RoundChart from "../RoundChart/RoundChart";
import CheckList from "../../molecules/CheckList/CheckList";
import { IoAddCircleOutline } from "react-icons/io5";
import { calculatePercentage } from "../../../utils/calculators";
import { currentItemSet } from "../../../store/helpers";
import { notify } from "../../../store/utils";
import Rating from "../Rating/Rating";

const DiaryCard = ({
  creatorAdjustment,
  diary,
  diary: {
    _id,
    title,
    nutrients,
    meals,
    createdAt,
    calorieAdjustment,
    ratingPublic: { average, rates },
  },
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { bmr, demandAmount } = useSelector((state) =>
    state.user.authData.currentUser?.profile
      ? state.user.authData.currentUser.profile
      : { bmr: 0, demandAmount: { kcal: 0, protein: 0, carbs: 0, fat: 0 } }
  );

  const caloricChange = creatorAdjustment ? calorieAdjustment : 0;

  return (
    <Card3
      key={_id}
      onClick={
        createdAt
          ? () => {
              dispatch(currentItemSet({ item: diary, type: "diary" }));
            }
          : () => {
              bmr ? history.push("/builder") : notify("You need BMR & TDEE");
            }
      }
      header={title}
      description={
        createdAt && (
          <Rating
            readOnly
            bigger
            padding={"0"}
            diaryID={_id}
            average={average}
            rates={rates}
            width={"40%"}
          />
        )
      }
      main={
        createdAt ? (
          <RoundChart
            data={[
              calculatePercentage(
                nutrients.kcal,
                demandAmount.kcal + caloricChange
              ),
            ]}
            label={"KCAL"}
            size={"90%"}
            nameSize={"14px"}
            valueSize={"18px"}
            offset={-12}
            ringSize={"73%"}
          />
        ) : (
          <>
            <br />
            <br />
            <IoAddCircleOutline size={"150px"} color={"rgb(125, 215, 120)"} />
          </>
        )
      }
      footer={
        <CheckList
          smallText
          color={"rgb(125, 215, 120)"}
          data={meals}
          element={"title"}
        />
      }
    />
  );
};

export default DiaryCard;
