import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AnalysisResults from "./AnalysisResults";

const AnalyzeFile = () => {
    const { filePath } = useParams();
    const [analysis, setAnalysis] = useState(null);
    const [error, setError] = useState(null);
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

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
        if (analysis) return;

        axios.post(`${API_BASE_URL}/analyze`, { filePath })
            .then(response => {
                const data = response.data.analysis;
                setAnalysis(typeof data === "object" ? data : cleanJSON(data));
                console.log('data lund', data);
            })
            .catch(error => {
                console.error("Analysis failed:", error);
                setError("Failed to fetch or parse analysis.");
            });

    }, [filePath]);

    const performance = analysis?.analysis?.performance_summary
    const suggestions = analysis?.analysis?.suggestions
    const lowPerformanceKeywords = analysis?.analysis?.keyword_analysis?.low_performers
    const highPerformanceKeywords = analysis?.analysis?.keyword_analysis?.high_performers
    const keywordActions = analysis?.keywordActions

    return (
        <div className="flex flex-col p-4 md:p-5 lg:p-10 gap-4 md:gap-10 justify-between md:flex-row">
            {error ? (
                <p className="text-red-500">{error}</p>
            ) : analysis ? (
                <AnalysisResults
                    adPerformance={performance} highPerformingKeywords={highPerformanceKeywords}
                    keywordActions={keywordActions}
                    lowPerformingKeywords={lowPerformanceKeywords}
                    suggestions={suggestions}
                />
            ) : (
                <div className="flex flex-col gap-4 w-full p-10 md:gap-6 lg:gap-10">
                    <p className="text-center text-4xl font-semibold ">Wait while we get the results</p>
                    <p className="text-center text-xl text-gray-500 animate-blink">Analyzing file...</p>
                </div>
            )}
        </div>
    );
};

export default AnalyzeFile;
