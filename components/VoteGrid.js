import VoteCard from "./VoteCard.js";
import VoteInfo from "./VoteInfo";

const VoteGrid = (props) => {
  let company1logo = "/img/square.jpg";
  console.log(props, 16);
  return (
    <div
      className={
        "grid grid-cols-1 xl:grid-cols-4 m-4 mt-64 gap-8 h-screen justify-center animate__animated animate__fadeIn"
      }
    >
      {props.companies.map((card, index) => {
        return (
          <div key={index}>
            <VoteInfo text={card.description} />
            <VoteCard name={card.name} logo={company1logo} />
          </div>
        );
      })}
    </div>
  );
};

export default VoteGrid;
