import VoteCard from "./VoteCard.js";

const VoteGrid = ({ companies }) => {
  let company1logo = "/img/square.jpg";
  console.log(companies.length);
  // console.log(props, 16);
  return (
    <div>
      {companies.map((card, index) => {
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
