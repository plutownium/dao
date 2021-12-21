// TODO: put vote Info inside of vote Card

const VoteInfo = ({ description }) => {
  return (
    <div className={"col-span-1 p-8"}>
      <p className={"p-2 text-sm brown-text"}>{description}</p>
      <div className="space-y-2">
        <div className={"border-solid border-4 border-green-500 rounded-lg"}>
          <i style={{ fontSize: "32px" }} className={"bi bi-piggy-bank"}></i>
          <button className={"p-2 brown-text"}>Stake Support</button>
        </div>
        <div className={"border-solid border-4 border-blue-500 rounded-lg"}>
          <i style={{ fontSize: "32px" }} className={"bi bi-people-fill"}></i>
          <button className={"p-2 brown-text"}>Join Project</button>
        </div>
      </div>
    </div>
  );
};
export default VoteInfo;
