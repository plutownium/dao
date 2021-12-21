// TODO: put vote Info inside of vote Card

const VoteInfo = ({ name, description }) => {
  return (
    <div className={""}>
      <div>
        <h1 style={{ fontSize: "22px" }} className={`brown-text text-left`}>
          {name}
        </h1>
        <p className={"pr-2 text-sm brown-text text-left"}>{description}</p>
      </div>
      <div className="flex">
        <div className={"border-solid border-4 border-green-500 rounded-lg"}>
          <i style={{ fontSize: "32px" }} className={"bi-piggy-bank"}></i>
          <button className={"p-2 brown-text"}>Stake Support</button>
        </div>
        <div className={"border-solid border-4 border-blue-500 rounded-lg"}>
          <i style={{ fontSize: "32px" }} className={"bi-people-fill"}></i>
          <button className={"p-2 brown-text"}>Join Project</button>
        </div>
        <div className="flex">
          <p className="p-1 brown-text">$75 / day</p>
          <i
            style={{
              fontSize: "32px",
              width: "50%",
              color: "DarkSeaGreen",
            }}
            className={"m-2 bi bi-chevron-double-up"}
          ></i>
          <i
            style={{ fontSize: "32px", width: "50%", color: "FireBrick" }}
            className={"m-2 bi bi-chevron-double-down"}
          ></i>
        </div>
      </div>
    </div>
  );
};
export default VoteInfo;
