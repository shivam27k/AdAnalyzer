import { model } from "./googleAiService.js";
import { keywordOptimizationTool } from "./keywordOptimizationService.js";
import { extractAdAnalysisData } from "./adAnalysisService.js";
import { agent } from "./agentService.js";

// ✅ Function to Analyze Ad Performance using Gemini
export const analyzeAdPerformance = async (data) => {
    const prompt = `
    You are an expert Ad Campaign Analyst. Analyze the given ad performance data and return the response in "plain text" format.
    Your analysis should include:

    1. Performance Summary: A concise 5-7 sentence summary of the overall campaign performance.
    2. Keyword Analysis:
       - High-performing keywords: Keywords with high ROAS, low ACOS, high CTR, and strong conversion rates.
       - Low-performing keywords: Keywords with low ROAS, high ACOS, and poor CTR.
    3. Improvement Suggestions:
       - Recommend specific actions (e.g., remove high-ACOS keywords, boost high-performing ones).
       - Provide 2-3 actionable optimization steps.

    Format the response exactly as follows:
    Performance Summary: <summary here>
    High-Performing Keywords: <comma-separated list>
    Low-Performing Keywords: <comma-separated list>
    Suggestions: <bullet points>

    Analyze the following ad campaign data: ${JSON.stringify(data)}
    `;

    const response = await model.invoke(prompt);
    return extractAdAnalysisData(response.content); // ✅ Always returns valid JSON
};

// ✅ Function to Run the Ad Analysis Agent
export const runAdAnalysisAgent = async (adData) => {
    console.log("Running Ad Analysis Agent...");

    const analysis = await analyzeAdPerformance(adData); // ✅ Get cleaned JSON

    let keywordActions = [];
    for (const keyword of analysis.keyword_analysis.high_performers) {
        keywordActions.push(await keywordOptimizationTool.func({ keyword, clicks: 60, acos: 10 }));
    }
    for (const keyword of analysis.keyword_analysis.low_performers) {
        keywordActions.push(await keywordOptimizationTool.func({ keyword, clicks: 80, acos: 35 }));
    }

    let agentOutput = await agent.invoke({
        messages: [
            {
                role: "user",
                content: `Analyze these keywords based on ad performance: ${JSON.stringify(analysis.keyword_analysis)}`,
            },
        ],
    });

    return {
        analysis,
        keywordActions,
        agentOutput
    };
};
