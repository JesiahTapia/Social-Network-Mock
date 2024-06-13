import styles from "./ShareContent.module.css";
//For Material UI ICONS

import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

const ShareContent = () => {
  return (
    <>
      <div className={styles.ShareMain}>
        <div className={styles.ShareWrap}>
          <div className={styles.ShareTop}>
            <img
              src="/assets/Users/1.jpg"
              className={styles.ShareImgProfile}
              height={50}
              width={50}
              alt=""
            />
            <input
              type="text"
              placeholder="Whats up guys?"
              className={styles.ShareInputBox}
            />
          </div>
          {/*  */}
          <div className={styles.ShareBottomLine}></div>
          <div className={styles.ShareBottom}>
            <div className={styles.ShareOptions}>
              <div className={styles.ShareOptionContent}>
                <PhotoLibraryIcon
                  htmlColor="blue"
                  className={styles.ShareIcon}
                />
                <span className={styles.ShareOptText}>Photos & Videos</span>
              </div>

              <div className={styles.ShareOptionContent}>
                <LabelIcon htmlColor="red" className={styles.ShareIcon} />
                <span className={styles.ShareOptText}>Tags</span>
              </div>

              <div className={styles.ShareOptionContent}>
                <LocationOnIcon
                  htmlColor="orange"
                  className={styles.ShareIcon}
                />
                <span className={styles.ShareOptText}>Location</span>
              </div>

              <div className={styles.ShareOptionContent}>
                <InsertEmoticonIcon
                  htmlColor="pink"
                  className={styles.ShareIcon}
                />
                <span className={styles.ShareOptText}>Mood</span>
              </div>
            </div>
            <button className={styles.Btn}>Share</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareContent;
