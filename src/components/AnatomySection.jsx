import { anatomyStatus } from "../data/healthData";
import anatomyImg from "../assets/anatomy.jpeg";
import styles from "../styles/anatomy.module.css";

function AnatomySection() {
  return (
    <div className={styles["anatomy-section"]}>
      <div className={styles["anatomy-image"]}>
        <img src={anatomyImg} alt="Anatomical" className={styles["anatomy-img"]} />
        {anatomyStatus.map((part, index) => (
          <div
            key={index}
            className={styles["anatomy-label"]}
            style={{
              top: part.top,
              left: part.left,
              backgroundColor: part.color,
              color: part.textColor,
            }}
          >
            <span className={styles["anatomy-icon"]}>{part.icon}</span>
            <span className={styles["anatomy-text"]}>{part.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnatomySection;