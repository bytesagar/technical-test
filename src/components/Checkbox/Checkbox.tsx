import React from "react";
import styles from "./Checkbox.module.css";

interface ICheckboxProps
  extends React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    React.AriaAttributes {}

interface ICheckboxProps {
  label?: string;
  name: string;
  checkboxStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
}

const Checkbox = ({
  label,
  name,
  checkboxStyle,
  containerStyle,
  ...props
}: ICheckboxProps) => {
  return (
    <div style={containerStyle}>
      {label && <span>{label}</span>}
      <input
        type="checkbox"
        name={name}
        className={styles.checkbox}
        {...props}
        style={checkboxStyle}
      />
    </div>
  );
};

export default Checkbox;
