import Link from "next/link";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className="pt-5 w-full flex justify-center">
      <div className="w-full flex justify-evenly">
        <div className={styles.headerContainer}>
          <Link href="/explore">
            <a>Explore</a>
          </Link>
        </div>
        <div className={styles.headerContainer}>
          <Link href="/manage">
            <a>Manage</a>
          </Link>
        </div>
        <div className={styles.headerContainer}>
          <Link href="/launch">
            <a>Launch</a>
          </Link>
        </div>
        <div className={styles.headerContainer}>
          <Link href="/vote">
            <a>Vote</a>
          </Link>
        </div>
        <div className={styles.headerContainer}>
          <Link href="/learn">
            <a>Learn</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
