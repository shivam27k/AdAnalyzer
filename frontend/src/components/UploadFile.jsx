import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UploadFile = () => {
    const [file, setFile] = useState(null);
    const navigate = useNavigate();
    const [uploading, setUploading] = useState(false)
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

    const handleUpload = async () => {
        if (!file) return alert("Select a file!");
        const formData = new FormData();
        formData.append("file", file);

        try {
            setUploading(true)
            const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            const filePath = response.data.filePath;
            setUploading(false)
            // Navigate to Analyze page with filePath
            navigate(`/analyze/${encodeURIComponent(filePath)}`);
        } catch (error) {
            alert("File upload failed!");
            setUploading(false)
            console.error(error);
        }
    };

    return (
        <div className="flex flex-col p-4 md:p-10 gap-4 md:gap-10 justify-between md:flex-row">
            <div className="flex flex-1 flex-col gap-5">
                <h1 className={'text-xl font-semibold'}>Select your CSV file and click on Upload button to analyze and get results:</h1>
                <label className="border-2 border-dotted border-gray-400 p-10 text-center flex items-center justify-center bg-blue-50 font-bold w-full rounded-md cursor-pointer relative">
                    {file ? file.name : "Click to Upload a File"}
                    <input
                        type="file"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </label>
                {/* i know a button component can be made here */}
                <button className={`border p-3 cursor-pointer text-lg font-bold ${uploading ? 'bg-gray-500' : 'bg-blue-500'} text-white rounded-md`} onClick={uploading ? null : handleUpload}>
                    {
                        uploading ? 'Uploading...' : 'Upload'
                    }
                </button>
            </div>
            <div className="" >
                <img src="./analyzer.png" className="h-[20rem] md:h-[30rem]" />
            </div>
        </div>
    );
};

export default UploadFile;
