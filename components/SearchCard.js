import styles from "./SearchCard.module.css";

function SearchCard({ name }) {
  return (
    <div
      className={`${styles.searchCardContainer} brown-background mb-5 place-items-center`}
    >
      <p>{name}</p>
    </div>
  );
}

export default SearchCard;
