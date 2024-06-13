import styles from "./RightBar.module.css";
const RightBar = () => {
  return (
    <>
      <div className={styles.RightBar}>
        <div className={styles.RightBarWrap}>
          {/*  */}
          <div className={styles.BirthdayContainer}>
            <img
              src="/assets/giftBox.jpg"
              height={45}
              width={45}
              alt=""
              className={styles.BirthdayImg}
            />
            <span className={styles.BirthdayText}>
              Your Friend "Arnell" has a Birthday today!
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightBar;
