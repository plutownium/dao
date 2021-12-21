import VoteCard from "./VoteCard.js";
import VoteInfo from "./VoteInfo";

const VoteGrid = (props) => {
  let company1logo = "/img/square.jpg";
  console.log(props.companies.length);
  // console.log(props, 16);
  return (
    <div>
      {props.companies.map((card, index) => {
        console.log(card.name);
        return (
          <div key={index}>
            <VoteCard
              name={card.name}
              description={card.description}
              logo={company1logo}
            />
          </div>
        );
      })}
    </div>
  );
};

export default VoteGrid;
