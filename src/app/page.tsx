"use client";
import PageLoader from "@/components/PageLoader";
import useDeveloperService from "@/services/developerService";
import { FC } from "react";
import styles from "@/styles/home.module.css";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  const { getMainDeveloper } = useDeveloperService();
  const { data: developer, isFetched, isFetching } = getMainDeveloper();

  return isFetching ? (
    <PageLoader />
  ) : (
    isFetched && <div className={styles.homeSection}></div>
  );
};

export default Page;
