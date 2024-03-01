import React, { FC } from "react";
import styles from "./MyInput.module.css";

interface IMyInput {
    placeholder:string
  classname?: string;
}

const MyInput: FC<IMyInput> = ({ classname,placeholder }) => {
    const classnameStyles = classname ? [classname , styles.MyInput] : [styles.MyInput]

  return <input type="text" className={classnameStyles.join('')} placeholder={placeholder}/>;
};

export default MyInput;
