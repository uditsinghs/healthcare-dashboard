import styles from "../styles/header.module.css";
import { FaSearch, FaBell, FaPlus } from "react-icons/fa";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.searchContainer}>
        <FaSearch className={styles.searchIcon} />
        <input className={styles.searchInput} type="text" placeholder="Search" />
        <FaBell className={styles.bellIcon} />
      </div>
      <div className={styles.actions}>
        <div className={styles.avatarWrapper}>
          <img src="https://i.pravatar.cc/30" alt="User Avatar" className={styles.avatar} />
        </div>
        <button className={styles.addBtn}>
          <FaPlus />
        </button>
      </div>
    </header>
  );
}

export default Header;