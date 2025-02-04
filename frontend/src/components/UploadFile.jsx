import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UploadFile = ({ setFilePath }) => {
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const handleUpload = async () => {
        if (!file) return alert("Select a file!");
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post("http://localhost:5000/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            const filePath = response.data.filePath;
            console.log("File uploaded:", filePath);

            // Navigate to Analyze page with filePath
            navigate(`/analyze/${encodeURIComponent(filePath)}`);
        } catch (error) {
            alert("File upload failed!");
            console.error(error);
        }
    };

    return (
        <div>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default UploadFile;
