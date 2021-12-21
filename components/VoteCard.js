import VoteInfo from "./VoteInfo";

import Image from "next/image";

import styles from "./VoteCard.module.css";

const VoteCard = ({ name, description, logo }) => {
  return (
    <div
      className={`${styles.cardContainer} border-solid border-6 rounded-xl brown-background mb-6`}
    >
      {/* // FIXME: inner container looks good with my-2 margin class added, but loads inconsistently
      // due to variation in text length. */}
      <div className="w-100 flex justify-center content-center my-1 mr-3">
        <div className="place-items-center">
          {/* // FIXME: image isn't taking 100% of width and height */}
          <div className={`${styles.logoContainer}`}>
            <Image
              src={logo}
              // className={"vote-image"}
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
