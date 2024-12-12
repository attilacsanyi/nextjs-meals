"use client";
import { useRef } from "react";
import classes from "./image-picker.module.css";

const ImagePicker = ({ label, name }: { label: string; name: string }) => {
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handlePickClickImage = () => {
    imageInputRef.current?.click();
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          ref={imageInputRef}
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          className={classes.input}
        />
        <button
          type="button"
          className={classes.button}
          onClick={handlePickClickImage}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
