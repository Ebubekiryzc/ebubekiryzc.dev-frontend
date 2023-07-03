import styles from "@/styles/componentloader.module.css";
import { FC } from "react";

interface ComponentLoaderProps {}

const ComponentLoader: FC<ComponentLoaderProps> = ({}) => {
  return <div className={styles.customLoader}></div>;
};

export default ComponentLoader;
