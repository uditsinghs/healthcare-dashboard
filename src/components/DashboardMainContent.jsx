import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";
import styles from "../styles/dashboard.module.css";
import AppointmentsCard from "./AppointmentsCard";
function DashboardMainContent() {
  return (
    <main className={styles["main"]}>
      <div className={styles.headingTop}>
      <h1 className={styles["heading"]}>Dashboard</h1>
      <p>This Week <span>^</span></p>
      </div>


      <div className={styles["dashboard-flex"]}>
        {/* anatomy-section */}
        <div className={styles["anatomy-section"]}>
          <div className={styles["anatomy"]}>
            <AnatomySection />
            <HealthStatusCards />
          </div>

          <div className={styles["activity-feed"]}>
            <ActivityFeed />
          </div>
        </div>

        {/* calender view */}

        <div className={{display: 'flex',width:'50%'}}>
          <CalendarView />
          <AppointmentsCard />
          <UpcomingSchedule />
        </div>
      </div>
    </main>
  );
}

export default DashboardMainContent;
