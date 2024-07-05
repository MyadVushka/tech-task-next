import styles from "./FeedbackCard.module.css";
import Image, { StaticImageData } from "next/image";

const FeedbackCard = ({
  img,
  name,
  tg_id,
  feedback,
  id,
}: {
  img: StaticImageData;
  name: string;
  tg_id: string;
  feedback: string;
  id: string;
}) => {
  return (
    
    <div className={`${styles.card_wrapper} ${id === "odd" ? styles.odd : ""}`}>
      <div className={styles.card_content}>
        <Image src={img} width={40} height={40} alt="avatar" />
        <div className={styles.main_text}>
          <p className={styles.name}>{name}</p>
          <p className={styles.tg_id}>{tg_id}</p>
        </div>
      </div>
      <p className={styles.feedback}>{feedback}</p>
    </div>
  );
};

export default FeedbackCard;
