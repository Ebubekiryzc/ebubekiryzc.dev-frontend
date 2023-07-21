import { DeveloperSkill } from "@/models/developerSkill";
import { Skill } from "@/models/skill";
import styles from "@/styles/treeview.module.css";
import { delay, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { FC, ReactElement, useEffect, useRef } from "react";

interface TreeViewProps {
  data: DeveloperSkill[];
  slugPath?: string;
}

const TreeView: FC<TreeViewProps> = ({ data, slugPath }) => {
  const developerSkillsBySkillId: { [key: number]: DeveloperSkill } = {};
  data.forEach((developerSkill) => {
    developerSkillsBySkillId[developerSkill.skill.id] = developerSkill;
  });

  // refs
  const mainContainer = useRef<HTMLDivElement>(null);
  const rootNodes = useRef<Array<HTMLDivElement | null>>([]);
  const inView = useInView(mainContainer, { once: true });
  useEffect(() => {
    if (inView) {
      mainContainer.current?.classList.add(styles.animate);
      rootNodes.current?.forEach((ref) => {
        ref?.classList.add(styles.animate);
        console.log("Merhaba");
      });
    }
  }, [inView, rootNodes]);

  // render function
  const renderData = (
    skill: Skill,
    parentSlugPath?: string,
    indentLevel = 0
  ): ReactElement | null => {
    // slug path
    const skillSlugPath = parentSlugPath
      ? `${parentSlugPath}/${skill.slug}`
      : skill.slug;

    const developerSkill = developerSkillsBySkillId[skill.id];
    if (!developerSkill) {
      return null;
    }

    // variables
    const percentage = developerSkill.percentage;
    const isParent = skill.level === 0;
    const hasChildren = skill.childrens.length > 0;
    const indentationValue = indentLevel * 16;

    // skills
    const skillStyle = {
      marginLeft: `${indentationValue}px`,
    };

    return (
      <div
        key={skill.id}
        style={skillStyle}
        className={isParent ? styles.parentNode : ""}
      >
        <div className={styles.skillInfo}>
          <div className={styles.linkContainer}>
            {skill.image ? (
              <div className={styles.imageContainer}>
                <Image
                  fill
                  src={skill.image}
                  alt={skill.name}
                  className={styles.image}
                />
              </div>
            ) : (
              <div className={styles.circle}></div>
            )}
            <Link
              href={`${slugPath}/${skillSlugPath}`}
              className={styles.skillName}
            >
              {skill.name}
            </Link>
          </div>
          {isParent && hasChildren ? (
            <></>
          ) : (
            <div className={styles.progressBar}>
              <div
                className={styles.progressBarFilled}
                style={{ width: `${percentage}%` }}
              />
            </div>
          )}
        </div>
        {hasChildren && (
          <div className={isParent ? styles.childList : ""}>
            {skill.childrens.map((childSkill) => (
              <React.Fragment key={childSkill.id}>
                {renderData(childSkill, skillSlugPath, indentLevel + 1)}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    );
  };

  const rootSkills = data.filter(
    (developerSkill) => !developerSkill.skill.parent
  );
  return (
    <div className={styles.tree} ref={mainContainer}>
      {rootSkills.map((developerSkill, index) => (
        <div
          key={index}
          ref={(el) => (rootNodes.current[index] = el)}
          className={styles.treeNode}
          // @ts-expect-error
          style={{ "--animation-delay": `${index * 0.25}s` }}
        >
          {renderData(developerSkill.skill)}
        </div>
      ))}
    </div>
  );
};

export default TreeView;
