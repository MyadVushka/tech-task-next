import styles from "./AppDownload.module.css";
import Image from "next/image";

const AppDownload = ({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <button className={styles.app_download_wrapper}>
      <Image src={image} alt="store-icon" width={25} height={25} />
      <div className={styles.text_block}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </button>
  );
};
export default AppDownload;
