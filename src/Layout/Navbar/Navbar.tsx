import styles from "./Navbar.module.css";
import Link from "next/link";

//For Material Ui Icons
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";

import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

const Navbar = () => {
  return (
    <>
      <div className={styles.NavbarContainer}>
        <div className={styles.NavbarLeftSide}>
          <Link href="/#">
            <img src="/assets/logo.png" alt="Logo" className={styles.Logo} />
          </Link>
        </div>
        {/* For Middle */}
        <div className={styles.NavbarCenter}>
          <div className={styles.SearchBar}>
            <SearchIcon className={styles.SearchIcon} />
            <input
              type="text"
              placeholder="Search here..."
              className={styles.SearchInputBox}
            />
          </div>
        </div>
        {/* For Right */}
        <div className={styles.NavbarRightSide}>
          <div className={styles.NavbarLinks}>
            {/*  */}
            <Link href="/">
              <span className={styles.NavbarLink}>Home</span>
            </Link>
            {/*  */}
            <Link href="/">
              <span className={styles.NavbarLink}>Login</span>
            </Link>
          </div>
          {/*  */}
          <div className={styles.NavbarIcons}>
            <div className={styles.NavbarIconItem}>
              <PersonIcon />
              <span className={styles.NavbarIconBadge}>7</span>
            </div>
            <div className={styles.NavbarIconItem}>
              <ChatBubbleIcon />
              <span className={styles.NavbarIconBadge}>4</span>
            </div>
            <div className={styles.NavbarIconItem}>
              <NotificationsIcon />
              <span className={styles.NavbarIconBadge}>8</span>
            </div>
          </div>
        </div>
        <img
          src="/assets/Users/1.png"
          width={35}
          height={35}
          className={styles.NavbarUserimg}
          alt=""
        />
      </div>
    </>
  );
};

export default Navbar;
