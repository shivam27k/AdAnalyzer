import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AnalyzeFile = () => {
    const { filePath } = useParams();
    const [analysis, setAnalysis] = useState(null);
    const [error, setError] = useState(null);

    const cleanJSON = (data) => {
        try {
            return JSON.parse(data.replace(/```json|```/g, "").trim());
        } catch (e) {
            console.error("Invalid JSON format:", e);
            return null;
        }
    };

    useEffect(() => {
        if (!filePath) return;

        console.log("Analyzing file:", filePath);

        axios.post("http://localhost:5000/analyze", { filePath })
            .then(response => {
                const data = response.data.analysis;
                setAnalysis(typeof data === "object" ? data : cleanJSON(data));
                console.log('data', data);
            })
            .catch(error => {
                console.error("Analysis failed:", error);
                setError("Failed to fetch or parse analysis.");
            });

    }, [filePath]);

    return (
        <div>
            <h2>Ad Performance Analysis</h2>
            {error ? (
                <p style={{ color: "red" }}>{error}</p>
            ) : analysis ? (
                <pre style={{ background: "#f4f4f4", padding: "10px", borderRadius: "5px", overflowX: "auto" }}>
                    {JSON.stringify(analysis, null, 2)}
                </pre>
            ) : (
                <p>Analyzing file...</p>
            )}
        </div>
    );
};

export default AnalyzeFile;
