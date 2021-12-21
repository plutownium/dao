import Wrapper from "../../components/Wrapper";

import VoteGrid from "../../components/VoteGrid";

import { getRandomSetOfN } from "../../getFakeData/getFakeData";

export async function getStaticProps() {
  // TODO: fetch data from the real server, not the fake one.
  let companies = getRandomSetOfN(12);
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
}

export default Explore;
