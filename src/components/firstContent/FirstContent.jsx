import { Link } from "react-router-dom";
import "./style.css";

export const FirstContent = ({ setSelectedCard, selectedCard }) => {
  let cardsToMake = [
    { test: true, another_test: false, name: "jake" },
    { test: false, another_test: true, name: "allen" },
    { test: true, another_test: false, name: "bradley" },
    { test: false, another_test: true, name: "carl" },
    { test: true, another_test: false, name: "denny" },
    { test: false, another_test: true, name: "frank" },
  ];

  const handleJobItemClick = (id) => {
    setSelectedCard(id);
  };

  var link = `/card/${selectedCard}`;

  const renderedItems = cardsToMake.map((item, index) => {
    return (
      <Link key={index} to={`/card/${index + 1}`}>
        <div
          className="card"
          key={index}
          onClick={() => handleJobItemClick(index + 1)}
        >
          <div>{`${item.test} ${item.another_test} ${item.name}`}</div>
        </div>
      </Link>
    );
  });

  return (
    <div className="first-content-wrapper">
      <div className="card-wrapper">{renderedItems}</div>
    </div>
  );
};
