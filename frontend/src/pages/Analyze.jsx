import { useState } from "react";
import AnalyzeFile from "../components/AnalyzeFile";

const Analyze = () => {
    const [filePath, setFilePath] = useState("");

    return (
        <div>
            <AnalyzeFile filePath={filePath} />
        </div>
    );
};

export default Analyze;
