import { DeveloperProfessionalExperience } from "@/models/developerProfessionalExperience";
import styles from "@/styles/verticaltimeline.module.css";
import { useInView } from "framer-motion";
import Image from "next/image";
import { FC, useEffect, useRef } from "react";

interface VerticalTimelineProps {
  data: DeveloperProfessionalExperience[];
}

const VerticalTimeline: FC<VerticalTimelineProps> = ({ data }) => {
  const mainContainer = useRef<HTMLDivElement>(null);
  const timelineCards = useRef<Array<HTMLDivElement | null>>([]);

  const inView = useInView(mainContainer, { once: true });

  useEffect(() => {
    if (inView) {
      mainContainer.current?.classList.add(styles.animate);
      timelineCards.current?.forEach((ref) => {
        ref?.classList.add(styles.animate);
      });
    }
  }, [inView, mainContainer, timelineCards]);

  return (
    <div
      className={styles.timeline}
      // @ts-expect-error
      style={{ "--duration": `${data.length}s` }}
      ref={mainContainer}
    >
      {data.map((item, index) => (
        <div
          key={index}
          className={styles.timelineContainer}
          style={{ animationDelay: `${index * 1000}ms` }}
          ref={(el) => (timelineCards.current[index] = el)}
        >
          <div className={styles.timelineImageContainer}>
            <Image
              fill
              src={item.professional_experience.company_image}
              alt={item.professional_experience.company_name}
              className={styles.timelineImage}
            />
          </div>
          <div className={styles.textBox}>
            <h2>{item.professional_experience.company_name}</h2>
            <small className={styles.yearsAndExtra}>
              <span className={styles.years}>
                {new Date(item.date_of_start).getMonth()}/
                {new Date(item.date_of_start).getFullYear()} -{" "}
                {new Date(item.date_of_quit).getMonth()}/
                {new Date(item.date_of_quit).getFullYear()}
              </span>
              <strong className={styles.titleText}>
                <em>// {item.professional_experience.title}</em>
              </strong>
            </small>
            <p className={styles.description}>
              {item.professional_experience.description}
            </p>
            <ul>
              {item.professional_experience.professional_experience_tasks.map(
                (task, index) => (
                  <li key={index}>{task}</li>
                )
              )}
            </ul>
            <span className={styles.containerArrow}></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalTimeline;
