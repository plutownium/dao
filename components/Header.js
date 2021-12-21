import { useState } from "react";

import Link from "next/link";

import styles from "./Header.module.css";

const Header = () => {
  const [highlight, setHighlight] = useState("");

  // There must be a better way to highlight the red color
  // on these Link buttons, but I'm not sure how.
  // There is a bug/usability issue:
  // Only the text functions properly as a link,
  // the surrounding div does not.

  return (
    <div className={`mt-6 pt-2 ${styles.headerMainContainer} brown-background`}>
      <div className="w-full flex justify-evenly">
        <div
          className={`${styles.headerContainer} ${
            highlight === "explore" ? styles.active : null
          }`}
        >
          <Link
            href="/explore"
            onClick={() => {
              setHighlight("explore");
            }}
          >
            <a
              onClick={() => {
                setHighlight("explore");
              }}
            >
              Explore
            </a>
          </Link>
        </div>
        <div
          className={`${styles.headerContainer} ${
            highlight === "manage" ? styles.active : null
          }`}
        >
          <Link
            href="/manage"
            onClick={() => {
              setHighlight("manage");
            }}
          >
            <a
              onClick={() => {
                setHighlight("manage");
              }}
            >
              Manage
            </a>
          </Link>
        </div>
        <div
          className={`${styles.headerContainer} ${
            highlight === "launch" ? styles.active : null
          }`}
        >
          <Link
            href="/launch"
            onClick={() => {
              setHighlight("launch");
            }}
          >
            <a
              onClick={() => {
                setHighlight("launch");
              }}
            >
              Launch
            </a>
          </Link>
        </div>
        <div
          className={`${styles.headerContainer} ${
            highlight === "vote" ? styles.active : null
          }`}
        >
          <Link
            href="/vote"
            onClick={() => {
              setHighlight("vote");
            }}
          >
            <a
              onClick={() => {
                setHighlight("vote");
              }}
            >
              Vote
            </a>
          </Link>
        </div>
        <div
          className={`${styles.headerContainer} ${
            highlight === "learn" ? styles.active : null
          }`}
        >
          <Link
            href="/learn"
            onClick={() => {
              setHighlight("learn");
            }}
          >
            <a
              onClick={() => {
                setHighlight("learn");
              }}
            >
              Learn
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
