import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const firestoreRef = projectFirestore.collection("images");
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let precentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(precentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const downloadUrl = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        firestoreRef.add({
          url: downloadUrl,
          createdAt: createdAt,
        });
        setUrl(downloadUrl);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
