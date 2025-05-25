import { healthCards } from "../data/healthData";
import styles from "../styles/healthCard.module.css";
function HealthStatusCards() {
  return (
    <div className={styles.healthCards}>
      {healthCards.map((card, idx) => (
        <div key={idx} className={styles.healthCardContainer}>
          <div className={styles.nameicon}>
            <img className={styles.icon} src={card.icon} alt="" />
            <h3 className={styles.title}>{card.title}</h3>
          </div>
          <p className={styles.date}>Date: {card.date}</p>
          <div className={styles.status}>
            <div
              style={{  
                width:
                  card.status === "Critical"
                    ? "80%"
                    : card.status === "Warning"
                    ? "60%"
                    : "100%",
                height: "100%",
                backgroundColor: card.color,
                borderRadius: "5px",
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;
