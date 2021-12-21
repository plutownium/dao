import { useRouter } from "next/router";

import styles from "./Search.module.css";

function Search() {
  const router = useRouter();
  return (
    <div className="w-full">
      <input
        className={`w-full ${styles.searchContainer}`}
        placeholder="Search for projects or project categories..."
        onClick={() => {
          router.push("/explore/search");
        }}
      />
    </div>
  );
}

export default Search;
