import React from "react";

import styles from './Button.module.css'

interface Props {
  children: string;
  // can only set these to one of these values
  color?: "primary" | "secondary" | 'danger' ;
  onClick: () => void;
}

// we can give default values here passing the props!!
const Button = ({ children, color = 'primary', onClick }: Props) => {
  return (
    <button className={[styles.btn , styles['btn-' + color]].join(' ')} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
