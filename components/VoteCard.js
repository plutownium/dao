import VoteInfo from "./VoteInfo";

import Image from "next/image";

import styles from "./VoteCard.module.css";

const VoteCard = ({ name, description, logo }) => {
  return (
    <div
      className={`${styles.cardContainer} border-solid border-6 rounded-xl brown-background mb-6`}
    >
      <div className="w-100 flex">
        <div className="m-4 place-items-center">
          <div className={`${styles.logoContainer}`}>
            <Image
              src={logo}
              className={"vote-image"}
              alt="Logo"
              height="100%"
              width="100%"
            />
          </div>
        </div>
        <VoteInfo name={name} description={description} />
      </div>
    </div>
  );
};

export default VoteCard;
