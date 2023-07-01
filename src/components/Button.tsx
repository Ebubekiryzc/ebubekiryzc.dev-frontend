import { FC } from "react";
import styles from "@/styles/button.module.css";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: FC<ButtonProps> = ({ text, className, ...rest }) => {
  return (
    <button className={`${styles.buttonComponent} ${className}`} {...rest}>
      {text}
    </button>
  );
};

export default Button;
