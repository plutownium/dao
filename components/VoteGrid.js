import VoteCard from "./VoteCard.js";
import VoteInfo from "./VoteInfo";

import { getRandomSetOfN } from "../getFakeData/getFakeData";

export async function getStaticProps(context) {
  let fakeProps = getRandomSetOfN(6);
  console.log(8, fakeProps);
  return {
    props: { fakeProps }, // will be passed to the page component as props
  };
}

const VoteGrid = ({ props }) => {
  let company1logo = "/img/square.jpg";
  return (
    <div
      className={
        "grid grid-cols-1 xl:grid-cols-4 m-4 mt-64 gap-8 h-screen justify-center animate__animated animate__fadeIn"
      }
    >
      {props.map((card) => {
        return (
          <div>
            <VoteInfo text={card.name} />
            <VoteCard logo={company1logo} />
          </div>
        );
      })}
      {/* <VoteCard logo={company1logo} name="Square Inc." />
      <VoteInfo text={company1text} />
      <VoteCard logo={company1logo} name="Square Inc." />
      <VoteInfo text={company1text} />
      <VoteCard logo={company1logo} name="Square Inc." />
      <VoteInfo text={company1text} /> */}
    </div>
  );
};

export default VoteGrid;
