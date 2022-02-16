import React, { useRef, useState } from "react";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";

import styles from "./FileUploader.module.scss";

export const FileUploader = ({ disabled = false, onFileSelect, children }) => {
  const fileInput = useRef(null);

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    onFileSelect(file);
    clearInputFile();
  };
  const clearInputFile = () => {
    setTimeout(() => {
      const input = fileInput.current;
      if (input) input.value = "";
    }, 100);
  };

  const handleButtonClick = () => {
    fileInput.current && fileInput.current.click();
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        ref={fileInput}
        type="file"
        onChange={handleFileInput}
      />
      <Button disabled={disabled} primary onClick={handleButtonClick}>
        <Text bold>{children}</Text>
      </Button>
    </div>
  );
};
