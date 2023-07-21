"use client";
import BlobImage from "@/components/BlobImage";
import Button from "@/components/Button";
import ComponentLoader from "@/components/ComponentLoader";
import PageLoader from "@/components/PageLoader";
import ProfessionalExperiences from "@/components/ProfessionalExperiences";
import Skills from "@/components/Skills";
import useDeveloperService from "@/services/developerService";
import styles from "@/styles/home.module.css";
import { FC, Suspense } from "react";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  const { getMainDeveloper } = useDeveloperService();
  const { data: developer, isFetched, isFetching } = getMainDeveloper();

  return isFetching ? (
    <PageLoader />
  ) : (
    isFetched && (
      <main className={styles.home}>
        <section className={styles.landingSection}>
          <div className={`${styles.landingContainer} container`}>
            <div className={styles.textContainer}>
              <h1 className={styles.landingTitle}>
                Merhaba<span className={styles.highLighted}>,</span> Ben{" "}
                {developer.first_name} {developer.last_name}
              </h1>
              <p className={styles.coverLetter}>
                Kullandığım tüm teknolojilerde,{" "}
                <span className={styles.highLighted}>
                  en iyi pratiklere uygun
                </span>{" "}
                ve <span className={styles.highLighted}>temiz</span> kod yazmaya
                özen gösteririm. <br /> <br />
                Sizin için{" "}
                <span className={styles.highLighted}>
                  Full Stack Developer
                </span>{" "}
                veya <span className={styles.highLighted}>Game Developer</span>{" "}
                rollerinde çalışabilirim.
              </p>
              <Button
                className={styles.resumeButton}
                text="CV Görüntüle"
                onClick={() => {
                  // TODO: Change method
                  console.log("Selam");
                }}
              />
            </div>
            <div className={styles.imgContainer}>
              <BlobImage
                animationDuration="30000ms"
                imageUrl={developer.profile_photo}
              />
            </div>
          </div>
        </section>
        <section className={styles.professionalExperiences}>
          <Suspense fallback={<ComponentLoader />}>
            <ProfessionalExperiences developerId={developer.id} />
            <div className={styles.triangle}></div>
          </Suspense>
        </section>
        <section className={styles.skills}>
          <Suspense fallback={<ComponentLoader />}>
            <Skills developerId={developer.id} />
          </Suspense>
        </section>
      </main>
    )
  );
};

export default Page;
