import styles from "../styles/sidebar.module.css";
import { FaThLarge, FaHistory, FaCalendarAlt, FaRegCalendarCheck, FaChartBar, FaComments, FaPhone } from "react-icons/fa";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.heading}>
        Health<span className={styles.span}>care.</span>
      </h2>
      <nav className={styles.nav}>
        <div className={styles.section}>
          <span className={styles.sectionTitle}>General</span>
          <ul className={styles.list}>
            <li className={styles.active}>
              <FaThLarge className={styles.icon} />
              Dashboard
            </li>
            <li>
              <FaHistory className={styles.icon} />
              History
            </li>
            <li>
              <FaCalendarAlt className={styles.icon} />
              Calendar
            </li>
            <li>
              <FaRegCalendarCheck className={styles.icon} />
              Appointments
            </li>
            <li>
              <FaChartBar className={styles.icon} />
              Statistics
            </li>
          </ul>
        </div>
        <div className={styles.section}>
          <span className={styles.sectionTitle}>Tools</span>
          <ul className={styles.list}>
            <li>
              <FaComments className={styles.icon} />
              Chat
            </li>
            <li>
              <FaPhone className={styles.icon} />
              Support
            </li>
          </ul>
        </div>
      </nav>
      <div className={styles.setting}>
        <span>Setting</span>
      </div>
    </aside>
  );
}

export default Sidebar;