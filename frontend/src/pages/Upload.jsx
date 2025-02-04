import { useState } from "react";
import UploadFile from "../components/UploadFile";

const Upload = () => {
    const [filePath, setFilePath] = useState("");

    return (
        <div>
            <UploadFile setFilePath={setFilePath} />
        </div>
    );
};

export default Upload;
