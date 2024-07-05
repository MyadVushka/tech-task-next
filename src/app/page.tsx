/* eslint-disable @next/next/no-img-element */
import styles from "./page.module.css";
import StatisticBlock from "@/components/StatisticBlock";
import AppDownload from "@/components/AppDownload";
import googlePlay from "../../public/googlePlay.svg";
import appStore from "../../public/appStore.svg";
import FeedbackCard from "@/components/FeedbackCard";
import Avatar1 from "../../public/photo4.png";
import Avatar2 from "../../public/photo1.png";
import Avatar3 from "../../public/photo3.png";
import Avatar4 from "../../public/photo2.png";

const Home = () => {
  return (
    <div className={styles.main_wrapper}>
      <div className={styles.text_container}>
        <h1 className={styles.title}>
          Do you want to Learn more <br /> About cryptocurrencies <br />{" "}
          <span className={styles.title_span}>quickly and easily ?</span>
        </h1>
        <h2 className={styles.subtitle}>
          Subscribe to our channel to learn more
        </h2>
        <div className={styles.statistic_section}>
          <StatisticBlock title="20K+" subtitle="subscribes" />
          <StatisticBlock title="19,5K" subtitle="successful cases" />
          <StatisticBlock title="4.8/5" subtitle="rating" />
        </div>
        <button className={styles.subscribe_button}>
          <span>Join Whatsapp</span>
        </button>
        <div className={styles.downloader_section}>
          <AppDownload
            image={googlePlay}
            title="get it on "
            subtitle="Google play"
          />
          <AppDownload
            image={appStore}
            title="Available on the"
            subtitle="App store"
          />
        </div>
      </div>
      <div className={styles.card_container}>
        <div className={styles.image_container}>
          <img
            className={`${styles.crypto_img} ${styles.first_img}`}
            src="/Bitcoin.svg"
            alt="bitcoin"
          />
          <img
            className={`${styles.crypto_img} ${styles.second_img}`}
            src="/Litecoin.svg"
            alt="litecoin"
          />
          <img
            className={`${styles.crypto_img} ${styles.third_img}`}
            src="/Ethereum.svg"
            alt="ethereum"
          />
        </div>
        <div className={styles.feedback_container}>
          <FeedbackCard
            img={Avatar1}
            name="Lorenzo"
            tg_id="@lorenzoo"
            feedback="Amazing Telegram bot! Provides real-time crypto prices and news"
            id="odd"
          />
          <FeedbackCard
            img={Avatar2}
            name="Adalina"
            tg_id="@ada"
            feedback="Must-have bot for crypto traders. Accurate signals and analysis"
            id="even"
          />
          <FeedbackCard
            img={Avatar3}
            name="Alexander"
            tg_id="@alex_x"
            feedback="Superb cryptocurrency bot! Quick updates and reliable data"
            id="odd"
          />
          <FeedbackCard
            img={Avatar4}
            name="Rushana"
            tg_id="@Hana"
            feedback="Efficient and user-friendly bot. Simplifies crypto trading tasks"
            id="even"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
