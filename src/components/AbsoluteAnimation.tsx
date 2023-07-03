import styles from "@/styles/absoluteanimation.module.css";
import { FC } from "react";
import { IconType } from "react-icons/lib";

type Position = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
};

interface AbsoluteAnimationProps {
  reactIcon: IconType;
  position: Position;
  animationVariant: string;
  color: string;
}

const AbsoluteAnimation: FC<AbsoluteAnimationProps> = ({
  reactIcon,
  position,
  animationVariant,
  color,
}) => {
  const ReactIcon = reactIcon;
  return (
    <div>
      <ReactIcon
        className={`effect ${styles[animationVariant]}`}
        style={{ ...position, fontSize: "20px", color: color }}
      />
    </div>
  );
};

export default AbsoluteAnimation;
