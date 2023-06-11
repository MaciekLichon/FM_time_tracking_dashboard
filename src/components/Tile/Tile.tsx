import styles from './Tile.module.scss';

interface IProps {
  name: string;
  current: number;
  previous: number;
  color: string;
  period: string;
}

const Tile: React.FC<IProps> = ({name, current, previous, color, period}) => {

  const getTime = () => {
    if (period === 'daily') {
      return 'day';
    } else if (period === 'weekly') {
      return 'week';
    } else if (period === 'monthly') {
      return 'month';
    }
  }

  return (
    <div className={`${styles.tile} ${color}`}>

      <div className={styles.tile__content}>
        <div className={styles.tile__header}>
          <p className={styles.tile__name}>{name}</p>
          <button className={styles.tile__button}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={styles.tile__details}>
          <p className={styles.tile__currentValue}>{current}hrs</p>
          <p className={styles.tile__previousValue}>Last {getTime()} - {previous}hrs</p>
        </div>
      </div>

    </div>
  );
}

export default Tile;