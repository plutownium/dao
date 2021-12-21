import Wrapper from "../../components/Wrapper";

import VoteGrid from "../../components/VoteGrid";

import { getRandomSetOfN } from "../../getFakeData/getFakeData";

export async function getStaticProps() {
  // TODO: fetch data from the real server, not the fake one. Should just involve importing from "../api/index"
  let companies = getRandomSetOfN(3);
  return {
    props: {
      companies,
    },
  };
}

function Explore({ companies }) {
  console.log(18, companies);
  return (
    <Wrapper>
      <VoteGrid companies={companies} />
    </Wrapper>
  );
  // FIXME: VoteGrid is rendering twice. Commenting it out here stops it from rendering not once but both times.
  // Therefore, the issue is in the VoteGrid component.
}

export default Explore;
