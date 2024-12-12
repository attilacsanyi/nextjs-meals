"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";

const ImagePicker = ({ label, name }: { label: string; name: string }) => {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handlePickClickImage = () => {
    imageInputRef.current?.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // We allow only one file to be picked
    const file = event.target.files?.[0];
    setPickedImage(file ? URL.createObjectURL(file) : null);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user"
              fill
            />
          )}
        </div>
        <input
          ref={imageInputRef}
          type="file"
          id={name}
          name={name}
          onChange={handleImageChange}
          required
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
