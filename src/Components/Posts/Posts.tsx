import styles from "./Posts.module.css";

//For MUI

import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TagFacesIcon from "@mui/icons-material/TagFaces";

const Posts = () => {
  return (
    <div className={styles.MainPost}>
      <div className={styles.PostWrap}>
        {/* For Post Top  */}
        <div className={styles.PostTop}>
          <div className={styles.PostTopLeft}>
            <img
              src="/assets/Users/1.jpg"
              className={styles.PostProfileUrl}
              height={36}
              width={36}
              alt=""
            />
            <span className={styles.PostUserName}>Easy Coding</span>
            <span className={styles.PostDate}>20 Sept</span>
          </div>
        </div>

        {/* For Post Center */}
        <div className={styles.PostCenter}>
          <span className={styles.PostDesc}>Life is great!</span>
          <img src="/assets/Posts/1.jpg" className={styles.PostImg} alt="" />
        </div>

        {/* For Post Bottom */}

        <div className={styles.PostBottom}>
          <div className={styles.PostBottomLeft}>
            <ThumbUpAltIcon className={styles.LikeIcon} htmlColor="blue" />
            <FavoriteIcon className={styles.LikeIcon} htmlColor="red" />
            <TagFacesIcon className={styles.LikeIcon} htmlColor="pink" />
            <span className={styles.LikeCounter}>45 People Liked this</span>
            <div className={styles.PostBottomLeft}>
              <span className={styles.PostComment}>10 comments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
