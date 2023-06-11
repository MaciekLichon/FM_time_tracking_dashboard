import styles from './User.module.scss';

import userAvatar from '../../images/image-jeremy.png';

import { IPeriod } from '../Dashboard/Dashboard';

interface IProps {
  period: string;
  setPeriod: React.Dispatch<React.SetStateAction<IPeriod>>;
}


const User:React.FC<IProps> = ({period, setPeriod}) => {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e.currentTarget.value === 'daily' || e.currentTarget.value === 'weekly' || e.currentTarget.value === 'monthly') {
      setPeriod(e.currentTarget.value);
    }
  }

  return (
    <div className={styles.user}>
      <div className={styles.user__data}>
        <img className={styles.user__avatar} alt="user-image" src={userAvatar} /> 
        <div>
          <p className={styles.user__text}>Report for</p>
          <p className={styles.user__name}>Jeremy Robson</p>
        </div>
      </div>
      <div className={styles.user__controls}>
        <button 
          className={`${styles.user__controlsBtn} ${period === 'daily' ? 'active' : ''}`}
          value="daily" 
          onClick={handleClick}>
            Daily
        </button>
        <button 
          className={`${styles.user__controlsBtn} ${period === 'weekly' ? 'active' : ''}`} 
          value="weekly" 
          onClick={handleClick}>
            Weekly
        </button>
        <button 
          className={`${styles.user__controlsBtn} ${period === 'monthly' ? 'active' : ''}`} 
          value="monthly" 
          onClick={handleClick}>
            Monthly
        </button>
      </div>
    </div>
  );
};

export default User;