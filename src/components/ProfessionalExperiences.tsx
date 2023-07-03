import { AnimationType, Colors } from "@/lib/enums";
import useDeveloperService from "@/services/developerService";
import styles from "@/styles/professionalexperiences.module.css";
import { FC } from "react";
import {
    FaAsterisk,
    FaCircleNotch,
    FaPlus
} from "react-icons/fa";
import AbsoluteAnimation from "./AbsoluteAnimation";
import VerticalTimeline from "./VerticalTimeline";

interface ProfessionalExperiencesProps {
  developerId: number;
}

const ProfessionalExperiences: FC<ProfessionalExperiencesProps> = ({
  developerId,
}) => {
  const { getProfessionalExperiencesByDevId } = useDeveloperService();
  const { data: professionalExperiences, isFetched } =
    getProfessionalExperiencesByDevId(developerId);
  const sectionTitle = "PROFESSIONAL EXPERIENCES";

  return (
    isFetched && (
      <>
        <div className={styles.backgroundAnimations}>
          <AbsoluteAnimation
            reactIcon={FaAsterisk}
            position={{ top: "50%", left: "3%" }}
            animationVariant={AnimationType.SPIN}
            color={Colors.GREEN_COLOR}
          />
          <AbsoluteAnimation
            reactIcon={FaPlus}
            position={{ top: "20%", left: "7%" }}
            animationVariant={AnimationType.SPIN}
            color={Colors.ORANGE_COLOR}
          />
          <AbsoluteAnimation
            reactIcon={FaCircleNotch}
            position={{ top: "40%", right: "7%" }}
            animationVariant={AnimationType.SPIN}
            color={Colors.RED_COLOR}
          />
          <AbsoluteAnimation
            reactIcon={FaPlus}
            position={{ top: "37%", right: "37%" }}
            animationVariant={AnimationType.PULSE_AND_SCALE}
            color={Colors.DARK_BLUE_COLOR}
          />
          <AbsoluteAnimation
            reactIcon={FaCircleNotch}
            position={{ bottom: "37%", left: "25%" }}
            animationVariant={AnimationType.PULSE_AND_SCALE}
            color={Colors.OPPOSITE_BACKGROUND_COLOR}
          />
          <AbsoluteAnimation
            reactIcon={FaAsterisk}
            position={{ bottom: "5%", right: "10%" }}
            animationVariant={AnimationType.BOUNCE}
            color={Colors.BACKGROUND_COLOR}
          />
        </div>
        <div className={styles.titleContainer}>
          <h1 className={styles.sectionTitle}>{sectionTitle}</h1>
        </div>
        <VerticalTimeline data={professionalExperiences} />
      </>
    )
  );
};

export default ProfessionalExperiences;
