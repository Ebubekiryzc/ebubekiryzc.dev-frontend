import { FC } from "react";
import styles from "@/styles/home.module.css";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return <div className={styles.bgWhite}>Page</div>;
};

export default Page;
