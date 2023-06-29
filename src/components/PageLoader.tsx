import styles from "@/styles/pageloader.module.css";
import { FC } from "react";

interface PageLoaderProps {}

const PageLoader: FC<PageLoaderProps> = ({}) => {
  return (
    <div className={styles.content}>
      <div className={styles.fingers}>
        <div className={styles.finger}>
          <div className={styles.marks}>
            <div className={styles.mark}></div>
            <div className={styles.mark}></div>
          </div>
          <div className={styles.nail}></div>
        </div>
        <div className={styles.finger}>
          <div className={styles.marks}>
            <div className={styles.mark}></div>
            <div className={styles.mark}></div>
          </div>
          <div className={styles.nail}></div>
        </div>
        <div className={styles.finger}>
          <div className={styles.marks}>
            <div className={styles.mark}></div>
            <div className={styles.mark}></div>
          </div>
          <div className={styles.nail}></div>
        </div>
        <div className={styles.finger}>
          <div className={styles.marks}>
            <div className={styles.mark}></div>
            <div className={styles.mark}></div>
          </div>
          <div className={styles.nail}></div>
        </div>
        <div className={styles.thumb}></div>
      </div>
      <div className={styles.keyboard}>
        <div className={styles.keys}>
          <div className={styles.key}>C</div>
          <div className={styles.key}>O</div>
          <div className={styles.key}>D</div>
          <div className={styles.key}>E</div>
          <div className={styles.key}></div>
        </div>
        <div className={styles.keyHolder}></div>
      </div>
    </div>
  );
};

export default PageLoader;
