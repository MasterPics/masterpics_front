import "../css/module/ImageUploadBox.css";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useRef, useState } from "react";

function ImagePreview({ image, deleteFunc }) {
  return (
    <div className="ImagePreview" draggable>
      <img src={image} alt="preview" />
      <div className="icon_container" onClick={deleteFunc}>
        <i className="fas fa-times"></i>
      </div>
    </div>
  );
}

function ImageUploadBox({ max = 10 }) {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const uploadBoxRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    const imageJSXs = uploadedImages.map((image, index) => {
      const isDeleteImage = (element) => {
        return element === image;
      };

      const deleteFunc = () => {
        uploadedImages.splice(uploadedImages.findIndex(isDeleteImage), 1);
        setUploadedImages([...uploadedImages]);
      };

      return <ImagePreview image={image} deleteFunc={deleteFunc} key={index} />;
    });
    setPreviewImages(imageJSXs);
  }, [uploadedImages]);

  useEffect(() => {
    const uploadBox = uploadBoxRef.current;
    const input = inputRef.current;

    const handleFiles = (files) => {
      for (const file of files) {
        if (!file.type.startsWith("image/")) continue;

        const reader = new FileReader();
        reader.onloadend = (e) => {
          const result = e.target.result;
          if (result) {
            setUploadedImages((state) => [...state, result].slice(0, max));
          }
        };
        reader.readAsDataURL(file);
      }
    };

    const changeHandler = (event) => {
      event.preventDefault();
      event.stopPropagation();
      const files = event.target.files;
      handleFiles(files);
    };

    const dropHandler = (event) => {
      event.preventDefault();
      event.stopPropagation();
      const files = event.dataTransfer.files;
      handleFiles(files);
    };

    const dragOverHandler = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };

    uploadBox.addEventListener("drop", dropHandler);
    uploadBox.addEventListener("dragover", dragOverHandler);
    input.addEventListener("change", changeHandler);

    return () => {
      uploadBox.removeEventListener("drop", dropHandler);
      uploadBox.removeEventListener("dragover", dragOverHandler);
      input.removeEventListener("change", changeHandler);
    };
  }, [max]);

  const id = uuidv4();

  return (
    <div className="ImageUploadBox">
      <label className="drag_or_click" htmlFor={id} ref={uploadBoxRef}>
        <div className="text_box">
          <h3>드래그 또는 클릭하여 업로드</h3>
          <span>권장사항: oooMB 이하 고화질</span>
        </div>
        <div className="icon_box">
          <i className="fas fa-arrow-circle-up"></i>
        </div>
      </label>
      <input type="file" multiple accept="image/*" id={id} ref={inputRef} />
      <div className="preview_wrapper">
        <div className="preview_container">{previewImages}</div>
      </div>
    </div>
  );
}

export default ImageUploadBox;
