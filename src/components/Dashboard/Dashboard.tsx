import styles from './Dashboard.module.scss';
import data from '../../data.json';

import Tile from '../Tile/Tile';
import User from '../User/User';

import { useState } from 'react';

export type IPeriod = 'daily' | 'weekly' | 'monthly';

const Dashboard: React.FC = () => {

  const [period, setPeriod] = useState<IPeriod>('daily');

  return (
    <div className={styles.dashboard}>
      <User period={period} setPeriod={setPeriod} />
      {data.map(item => (
        <Tile 
          name={item.title} 
          current={item.timeframes[period].current} 
          previous={item.timeframes[period].previous}
          color={item.color}
          period={period}
        />
      ))}
    </div>
  );
};

export default Dashboard;