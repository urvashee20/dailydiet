import {
  StyledOption,
  StyledSelect,
} from "../../../styles/globalComponentsStyles";

const SortingController = ({ category, onChange }) => {
  const showRating = category === "diary" || category === "inspiration";

  return (
    <StyledSelect
      color={"black"}
      save={true}
      onChange={onChange}
      borderRadius={".25rem"}
      border={"1px solid #eaeaea"}
    >
      <StyledOption value={"newest"}>Newest</StyledOption>
      <StyledOption value={"oldest"}>Oldest</StyledOption>
      <StyledOption value={"alphabetical"}>Alphabetical</StyledOption>
      {showRating && (
        <StyledOption value={"bestrating"}>Highest Rating</StyledOption>
      )}
      {showRating && (
        <StyledOption value={"lowestrating"}>Lowest Rating</StyledOption>
      )}
      <StyledOption value={"highestkcal"}>Highest kcal</StyledOption>
      <StyledOption value={"lowestkcal"}>Lowest kcal</StyledOption>
      <StyledOption value={"highestprotein"}>Highest protein</StyledOption>
      <StyledOption value={"lowestprotein"}>Lowest protein</StyledOption>
      <StyledOption value={"highestcarbs"}>Highest carbs</StyledOption>
      <StyledOption value={"lowestcarbs"}>Lowest carbs</StyledOption>
      <StyledOption value={"highestfat"}>Highest fat</StyledOption>
      <StyledOption value={"lowestfat"}>Lowest fat</StyledOption>
    </StyledSelect>
  );
};
export default SortingController;
