import React from "react";
import styles from "./Button.module.css";

interface IButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

interface IButtonProps {
  icon?: string;
  children: React.ReactNode;
  onClick: () => void;
}
const Button = ({ icon, children, onClick, ...props }: IButtonProps) => {
  return (
    <button className={styles.btn} onClick={onClick} {...props}>
      {icon && <span style={{ fontSize: "18px" }}>+</span>}
      {children}
    </button>
  );
};

export default Button;
