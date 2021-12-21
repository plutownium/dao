import Wrapper from "../../components/Wrapper";

import SearchGrid from "../../components/SearchGrid";

import { getRandomSetOfN } from "../../getFakeData/getFakeData";

export async function getStaticProps() {
  // TODO: fetch data from the real server, not the fake one. Should just involve importing from "../api/index"
  let companies = getRandomSetOfN(24);
  return {
    props: {
      companies,
    },
  };
}

function Search({ companies }) {
  return (
    <Wrapper>
      <SearchGrid companies={companies} />
    </Wrapper>
  );
  // FIXME: VoteGrid is rendering twice. Commenting it out here stops it from rendering not once but both times.
  // Therefore, the issue is in the VoteGrid component.
}

export default Search;
