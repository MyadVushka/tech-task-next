import styles from "./StatisticBlock.module.css";

const StatisticBlock = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className={styles.statistic_block_wrapper}>
      <p className={styles.title}>{title}</p>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
};

export default StatisticBlock;
