import { FirstContent } from "../FirstContent/FirstContent";
import { SecondContent } from "../SecondContent/secondContent";

export const Home = ({ setSelectedCard, selectedCard }) => {
  return (
    <>
      <FirstContent
        setSelectedCard={setSelectedCard}
        selectedCard={selectedCard}
      />
      <SecondContent />
    </>
  );
};
