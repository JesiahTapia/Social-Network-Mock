import styles from "./SideBarFriendList.module.css";
const SideBarFriendList = () => {
  return (
    <div className={styles.SideBarFriends}>
      <img
        src="/assets/Users/1.jpg"
        height={35}
        width={35}
        className={styles.SideBarFriends}
        alt=""
      />
      <span className={styles.SideBarFriendName}>Mock</span>
    </div>
  );
};

export default SideBarFriendList;
