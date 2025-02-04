import { processCSV } from "../services/csvService.js";
import { runAdAnalysisAgent } from "../services/runAdAnalysisAgent.js";
import fs from "fs";

export const analyzeAdPerformance = async (req, res) => {
    const { filePath } = req.body;
    if (!fs.existsSync(filePath)) return res.status(404).json({ error: "File not found" });

    try {
        const csvData = await processCSV(filePath);
        const analysis = await runAdAnalysisAgent(csvData);
        res.json({ message: "Analysis complete", analysis });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
