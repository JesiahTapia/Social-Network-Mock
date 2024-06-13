import styles from "./page.module.css";

//For Components
import Feed from "@/Components/Feed/Feed";
import SideBar from "@/Components/SideBar/SideBar";
import RightBar from "@/Components/RightBar/RightBar";

export default function Home() {
  return (
    <div className={styles.HomeContainer}>
      {/* For Sidebar */}
      <SideBar />
      {/* For feed */}
      <Feed />
      {/* For RightBar */}
      <RightBar />
    </div>
  );
}
