import useDeveloperService from "@/services/developerService";
import { FC } from "react";
import styles from "@/styles/skills.module.css";
import TreeView from "./TreeView";

interface SkillsProps {
  developerId: number;
}

const Skills: FC<SkillsProps> = ({ developerId }) => {
  const { getSkillsByDevId } = useDeveloperService();
  const { data: skills, isFetched, isFetching } = getSkillsByDevId(developerId);
  const sectionTitle = "SKILLS";
  return (
    isFetched && (
      <>
        <div className={styles.titleContainer}>
          <h1 className={styles.sectionTitle}>{sectionTitle}</h1>
        </div>
        <div className={`container ${styles.treeView}`}>
          <TreeView data={skills} slugPath={"skills"} />
        </div>
      </>
    )
  );
};

export default Skills;
