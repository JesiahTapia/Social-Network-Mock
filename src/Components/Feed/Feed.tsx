import React from "react";
import ShareContent from "../ShareContent/ShareContent";
import styles from "./Feed.module.css";
import Posts from "../Posts/Posts";

const Feed = () => {
  return (
    <>
      <div className={styles.Feed}>
        <div className={styles.Feedwrap}>
          <ShareContent />
          {/* For Posts */}
          <Posts />
        </div>
      </div>
    </>
  );
};

export default Feed;
