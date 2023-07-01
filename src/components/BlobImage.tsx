import { FC } from "react";
import styles from "@/styles/blobimage.module.css";

interface BlobImageProps {
  imageUrl: string;
  animationDuration: string;
}

const BlobImage: FC<BlobImageProps> = ({ imageUrl, animationDuration }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 500 600"
    >
      <defs>
        <clipPath id="shape">
          <path id="blob">
            <animate
              attributeName="d"
              dur={animationDuration}
              repeatCount="indefinite"
              values="
              M420.38273,351.41326Q366.9142,452.82652,264.89276,427.02023Q162.87132,401.21393,94.98732,325.60697Q27.10333,250,79.75871,148.12648Q132.4141,46.25297,246.34498,52.16837Q360.27586,58.08377,417.06356,154.04188Q473.85126,250,420.38273,351.41326Z;
              M391,321Q332,392,235,418Q138,444,100.5,347Q63,250,105,160.5Q147,71,248.5,74Q350,77,400,163.5Q450,250,391,321Z;
              M401.59764,339.54586Q353.19527,429.09173,247.86856,432.76099Q142.54184,436.43026,94.44421,343.21513Q46.34657,250,93.2669,154.44421Q140.18723,58.88842,244.33664,69.07967Q348.48605,79.27092,399.24303,164.63546Q450,250,401.59764,339.54586Z;
              M411.5,331.5Q344,413,234.5,439.5Q125,466,107,358Q89,250,118,161Q147,72,258.5,57.5Q370,43,424.5,146.5Q479,250,411.5,331.5Z;"
            ></animate>
          </path>
        </clipPath>
      </defs>
      <g clipPath="url(#shape)" id={styles.svgContainer}>
        <image
          className={styles.blobImage}
          x="-5%"
          y="-10%"
          width="110%"
          height="110%"
          xlinkHref={imageUrl + "#xywh=0,0,500,500"}
          preserveAspectRatio="xMidYMid meet"
        ></image>
      </g>
    </svg>
  );
};

export default BlobImage;
