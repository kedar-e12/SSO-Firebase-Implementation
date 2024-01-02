import React, { useEffect, useState } from "react";
import { storage } from "../config/firebase";
import { ref, uploadBytes, getBytes, getDownloadURL } from "firebase/storage";

function ImageComponent() {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileAdd = async () => {
    if (selectedFile) {
      try {
        const filesFolderRef = ref(storage, `projectFiles/${selectedFile}`);
        await uploadBytes(filesFolderRef, selectedFile);
        // getImages();
      } catch (error) {
        console.error("error", error);
      }
    } else {
      return;
    }
  };
  //   const getImages = async () => {
  //     const pathReference = ref(
  //       storage,
  //       "gs://fir-react-app-91505.appspot.com/projectFiles"
  //     );
  //     console.log("pathReference", pathReference);

  //     const imagesData = await getDownloadURL(pathReference);
  //     console.log("imagesData", imagesData);
  //   };
  //   useEffect(() => {
  //     getImages();
  //   }, []);
  return (
    <div>
      ImageComponent
      <div></div>
      <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
      <button onClick={handleFileAdd}>Add file</button>
    </div>
  );
}

export default ImageComponent;
