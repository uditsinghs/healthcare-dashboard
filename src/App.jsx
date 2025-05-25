import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardMainContent from './components/DashboardMainContent';
import './styles/global.css';
import styles from './styles/app.module.css'

function App() {
  return (
    <div className={styles['app-container']}>
      <Sidebar />
      <div className={styles['wrapper']}>
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;
